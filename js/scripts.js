// this new line is so that our script tags in our html can run until the document is finished loading.
jQuery(document).ready(function(){
  jQuery("H1").click(function(){
    // alert is a callback function.
    alert("This is a header.");
  });
  // we pass jQuery("h1") function to the .click mehtod fucntion. this is called a callback when we pass a function as an argument to another function.



  // JQuery  selects HTML elembernts on the page base on the argument passed in. example below is a p therefore all p tags are clickable.

  // the click method attaced is an event handler.
  jQuery("p").click(function(){

    alert("This is a paragraph.");
  });

  jQuery("img").click(function(){
    alert("This is an image.");
  });
});
