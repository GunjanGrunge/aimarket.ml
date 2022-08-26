let tNfMPlayed =document.getElementById("tNfMPlayed")
let tNfFinishes=document.getElementById("tNfFinishes")
let tM2BPlayed=document.getElementById("tM2BPlayed")
let kDYWAchieve=document.getElementById("kDYWAchieve")

function kdcheck(){
    if(kDYWAchieve.value >= 10){
        x = document.getElementById("kDYWAchieve").value;
        document.getElementById("PkDYWAchieve").innerHTML = `${x} ki KD?  Aukat me reh &#128527`}  
}
// document.addEventListener("InputEvent", kdcheck() )

function checkBlank(){
    if(tNfMPlayed.value || kDYWAchieve.value || tNfFinishes.value || tM2BPlayed.value == "undefined")
    {document.getElementById("result").innerHTML="Number kya Tera Baap Daalega?"}
}

function pkd()
{
   let rnf = (tM2BPlayed.value)*(kDYWAchieve.value)
   let rm = (tM2BPlayed.value)-(tNfMPlayed.value)
   let rnfi = rnf-(tNfFinishes.value)
   let rfpm = Math.floor(rnfi/rm)
   if (tNfMPlayed.value >= tM2BPlayed.value)
   {document.getElementById("result").innerHTML = "&#129318 `Yaaaar!!!  Total Matches Bola hai Sahi se Dekh, matlab Total Matches Already played plus how many more you will play"}
//    else if(tNfFinishes.value > tNfMPlayed.value)
//    {document.getElementById("calc").disabled = true}
   else{document.getElementById("result").innerHTML =`The Total Number Finishes Required per ${rm} match is ${rfpm}` + "&#128522"}
}



function reset(){
    tNfMPlayed.value = " "
    kDYWAchieve.value = " " 
    tNfFinishes.value = " " 
    tM2BPlayed.value = " "
    PkDYWAchieve.innerHTML= " "
    result.innerHTML=" "
    tNfMPlayed.innerHTML= " "
    PtM2BPlayed.innerHTML= " "
    PtNfFinishes.innerHTML=" "}

  function played(){
    if(tNfMPlayed.value >= 400){
        y = document.getElementById("tNfMPlayed").value;
        document.getElementById("PtNfMPlayed").innerHTML = `${y} Matches Played? &#128518 Padhai Likhai Karo I.A Y.A bano bc`}  
}

function moreplay(){
    if(tM2BPlayed.value >= 200){
        z = document.getElementById("tM2BPlayed").value;
        document.getElementById("PtM2BPlayed").innerHTML = `abhi aur ${z} Matches khelna hai? &#128514 padhai karle abhi bhi waqt hai`}  
}

function finishes(){
    if(tNfFinishes.value < 100){
        w = document.getElementById("tNfFinishes").value;
        document.getElementById("PtNfFinishes").innerHTML = `bus ${w} Finishes? &#128514 nahi ho raha kya?`}
    else if(tNfFinishes.value > 400){
        w = document.getElementById("tNfFinishes").value;
        document.getElementById("PtNfFinishes").innerHTML = `${w} Finishes? &#128521 Saare bot tere paas hi aarahe the kya?`}
    }

// rnf = Matches_KD*Required_KD
// rm = Matches_KD - Current_Match
// rnfi = rnf-Current_finishes
// rfpm = round(rnfi/rm)
// print("The required Finishes Per Match is {}".format(rfpm))