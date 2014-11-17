var MnMenuModel = function (opts) {
  if(!(this instanceof MnMenuModel)) {
    return new MnMenuModel(opts)
  }

  // TODO: Generate GUID as a unique name as default.
  this._name = opts.name || 'default'
  this._value = opts.value || this._name
  this._parent = opts.parent
  this._children = opts.children
  this._isSelected = !!opts.isSelected
}

MnMenModel.prototype.name = function(value) {
  if(!arguments.length) {
    return this._name
  }

  this._name = value
}

MnMenuModel.prototype.value = function (value) {
  if(!arguments.length) {
    return this._value
  }

  this._value = value
}

MnMenuModel.prototype.parent = function(value) {
  if(!arguments.length) {
    return this._parent
  }

  this._parent = value
}

MnMenuModel.prototype.children = function(value) {
  if(!arguments.length) {
    return this._children
  }

  this._children = value
}

MnMenuModel.prototype.isSelected = function (value) {
  if(!arguments.length) {
    return this._isSelected
  }

  this._isSelected = value
}

module.exports = MnMenuModel
