const apiKey = '';
const maxResults = 20;
let searchQuery = 'programming tutorial';

// fetch videos from youtube
function getVideos() {
    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchQuery}&maxResults=${maxResults}&key=${apiKey}`)
        .then(response => response.json())
        .then(data => displayVideos(data.items))
        .catch(error => console.error('Error fetching videos:', error));
}


// display videos
function displayVideos(videos) {
    let html = '';
    videos.forEach(video => {
        const videoId = video.id.videoId;
        const videoTitle = video.snippet.title;
        const channelTitle = video.snippet.channelTitle;

        html += `
            <div>
                <iframe src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe><br>
                <span>${videoTitle}</span>
                <p>${channelTitle}</p>
            </div>
        `;
    });

    document.getElementById('videos').innerHTML = html;
}


//filter videos using the filter option (buttons at the top of the screen)
function filterVideos(language) {
    if (language === 'All') {
        searchQuery = 'programming tutorial';
        getVideos();
    } else {
        searchQuery = language + ' programming tutorial';
        getVideos();
    }
}

// Eventlisteners for filter buttons as well as search input 

    //event listener for filter buttons
document.addEventListener("DOMContentLoaded", function () {
    getVideos('All'); // Default load
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', function () {
            const language = this.dataset.language;
            filterVideos(language);
        });
    });

    // Event listener for the search button
    document.querySelector('.search-btn').addEventListener('click', function () {
        searchQuery = document.querySelector('.search').value + ' programming tutorial';
        getVideos();
    });

    // Event listener for the enter key in the search input
    document.querySelector('.search').addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            searchQuery = this.value + ' programming tutorial';
            getVideos();
        }
    });
      
});
