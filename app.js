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
  
  officerCollection = function(){
  	
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