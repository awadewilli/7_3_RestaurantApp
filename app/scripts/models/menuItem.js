var _ = require('underscore');
var Backbone = require('backbone');
require('backbone-react-component');

var MenuItem = Backbone.Model.extend({
  defaults:{
    item:'',
    price:1234,
    category:'',
    description:''
  }
});
 module.exports=MenuItem;
