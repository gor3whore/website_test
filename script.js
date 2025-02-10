document.addEventListener("DOMContentLoaded", function () {
    const allVideos = document.querySelectorAll(".fullscreen-video, .thumbnail");

    allVideos.forEach(video => {
        video.addEventListener("click", function () {
            stopAllVideos(); 
            this.muted = false;
            this.play();
        });

        let volumeControl = document.createElement("input");
        volumeControl.type = "range";
        volumeControl.min = "0";
        volumeControl.max = "1";
        volumeControl.step = "0.1";
        volumeControl.value = video.volume;
        volumeControl.classList.add("volume-slider");
        volumeControl.addEventListener("input", function () {
            video.volume = this.value;
        });

        video.parentElement.appendChild(volumeControl);
    });

    function stopAllVideos() {
        allVideos.forEach(video => {
            video.pause();
            video.muted = true; 
        });
    }

    function handleScroll() {
        allVideos.forEach(video => {
            const rect = video.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
            
            } else {
                video.pause(); 
            }
        });
    }

    window.addEventListener("scroll", handleScroll);
});
