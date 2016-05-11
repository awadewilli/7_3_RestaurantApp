var _ = require('underscore');
var $ = require('jquery');
var Backbone = require('backbone');
var React = require('react');
var ReactDom = require('react-dom');
require('backbone-react-component');


var orderButton= React.createClass({
handleClick:function(e){
  e.preventDefault()
  Backbone.history.navigate('order',{trigger:true})
  window.scrollTo(0, 0);
},
render:function(){

return(
<div>
  <div className="row ourstory">
    <div className="col-md-8 col-md-offset-2">
      <div className="top-image">
        <div className="prof-pic">
          <div className="prof-img"></div>
        </div>
      </div>
      <p>
        <span>We invite you to celebrate refined Thai cuisine and an invigorating dining experience in the heart of Greenville SC.</span>
        <span> Since opening the first restaurant in Greenville to rave reviews, several trendy locations have followed over the last dozen years. Each space stylishly appointed to reflect the culture and energy of the noteworthy Southern cities they inhabit.</span>          </p>
    </div>
  </div>
  <div className="row">
    <div className="border-img"></div>
    <div className="col-md-8">
      <div className="row">
          <div className="col-md-12 splash-img topleft-img"></div>
      </div>
      <div className="row">
          <div className="col-md-12 splash-img topbottom-img"></div>
      </div>
    </div>
    <div className="col-md-4 splash-img topright-img">

    </div>
  </div>
  <div className="row order-row">
    <div className="col-md-10 col-md-offset-1">
      <div className="row">
        <div className="col-md-4 col-sm-4 col-xs-12 descrip">
        <div>  <img src="./images/bowl.svg"/> </div>
        <h2>Join us for Dinner</h2>
          <p>We invite you to celebrate refined Thai cuisine and an
            invigorating dining experience in the heart of Greenville SC.
          </p>
        </div>
        <div className="col-md-4 col-sm-4 col-xs-12 hours">
          <div><img src="./images/utensils.svg"/></div>
          <h2>Hours</h2>
          <p>
            <span>12:00 - 9:00</span>
            <span>M-Sat</span>
          </p>
        </div>
        <div className="col-md-4 col-sm-4 col-xs-12 contact-info">
        <div>  <img src="./images/leaf.svg"/> </div>
          <h2>Contact Us</h2>
          <span className="phone">864-8675-309</span>
          <span>CustomerServicei@MajesticThai.com</span>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 col-md-offset-3 col-sm-6 col-sm-offset-3" id="orderbutton">
          <button className="orderbutton" onClick={this.handleClick}>
          <span> Place Your Order Online</span>
          </button>
        </div>
      </div>
    </div>
  </div>
  <div className="row bottom-pic">
    <div className="col-md-6 splash-img bottom-img-1"></div>
    <div className="col-md-6 splash-img bottom-img-2"></div>
  </div>
  <footer className="row">

  </footer>
</div>
);

}
  });
module.exports = orderButton;
