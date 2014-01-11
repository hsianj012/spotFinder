Template.maps.rendered = function(){
  var mapOptions = {
    zoom: 16,
    mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    
  var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions); 
      map.setCenter(new google.maps.LatLng( 42.359, -71.093 ));
  };

Template.filters-box.events({
  'click input' : function () {
    // template data, if any, is available in 'this'
    if (typeof console !== 'undefined')
      console.log("You pressed the button");
  }
});