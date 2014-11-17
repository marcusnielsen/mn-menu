// TODO: Merge the Menu and Menu-item into just Menu with an array of menus called children.

var MnMenuModel = function (opts) {
  if(!(this instanceof MnMenuModel)) {
    return new MnMenuModel(opts)
  }

  // TODO: Generate GUID as a unique name as default.  
  this._name = opts.name || 'default'
  this._children = opts.children
  this._parentMenuItem = opts.parentMenuItem
  this._selected
}

MnMenModel.prototype.name = function(value) {
  if(arguments.length) {
    return this._name
  }

  this._name = value
}

MnMenuModel.prototype.children = function(value) {
  if(arguments.length) {
    return this._children
  }

  this._children = value
}


// TODO: Support multiple selections via array value.
MnMenuModel.prototype.selected = function (value) {
  if(arguments.length) {
    return this._selected} 
  }
  
  this._selected.isSelected(false)
  value.isSelected(true)
  this._selected = value
}

module.exports = MnMenuModel
