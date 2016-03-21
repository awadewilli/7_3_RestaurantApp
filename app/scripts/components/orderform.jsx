var _ = require('underscore');
var $ = require('jquery');
var Backbone = require('backbone');
var React = require('react');
var ReactDom = require('react-dom');
require('backbone-react-component');

var orderedItems= React.createClass({

  render: function(){
    return(
      <div>
      <div id="order-items" className="row">
          <div class="col-xs-6">
            "Item 1"
          </div>
          <div class="col-xs-6">
              "Price"
          </div>
      </div>
      <div id="order-total">
        <span> Total Price</span>
      </div>
    </div>
    );
  }



});

module.exports = orderedItems;
