function change_image() {
  let url = document.querySelector('img#change_image').src;
    if(url == 'http://localhost:4000/assets/images/awakening/linkright.png') {
      document.querySelector('img#change_image').src = 'http://localhost:4000/assets/images/awakening/linkleft.png';
    } 
    else{
      document.querySelector('img#change_image').src = 'http://localhost:4000/assets/images/awakening/linkright.png';
    }
}
setInterval(change_image, 500);


let cards = document.querySelectorAll(".card");
let playing = false;

cards.forEach( card =>card.addEventListener('click',function() {
      if(playing){
        return;
      }
      playing = true;
      anime({
        targets: card,
        scale: [{value: 1}, {value: 1.4}, {value: 1, delay: 250}],
        rotateY: {value: '+=180', delay: 200},
        easing: 'easeInOutSine',
        duration: 400,
        complete: function(anim){
        card.firstElementChild.classList.toggle('card-blur');
           playing = false;
        }
      });
    })
);
