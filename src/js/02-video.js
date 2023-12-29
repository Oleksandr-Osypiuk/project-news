import Vimeoplayer from "@vimeo/player";
import throttle from "lodash.throttle";


const iframe = document.querySelector("#vimeo-player");
const player = new Vimeoplayer(iframe);


    player.on('timeupdate', function(e) {
    throttle(onPlay, 1000);
    });

const onPlay = function ({ seconds }) {
    localStorage.setItem('videoplayer-current-time', seconds);
};

player.on('timeupdate', onPlay)

player.setCurrentTime(localStorage.getItem("videoplayer-current-time"));










