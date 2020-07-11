
let div2 = document.createElement("DIV");
div2.setAttribute("class", "encompassing");
div2.innerHTML = '<h2 class="musicHeading" onclick="toggleAudioControls2()">&#9834; &#9835; Music +/- &#9835; &#9834;<br/><span class="autoplayError"></span></h2><div class="audioControls" hidden="hidden"><audio id="musicPlayer"><source src="C:\\Users\\chris\\PhpstormProjects\\Mars_Rover\\audio\\mars_rover_music.mp3" type="audio/mpeg">Your browser does not support the audio tag.</audio><button class="audio1" onclick="playAudio()">PLAY<br/><span class="play" >&#9658;</span></button><button class="audio2" onclick="pauseAudio()">PAUSE<br/><span class="stop">||</span></button><button class="audio3" onclick="volumeUp()"><i class="fa fa-volume-up"></i><br/><span class="volumeUp" >&plus;</span></button><button class="audio4" onclick="volumeDown()"><i class="fa fa-volume-down"></i><br/><span class="volumeDown">&minus;</span></button><p class="audio5" id="volumeDisplay"><i class="fa fa-volume-up"></i><br/></p><div class="progress"><progress id="musicalProgress"></progress><p id="musicalPercentage" class="percentage"></p><p class="musicCredit"><strong>Inspiring music credit:</strong> <em>AShamaluevMusic</em> <strong>https://www.ashamaluevmusic.com/</strong></p></div></div><h1 class="w3-center w3-black w3-xlarge">MARS ROVER: SPIRIT</h1><p class="overview">The <strong>Spirit</strong> Rover was launched on 2003-06-10 UTC, and landed on Mars 2004-01-04 UTC.  <strong>Spirit</strong>\'s mission was to work as a mechanical geologist, investigating the possibility that Mars was <em>wetter</em > - and capable of sustaining microbial life - in its ancient past. <strong>Spirit</strong>\'s landing site was <em>Gusev Crater</em>, where mineral deposits hinted at Mars\' <em>wet</em> history.</p><p class="overview">Like its robotic twin <em>Opportunity</em>, <strong>Spirit</strong> survived far longer than its expected 90-day lifespan.  <strong>Spirit</strong> worked on Mars for over six years, last communicating with Earth on 2010-03-21 UTC.  <strong>Spirit</strong> did a stellar job of searching for - and characterizing - a wide range of rocks and soils that lend weight to the hypothesis of Mars\' <em>watery</em> past.</p><p class="overview"><strong>Spirit</strong>\'s most notable scientific contributions include: finding rocks, in <em>Comanche</em>, ten times richer in magnesium and iron carbonates than any martian rocks previously studied; finding, in <em>Home Plate</em>, 90%-pure silica of the kind that usually exists in hot springs or hot steam vents on Earth; and - again at <em>Home Plate</em> - finding evidence of ancient, explosive volcanic activity catalysed by powerful steam eruptions from heated underground <em>water</em>.</p><p class="overview">The following slideshow displays ten photos taken by the <strong>Spirit</strong> Rover. This App provides access to all 124,550 photos detailed by the NASA Mars Rover API; click the button below the slideshow to view the images.</p><div id="loading" style="display:none;"><p>The slideshow requires an internet connection for the images to be fetched and displayed properly.<br/>Connection status: </p></div><div id="delayedDisplay" style="display:none;"><figure class="container"><div class="martian_url_2">https://mars.nasa.gov/mer/gallery/all/2/f/001/2F126468064EDN0000P1001L0M1-BR.JPG</div><div class="martian_url_2">https://mars.nasa.gov/mer/gallery/all/2/n/250/2N148561474EDN8800P1574L0M1-BR.JPG</div><div class="martian_url_2">https://mars.nasa.gov/mer/gallery/all/2/f/500/2F170749933EDNAAFQP1131L0M1-BR.JPG</div><div class="martian_url_2">https://mars.nasa.gov/mer/gallery/all/2/f/750/2F192958007EFFAO55P1110L0M1-BR.JPG</div><div class="martian_url_2">https://mars.nasa.gov/mer/gallery/all/2/n/999/2N215048225EFFAS00P1600L0M1-BR.JPG</div><div class="martian_url_2">https://mars.nasa.gov/mer/gallery/all/2/f/1250/2F237337944EFFAUCMP1214L0M1-BR.JPG</div><div class="martian_url_2">https://mars.nasa.gov/mer/gallery/all/2/p/1500/2P259524854EFFAY00P2282L2M1-BR.JPG</div><div class="martian_url_2">https://mars.nasa.gov/mer/gallery/all/2/n/1850/2N290601383EFFB0G2P0755L0M1-BR.JPG</div><div class="martian_url_2">https://mars.nasa.gov/mer/gallery/all/2/n/2050/2N308352001ESFB1E5P1561L0M1-BR.JPG</div><div class="martian_url_2">https://mars.nasa.gov/mer/gallery/all/2/p/2208/2P322473707ESFB27MP2600L8M1-BR.JPG</div><img src="https://mars.nasa.gov/mer/gallery/all/2/f/001/2F126468064EDN0000P1001L0M1-BR.JPG" class="mars" alt="First photo taken by the Spirit Rover" /><img src="https://mars.nasa.gov/mer/gallery/all/2/n/250/2N148561474EDN8800P1574L0M1-BR.JPG" class="mars" alt="Photo taken by the Spirit Rover on Spirit Martian Sol 250 [2004-09-16]" /><img src="https://mars.nasa.gov/mer/gallery/all/2/f/500/2F170749933EDNAAFQP1131L0M1-BR.JPG" class="mars" alt="Photo taken by the Spirit Rover on Spirit Martian Sol 500 [2005-05-31]" /><img src="https://mars.nasa.gov/mer/gallery/all/2/f/750/2F192958007EFFAO55P1110L0M1-BR.JPG" class="mars" alt="Photo taken by the Spirit Rover on Spirit Martian Sol 750 [2006-02-12]" /><img src="https://mars.nasa.gov/mer/gallery/all/2/n/999/2N215048225EFFAS00P1600L0M1-BR.JPG" class="mars" alt="Photo taken by the Spirit Rover on Spirit Martian Sol 999 [2006-10-26]" /><img src="https://mars.nasa.gov/mer/gallery/all/2/f/1250/2F237337944EFFAUCMP1214L0M1-BR.JPG" class="mars" alt="Photo taken by the Spirit Rover on Spirit Martian Sol 1250 [2007-07-11]" /><img src="https://mars.nasa.gov/mer/gallery/all/2/p/1500/2P259524854EFFAY00P2282L2M1-BR.JPG" class="mars" alt="Photo taken by the Spirit Rover on Spirit Martian Sol 1500 [2008-03-24]" /><img src="https://mars.nasa.gov/mer/gallery/all/2/n/1850/2N290601383EFFB0G2P0755L0M1-BR.JPG" class="mars" alt="Photo taken by the Spirit Rover on Spirit Martian Sol 1850 [2009-03-18]" /><img src="https://mars.nasa.gov/mer/gallery/all/2/n/2050/2N308352001ESFB1E5P1561L0M1-BR.JPG" class="mars" alt="Photo taken by the Spirit Rover on Spirit Martian Sol 2050 [2009-10-10]" /><img src="https://mars.nasa.gov/mer/gallery/all/2/p/2208/2P322473707ESFB27MP2600L8M1-BR.JPG" class="mars" alt="Last photo taken by the Spirit Rover on Spirit Martian Sol 2208 [2010-03-21]" /><figcaption class="photo_description">The First Photo Taken by the <em>Spirit</em> Rover</figcaption><figcaption class="photo_description">Photo Taken by the <em>Spirit</em> Rover on <em>Spirit</em> Martian Sol 250 [2004-09-16]</figcaption><figcaption class="photo_description">Photo Taken by the <em>Spirit</em> Rover on <em>Spirit</em> Martian Sol 500 [2005-05-31]</figcaption><figcaption class="photo_description">Photo Taken by the <em>Spirit</em> Rover on <em>Spirit</em> Martian Sol 750 [2006-02-12]</figcaption><figcaption class="photo_description">Photo Taken by the <em>Spirit</em> Rover on <em>Spirit</em> Martian Sol 999 [2006-10-26]</figcaption><figcaption class="photo_description">Photo Taken by the <em>Spirit</em> Rover on <em>Spirit</em> Martian Sol 1250 [2007-07-11]</figcaption><figcaption class="photo_description">Photo Taken by the <em>Spirit</em> Rover on <em>Spirit</em> Martian Sol 1500 [2008-03-24]</figcaption><figcaption class="photo_description">Photo Taken by the <em>Spirit</em> Rover on <em>Spirit</em> Martian Sol 1850 [2009-03-18]</figcaption><figcaption class="photo_description">Photo Taken by the <em>Spirit</em> Rover on <em>Spirit</em> Martian Sol 2050 [2009-10-10]</figcaption><figcaption class="photo_description">Last photo taken by the <em>Spirit</em> Rover on <em>Spirit</em> Martian Sol 2208 [2010-03-21]</figcaption></figure></div><button class="roverButton" onclick="solSelectScreen()">ACCESS ALL 124,550 <em>SPIRIT</em> ROVER PHOTOS</button><p class="textCredit">Text Credit: https://mars.nasa.gov/mer/mission/overview/</p>';
document.body.appendChild(div2);

