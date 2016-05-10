var _ = require('underscore');
var $ = require('jquery');
var Backbone = require('backbone');
var React = require('react');
var ReactDom = require('react-dom');
require('backbone-react-component');

var MenuItem = React.createClass({
  mixins:[Backbone.React.Component.mixin],

  render: function(){
    var model = this.props.model;
    var self = this;
    console.log(self);
    return (

      <div key={model.get('item')}>
        <li className="menu-item">
          <span className="item">{model.get('item')}</span>
          <span className="price">{model.get('price')}</span>
          <p>{model.get('description')}</p>
          <button className="btn btn-primary" onClick={this.props.addItem.bind(this,model)}>Add</button>
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
        <h3 className="cat-name">{this.props.title}</h3>
        {catItems}
      </ul>
    )
  },
  });

module.exports = MenuCategory;
