import Image from '../images/carestone-video.png';
import PlayIcon from '../images/play.svg';

const CarestoneVideo = () => {
  const template = `
    <div class="container mb-5">
      <a href="https://player.vimeo.com/video/429228019" target="_blank">
        <div class="video-container">
          <span class="play-icon-container" style="background-image: url(${PlayIcon})"> </span>
          <img class="video-image" src="${Image}" />
        </div>
      </a>
      <p>© 2020 Carestone Group GmbH</p>
    </div>  
  `;

  return template;
}

export default CarestoneVideo;
