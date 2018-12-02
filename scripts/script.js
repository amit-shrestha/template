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
