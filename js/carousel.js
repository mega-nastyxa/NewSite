(function(){
    const carousel = {
      element: document.querySelector('#carousel'),
      previous:  document.querySelector('#carousel .previous'),
      next:  document.querySelector('#carousel .next'),
      images: document.querySelectorAll('#carousel li'),
      tick: 2,
      pause: 3000,
    }

    //инициализация
    for(let i = 0; i < carousel.images.length; ++i){
        carousel.images[i].left = carousel.element.offsetWidth * i;
        carousel.images[i].style.left = carousel.images[i].left + 'px';
    }

    //анимация смещения
    let j = 0, step = carousel.element.offsetWidth;
    function animation(){
      if( j < step){
        j += 2;
        for(let i = 0; i < carousel.images.length; ++i){
          carousel.images[i].left -= 2;
          carousel.images[i].style.left = carousel.images[i].left + 'px';
        }
    
       setTimeout(animation, carousel.tick)
      } else {
        for(let i = 0; i < carousel.images.length; i++){
          if(  carousel.images[i].left == -carousel.element.offsetWidth ){
            carousel.images[i].left = carousel.element.offsetWidth * (carousel.images.length-1)
            break;
          }
        }

        j = 0;
        setTimeout(animation, carousel.pause);
      }
    }
    animation();

  })();