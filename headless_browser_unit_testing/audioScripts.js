/* this event listener is added in 'solSelect_scripts.spec.js' in order to unit test its efficacy: document.addEventListener("visibilitychange", hiddenOrShown); */ //add a 'visibilitychange' event listener to the document that will invoke the 'hiddenOrShow()' function when fired
/* this event listener is added in 'solSelect_scripts.spec.js' in order to unit test its efficacy: window.addEventListener("pageshow", showProgress); */ //add a 'pageshow' event listener to the window object that will invoke the 'showProgress()' function when fired
/* this event listener is added in 'solSelect_scripts.spec.js' in order to unit test its efficacy: window.addEventListener("pagehide", saveAudio); /*/ //add a 'pagehide' event listener to the window object that will invoke the 'saveAudio()' function when fired

let musicPlayer; //declare a variable that will be initialized to refer to the 'musicPlayer' <audio> element (in the 'showProgress()' function, or the 'toggleAudioControls()' function - whichever is invoked first)
let volumeDisplay; //declare a variable that will be initialized to refer to the 'volumeDisplay' <p> (in the 'showProgress()' function, or the 'toggleAudioControls()' function - whichever is invoked first)
let musicalProgress; //declare a variable that will be initialized to refer to the 'musicalProgress' <progress> element (in the 'showProgress()' function, or the 'toggleAudioControls()' function - whichever is invoked first)
let musicalPercentage; //declare a variable that will be initialized to refer to the 'musicalPercentage' <p> element (in the 'showProgress()' function, or the 'toggleAudioControls()' function - whichever is invoked first)
let autoplayError; //declare a variable that will be initialized to refer to the 'autoplayError' <span> element (in the 'showProgress()' function, or the 'toggleAudioControls()' function - whichever is invoked first)

let preferredVolume; //declare a variable that will store the User's 'preferredVolume'
let musicPlaying = false; //declare a variable that keeps track of whether there is 'musicPlaying'
let playTime; //declare a variable that will keep track of the 'currentTime' of the 'musicPlayer'
let userWantsMusic; //declare - but don't initialize - a variable that will store a String-ified boolean representation of whether the User wants the music playing (either "true" or "false")

let progressValue; //declare a variable that will keep track of the musical progress [identical to 'playTime']
let progressMax = 1625; //declare a variable that represents the length in seconds ['duration'] of the mp3 played in the 'musicPlayer'
let progressPercent; //declare a variable that will represent the musical progress as a percentage

function hiddenOrShown() { //called when the document experiences a change in visibility
    if(document.visibilityState === "hidden") { //if the document is a background tab or part of a minimized window, or the OS screen lock is active
        saveAudio(); //invoke the 'saveAudio()' function
    }
    else if(document.visibilityState === "visible") { //otherwise, if the document is the foreground tab of a non-minimized window
        showProgress(); //invoke the 'showProgress()' function
    }
}

function saveAudio() { //triggered when the document's visibilityState changes to 'hidden' and when the 'pagehide' event fires
    if(musicPlaying) { //if there was 'musicPlaying' as the document's visibilityState changed to 'hidden'
        musicPlayer.pause(); //pause the music
        musicPlaying = false; //set 'musicPlaying' to false
        playTime = musicPlayer.currentTime; //set the page variable 'playTime' to the current track time of the 'musicPlayer'
        localStorage.setItem("playTime", playTime.toString()); //save the value of the 'playTime' page variable in localStorage
    }
}

