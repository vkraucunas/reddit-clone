

var count = 4;
function getUniqueId(scope) {
    count++
}

function toggleComments(scope, id) {
    for (var i = 0; i < scope.posts.length; i++) {
        if (scope.posts[i].id === id) {
            scope.posts[i].expandedComments = !scope.posts[i].expandedComments;
        }
    }
}

function toggleAddComment(scope, id) {
    for (var i = 0; i < scope.posts.length; i++) {
        if (scope.posts[i].id === id) {
            scope.posts[i].expandedAddComment = !scope.posts[i].expandedAddComment;
        }
    }
}

