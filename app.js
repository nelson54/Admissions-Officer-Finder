// Abstract data type collection

collection = function (model) {
	this.self = this;
    this.model = model;
    this.add = function (obj) {
        this.data.push(new this.model(obj));
    };
    this.data = [];
}

modal = function (id) {
	this.self = this;
    this.selector =
    	function (id) {
        return $("#" + id);
    };

    this.clickHandler = function (id, func) {
        $("a.close").click(function () {
            func(id)
        });
    };

    this.show = function (id) {
        this.selector(id).show();
        front.stopReset(true);
        location.hash = id;
        window.mapHover = false;
        $(".modal-background").show();
        
        $('.office-head-bottom').cycle({
            fx: 'fade',
            next: '.next',
            prev: '.prev'
        });
    };

    this.hide = function ( id ) {

        front.stopReset(false);
		window.formReset = true;
        window.mapHover = true;
        front.reset();
        
        $(".modal-background").hide();
        id.hide();
        location.hash = "";
    };

    this.show(id);
    this.clickHandler(this.selector(id), this.hide);
};

// Application Implementation

appController = function(map) {
	
    this.highlight = function (state) {
        if (state !== "mi") {
            var special = false
            var states = officersCollection.stateLookup[state].states;
        } else {
            var special = true;
            var states = [];
        };

        formView.highlightState(state);
        map.highlight(state, states, special);
    };

    this.choose = function (state) {
        map.chooseState(state);
        if (state !== "mi") {
            new modal(officersCollection.stateLookup[state].id);
        } else {
            michiganModal();
        };
    };

    this.reset = function (formReset) {
    	if (!stopReset){
            formView.reset();
            map.reset();
       }
    };
    
    this.stopReset = function (bool){
    	window.stopReset = bool;
    }
};

// Application Models

officerModel = function (fullname, title, email, states, counties, territories, qna, getStateName){

	
	this.getTerritories = function(counties, states){
    	if ( counties.length === 0 ){
    		var countyListStr = "";
    	}
    	if ( counties.length > 0 ){
    		var countyListStr = counties.join(", ");
    	}
    	if ( counties.length === 1 ){
    		var countyListStr = counties[0];
    	}
    	if (states.length === 0){
    		var stateListStr = "";
    	}
    	if (states.length === 1){
    		var stateListStr = " and the state of " + getStateName(states[0]);
    	}
    	if (states.length > 1){
    		var stateListStr = " and the states " + states.map(getStateName).join(", ");
    	}
    	return (countyListStr + stateListStr);
    };
	
    this.id = fullname.replace(/ /g, "_");
    
    this.fullname = fullname;
    
    this.title = title;

    this.email = email;

    this.states = states;

    this.counties = counties;

    this.territory = this.getTerritories(counties, states);

    this.qna = qna;
}

stateModel = function (id, name, counties) {
    this.id = id;

    this.name = name;

    this.counties = counties;

    this.reference = undefined;
}



// View Interfaces
usMapView = function () {
	this.self = this;
    this.defaultColor = "#d3d3d3";
    this.highlightColor = "#777777";
    this.sectionHighlightColor = "#bbbbbb";
    this.specialHighlightColor = "#CC0033";

    this.reset = function () {
        for (var state in usRaphael) {
            usRaphael[state].animate({
                fill: mapView.defaultColor
            }, 100);
        }
        R.safari();
    };

    this.chooseState = function (state) {
        this.highlightState(state, false, this.specialHighlightColor);
    };

    this.highlight = function (state, section, isSpecialArea) {
        if (isSpecialArea === true) {
            var color = this.specialHighlightColor
        } else {
            var color = this.highlightColor
        }
        section.map(this.highlightState, this.self);
        this.highlightState(state, false, color);
    };

    this.highlightState = function (state, position, color) {
        if (typeof position === "number") {
            var color = this.sectionHighlightColor;
        }
        usRaphael[state].animate({
            fill: color
        }, 100);
    };
};

function renderDrillDownForm(state) {
    var drillDownSource = $("#drilldown-form-template").html();
    var drillDownTemplate = Handlebars.compile(drillDownSource);
    var drillDownContext = stateList;
	var drillDownHtml = drillDownTemplate(drillDownContext);
    $("#drilldowndiv").remove();
    $("#no-menu-content").prepend(drillDownHtml);

    if (state) {
        $("form#drillDown select[name='states'] option[value='" + state + "']").attr("selected", "selected");
    }

    $("form#drillDown select[name='states']").change(function () {
        var state = $("form#drillDown select[name='states']").val().toLowerCase();
        renderDrillDownForm(state);
        front.choose(state);
    });
}

function drillDownFormView () {
    this.highlightState = function (state) {
        $('select[name="states"] option[value="' + state.toUpperCase() + '"]').attr("selected", "selected");
    };

    this.reset = function () {
        $('select[name="states"] option[value="none"]').attr("selected", "selected");
    };

    $('select[name="states"] option').mouseenter(function (e) {
        front.highlight($(e.target).attr("value").toLowerCase());
    })
    $('select[name="states"] option').mouseout(function (e) {
        front.reset(false);
    })
};

function michiganModal() {
    var drillDownSource = $("#modal-form-template").html();
    var drillDownTemplate = Handlebars.compile(drillDownSource);
    var drillDownContext = {};

    drillDownContext['county'] = stateCollection.lookup["MI"]["counties"];
    var drillDownHtml = drillDownTemplate(drillDownContext);

    $("#modals").prepend(drillDownHtml);

    new modal("modal-form");

    $("form#modal-form-county-search select[name='counties']").change(function () {
        new modal(officersCollection.countyLookup[$("form#modal-form-county-search select[name='counties']").val()].id);
        return false;
    })
    return false;
}


// Collections
// Define the officers collection.



officersCollection = new collection(officerModel);
officersCollection.lookup = {};
officersCollection.stateLookup = {};
officersCollection.countyLookup = {};
officersCollection.template = Handlebars.compile($("#officer-template").html());

officersCollection.add = function (fullname, title, email, states, counties, territories, qna, getStateName ) {
    var pointer = this.self.data.push(new this.self.model(fullname, title, email, states, counties, territories, qna, getStateName));
    this.self.data[pointer - 1].reference = this.self.data[pointer - 1];
    this.self.lookup[this.self.data[pointer - 1].id] = this.self.data[pointer - 1];
    for (var s in states) {
        this.self.stateLookup[states[s]] = this.self.data[pointer - 1];
    }
    for (var c in counties) {
        this.self.countyLookup[counties[c]] = this.self.data[pointer - 1];
    }

    $('div#modals').append(this.self.template(this.self.data[pointer - 1]));
}


// Implement collection to create a officers collection.

stateCollection = new collection(stateModel);
stateCollection.lookup = {};

stateCollection.add = function (id, name, counties) {
    var pointer = this.self.data.push(new this.self.model(id, name, counties));
    this.self.data[pointer - 1].reference = this.self.data[pointer - 1];
    this.self.lookup[this.self.data[pointer - 1].id] = this.self.data[pointer - 1];
}

stateCollection.getStateName = function(state){
	return stateCollection.lookup[state.toUpperCase()].name;
};