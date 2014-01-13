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

  $('#garage').click(function(){
      layer.setMap($(this).is(':checked') ? map : null);
  });
  
};



    // retrieve the input field values

        // The user might not have been found, or their passwword
});