function showProgress() { //function triggered when 'audioControls' is no longer hidden || the document has become 'visible' as a result of the 'visibilityChange' event || the 'pageshow' event fires
    if(localStorage.getItem("playTime")) { //if the variable 'playTime' - and, implicitly, the 'preferredVolume' and 'userWantsMusic' variables - DOES exist in localStorage...
        if(!musicPlayer) { //if 'musicPlayer' equates to a 'falsy' value (i.e. it hasn't yet been initialized - and, therefore, neither have the 'musicalProgress', 'musicalPercentage', 'volumeDisplay', or 'autoplayError' variables)
            musicPlayer = document.getElementById("musicPlayer"); //make the 'musicPlayer' variable refer to the 'musicPlayer' <audio> element
            musicalProgress = document.getElementById("musicalProgress"); //make the 'musicalProgress' variable refer to the 'musicalProgress' <progress> element
            musicalPercentage = document.getElementById("musicalPercentage"); //make the 'musicalPercentage' variable refer to the 'musicalPercentage' <p> element
            volumeDisplay = document.getElementById("volumeDisplay"); //make the 'volumeDisplay' variable refer to the 'volumeDisplay' <p> element
            autoplayError = document.querySelector(".autoplayError"); //make the 'autoplayError' variable refer to the 'autoplayError' <span> element
        }
        playTime = Number(localStorage.getItem("playTime")); //set the 'playTime' page variable equal to the numerical equivalent of the string 'playTime' value stored locally
        preferredVolume = Number(localStorage.getItem("preferredVolume")); //set the 'preferredVolume' page variable equal to the numerical equivalent of the string 'preferredVolume' value stored locally
        musicPlayer.currentTime = playTime; //set the 'currentTime' property of 'musicPlayer' equal to 'playTime'
        musicPlayer.volume = preferredVolume; //set the 'volume' property of 'musicPlayer' equal to 'preferredVolume'
        volumeDisplay.innerHTML = "<br/><i class='fa fa-volume-up'></i><br/>" + Math.round(preferredVolume * 100) + "%"; //update the 'volumeDisplay' paragraph for the User's benefit, displaying the current volume as a percentage of the 'musicPlayer' maximum
        musicalProgress.max = progressMax; //set the 'max' attribute of the 'musicalProgress' <progress> element equal to 'progressMax'
        progressValue = Number(localStorage.getItem("playTime")); //... set the 'progressValue' page variable equal to the numerical equivalent of the string 'playTime' variable stored in localStorage [i.e. equal to the 'playTime' page variable]
        musicalProgress.value = progressValue; //set the 'value' attribute of the 'musicalProgress' element equal to 'progressValue'
        progressPercent = Math.round(musicalProgress.position * 100); //set the 'progressPercent' variable equal to the rounded integer representation of ((musicalProgress.value)/(musicalProgress.max))*100
        musicalPercentage.innerHTML = "MUSICAL PROGRESS: " + progressPercent + "% " + displayMinsAndSecs(Math.round(progressValue)); //display the 'progressPercent' in the 'musicalPercentage' <p> element, as well as displaying the musicPlayer's 'currentTime' in MM:SS format
        userWantsMusic = localStorage.getItem("userWantsMusic"); //set the 'userWantsMusic' page variable equal to the String-ified boolean variable stored locally
        if(userWantsMusic === "true") { //if the User has previously indicated that s/he wants music playing
            try {
                playAudio(); //try to invoke the playAudio() function
                autoplayError.innerHTML = "Autoplay Functionality: Enabled"; //display the message "Autoplay Functionality: Enabled" in the 'autoplayError' <span> element
            }
            catch(error) { //if the current context disallows musical autoplay...
                autoplayError.innerHTML = "Autoplay Functionality: Disabled"; //display the message "Autoplay Functionality: Disabled" in the 'autoplayError' <span> element
            }
        }
    }
    else { //if the variable 'playTime' (and, therefore, the 'preferredVolume' variable) does NOT exist in localStorage...
        if(!musicPlayer) { //if 'musicPlayer' equates to a 'falsy' value
            musicPlayer = document.getElementById("musicPlayer"); //make the 'musicPlayer' variable refer to the 'musicPlayer' <audio> element
            musicalProgress = document.getElementById("musicalProgress"); //make the 'musicalProgress' variable refer to the 'musicProgress' <progress> element
            musicalPercentage = document.getElementById("musicalPercentage"); //make the 'musicalPercentage' variable refer to the 'musicalPercentage' <p> element
            volumeDisplay = document.getElementById("volumeDisplay"); //make the 'volumeDisplay' variable refer to the 'volumeDisplay' <p> element
            autoplayError = document.querySelector(".autoplayError"); //make the 'autoplayError' variable refer to the 'autoplayError' <span> element
        }
        progressValue = "0"; //set the 'progressValue' page variable equal to the String representation of numeric 0
        preferredVolume = 0.6; //set the 'preferredVolume' page variable to 0.6
        playTime = 0; //set the 'playTime' page variable to 0
        localStorage.setItem("playTime", playTime.toString()); //set a 'playTime' variable in localStorage, with the string value of "0"
        localStorage.setItem("preferredVolume", preferredVolume.toString()); //set a 'preferredVolume' variable in localStorage, with the string value of "0.6"
        musicPlayer.currentTime = playTime; //set the 'currentTime' property of 'musicPlayer' equal to 'playTime'
        musicPlayer.volume = preferredVolume; //set the 'volume' property of 'musicPlayer' equal to 'preferredVolume'
        volumeDisplay.innerHTML = "<br/><i class='fa fa-volume-up'></i><br/>" + Math.round(preferredVolume * 100) + "%"; //update the 'volumeDisplay' paragraph for the user's benefit, displaying the current volume as a percentage of the 'musicPlayer' maximum
        musicalProgress.max = progressMax; //set the 'max' attribute of the 'musicalProgress' element equal to 'progressMax'
        musicalProgress.value = progressValue; //set the 'value' attribute of the 'musicalProgress' element equal to 'progressValue'
        progressPercent = 0; //set the 'progressPercent' variable equal to numeric zero
        musicalPercentage.innerHTML = "MUSICAL PROGRESS: " + progressPercent + "% " + displayMinsAndSecs(0); //display the 'progressPercent' in the 'musicalPercentage' paragraph, as well as displaying the musicPlayer's 'currentTime' in MM:SS format
        userWantsMusic = "false"; //set the 'userWantsMusic' page variable to "false", since the User has not yet indicated that s/he wants music playing
    }
    if(document.querySelector("#pageStatus")) { //if there is an element with an id attribute of 'pageStatus' in the <html> document
        document.querySelector("#pageStatus").innerHTML = "Page Status: Fully Loaded"; //set the innerHTML of the 'pageStatus' <span> element to "Page Status: Fully Loaded"
    }
}

