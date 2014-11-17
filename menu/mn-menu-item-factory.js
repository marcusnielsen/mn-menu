var MnMenuItemModel = require('./mn-menu-item-model')

var name = 'mn-menu-item-factory'

var fn = function () {
  return MnMenuItemModel
}

module.exports = {
  name: name,
  fn: fn
}
