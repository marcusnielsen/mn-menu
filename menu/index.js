var angular = require('angular')
var mnMenu = require('./mn-menu')
var MnMenuFactory = require('./mn-menu-factory')
var mnMenuController = require('./mn-menu-controller')

angular.module('mnMenu')
  .directive(mnMenu.name, mnMenu.fn)
  .factory(MnMenuFactory.name, MnMenuFactory.fn)
  .controller(mnMenuController.name, mnMenuController.fn)

