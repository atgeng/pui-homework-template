// resume toast button
const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')

if (toastTrigger) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
  toastTrigger.addEventListener('click', () => {
    toastBootstrap.show()
  })
}

// media query
const x = window.matchMedia("(min-width: 576px)")

// about page animation
function toggleCheck() {
  if (x.matches) {
    if(document.getElementById('toggler').checked===true){
      $("#bio").fadeOut();
      anime({
        targets: '#about-img',
        translateX: 300,
        delay: 100,
        duration: 1000
      });
        setTimeout(()=>{$('#about').css('display', 'none');}, 1100);
        setTimeout(()=>{$('#skills').css('display', 'flex');
        anime({
          targets: '.skills1',
          translateX: 125,
          duration: 3000
        });
        anime({
          targets: '.skills2',
          translateX: -125,
          duration: 3000
        });
      }, 1100);
      }
      if(document.getElementById('toggler').checked===false){
        $('#about').css('display', 'flex');
        $('#skills').css('display', 'none');
        anime({
          targets: '#about-img',
          translateX: 0,
          delay: 0,
          duration: 1000
        });
        $("#bio").fadeIn();
    }
  }
  else {
    if(document.getElementById('toggler').checked===true){
      $('#about').css('display', 'none');
      $('#skills').css('display', 'flex');
      $('#skill-img').css('display', 'none');
      $('.skills1').css('justify-content', 'center');
      $('.skills2').css('justify-content', 'center');
      $('.skill-block').css('font-size', '1.2rem');

    }
    if(document.getElementById('toggler').checked===false) {
      $('#about').css('display', 'flex');
      $('#skills').css('display', 'none');
    }
  }
};
