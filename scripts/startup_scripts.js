let loading = document.querySelector("#loading"); //let the 'loading' variable refer to the first element in the document with an id attribute of 'loading'

let loadingInfo = loading.firstElementChild.innerHTML; //let the 'loadingInfo' variable refer to the innerHTML of the <p> element inside the 'loading' variable

let online = navigator.onLine; //let the 'online' variable refer to the browser's online status

if(!online) { //if there is no internet connection...
    loading.style.display = "block"; //change the display property of the 'loading' <div> from 'none' to 'block'
    testConnection(); //...invoke the 'testConnection()' function
}

function testConnection() { //invoked if there is no internet connection...
    online = navigator.onLine; //let the 'online' variable refer to the browser's updated online status
    if(online) { //if the browser is online...
        loading.firstElementChild.innerHTML = loadingInfo + " CONNECTED"; //...display the fact that the device is CONNECTED to the internet
        loading.style.display = "none"; //hide the 'loading' <div>; there is no need to display information to the User about the necessity of an internet connection
        window.location.reload(); //reload the page to display the slideshow images correctly
    }
    else { //otherwise, if the browser is offline...
        loading.firstElementChild.innerHTML = loadingInfo + " NOT CONNECTED"; //...display the fact that the device is NOT CONNECTED to the internet
    }
    if(!online) { //if the browser is still offline...
        setTimeout(function() { testConnection(); }, 1000); //...invoke the 'testConnection()' function after a one-second delay
    }
}

let availableHeight, i; //declare - but don't initialize - two variables that will be used in the 'responsiveImage()' function

let marsSlides = document.getElementsByClassName("mars"); //let the 'marsSlides' variable refer to a NodeList Object that represents a collection of nodes with a className of 'mars'
let marsURLs = document.getElementsByClassName("martian_url_2"); //let the 'marsURLs' variable refer to a NodeList Object that represents a collection of nodes with a className of 'martian_url_2' [this has been modified for testing purposes; it now represents a collection of nodes with a className of 'martian_url']
let marsDescs = document.getElementsByClassName("photo_description"); //let the 'marsDescs' variable refer to a NodeList Object that represents a collection of nodes with a className of 'photo_description'

let index = 0; //let the 'index' variable initially equal 0
let slideshowTimer; //declare a 'slideshowTimer' variable that will be initialized in the 'responsiveImage()' function; this variable will begin the martian slideshow

let arrayLength = marsSlides.length; //set the 'arrayLength' variable equal to the length of the 'marsSlides' NodeList Object

let delayedDisplay = document.getElementById("delayedDisplay"); //let the 'delayedDisplay' variable refer to the 'delayedDisplay' <div>; this <div> contains all the martian urls, martian images, and martian descriptions for the slideshow displayed on this page

let audioControls; //declare a variable that will be initialized in 'responsiveImage()' to refer to the 'audioControls' <div>

function responsiveImage() { //function invoked when the 'pageshow' event fires
    availableHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight; //define the 'availableHeight' variable as equal to the available height of the viewport
    for (i = 0; i < arrayLength; i++) { //for as long as there are elements in the 'marsSlides' NodeList Object...
        marsSlides[i].height = (availableHeight/100)*75; //...set the 'marsSlides' images to 75% of the 'availableHeight'
        marsSlides[i].style.width = "100%"; //set the 'marsSlides' images' width property to 100%
    }
    audioControls = document.querySelector(".audioControls"); //initialize the 'audioControls' variable to refer to the first element in the document with a className of 'audioControls'
    if(slideshowTimer) { //if there is an extant slideshow...
        clearTimeout(slideshowTimer); //...clear the slideshow
        index = 0; //set 'index' to 0
        slideshowTimer = setTimeout(function() { bespokeSlideshow(); }, 100); //and invoke the 'bespokeSlideshow()' function after a 100-millisecond delay
    } else { //otherwise, if there is no extant slideshow...
        slideshowTimer = setTimeout(function() { bespokeSlideshow(); }, 100); //...invoke the 'bespokeSlideshow()' function after a 100-millisecond delay
    }
}

function bespokeSlideshow() { //invoked from within 'responsiveImage()'
    delayedDisplay.style.display = "block"; //display the 'delayedDisplay' <div>
    if(index === arrayLength) { //if 'index' is equal to the length of the 'marsSlides' NodeList Object...
        index = 0; //...set 'index' to 0
    }
    for(let index = 0; index < arrayLength; index++) { //for the length of the 'marsSlides' NodeList Object
        marsSlides[index].style.display = "none"; //hide all the martian images
        marsURLs[index].style.display = "none"; //hide all the martian URLs
        marsDescs[index].style.display = "none"; //hide all the martian descriptions
    }
    marsSlides[index].style.display = "block"; //display the {{index}}th martian image
    marsURLs[index].style.display = "block"; //display the {{index}}th martian URL
    marsDescs[index].style.display = "block"; //display the {{index}}th martian description
    index += 1; //increment the 'index' variable by 1
    slideshowTimer = setTimeout(function() { bespokeSlideshow(); }, 2000); //invoke the 'bespokeSlideshow()' function after a two-second delay
}

function resizedImage() { //function invoked when the <body> element is resized
    availableHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight; //re-calculate the 'availableHeight' property
    for(let i = 0; i < arrayLength; i++) { //for as long as there are elements in the 'marsSlides' NodeList Object...
        marsSlides[i].height = (availableHeight/100) * 75; //set the height property of the martian images to 75% of the 'availableHeight'
        marsSlides[i].style.width = "100%"; //set the width property of the martian images to 100% of the available width
    }
}

function toggleAudioControls() { //called when the 'Music +/-' <h2> element is clicked, to toggle between showing/hiding the audio controls
    if(audioControls.hasAttribute("hidden")) { //if the 'audioControls' <div> element has a "hidden" attribute
        if(!musicPlayer) { //if 'musicPlayer' equates to a 'falsy' value (i.e. it hasn't yet been initialized - and, therefore, neither have the 'musicalProgress', 'musicalPercentage', 'volumeDisplay', or 'autoplayError' variables)
            musicPlayer = document.getElementById("musicPlayer"); //obtain a reference to the 'musicPlayer' <audio> element
            volumeDisplay = document.getElementById("volumeDisplay"); //obtain a reference to the 'volumeDisplay' <p>
            musicalProgress = document.getElementById("musicalProgress"); //obtain a reference to the 'musicalProgress' <progress> element
            musicalPercentage = document.getElementById("musicalPercentage"); //obtain a reference to the 'musicalPercentage' <p> element
            autoplayError = document.querySelector(".autoplayError"); //obtain a reference to the 'autoplayError' <span> element
            showProgress(); //invoke the 'showProgress()' function in order to update the 'volumeDisplay', 'musicalProgress', 'musicalPercentage', and (potentially) the 'autoplayError' elements
        }
        audioControls.removeAttribute("hidden"); //remove the "hidden" attribute from the 'audioControls' <div>
    }
    else { //otherwise, if the 'audioControls' <div> element does not have a "hidden" attribute
        audioControls.setAttribute("hidden", "hidden"); //set a "hidden" attribute on the 'audioControls' <div> element
    }
}

function solSelectScreen() { //function invoked when the User clicks the 'roverButton' in order to access all 124,550 photos furnished by the NASA Mars Rover API
    window.location.href = "solSelect/spirit_accordion.html"; //take the User to the 'sol select screen'
}
