// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")
require("jquery")

// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

var colors = ["#481E9D","#8D74C0","#CA4B57","#2B2D42","#1C77C3","#81B29A","#E98039"];
var flag = 0;
$(document).ready(function(){
  $("textarea").keyup(function(){
  
  	var _text = $("#message_text").val().toLowerCase();
  	
  	if ((_text.indexOf("mconf") > -1) && (flag==0)) {
  		var i = Math.floor(Math.random() * 7);
    	$("body").css("background-color",colors[i]);
    	flag = 1;
    }
  	else if (_text.indexOf("mconf") == -1) {
      $("body").css("background-color","#326363");
      flag = 0;
    }
  });
  $("input").click(function() {
    location.reload();
  });
});


