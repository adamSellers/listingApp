angular.module('appServices', [
	'ngResource'])
  // Build this out using a factory
  .factory('ListingService', function($resource) {

    return $resource('https://stark-bastion-2443.herokuapp.com/listings/:id',{id: "@id"});
  })
  