let script1 = document.createElement("SCRIPT");
script1.setAttribute("src", "C:\\Users\\chris\\PhpstormProjects\\Mars_Rover\\headless_browser_unit_testing\\custom-matchers.js");
document.body.appendChild(script1);

let script7 = document.createElement("SCRIPT");
script7.setAttribute("src", "C:\\Users\\chris\\PhpstormProjects\\Mars_Rover\\headless_browser_unit_testing\\w3.js");
document.body.appendChild(script7);

let loading2 = div2.querySelector("#loading"); //let the 'loading2' variable refer to the first element in the 'div2' <div> with an id attribute of 'loading'

let loadingInfo2 = loading2.firstElementChild.innerHTML; //let the 'loadingInfo2' variable refer to the innerHTML of the <p> element inside the 'loading2' variable

let online2 = navigator.onLine; //let the 'online2' variable refer to the browser's online status

if(!online2) { //if there is no internet connection...
    loading2.style.display = "block"; //change the display property of the 'loading' <div> from 'none' to 'block'
    testConnection2(); //...invoke the 'testConnection2()' function
}

function testConnection2() { //invoked if there is no internet connection...
    online2 = navigator.onLine; //let the 'online2' variable refer to the browser's updated online status
    if(online2) { //if the browser is online...
        loading2.firstElementChild.innerHTML = loadingInfo2 + " CONNECTED"; //...display the fact that the device is CONNECTED to the internet
        loading2.style.display = "none"; //hide the 'loading2' <div>; there is no need to display information to the User about the necessity of an internet connection
        window.location.reload(); //reload the page to display the slideshow images correctly
    }
    else { //otherwise, if the browser is offline...
        loading2.firstElementChild.innerHTML = loadingInfo2 + " NOT CONNECTED"; //...display the fact that the device is NOT CONNECTED to the internet
    }
    if(!online2) { //if the browser is still offline...
        setTimeout(function() { testConnection2(); }, 1000); //...invoke the 'testConnection2()' function after a one-second delay
    }
}

