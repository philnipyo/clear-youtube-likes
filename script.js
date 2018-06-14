// Select all table rows containing your liked Youtube videos
let videos = document.querySelectorAll('tr');

// Insert a checkbox for each <tr>
videos.forEach(function(el){
    el.insertAdjacentHTML('afterend', '<input type="checkbox">');
});
