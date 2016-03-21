var _ = require('underscore');
var Backbone = require('backbone');
require('backbone-react-component');
var MenuItem = require('./menuItem');

var MenuItemCollection = Backbone.Collection.extend({
model: MenuItem,
url: 'http://tiny-lasagna-server.herokuapp.com/collections/awadewilliorders'
});

module.exports= MenuItemCollection;
