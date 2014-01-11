Lists = new Meteor.Collection("lists");

// ------MAPS--------//
Template.maps.rendered = function(){
  var mapOptions = {
    zoom: 16,
    mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    
  var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions); 
      map.setCenter(new google.maps.LatLng( 42.359, -71.093 ));
  };
  var layer = new google.maps.FusionTablesLayer({
    query: {
      select: 'Latitude, Longitude',
      from: "1r2CxHILKV7EqXoJYXEOKDlgR04uJl-Y5wNWwCsU",
    }
  });

Template.filters-box.events({
  $('#garage').click(function(){
      layer.setMap($(this).is(':checked') ? map : null);
  });
  'click input' : function () {
    // template data, if any, is available in 'this'
    if (typeof console !== 'undefined')
      console.log("You pressed the button");
  }
});

Template.login.events({

  'submit #login-form' : function(e, t){
    e.preventDefault();
    // retrieve the input field values
    var email = t.find('#login-email').value, password = t.find('#login-password').value;

      // Trim and validate your fields here.... 

      // If validation passes, supply the appropriate fields to the
      // Meteor.loginWithPassword() function.
      Meteor.loginWithPassword(email, password, function(err){
      if (err){}
        // The user might not have been found, or their passwword
        // could be incorrect. Inform the user that their
        // login attempt has failed. 
      else{}
        // The user has been logged in.
    });
       return false; 
    }
});