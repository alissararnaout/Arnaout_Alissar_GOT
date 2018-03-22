(() => {
  console.log('video stuff loaded!');
// variables come first
// grab the video
  const vidPlayer = document.querySelector('video')
        pauseButton = document.querySelectorAll('button')[0],
        playButton = document.querySelectorAll('button')[1],
        rewindButton = document.querySelectorAll('button')[2];


// functions go in the middle
  function volOn() {
    vidPlayer.muted = false;
  }
  function volOff() {
    vidPlayer.muted = true;
  }

  function playVideo() {
    //make the video play
    vidPlayer.play();
  }

  function pauseVideo() {
    //make the video pause
    vidPlayer.pause();
  }

  function rewindVideo() {
    //make the video rewind
    vidPlayer.currentTime = 0;
    // use -=5 to move it back 5 or x secs
  }

  vidPlayer.addEventListener('mouseover', volOn);
  vidPlayer.addEventListener('mouseout', volOff);

  playButton.addEventListener('click', playVideo);
  pauseButton.addEventListener('click', pauseVideo);
  rewindButton.addEventListener('click', rewindVideo);
})();
