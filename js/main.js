(() => {
  console.log('video stuff loaded!');

  //variables stack goes here
  let sigils = document.querySelectorAll('.sigilContainer'),
  lightbox = document.querySelector('.lightbox'),
  closeLightBoxButton = lightbox.querySelector('.close-lightbox');

  //functions in the middle!
  function showHouseVideo() {
    //debugger;
    lightbox.classList.add('show-lightbox');
    //make the video play
  }
  function closeLightBox() {
    //debugger;
    lightbox.classList.remove('show-lightbox');
    //stop the video and rewind it to 0
  }



  //event handing at the bottom
  sigils.forEach(sigil => sigil.addEventListener('click', showHouseVideo));
  closeLightBoxButton.addEventListener('click', closeLightBox);

})();