let availableHeight2, i2; //declare - but don't initialize - two variables that will be used in the 'responsiveImage2()' function

let marsSlides2 = div2.getElementsByClassName("mars"); //let the 'marsSlides2' variable refer to a NodeList Object that represents a collection of nodes with a className of 'mars'
let marsURLs2 = div2.getElementsByClassName("martian_url_2"); //let the 'marsURLs2' variable refer to a NodeList Object that represents a collection of nodes with a className of 'martian_url_2' [this has been modified for testing purposes; it now represents a collection of nodes with a className of 'martian_url']
let marsDescs2 = div2.getElementsByClassName("photo_description"); //let the 'marsDescs2' variable refer to a NodeList Object that represents a collection of nodes with a className of 'photo_description'

let index = 0; //let the 'index' variable initially equal 0
let slideshowTimer; //declare a 'slideshowTimer' variable that will be initialized in the 'responsiveImage2()' function; this variable will begin the martian slideshow

let arrayLength = marsSlides2.length; //set the 'arrayLength' variable equal to the length of the 'marsSlides2' NodeList Object

let delayedDisplay = div2.querySelector("#delayedDisplay"); //let the 'delayedDisplay' variable refer to the 'delayedDisplay' <div> in 'div2'; this <div> contains all the martian urls, martian images, and martian descriptions for the slideshow displayed on this page

let audioControls2; //declare a variable that will be initialized in 'responsiveImage2()' to refer to the 'audioControls' <div>

