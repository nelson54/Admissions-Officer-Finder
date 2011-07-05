  officerModel = function(){
  	this.id = "";
  	this.name = "";
  	this.title = "";
  	this.states = [];
  	this.image = "";
  	this.getStates = function(){
  	  return this.states();
  	};
  };
  
  usMapView = function(){
  	this.defaultColor = "#d3d3d3";
  	this.highlightColor = "#777777";
	this.sectionHighlightColor = "#bbbbbb";
  	this.specialHighlightColor = "#CC0033";
  	
  	this.reset = function(){
      for(var state in usRaphael){ usRaphael[ state ].animate({fill: usMapView.defaultColor }, 100); }
      R.safari();
  	};

	this.selected = function(state, section){
		this.highlightSection(section, usMapView.sectionHighlightColor);
		this.highlightState(state, usMapView.highlightColor);
	}

  	this.highlightSection = function( section, color ){
  	  section.map( highlightState, color );
  	};

  	this.highlightState = function(state, color){
  	  usRaphael[ state ].animate({ fill: color }, 100);
  	};
  };

  drillDownFormView = function(){
	this.highlightState = function(state){
	  alert('state');
	};

    this.reset = function(){
	  alert('clear');
	};
  };

  appController = function(){
  	this.highlight = function(){
	   if (object !== "mi"){ var special = false }else{ var special = true }
       mapView.highlight(object, officerLookup[object].states, special);
  	};
  	
  	this.choose = function(){
	   mapView.chooseState(object);
	   if (object !== "mi"){
          new modal(officerLookup[object].id);
       } else {
	 	  michiganModal();
       };
  	}

  	this.reset = function(){
  		
  	};
  };
  
officerModel = function(fullname, title, email, states, counties, territories, qna){
	this.id = fullname.replace(" ", "_");
	
	this.title = title;
	
	this.email = email;
	
	this.states = states;
	
	this.counties = counties;
	
	this.territories = territories;
	
	this.qna = qna;
}

stateModel = function(id, name, counties){
	this.id = id;
	
	this.name = name;
	
	this.counties = counties;
}

collection = function(model){
	this.model = model;
	this.add = function(obj){
		this.data.push( new this.model(obj) );
	};
	this.data = [];
}

officerCollection = new collection(officerModel);

officerCollection.lookup = {};

officerCollection.add = function(fullname, title, email, states, counties, territories, qna){
	var pointer = officerCollection.data.push( new officerCollection.model( fullname, title, email, states, counties, territories, qna ) );
	officerCollection.data[ pointer ].reference = officerCollection.data[ pointer ];
	officerCollection.lookup[ officerCollection.data[ pointer ].id ] = officerCollection.data[ pointer ];
}

stateCollection = new collection(stateModel);

stateCollection.lookup = {};

stateCollection.add = function( id, name, counties ){
	var pointer = stateCollection.data.push( new stateCollection.model(  id, name, counties ) );
	stateCollection.data[ pointer ].reference = stateCollection.data[ pointer ];
	stateCollection.lookup[ stateCollection.data[ pointer ].id ] = stateCollection.data[ pointer ];
}
