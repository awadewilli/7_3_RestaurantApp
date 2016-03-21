var _ = require('underscore');
var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
require('backbone-react-component');
////////////////////////////////////////
//base models and Collection//
////////////////////////////////////////
var MenuItem = require('./models/MenuItem');
var MenuItemCollection = require('./models/MenuItemCollection');
////////////////////////////////////////
//json data//
////////////////////////////////////////
var appetizerData = require('./dataObjects/appetizers.json');
var SoupSaladData = require('./dataObjects/soupandsalad.json');
var entreesData = require('./dataObjects/entrees.json');
var desertData = require('./dataObjects/desserts.json');
////////////////////////////////////////
//menu components
////////////////////////////////////////
var appetizers = require('./components/appetizers.jsx');
var soupAndSalad = require('./components/soupandsalad.jsx');
var entree = require('./components/entrees.jsx');
var desserts = require('./components/dessert.jsx');
////////////////////////////////////////
//Order Button and Current Order Display components
////////////////////////////////////////
var home = require('./components/Home.jsx');
var orderForm = require('./components/orderform.jsx');
////////////////////////////////////////
//menu collections
////////////////////////////////////////
var appetizerItemCollection = new MenuItemCollection(appetizerData);
var soupAndSaladCollection = new MenuItemCollection(SoupSaladData);
var entreesCollection = new MenuItemCollection(entreesData);
var dessertsCollection = new MenuItemCollection(desertData);



var menuItem = new MenuItem();
var Router = Backbone.Router.extend({

routes:{
'':'renderHome',
'order':'renderMenu'
},

renderMenu:function(){
    ReactDOM.render(
    React.createElement(appetizers,{collection:appetizerItemCollection}),
     document.getElementById('appetizers')
   );
    ReactDOM.render(
    React.createElement(soupAndSalad,{collection:soupAndSaladCollection}),
     document.getElementById('soup-and-salad')
   );
   ReactDOM.render(
   React.createElement(entree,{collection:entreesCollection}),
    document.getElementById('entrees')
  );
  ReactDOM.render(
  React.createElement(desserts,{collection:dessertsCollection}),
   document.getElementById('desserts')
  );
  React.unmountComponentAtNode(document.getElementById('home'));

},

renderHome:function(){
  ReactDOM.render(
    React.createElement(home),
      document.getElementById('home')
    );
    React.unmountComponentAtNode(document.getElementById('appetizers'));
    React.unmountComponentAtNode(document.getElementById('soup-and-salad'));
    React.unmountComponentAtNode(document.getElementById('entrees'));
    React.unmountComponentAtNode(document.getElementById('desserts'));

}
});

module.exports = new Router();
