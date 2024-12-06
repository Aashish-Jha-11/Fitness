var arr = [
    { songName: "Sankat Mochan Hanuman", url: "Songs/Sankat Mochan Hanuman.mp3", img: "Thumbnails/Sankat-Mochan-Hanuman.jpg" },
    { songName: "Unstoppable", url: "Songs/Unstoppable.mp3", img: "Thumbnails/Unstoppable.jpg" },
    { songName: "Last Breath ", url: "Songs/Last Breath.mp3", img: "Thumbnails/Last_Breath.jpg" },
    { songName: "Make Some Noise For Desi Boyz ", url: "Songs/Make Some Noise For Desi Boyz.mp3", img: "Thumbnails/Desi-Boyz.jpg" }
]
var allSongs = document.querySelector("#all-songs")
var poster = document.querySelector("#left")

var play = document.querySelector("#play")
var backward = document.querySelector("#backward")
var forward = document.querySelector("#forward")



var audio = new Audio()

var selectedSong = 0

function mainFunction() {
    var clutter = ""

    arr.forEach(function (AJ, index) {
        clutter += `<div class="song-card" id=${index}>
    <div class="part1">
        <img src=${AJ.img} alt="">
        <h2>${AJ.songName}</h2>
    </div>
    <h6>4:24</h6>
</div>`
    })
    allSongs.innerHTML = clutter

    audio.src = arr[selectedSong].url
    poster.style.backgroundImage = `url(${arr[selectedSong].img})`
}
mainFunction()

allSongs.addEventListener("click", function (dets) {
    selectedSong = dets.target.id
    mainFunction()
    play.innerHTML = `<i class="ri-pause-mini-fill"></i>`
    flag = 1
    audio.play()
})

var flag = 0

play.addEventListener("click", function () {
    if (flag == 0) {
        play.innerHTML = `<i class="ri-pause-mini-fill"></i>`
        mainFunction()
        audio.play()
        flag = 1
    } else {
        play.innerHTML = `<i class="ri-play-mini-fill"></i>`
        mainFunction()
        audio.pause()
        flag = 0
    }
})

forward.addEventListener("click", function () {
    if (selectedSong < arr.length - 1) {
        selectedSong++
        mainFunction()
        audio.play()
    }else{
        forward.style.opacity = 0.4
    }
})
backward.addEventListener("click", function () {
    if (selectedSong > 0) {
        selectedSong--
        mainFunction()
        audio.play()
    }else{
        backward.style.opacity = 0.4
    }
})
