import Image from '../images/carestone-video.png';
import PlayIcon from '../images/play.svg';

const CarestoneVideo = () => {
  const template = `
    <div class="container mb-5">
      <a href="https://player.vimeo.com/video/429228019" target="_blank">
        <div class="video-container">
          <div class="play-icon-container">
          <img src="${PlayIcon}" class="play-icon" />
          </div>
          <img class="video-image" src="${Image}" />
        </div>
      </a>
      <caption>© 2020 Carestone Group GmbH</caption>
    </div>  
  `;

  return template;
}

export default CarestoneVideo;
