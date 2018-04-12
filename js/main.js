(() => {
  console.log('video stuff loaded!');

  String.prototype.capIt = function() {return this.replace(this.charAt(), this.charAt().toUpperCase()); }


  //variables stack goes here
let sigils = document.querySelectorAll('.sigilContainer'),
    lightbox = document.querySelector('.lightbox'),
    closeLightBoxButton = lightbox.querySelector('.close-lightbox'),
    vidPlayer = document.querySelector('video'),
    vidControls = document.querySelector('.controls'),
    imageBanner = document.querySelector('#houseImages');

function scrollBanners(offset) {
    let moveIt = offset * 600 + "px";
      imageBanner.style.right = moveIt;
}

  //functions in the middle!
  function showHouseVideo() {
    let houseName = this.className.split(' ')[1].capIt();
    //split apart the class name on the element, grab the
    document.querySelector('h1').textContent = `House ${houseName}`;
    //debugger;
    lightbox.classList.add('show-lightbox');
    //make the video play
    vidPlayer.src = `video/House-${houseName}.${vidPlayer.currentSrc.split('.')[1]}`;
    vidPlayer.load();
    vidPlayer.play();

    scrollBanners(this.dataset.offset);

  }

  function scrollBanners(offset) {
    // move the banner images to the left
    let moveIt = offset * 600 + "px";

    imageBanner.style.right = moveIt;
  }

  function closeLightBox() {
    //debugger;
    lightbox.classList.remove('show-lightbox');
    //stop the video and rewind it to 0
  vidPlayer.pause();
  vidPlayer.currentTime = 0;

  }

  function pausePlay() {
    //debugger
    let theButton = this.firstElementChild;

    if (vidPlayer.paused == true) {
      vidPlayer.play();
      theButton.dataset.icon = "pause-circle";

    }
    else {
    vidPlayer.pause();
    theButton.dataset.icon = "play-circle";
  }

}

  //event handing at the bottom
  sigils.forEach(sigil => sigil.addEventListener('click', showHouseVideo));
  closeLightBoxButton.addEventListener('click', closeLightBox);
  vidPlayer.addEventListener('ended', closeLightbox);
  vidControls.addEventListener('click', pausePlay);

})();
