Lists = new Meteor.Collection("lists");

// ------MAPS--------//
Template.maps.rendered = function(){
  var mapOptions = {
    zoom: 16,
    mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    
  var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions); 
      map.setCenter(new google.maps.LatLng( 42.359, -71.093 ));
  
  var layer = new google.maps.FusionTablesLayer({
    query: {
      select: 'Latitude, Longitude',
      from: "1r2CxHILKV7EqXoJYXEOKDlgR04uJl-Y5wNWwCsU",
    }
  });

  $('#indoor').click(function(){
      layer.setMap($(this).is(':checked') ? map : null);
  });
  
};

Template.filtersBox.events({
  'change .hasSub' : function(){
    var elems = document.getElementsByClassName('subfilter');
    for(i=0; i<elems.length; i++) {
      elems[i].disabled = !elems[i].disabled;
    };
    console.log("you clicked the checkbox")
  },

  'change input' : function(){
    console.log("you clicked")
  }
});