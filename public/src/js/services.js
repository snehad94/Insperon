/*Author : Sneha D
  Purpose : For Angular Service and Factory Method Creation used for http Calls
  Created Date : 10/01/2019 */
angular.module('App.services', []).factory('appService', function ($http){
    return {
        getData : function(data){
          const url = '/api/app/'+data;
          const headers = {'Content-Type': 'application/json'};
          return $http({
            method: 'get',
            headers:headers,
            url: url,
      }).then(function (response) {
        return response.data.jsonBody.businesses;
      })
    }
    };

});
