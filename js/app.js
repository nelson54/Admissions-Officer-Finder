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
appController = function() {
	
	this.setMap = function(mapView){
		if(this.currentMapView){
			$('#no-menu-content div.map').empty();
		}
		this.currentMapView = window.currentMapView = mapView;
		mapView.drawMap();
		mapView.drillDownCallback();
	}
	
    this.highlight = function (area, type) {
    	if ( type === "state" ) {
	        if (area !== "MI") {
	            var special = false;
	            var states = officersCollection.stateLookup[area].states;
	        } else {
	            var special = true;
	            var states = [];
	        };
	        formView.highlight(area);
        	window.currentMapView.highlight(area, states, special);
	    } else {
	    	var special = false;
	    	var counties = officersCollection.countyLookup[area].counties;
	    	formView.highlight(area);
	    	window.currentMapView.highlight(area, counties, special);
	    }
    };

    this.choose = function (area, type) {
        window.currentMapView.chooseArea(area);
        if (type === "state"){
	        if (area !== "MI") {
	            new modal(officersCollection.stateLookup[area].id);
	        } else {
	            window.front.setMap(window.miMapView);
	        };
	    } else {
	    	new modal(officersCollection.countyLookup[area].id);
	    };
    };

    this.reset = function (formReset) {
    	if (!stopReset){
            formView.reset();
            window.currentMapView.reset();
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
UsMapView = function () {
	this.self = this;
	this.states = [];
    this.defaultColor = "#d3d3d3";
    this.highlightColor = "#777777";
    this.sectionHighlightColor = "#bbbbbb";
    this.specialHighlightColor = "#CC0033";
    this.drillDownCallback = function(){window.formView = new drillDownFormView( false, "state", stateList )};
	this.areaAttr = {
	  "fill": "#d3d3d3",
	  "stroke": "#fff",
	  "stroke-opacity": "1",
	  "stroke-linejoin": "round",
	  "stroke-miterlimit": "4",
	  "stroke-width": "0.75",
	  "stroke-dasharray": "none"
	};

    this.setup = function (stte) {
    	
            stte.color = Raphael.getColor();
            stte[0].style.cursor = "pointer";
            stte[0].onmousedown = function () {
                front.choose(this.raphael.name, "state");
            };
            stte[0].onmouseover = function () {
                if (window.current != this.raphael.name && window.mapHover) {
                    window.current = this.raphael.name;
                    front.highlight(current, "state");
                }
            };
            stte[0].onmouseout = function () {
                window.current = null;
                front.reset(true);
            };
            return stte;
        }

	this.drawMap = function(){
		if(window.backButtonInstance){
			window.backButtonInstance.destroy();
		}
		this.currentMapPaper = window.currentMapPaper = Raphael("united_states", 1000, 600);
		for (var state in usMap) {
	        var path = this.currentMapPaper.path(usMap[state]).attr(this.areaAttr);
	        path.name = state.toUpperCase();
	        window.usRaphael[state.toUpperCase()] = path;
	        this.states.push(path);
	    };
	    this.states.map(this.setup);
	};

    this.reset = function () {
        for (var state in window.usRaphael) {
            window.usRaphael[state].animate({
                fill: mapView.defaultColor
            }, 100);
        }
        this.currentMapPaper.safari();
    };

    this.chooseArea = function (area) {
        this.highlightArea(area, false, this.specialHighlightColor);
    };

    this.highlight = function (area, section, isSpecialArea) {
        if (isSpecialArea === true) {
            var color = this.specialHighlightColor
        } else {
            var color = this.highlightColor
        }
        section.map(this.highlightArea, this.self);
        this.highlightArea(area, false, color);
    };

    this.highlightArea = function (area, position, color) {
        if (typeof position === "number") {
            var color = this.sectionHighlightColor;
        }
        window.usRaphael[area.toUpperCase()].animate({
            fill: color
        }, 100);
    };
};

MiMapView = function () {
	this.self = this;
	this.counties = [];
    this.defaultColor = "#d3d3d3";
    this.highlightColor = "#777777";
    this.sectionHighlightColor = "#bbbbbb";
    this.specialHighlightColor = "#CC0033";
    
    this.setupAreaList = function(area){
    	return({abbr: area.replace(/. /g, "_").replace(/ /g, "_") , title : area});
    }
    
    this.drillDownCallback = function(){window.formView = new drillDownFormView(false, "county", { options : stateCollection.lookup["MI"]["counties"].map(this.setupAreaList) } ) };
	this.areaAttr = {
	  "fill": "#d3d3d3",
	  "stroke": "#fff",
	  "stroke-opacity": "1",
	  "stroke-linejoin": "round",
	  "stroke-miterlimit": "4",
	  "stroke-width": "0.75",
	  "stroke-dasharray": "none"
	};
	
    this.setup = function (cnty) {
            cnty.color = Raphael.getColor();
            cnty[0].style.cursor = "pointer";
            cnty[0].onmousedown = function () {
                front.choose(this.raphael.name, "county");
            };
            cnty[0].onmouseover = function () {
                if (window.current != this.raphael.name && window.mapHover) {
                    window.current = this.raphael.name;
                    front.highlight(current, "county");
                }
            };
            cnty[0].onmouseout = function () {
                window.current = null;
                front.reset(true);
            };
            return cnty;
        }

	this.drawMap = function(){
		new miBackButton();
		this.currentMapPaper = window.currentMapPaper = Raphael("michigan", 700, 700);
		for (var cnty in miMap) {
	        var path = this.currentMapPaper.path(miMap[cnty]).attr(this.areaAttr);
	        path.name = cnty;
	        window.miRaphael[cnty] = path;
	        this.counties.push(path);
	    };
	    this.counties.map(this.setup);
	};

    this.reset = function () {
        for (var cnty in miRaphael) {
            miRaphael[cnty].animate({
                fill: mapView.defaultColor
            }, 100);
        }
        this.currentMapPaper.safari();
    };

    this.chooseArea = function (area) {
        this.highlightArea(area, false, this.specialHighlightColor);
    };

    this.highlight = function (area, section, isSpecialArea) {
        if (isSpecialArea === true) {
            var color = this.specialHighlightColor
        } else {
            var color = this.highlightColor
        }
        section.map(this.highlightArea, this.self);
        this.highlightArea(area, false, color);
    };

    this.highlightArea = function (area, position, color) {
        if (typeof position === "number") {
            var color = this.sectionHighlightColor;
        }
        window.miRaphael[area].animate({
            fill: color
        }, 100);
    };
};

function miBackButton(){
	this.render = function(){
		window.backButtonInstance = this;
	    var miBackSource = $("#mi-back-button").html();
	    var miBackTemplate = Handlebars.compile(miBackSource);
		var miBackHtml = miBackTemplate();
		$("#head .nav").append(miBackHtml);
	}
	
	this.destroy = function(){
		window.backButtonInstance = false;
		$("#head > .nav").html("");
	}
	
	this.render();
}

function drillDownFormView(area, type, areaList) {
	this.type = type;
    var drillDownSource = $("#drilldown-form-template").html();
    var drillDownTemplate = Handlebars.compile(drillDownSource);
    var drillDownContext = areaList;
	var drillDownHtml = drillDownTemplate(drillDownContext);
    $("#drilldowndiv").remove();
    $("#no-menu-content").prepend(drillDownHtml);

    if (area) {
        $("form#drillDown select option[value='" + area + "']").attr("selected", "selected");
    }

    $("form#drillDown select").change( function () {
        var selection = $("form#drillDown select").val();
        front.choose(selection, type);
    } );
    
    this.highlight = function (option) {
        $('form#drillDown select option[value="' + option + '"]').attr("selected", "selected");
    };

    this.reset = function () {
        $('form#drillDown select option[value="none"]').attr("selected", "selected");
    };
}

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

makeId = function(label){
	idLabel = label.toString().replace(/. /g, "_");
	idLabel = idLabel.replace(/ /g, "_");
	return ( idLabel );
}

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
        this.self.stateLookup[states[s].toString().toUpperCase()] = this.self.data[pointer - 1];
    }
    for (var c in counties) {
        this.self.countyLookup[makeId(counties[c])] = this.self.data[pointer - 1];
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