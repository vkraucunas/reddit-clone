function sort(scope, property) {
    if (property === "votes") {
        scope.posts.sort(reverseSortByProperty("votes"));
    }
    if (property === "title") {
        scope.posts.sort(sortByProperty("title"));
    }
    if (property === "date") {
        scope.posts.sort(reverseSortByProperty("date"));
    }
    if (property === "reverse") {
        scope.posts.reverse();
    }
}

function reverseSortByProperty(key) {
    return function (a, b) {
        if (a[key] > b[key]) {
            return -1;
        }
        if (a[key] < b[key]) {
            return 1;
        }
        // a must be equal to b
        return 0;
        };
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
// add scripts

$(document).on('ready', function() {
  console.log('sanity check!');
});
