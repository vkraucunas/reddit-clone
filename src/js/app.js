// sample angular code

var app = angular.module('RedditApp', []);

app.controller('GrossControl', ['$scope', function($scope) {
    $scope.id = 1;
    $scope.posts = [
        {
            id: $scope.id++,
            title: "Gruesome neck pop!",
            date:
            backupImg: "http://cdn.earthporm.com/wp-content/uploads/2014/07/cute-bunnies-tongues-6.jpg",
            image: "https://i.ytimg.com/vi/iQq7cBkjCYU/hqdefault.jpg",
            votes:
            description:
            comments:
        },
        {
            id: $scope.id++,
            title:
            date:
            backupImg: "http://media.treehugger.com/assets/images/2015/07/sea-bunny-jorunna-parva.jpg.662x0_q70_crop-scale.jpg",
            image:
            votes:
            description:
            comments:
        },
        {
            id: $scope.id++,
            title:
            date:
            backupImg: "http://www.rabbit.org/adoption/bunny.jpg",
            image:
            votes:
            description:
            comments:
        }
    ]
  $scope.greeting = "Hello World!";
}]);
