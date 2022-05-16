import songs from "./data/songs.json"

const [song] = songs
let indexSong = 0
let audio = new Audio(song.url)
let duration = audio.duration
const play = document.querySelector("#play")
const next = document.querySelector("#next")


play.addEventListener("click", playSong)
next.addEventListener("click", nextSong)
audio.addEventListener("ended", () => nextSong())

function nextSong() {
    indexSong++
    audio.pause()
    audio = new Audio(songs[indexSong].url)
    playSong()
}

function pauseSong() {
    audio.pause()
    play.removeEventListener("click", pauseSong)
    play.addEventListener("click", playSong)
}

function playSong() {
    audio.play()
    play.removeEventListener("click", playSong)
    play.addEventListener("click", pauseSong)
    console.log(audio.currentTime)
}

console.log(songs)




