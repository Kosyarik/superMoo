document.addEventListener("DOMContentLoaded", function() {
    start();
  });
  
  
  function start() {
  
  
  const content = document.getElementById("my-supermoo");
  const videoId = content.getAttribute("vid");
 

  async function getWigetOption(videoId) {
    return fetch(
      `https://xwvd-iuut-cgej.f2.xano.io/api:xQ0_YBHQ/widget_setup/${atob(
        videoId
      )}`,
      {
        method: "GET",
      }
    )
      .then((response) => response.json())
      .catch((error) => {
        console.error("Error fetching:", error);
      });
  }
  
  async function init() {
 if (videoId) {
      ///////////////////////
      let playerSettings = {};
      const getWigetData = await getWigetOption(videoId);
  
      if (getWigetData.id) {
        playerSettings = getWigetData.playerSettings;
      }
      const video = document.createElement("div");
  
      // Create <mux-player> element dynamically
      const muxPlayerElement = document.createElement("mux-player");
      muxPlayerElement.setAttribute("playback-id", atob(videoId));
      muxPlayerElement.setAttribute(
        "poster",
        `https://image.mux.com/` + atob(videoId) + `/animated.gif?width=320`
      );
      muxPlayerElement.setAttribute(
        "metadata-video-title",
        "Placeholder (optional)"
      );
      muxPlayerElement.setAttribute(
        "metadata-viewer-user-id",
        "Placeholder (optional)"
      );
      muxPlayerElement.setAttribute(
        "accent-color",
        playerSettings?.playerColor || "#FF0000"
      );
      if (playerSettings.mute) {
        muxPlayerElement.setAttribute("mute", "");
      }
      if (playerSettings.autoPlay) {
        muxPlayerElement.setAttribute("autoPlay", "");
      }
      if (playerSettings.loop) {
        muxPlayerElement.setAttribute("loop", "");
      }

  
      const style = document.createElement("style");
      style.textContent = `
      mux-player {
        --play-button: ${playerSettings.playButton ? "block" : "none"};
        --pause-button: ${playerSettings.pauseButton ? "block" : "none"};
        --volume-range: ${playerSettings.volume ? "block" : "none"};
        --mute-button: ${playerSettings.mute ? "block" : "none"};
        --seek-backward-button: ${playerSettings.backwardButton ? "block" : "none"};
        --seek-forward-button: ${playerSettings.forwardButton ? "block" : "none"};
        --pip-button: ${playerSettings.pipButton ? "block" : "none"};
        --fullscreen-button: ${playerSettings.fullscreenButton ? "block" : "none"};
        --playback-rate-button: ${playerSettings.hoverPreview ? "block" : "none"};
        --autoplay: ${playerSettings.autoPlay ? "block" : "none"};
        --loop: ${playerSettings.loop ? "block" : "none"};
      }
      `;

 
      muxPlayerElement.style.transition = 'opacity 0.5s ease-in-out';
      muxPlayerElement.style.aspectRatio = ' 16 / 9';
      muxPlayerElement.style.width = '100%';
      muxPlayerElement.style.minHeight = '12rem';

      muxPlayerElement.appendChild(style);
      
      video.appendChild(muxPlayerElement);
      

      content.appendChild(video);

      // muxPlayerElement.addEventListener("loadeddata", function () {
      //   muxPlayerElement.style.display = 'block';
      //   setTimeout(() => {
      //     muxPlayerElement.style.opacity = '1';
      //   }, 10); 
      // }, { once: true }); 
    
    }
    ///////////////option btn
  
    ///////////////
  
  }
  
  init();
  
  
  
  }
  