function displayMinsAndSecs(progressValue){ //called from within the 'updateMusicalProgress()' function && the 'showProgress()' function; returns the musical progress in MM:SS format
    if(progressValue < 60) { //if the musicPlayer's 'currentTime' is less than sixty seconds
        if(progressValue < 10) { //if the musicPlayer's 'currentTime' is less than ten seconds
            progressValue = "0" + progressValue; //prefix 'progressValue' with a 0
        }
        return "00:" + progressValue; //return a string in 00:SS format
    }
    else if(progressValue < 600) { //otherwise, if the musicPlayer's 'currentTime' is less than ten minutes [six hundred seconds]
        let mins = Math.floor(progressValue/60); //let 'mins' represent the rounded-down result of 'progressValue' divided by 60
        let secs = progressValue % 60; //let 'secs' represent the remainder of 'progressValue' divided by 60
        if(secs < 10) { //if 'secs' is less than 10
            secs = "0" + secs; //prefix 'secs' with a 0
        }
        return "0" + mins + ":" + secs; //return a string in 0M:SS format
    }
    else { //lastly, the musicPlayer's 'currentTime' is at least 600 [ten minutes]
        let mins = Math.floor(progressValue/60); //let 'mins' represent the rounded-down result of 'progressValue' divided by 60
        let secs = progressValue % 60; //let 'secs' represent the remainder of 'progressValue' divided by 60
        if(secs < 10) { //if 'secs' is less than 10
            secs = "0" + secs; //prefix 'secs' with a 0
        }
        return mins.toString() + ":" + secs; //return a string in MM:SS format
    }
}

