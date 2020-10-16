const song1 = document.getElementById("song-1");
const song2 = document.getElementById("song-2");
const song3 = document.getElementById("song-3");

//Links to mp3 from google drive
// http://docs.google.com/uc?export=open&id=1-dV-GJfo68XLUTMP1RIaczWv__YeD8Yg
// http://docs.google.com/uc?export=open&id=19YgsXJCd7Ml1AoLOMcYS078OoCzbrwi7
// http://docs.google.com/uc?export=open&id=1Ax7PWWmcfw2nvLtkyIWBzfftTAHG9pk0

// song plays when image is clicked
// song1.addEventListener("click", function() {
//   let audio = new Audio(
//     "http://docs.google.com/uc?export=open&id=1-dV-GJfo68XLUTMP1RIaczWv__YeD8Yg"
//   );
//   audio.play();
// });

// song2.addEventListener("click", function() {
//   let audio = new Audio(
//     "http://docs.google.com/uc?export=open&id=19YgsXJCd7Ml1AoLOMcYS078OoCzbrwi7"
//   );
//   audio.play();
// });

// song3.addEventListener("click", function() {
//   let audio = new Audio(
//     "http://docs.google.com/uc?export=open&id=1Ax7PWWmcfw2nvLtkyIWBzfftTAHG9pk0"
//   );
//   audio.play();
// });

const audio = document.getElementById("audio");
const music = document.getElementById("music");

//When song image is clicked, load to audio player
function playSongClicked(song) {
  switch (song) {
    case 1:
      music.setAttribute(
        "src",
        "https://docs.google.com/uc?export=open&id=1-dV-GJfo68XLUTMP1RIaczWv__YeD8Yg"
      );
      audio.load();
      audio.play();
      break;
    case 2:
      music.setAttribute(
        "src",
        "https://docs.google.com/uc?export=open&id=19YgsXJCd7Ml1AoLOMcYS078OoCzbrwi7"
      );
      audio.load();
      audio.play();
      break;
    case 3:
      music.setAttribute(
        "src",
        "https://docs.google.com/uc?export=open&id=1Ax7PWWmcfw2nvLtkyIWBzfftTAHG9pk0"
      );
      audio.load();
      audio.play();
      break;

    default:
      music.setAttribute(
        "src",
        "https://docs.google.com/uc?export=open&id=1Ax7PWWmcfw2nvLtkyIWBzfftTAHG9pk0"
      );
  }
}

song1.addEventListener("click", function() {
  playSongClicked(1);
});
song2.addEventListener("click", function() {
  playSongClicked(2);
});
song3.addEventListener("click", function() {
  playSongClicked(3);
});
