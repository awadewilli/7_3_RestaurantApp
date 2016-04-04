var _ = require('underscore');
var $ = require('jquery');
var Backbone = require('backbone');
var React = require('react');
var ReactDom = require('react-dom');
require('backbone-react-component');

var MenuItem = React.createClass({
  mixins:[Backbone.React.Component.mixin],

  addItem: function(e){
    e.preventDefault();
    console.log(this.props.model.get('price'));


  },
  render: function(){
    var model = this.props.model;
    var self = this;
    return (

      <div key={model.get('item')}>
        <li>
          <span>{model.get('item')}</span>
          <span>{model.get('price')}</span>
          <button onClick={this.props.addItem.bind(self, model)}>Add</button>
          <p></p>
        </li>
      </div>
    );
  }
});

var MenuCategory= React.createClass({

  mixins:[Backbone.React.Component.mixin],

  render: function(){
    var that = this;

    var catItems = this.props.collection.map(function(model){

      return( <MenuItem model={model} addItem={that.props.addItem} key={model.get('item')}/> );
    });

    return(
      <ul>
        <h3>{this.props.title}</h3>
        {catItems}
      </ul>
    )
  },

  addItem: function()
  {

  }
  });

module.exports = MenuCategory;