function playAudio() { //function triggered when the user clicks the 'PLAY' button||invoked programmatically from within 'showProgress()' if the 'userWantsMusic' variable is TRUE
    if(!musicPlaying) { //if there is no 'musicPlaying'
        musicPlayer.play(); //begin playing music from the same point in the 27-minute-5-second track that it was last played at, and at the User's preferred volume
        musicPlaying = true; //set the 'musicPlaying' page variable to TRUE
        userWantsMusic = "true"; //set the 'userWantsMusic' variable to 'true', since the User wants music playing
        localStorage.setItem("userWantsMusic", "true"); //set a variable called 'userWantsMusic' to 'true' in local storage
        updateMusicalProgress(); //call the 'updateMusicalProgress()' function
    }
}

function updateMusicalProgress() { //called from within the 'playAudio()' function after music has begun playing
    if(musicPlaying) { //check to see if there is 'musicPlaying' -- this will return FALSE after the User clicks the 'PAUSE' button
        progressValue = musicPlayer.currentTime; //set the 'progressValue' page variable equal to the 'currentTime' of the 'musicPlayer'
        musicalProgress.value = progressValue; //set the 'value' property of the 'musicalProgress' <progress> element equal to 'progressValue'
        progressPercent = (musicalProgress.position)*100; //set the value of the 'progressPercent' page variable equal to ((musicalProgress.value)/(musicalProgress.max))*100
        musicalPercentage.innerHTML =  "MUSICAL PROGRESS: " + Math.round(progressPercent) + "% " + displayMinsAndSecs(Math.round(progressValue)); //display the 'progressPercent' as a rounded integer in the 'musicalPercentage' paragraph, plus show the musical progress in MM:SS format
        if(progressValue >= progressMax) { //if the 'currentTime' of the 'musicPlayer' indicates that the track has finished...
            musicPlayer.pause(); //pause the music
            playTime = 0; //set the 'playTime' page variable to 0
            musicPlayer.currentTime = playTime; //set the 'currentTime' property of the 'musicPlayer' equal to 'playTime'
            musicPlayer.play(); //play the music again from the beginning
        }
        setTimeout(updateMusicalProgress, 1000); //invoke the 'updateMusicalProgress()' method after a delay of one second
    }
}

function pauseAudio() { //function triggered when the user clicks the 'PAUSE' button
    if(musicPlaying) { //if there is music playing...
        musicPlayer.pause(); //pause the music
        musicPlaying = false; //set 'musicPlaying' to FALSE
        userWantsMusic = "false"; //set the 'userWantsMusic' variable to 'false', since the User does not want music playing
        localStorage.setItem("userWantsMusic", "false"); //set a variable called 'userWantsMusic' to 'false' in local storage
        playTime = musicPlayer.currentTime; //set the page variable 'playTime' to the current track time of the 'musicPlayer'
        localStorage.setItem("playTime", playTime.toString()); //save the value of the 'playTime' page variable in localStorage
    }
}

function volumeUp() { //function triggered when the user clicks the <button> that has a 'volume up' icon displayed on it
    if(preferredVolume <= 0.9) { //if volume is less than the maximum...
        preferredVolume += 0.1; //increase the volume by a tenth of the maximum
        musicPlayer.volume = preferredVolume; //set the volume of the 'musicPlayer' to the new 'preferredVolume'
        volumeDisplay.innerHTML = "<br/><i class='fa fa-volume-up'></i><br/>" + Math.round((preferredVolume * 100)) + "%"; //update the 'volumeDisplay' <p> element
        localStorage.setItem("preferredVolume", preferredVolume.toString()); //store the new 'preferredVolume' in localStorage
    }
}

function volumeDown() { //function triggered when the user clicks the <button> that has a 'volume down' icon displayed on it
    if(preferredVolume >= 0.1) { //if the volume is not muted...
        preferredVolume -= 0.1; //decrease the volume by a tenth of the maximum
        musicPlayer.volume = preferredVolume; //set the volume of the 'musicPlayer' to the new 'preferredVolume'
        volumeDisplay.innerHTML = "<br/><i class='fa fa-volume-up'></i><br/>" + Math.round((preferredVolume * 100)) + "%"; //update the 'volumeDisplay' <p> element
        localStorage.setItem("preferredVolume", preferredVolume.toString()); //store the new 'preferredVolume' in localStorage
    }
}
            