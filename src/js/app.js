// sample angular code

var app = angular.module('redditApp', ['angularMoment']);
// app.constant('moment', require('moment-timezone'));

app.controller('GrossControl',function($scope) {
    var posts = samplePosts.map(x => {
        x.expandedComments = false;
        x.expandedAddComment = false;
        return x;
    });

    $scope.posts = posts;
    //all add post form stuff
    $scope.addForm = false;
    $scope.toggleAddForm = function() {
        $scope.addForm = !$scope.addForm;
    };
    $scope.newPost = {
            id: count++,
            date: new Date(),
            votes: 0,
            comments: []
        };

    $scope.addPost = function() {
        $scope.posts.push($scope.newPost);
        $scope.newPost = {
                id: count++,
                date: new Date(),
                votes: 0,
                comments: []
            };
        $scope.addForm = false;
    };
    // all comment related stuff
    $scope.toggleComments = function(id) {
        toggleComments($scope,id);
    };
    $scope.toggleAddComment = function(id) {
        toggleAddComment($scope,id);
    };
    $scope.newComment = {};
    $scope.addComment = function(id) {
        var postsArray = $scope.posts;
        for (var i = 0; i < postsArray.length; i++) {
            if (postsArray[i].id === id) {
                postsArray[i].comments.push($scope.newComment);
            }
        }
        $scope.newComment = {};
        $scope.toggleAddComment(id);
    };

    //voting logic
    $scope.upVote = function(id) {
        for (var i = 0; i < $scope.posts.length; i++) {
            if ($scope.posts[i].id === id) {
                $scope.posts[i].votes++;
            }
        }
    };
    $scope.downVote = function(id) {
        for (var i = 0; i < $scope.posts.length; i++) {
            if ($scope.posts[i].id === id) {
                $scope.posts[i].votes--;
            }
        }
    };
    //sorting
    // $scope.sortPosts = function(property) {
    //     sort($scope, property);
    // };

    //search logic
    $scope.searchResults = $scope.posts;
    $scope.search = '';
    // $scope.doSearch = function() {
        $scope.searchResults = [];
        for (var i = 0; i < $scope.posts.length; i++) {
            var post = $scope.posts[i];
            for (var key in post) {
                var keyValue = post[key];

                if(typeof keyValue === "number") {
                    if(keyValue == Number($scope.search)) {
                        $scope.searchResults.push(post);
                    }
                } else if (typeof keyValue === "string") {
                    if (post[key].toLowerCase().includes($scope.search.toLowerCase())) {
                        $scope.searchResults.push(post);
                    }
                    //try to loop through comments to search those as well. ugh.
                    // for (var j = 0; j < post[key].comments.length; j++) {
                    //     if (post[key].comments[j].user.toLowerCase().includes($scope.search.toLowerCase())) {
                    //         $scope.searchResults[post.id] = post;
                    //     }
                    //     if (post[key].comments[j].text.toLowerCase().includes($scope.search.toLowerCase())) {
                    //         $scope.searchResults[post.id] = post;
                    //     }
                    // }
                }

            }
            $scope.searchResults.reduce(function(prev, curr) {
                console.log("previous is ", prev);
                console.log("current is ", curr)
                    // if (prev.id !== curr.id) {
                    //     return curr;
                    // }
                return curr;
                });
        }
    // };
});



