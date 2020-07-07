//Build all the DOM elements here, prior to running the 'headless' tests:

let div1 = document.createElement("DIV");
div1.setAttribute("class", "encompassing");
div1.innerHTML = '<h2 class="musicHeading" onclick="toggleAudioControls()">&#9834; &#9835; Music +/- &#9835; &#9834;<br/><span id="pageStatus">Page Status: Loading...</span><br/><span class="autoplayError"></span></h2><div class="audioControls" hidden="hidden"><audio id="musicPlayer"><source src="C:\\Users\\chris\\PhpstormProjects\\Mars_Rover\\audio\\mars_rover_music.mp3" type="audio/mpeg">Your browser does not support the audio tag.</audio><button class="audio1" onclick="playAudio()">PLAY<br/><span class="play" >&#9658;</span></button><button class="audio2" onclick="pauseAudio()">PAUSE<br/><span class="stop">||</span></button><button class="audio3" onclick="volumeUp()"><i class="fa fa-volume-up"></i><br/><span class="volumeUp" >&plus;</span></button><button class="audio4" onclick="volumeDown()"><i class="fa fa-volume-down"></i><br/><span class="volumeDown">&minus;</span></button><p class="audio5" id="volumeDisplay"><i class="fa fa-volume-up"></i><br/></p><div class="progress"><progress id="musicalProgress"></progress><p id="musicalPercentage" class="percentage"></p><p class="musicCredit"><strong>Inspiring music credit:</strong> <em>AShamaluevMusic</em> <strong>https://www.ashamaluevmusic.com/</strong></p></div></div><h1 class="w3-center w3-black w3-xlarge">MARS ROVER: SPIRIT</h1><div id="pageTraversal"><input id="desiredSol" type="number" placeholder="Enter Sol [1 - 2208]..." /><button id="navigateToSol" onclick="traversePage()">Traverse Page</button></div><button class="titleReturn" onclick="titleReturn()"><strong><span class="backArrow">&lt;--</span> Back To TITLE SCREEN</strong></button><button class="accordion" onclick="toggleDisplay(this, this.className)"><i class="fa fa-hand-o-right"></i><span class="khaki"><strong><em>SPIRIT</em> ROVER </strong></span><span class="w3-deep-purple"><em>CAMERA ABBREVIATIONS</em></span></button><div class="panel"><p>\'FHAZ\' = <strong>F</strong>ront <strong>Haz</strong>ard Avoidance Camera.  \'NAVCAM\' = <strong>Nav</strong>igation <strong>Cam</strong>era.  \'PANCAM\' = <strong>Pan</strong>oramic <strong>Cam</strong>era.  \'MINITES\' = <strong>Mini</strong>ature <strong>T</strong>hermal <strong>E</strong>mission <strong>S</strong>pectrometer.  \'ENTRY\' = <strong>Entry</strong>, Descent, and Landing Camera.  \'RHAZ\' = <strong>R</strong>ear <strong>Haz</strong>ard Avoidance Camera.</p></div><button id="1" class="accordion" onclick="toggleDisplay(this, this.className)"><i class="fa fa-hand-o-right"></i><span class="khaki"><em>SPIRIT</em> <strong>MARTIAN SOL 1</strong> </span><span class="w3-deep-purple"><em>[2004-01-05]</em></span></button><div class="panel"><p><strong>Total photos</strong>: 77.  <strong>Cameras used</strong>: \'ENTRY\', \'FHAZ\', \'NAVCAM\', \'PANCAM\', and \'RHAZ\'.  <br/><br/><strong><a href="../sols/sol_1.html">SOL 1 SLIDESHOW</a></strong><br/><br/><strong><a href="#pageTraversal"><i class="fa fa-arrow-circle-up red"></i> Return to Page Traversal Options <i class="fa fa-arrow-circle-up red"></i></a></strong></p></div><button id="2" class="accordion" onclick="toggleDisplay(this, this.className)"><i class="fa fa-hand-o-right"></i><span class="khaki"><em>SPIRIT</em> <strong>MARTIAN SOL 2</strong> </span><span class="w3-deep-purple"><em>[2004-01-06]</em></span></button><div class="panel"><p><strong>Total photos</strong>: 125.  <strong>Cameras used</strong>: \'MINITES\', \'NAVCAM\', and \'PANCAM\'.  <br/><br/><strong><a href="../sols/sol_2.html">SOL 2 SLIDESHOW</a></strong><br/><br/><strong><a href="#pageTraversal"><i class="fa fa-arrow-circle-up red"></i> Return to Page Traversal Options <i class="fa fa-arrow-circle-up red"></i></a></strong></p></div></div>';
document.body.appendChild(div1);

let script6 = document.createElement("SCRIPT");
script6.setAttribute("src", "C:\\Users\\chris\\PhpstormProjects\\Mars_Rover\\headless_browser_unit_testing\\audioScripts.js");
document.body.appendChild(script6);

let desiredSol = div1.querySelector("#desiredSol"); //let the 'desiredSol' variable refer to the <input> element whose id attribute is 'desiredSol'

function traversePage() { //function triggered by clicking the 'Traverse Page' <button> in the 'pageTraversal' <div>
    let solNumber = Number(desiredSol.value); //let the 'solNumber' variable refer to the numerical equivalent of the extant input in the 'desiredSol' <input> element
    if(solNumber > 0 && solNumber <= 2208) { //if 'solNumber' is greater than 0 and less than - or equal to - 2208
        let solButton = document.getElementById(solNumber.toString()); //let the 'solButton' variable refer to the element in the document whose id attribute is the String equivalent of 'solNumber'
        if(solButton) { //if 'solButton' refers to an actual element (and thus doesn't return a 'falsy' value)
            window.location.href = "#" + solNumber; //scroll solButton into view
        }
    }
}

function titleReturn() { //function invoked when the User clicks the 'Back to TITLE SCREEN' <button>, that...
    window.location.href = "../index.html"; //...navigates the User back to the TITLE SCREEN
}

function toggleDisplay(element, className) { //function invoked when an 'accordion' <button> is clicked
    if(className === "accordion") { //if the className property of the clicked <button> equals "accordion"
        element.className = "accordion active"; //add the 'active' class to the className property of the clicked <button>
    }
    else { //otherwise, if the className property of the clicked <button> is equal to "accordion active"
        element.className = "accordion"; //remove the 'active' class from the className property of the clicked <button>
    }
    let panel = element.nextElementSibling; //set a 'panel' variable to refer to the <div> immediately ensuing the clicked <button>
    if(panel.style.maxHeight) { //if the 'panel' element has a 'maxHeight' property...
        panel.style.maxHeight = null; //set the panel's 'maxHeight' property to 'null'
    } else { //otherwise, if the 'panel' element does not have a 'maxHeight' property
        panel.style.maxHeight = panel.scrollHeight + "px"; //set the 'maxHeight' property of the 'panel' element to {{scrollHeight}}px
    }
}
