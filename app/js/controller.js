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


    //search logic
    $scope.search = '';

});



