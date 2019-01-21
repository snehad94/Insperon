/*Author : Sneha D
  Purpose : For Angular Controller & method Creation
  Created Date : 10/01/2019 */

angular.module('App.controllers', []).controller('appController', function($scope, appService,$window) {
  $scope.keywordList =[];
 
 $scope.keywordlist = function(){  
  if(undefined != $scope.keyword && null != $scope.keyword && '' != $scope.keyword){
   appService.getData($scope.keyword).then(function(response){
         $scope.keywordList = response;
       });
  }
 };

$scope.preview = function(event){   
  if(undefined != $scope.keywordList && null != $scope.keywordList && '' != $scope.keywordList){
      for(i=0;i< $scope.keywordList.length;i++){
        var name = $scope.keywordList[i]['name'];
        if(name === event){
          $scope.img = $scope.keywordList[i]['image_url'];
          $scope.phone = $scope.keywordList[i]['display_phone'];
          $scope.name = $scope.keywordList[i]['name'];
          $scope.rating = $scope.keywordList[i]['rating'];
          $scope.categories = $scope.keywordList[i]['categories'];
          $scope.url = $scope.keywordList[i]['url'];
          $scope.restarauntcategories();
          $scope.location = $scope.keywordList[i]['location']['address1'] + ',' + $scope.keywordList[i]['location']['city']+',' + $scope.keywordList[i]['location']['country'];  
          break;
        }
      }
    }
    };

  $scope.restarauntcategories = function(){
    var finaldata = '';
    var seperator = ' | ';
     for(i=0;i< $scope.categories.length;i++){
        if(finaldata == ''){
          finaldata = $scope.categories[i].title;
        } else {
          finaldata = finaldata + seperator + $scope.categories[i].title;
        }
     }
     $scope.category = finaldata;
  };

  $scope.call = function(phone){
      $scope.yourPhone = phone;
      if(undefined != $scope.yourPhone && null != $scope.yourPhone && '' != $scope.yourPhone ){
        $window.open($scope.url, "_blank");
      } 
    };
});

