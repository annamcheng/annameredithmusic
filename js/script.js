const song1 = document.getElementById("song-1");
const song2 = document.getElementById("song-2");
const song3 = document.getElementById("song-3");

// http://docs.google.com/uc?export=open&id=1-dV-GJfo68XLUTMP1RIaczWv__YeD8Yg
// http://docs.google.com/uc?export=open&id=19YgsXJCd7Ml1AoLOMcYS078OoCzbrwi7
// http://docs.google.com/uc?export=open&id=/1Ax7PWWmcfw2nvLtkyIWBzfftTAHG9pk0

const dropbox = document.getElementsByClassName("dropbox");

song1.addEventListener("click", function() {
  let audio = new Audio(
    "http://docs.google.com/uc?export=open&id=1-dV-GJfo68XLUTMP1RIaczWv__YeD8Yg"
  );
  audio.play();
});

song2.addEventListener("click", function() {
  let audio = new Audio(
    "http://docs.google.com/uc?export=open&id=19YgsXJCd7Ml1AoLOMcYS078OoCzbrwi7"
  );
  audio.play();
});

song3.addEventListener("click", function() {
  let audio = new Audio(
    "http://docs.google.com/uc?export=open&id=/1Ax7PWWmcfw2nvLtkyIWBzfftTAHG9pk0"
  );
  audio.play();
});
