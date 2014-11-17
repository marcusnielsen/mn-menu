var name = 'mn-menu-controller'

var fn = function ($scope, mnMenuFactory) {
  var model = mnMenuFactory($scope.name, $scope.value, $scope.parent, $scope.children, $scope.isSelected)

  $scope.vm = {
    name: model.name,
    value: model.value,
    parent: model.parent,
    children: model.children,
    isSelected: model.isSelected
  }
}

module.exports = {
  name: name,
  fn: fn
}
