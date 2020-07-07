describe("SOLSELECT_SCRIPTS.JS", function() {

    let navigateToSol = document.getElementById("navigateToSol");
    let titleReturn = document.getElementsByClassName("titleReturn")[0];
    let accordionButton = document.getElementsByClassName("accordion")[0];
    let window_location;

    describe("the 'traversePage()' function", function() {

        let traversePageSpy;

        beforeEach(function() {
            traversePageSpy = spyOn(window, 'traversePage').and.callThrough();
        });

        it("is called when the User clicks the 'navigateToSol' <button>", function() {
            expect(traversePageSpy).not.toHaveBeenCalled();
            navigateToSol.click();
            expect(traversePageSpy).toHaveBeenCalledTimes(1);
        });
        it("checks whether the value of the 'desiredSol' <input> element is greater than 0 and no greater than than 2208; if this test passes then it navigates the User to the appropriate sol <button>", function() {
            desiredSol.value = 1;
            navigateToSol.click();
            expect(location.hash).toMatch("#1");
            desiredSol.value = 2;
            navigateToSol.click();
            expect(location.hash).toMatch("#2");
            desiredSol.value = 2209; //the 'location.hash' will not update, since 2209 is greater than 2208
            navigateToSol.click();
            expect(location.hash).toMatch("#2");
        });
    });

    describe("the 'titleReturn()' function", function() {
        let titleReturnSpy;

        beforeEach(function() {
            titleReturnSpy = spyOn(window, 'titleReturn').and.callFake(function() {
                window_location = "title page aka index.html";
            });
        });

        it("is invoked when the 'titleReturn' <button> is clicked", function() {
            expect(titleReturnSpy).not.toHaveBeenCalled();
            titleReturn.click();
            expect(titleReturnSpy).toHaveBeenCalledTimes(1);
        });
        it("navigates the User back to the title page of the app ('index.html')", function() {
            titleReturn.click();
            expect(window_location).toBe("title page aka index.html");
        });
    });

    describe("the 'toggleDisplay()' function", function() {
        let toggleDisplaySpy;

        beforeEach(function() {
            toggleDisplaySpy = spyOn(window, 'toggleDisplay').and.callThrough();
        });

        it("is called when the User clicks a <button> whose className is 'accordion'", function() {
            expect(toggleDisplaySpy).not.toHaveBeenCalled();
            accordionButton.click();
            expect(toggleDisplaySpy).toHaveBeenCalledTimes(1);
        });
        it("displays the ensuing <div> element if it is not currently displayed", function() {
            expect(accordionButton.className).toMatch("accordion active");
            expect(accordionButton.nextElementSibling.style.maxHeight).toBe(accordionButton.nextElementSibling.scrollHeight + "px");
        });
        it("hides the ensuing <div> element if it is currently displayed", function() {
            expect(accordionButton.className).toBe("accordion active");
            accordionButton.click();
            expect(accordionButton.className).toMatch("accordion");
            expect(accordionButton.nextElementSibling.style.maxHeight).toBeFalsy();
        });
    });
});

