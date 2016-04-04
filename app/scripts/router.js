var _ = require('underscore');
var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
require('backbone-react-component');
////////////////////////////////////////
//Order Button and Current Order Display components
////////////////////////////////////////
var home = require('./components/Home.jsx');
var OrderMenu = require('./components/orderform.jsx');


var Router = Backbone.Router.extend({

routes:{
'':'renderHome',
'order':'renderMenu'
},

renderMenu:function(){
  console.log('Render is Running');
    ReactDOM.render(
    React.createElement(OrderMenu),
     document.getElementById('menu')
   );

  ReactDOM.unmountComponentAtNode(document.getElementById('home'));

},

renderHome:function(){
  ReactDOM.render(
    React.createElement(home),
      document.getElementById('home')
    );
    ReactDOM.unmountComponentAtNode(document.getElementById('menu'));

}
});

module.exports = new Router();
