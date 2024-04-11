function toggleSongs () {
    // Access the element by its ID
    let songsSecondHalf = document.getElementById("songs-second-half");
    // Toggle the 'hidden' class on the element
    songsSecondHalf.classList.toggle("hidden");
}

// document.getElementById("toggle-button").onclick = toggleSongs;

document.getElementById("toggle-button").addEventListener('click', toggleSongs);
