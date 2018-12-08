
function imageCarousel(sliderContainer, wait, animationDelay){
  var mainContainer = document.getElementsByClassName('carousel')[0];
  var slider = document.getElementById(sliderContainer);
  var images = slider.getElementsByTagName('img');
  var width = slider.offsetWidth;
  var height = slider.offsetHeight;
  var container = document.createElement('div');
  container.setAttribute('id', 'slider-container-wrapper');
  container.appendChild(slider); 
  
  var nextBtn = document.createElement('img');
  nextBtn.src = './images/right-arrow-carousel.png';
  
  var previousBtn = document.createElement('img');
  previousBtn.src = './images/left-arrow-carousel.png';
  
  nextBtn.setAttribute('id', 'rbtn');
  previousBtn.setAttribute('id', 'lbtn');

  var dots = [];
  var dotsBtn = document.createElement('div');
  dotsBtn.setAttribute('id', 'dots');

  for(var i=0;i<images.length;i++){
    images[i].setAttribute('class', 'images');
    var dot = document.createElement('span');
    dot.setAttribute('class', 'dot');
    dot.setAttribute('id', i);
    dotsBtn.appendChild(dot);
    dots.push(dot);
  }

  for(var x=0;x<dots.length;x++){
    dots[x].addEventListener('click', function(e){
      dotClicked(e.path[0].id);
    });
  }

  container.appendChild(nextBtn);
  container.appendChild(previousBtn);
  container.appendChild(dotsBtn);
  
  mainContainer.appendChild(container);

  nextBtn.addEventListener('click', function(){
    nextBtnClicked();
  });
  previousBtn.addEventListener('click', function(){
    previousBtnClicked();
  });


  var x = 0;
  var flag = 1;
  var change = -1;
  var count = 0;
  var move = 1;
  var mainInterval;
  var newInterval;
  var hold;

  init();

  function slide(){
    width = slider.offsetWidth/3;
    slider.style.left = x+'px';
    updateDotColor();
    if(x==((images.length-1)*width*change)){
      change = 1;
      flag = -1;
    }else if(x == 0){
      change = -1;
      flag = 1;
    }
    if(x==count*width*change*flag){
      clearInterval(newInterval);
      clearInterval(mainInterval);
      hold = setTimeout(init, wait);
      if(flag == 1) count++;
      else if(flag == -1) count--;
    }
    x += move*change;
  }

  function init(){
    mainInterval = setInterval(slide, animationDelay);
  }

  function nextBtnClicked(){
    if(flag==-1){
      flag=1;
      change=-1;
      count++;
    }
    clearInterval(mainInterval);
    clearInterval(newInterval);
    clearTimeout(hold);
    newInterval = setInterval(slide, 1);
  }

  function previousBtnClicked(){
    if(flag==1){
      flag=-1;
      change=1;
      count--;
    }
    clearInterval(mainInterval);
    clearInterval(newInterval);
    clearTimeout(hold);
    newInterval = setInterval(slide, 1);
  }

  function dotClicked(id){
    if(id>count){
      flag = 1;
      change = -1;
      count = id;
    }else if(id<count){
      flag = -1;
      change = 1;
      count = id;
    }
    clearInterval(mainInterval);
    clearInterval(newInterval);
    clearTimeout(hold);
    newInterval = setInterval(slide, 1);
  }

  function updateDotColor(){
    for(var i=0;i<dots.length;i++){
      if(x==i*width*change*flag) dots[i].classList.add('active');
      else dots[i].classList.remove('active');
    }
  }

}
imageCarousel('slider-container', 1000, 7);
