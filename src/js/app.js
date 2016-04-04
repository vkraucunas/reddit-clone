// sample angular code

var app = angular.module('redditApp', []);

app.controller('GrossControl',function($scope) {
    var posts = samplePosts.map(x => {
        x.expandedComments = false;
        x.expandedAddComment = false;
        return x;
    });

    $scope.posts = posts;
    $scope.addPost = function() {
        //push a newPost to $scope.posts
    };
    $scope.addForm = false;
    $scope.toggleAddForm = function() {
        $scope.addForm = !$scope.addForm;
    };

    $scope.toggleComments = function(id) {
        toggleComments($scope,id);
    };

    $scope.toggleAddComment = function(id) {
        toggleAddComment($scope,id);
    };
    $scope.sortPosts = function(property) {
        sort($scope, property);
    };
});

function sort(scope, property) {
    // votes, title date
    if (property === "votes") {
        scope.posts.sort(sortByProperty("votes"));
    }
    if (property === "title") {
        scope.posts.sort(sortByProperty("title"));
    }
    if (property === "date") {
        scope.posts.sort(sortByProperty("date"));
    }
    if (property === "reverse") {
        scope.posts.reverse();
    }
}

function sortByProperty(key) {
    return function (a, b) {
        if (a[key] > b[key]) {
            return 1;
        }
        if (a[key] < b[key]) {
            return -1;
        }
        // a must be equal to b
        return 0;
        };
}

var count = 4;
function getUniqueId(scope) {
    count++
}

function toggleComments(scope, id) {
    scope.posts[0].expandedComments = !scope.posts[0].expandedComments;
    //for posts in scope.posts
        //toggle expandedComments on post where post.id == id
}

function toggleAddComment(scope, id) {
    scope.posts[0].expandedAddComment = !scope.posts[0].expandedAddComment;
    //for posts in scope.posts
        //toggle expandedAddComment on post where post.id == id
}