function responsiveImage2() { //function invoked when the 'pageshow' event fires
    availableHeight2 = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight; //define the 'availableHeight2' variable as equal to the available height of the viewport
    for (i2 = 0; i2 < arrayLength; i2++) { //for as long as there are elements in the 'marsSlides2' NodeList Object...
        marsSlides2[i2].height = (availableHeight2/100)*75; //...set the 'marsSlides2' images to 75% of the 'availableHeight2'
        marsSlides2[i2].style.width = "100%"; //set the 'marsSlides2' images' width property to 100%
    }
    audioControls2 = div2.querySelector(".audioControls"); //initialize the 'audioControls2' variable to refer to the first 'div2' <div> element with a className of 'audioControls'
    if(slideshowTimer) { //if there is an extant slideshow...
        clearTimeout(slideshowTimer); //...clear the slideshow
        index = 0; //set 'index' to 0
        slideshowTimer = setTimeout(function() { bespokeSlideshow(); }, 100); //and invoke the 'bespokeSlideshow()' function after a 100-millisecond delay
    } else { //otherwise, if there is no extant slideshow...
        slideshowTimer = setTimeout(function() { bespokeSlideshow(); }, 100); //...invoke the 'bespokeSlideshow()' function after a 100-millisecond delay
    }
}

function bespokeSlideshow() { //invoked from within 'responsiveImage2()'
    delayedDisplay.style.display = "block"; //display the 'delayedDisplay' <div>
    if(index === arrayLength) { //if 'index' is equal to the length of the 'marsSlides2' NodeList Object...
        index = 0; //...set 'index' to 0
    }
    for(let index = 0; index < arrayLength; index++) { //for the length of the 'marsSlides2' NodeList Object
        marsSlides2[index].style.display = "none"; //hide all the martian images
        marsURLs2[index].style.display = "none"; //hide all the martian URLs
        marsDescs2[index].style.display = "none"; //hide all the martian descriptions
    }
    marsSlides2[index].style.display = "block"; //display the {{index}}th martian image
    marsURLs2[index].style.display = "block"; //display the {{index}}th martian URL
    marsDescs2[index].style.display = "block"; //display the {{index}}th martian description
    index += 1; //increment the 'index' variable by 1
    slideshowTimer = setTimeout(function() { bespokeSlideshow(); }, 2000); //invoke the 'bespokeSlideshow()' function after a two-second delay
}

function resizedImage() { //function invoked when the <body> element is resized
    availableHeight2 = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight; //re-calculate the 'availableHeight2' property
    for(let i = 0; i < arrayLength; i++) { //for as long as there are elements in the 'marsSlides2' NodeList Object...
        marsSlides2[i].height = (availableHeight2/100) * 75; //set the height property of the martian images to 75% of the 'availableHeight2'
        marsSlides2[i].style.width = "100%"; //set the width property of the martian images to 100% of the available width
    }
}

function toggleAudioControls2() { //called when the 'Music +/-' <h2> element is clicked, to toggle between showing/hiding the audio controls
    if(audioControls2.hasAttribute("hidden")) { //if the 'audioControls2' <div> element has a "hidden" attribute
        if(!musicPlayer) { //if 'musicPlayer' equates to a 'falsy' value (i.e. it hasn't yet been initialized - and, therefore, neither have the 'musicalProgress', 'musicalPercentage', 'volumeDisplay', or 'autoplayError' variables)
            musicPlayer = div2.querySelector("#musicPlayer"); //obtain a reference to the 'div2' 'musicPlayer' <audio> element
            volumeDisplay = div2.querySelector("#volumeDisplay"); //obtain a reference to the 'div2' 'volumeDisplay' <p>
            musicalProgress = div2.querySelector("#musicalProgress"); //obtain a reference to the 'div2' 'musicalProgress' <progress> element
            musicalPercentage = div2.querySelector("#musicalPercentage"); //obtain a reference to the 'div2' 'musicalPercentage' <p> element
            autoplayError = div2.querySelector(".autoplayError"); //obtain a reference to the 'div2' 'autoplayError' <span> element
            showProgress(); //invoke the 'showProgress()' function in order to update the 'volumeDisplay', 'musicalProgress', 'musicalPercentage', and (potentially) the 'autoplayError' elements
        }
        audioControls2.removeAttribute("hidden"); //remove the "hidden" attribute from the 'audioControls2' <div>
    }
    else { //otherwise, if the 'audioControls2' <div> element does not have a "hidden" attribute
        audioControls2.setAttribute("hidden", "hidden"); //set a "hidden" attribute on the 'audioControls2' <div> element
    }
}

function solSelectScreen() { //function invoked when the User clicks the 'roverButton' in order to access all 124,550 photos furnished by the NASA Mars Rover API
    window.location.href = "solSelect/spirit_accordion.html"; //take the User to the 'sol select screen'
}

