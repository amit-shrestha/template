var i=0;
var navMenu = document.getElementById('navMenu');
var navBtn = document.getElementById('nav-button');
navBtn.addEventListener('click', function(){
  if(i===0){
    navMenu.className += ' clicked';
    i++;
  }else{
    navMenu.className = 'nav-menu';
    i=0;
  }
});

var featuredProductsSlider = document.getElementsByClassName('featured-products-details')[0];
var rightButtonFeatured = document.getElementsByClassName('right-arrow-featured')[0];
rightButtonFeatured.addEventListener('click', function(){
  if(featuredProductsSlider.offsetLeft>(-featuredProductsSlider.offsetWidth+320)){
    var newXFeatured = featuredProductsSlider.offsetLeft-320;
    featuredProductsSlider.style.left = newXFeatured+'px';
  }
});

var leftButtonFeatured = document.getElementsByClassName('left-arrow-featured')[0];
leftButtonFeatured.addEventListener('click', function(){
  if(featuredProductsSlider.offsetLeft<0){
    var newXFeatured = featuredProductsSlider.offsetLeft+320;
    featuredProductsSlider.style.left = newXFeatured+'px';
  }
});

var newProductsSlider = document.getElementsByClassName('new-products-details')[0];
var rightButtonNew = document.getElementsByClassName('right-arrow-new')[0];
rightButtonNew.addEventListener('click', function(){
  if(newProductsSlider.offsetLeft>(-newProductsSlider.offsetWidth+320)){
    var newXNew = newProductsSlider.offsetLeft-320;
    newProductsSlider.style.left = newXNew+'px';
  }
});

var leftButtonNew= document.getElementsByClassName('left-arrow-new')[0];
leftButtonNew.addEventListener('click', function(){
  if(newProductsSlider.offsetLeft<0){
    var newXNew = newProductsSlider.offsetLeft+320;
    newProductsSlider.style.left = newXNew+'px';
  }
});