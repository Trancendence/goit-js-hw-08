// Import
import Player from '@vimeo/player';
import {throttle} from 'lodash';

// Current time
const CURRENT_TIME = "videoplayer-current-time";
// Player
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
// Timeupdate
player.on('timeupdate', throttle(onPlay, 1000));
// Function
function onPlay ({ seconds }) {
    localStorage.setItem(CURRENT_TIME, seconds)
}
setCurrentTime()
function setCurrentTime(){
    if(!localStorage.getItem(CURRENT_TIME)){
        return
    }
    player.setCurrentTime(localStorage.getItem(CURRENT_TIME))
}


