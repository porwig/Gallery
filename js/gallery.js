// import data from .json file: should figure out how to set the path as a variable instead of hard coding it in the controller 
// added pagination as a dependency here. That worked, so now I will see if I can just use the pagination controllers in the html
// didn't even need the pagination controllers! just having the references in the HTML and it all worked. Seems like that was the big key
      galleryApp = angular.module('galleryApp', ['angularUtils.directives.dirPagination']);
      galleryApp.controller('GalleryCtrl', function ($scope, $http){
        $http.get('json/items.json').success(function(data) {
          $scope.items = data;
		  
// set the current item - using underscore.js library for this
$scope.currentItem = _.first($scope.items);

$scope.setCurrentItem = function (item) {
$scope.currentItem = item;
}


// start of the pagination code...

// this sets the start page
$scope.currentPage = 1;
// this isn't required, but if it's set here as a parameter (not on the HTML page) then this can define how many rows of thumbnails to display
// if it's not used here, it can be set in the HTML if the right code is used there
$scope.pageSize = 3;

/*
// trying to add galleryApp as a dependency injection
// commenting out this line since I was able to get the pagination added as a dependency above
// myApp = angular.module('myApp', ['galleryApp', 'angularUtils.directives.dirPagination']);
function MyController($scope) {

  $scope.pageChangeHandler = function(num) {

      console.log('meals page changed to ' + num);

  };

}

function OtherController($scope) {

  $scope.pageChangeHandler = function(num) {

    console.log('going to page ' + num);

  };

}

*/
// end of the pagination code




// these next two lines are part of my original code (before pagination was added)
});
});

//in plunkerscript.js, it looks like myController is for the search and thumbnail form, and otherController is for pagination


// there's a var and module declaration in the pagination code that I think might be conflicting with another pre-existing one of the same name. I need to understand what's going on there. Might need to revert .json import to debug that. Also, I *think* I should use the same controller for the pagination as the thumbnails, because the thumbnails are the same items that pagination is acting on. But I'm not sure about that, and it might be a good point to test a/o ask someone else more knowledgable about AngularJS.