var name = 'mnMenu'

var fn = function() {
  return {
    restrict: 'AE',
    controller: '',
    template: '',
    scope: {
      mnMenu: '=',

      name: '=',
      value: '=',
      parent: '=',
      children: '=',
      isSelected: '='
    }
  }
}
module.exports = {
  name: name,
  fn: fn
}
