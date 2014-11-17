var MnMenuItem = function (name, link, isSelected) {
  if(!(this instanceof MnMenuItem)) {
    return new MnMenuItemModel(name, link, isSelected)
  }

  this._name = name
  this._link = link
  this._isSelected = !!isSelected
}

MnMenuItem.prototype.name = function (value) {
  if(!arguments.length) {
    return this._name
  }

  this._name = value
}

MnMenuItem.prototype.link = function (value) {
  if(!arguments.length) {
    return this._link
  }

  this._link = value
}

MnMenuItem.prototype.isSelected = function (value) {
  if(!arguments.length) {
    return this._isSelected
  }

  this._isSelected = value
}

MnMwnuItem.prototype.create = function (name, link, isSelected) {
  return new MnMenuItem(name, link, isSelected)
}

module.exports = MnMenuItem
