// Select all the currently displayed liked videos playlist
let videos = document.getElementsByClassName('pl-video yt-uix-tile');

// Select all the remove buttons for each liked video in the playlist
let removeButtons = document.getElementsByClassName('pl-video-edit-remove-liked-video');

// Loop through each video in the Nodelist and append a child checkbox input element before the end of each video
for(let h = 0; h < videos.length; h++){
    videos[h].appendChild('beforeend', '<input type="checkbox">');
}

// For each close button in removeButtons, click the button. This will bulk delete all liked videos.
// However, Youtube becomes unresponsive and makes Google Chrome lag when you try to do other things.

// Loop through and click all of the remove liked video buttons 
for(let i = 0; i < removeButtons.length; i++){
    removeButtons[i].click();
}