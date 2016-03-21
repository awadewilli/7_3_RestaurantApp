var _ = require('underscore');
var $ = require('jquery');
var Backbone = require('backbone');
var React = require('react');
var ReactDom = require('react-dom');
require('backbone-react-component');

var soupAndSalad= React.createClass({
  mixins: [Backbone.React.Component.mixin],

  render: function(){
  var catItems = this.props.collection.map(function(model){
    return(
      <div>
        <li>
          <span>{model.get('item')}</span>
          <span>{model.get('price')}</span>
          <button>Add</button>
          <p></p>
        </li>
      </div>
      )
    }
  );

    return(
      <ul>
        <h3>Soups and Salad</h3>
        {catItems}
      </ul>
    )
  }

  });
module.exports = soupAndSalad;