describe("AUDIO_SCRIPTS.JS", function() {

    let visibilityChangeEvent = new Event('visibilitychange', {
        view: window,
        bubbles: true,
        cancelable: false
    });
    let pageShowEvent = new Event('pageshow', {
        view: window,
        bubbles: false,
        cancelable: false
    });
    let pageHideEvent = new Event('pagehide', {
        view: window,
        bubbles: false,
        cancelable: false
    });
    let hiddenOrShownSpy;
    let saveAudioSpy;
    let playAudioSpy;
    let embeddedShowProgressSpy;
    let showProgressSpy;
    let visibility_state;
    let playMusic = div1.querySelector(".audio1");

    it("declares and initializes two variables, 'musicPlaying' (false) and 'progressMax' (1625)", function() {
        expect(musicPlaying).toBe(false);
        expect(progressMax).toEqual(1625);
    });
    it("declares - but doesn't initialize - ten further variables: 'musicPlayer'; 'volumeDisplay'; 'musicalProgress'; 'musicalPercentage'; 'autoplayError'; 'preferredVolume'; 'playTime'; 'userWantsMusic'; 'progressValue'; and 'progressPercent'", function() {
        musicPlayer = undefined, volumeDisplay = undefined, musicalProgress = undefined, musicalPercentage = undefined, autoplayError = undefined, preferredVolume = undefined, playTime = undefined, userWantsMusic = undefined, progressValue = undefined, progressPercent = undefined; //these variables are set back to 'undefined' because a 'pageshow' event has already fired during the tests, thus initializing the variables; the initialized state of these variables is tested in subsequent tests
        expect(musicPlayer).toBeUndefined();
        expect(volumeDisplay).toBeFalsy();
        expect(musicalProgress).not.toBeDefined();
        expect(musicalPercentage).not.toBeTruthy();
        expect(autoplayError).not.toBe(jasmine.anything());
        expect(preferredVolume).not.toBe(jasmine.any(Number));
        expect(playTime).toBeUndefined();
        expect(userWantsMusic).not.toBeTruthy();
        expect(progressValue).toBeFalsy();
        expect(progressPercent).not.toBe(jasmine.any(Number));
    });
    describe("the 'hiddenOrShown()' function", function() {

        document.addEventListener("visibilitychange", function() { hiddenOrShown(); });

        it("is called when the document experiences a change in visibility", function() {
            hiddenOrShownSpy = spyOn(window, 'hiddenOrShown');
            expect(hiddenOrShownSpy).not.toHaveBeenCalled();
            document.dispatchEvent(visibilityChangeEvent);
            expect(hiddenOrShownSpy).toHaveBeenCalled();
        });
        it("invokes the 'saveAudio()' function if the visibilityState of the document is 'hidden'", function() {
            hiddenOrShownSpy = spyOn(window, 'hiddenOrShown').and.callFake(function() {
                if(visibility_state === "hidden") {
                    saveAudio();
                }
                else if(visibility_state === "visible") {
                    showProgress();
                }
            });
            saveAudioSpy = spyOn(window, 'saveAudio');
            visibility_state = "hidden";
            expect(saveAudioSpy).not.toHaveBeenCalled();
            document.dispatchEvent(visibilityChangeEvent);
            expect(saveAudioSpy).toHaveBeenCalled();
            expect(saveAudioSpy).toHaveBeenCalledTimes(1);
        });
        it("invokes the 'showProgress()' function if the visibilityState of the document is 'visible'", function() {
            hiddenOrShownSpy = spyOn(window, 'hiddenOrShown').and.callFake(function() {
                if(visibility_state === "hidden") {
                    saveAudio();
                }
                else if(visibility_state === "visible") {
                    showProgress();
                }
            });
            showProgressSpy = spyOn(window, 'showProgress');
            visibility_state = "visible";
            expect(showProgressSpy).not.toHaveBeenCalled();
            document.dispatchEvent(visibilityChangeEvent);
            expect(showProgressSpy).toHaveBeenCalled();
        });
    });
    describe("the 'saveAudio()' function", function() {
        it("is triggered when the document's visibilityState changes to 'hidden' and when the 'pagehide' event fires", function() {
            document.addEventListener("pagehide", function() { saveAudio(); });
            document.addEventListener("visibilitychange", function() { saveAudio(); });
            saveAudioSpy = spyOn(window, 'saveAudio');
            expect(saveAudioSpy).not.toHaveBeenCalled();
            document.dispatchEvent(pageHideEvent);
            expect(saveAudioSpy).toHaveBeenCalledTimes(1);
            document.dispatchEvent(visibilityChangeEvent);
            expect(saveAudioSpy).toHaveBeenCalledTimes(2);
        });
        describe("it checks the value of the 'musicPlaying' page variable and, if it evaluates to TRUE, it executes the following operations:", function() {
            it("pauses the 'musicPlayer'", function() {
                musicPlaying = false;
                let playAudioSpyNewbie = spyOn(window, 'playAudio').and.callThrough();
                expect(playAudioSpyNewbie).not.toHaveBeenCalled();
                playMusic.click();
                expect(playAudioSpyNewbie).toHaveBeenCalledTimes(1);
                expect(musicPlaying).toBeTrue();
                saveAudio();
                expect(musicPlaying).toBeFalse();
            });
            it("sets the 'musicPlaying' page variable to FALSE", function() {
                musicPlaying = true;
                expect(musicPlaying).toBe(true);
                saveAudio();
                expect(musicPlaying).toBe(false);
            });
            it("sets the 'playTime' page variable equal to the current track time of the 'musicPlayer'", function() {
                musicPlaying = true;
                playTime = 10;
                musicPlayer.currentTime = 20;
                expect(playTime).toEqual(10);
                saveAudio();
                expect(playTime).toEqual(20);
            });
            it("saves the value of the 'playTime' page variable in localStorage", function() {
                localStorage.setItem("playTime", "10");
                expect(localStorage.getItem("playTime")).toBe("10");
                musicPlaying = true;
                musicPlayer.currentTime = 20;
                saveAudio();
                expect(localStorage.getItem("playTime")).toBe("20");
                localStorage.removeItem("playTime");
            });
        });
    });
    describe("the 'showProgress()' function", function() {

        beforeEach(function() {
            window.addEventListener("pageshow", function() { showProgress(); });
        });
        it("is invoked when the 'pageshow' event fires", function() {
            showProgressSpy = spyOn(window, 'showProgress');
            expect(showProgressSpy).not.toHaveBeenCalled();
            window.dispatchEvent(pageShowEvent);
            expect(showProgressSpy).toHaveBeenCalledTimes(1);
        });
        it("checks if a 'playTime' variable exists in localStorage, and sets a 'playTime' variable to '0' in localStorage if it doesn't already exist", function() {
            localStorage.removeItem("playTime");
            expect(localStorage.getItem("playTime")).toBeNull();
            window.dispatchEvent(pageShowEvent);
            expect(localStorage.getItem("playTime")).toBeDefined();
            expect(Number(localStorage.getItem("playTime"))).toBe(0);
        });
        it("ensures that the following variables are initialized: 'musicPlayer'; 'musicalProgress'; 'musicalPercentage'; 'volumeDisplay'; and 'autoplayError'", function() {
            window.dispatchEvent(pageShowEvent);
            expect(musicPlayer).toBeDefined();
            expect(musicalProgress).toBeTruthy();
            expect(musicalPercentage).not.toBeUndefined();
            expect(volumeDisplay).not.toBeFalsy();
            expect(autoplayError).toBeDefined();
        });
        describe("if there is a 'playTime' variable in localStorage when the function is invoked, it:", function() {
            it("sets the 'playTime' page variable equal to the numerical representation of the 'playTime' variable in localStorage", function() {
                localStorage.setItem("playTime", "420");
                expect(playTime).toEqual(0);
                window.dispatchEvent(pageShowEvent);
                expect(playTime).toEqual(420);
                localStorage.setItem("playTime", "0");
            });
            it("sets the 'preferredVolume' page variable equal to the numerical representation of the 'preferredVolume' variable in localStorage", function() {
                localStorage.setItem("preferredVolume", "0.8");
                window.dispatchEvent(pageShowEvent);
                expect(preferredVolume).toEqual(0.8);
                localStorage.setItem("preferredVolume", "0.6");
            });
            it("sets the currentTime property of the 'musicPlayer' equal to the value of 'playTime'", function() {
                localStorage.setItem("playTime", "420");
                window.dispatchEvent(pageShowEvent);
                expect(musicPlayer.currentTime).toBe(420);
                localStorage.setItem("playTime", "0");
            });
            it("sets the volume of the 'musicPlayer' equal to the 'preferredVolume' variable", function() {
                localStorage.setItem("preferredVolume", "0.7");
                window.dispatchEvent(pageShowEvent);
                expect(musicPlayer.volume).toBe(0.7);
                localStorage.setItem("preferredVolume", "0.6");
            });
            it("updates the innerHTML of the 'volumeDisplay' <p> element", function() {
                localStorage.setItem("preferredVolume", "0.9");
                window.dispatchEvent(pageShowEvent);
                expect(volumeDisplay.innerHTML).toMatch("<br><i class=\"fa fa-volume-up\"></i><br>90%");
            });
            it("sets the 'max' attribute of the 'musicalProgress' <progress> element to the value of the 'progressMax' variable", function() {
                window.dispatchEvent(pageShowEvent);
                expect(musicalProgress.max).toBe(1625);
            });
            it("sets the 'progressValue' variable equal to the numerical representation of the localStorage 'playTime' variable", function() {
                localStorage.setItem("playTime", "420");
                window.dispatchEvent(pageShowEvent);
                expect(progressValue).toBe(420);
                localStorage.setItem("playTime", "0");
            });
            it("sets the value of the 'musicalProgress' <progress> element equal to 'progressValue'", function() {
                localStorage.setItem("playTime", "450");
                window.dispatchEvent(pageShowEvent);
                expect(musicalProgress.value).toEqual(450);
                localStorage.setItem("playTime", "0");
            });
            it("updates the value of the 'progressPercent' variable, based on the position attribute of the 'musicalProgress' <progress> element", function() {
                localStorage.setItem("playTime", "406");
                window.dispatchEvent(pageShowEvent);
                expect(progressPercent).toBe(25); //406 is a (rounded) quarter of 1625, thus 25%
                localStorage.setItem("playTime", "0");
            });
            it("updates the innerHTML of the 'musicalPercentage' <p> element", function() {
                localStorage.setItem("playTime", "406");
                window.dispatchEvent(pageShowEvent);
                expect(musicalPercentage.innerHTML).toMatch("MUSICAL PROGRESS: 25% 06:46");
                localStorage.setItem("playTime", "0");
            });
            it("sets the 'userWantsMusic' page variable equal to the value of the localStorage 'userWantsMusic' variable", function() {
                localStorage.removeItem("userWantsMusic");
                window.dispatchEvent(pageShowEvent);
                expect(userWantsMusic).toBeNull();
                localStorage.setItem("userWantsMusic", "true");
                window.dispatchEvent(pageShowEvent);
                expect(userWantsMusic).toBe("true");
                localStorage.removeItem("userWantsMusic");
            });
            it("attempts to play music automatically, by invoking the 'playAudio()' function if the 'userWantsMusic' variable is 'true'", function() {
                localStorage.setItem("userWantsMusic", "true");
                embeddedShowProgressSpy = spyOn(window, 'showProgress').and.callThrough();
                playAudioSpy = spyOn(window, 'playAudio');
                expect(embeddedShowProgressSpy).not.toHaveBeenCalled();
                expect(playAudioSpy).not.toHaveBeenCalled();
                window.dispatchEvent(pageShowEvent);
                expect(embeddedShowProgressSpy).toHaveBeenCalled();
                expect(playAudioSpy).toHaveBeenCalled();
                localStorage.removeItem("userWantsMusic");
            });
            it("updates the <span> element whose className is 'autoplayError' with a message relating to the enabled/disabled nature of autoplay functionality", function() {
                localStorage.setItem("userWantsMusic", "true");
                window.dispatchEvent(pageShowEvent);
                expect(autoplayError.innerHTML).toMatch("Autoplay Functionality: Enabled");
                localStorage.removeItem("userWantsMusic");
            });
            it("indicates to the User if there is a problem with autoplay functionality", function() {
                localStorage.setItem("userWantsMusic", "true");
                embeddedShowProgressSpy = spyOn(window, "showProgress").and.callThrough();
                playAudioSpy = spyOn(window, "playAudio").and.throwError(Error);
                window.dispatchEvent(pageShowEvent);
                expect(autoplayError.innerHTML).toBe("Autoplay Functionality: Disabled");
                localStorage.removeItem("userWantsMusic");
            });
        });
        describe("if there is NOT a 'playTime' variable in localStorage when the function is invoked, it:", function() {
            it("sets the 'progressValue' page variable to \"0\"", function() {
                localStorage.removeItem("playTime");
                window.dispatchEvent(pageShowEvent);
                expect(progressValue).toMatch("0");
            });
            it("sets the 'preferredVolume' page variable to 0.6", function() {
                localStorage.removeItem("playTime");
                window.dispatchEvent(pageShowEvent);
                expect(preferredVolume).toBe(0.6);
            });
            it("sets the 'playTime' page variable to 0", function() {
                localStorage.removeItem("playTime");
                window.dispatchEvent(pageShowEvent);
                expect(playTime).toBe(0);
            });
            it("sets two variables in localStorage - 'playTime' (\"0\") and 'preferredVolume' (\"0.6\")", function() {
                localStorage.removeItem("playTime");
                window.dispatchEvent(pageShowEvent);
                expect(localStorage.getItem("playTime")).toMatch("0");
                expect(localStorage.getItem("preferredVolume")).toBe("0.6");
            });
            it("sets the currentTime property of the 'musicPlayer' <audio> element equal to the value of the 'playTime' page variable", function() {
                localStorage.removeItem("playTime");
                window.dispatchEvent(pageShowEvent);
                expect(musicPlayer.currentTime).toBe(0);
            });
            it("sets the volume property of the 'musicPlayer' <audio> element equal to the value of the 'preferredVolume' page variable", function() {
                localStorage.removeItem("playTime");
                window.dispatchEvent(pageShowEvent);
                expect(musicPlayer.volume).toEqual(preferredVolume);
                expect(musicPlayer.volume).toBe(0.6);
            });
            it("updates the 'volumeDisplay' <p> element for the User's benefit, displaying the current volume as a percentage of the 'musicPlayer' maximum", function() {
                localStorage.removeItem("playTime");
                window.dispatchEvent(pageShowEvent);
                expect(volumeDisplay.innerHTML).toMatch("<br><i class=\"fa fa-volume-up\"></i><br>60%");
            });
            it("sets the 'max' attribute of the 'musicalProgress' <progress> element equal to the value of the 'progressMax' page variable", function() {
                localStorage.removeItem("playTime");
                window.dispatchEvent(pageShowEvent);
                expect(musicalProgress.max).toEqual(1625);
            });
            it("sets the 'value' attribute of the 'musicalProgress' <progress> element equal to the value of the 'progressValue' page variable", function() {
                localStorage.removeItem("playTime");
                window.dispatchEvent(pageShowEvent);
                expect(musicalProgress.value).toEqual(0);
            });
            it("sets the value of the 'progressPercent' page variable to zero", function() {
                localStorage.removeItem("playTime");
                window.dispatchEvent(pageShowEvent);
                expect(progressPercent).toBe(0);
            });
            it("updates the 'musicalPercentage' <p> element for the User's benefit, displaying the percentage of the musical track that has been played and showing the 'currentTime' property of the 'musicPlayer' in MM:SS format", function() {
                localStorage.removeItem("playTime");
                window.dispatchEvent(pageShowEvent);
                expect(musicalPercentage.innerHTML).toMatch("MUSICAL PROGRESS: 0% 00:00");
            });
            it("sets the 'userWantsMusic' page variable to 'false', since the User has not yet indicated that s/he wants music to be playing", function() {
                localStorage.removeItem("playTime");
                window.dispatchEvent(pageShowEvent);
                expect(userWantsMusic).toBeDefined();
                expect(userWantsMusic).toBeFalsy();
            });
        });
        it("updates the 'pageStatus' <span> element, informing the User that the page is 'fully loaded'", function() {
            localStorage.removeItem("playTime");
            expect(pageStatus.innerHTML).toMatch("Page Status: Fully Loaded");
        });
    });
    describe("the 'displayMinsAndSecs(progressValue)' function", function() {
        it("is called from within the 'updateMusicalProgress()' and the 'showProgress()' functions", function() {
            let playAudioSpy = spyOn(window, 'playAudio').and.callFake(function() {
                updateMusicalProgress();
            });
            let updateMusicalProgressSpy = spyOn(window, 'updateMusicalProgress').and.callFake(function() {
                displayMinsAndSecs(1);
            });
            let progressSpy = spyOn(window, 'showProgress').and.callFake(function() {
                displayMinsAndSecs(1);
            });
            let displayMinsAndSecsSpy = spyOn(window, 'displayMinsAndSecs');
            let playButton = div1.querySelector(".audio1");
            playButton.click();
            expect(playAudioSpy).toHaveBeenCalledTimes(1);
            expect(updateMusicalProgressSpy).toHaveBeenCalledTimes(1);
            expect(displayMinsAndSecsSpy).toHaveBeenCalledTimes(1);
            expect(progressSpy).not.toHaveBeenCalled();
            window.dispatchEvent(pageShowEvent);
            expect(progressSpy).toHaveBeenCalled();
            expect(displayMinsAndSecs.calls.count()).toBeGreaterThan(1);
        });
        it("takes the current play time (in seconds) as an argument and returns a string in the format 'MM:SS'", function() {
            let testPlayTime;

            testPlayTime = displayMinsAndSecs(9);
            expect(testPlayTime).toBe("00:09");
            testPlayTime = displayMinsAndSecs(59);
            expect(testPlayTime).toMatch("00:59");
            testPlayTime = displayMinsAndSecs(61);
            expect(testPlayTime).toBe("01:01");
            testPlayTime = displayMinsAndSecs(661);
            expect(testPlayTime).toMatch("11:01");
        });
    });
    describe("the playAudio() function", function() {

        beforeEach(function() {
            localStorage.setItem("playTime", "10");
            localStorage.setItem("preferredVolume", "0.6");
            localStorage.setItem("userWantsMusic", "true");
        });

        afterEach(function() {
            localStorage.removeItem("playTime");
            localStorage.removeItem("preferredVolume");
            localStorage.removeItem("userWantsMusic");
        });

        it("is invoked when the User clicks the 'PLAY' <button>", function() {
            let audioSpy = spyOn(window, 'playAudio');
            let button = div1.querySelector(".audio1");
            expect(audioSpy).not.toHaveBeenCalled();
            button.click();
            expect(audioSpy).toHaveBeenCalledTimes(1);
        });
        it("is also invoked from within the 'showProgress()' function if there is a 'playTime' variable and a positive 'userWantsMusic' variable set in localStorage", function() {
            showProgressSpy = spyOn(window, 'showProgress').and.callThrough();
            let audioDetective = spyOn(window, 'playAudio');
            expect(showProgressSpy).not.toHaveBeenCalled();
            expect(audioDetective).not.toHaveBeenCalled();
            window.dispatchEvent(pageShowEvent);
            expect(showProgressSpy).toHaveBeenCalled();
            expect(audioDetective).toHaveBeenCalled();
        });
        it("checks whether there is music playing and only effects changes if music is absent", function() {
            let updateMusicalProgressSpy = spyOn(window, 'updateMusicalProgress');
            musicPlaying = true;
            playAudio();
            expect(updateMusicalProgressSpy).not.toHaveBeenCalled();
            musicPlaying = false;
            playAudio();
            expect(updateMusicalProgressSpy).toHaveBeenCalledTimes(1);
        });
        describe("if music is not currently playing, it:", function() {
            it("begins playing music", function() {
                musicPlaying = false;
                playAudio();
                expect(musicPlaying).toBe(true);
                pauseAudio();
                expect(musicPlaying).toBe(false);
            });
            it("sets the 'musicPlaying' page variable to true", function() {
                musicPlaying = false;
                expect(musicPlaying).toBeFalse();
                playAudio();
                expect(musicPlaying).toBeTrue();
                pauseAudio();
            });
            it("sets the 'userWantsMusic' page variable to true", function() {
                userWantsMusic = false;
                expect(userWantsMusic).toBeFalse();
                playAudio();
                expect(userWantsMusic).toBe("true");
                pauseAudio();
            });
            it("sets a 'userWantsMusic' variable with the value 'true' in localStorage", function() {
                localStorage.setItem("userWantsMusic", "false");
                expect(localStorage.getItem("userWantsMusic")).toBe("false");
                playAudio();
                expect(localStorage.getItem("userWantsMusic")).toBe("true");
                pauseAudio();
            });
            it("calls the 'updateMusicalProgress()' function", function() {
                let updateMusicalProgressSpy = spyOn(window, 'updateMusicalProgress');
                expect(updateMusicalProgressSpy).not.toHaveBeenCalled();
                playAudio();
                expect(updateMusicalProgressSpy).toHaveBeenCalled();
                pauseAudio();
            });
        });
    });
    describe("the 'updateMusicalProgress()' function", function() {
        it("checks that the 'musicPlaying' variable is set to 'true', then executes a code block, and re-invokes the 'updateMusicalProgress()' function after a one-second delay", function() {
            let updateMusicalProgressSpy = spyOn(window, 'updateMusicalProgress').and.callThrough();
            musicPlaying = false;
            jasmine.clock().install();
            updateMusicalProgress();
            expect(updateMusicalProgressSpy).toHaveBeenCalledTimes(1);
            jasmine.clock().tick(1001);
            expect(updateMusicalProgressSpy).toHaveBeenCalledTimes(1); //not re-invoked, as 'musicPlaying' is FALSE
            musicPlaying = true;
            updateMusicalProgress();
            expect(updateMusicalProgressSpy).toHaveBeenCalledTimes(2);
            jasmine.clock().tick(1001);
            expect(updateMusicalProgressSpy).toHaveBeenCalledTimes(3); //re-invoked, as 'musicPlaying' is TRUE
            musicPlaying = false;
            jasmine.clock().tick(1001);
            expect(updateMusicalProgressSpy).toHaveBeenCalledTimes(4); //because the 'updateMusicalProgress()' function is set to 'callThrough'
            jasmine.clock().tick(1001);
            expect(updateMusicalProgressSpy).toHaveBeenCalledTimes(4); //because the 'updateMusicalProgress()' function won't be re-invoked as 'musicPlaying' is set to FALSE
            jasmine.clock().uninstall();
        });
        it("sets the 'progressValue' page variable equal to the 'currentTime' property of the musicPlayer", function() {
            musicPlayer.currentTime = 27;
            musicPlaying = true;
            updateMusicalProgress();
            expect(progressValue).toBe(27);
            musicPlaying = false;
        });
        it("sets the 'value' property of the 'musicalProgress' <progress> element equal to 'progressValue'", function() {
            musicPlaying = true;
            updateMusicalProgress();
            expect(musicalProgress.value).toEqual(27);
            musicPlaying = false;
        });
        it("sets the value of the 'progressPercent' page variable equal to ((musicalProgress.value)/(musicalProgress.max))*100", function() {
            musicPlaying = true;
            updateMusicalProgress();
            expect(Math.round(progressPercent)).toBe(2); //2 = the rounded result of (27/1625)*100
            musicPlaying = false;
        });
        it("updates the innerHTML of the 'musicalPercentage' <p> element, displaying the rounded value of the 'progressPercent' page variable and the current track position in MM:SS format", function() {
            musicPlaying = true;
            updateMusicalProgress();
            expect(musicalPercentage.innerHTML).toMatch("MUSICAL PROGRESS: 2% 00:27");
            musicPlaying = false;
        });
        describe("if the 'currentTime' of the 'musicPlayer' indicates that the track has finished, it:", function() {
            it("pauses the 'musicPlayer'", function() {
                progressValue = progressMax;
                musicPlaying = true;
                let updateMusicalProgressSpy2 = spyOn(window, 'updateMusicalProgress').and.callFake(function() {
                    if(progressValue >= progressMax) {
                        musicPlayer.pause();
                        musicPlaying = false;
                    }
                });
                musicPlayer.play();
                expect(musicPlaying).toBe(true);
                updateMusicalProgress();
                expect(updateMusicalProgressSpy2).toHaveBeenCalledTimes(1);
                expect(musicPlaying).toBe(false);
            });
            it("sets the 'playTime' page variable to 0", function() {
                musicPlaying = true;
                let updateMusicalProgressSpy3 = spyOn(window, 'updateMusicalProgress').and.callFake(function() {
                    if(progressValue >= progressMax) {
                        playTime = 0;
                    }
                });
                updateMusicalProgress();
                expect(updateMusicalProgressSpy3).toHaveBeenCalledTimes(1);
                expect(playTime).toEqual(0);
                musicPlaying = false;
            });
            it("sets the 'currentTime' property of the 'musicPlayer' equal to the 'playTime' page variable", function() {
                musicPlaying = true;
                let updateMusicalProgressSpy4 = spyOn(window, 'updateMusicalProgress').and.callFake(function() {
                    if(progressValue >= progressMax) {
                        musicPlayer.currentTime = playTime;
                    }
                });
                updateMusicalProgress();
                expect(updateMusicalProgressSpy4).toHaveBeenCalledTimes(1);
                expect(musicPlayer.currentTime).toEqual(playTime);
                musicPlaying = false;
            });
            it("begins playing music from the beginning of the track", function() {
                let updateMusicalProgressSpy5 = spyOn(window, 'updateMusicalProgress').and.callFake(function() {
                    if(progressValue >= progressMax) {
                        musicPlayer.play();
                        musicPlaying = true;
                    }
                });
                musicPlayer.pause();
                expect(musicPlaying).toBe(false);
                updateMusicalProgress();
                expect(updateMusicalProgressSpy5).toHaveBeenCalledTimes(1);
                expect(musicPlaying).toBe(true);
                musicPlaying = false;
            });
        });
        it("re-invokes the 'updateMusicalProgress()' function after a one-second delay", function() {
            musicPlaying = true;
            let updateMusicalProgressSpy6 = spyOn(window, 'updateMusicalProgress').and.callThrough();
            jasmine.clock().install();
            updateMusicalProgress();
            expect(updateMusicalProgressSpy6).toHaveBeenCalledTimes(1);
            jasmine.clock().tick(1000);
            expect(updateMusicalProgressSpy6).toHaveBeenCalledTimes(2);
            jasmine.clock().tick(1000);
            expect(updateMusicalProgressSpy6).toHaveBeenCalledTimes(3);
            jasmine.clock().uninstall();
            musicPlaying = false;
        });
    });
    describe("the 'pauseAudio()' function", function() {
        it("is invoked when the User clicks the 'PAUSE' <button>", function() {
            let pauseButton = div1.querySelector(".audio2");
            let pauseAudioSpy = spyOn(window, 'pauseAudio').and.callThrough();
            playAudio();
            expect(musicPlaying).toBeTrue();
            expect(pauseAudioSpy).not.toHaveBeenCalled();
            pauseButton.click();
            expect(musicPlaying).toBeFalse();
            expect(pauseAudioSpy).toHaveBeenCalledTimes(1);
        });
        describe("it checks the value of the 'musicPlaying' page variable and executes the following operations if 'musicPlaying' is TRUE:", function() {
            it("pauses the 'musicPlayer'", function() {
                playAudio();
                expect(musicPlaying).not.toBe(false);
                pauseAudio();
                expect(musicPlaying).not.toBe(true);
                musicPlaying = false;
            });
            it("sets the 'musicPlaying' page variable to FALSE", function() {
                musicPlaying = true;
                expect(musicPlaying).toBeTruthy();
                pauseAudio();
                expect(musicPlaying).not.toBeTruthy();
                musicPlaying = false;
            });
            it("sets the 'userWantsMusic' page variable to FALSE", function() {
                userWantsMusic = "true";
                expect(userWantsMusic).toBe("true");
                musicPlaying = true;
                pauseAudio();
                expect(userWantsMusic).toBe("false");
                musicPlaying = false;
            });
            it("sets a variable called 'userWantsMusic' to 'false' in localStorage", function() {
                localStorage.setItem("userWantsMusic", "true");
                expect(localStorage.getItem("userWantsMusic")).toBe(true.toString());
                musicPlaying = true;
                pauseAudio();
                expect(localStorage.getItem("userWantsMusic")).toBe(false.toString());
                musicPlaying = false;
            });
            it("sets the 'playTime' page variable to the current track time of the 'musicPlayer'", function() {
                musicPlayer.currentTime = 100;
                playTime = 20;
                expect(playTime).toEqual(20);
                musicPlaying = true;
                pauseAudio();
                expect(playTime).toEqual(100);
                musicPlaying = false;
            });
            it("saves the value of the 'playTime' page variable in localStorage", function() {
                musicPlaying = true;
                localStorage.removeItem("playTime");
                expect(localStorage.getItem("playTime")).toBeNull();
                pauseAudio();
                expect(localStorage.getItem("playTime")).toBe("100");
                musicPlaying = false;
            })
        });
    });
    describe("the 'volumeUp()' function", function() {
        let volumeUpButton = div1.querySelector(".audio3");

        it("is triggered when the user clicks the <button> that has a 'volume up' icon displayed on it", function() {
            let volumeUpSpy = spyOn(window, 'volumeUp');
            expect(volumeUpSpy).not.toHaveBeenCalled();
            volumeUpButton.click();
            expect(volumeUpSpy).toHaveBeenCalledTimes(1);
        });
        describe("checks that the 'preferredVolume' page variable is less than or equal to 0.9 and then executes the following operations:", function() {
            it("increases the 'preferredVolume' page variable by a tenth of the maximum (ie 0.1)", function() {
                preferredVolume = 0.5;
                volumeUp();
                expect(preferredVolume).toEqual(0.6);
            });
            it("sets the volume of the 'musicPlayer' to the new 'preferredVolume'", function() {
                musicPlayer.volume = 0.6;
                volumeUp();
                expect(musicPlayer.volume).toBe(0.7);
            });
            it("updates the 'volumeDisplay' <p> element, displaying the current volume as a percentage of the 'musicPlayer' maximum", function() {
                volumeUp();
                expect(volumeDisplay.innerHTML).toMatch("<br><i class=\"fa fa-volume-up\"></i><br>80%");
            });
            it("stores the new 'preferredVolume' in localStorage", function() {
                expect(Number(localStorage.getItem("preferredVolume")).toPrecision(1)).toBe("0.8");
                volumeUp();
                expect(Number(localStorage.getItem("preferredVolume")).toPrecision(1)).toBe("0.9");
            });
        })
    });
    describe("the 'volumeDown()' function", function() {
        let volumeDownButton = div1.querySelector(".audio4");

        it("is triggered when the User clicks the <button> that has a 'volume down' icon displayed on it", function() {
            let volumeDownSpy = spyOn(window, 'volumeDown');
            expect(volumeDownSpy).not.toHaveBeenCalled();
            volumeDownButton.click();
            expect(volumeDownSpy).toHaveBeenCalledTimes(1);
        });
        describe("checks that the 'preferredVolume' page variable is greater than or equal to 0.1, and then executes the following operations:", function() {
            preferredVolume = 0.9;

            it("decreases the 'preferredVolume' page variable by one tenth of the maximum (ie 0.1)", function() {
                expect(Number(preferredVolume.toPrecision(1))).toBe(0.9);
                volumeDown();
                expect(Number(preferredVolume.toPrecision(1))).toBe(0.8);
            });
            it("sets the volume of the 'musicPlayer' to the new 'preferredVolume'", function() {
                musicPlayer.volume = 0.8;
                volumeDown();
                expect(Number(musicPlayer.volume.toPrecision(1))).toBe(0.7);
            });
            it("updates the 'volumeDisplay' <p> element, displaying the current volume as a percentage of the 'musicPlayer' maximum", function() {
                volumeDown();
                expect(volumeDisplay.innerHTML).toMatch("<br><i class=\"fa fa-volume-up\"></i><br>60%");
            });
            it("stores the new 'preferredVolume' in localStorage", function() {
                expect(Number(localStorage.getItem("preferredVolume")).toPrecision(1)).toEqual("0.6");
                volumeDown();
                expect(Number(localStorage.getItem("preferredVolume")).toPrecision(1)).toEqual("0.5");
            });
        });
    });
});