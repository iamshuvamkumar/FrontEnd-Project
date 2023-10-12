var hide = document.querySelector(".mid");
function fun() {
  hide.classList.toggle("hide");
}
var menubar = document.querySelector("#closed");
let audioElement = new Audio('music/1.m4a');

let masterplay = document.getElementById("masterplay");
let progresbar = document.getElementById("range");
let SongItem = Array.from(document.getElementsByClassName("SongItem"));
let song =[
  {SongName:"aa",SongPath:"music/1.m4a",coverImg:"coverImg/cover1.png"},
  {SongName:"bb",SongPath:"music/2.m4a",coverImg:"coverImg/cover2.jpg"},
  {SongName:"cc",SongPath:"music/3.m4a",coverImg:"coverImg/cover3.jpg"},
  {SongName:"dd",SongPath:"music/4.m4a",coverImg:"coverImg/cover4.jpg"},
  {SongName:"ee",SongPath:"music/5.m4a",coverImg:"coverImg/cover1.png"},
  {SongName:"ff",SongPath:"music/6.m4a",coverImg:"coverImg/cover1.png"},
  {SongName:"gg",SongPath:"music/1.m4a",coverImg:"coverImg/cover2.jpg"},
  {SongName:"hh",SongPath:"music/2.m4a",coverImg:"coverImg/cover3.jpg"},
  {SongName:"ii",SongPath:"music/3.m4a",coverImg:"coverImg/cover4.jpg"},
  {SongName:"jj",SongPath:"music/4.m4a",coverImg:"coverImg/cover1.png"},
  {SongName:"kk",SongPath:"music/5.m4a",coverImg:"coverImg/cover2.jpg"},
]
SongItem.forEach((element,i)=>{
//  console.log(element +" "+i);
  element.getElementsByTagName("img")[0].src = song[i].coverImg
  element.getElementsByClassName("songname")[0].innerHTML=song[i].SongName;

})


masterplay.addEventListener("click",()=>{
  if(audioElement.paused||audioElement.currentTime<=0){
    audioElement.play();
    masterplay.innerHTML=`pause_circle`;
  }
  else{
    audioElement.pause();
    masterplay.innerHTML=`play_circle`;
  }
})
let r = 0;
right.addEventListener("click",()=>{
if(r<song.length){
  //audioElement.src=song[0].SongPath[r];
  console.log( audioElement.push=(song[r].SongPath));
  document.getElementById("image").src=song[r].coverImg;
  document.getElementById("SongName").innerHTML=song[r].SongName;
  r++;
}
})

left.addEventListener("click",()=>{
  if(r>0){
     r--;
  
    //audioElement.src=song[0].SongPath[r];
    console.log( audioElement.push=(song[r].SongPath));
    document.getElementById("image").src=song[r].coverImg;
    document.getElementById("SongName").innerHTML=song[r].SongName;
   
  }
  })

audioElement.addEventListener("timeupdate",()=>{
  progres = parseInt((audioElement.currentTime/audioElement.duration)*100)
  progresbar.value = progres;
  document.getElementById("timer").innerHTML= progresbar.value = progres;

})
progresbar.addEventListener("change",()=>{
  audioElement.currentTime=parseInt(((progresbar.value)/100)*(audioElement.duration));
})


