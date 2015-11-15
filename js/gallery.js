// import data from .json file: should figure out how to set the path as a variable instead of hard coding it in the controller 
// added pagination as a dependency here. That worked, so now I will see if I can just use the pagination controllers in the html
// didn't even need the pagination controllers! just having the references in the HTML and it all worked. Seems like that was the big key
// definess angular module, with dependency of pagination code
      galleryApp = angular.module('galleryApp', ['angularUtils.directives.dirPagination']);
	  // imports data from .json file
	  galleryApp.controller('GalleryCtrl', function ($scope, $http){
	  $scope.url = 'json/items.json';
        $http.get($scope.url).success(function(data) {
          $scope.items = data;
		  		  		  
// set the current item - using underscore.js library
$scope.currentItem = _.first($scope.items);

// assignment for current item
$scope.setCurrentItem = function (item) {
$scope.currentItem = item;
}

// set the start page
$scope.currentPage = 1;
// this isn't required, but if it's set here as a parameter then this can define how many rows of thumbnails to display
// if it's not used here, it can be set in the HTML if the right code is used there
$scope.pageSize = 18;
// should see if I can pass this variable from a category list view, in a url or other way
$scope.thisCategory = 'birds';

});
});
