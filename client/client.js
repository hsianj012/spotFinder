Meteor.startup(function(){
  Hooks.init();
});


Template.maps.rendered = function(){
  var winHeight = window.innerHeight;
  document.getElementById("full").style.height = winHeight-154+"px";

  var markers = [];
  var mapOptions = {
    zoom: 14,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    center: new google.maps.LatLng(42.359, -71.093)
  };

  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  garagesIn = new google.maps.FusionTablesLayer({
    query: {
      select: 'geometry',
      from: '106s6eTuo9xDGTMgo4Z9Z16r4jlHGxZezMPsqa24'
    },
    map:map,
    styles: [{
      markerOptions: {
        iconName: 'small_green'
      }
    }]
  });

  garagesOut = new google.maps.FusionTablesLayer({
    query: {
      select: 'geometry',
      from: '1IiUGI1cMwo3jzhwrNMVNbVNhsOs7GcpmXjxf82g'
    },
    map:map
  });

  freeSpots = new google.maps.FusionTablesLayer({
    query: {
      select: 'geometry',
      from: '12Ngc-9YhsIOIMsHt0P_Sijm3QatzYimNlCfVnOg'
    }
  });

  // meteredSpots = new google.maps.FusionTablesLayer({
  //   query: {
  //     select: 'geometry',
  //     from: '106s6eTuo9xDGTMgo4Z9Z16r4jlHGxZezMPsqa24'
  //   }
  // });

  // garagesIn.filterMap(map);
  // garagesOut.filterMap(map);

  $('#garage').change(function(){
    if ($('#indoor').is(':checked')) {
      garagesIn.setMap($(this).is(':checked') ? map:null);
    };
    
    if ($('#outdoor').is(':checked')) {
      garagesOut.setMap($(this).is(':checked') ? map:null);
    };
  });

  $('#indoor').change(function(){
    garagesIn.setMap($(this).is(':checked') ? map:null);
  });

  $('#outdoor').change(function(){
    garagesOut.setMap($(this).is(':checked') ? map:null);
  });

  $('#free').click(function(){
    freeSpots.setMap($(this).is(':checked') ? map:null);
  });

  // $('#meter').click(function(){
  //   meteredSpots.setMap($(this).is(':checked') ? map:null);
  // });
  //This section down enables the auto-complete search box
  var input = document.getElementById('pac-input');

  var searchBox = new google.maps.places.SearchBox(input);

  google.maps.event.addListener(searchBox, 'places_changed', function() {
    var places = searchBox.getPlaces();

    for (var i = 0, marker; marker = markers[i]; i++) {
      marker.setMap(null);
    }

    // For each place, get the icon, place name, and location.
    markers = [];
    var bounds = new google.maps.LatLngBounds();
    for (var i = 0, place; place = places[i]; i++) {
      var image = {
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25)
      };

      // Create a marker for each place.
      var marker = new google.maps.Marker({
        map: map,
        icon: image,
        title: place.name,
        position: place.geometry.location
      });

      markers.push(marker);

      bounds.extend(place.geometry.location);
    }

    map.fitBounds(bounds);
  });

  google.maps.event.addListener(map, 'bounds_changed', function() {
    var bounds = map.getBounds();
    searchBox.setBounds(bounds);
  });
};

Template.filters.events({
	'change .hasSub' : function(){
		var elems = document.getElementsByClassName('subfilter');
		for (var i = 0; i < elems.length; i++) {
			elems[i].disabled = !elems[i].disabled;
		};
	},
});

Template.nonUserFilters.events({
	'click .checkboxOverlay' : function(){
		alert("Please sign in to use this feature.");
	},
});
