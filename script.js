// Select all table rows containing your liked Youtube videos
// querySelectorAll returns a NodeList instead of an array; however, NodeLists can still use forEach
let videos = document.getElementsByClassName('pl-video yt-uix-tile');

// Insert a checkbox for each <tr>
// videos.forEach(function(el){
//     el.insertAdjacentHTML('afterend', '<input type="checkbox">');
// });

for(let h = 0; h < videos.length; h++){
    // videos[h].insertAdjacentHTML('beforeend', '<input type="checkbox">');
    videos[h].appendChild('beforeend', '<input type="checkbox">');
}