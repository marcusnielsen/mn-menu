var name = 'mn-menu-controller'

var fn = function ($scope, mnMenuFactory) {
  var args = {
    name: $scope.name,
    items: $scope.items,
    selected: $scope.selected
  }

  var model = mnMenuFactory.create(args.name, args.items, args.selected)

  $scope.vm = {
    name: model.name,
    items: model.items,
    selected: model.selected
  }
}

module.exports = {
  name: name,
  fn: fn
}
