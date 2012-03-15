/* App Controllers */

function FeedListCtrl($rootScope, $scope, Commit) {
	$scope.entries = Commit.query();
	
	$scope.myclick = function(entry) {
		$rootScope.entry = entry;
	}
}

function EntryDetailCtrl($scope, Commit) {
//	$scope.entry = Commit.get({sha: $scope.params.sha});
}
