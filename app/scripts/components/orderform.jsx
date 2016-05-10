var _ = require('underscore');
var $ = require('jquery');
var Backbone = require('backbone');
var React = require('react');
var ReactDom = require('react-dom');
var backboneMixin = require('backbone-react-component');
////////////////////////////////////////
//json data//
////////////////////////////////////////
var appetizerData = require('../dataObjects/appetizers.json');
var soupSaladData = require('../dataObjects/soupandsalad.json');
var entreesData = require('../dataObjects/entrees.json');
var desertData = require('../dataObjects/desserts.json');
////////////////////////////////////////
//menu component
////////////////////////////////////////
var MenuCategory = require('./menucategory.jsx');
////////////////////////////////////////
//base models and Collection//
////////////////////////////////////////
var MenuItem = require('../models/MenuItem');
var MenuItemCollection = require('../models/MenuItemCollection');
////////////////////////////////////////
//menu collections
////////////////////////////////////////

var appetizerItemCollection = new MenuItemCollection(appetizerData);
var soupAndSaladCollection = new MenuItemCollection(soupSaladData);
var entreesCollection = new MenuItemCollection(entreesData);
var dessertsCollection = new MenuItemCollection(desertData);
var menu = [
  {title: 'Appetizers', collection: appetizerItemCollection},
  {title: 'Soup And Salad', collection: soupAndSaladCollection},
  {title: 'Entrees', collection: entreesCollection},
  {title: 'Desserts', collection: dessertsCollection}
];
var cart = new MenuItemCollection();



var OrderMenu = React.createClass({
getInitialState: function(){
  return {
    order: cart
  }
},
addItem: function(model, e){
  console.log(e);
  console.log(model);
  console.log(this.state.order);
  this.setState({order: cart.add(model)});
  console.log(cart);

},
placeOrder: function(e){
  e.preventDefault();
  var finalCart = cart.toJSON();
  console.log(finalCart);
  cart.create(finalCart);
  alert('Your Order Was Placed Successfully');
  Backbone.history.navigate('',{trigger:true});


},
render: function(){
  return(
    <div>
      <MenuItems menu={menu} addItem={this.addItem} />
      <Cart order={cart} placeOrder={this.placeOrder} />
    </div>
  );
}

});

var MenuItems = React.createClass({

render: function(){
  var that = this;
  var categories = this.props.menu.map(function(menuCat){
    return <MenuCategory title={menuCat.title} collection={menuCat.collection}
      key={menuCat.title} addItem={that.props.addItem} />
  });
  return(
    <div className="col-md-7">
      {categories}
    </div>
  );
}

});


var OrderItem = React.createClass({
  render: function(){
    return (
      <div id="order-items" className="row">
          <div className="col-xs-6">
            {this.props.model.get('item')}
          </div>
          <div className="col-xs-6">
            {this.props.model.get('price')}
          </div>
      </div>
    )
  }
});


var Cart= React.createClass({
  mixins:[Backbone.React.Component.mixin],

  render: function(){

    var orderItems = this.props.order.map(function(model){
      console.log(model.get('item'));
      return <OrderItem model={model} key={model.get('item')}/>
    });
    var total = this.props.order.reduce(function(memo, item){
      memo += item.get('price');
      return memo;
    }, 0);

    return(
      <div className="col-md-5">
      <h3 className="cart-name">Your Order</h3>
      <div className="cart">
        {orderItems}
        <div id="order-total">
          <span>Total Price:{total.toFixed(2)}</span>
        </div>
        <button type="button" className="btn btn-primary" onClick={this.props.placeOrder}> Place Your Order</button>
      </div>
    </div>
    );
  }



});

module.exports = OrderMenu;
