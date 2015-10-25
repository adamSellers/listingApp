angular.module('appServices', [
	'ngResource'])
  // Build this out using a factory
  .factory('ListingService', function($resource) {

    return $resource('https://stark-bastion-2443.herokuapp.com/listings/:id');
  })
  .factory('updateService', function($resource) {

  /*var data = $resource('https://secure-savannah-3876.herokuapp.com/updatelisting/:id', {id: "@id"}, {
      update: {
        method:'PUT'
      }
    });
        
      return data;*/

    return $resource('https://stark-bastion-2443.herokuapp.com/listings/:id', {id: "@id"});
  })