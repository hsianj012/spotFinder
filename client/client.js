Meteor.startup(function(){
  Hooks.init();
});

Template.maps.rendered = function(){
  var mapOptions = {
    zoom: 16,
    mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    
  var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions); 
      map.setCenter(new google.maps.LatLng( 42.359, -71.093 ));

  var garages = new google.maps.FusionTablesLayer({
    query: {
      select: 'geometry',
      from: '106s6eTuo9xDGTMgo4Z9Z16r4jlHGxZezMPsqa24'
    }
  });

  $('#meter').click(function(){
		garages.setMap($(this).is(':checked') ? map:null);
	});
};

Template.filtersBoxUser.events({
	'change .hasSub' : function(){
		var elems = document.getElementsByClassName('subfilter');
		for (var i = 0; i < elems.length; i++) {
			elems[i].disabled = !elems[i].disabled;
		};
	}
});

Template.filtersBoxNonUser.events({
	'click .checkboxOverlay' : function(){
		alert("hello");
	}
});
