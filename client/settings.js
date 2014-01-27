filterSets = new Meteor.Collection('userSettings')

filterSets.insert({name: 'garageCheck', checked: true, enabled: true});
filterSets.insert({name: 'indoorCheck', checked: true, enabled: true});
filterSets.insert({name: 'outdoorCheck', checked: true, enabled: true});