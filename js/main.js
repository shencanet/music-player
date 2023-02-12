const songList = [
    {
        title: "Acoustic Breeze",
        file: "acousticbreeze.mp3",
        cover: "1.jpg"

    },
    {
        title: "A New Beginning",
        file: "anewbeginning.mp3",
        cover: "2.jpg"
    },
    {
        title: "Creative Minds",
        file: "creativeminds.mp3",
        cover: "3.jpg"
    },
]
typeof(songList)
//capturar elementos DOM
const songs = document.getElementById("songs");

const audio = document.getElementById("audio")
const cover = document.getElementById("cover")
//const title = document.getElementById("title")
//const play = document.getElementById("play")
//const prev = document.getElementById("prev")
//const next = document.getElementById("next")
//const progress = document.getElementById("progress")
//const progressContainer = document.getElementById("progress-container")


//CARGART CANCIONES
function loadSongs() {
    songList.forEach((song, index) => {
        //console.log(index)
        //CREAR LI
        const li = document.createElement("li")
        //CREAR A
        const link = document.createElement("a")
        // HIDRATAR LI
        link.textContent = song.title
        link.href = '#'
        //escuchar clicks
        link.addEventListener("click", () => loadSong(index))
        //añadir a li
        li.appendChild(link)

        //AÑADIR A LI A UL
        songs.appendChild(li)

    })
}
    
//cargar cancion seleccionada

function loadSong(songIndex){
    audio.src = "./audio/" +  songList[songIndex].file
    
    audio.play()

    cover.src = "./img/" +  songList[songIndex].cover
}
//GO¡¡¡¡¡
 loadSongs()


