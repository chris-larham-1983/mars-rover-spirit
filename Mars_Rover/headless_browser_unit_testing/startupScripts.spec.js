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
    let musicHeading = div2.getElementsByClassName("musicHeading")[0];
    let roverButton = div2.getElementsByClassName("roverButton")[0];

    body.addEventListener("pageshow", function() { responsiveImage2(); });
    body.addEventListener("resize", function() { resizedImage(); });

    describe("declares and initializes various page variables:", function() {
        it("creates a variable named 'loading2' that refers to the 'loading' 'div2' <div> element", function() {
            expect(loading2).not.toBeUndefined();
            expect(loading2).not.toHaveClass("container");
            expect(loading2.getAttribute("id")).toMatch("loading");
        });
        it("creates a variable named 'loadingInfo2' that refers to the innerHTML of the first child element of the 'loading2' <div>", function() {
            expect(loadingInfo2).toBeDefined();
            expect(loadingInfo2.length).toBeGreaterThan(0);
            expect(loadingInfo2.includes("The slideshow requires an internet connection for the images to be fetched and displayed properly.")).toBeTrue();
        });
        it("creates an 'online2' variable that refers to the browser's online status", function() {
            jasmine.addMatchers(customMatchers);
            expect(online2).toBeBoolean();
        });
        it("creates, but does not immediately initialize, an 'audioControls2' variable", function() {
            expect(audioControls2).toBeUndefined();
        });
        it("creates three variables ('availableHeight2', 'i', and 'slideshowTimer') that are initialized in the 'responsiveImage2()' function", function() {
            body.dispatchEvent(pageShowEvent);
            expect(availableHeight2).toEqual(jasmine.any(Number));
            expect(availableHeight2).toBeGreaterThan(0);
            expect(i2).toEqual(jasmine.any(Number));
            expect(i2).toBeDefined();
            expect(slideshowTimer).toBeTruthy();
            expect(slideshowTimer).toBeDefined();
        });
        it("creates three NodeList Objects ('marsSlides2', 'marsURLs2', and 'marsDescs2') that store all the martian images, martian URLs, and martian image descriptions", function() {
            expect(marsSlides2).toBeInstanceOf(Object);
            expect(marsURLs2).toBeInstanceOf(Object);
            expect(marsDescs2).toBeInstanceOf(Object);
        });
        it("creates and initializes the 'index' variable to 0", function() {
            expect(index).toBe(0);
        });
        it("creates and initializes the 'arrayLength' variable to equal the length of the 'marsSlides2' NodeList Object", function() {
            expect(arrayLength).toBeLessThanOrEqual(marsSlides2.length);
            expect(arrayLength).not.toBeGreaterThan(marsSlides2.length);
            expect(arrayLength).not.toBeLessThan(marsSlides2.length);
            expect(arrayLength).toEqual(marsSlides2.length);
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
            expect(online2).toBeDefined();
        });

        it("stresses, when appropriate, the importance of an internet connection for the correct display of slideshow images", function() {
            online2 = false;
            if(online2 === false) {
                loading2.style.display = "block";
            }
            expect(loading2.style.display).toBe("block");
        });

        describe("the 'testConnection2()' function", function() {
            let spy;
            let myInterval;

            beforeEach(function() {
                spy = spyOn(window, "testConnection2");
                online2 = false;
            });

            it("is invoked if no internet connection is present", function() {
                expect(spy).not.toHaveBeenCalled();
                if(online2 === false) {
                    testConnection2();
                }
                expect(spy).toHaveBeenCalled();
                expect(spy).toHaveBeenCalledTimes(1);
            });
            it("is invoked once per second until an internet connection is established", function() {
                jasmine.clock().install();
                if(online2 === false) {
                    myInterval = setInterval(testConnection2, 1000);
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
                online2 = true;
                if(online2 === true) {
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
        it("assigns the inner window height in pixels to the 'availableHeight2' variable", function () {
            expect(Math.floor(availableHeight2)).toEqual(Math.floor(window.innerHeight));
        });
        it("sets the height of the martian images to 75% of the available screen height", function () {
            expect(availableHeight2).toBeDefined();
            expect(availableHeight2).toBeGreaterThan(marsSlides2[0].height);
            expect(Math.floor(marsSlides2[0].height)).toEqual(Math.floor((availableHeight2 / 100) * 75));
        });
        it("sets the width of the martian images to 100% of the available screen width", function () {
            expect(marsSlides2[0].style.width).toMatch("100%");
        });
        it("stores a reference to the 'audioControls' <div> element in the 'audioControls2' variable", function () {
            jasmine.addMatchers(customMatchers);
            expect(audioControls2).toBeDefined();
            expect(audioControls2).toBeHTMLElement();
            expect(audioControls2.hidden).toMatch(true.toString());
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
        it("resets the value of the 'index' page variable to 0 if it is equal to the length of the 'marsSlides2' array", function() {
            expect(index).not.toEqual(0); //index is set to 10 prior to the 'bespokeSlideshow()' function being called, then is reset to 0, and finally incremented to 1 at the function's end
            expect(index).toEqual(1);
        });
        it("displays only the martian image, image url, and image description pointed to by the 'index' value", function() {
            expect(marsSlides2[0].style.display).toMatch("block");
            expect(marsURLs2[0].style.display).toMatch("block");
            expect(marsDescs2[0].style.display).toMatch("block");
            expect(marsSlides2[1].style.display).toMatch("none");
            expect(marsURLs2[1].style.display).toMatch("none");
            expect(marsURLs2[1].style.display).toMatch("none");
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
        it("sets the height of the martian images to 75% of the available window height ('availableHeight2')", function() {
            body.dispatchEvent(resizeEvent);
            expect(Math.floor(marsSlides2[0].height)).toEqual(Math.floor((availableHeight2 / 100) * 75));
        });
        it("sets the width of the martian images to 100% of the available window width", function() {
            body.dispatchEvent(resizeEvent);
            expect(marsSlides2[0].style.width).toMatch("100%");
        });
    });
    describe("the 'toggleAudioControls2()' function", function() {

        beforeEach(function() {
            body.dispatchEvent(pageShowEvent);
            musicHeading.click();
        });
        it("toggles between showing and hiding the 'audioControls2' <div> element", function() {
            expect(audioControls2.hidden).toEqual(false);
            musicHeading.click();
            expect(audioControls2.hidden).toEqual(true);
        });
        it("is called when the 'musicHeading' <h2> element is clicked", function() {
            let audioSpy = spyOn(window, 'toggleAudioControls2');
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