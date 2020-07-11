describe("STARTUP_SCRIPTS.JS", function() {

    let spy;

    let pageShowEvent = new Event('pageshow', {
        view: window,
        bubbles: false,
        cancelable: false
    });

    let resizeEvent = new Event('resize', {
       view: window,
       bubbles: false,
       cancelable: false
    });

    let body = document.getElementsByTagName("BODY")[0];
    let musicHeading = document.getElementsByClassName("musicHeading")[0];
    let roverButton = document.getElementsByClassName("roverButton")[0];

    body.addEventListener("pageshow", function() { responsiveImage2(); });
    body.addEventListener("resize", function() { resizedImage(); });

    describe("declares and initializes various page variables:", function() {
        it("creates a variable named 'loading' that refers to the 'loading' <div> element", function() {
            expect(loading).not.toBeUndefined();
            expect(loading).not.toHaveClass("container");
            expect(loading.getAttribute("id")).toMatch("loading");
        });
        it("creates a variable named 'loadingInfo' that refers to the innerHTML of the first child element of the 'loading' <div>", function() {
            expect(loadingInfo).toBeDefined();
            expect(loadingInfo.length).toBeGreaterThan(0);
            expect(loadingInfo.includes("The slideshow requires an internet connection for the images to be fetched and displayed properly.")).toBeTrue();
        });
        it("creates an 'online' variable that refers to the browser's online status", function() {
            jasmine.addMatchers(customMatchers);
            expect(online).toBeBoolean();
        });
        it("creates, but does not immediately initialize, an 'audioControls' variable", function() {
            expect(audioControls).toBeUndefined();
        });
        it("creates three variables ('availableHeight', 'i', and 'slideshowTimer') that are initialized in the 'responsiveImage2()' function", function() {
            body.dispatchEvent(pageShowEvent);
            expect(availableHeight).toEqual(jasmine.any(Number));
            expect(availableHeight).toBeGreaterThan(0);
            expect(i).toEqual(jasmine.any(Number));
            expect(i).toBeDefined();
            expect(slideshowTimer).toBeTruthy();
            expect(slideshowTimer).toBeDefined();
        });
        it("creates three NodeList Objects ('marsSlides', 'marsURLs', and 'marsDescs') that store all the martian images, martian URLs, and martian image descriptions", function() {
            expect(marsSlides).toBeInstanceOf(Object);
            expect(marsURLs).toBeInstanceOf(Object);
            expect(marsDescs).toBeInstanceOf(Object);
        });
        it("creates and initializes the 'index' variable to 0", function() {
            expect(index).toBe(0);
        });
        it("creates and initializes the 'arrayLength' variable to equal the length of the 'marsSlides' NodeList Object", function() {
            expect(arrayLength).toBeLessThanOrEqual(marsSlides.length);
            expect(arrayLength).not.toBeGreaterThan(marsSlides.length);
            expect(arrayLength).not.toBeLessThan(marsSlides.length);
            expect(arrayLength).toEqual(marsSlides.length);
        });
        it("creates and initializes a 'delayedDisplay' variable to refer to the 'delayedDisplay' <div> element", function() {
            jasmine.addMatchers(customMatchers);
            expect(delayedDisplay).not.toBeNull();
            expect(delayedDisplay).toBeDefined();
            expect(delayedDisplay).toBeHTMLElement();
            expect(delayedDisplay.style.display).toBe("none");
            expect(delayedDisplay.getAttribute("id")).toMatch("delayedDisplay");
        });
    });

    describe("startup_scripts.js' automatic page function", function() {
        it("checks whether the User's device is connected to the internet", function() {
            expect(online).toBeDefined();
        });

        it("stresses, when appropriate, the importance of an internet connection for the correct display of slideshow images", function() {
            online = false;
            if(online === false) {
                loading.style.display = "block";
            }
            expect(loading.style.display).toBe("block");
        });

        describe("the 'testConnection()' function", function() {
            let spy;
            let myInterval;

            beforeEach(function() {
                spy = spyOn(window, "testConnection");
                online = false;
            });

            it("is invoked if no internet connection is present", function() {
                expect(spy).not.toHaveBeenCalled();
                if(online === false) {
                    testConnection();
                }
                expect(spy).toHaveBeenCalled();
                expect(spy).toHaveBeenCalledTimes(1);
            });
            it("is invoked once per second until an internet connection is established", function() {
                jasmine.clock().install();
                if(online === false) {
                    myInterval = setInterval(testConnection, 1000);
                }
                expect(spy).not.toHaveBeenCalled();
                jasmine.clock().tick(501);
                expect(spy.calls.count()).toEqual(0);
                jasmine.clock().tick(500);
                expect(spy).toHaveBeenCalled();
                jasmine.clock().tick(500);
                expect(spy).toHaveBeenCalledTimes(1);
                jasmine.clock().tick(500);
                expect(spy.calls.count()).toEqual(2);
                online = true;
                if(online === true) {
                    clearInterval(myInterval);
                }
                jasmine.clock().tick(1000);
                expect(spy).toHaveBeenCalledTimes(2);
                jasmine.clock().tick(1000);
                expect(spy.calls.count()).toEqual(2);
                jasmine.clock().uninstall();
            });
        });
    });

    describe("the 'responsiveImage2()' function", function() {

        beforeEach(function () {
            body.dispatchEvent(pageShowEvent);
        });

        it("is invoked when the 'pageshow' event fires", function () {
            spy = spyOn(window, "responsiveImage2").and.callThrough();
            expect(spy).not.toHaveBeenCalled();
            body.dispatchEvent(pageShowEvent);
            expect(spy).toHaveBeenCalled();
            expect(spy).toHaveBeenCalledTimes(1);
        });
        it("assigns the inner window height in pixels to the 'availableHeight' variable", function () {
            expect(Math.floor(availableHeight)).toEqual(Math.floor(window.innerHeight));
        });
        it("sets the height of the martian images to 75% of the available screen height", function () {
            expect(availableHeight).toBeDefined();
            expect(availableHeight).toBeGreaterThan(marsSlides[0].height);
            expect(Math.floor(marsSlides[0].height)).toEqual(Math.floor((availableHeight / 100) * 75));
        });
        it("sets the width of the martian images to 100% of the available screen width", function () {
            expect(marsSlides[0].style.width).toMatch("100%");
        });
        it("stores a reference to the 'audioControls' <div> element in the 'audioControls' variable", function () {
            jasmine.addMatchers(customMatchers);
            expect(audioControls).toBeDefined();
            expect(audioControls).toBeHTMLElement();
            expect(audioControls.hidden).toMatch(true.toString());
        });
        describe("if there is an extant slideshow", function () {
            it("ensures that the 'index' variable is set to 0 and then invokes the 'bespokeSlideshow()' function", function () {
                jasmine.clock().install();
                spy = spyOn(window, "responsiveImage2").and.callThrough();
                let slideshowSpy = spyOn(window, "bespokeSlideshow");
                expect(spy).not.toHaveBeenCalled();
                body.dispatchEvent(pageShowEvent);
                expect(spy).toHaveBeenCalled();
                jasmine.clock().tick(51);
                expect(slideshowSpy).not.toHaveBeenCalled();
                expect(index).toEqual(0);
                jasmine.clock().tick(50);
                expect(slideshowSpy).toHaveBeenCalled();
                expect(slideshowSpy).toHaveBeenCalledTimes(1);
                jasmine.clock().uninstall();
            });
        });
    });
    describe("the 'bespokeSlideshow()' function", function() {

        let responsiveImage2Spy;
        let bespokeSlideshowSpy;

        beforeEach(function() {
            responsiveImage2Spy = spyOn(window, "responsiveImage2").and.callThrough();
            index = 10;

            bespokeSlideshowSpy = spyOn(window, "bespokeSlideshow").and.callThrough();
            jasmine.clock().install();
            body.dispatchEvent(pageShowEvent);
            expect(responsiveImage2Spy).toHaveBeenCalled();
            expect(bespokeSlideshowSpy).not.toHaveBeenCalled();
            jasmine.clock().tick(101);
            expect(bespokeSlideshowSpy).toHaveBeenCalled();
        });

        afterEach(function() {
            jasmine.clock().uninstall();
        });

        it("sets the display property of the 'delayedDisplay' <div> element to 'block'", function() {
            expect(delayedDisplay.style.display).toMatch("block");
        });
        it("resets the value of the 'index' page variable to 0 if it is equal to the length of the 'marsSlides' array", function() {
            expect(index).not.toEqual(0); //index is set to 10 prior to the 'bespokeSlideshow()' function being called, then is reset to 0, and finally incremented to 1 at the function's end
            expect(index).toEqual(1);
        });
        it("displays only the martian image, image url, and image description pointed to by the 'index' value", function() {
            expect(marsSlides[0].style.display).toMatch("block");
            expect(marsURLs[0].style.display).toMatch("block");
            expect(marsDescs[0].style.display).toMatch("block");
            expect(marsSlides[1].style.display).toMatch("none");
            expect(marsURLs[1].style.display).toMatch("none");
            expect(marsURLs[1].style.display).toMatch("none");
        });
        it("initializes the 'slideshowTimer' variable just prior to function completion", function() {
            expect(slideshowTimer).toBeDefined();
        });
    });
    describe("the 'resizedImage()' function", function() {
       it("is invoked when the 'resize' event fires", function() {
           let resizedSpy = spyOn(window, 'resizedImage').and.callThrough();
           expect(resizedSpy).not.toHaveBeenCalled();
           body.dispatchEvent(resizeEvent);
           expect(resizedSpy).toHaveBeenCalled();
       });
       it("sets the height of the martian images to 75% of the available window height ('availableHeight')", function() {
           body.dispatchEvent(resizeEvent);
           expect(Math.floor(marsSlides[0].height)).toEqual(Math.floor((availableHeight / 100) * 75));
       });
       it("sets the width of the martian images to 100% of the available window width", function() {
          body.dispatchEvent(resizeEvent);
          expect(marsSlides[0].style.width).toMatch("100%");
       });
    });
    describe("the 'toggleAudioControls()' function", function() {

        beforeEach(function() {
            body.dispatchEvent(pageShowEvent);
            musicHeading.click();
        });
        it("toggles between showing and hiding the 'audioControls' <div> element", function() {
            expect(audioControls.hidden).toEqual(false);
            musicHeading.click();
            expect(audioControls.hidden).toEqual(true);
        });
        it("is called when the 'musicHeading' <h2> element is clicked", function() {
            let audioSpy = spyOn(window, 'toggleAudioControls');
            expect(audioSpy).not.toHaveBeenCalled();
            musicHeading.click();
            expect(audioSpy).toHaveBeenCalled();
            expect(audioSpy).toHaveBeenCalledTimes(1);
        });
        it("initializes the following variables: 'musicPlayer'; 'volumeDisplay'; 'musicalProgress'; 'musicalPercentage'; and 'autoplayError'", function() {
           expect(musicPlayer).toBeDefined();
           expect(volumeDisplay).toHaveClass("audio5");
           expect(musicalProgress).not.toBeUndefined();
           expect(musicalPercentage).toHaveClass("percentage");
           expect(autoplayError).toBeDefined();
        });
    });
    describe("the 'solSelectScreen()' function", function() {
        let windowLocation = "initial_location";

        it("navigates the User to the 'solSelect' screen", function() {
            let solSelectSpy = spyOn(window, "solSelectScreen").and.callFake(function() {
                windowLocation = "sol_select_location";
            });
            expect(windowLocation).toMatch("initial_location");
            expect(solSelectSpy).not.toHaveBeenCalled();
            roverButton.click();
            expect(windowLocation).toMatch("sol_select_location");
            expect(solSelectSpy).toHaveBeenCalledTimes(1);
        });
    });
});