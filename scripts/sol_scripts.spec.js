describe("SOL_SCRIPTS.JS", function() {

    let pageShowEvent = new Event('pageshow', {
        view: window,
        bubbles: false,
        cancelable: false
    });
    let loadEvent = new Event('load', {
        view: window,
        bubbles: false,
        cancelable: false
    });
    let resizeEvent = new Event('resize', {
        view: window,
        bubbles: false,
        cancelable: false
    });
    let inputEvent = new Event('input', {
        view: window,
        bubbles: true,
        cancelable: false
    });
    let changeEvent = new Event('change', {
        view: window,
        bubbles: true,
        cancelable: false
    });
    let martianUrl = document.querySelector(".martian_url");
    let marsImg = document.querySelector(".mars");
    let photoDescription = document.querySelector(".photo_description");
    let loadingPara = document.querySelector(".w3-center");
    let id01 = document.querySelector("#id01");

    it("declares - but does not immediately initialize - the following variables: 'marsSlides'; 'marsURLs'; 'marsDescriptions'; 'myTimer'; 'formerSlide'; 'placeholderText'; 'visitedLinkArray'; 'currentURL'; and 'hrefValue'", function() {
        expect(marsSlides).toBeUndefined();
        expect(marsURLs).toBeFalsy();
        expect(marsDescriptions).not.toBeDefined();
        expect(myTimer).not.toBeTruthy();
        expect(formerSlide).toBeFalsy();
        expect(placeholderText).not.toBeDefined();
        expect(visitedLinkArray).toBeUndefined();
        expect(currentURL).toBeFalsy();
        expect(hrefValue).not.toBeDefined();
    });
    it("creates two - as yet unfilled - arrays: 'hrefValues' and 'numClicks'", function() {
        expect(hrefValues).not.toBeUndefined();
        expect(numClicks).toBeTruthy();
    });
    it("checks the 'display' attribute of the 'loading' <div> and invokes the 'testConnection()' function if it evaluates to 'block'", function() {
        let testConnectionSpy = spyOn(window, 'testConnection');
        expect(loading.style.display).toMatch("block");
        if(loading.style.display === "block") {
            testConnection();
        }
        expect(testConnectionSpy).toHaveBeenCalledTimes(1);
    });
    describe("the 'testConnection()' function", function() {
        it("is invoked while the page is loading, and runs once per second until the 'loading' element's display is no longer set to 'block'", function() {
            let testConnectionSpy2 = spyOn(window, 'testConnection').and.callThrough();
            jasmine.clock().install();
            testConnection();
            expect(testConnectionSpy2).toHaveBeenCalledTimes(1);
            jasmine.clock().tick(1001);
            expect(testConnectionSpy2).toHaveBeenCalledTimes(2);
            loading.style.display = "none";
            jasmine.clock().tick(1001);
            expect(testConnectionSpy2).toHaveBeenCalledTimes(3); //because loading.style.display evaluated to "block" at the end of the previous invocation
            jasmine.clock().tick(1001);
            expect(testConnectionSpy2).toHaveBeenCalledTimes(3); //because loading.style.display evaluated to "none" at the end of the last invocation
            jasmine.clock().uninstall();
        });
        it("sets the 'online' variable equal to the browser's updated online status (TRUE or FALSE)", function() {
            online = false;
            expect(online).toBeFalse();
            testConnection();
            expect(online).toBeTrue();
        });
        it("displays the fact that the User's internet connection status is \"CONNECTED\" if the 'online' variable is TRUE", function() {
            online = true;
            testConnection();
            expect(loading.firstElementChild.innerHTML).toMatch(loadingInfo + " CONNECTED");
        });
        it("displays the fact that the User's internet connection status is \"NOT CONNECTED\" if the 'online' variable is FALSE", function() {
            let testConnectionSpy3 = spyOn(window, 'testConnection').and.callFake(function() {
                if(online === false) {
                    loading.firstElementChild.innerHTML = loadingInfo + " NOT CONNECTED";
                }
            });
            online = false;
            testConnection();
            expect(testConnectionSpy3).toHaveBeenCalledTimes(1);
            expect(loading.firstElementChild.innerHTML).toMatch(loadingInfo + " NOT CONNECTED");
        });
    });
    it("invokes the 'w3.displayObject()' function, thus filling in the following HTML placeholders: {{slide_string}}, {{img_src}}, and {{alt_string}}", function() {
        document.addEventListener("pageshow", responsiveImage);
        document.dispatchEvent(pageShowEvent);
        expect(martianUrl.innerHTML).toMatch(marsURLs[0].innerHTML);
        expect(martianUrl.innerHTML).toMatch("https://mars.nasa.gov/mer/gallery/all/2/f/001/2F126468064EDN0000P1001L0M1-BR.JPG");
        expect(marsImg.getAttribute("src")).toMatch("https://mars.nasa.gov/mer/gallery/all/2/f/001/2F126468064EDN0000P1001L0M1-BR.JPG");
        expect(marsImg.getAttribute("alt")).toEqual("Photo of Mars taken by the Spirit Rover's Front Hazard Avoidance Camera on Spirit Martian sol 1 (Earth date 2004-01-05).");
        expect(photoDescription.innerHTML).toEqual(marsDescriptions[0].innerHTML);
        expect(photoDescription.innerHTML).toEqual("Slide 1/50: Martian Photo taken by the <em>Spirit</em> Rover's <em>Front Hazard Avoidance Camera</em> on <em>Spirit</em> Martian Sol 1 (Earth date 2004-01-05).");
    });
    it("adds information - to the first element in the document with a className of 'w3-center' - relating to the necessity of an internet connection for fetching the sol-pertinent martian images", function() {
        online = true;
        testConnection();
        expect(loadingPara.innerHTML).toEqual("<i class=\"fa fa-spinner w3-spin w3-i-spin\"></i><br>Loading <em>Spirit</em> Martian Sol 1.<br>This device MUST be connected to the internet in order to obtain the images for this <span class=\"font-effect-anaglyph\">martian sol</span>.  Once the first image is displayed, Wi-Fi/mobile data can be turned off.<br>Internet Connection Status:  CONNECTED");
    });
    it("declares and initializes the following variables: 'currentIndex' (0); 'slideNumber' (1); 'currentInterval' (0); 'alreadyRunning' (false); 'loading' (refers to the 'loading' <div>); 'loadingInfo' (refers to the innerHTML of the first child element of the 'loading' <div>); 'online' (refers to the browser's online status); visitedLinkStringKey (equal to the concatenation of 'visitedLinkString' + the current sol); and 'visitedLinkString' (equal to the 'visitedLinkStringKey' localStorage variable if present, OR an empty String if not)", function() {
        jasmine.addMatchers(customMatchers);
        expect(currentIndex).toBe(0);
        expect(slideNumber).toEqual(1);
        expect(currentInterval).toBe(0);
        expect(alreadyRunning).toBeFalse();
        expect(loading).toBeHTMLElement();
        expect(online).toBeBoolean();
        expect(visitedLinkStringKey).toMatch("visitedLinkString1");
        expect(visitedLinkString).toBeTruthy();
    });

    describe("the 'startSlideshow()' function", function() {
        it("is triggered when the 'onload' event fires", function() {
            let slideshowSpy = spyOn(window, 'startSlideshow').and.callThrough();
            document.addEventListener("load", startSlideshow);
            expect(slideshowSpy).not.toHaveBeenCalled();
            document.dispatchEvent(loadEvent);
            expect(slideshowSpy).toHaveBeenCalledTimes(1);
        });
        it("invokes the 'w3.js' 'slideshow(selector, interval)' function in order to display the first 'mars' image taken by the Rover on this sol", function() {
            expect(marsImg.getAttribute("src")).toMatch("https://mars.nasa.gov/mer/gallery/all/2/f/001/2F126468064EDN0000P1001L0M1-BR.JPG");
        });
        it("invokes the 'w3.js' 'slideshow(selector, interval)' function in order to display the 'martian_url' of the first 'mars' image taken by the Rover on this sol", function() {
            expect(martianUrl.innerHTML).toMatch(marsURLs[0].innerHTML);
            expect(martianUrl.innerHTML).toMatch("https://mars.nasa.gov/mer/gallery/all/2/f/001/2F126468064EDN0000P1001L0M1-BR.JPG");
        });
        it("invokes the 'w3.js' 'slideshow(selector, interval)' function in order to display the 'photo_description' of the first 'mars' image taken by the Rover on this sol", function() {
            expect(photoDescription.innerHTML).toEqual(marsDescriptions[0].innerHTML);
            expect(photoDescription.innerHTML).toEqual("Slide 1/50: Martian Photo taken by the <em>Spirit</em> Rover's <em>Front Hazard Avoidance Camera</em> on <em>Spirit</em> Martian Sol 1 (Earth date 2004-01-05).");
        });
        it("hides the 'loading' <div> element, since the images are now ready for perusal", function() {
            expect(loading.style.display).toBe("none");
        });
        it("displays the 'id01' element that houses the martian table", function() {
            expect(id01.style.display).toMatch("block");
        });
    });

    describe("the 'responsiveImage()' function", function() {
        it("defines the 'availableHeight' variable as equal to the viewport's height", function() {
            let testHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
            expect(availableHeight).toEqual(testHeight);
        });
        it("defines the 'availableWidth' variable as equal to the amount of horizontal space (in CSS pixels) available to the window", function() {
            let testWidth = screen.availWidth;
            expect(availableWidth).toEqual(testWidth);
        });
        it("sets the height property of the 'responsiveDiv' element to 75% of the 'availableHeight'", function() {
            expect(responsiveDiv.height).toEqual((availableHeight/100)*75);
        });
        it("sets the width property of the 'responsiveDiv' element to 100% of the screen width", function() {
            expect(responsiveDiv.style.width).toMatch("100%");
        });
        it("sets the 'marsSlides' variable to refer to a NodeList Object that holds references to all elements with a className of 'mars'", function() {
            expect(marsSlides).toBeInstanceOf(Object);
            expect(marsSlides.length).toBe(50);
            for(let i=0; i<50; i++) {
                expect(marsSlides[i].getAttribute("class")).toBe("mars");
            }
        });
        it("sets the 'marsURLs' variable to refer to a NodeList Object that holds references to all elements with a className of 'martian_url'", function() {
            expect(marsURLs).toBeInstanceOf(Object);
            expect(marsURLs.length).toBe(50);
            for(let i=0; i<50; i++) {
                expect(marsURLs[i].getAttribute("class")).toMatch("martian_url");
            }
        });
        it("sets the 'marsDescriptions' variable to refer to a NodeList Object that holds references to all elements with a className of 'photo_description'", function() {
            expect(marsDescriptions).toBeInstanceOf(Object);
            expect(marsDescriptions.length).toBe(50);
            for(let i=0; i<50; i++) {
                expect(marsDescriptions[i].getAttribute("class")).toMatch("photo_description");
            }
        });
        it("sets the height property of each martian image to 75% of the 'availableHeight'", function() {
            for(let i=0; i<50; i++) {
                expect(Math.floor(marsSlides[i].height)).toEqual(Math.floor((availableHeight/100)*75));
            }
        });
        it("sets the width property of each martian image to 100% of the screen width", function() {
            for(let i=0; i<50; i++) {
                expect(marsSlides[i].style.width).toMatch("100%");
            }
        });
        it("populates the 'hrefValues' array with the innerHTML of all the 'marsURLs' elements", function() {
            for(let i=0; i<50; i++) {
                expect(hrefValues[i]).toMatch(marsURLs[i].innerHTML);
            }
        });
        it("updates the value of the 'percentageHeight' variable to 75", function() {
            expect(percentageHeight).toBe(75);
        });
        it("updates the value of the 'percentageWidth' variable to 100", function() {
            expect(percentageWidth).toBe(100);
        });
        it("sets the value of the 'heightSlider' to the new 'percentageHeight' value", function() {
            expect(Number(heightSlider.value)).toBe(75);
        });
        it("sets the 'class' of the 'heightSlider' to the new 'percentageHeight'-reflecting value", function() {
            expect(heightSlider.getAttribute("class")).toMatch("_75PerCent");
        });
        it("sets the value of the 'widthSlider' to the new 'percentageWidth' value", function() {
            expect(widthSlider.value).toMatch("100");
        });
        it("sets the 'class' of the 'widthSlider' to the new 'percentageWidth'-reflecting value", function() {
            expect(widthSlider.getAttribute("class")).toMatch("_100PerCent");
        });
        it("adds the number zero to the 'numClicks' array, as many times as there are elements in the 'marsSlides' NodeList Object", function() {
            expect(numClicks.length).toBe(50);
            for(i=0; i<50; i++) {
                expect(numClicks[i]).toBe(0);
            }
        });
        describe("checks if there is a 'currentIndex' variable in localStorage and executes the following operations if there is:", function() {
            it("sets the 'formerSlide' variable equal to the numerical equivalent of currentIndex", function() {
                localStorage.setItem("currentIndex", "5");
                responsiveImage();
                expect(formerSlide).toBe(5);
                localStorage.removeItem("currentIndex");
            });
            it("displays the martian slide that the User was viewing before s/he clicked the martian URL to view the original NASA image", function() {
                for(i=0; i<50; i++) {
                    if(i===5) {
                        expect(marsSlides[i].style.display).toMatch("block");
                        expect(marsURLs[i].style.display).toMatch("block");
                        expect(marsDescriptions[i].style.display).toMatch("block");
                        continue;
                    }
                    expect(marsSlides[i].style.display).toBe("none");
                    expect(marsURLs[i].style.display).toBe("none");
                    expect(marsDescriptions[i].style.display).toBe("none");
                }
            });
        });
        it("sets the 'imageWidth' variable equal to the width property of the 'currentIndex' element of the 'marsSlides' array", function() {
            expect(imageWidth).toEqual(marsSlides[currentIndex].width);
        });
        it("sets the 'imageHeight' variable equal to the 'height' property of the 'currentIndex' element of the 'marsSlides' array", function() {
            expect(imageHeight).toEqual(marsSlides[currentIndex].height);
        });
        it("updates the <h1> element with the id attribute of 'martianHeading' to display an appropriately-informative heading to the User, detailing the Rover name, martian sol, and earth date", function() {
            expect(document.querySelector("#martianHeading").innerHTML).toEqual("<em>Spirit</em> <strong>Martian Sol 1</strong> <em>[Earth Date 2004-01-05]</em>");
        });
        it("sets the 'placeholderText' variable equal to \"1 - {{marsSlides.length}}...\"", function() {
            expect(placeholderText).toMatch("1 - 50...");
        });
        it("sets the text <input> element's placeholder text to 'placeholderText'", function() {
            expect(document.querySelector("#slideSelect").nextElementSibling.placeholder).toMatch(placeholderText);
        });
    });
    describe("the 'fullScreenImage()' function", function() {
        it("is triggered when the User clicks the 'Fullscreen Image' <button>", function() {
            let fullscreenImageSpy = spyOn(window, 'fullscreenImage').and.callThrough();
            let fullscreenBtn = document.getElementById("fullscreenBtn");
            expect(fullscreenImageSpy).not.toHaveBeenCalled();
            fullscreenBtn.click();
            expect(fullscreenImageSpy).toHaveBeenCalledTimes(1);
        });
        it("defines the 'availableHeight' variable as equal to the viewport's height", function() {
            let testHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
            expect(availableHeight).toEqual(testHeight);
        });
        it("defines the 'availableWidth' variable as equal to the screen's width", function() {
            let testWidth = screen.availWidth;
            expect(availableWidth).toEqual(testWidth);
        });
        it("sets the height property of 'responsiveDiv' to 'availableHeight' px", function() {
            expect(responsiveDiv.height).toBe(availableHeight);
        });
        describe("if 'availableHeight' is greater than 'availableWidth' it executes the following operations:", function() {

            beforeAll(function() {
                let fakeFullscreenImageSpy = spyOn(window, 'fullscreenImage').and.callFake(function() {
                    for(i=0; i<50; i++) {
                        responsiveDiv.style.width = "100%";
                        marsSlides[i].height = availableHeight;
                        marsSlides[i].style.width = "100%";
                        percentageWidth = 100;
                        percentageHeight = 100;
                        heightSlider.value = percentageHeight;
                        heightSlider.className = "_100PerCent";
                        widthSlider.value = percentageWidth;
                        widthSlider.className = "_100PerCent";
                }});
                expect(fakeFullscreenImageSpy).not.toHaveBeenCalled();
                fullscreenImage();
                expect(fakeFullscreenImageSpy).toHaveBeenCalledTimes(1);
            });

            it("sets the width property of 'responsiveDiv' to 100%", function() {
                expect(responsiveDiv.style.width).toMatch("100%");
            });
            it("sets the height of each martian image to 'availableHeight' px", function() {
                for(i=0; i<50; i++) {
                    expect(marsSlides[i].height).toBe(availableHeight);
                }
            });
            it("sets the width of each martian image to 100%", function() {
                for(i=0; i<50; i++) {
                    expect(marsSlides[i].style.width).toMatch("100%");
                }
            });
            it("updates the value of the 'percentageWidth' variable to 100", function() {
                expect(percentageWidth).toBe(100);
            });
            it("updates the value of the 'percentageHeight' variable to 100", function() {
                expect(percentageHeight).toBe(100);
            });
            it("sets the value of the 'heightSlider' to the new 'percentageHeight' value", function() {
                expect(heightSlider.value).toBe("100");
            });
            it("sets the 'class' attribute of the 'heightSlider' element so that the correct percentage is displayed on the slider thumb", function() {
                expect(heightSlider.className).toMatch("_100PerCent");
            });
            it("sets the value of the 'widthSlider' to the new 'percentageWidth' value", function() {
                expect(widthSlider.value).toBe("100");
            });
            it("sets the 'class' attribute of the 'widthSlider' element so that the correct percentage is displayed on the slider thumb", function() {
                expect(widthSlider.className).toMatch("_100PerCent");
            });
        });
        describe("if 'availableHeight' is less than or equal to 'availableWidth' it executes the following operations:", function() {
            beforeAll(function() {
                let fakeFullscreenImageSpy2 = spyOn(window, 'fullscreenImage').and.callFake(function() {
                    for(i=0; i<50; i++) {
                        responsiveDiv.style.width = availableHeight + "px";
                        responsiveDiv.style.marginLeft = "auto";
                        responsiveDiv.style.marginRight = "auto";
                        marsSlides[i].height = availableHeight;
                        marsSlides[i].style.width = availableHeight + "px";
                        percentageHeight = 100;
                        percentageWidth = Math.round((availableHeight/availableWidth) * 100);
                        heightSlider.value = percentageHeight;
                        heightSlider.className = "_100PerCent";
                        widthSlider.value = percentageWidth;
                        widthSlider.className = "_" + percentageWidth + "PerCent";
                    }
                });
                availableHeight = 750;
                availableWidth = 1000;
                expect(fakeFullscreenImageSpy2).not.toHaveBeenCalled();
                fullscreenImage();
                expect(fakeFullscreenImageSpy2).toHaveBeenCalledTimes(1);
            });
            it("sets the width of 'responsiveDiv' to 'availableHeight' px", function() {
                expect(responsiveDiv.style.width).toMatch(availableHeight + "px");
            });
            it("sets the left and right margins of the 'responsiveDiv' element so that it is always centred", function() {
                expect(responsiveDiv.style.marginLeft).toMatch("auto");
                expect(responsiveDiv.style.marginRight).toMatch("auto");
            });
            it("sets the height of each martian image to 'availableHeight' px", function() {
                for(i=0; i<50; i++) {
                    expect(marsSlides[i].height).toBe(750);
                }
            });
            it("sets the width of each martian image to 'availableHeight' px", function() {
                for(i=0; i<50; i++) {
                    expect(marsSlides[i].style.width).toBe("750px");
                }
            });
            it("updates the value of the 'percentageHeight' variable to 100", function() {
                expect(percentageHeight).toBe(100);
            });
            it("updates the value of the 'percentageWidth' variable to the rounded integer representation of (availableHeight/availableWidth) * 100", function() {
                expect(percentageWidth).toEqual(75);
            });
            it("sets the value of the 'heightSlider' to the new 'percentageHeight' value", function() {
                expect(heightSlider.value).toMatch("100");
            });
            it("sets the 'class' attribute of the 'heightSlider' element so that the correct percentage is displayed on the slider thumb", function() {
                expect(heightSlider.className).toMatch("_100PerCent");
            });
            it("sets the value of the 'widthSlider' to the new 'percentageWidth' value", function() {
                expect(widthSlider.value).toMatch("75");
            });
            it("sets the 'class' attribute of the 'widthSlider' element so that the correct percentage is displayed on the slider thumb", function() {
                expect(widthSlider.className).toMatch("_75PerCent");
            });
        });
        it("scrolls the 'imageCell' <td> element into view, facilitating the display of martian images in fullscreen mode", function() {
            let encompassingDiv = document.querySelector(".encompassing");
            encompassingDiv.style.display = "block";
            fullscreenImage();
            let imageCell = document.querySelector("#imageCell");
            let testHeight = window.innerHeight;
            let boundingClientRect = imageCell.getBoundingClientRect();
            expect(boundingClientRect.bottom).toBe(testHeight); //the bottom of the 'imageCell' should be aligned with the bottom of the viewport, which is 'testHeight' px high
            encompassingDiv.style.display = "none";
        });
    });
    describe("the 'departFullscreen()' function", function() {
        it("is triggered when the martian image is clicked in order to exit (depart) the bespoke fullscreen mode", function() {
            let martianImage = document.querySelector(".mars");
            let departFullscreenSpy = spyOn(window, 'departFullscreen').and.callThrough();
            expect(departFullscreenSpy).not.toHaveBeenCalled();
            martianImage.click();
            expect(departFullscreenSpy).toHaveBeenCalledTimes(1);
        });
        it("defines the 'availableHeight' variable as equal to the viewport's height", function() {
            let testHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
            expect(availableHeight).toBe(testHeight);
        });
        it("defines the 'availableWidth' variable as equal to the amount of horizontal space (in CSS pixels) available to the window", function() {
            let testWidth = screen.availWidth;
            expect(availableWidth).toBe(testWidth);
        });
        it("sets the height property of the 'responsiveDiv' element to 75% of the 'availableHeight'", function() {
            expect(Math.floor(responsiveDiv.height)).toBe(Math.floor((availableHeight/100)*75));
        });
        it("sets the width property of the 'responsiveDiv' element to 100% of the screen width", function() {
            expect(responsiveDiv.style.width).toMatch("100%");
        });
        it("sets the height property of each martian image to 75% of the 'availableHeight'", function() {
            for(i=0; i<50; i++) {
                expect(Math.floor(marsSlides[i].height)).toBe(Math.floor((availableHeight/100)*75));
            }
        });
        it("sets the width property of each martian image to 100% of the screen width", function() {
            for(i=0; i<50; i++) {
                expect(marsSlides[i].style.width).toMatch("100%");
            }
        });
        it("sets the 'imageWidth' variable equal to the width property of the 'currentIndex' image element", function() {
            expect(imageWidth).toBe(marsSlides[currentIndex].width);
        });
        it("sets the 'imageHeight' variable equal to the 'height' property of the 'currentIndex' image element", function() {
            expect(imageHeight).toBe(marsSlides[currentIndex].height);
        });
        it("sets the 'percentageWidth' variable equal to 100", function() {
            expect(percentageWidth).toBe(100);
        });
        it("sets the 'percentageHeight' variable equal to 75", function() {
            expect(percentageHeight).toBe(75);
        });
        it("sets the 'widthSlider' value property equal to 'percentageWidth'", function() {
            expect(widthSlider.value).toBe("100");
        });
        it("sets the 'widthSlider' class attribute equal to \"_100PerCent\"", function() {
            expect(widthSlider.className).toMatch("_100PerCent");
        });
        it("sets the 'heightSlider' value attribute equal to 'percentageHeight'", function() {
            expect(heightSlider.value).toMatch("75");
        });
        it("sets the 'heightSlider' class attribute equal to \"_75PerCent\"", function() {
            expect(heightSlider.className).toMatch("_75PerCent");
        });
        it("scrolls the 'imageCell' <td> element into view, aligning the bottom of the element with the bottom of the viewport", function() {
            let encompassingDiv = document.querySelector(".encompassing");
            encompassingDiv.style.display = "block";
            departFullscreen();
            let imageCell = document.querySelector("#imageCell");
            let testHeight = window.innerHeight;
            let boundingClientRect = imageCell.getBoundingClientRect();
            expect(Math.round(boundingClientRect.bottom)).toBe(testHeight); //the bottom of the 'imageCell' should be aligned with the bottom of the viewport, which is 'testHeight' px high
            encompassingDiv.style.display = "none";
        });
    });
    describe("the 'landscapeOrPortrait()' function", function() {
        it("is called when the 'resize' event is fired (for example, when the phone is changed from portrait to landscape orientation || the 'Fullscreen Image' button is clicked)", function() {
            document.body.addEventListener("resize", function() { landscapeOrPortrait(); });
            let landscapeOrPortraitSpy = spyOn(window, 'landscapeOrPortrait').and.callThrough();
            expect(landscapeOrPortraitSpy).not.toHaveBeenCalled();
            document.body.dispatchEvent(resizeEvent);
            expect(landscapeOrPortraitSpy).toHaveBeenCalledTimes(1);
        });
        it("defines the 'availableHeight' variable as equal to the viewport's height", function() {
            let testHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
            expect(availableHeight).toEqual(testHeight);
        });
        it("sets the pixel height property of the 'responsiveDiv' image-encapsulating element to (availableHeight/100) * percentageHeight", function() {
            percentageHeight = 50;
            landscapeOrPortrait();
            expect(Math.floor(responsiveDiv.height)).toBe(Math.floor((availableHeight/100)*50));
        });
        it("sets the width property of the 'responsiveDiv' image-encapsulating element to 100%", function() {
            expect(responsiveDiv.style.width).toMatch("100%");
        });
        it("sets the pixel height property of every element of the 'marsSlides' NodeList Object to (availableHeight/100) * percentageHeight", function() {
            for(i=0; i<50; i++) {
                expect(Math.floor(marsSlides[i].height)).toBe(Math.floor((availableHeight/100)*50));
            }
        });
        it("sets the width property of every element of the 'marsSlides' NodeList Object to 100%", function() {
            for(i=0; i<50; i++) {
                expect(marsSlides[i].style.width).toMatch("100%");
            }
        });
        it("sets the width property of the 'marsTable' to 100%", function() {
            expect(document.querySelector(".marsTable").style.width).toMatch("100%");
        });
    });
    describe("the 'manualNext()' function", function() {
        it("is triggered when the User clicks the 'NEXT' <button>", function() {
            currentIndex = 10;
            expect(currentIndex).toBe(10);
            let manualNextSpy = spyOn(window, 'manualNext').and.callThrough();
            let nextBtn = document.querySelector(".nextBtn");
            expect(manualNextSpy).not.toHaveBeenCalled();
            nextBtn.click();
            expect(manualNextSpy).toHaveBeenCalledTimes(1);
        });
        it("sets the innerHTML of the currently-displayed, martian-url-displaying <div> element to the corresponding URL stored in 'hrefValues'", function() {
            expect(marsURLs[currentIndex].innerHTML).toMatch(hrefValues[currentIndex]);
        });
        describe("if 'currentIndex' is less than the length of the 'marsSlides' NodeList Object minus one (49 in this bitesized example), it executes the following operations:", function() {
            it("increments the 'currentIndex' page variable by one", function() {
                expect(currentIndex).toBe(11);
            });
            it("sets the 'slideNumber' page variable to 'currentIndex' plus one", function() {
                expect(slideNumber).toBe(12);
            });
        });
        describe("if 'currentIndex' is equal to the length of the 'marsSlides' NodeList Object minus one (49 in this bitesized example), it executes the following operations:", function() {
            it("sets the 'currentIndex' page variable to 0", function() {
                currentIndex = 49;
                expect(currentIndex).toEqual(49);
                manualNext();
                expect(currentIndex).toBe(0);
            });
            it("sets the 'slideNumber' page variable to 'currentIndex' plus one (ie 1)", function() {
                expect(slideNumber).toBe(1);
            });
        });
        it("clears the text <input> field", function() {
            let textInput = document.getElementById("slideSelect").nextElementSibling;
            textInput.value = "1";
            expect(textInput.value).toMatch("1");
            manualNext();
            expect(textInput.value).toMatch("");
        });
        it("invokes the 'slideSelect(slideNumber)' function", function() {
            let slideSelectSpy = spyOn(window, 'slideSelect');
            expect(slideSelectSpy).not.toHaveBeenCalled();
            manualNext();
            expect(slideSelectSpy).toHaveBeenCalledTimes(1);
        });
    });
    describe("the 'manualPrevious()' function", function() {
        it("is triggered when the User clicks the 'PREVIOUS' <button>", function() {
            let previousBtn = document.querySelector(".previousBtn");
            let manualPreviousSpy = spyOn(window, 'manualPrevious').and.callThrough();
            expect(manualPreviousSpy).not.toHaveBeenCalled();
            previousBtn.click();
            expect(manualPreviousSpy).toHaveBeenCalledTimes(1);
        });
        it("sets the innerHTML of the currently-displayed, martian-url-displaying <div> element to the corresponding url stored in 'hrefValues'", function() {
            expect(marsURLs[currentIndex].innerHTML).toMatch(hrefValues[currentIndex]);
        });
        describe("if 'currentIndex' is greater than zero it executes the following operations", function() {
            it("decrements the 'currentIndex' page variable by one", function() {
                currentIndex = 1;
                expect(currentIndex).toBe(1);
                manualPrevious();
                expect(currentIndex).toBe(0);
            });
            it("sets the 'slideNumber' page variable to 'currentIndex' plus one", function() {
                expect(slideNumber).toBe(1);
            });
        });
        describe("if 'currentIndex' is not greater than zero it executes the following operations", function() {
            it("sets the 'currentIndex' page variable to the length of the 'marsSlides' NodeList Object minus one", function() {
                expect(currentIndex).toEqual(0);
                manualPrevious();
                expect(currentIndex).toBe(49);
            });
            it("sets the 'slideNumber' page variable to 'currentIndex' plus one", function() {
                expect(slideNumber).toBe(50);
            });
        });
        it("clears the text <input> element", function() {
            let textInput = document.getElementById("slideSelect").nextElementSibling;
            textInput.value = 50;
            expect(textInput.value).toBe("50");
            manualPrevious();
            expect(textInput.value).toMatch("");
        });
        it("invokes the 'slideSelect(slideNumber)' function", function() {
            let slideSelectSpy = spyOn(window, 'slideSelect');
            expect(slideSelectSpy).not.toHaveBeenCalled();
            manualPrevious();
            expect(slideSelectSpy).toHaveBeenCalledTimes(1);
        });
    });
    describe("the 'slideSelect(slideNumber)' function", function() {
        it("is invoked from within the 'manualNext()' and 'manualPrevious()' functions && in response to the User entering a number in the text <input> element", function() {
            let slideSelectSpy = spyOn(window, 'slideSelect').and.callThrough();
            expect(slideSelectSpy).not.toHaveBeenCalled();
            manualPrevious();
            expect(slideSelectSpy).toHaveBeenCalledTimes(1);
            manualNext();
            expect(slideSelectSpy).toHaveBeenCalledTimes(2);
            let textInput = document.getElementById("slideSelect").nextElementSibling;
            textInput.dispatchEvent(inputEvent);
            expect(slideSelectSpy).toHaveBeenCalledTimes(3);
        });
        it("sets a local variable - 'len' - equal to the length of the 'photos' array in the 'slideshowObject'", function() {
            let photoLen;
            expect(photoLen).toBeUndefined();
            let slideSelectFake = spyOn(window, 'slideSelect').and.callFake(function() {
                photoLen = slideshowObject.photos.length;
            });
            expect(slideSelectFake).not.toHaveBeenCalled();
            slideSelect(48);
            expect(photoLen).toBe(50);
            expect(slideSelectFake).toHaveBeenCalledTimes(1);
        });
        describe("checks that the numerical representation of 'slideNumber' is greater than 0 and less than the length of the slideshowObject.photos array, and executes the following operations if the check evaluates to TRUE:", function() {
            describe("if there is already a martian slideshow running, it:", function() {
                it("clears the timing variable that controls the martian slideshow", function() {
                    let clearTimeoutSpy = spyOn(window, 'clearTimeout');
                    expect(clearTimeoutSpy).not.toHaveBeenCalled();
                    alreadyRunning = true;
                    slideSelect(48);
                    expect(clearTimeoutSpy).toHaveBeenCalled();
                    expect(clearTimeoutSpy).toHaveBeenCalledTimes(1);
                });
                it("sets the 'alreadyRunning' page variable to FALSE", function() {
                    expect(alreadyRunning).toBeFalse();
                });
                it("sets the 'currentInterval' page variable to 0", function() {
                    currentInterval = 5;
                    expect(currentInterval).toBe(5);
                    alreadyRunning = true;
                    slideSelect(48);
                    expect(currentInterval).toBe(0);
                });
                it("updates the 'timingInfo' <p> element, clarifying that the timing interval has been reset to '0'", function() {
                    let timingInfo = document.querySelector("#timingInfo");
                    timingInfo.innerHTML = "Timing Interval (Secs): 5";
                    expect(timingInfo.innerHTML).toBe("Timing Interval (Secs): 5");
                    alreadyRunning = true;
                    slideSelect(48);
                    expect(timingInfo.innerHTML).toBe("Timing Interval (Secs): 0");
                });
                it("sets the value of the 'interval-select' <select> element to 0", function() {
                    let intervalSelect = document.querySelector("#interval-select");
                    intervalSelect.value = "5000";
                    expect(intervalSelect.value).toBe("5000");
                    alreadyRunning = true;
                    slideSelect(48);
                    expect(intervalSelect.value).toBe("0");
                });
            });
            it("sets the display attribute of all the elements of the 'marsSlides' NodeList Object to 'none', except for the element pointed to by ('slideNumber' - 1) which is set to 'block'", function() {
                for(i=0; i<50; i++) {
                    marsSlides[i].style.display = "block";
                    expect(marsSlides[i].style.display).toMatch("block");
                }
                slideSelect(48);
                for(i=0; i<50; i++) {
                    if(i === 47) {
                        expect(marsSlides[i].style.display).toMatch("block");
                        continue;
                    }
                    expect(marsSlides[i].style.display).toMatch("none");
                }
            });
            it("sets the display attribute of all the elements of the 'marsURLs' NodeList Object to 'none', except for the element pointed to by ('slideNumber' - 1) which is set to 'block'", function() {
                for(i=0; i<50; i++) {
                    marsURLs[i].style.display = "block";
                    expect(marsURLs[i].style.display).toMatch("block");
                }
                slideSelect(48);
                for(i=0; i<50; i++) {
                    if(i === 47) {
                        expect(marsURLs[i].style.display).toMatch("block");
                        continue;
                    }
                    expect(marsURLs[i].style.display).toMatch("none");
                }
            });
            it("sets the display attribute of all the elements of the 'marsDescriptions' NodeList Object to 'none', except for the element pointed to by ('slideNumber' - 1) which is set to 'block'", function() {
                for(i=0; i<50; i++) {
                    marsDescriptions[i].style.display = "block";
                    expect(marsDescriptions[i].style.display).toMatch("block");
                }
                slideSelect(48);
                for(i=0; i<50; i++) {
                    if(i === 47) {
                        expect(marsDescriptions[i].style.display).toMatch("block");
                        continue;
                    }
                    expect(marsDescriptions[i].style.display).toMatch("none");
                }
            });
            it("sets the 'currentIndex' page variable equal to ('slideNumber' - 1)", function() {
                currentIndex = 25;
                expect(currentIndex).toBe(25);
                slideSelect(48);
                expect(currentIndex).toEqual(47);
            });
        });
    });
    describe("the 'setupSlideshow(interval, index, alreadyRunnning)' function", function() {
        it("is triggered when the User <select>s a slideshow timing interval, in response to the \"change\" event", function() {
            document.getElementById("interval-select").addEventListener('change', function() { setupSlideshow(currentInterval, currentIndex, alreadyRunning); });
            let setupSlideshowSpy = spyOn(window, 'setupSlideshow');
            expect(setupSlideshowSpy).not.toHaveBeenCalled();
            document.getElementById("interval-select").dispatchEvent(changeEvent);
            expect(setupSlideshowSpy).toHaveBeenCalledTimes(2); //because code will enter the 'setupSlideshow(currentInterval, currentIndex, alreadyRunning)' function, then the 'displaySlide(currentIndex, currentInterval)' function, then return to the 'setupSlideshow(currentInterval, currentIndex, alreadyRunning)' function
        });
        it("clears the text <input> element", function() {
            let textInput = document.getElementById("slideSelect").nextElementSibling;
            textInput.value = "48";
            expect(textInput.value).toMatch("48");
            setupSlideshow(currentInterval, currentIndex, alreadyRunning);
            expect(textInput.value).toBe("");
        });
        describe("if there is a slideshow 'alreadyRunning' AND the 'currentInterval' is not equal to the numerical representation of 'interval' passed into the function", function() {
            it("stops the extant slideshow", function() {
                let clearTimeoutSpy = spyOn(window, 'clearTimeout');
                setupSlideshow("1000", 47, false);
                expect(clearTimeoutSpy).not.toHaveBeenCalled();
                setupSlideshow("2000", 48, true);
                expect(clearTimeoutSpy).toHaveBeenCalled();
                expect(clearTimeoutSpy).toHaveBeenCalledTimes(1);
            });
        });
        it("sets the 'currentInterval' page variable to the numerical representation of 'interval' passed into the function", function() {
            currentInterval = 1000;
            expect(currentInterval).toBe(1000);
            setupSlideshow("2000", 48, false);
            expect(currentInterval).toBe(2000);
        });
        it("sets the 'currentIndex' page variable to the 'index' value passed into this function", function() {
            currentIndex = 47;
            expect(currentIndex).toBe(47);
            setupSlideshow("2000", 48, false);
            expect(currentIndex).toBe(48);
        });
        it("updates the 'timingInfo' <p> element for the User's benefit", function() {
            let timingInfo = document.querySelector("#timingInfo");
            timingInfo.innerHTML = "Timing Interval (Secs): 5";
            expect(timingInfo.innerHTML).toBe("Timing Interval (Secs): 5");
            setupSlideshow("2000", 48, false);
            expect(timingInfo.innerHTML).toBe("Timing Interval (Secs): 2");
        });
        it("invokes the 'displaySlide(currentIndex, currentInterval)' function", function() {
            let displaySlideSpy = spyOn(window, 'displaySlide');
            expect(displaySlideSpy).not.toHaveBeenCalled();
            setupSlideshow("2000", 48, false);
            expect(displaySlideSpy).toHaveBeenCalledTimes(1);
        });
        describe("if the 'currentInterval' is equal to 0", function() {
            it("exits the function without incrementing the 'currentIndex' page variable (this occurs when the User changes 'currentInterval' back to zero)", function() {
                currentIndex = 47;
                expect(currentIndex).toBe(47);
                jasmine.clock().install();
                let setupSlideshowSpy = spyOn(window, 'setupSlideshow').and.callThrough();
                setupSlideshow("2000", currentIndex, false);
                jasmine.clock().tick(2001);
                expect(setupSlideshowSpy).toHaveBeenCalled();
                expect(currentIndex).toBe(48);
                jasmine.clock().tick(2001);
                expect(currentIndex).toBe(49);
                setupSlideshow("0", 49, true);
                jasmine.clock().tick(2001);
                expect(currentIndex).toBe(49);
                jasmine.clock().uninstall();
            });
        });
    });
    describe("the 'displaySlide(currentIndex, currentInterval)' function", function() {
        it("is called from within the 'setupSlideshow(interval, index, alreadyRunning)' function", function() {
            let setupSlideshowSpy = spyOn(window, 'setupSlideshow').and.callThrough();
            let displaySlideSpy = spyOn(window, 'displaySlide');
            expect(displaySlideSpy).not.toHaveBeenCalled();
            setupSlideshow("1000", currentIndex, false);
            expect(setupSlideshowSpy).toHaveBeenCalled();
            expect(displaySlideSpy).toHaveBeenCalledTimes(1);
        });
        it("hides all the martian images, martian URLs, and martian descriptions except those referred to by the 'currentIndex' page variable", function() {
            displaySlide(48, 1000);
            for(i=0; i<50; i++) {
                if(i === 48) {
                    expect(marsSlides[i].style.display).toBe("block");
                    expect(marsURLs[i].style.display).toBe("block");
                    expect(marsDescriptions[i].style.display).toBe("block");
                    continue;
                }
                expect(marsSlides[i].style.display).toBe("none");
                expect(marsURLs[i].style.display).toBe("none");
                expect(marsDescriptions[i].style.display).toBe("none");
            }
        });
        describe("if the 'currentIndex' page variable is equal to the length of the 'marsSlides' NodeList Object", function() {
             it("sets 'currentIndex' to 0 and then increments it to 1 immediately prior to invoking the 'setupSlideshow(currentInterval, currentIndex, alreadyRunning)' function", function() {
                 currentIndex = 50;
                 expect(currentIndex).toBe(50);
                 jasmine.clock().install();
                 displaySlide(currentIndex, 1000);
                 jasmine.clock().tick(1001);
                 expect(currentIndex).toBe(1); //it is set to 0, then incremented by 1 prior to the invocation of 'setupSlideshow(currentInterval, currentIndex, alreadyRunning)'
                 jasmine.clock().uninstall();
             });
        });
        describe("if 'currentInterval' was passed in as - or has subsequently been changed to - 0", function() {
            it("stops the slideshow and returns to the 'setupSlideshow(interval, index, alreadyRunning)' function", function() {
                let clearTimeoutSpy = spyOn(window, 'clearTimeout');
                expect(clearTimeoutSpy).not.toHaveBeenCalled();
                displaySlide(currentIndex, 0);
                expect(clearTimeoutSpy).toHaveBeenCalledTimes(1);
            });
        });
        it("increments the 'currentIndex' page variable by one", function() {
            currentIndex = 5;
            expect(currentIndex).toEqual(5);
            jasmine.clock().install();
            displaySlide(5, 1000);
            jasmine.clock().tick(1001);
            expect(currentIndex).toBe(6);
            jasmine.clock().uninstall();
        });
        it("sets the 'alreadyRunning' page variable to TRUE", function() {
            alreadyRunning = false;
            expect(alreadyRunning).toBeFalse();
            jasmine.clock().install();
            displaySlide(currentIndex, 1000);
            jasmine.clock().tick(1001);
            expect(alreadyRunning).toBeTrue();
            jasmine.clock().uninstall();
        });
        it("calls the 'setupSlideshow(currentInterval, currentIndex, alreadyRunning)' function to continue the slideshow, after a delay of 'currentInterval' milliseconds", function() {
            let setTimeoutSpy = spyOn(window, 'setTimeout');
            displaySlide(currentIndex, 1000);
            expect(setTimeoutSpy).toHaveBeenCalled();
            expect(setTimeoutSpy).toHaveBeenCalledTimes(1);
        });
    });
    describe("the 'solSelectScreen()' function", function() {
        let windowLocationHref = "currentWindow";

        it("is triggered when the User clicks the '* Return to Sol Selection *' <button>", function() {
            localStorage.setItem("currentIndex", "48");
            expect(localStorage.getItem("currentIndex")).toMatch("48");
            expect(windowLocationHref).toMatch("currentWindow");
            let solSelectButton = document.querySelector(".solSelection");
            let solSelectSpy = spyOn(window, 'solSelectScreen').and.callFake(function() {
                if(localStorage.getItem("currentIndex")) {
                    localStorage.removeItem("currentIndex"); //remove the 'currentIndex' variable from localStorage
                }
                windowLocationHref = "../solSelect/spirit_accordion.html"; //navigate to the 'spirit_accordion.html' sol selection screen
            });
            expect(solSelectSpy).not.toHaveBeenCalled();
            solSelectButton.click();
            expect(solSelectSpy).toHaveBeenCalledTimes(1);
        });
        it("checks if there is a 'currentIndex' variable in localStorage, and removes it if so", function() {
            expect(localStorage.getItem("currentIndex")).toBeNull();
        });
        it("navigates to the 'spirit_accordion.html' sol selection screen", function() {
            expect(windowLocationHref).toMatch("../solSelect/spirit_accordion.html");
        });
    });
    it("declares and initializes two variables - 'previousBtn' and 'nextBtn' - which refer to the <button>s that facilitate manual User traversal through the slideshow", function() {
        expect(previousBtn).toBeDefined();
        expect(nextBtn).not.toBeUndefined();
    });
    it("declares and initializes eight variables - 'widthSlider', 'heightSlider', 'blurSlider', 'brightnessSlider', 'contrastSlider', 'invertSlider', 'opacitySlider', and 'sepiaSlider' - that refer to the various 'range' <input> elements", function() {
        jasmine.addMatchers(customMatchers);
        expect(widthSlider).toBeDefined();
        expect(heightSlider).not.toBeUndefined();
        expect(blurSlider).not.toBeFalsy();
        expect(brightnessSlider).toBeTruthy();
        expect(contrastSlider).toBeHTMLElement();
        expect(invertSlider).not.toNotBeHTMLElement();
        expect(opacitySlider.getAttribute("id")).toMatch("opacityRange");
        expect(sepiaSlider.getAttribute("id")).toMatch("sepiaRange");
    });
    it("declares and initializes eleven variables - 'responsiveDiv', 'editingDiv', 'audioControls', 'widthDiv', 'heightDiv', 'blurDiv', 'brightnessDiv', 'contrastDiv', 'invertDiv', 'opacityDiv', and 'sepiaDiv' - that refer to various <div> elements in the page layout", function() {
        jasmine.addMatchers(customMatchers);
        expect(responsiveDiv).toBeHTMLElement();
        expect(editingDiv).not.toNotBeHTMLElement();
        expect(audioControls).toBeDefined();
        expect(widthDiv).not.toBeUndefined();
        expect(heightDiv).not.toBeFalsy();
        expect(blurDiv).toBeTruthy();
        expect(brightnessDiv).not.toBeNull();
        expect(contrastDiv.getAttribute("id")).toMatch("contrastDiv");
        expect(invertDiv.getAttribute("id")).toMatch("invertDiv");
        expect(opacityDiv.getAttribute("id")).toMatch("opacityDiv");
        expect(sepiaDiv.getAttribute("id")).toMatch("sepiaDiv");
    });
    it("declares four variables that are initialized when the 'pageshow' event fires and will be used whenever the range <input> values are altered to effect a change in the dimensions of the various martian images: 'availableHeight'; 'availableWidth'; 'imageHeight'; and 'imageWidth'", function() {
        expect(availableHeight).toBeDefined();
        expect(availableWidth).not.toBeUndefined();
        expect(imageHeight).toBeTruthy();
        expect(imageWidth).not.toBeFalsy();
    });
    it("declares and initializes eight variables that will be used for image editing purposes: 'percentageWidth'; 'percentageHeight'; 'blurValue'; 'brightnessValue'; 'contrastValue'; 'invertValue'; 'opacityValue'; and 'sepiaValue'", function() {
        responsiveImage();
        expect(percentageWidth).toBe(100);
        expect(percentageHeight).toBe(75);
        expect(blurValue).toEqual(0);
        expect(brightnessValue).toEqual(100);
        expect(contrastValue).toBe(100);
        expect(invertValue).toBe(0);
        expect(opacityValue).toEqual(100);
        expect(sepiaValue).toEqual(0);
    });
    describe("when the User drags the 'widthSlider', a function:", function() {
        it("sets the 'percentageWidth' variable equal to the new value of the 'widthSlider' range <input> element", function() {
            expect(percentageWidth).toBe(100);
            widthSlider.value = "75";
            widthSlider.dispatchEvent(inputEvent);
            expect(widthSlider.value).toMatch("75");
            expect(percentageWidth).toBe("75");
        });
        it("sets the width of 'responsiveDiv' to 'percentageWidth'%", function() {
            expect(responsiveDiv.style.width).toMatch("75%");
        });
        it("sets the left and right margins of 'responsiveDiv' such that it is centred", function() {
            expect(responsiveDiv.style.marginRight).toMatch("auto");
            expect(responsiveDiv.style.marginLeft).toMatch("auto");
        });
        it("sets the width attribute of the martian images to 'percentageWidth'%", function() {
            for(i=0; i<50; i++) {
                expect(marsSlides[i].style.width).toMatch("75%");
            }
        });
        it("sets the image height to the rounded value of (availableHeight/100)*percentageHeight to avoid pixel height increasing proportionate to width", function() {
            for(i=0; i<50; i++) {
                expect(marsSlides[i].height).toEqual(Math.round((availableHeight/100)*75));
            }
        });
        it("ensures the martian URL remains visible by setting its 'z-index' property to '1'", function() {
            for(i=0; i<50; i++) {
                expect(marsURLs[i].style.zIndex).toBe("1");
            }
        });
        it("ensures the 'previousBtn' remains visible by setting its 'z-index' property to '1'", function() {
            expect(previousBtn.style.zIndex).toBe("1");
        });
        it("ensures the 'nextBtn' remains visible by setting its 'z-index' property to '1'", function() {
            expect(nextBtn.style.zIndex).toMatch("1");
        });
        it("sets the 'class' attribute of the 'widthSlider' element so that the correct percentage is displayed on the slider thumb", function() {
            expect(widthSlider.className).toMatch("_75PerCent");
        });
    });
    describe("when the User drags the 'heightSlider', a function:", function() {
        it("sets the 'percentageHeight' variable equal to the new value of the 'heightSlider' range <input> element", function() {
             expect(percentageHeight).toBe(75);
             heightSlider.value = "50";
             heightSlider.dispatchEvent(inputEvent);
             expect(heightSlider.value).toMatch("50");
             expect(percentageHeight).toBe("50");
        });
        it("sets the pixel height attribute of the 'responsiveDiv' equal to the rounded result of (availableHeight/100) * percentageHeight", function() {
            expect(responsiveDiv.height).toEqual(Math.round((availableHeight/100)*50));
        });
        it("sets the width of 'responsiveDiv' to 'percentageWidth'%", function() {
            expect(responsiveDiv.style.width).toMatch("75%");
        });
        it("centres the 'responsiveDiv' by setting the left and right margins appropriately", function() {
            expect(responsiveDiv.style.marginRight).toMatch("auto");
            expect(responsiveDiv.style.marginLeft).toMatch("auto");
        });
        it("sets the pixel height attribute of the martian image equal to the rounded result of (availableHeight/100)*percentageHeight", function() {
            for(i=0; i<50; i++) {
                expect(marsSlides[i].height).toEqual(Math.round((availableHeight/100)*50));
            }
        });
        it("sets the image width to 'percentageWidth'% in order to avoid width increasing proportionate to height", function() {
            for(i=0; i<50; i++) {
                expect(marsSlides[i].style.width).toMatch("75%");
            }
        });
        it("ensures the martian URL remains visible by setting its 'z-index' property to '1'", function() {
            for(i=0; i<50; i++) {
                expect(marsURLs[i].style.zIndex).toBe("1");
            }
        });
        it("ensures the 'previousBtn' remains visible by setting its 'z-index' property to '1'", function() {
            expect(previousBtn.style.zIndex).toBe("1");
        });
        it("ensures the 'nextBtn' remains visible by setting its 'z-index' property to '1'", function() {
            expect(nextBtn.style.zIndex).toMatch("1");
        });
        it("sets the 'class' attribute of the 'heightSlider' element so that the correct percentage is displayed on the slider thumb", function() {
            expect(heightSlider.className).toMatch("_50PerCent");
        });
    });
    describe("when the User drags the 'blurSlider', a function:", function() {
        it("sets the 'blurValue' variable equal to the new value of the 'blurSlider' range <input> element", function() {
            expect(blurValue).toMatch("0");
            blurSlider.value = "5";
            blurSlider.dispatchEvent(inputEvent);
            expect(blurValue).toEqual("5");
        });
        it("sets the image blur effect to 'blurValue'px (for Chrome 53.0+, IE 13+, Firefox 35.0+, Safari 9.1+, and Opera 40.0+)", function() {
            for(i=0; i<50; i++) {
                expect(marsSlides[i].style.filter).toBe("blur(5px)");
            }
        });
        it("sets the image blur effect to 'blurValue'px (for Chrome 18.0+, Safari 6.0+, and Opera 15.0+)", function() {
            for(i=0; i<50; i++) {
                expect(marsSlides[i].style.WebkitFilter).toBe("blur(5px)");
            }
        });
        it("ensures the martian URL remains visible by setting its 'z-index' property to '1'", function() {
            for(i=0; i<50; i++) {
                expect(marsURLs[i].style.zIndex).toBe("1");
            }
        });
        it("ensures the 'previousBtn' remains visible by setting its 'z-index' property to '1'", function() {
            expect(previousBtn.style.zIndex).toBe("1");
        });
        it("ensures the 'nextBtn' remains visible by setting its 'z-index' property to '1'", function() {
            expect(nextBtn.style.zIndex).toMatch("1");
        });
        it("sets the 'class' attribute of the 'blurSlider' element so that the correct blur pixel effect is displayed on the slider thumb", function() {
            expect(blurSlider.className).toMatch("_5Pixel");
        });
    });
    describe("when the User drags the 'brightnessSlider', a function:", function() {
        it("sets the 'brightnessValue' variable equal to the new value of the 'brightnessSlider' range <input> element", function() {
            expect(brightnessValue).toMatch("100");
            brightnessSlider.value = "80";
            brightnessSlider.dispatchEvent(inputEvent);
            expect(brightnessValue).toEqual("80");
        });
        it("sets the image brightness to 'brightnessValue'% (for Chrome 53.0+, IE 13+, Firefox 35.0+, Safari 9.1+, and Opera 40.0+)", function() {
            for(i=0; i<50; i++) {
                expect(marsSlides[i].style.filter).toBe("brightness(80%)");
            }
        });
        it("sets the image brightness to 'brightnessValue'% (for Chrome 18.0+, Safari 6.0+, and Opera 15.0+)", function() {
            for(i=0; i<50; i++) {
                expect(marsSlides[i].style.WebkitFilter).toBe("brightness(80%)");
            }
        });
        it("ensures the martian URL remains visible by setting its 'z-index' property to '1'", function() {
            for(i=0; i<50; i++) {
                expect(marsURLs[i].style.zIndex).toBe("1");
            }
        });
        it("ensures the 'previousBtn' remains visible by setting its 'z-index' property to '1'", function() {
            expect(previousBtn.style.zIndex).toBe("1");
        });
        it("ensures the 'nextBtn' remains visible by setting its 'z-index' property to '1'", function() {
            expect(nextBtn.style.zIndex).toMatch("1");
        });
        it("sets the 'class' attribute of the 'brightnessSlider' element so that the correct brightness percentage is displayed on the slider thumb", function() {
            expect(brightnessSlider.className).toMatch("_80PerCent");
        });
    });
    describe("when the User drags the 'contrastSlider', a function:", function() {
        it("sets the 'contrastValue' variable equal to the new value of the 'contrastSlider' range <input> element", function() {
             expect(contrastValue).toMatch("0");
             contrastSlider.value = "74";
             contrastSlider.dispatchEvent(inputEvent);
             expect(contrastValue).toBe("74");
        });
        it("sets the image contrast to 'contrastValue'% (for Chrome 53.0+, IE 13+, Firefox 35.0+, Safari 9.1+, and Opera 40.0+)", function() {
            for(i=0; i<50; i++) {
                expect(marsSlides[i].style.filter).toBe("contrast(74%)");
            }
        });
        it("sets the image contrast to 'contrastValue'% (for Chrome 18.0+, Safari 6.0+, and Opera 15.0+)", function() {
            for(i=0; i<50; i++) {
                expect(marsSlides[i].style.WebkitFilter).toBe("contrast(74%)");
            }
        });
        it("ensures the martian URL remains visible by setting its 'z-index' property to '1'", function() {
            for(i=0; i<50; i++) {
                expect(marsURLs[i].style.zIndex).toBe("1");
            }
        });
        it("ensures the 'previousBtn' remains visible by setting its 'z-index' property to '1'", function() {
            expect(previousBtn.style.zIndex).toBe("1");
        });
        it("ensures the 'nextBtn' remains visible by setting its 'z-index' property to '1'", function() {
            expect(nextBtn.style.zIndex).toMatch("1");
        });
        it("sets the 'class' attribute of the 'contrastSlider' element so that the correct contrast percentage is displayed on the slider thumb", function() {
            expect(contrastSlider.className).toMatch("_74PerCent");
        });
    });
    describe("when the User drags the 'invertSlider', a function:", function() {
        it("sets the 'invertValue' variable equal to the new value of the 'invertSlider' range <input> element", function() {
            expect(invertValue).toMatch("0");
            invertSlider.value = "76";
            invertSlider.dispatchEvent(inputEvent);
            expect(invertValue).toBe("76");
        });
        it("sets the image colour inversion effect to 'invertValue'% (for Chrome 53.0+, IE 13+, Firefox 35.0+, Safari 9.1+, and Opera 40.0+)", function() {
            for(i=0; i<50; i++) {
                expect(marsSlides[i].style.filter).toBe("invert(76%)");
            }
        });
        it("sets the image colour inversion effect to 'invertValue'% (for Chrome 18.0+, Safari 6.0+, Opera 15.0+)", function() {
            for(i=0; i<50; i++) {
                expect(marsSlides[i].style.WebkitFilter).toBe("invert(76%)");
            }
        });
        it("ensures the martian URL remains visible by setting its 'z-index' property to '1'", function() {
            for(i=0; i<50; i++) {
                expect(marsURLs[i].style.zIndex).toBe("1");
            }
        });
        it("ensures the 'previousBtn' remains visible by setting its 'z-index' property to '1'", function() {
            expect(previousBtn.style.zIndex).toBe("1");
        });
        it("ensures the 'nextBtn' remains visible by setting its 'z-index' property to '1'", function() {
            expect(nextBtn.style.zIndex).toMatch("1");
        });
        it("sets the 'class' attribute of the 'invertSlider' element so that the correct image colour inversion percentage is displayed on the slider thumb", function() {
            expect(invertSlider.className).toMatch("_76PerCent");
        });
    });
    describe("when the User drags the 'opacitySlider', a function:", function() {
        it("sets the 'opacityValue' variable equal to the new value of the range <input> element", function() {
            expect(opacityValue).toMatch("100");
            opacitySlider.value = "70";
            opacitySlider.dispatchEvent(inputEvent);
            expect(opacityValue).toBe("70");
        });
        it("sets the image opacity to 'opacityValue'% (for Chrome 53.0+, IE 13+, Firefox 35.0+, Safari 9.1+, and Opera 40.0+)", function() {
            for(i=0; i<50; i++) {
                expect(marsSlides[i].style.filter).toBe("opacity(70%)");
            }
        });
        it("sets the image opacity to 'opacityValue'% (for Chrome 18.0+, Safari 6.0+, and Opera 15.0+)", function() {
            for(i=0; i<50; i++) {
                expect(marsSlides[i].style.WebkitFilter).toBe("opacity(70%)");
            }
        });
        it("ensures the martian URL remains visible by setting its 'z-index' property to '1'", function() {
            for(i=0; i<50; i++) {
                expect(marsURLs[i].style.zIndex).toBe("1");
            }
        });
        it("ensures the 'previousBtn' remains visible by setting its 'z-index' property to '1'", function() {
            expect(previousBtn.style.zIndex).toBe("1");
        });
        it("ensures the 'nextBtn' remains visible by setting its 'z-index' property to '1'", function() {
            expect(nextBtn.style.zIndex).toMatch("1");
        });
        it("sets the 'class' attribute of the 'opacitySlider' element so that the correct opacity percentage is displayed on the slider thumb", function() {
            expect(opacitySlider.className).toMatch("_70PerCent");
        });
    });
    describe("when the User drags the 'sepiaSlider', a function:", function() {
        it("sets the 'sepiaValue' variable equal to the new value of the 'sepiaSlider' range <input> element", function() {
            expect(sepiaValue).toMatch("0");
            sepiaSlider.value = "85";
            sepiaSlider.dispatchEvent(inputEvent);
            expect(sepiaValue).toBe("85");
        });
        it("sets the image sepia effect to 'sepiaValue'% (for Chrome 53.0+, IE 13+, Firefox 35.0+, Safari 9.1+, and Opera 40.0+)", function() {
            for(i=0; i<50; i++) {
                expect(marsSlides[i].style.filter).toBe("sepia(85%)");
            }
        });
        it("sets the image sepia effect to 'sepiaValue'% (for Chrome 18.0+, Safari 6.0+, and Opera 15.0+)", function() {
            for(i=0; i<50; i++) {
                expect(marsSlides[i].style.WebkitFilter).toBe("sepia(85%)");
            }
        });
        it("ensures the martian URL remains visible by setting its 'z-index' property to '1'", function() {
            for(i=0; i<50; i++) {
                expect(marsURLs[i].style.zIndex).toBe("1");
            }
        });
        it("ensures the 'previousBtn' remains visible by setting its 'z-index' property to '1'", function() {
            expect(previousBtn.style.zIndex).toBe("1");
        });
        it("ensures the 'nextBtn' remains visible by setting its 'z-index' property to '1'", function() {
            expect(nextBtn.style.zIndex).toMatch("1");
        });
        it("sets the 'class' attribute of the 'sepiaSlider' element so that the correct sepia effect percentage is displayed on the slider thumb", function() {
            expect(sepiaSlider.className).toMatch("_85PerCent");
        });
    });
    describe("the 'increaseWidth()' function", function() {
        let increaseWidthButton = document.querySelectorAll(".increase")[0];

        it("is triggered when the User clicks the '+' <button> situated beneath the 'Width +/-' <label>", function() {
            let increaseWidthSpy = spyOn(window, 'increaseWidth').and.callThrough();
            expect(increaseWidthSpy).not.toHaveBeenCalled();
            increaseWidthButton.click();
            expect(increaseWidthSpy).toHaveBeenCalledTimes(1);
        });
        describe("checks whether the 'percentageWidth' page variable is less than 100 and executes the following operations if the check evaluates to TRUE:", function() {
            it("increases the numerical representation of 'percentageWidth' by 1", function() {
                expect(percentageWidth).toBe(76);
                increaseWidthButton.click();
                expect(percentageWidth).toBe(77);
            });
            it("sets the value attribute of the 'widthSlider' element to the new 'percentageWidth' value", function() {
                expect(widthSlider.value).toMatch("77");
            });
            it("sets the 'class' attribute of the 'widthSlider' element so that the correct width percentage is displayed on the slider thumb", function() {
                expect(widthSlider.getAttribute("class")).toMatch("_77PerCent");
            });
            it("sets the pixel 'height' property of the 'responsiveDiv' element to the rounded result of ((availableHeight/100) * percentageHeight)", function() {
                expect(responsiveDiv.height).toEqual(Math.round((availableHeight/100)*50));
            });
            it("sets the width of 'responsiveDiv' to 'percentageWidth'%", function() {
                expect(responsiveDiv.style.width).toMatch("77%");
            });
            it("ensures that the 'responsiveDiv' element is centred, by setting the right and left margins", function() {
                expect(responsiveDiv.style.marginRight).toMatch("auto");
                expect(responsiveDiv.style.marginLeft).toMatch("auto");
            });
            it("sets the width of every martian image element to 'percentageWidth'%", function() {
                for(i=0; i<50; i++) {
                    expect(marsSlides[i].style.width).toMatch("77%");
                }
            });
            it("sets the 'height' attribute of the image equal to the rounded result of (availableHeight/100)*percentageHeight in order to avoid height increasing proportionate to width", function() {
                for(i=0; i<50; i++) {
                    expect(marsSlides[i].height).toEqual(Math.round((availableHeight/100)*50));
                }
            });
            it("ensures the martian URL remains visible by setting its 'z-index' property to '1'", function() {
                for(i=0; i<50; i++) {
                    expect(marsURLs[i].style.zIndex).toBe("1");
                }
            });
            it("ensures the 'previousBtn' remains visible by setting its 'z-index' property to '1'", function() {
                expect(previousBtn.style.zIndex).toBe("1");
            });
            it("ensures the 'nextBtn' remains visible by setting its 'z-index' property to '1'", function() {
                expect(nextBtn.style.zIndex).toMatch("1");
            });
        });
    });
    describe("the 'decreaseWidth()' function", function() {
        let decreaseWidthButton = document.querySelectorAll(".decrease")[0];
        it("is triggered when the User clicks the '-' <button> that is situated beneath the 'Width +/-' <label>", function() {
            let decreaseWidthSpy = spyOn(window, 'decreaseWidth').and.callThrough();
            expect(decreaseWidthSpy).not.toHaveBeenCalled();
            decreaseWidthButton.click();
            expect(decreaseWidthSpy).toHaveBeenCalledTimes(1);
        });
        describe("it checks that the 'percentageWidth' page variable is greater than 1, and executes the following operations if the check evaluates to TRUE:", function() {
            it("decreases the numerical representation of 'percentageWidth' by 1", function() {
                expect(percentageWidth).toBe(76);
                decreaseWidthButton.click();
                expect(percentageWidth).toEqual(75);
            });
            it("sets the value of the 'widthSlider' to the new 'percentageWidth' value", function() {
                expect(widthSlider.value).toMatch("75");
            });
            it("sets the 'class' attribute of the 'widthSlider' element so that the correct width percentage is displayed on the slider thumb", function() {
                expect(widthSlider.getAttribute("class")).toMatch("_75PerCent");
            });
            it("sets the pixel 'height' property of the 'responsiveDiv' element to the rounded result of ((availableHeight/100) * percentageHeight)", function() {
                expect(responsiveDiv.height).toEqual(Math.round((availableHeight/100)*percentageHeight));
            });
            it("sets the width of 'responsiveDiv' to 'percentageWidth'%", function() {
                expect(responsiveDiv.style.width).toMatch("75%");
            });
            it("centres the 'responsiveDiv' element by setting the left and right margins appropriately", function() {
                expect(responsiveDiv.style.marginRight).toMatch("auto");
                expect(responsiveDiv.style.marginLeft).toMatch("auto");
            });
            it("sets the width of the martian images to 'percentageWidth'%", function() {
                for(i=0; i<50; i++) {
                    expect(marsSlides[i].style.width).toMatch("75%");
                }
            });
            it("sets the 'height' attribute of the martian images equal to the rounded result of (availableHeight/100)*percentageHeight in order to avoid height increasing proportionate to width", function() {
                for(i=0; i<50; i++) {
                    expect(marsSlides[i].height).toEqual(Math.round((availableHeight/100)*50));
                }
            });
            it("ensures the martian URL remains visible by setting its 'z-index' property to '1'", function() {
                for(i=0; i<50; i++) {
                    expect(marsURLs[i].style.zIndex).toBe("1");
                }
            });
            it("ensures the 'previousBtn' remains visible by setting its 'z-index' property to '1'", function() {
                expect(previousBtn.style.zIndex).toBe("1");
            });
            it("ensures the 'nextBtn' remains visible by setting its 'z-index' property to '1'", function() {
                expect(nextBtn.style.zIndex).toMatch("1");
            });
        });
    });
    describe("the 'increaseHeight()' function", function() {
        let increaseHeightButton = document.querySelectorAll(".increase")[1];

        it("is triggered when the User clicks the '+' <button> that is situated beneath the 'Height +/-' <label>", function() {
            let increaseHeightSpy = spyOn(window, 'increaseHeight').and.callThrough();
            expect(increaseHeightSpy).not.toHaveBeenCalled();
            increaseHeightButton.click();
            expect(increaseHeightSpy).toHaveBeenCalledTimes(1);
        });
        describe("checks whether the 'percentageHeight' page variable is less than 100, and executes the following operations if the check evaluates to TRUE:", function() {
            it("increases the numerical representation of 'percentageHeight' by 1", function() {
                expect(percentageHeight).toBe(51);
                increaseHeightButton.click();
                expect(percentageHeight).toMatch("52");
            });
            it("sets the value of the 'heightSlider' to the new 'percentageHeight' value", function() {
                expect(heightSlider.value).toMatch("52");
            });
            it("sets the 'class' attribute of the 'heightSlider' element so that the correct height percentage is displayed on the slider thumb", function() {
                expect(heightSlider.getAttribute("class")).toMatch("_52PerCent");
            });
            it("sets the value of 'imageHeight' to the rounded result of (availableHeight/100)*percentageHeight", function() {
                expect(imageHeight).toEqual(Math.round((availableHeight/100)*52));
            });
            it("sets the 'height' attribute of the martian images to 'imageHeight'px", function() {
                for(i=0; i<50; i++) {
                    expect(marsSlides[i].height).toEqual(Math.round((availableHeight/100)*52));
                }
            });
            it("sets the width of the martian images to 'percentageWidth'% to avoid width increasing proportionate to height", function() {
                for(i=0; i<50; i++) {
                    expect(marsSlides[i].style.width).toMatch("75%");
                }
            });
            it("ensures the martian URL remains visible by setting its 'z-index' property to '1'", function() {
                for(i=0; i<50; i++) {
                    expect(marsURLs[i].style.zIndex).toBe("1");
                }
            });
            it("ensures the 'previousBtn' remains visible by setting its 'z-index' property to '1'", function() {
                expect(previousBtn.style.zIndex).toBe("1");
            });
            it("ensures the 'nextBtn' remains visible by setting its 'z-index' property to '1'", function() {
                expect(nextBtn.style.zIndex).toMatch("1");
            });
        });
    });
    describe("the 'decreaseHeight()' function", function() {
        let decreaseHeightButton = document.querySelectorAll(".decrease")[1];

        it("is triggered when the User clicks the '-' <button> that is situated beneath the 'Height +/-' <label>", function() {
            let decreaseHeightSpy = spyOn(window, 'decreaseHeight').and.callThrough();
            expect(decreaseHeightSpy).not.toHaveBeenCalled();
            decreaseHeightButton.click();
            expect(decreaseHeightSpy).toHaveBeenCalledTimes(1);
        });
        describe("checks whether the 'percentageHeight' page variable is greater than 1, and executes the following operations if the check evaluates to TRUE:", function() {
            it("decreases the numerical representation of 'percentageHeight' by 1", function() {
                expect(percentageHeight).toBe(51);
                decreaseHeightButton.click();
                expect(percentageHeight).toBe(50);
            });
            it("sets the value of 'heightSlider' to the new 'percentageHeight' value", function() {
                expect(heightSlider.value).toMatch("50");
            });
            it("sets the 'class' attribute of the 'heightSlider' element so that the correct height percentage is displayed on the slider thumb", function() {
                expect(heightSlider.getAttribute("class")).toMatch("_50PerCent");
            });
            it("sets the value of the 'imageHeight' page variable to the rounded result of (availableHeight/100) * percentageHeight", function() {
                expect(imageHeight).toEqual(Math.round((availableHeight/100)*50));
            });
            it("sets the 'height' attribute of the martian images to 'imageHeight'px", function() {
                for(i=0; i<50; i++) {
                    expect(marsSlides[i].height).toEqual(Math.round((availableHeight/100)*50));
                }
            });
            it("sets the width of the martian images to 'percentageWidth'% to avoid width increasing proportionate to height", function() {
                for(i=0; i<50; i++) {
                    expect(marsSlides[i].style.width).toMatch("75%");
                }
            });
            it("ensures the martian URL remains visible by setting its 'z-index' property to '1'", function() {
                for(i=0; i<50; i++) {
                    expect(marsURLs[i].style.zIndex).toBe("1");
                }
            });
            it("ensures the 'previousBtn' remains visible by setting its 'z-index' property to '1'", function() {
                expect(previousBtn.style.zIndex).toBe("1");
            });
            it("ensures the 'nextBtn' remains visible by setting its 'z-index' property to '1'", function() {
                expect(nextBtn.style.zIndex).toMatch("1");
            });
        });
    });
    describe("the 'increaseBlur()' function", function() {
        let increaseBlurButton = document.querySelectorAll(".increase")[2];

        it("is triggered when the User clicks the '+' <button> that is situated beneath the 'Blur +/-' <label>", function() {
            let increaseBlurSpy = spyOn(window, 'increaseBlur').and.callThrough();
            expect(increaseBlurSpy).not.toHaveBeenCalled();
            increaseBlurButton.click();
            expect(increaseBlurSpy).toHaveBeenCalledTimes(1);
        });
        describe("checks whether the 'blurValue' page variable is less than 100, and executes the following operations if the check evaluates to TRUE:", function() {
            it("increases the numerical representation of 'blurValue' by 1", function() {
                expect(blurValue).toBe(6);
                increaseBlurButton.click();
                expect(blurValue).toBe(7);
            });
            it("sets the value of 'blurSlider' to the new 'blurValue'", function() {
                expect(blurSlider.value).toMatch("7");
            });
            it("sets the 'class' attribute of the 'blurSlider' element so that the correct blur pixel effect is displayed on the slider thumb", function() {
                expect(blurSlider.getAttribute("class")).toMatch("_7Pixel");
            });
            it("sets the image blur effect to 'blurValue'px (for Chrome 53.0+, IE 13+, Firefox 35.0+, Safari 9.1+, and Opera 40.0+)", function() {
                for(i=0; i<50; i++) {
                    expect(marsSlides[i].style.filter).toBe("blur(7px)");
                }
            });
            it("sets the image blur effect to 'blurValue'px (for Chrome 18.0+, Safari 6.0+, and Opera 15.0+)", function() {
                for(i=0; i<50; i++) {
                    expect(marsSlides[i].style.WebkitFilter).toBe("blur(7px)");
                }
            });
            it("ensures the martian URL remains visible by setting its 'z-index' property to '1'", function() {
                for(i=0; i<50; i++) {
                    expect(marsURLs[i].style.zIndex).toBe("1");
                }
            });
            it("ensures the 'previousBtn' remains visible by setting its 'z-index' property to '1'", function() {
                expect(previousBtn.style.zIndex).toBe("1");
            });
            it("ensures the 'nextBtn' remains visible by setting its 'z-index' property to '1'", function() {
                expect(nextBtn.style.zIndex).toMatch("1");
            });
        });
    });
    describe("the 'decreaseBlur()' function", function() {
        let decreaseBlurButton = document.querySelectorAll(".decrease")[2];

        it("is triggered when the User clicks the '-' <button> that is situated beneath the 'Blur +/-' <label>", function() {
            let decreaseBlurSpy = spyOn(window, 'decreaseBlur').and.callThrough();
            expect(decreaseBlurSpy).not.toHaveBeenCalled();
            decreaseBlurButton.click();
            expect(decreaseBlurSpy).toHaveBeenCalledTimes(1);
        });
        describe("checks whether the 'blurValue' page variable is greater than 0, and executes the following operations if the check evaluates to TRUE:", function() {
            it("decreases the numerical representation of 'blurValue' by 1", function() {
                expect(blurValue).toBe(6);
                decreaseBlurButton.click();
                expect(blurValue).toBe(5);
            });
            it("sets the value of 'blurSlider' to the new 'blurValue'", function() {
                expect(blurSlider.value).toMatch("5");
            });
            it("sets the 'class' attribute of the 'blurSlider' element so that the correct blur pixel effect is displayed on the slider thumb", function() {
                expect(blurSlider.getAttribute("class")).toBe("_5Pixel");
            });
            it("sets the image blur effect to 'blurValue'px (for Chrome 53.0+, IE 13+, Firefox 35.0+, Safari 9.1+, and Opera 40.0+)", function() {
                for(i=0; i<50; i++) {
                    expect(marsSlides[i].style.filter).toBe("blur(5px)");
                }
            });
            it("sets the image blur effect to 'blurValue'px (for Chrome 18.0+, Safari 6.0+, and Opera 15.0+)", function() {
                for(i=0; i<50; i++) {
                    expect(marsSlides[i].style.WebkitFilter).toBe("blur(5px)");
                }
            });
            it("ensures the martian URL remains visible by setting its 'z-index' property to '1'", function() {
                for(i=0; i<50; i++) {
                    expect(marsURLs[i].style.zIndex).toBe("1");
                }
            });
            it("ensures the 'previousBtn' remains visible by setting its 'z-index' property to '1'", function() {
                expect(previousBtn.style.zIndex).toBe("1");
            });
            it("ensures the 'nextBtn' remains visible by setting its 'z-index' property to '1'", function() {
                expect(nextBtn.style.zIndex).toMatch("1");
            });
        });
    });
    describe("the 'increaseBrightness()' function", function() {
        let increaseBrightnessButton = document.querySelectorAll(".increase")[3];

        it("is invoked when the User clicks the '+' <button> that is situated beneath the 'Brightness +/-' <label>", function() {
            let increaseBrightnessSpy = spyOn(window, 'increaseBrightness').and.callThrough();
            expect(increaseBrightnessSpy).not.toHaveBeenCalled();
            increaseBrightnessButton.click();
            expect(increaseBrightnessSpy).toHaveBeenCalledTimes(1);
        });
        describe("checks whether the 'brightnessValue' page variable is less than 800, and executes the following operations if the check evaluates to TRUE:", function() {
            it("increases the numerical representation of 'brightnessValue' by 10", function() {
                expect(brightnessValue).toBe(90);
                increaseBrightnessButton.click();
                expect(brightnessValue).toBe(100);
            });
            it("sets the value of 'brightnessSlider' to the new 'brightnessValue'", function() {
                expect(brightnessSlider.value).toBe("100");
            });
            it("sets the 'class' attribute of the 'brightnessSlider' element so that the correct brightness value is displayed on the slider thumb", function() {
                expect(brightnessSlider.getAttribute("class")).toBe("_100PerCent");
            });
            it("sets the image brightness to 'brightnessValue'% (for Chrome 53.0+, IE 13+, Firefox 35.0+, Safari 9.1+, and Opera 40.0+)", function() {
                for(i=0; i<50; i++) {
                    expect(marsSlides[i].style.filter).toBe("brightness(100%)");
                }
            });
            it("sets the image brightness to 'brightnessValue'% (for Chrome 18.0+, Safari 6.0+, and Opera 15.0+)", function() {
                for(i=0; i<50; i++) {
                    expect(marsSlides[i].style.WebkitFilter).toBe("brightness(100%)");
                }
            });
            it("ensures the martian URL remains visible by setting its 'z-index' property to '1'", function() {
                for(i=0; i<50; i++) {
                    expect(marsURLs[i].style.zIndex).toBe("1");
                }
            });
            it("ensures the 'previousBtn' remains visible by setting its 'z-index' property to '1'", function() {
                expect(previousBtn.style.zIndex).toBe("1");
            });
            it("ensures the 'nextBtn' remains visible by setting its 'z-index' property to '1'", function() {
                expect(nextBtn.style.zIndex).toMatch("1");
            });
        });
    });
    describe("the 'decreaseBrightness()' function", function() {
        let decreaseBrightnessButton = document.querySelectorAll(".decrease")[3];
        it("is triggered when the User clicks the '-' <button> that is situated beneath the 'Brightness +/-' <label>", function() {
            let decreaseBrightnessSpy = spyOn(window, 'decreaseBrightness').and.callThrough();
            expect(decreaseBrightnessSpy).not.toHaveBeenCalled();
            decreaseBrightnessButton.click();
            expect(decreaseBrightnessSpy).toHaveBeenCalledTimes(1);
        });
        describe("checks whether the 'decreaseBrightness' page variable is greater than 0, and executes the following operations if the check evaluates to TRUE:", function() {
            it("decreases the numerical representation of 'brightnessValue' by 10", function() {
                expect(brightnessValue).toEqual(90);
                decreaseBrightnessButton.click();
                expect(brightnessValue).toEqual(80);
            });
            it("sets the value of 'brightnessSlider' to the new 'brightnessValue'", function() {
                expect(brightnessSlider.value).toMatch("80");
            });
            it("sets the 'class' attribute of the 'brightnessSlider' element so that the correct brightness value is displayed on the slider thumb", function() {
                expect(brightnessSlider.getAttribute("class")).toBe("_80PerCent");
            });
            it("sets the image brightness to 'brightnessValue'% (for Chrome 53.0+, IE 13+, Firefox 35.0+, Safari 9.1+, and Opera 40.0+)", function() {
                for(i=0; i<50; i++) {
                    expect(marsSlides[i].style.filter).toBe("brightness(80%)");
                }
            });
            it("sets the image brightness to 'brightnessValue'% (for Chrome 18.0+, Safari 6.0+, and Opera 15.0+)", function() {
                for(i=0; i<50; i++) {
                    expect(marsSlides[i].style.WebkitFilter).toBe("brightness(80%)");
                }
            });
            it("ensures the martian URL remains visible by setting its 'z-index' property to '1'", function() {
                for(i=0; i<50; i++) {
                    expect(marsURLs[i].style.zIndex).toBe("1");
                }
            });
            it("ensures the 'previousBtn' remains visible by setting its 'z-index' property to '1'", function() {
                expect(previousBtn.style.zIndex).toBe("1");
            });
            it("ensures the 'nextBtn' remains visible by setting its 'z-index' property to '1'", function() {
                expect(nextBtn.style.zIndex).toMatch("1");
            });
        });
    });
    describe("the 'increaseContrast()' function", function() {
        let increaseContrastButton = document.querySelectorAll(".increase")[4];
        it("is invoked when the User clicks the '+' <button> that is situated beneath the 'Contrast +/-' <label>", function() {
            let increaseContrastSpy = spyOn(window, 'increaseContrast').and.callThrough();
            expect(increaseContrastSpy).not.toHaveBeenCalled();
            increaseContrastButton.click();
            expect(increaseContrastSpy).toHaveBeenCalledTimes(1);
        });
        describe("checks whether the 'contrastValue' page variable is less than 200, and executes the following operations if the check evaluates to TRUE:", function() {
            it("increases the numerical representation of 'contrastValue' by 2", function() {
                expect(contrastValue).toEqual(76);
                increaseContrastButton.click();
                expect(contrastValue).toEqual(78);
            });
            it("sets the value of 'contrastSlider' to the new 'contrastValue'", function() {
                expect(contrastSlider.value).toMatch("78");
            });
            it("sets the 'class' attribute of the 'contrastSlider' element so that the correct contrast value is displayed on the slider thumb", function() {
                expect(contrastSlider.getAttribute("class")).toBe("_78PerCent");
            });
            it("sets the image contrast to 'contrastValue'% (for Chrome 53.0+, IE 13+, Firefox 35.0+, Safari 9.1+, and Opera 40.0+)", function() {
                for(i=0; i<50; i++) {
                    expect(marsSlides[i].style.filter).toBe("contrast(78%)");
                }
            });
            it("sets the image contrast to 'contrastValue'% (for Chrome 18.0+, Safari 6.0+, and Opera 15.0+)", function() {
                for(i=0; i<50; i++) {
                    expect(marsSlides[i].style.WebkitFilter).toBe("contrast(78%)");
                }
            });
            it("ensures the martian URL remains visible by setting its 'z-index' property to '1'", function() {
                for(i=0; i<50; i++) {
                    expect(marsURLs[i].style.zIndex).toBe("1");
                }
            });
            it("ensures the 'previousBtn' remains visible by setting its 'z-index' property to '1'", function() {
                expect(previousBtn.style.zIndex).toBe("1");
            });
            it("ensures the 'nextBtn' remains visible by setting its 'z-index' property to '1'", function() {
                expect(nextBtn.style.zIndex).toMatch("1");
            });
        });
    });
    describe("the 'decreaseContrast()' function", function() {
        let decreaseContrastButton = document.querySelectorAll(".decrease")[4];
        it("is invoked when the User clicks the '-' <button> that is situated beneath the 'Contrast +/-' <label>", function() {
            let decreaseContrastSpy = spyOn(window, 'decreaseContrast').and.callThrough();
            expect(decreaseContrastSpy).not.toHaveBeenCalled();
            decreaseContrastButton.click();
            expect(decreaseContrastSpy).toHaveBeenCalledTimes(1);
        });
        describe("checks whether the 'contrastValue' page variable is greater than 0, and executes the following operations if the check evaluates to TRUE:", function() {
            it("decreases the numerical representation of 'contrastValue' by 2", function() {
                expect(contrastValue).toEqual(76);
                decreaseContrastButton.click();
                expect(contrastValue).toEqual(74);
            });
            it("sets the value of 'contrastSlider' to the new 'contrastValue'", function() {
                expect(contrastSlider.value).toMatch("74");
            });
            it("sets the 'class' attribute of the 'contrastSlider' element so that the correct contrast value is displayed on the slider thumb", function() {
                expect(contrastSlider.getAttribute("class")).toBe("_74PerCent");
            });
            it("sets the image contrast to 'contrastValue'% (for Chrome 53.0+, IE 13+, Firefox 35.0+, Safari 9.1+, and Opera 40.0+)", function() {
                for(i=0; i<50; i++) {
                    expect(marsSlides[i].style.filter).toBe("contrast(74%)");
                }
            });
            it("sets the image contrast to 'contrastValue'% (for Chrome 18.0+, Safari 6.0+, and Opera 15.0+)", function() {
                for(i=0; i<50; i++) {
                    expect(marsSlides[i].style.WebkitFilter).toBe("contrast(74%)");
                }
            });
            it("ensures the martian URL remains visible by setting its 'z-index' property to '1'", function() {
                for(i=0; i<50; i++) {
                    expect(marsURLs[i].style.zIndex).toBe("1");
                }
            });
            it("ensures the 'previousBtn' remains visible by setting its 'z-index' property to '1'", function() {
                expect(previousBtn.style.zIndex).toBe("1");
            });
            it("ensures the 'nextBtn' remains visible by setting its 'z-index' property to '1'", function() {
                expect(nextBtn.style.zIndex).toMatch("1");
            });
        });
    });
    describe("the 'increaseInvert()' function", function() {
        let increaseInvertButton = document.querySelectorAll(".increase")[5];

        it("is invoked when the User clicks the '+' <button> that is situated beneath the 'Invert +/-' <label>", function() {
            let increaseInvertSpy = spyOn(window, 'increaseInvert').and.callThrough();
            expect(increaseInvertSpy).not.toHaveBeenCalled();
            increaseInvertButton.click();
            expect(increaseInvertSpy).toHaveBeenCalledTimes(1);
        });
        describe("checks whether the 'invertValue' page variable is less than 100, and executes the following operations if the check evaluates to TRUE:", function() {
            it("increases the numerical representation of 'invertValue' by 1", function() {
                expect(invertValue).toEqual(77);
                increaseInvertButton.click();
                expect(invertValue).toEqual(78);
            });
            it("sets the value of 'invertSlider' to the new 'invertValue'", function() {
                expect(invertSlider.value).toMatch("78");
            });
            it("sets the 'class' attribute of the 'invertSlider' element so that the correct colour inversion value is displayed on the slider thumb", function() {
                expect(invertSlider.getAttribute("class")).toBe("_78PerCent");
            });
            it("sets the image colour inversion to 'invertValue'% (for Chrome 53.0+, IE 13+, Firefox 35.0+, Safari 9.1+, and Opera 40.0+)", function() {
                for(i=0; i<50; i++) {
                    expect(marsSlides[i].style.filter).toBe("invert(78%)");
                }
            });
            it("sets the image inversion to 'invertValue'% (for Chrome 18.0+, Safari 6.0+, and Opera 15.0+", function() {
                for(i=0; i<50; i++) {
                    expect(marsSlides[i].style.WebkitFilter).toBe("invert(78%)");
                }
            });
            it("ensures the martian URL remains visible by setting its 'z-index' property to '1'", function() {
                for(i=0; i<50; i++) {
                    expect(marsURLs[i].style.zIndex).toBe("1");
                }
            });
            it("ensures the 'previousBtn' remains visible by setting its 'z-index' property to '1'", function() {
                expect(previousBtn.style.zIndex).toBe("1");
            });
            it("ensures the 'nextBtn' remains visible by setting its 'z-index' property to '1'", function() {
                expect(nextBtn.style.zIndex).toMatch("1");
            });
        });
    });
    describe("the 'decreaseInvert()' function", function() {
        let decreaseInvertButton = document.querySelectorAll(".decrease")[5];

        it("is invoked when the User clicks the '-' <button> that is situated beneath the 'Inversion +/-' <label>", function() {
            let decreaseInvertSpy = spyOn(window, 'decreaseInvert').and.callThrough();
            expect(decreaseInvertSpy).not.toHaveBeenCalled();
            decreaseInvertButton.click();
            expect(decreaseInvertSpy).toHaveBeenCalledTimes(1);
        });
        describe("checks whether the 'invertValue' page variable is greater than 0, and executes the following operations if the check evaluates to TRUE:", function() {
            it("decreases the numerical representation of 'invertValue' by 1", function() {
                expect(invertValue).toEqual(77);
                decreaseInvertButton.click();
                expect(invertValue).toEqual(76);
            });
            it("sets the value of 'invertSlider' to the new 'invertValue'", function() {
                expect(invertSlider.value).toMatch("76");
            });
            it("sets the 'class' attribute of the 'invertSlider' element so that the correct colour inversion value is displayed on the slider thumb", function() {
                expect(invertSlider.getAttribute("class")).toBe("_76PerCent");
            });
            it("sets the image colour inversion to 'invertValue'% (for Chrome 53.0+, IE 13+, Firefox 35.0+, Safari 9.1+, and Opera 40.0+)", function() {
                for(i=0; i<50; i++) {
                    expect(marsSlides[i].style.filter).toBe("invert(76%)");
                }
            });
            it("sets the image colour inversion to 'invertValue'% (for Chrome 18.0+, Safari 6.0+, and Opera 15.0+)", function() {
                for(i=0; i<50; i++) {
                    expect(marsSlides[i].style.WebkitFilter).toBe("invert(76%)");
                }
            });
            it("ensures the martian URL remains visible by setting its 'z-index' property to '1'", function() {
                for(i=0; i<50; i++) {
                    expect(marsURLs[i].style.zIndex).toBe("1");
                }
            });
            it("ensures the 'previousBtn' remains visible by setting its 'z-index' property to '1'", function() {
                expect(previousBtn.style.zIndex).toBe("1");
            });
            it("ensures the 'nextBtn' remains visible by setting its 'z-index' property to '1'", function() {
                expect(nextBtn.style.zIndex).toMatch("1");
            });
        });
    });
    describe("the 'increaseOpacity()' function", function() {
        let increaseOpacityButton = document.querySelectorAll(".increase")[6];

        it("is invoked when the User clicks the '+' <button> that is situated beneath the 'Opacity +/-' <label>", function() {
            let increaseOpacitySpy = spyOn(window, 'increaseOpacity').and.callThrough();
            expect(increaseOpacitySpy).not.toHaveBeenCalled();
            increaseOpacityButton.click();
            expect(increaseOpacitySpy).toHaveBeenCalledTimes(1);
        });

        describe("checks whether the 'opacityValue' page variable is less than 100, and executes the following operations if the check evaluates to TRUE;", function() {
            it("increases the numerical representation of 'opacityValue' by 1", function() {
                expect(opacityValue).toEqual(71);
                increaseOpacityButton.click();
                expect(opacityValue).toBe(72);
            });
            it("sets the value of 'opacitySlider' to the new 'opacityValue'", function() {
                expect(opacitySlider.value).toMatch("72");
            });
            it("sets the 'class' attribute of the 'opacitySlider' element so that the correct opacity value is displayed on the slider thumb", function() {
                expect(opacitySlider.getAttribute("class")).toBe("_72PerCent");
            });
            it("sets the image opacity to 'opacityValue'% (for Chrome 53.0+, IE 13+, Firefox 35.0+, Safari 9.1+, and Opera 40.0+)", function() {
                for(i=0; i<50; i++) {
                    expect(marsSlides[i].style.filter).toBe("opacity(72%)");
                }
            });
            it("sets the image opacity to 'opacityValue'% (for Chrome 18.0+, Safari 6.0+, and Opera 15.0+)", function() {
                for(i=0; i<50; i++) {
                    expect(marsSlides[i].style.WebkitFilter).toBe("opacity(72%)");
                }
            });
            it("ensures the martian URL remains visible by setting its 'z-index' property to '1'", function() {
                for(i=0; i<50; i++) {
                    expect(marsURLs[i].style.zIndex).toBe("1");
                }
            });
            it("ensures the 'previousBtn' remains visible by setting its 'z-index' property to '1'", function() {
                expect(previousBtn.style.zIndex).toBe("1");
            });
            it("ensures the 'nextBtn' remains visible by setting its 'z-index' property to '1'", function() {
                expect(nextBtn.style.zIndex).toMatch("1");
            });
        });
    });
    describe("the 'decreaseOpacity()' function", function() {
        let decreaseOpacityButton = document.querySelectorAll(".decrease")[6];

        it("is invoked when the User clicks the '-' <button> that is situated beneath the 'Opacity +/-' <label>", function() {
            let decreaseOpacitySpy = spyOn(window, 'decreaseOpacity').and.callThrough();
            expect(decreaseOpacitySpy).not.toHaveBeenCalled();
            decreaseOpacityButton.click();
            expect(decreaseOpacitySpy).toHaveBeenCalledTimes(1);
        });
        describe("checks whether the 'opacityValue' page variable is greater than 0, and executes the following operations if the check evaluates to TRUE:", function() {
            it("decreases the numerical representation of 'opacityValue' by 1", function() {
                expect(opacityValue).toEqual(71);
                decreaseOpacityButton.click();
                expect(opacityValue).toEqual(70);
            });
            it("sets the value of 'opacitySlider' to the new 'opacityValue'", function() {
                expect(opacitySlider.value).toMatch("70");
            });
            it("sets the 'class' attribute of the 'opacitySlider' element so that the correct opacity value is displayed on the slider thumb", function() {
                expect(opacitySlider.getAttribute("class")).toBe("_70PerCent");
            });
            it("sets the image opacity to 'opacityValue'% (for Chrome 53.0+, IE 13+, Firefox 35.0+, Safari 9.1+, and Opera 40.0+)", function() {
                for(i=0; i<50; i++) {
                    expect(marsSlides[i].style.filter).toBe("opacity(70%)");
                }
            });
            it("sets the image opacity to 'opacityValue'% (for Chrome 18.0+, Safari 6.0+, and Opera 15.0+)", function() {
                for(i=0; i<50; i++) {
                    expect(marsSlides[i].style.WebkitFilter).toBe("opacity(70%)");
                }
            });
            it("ensures the martian URL remains visible by setting its 'z-index' property to '1'", function() {
                for(i=0; i<50; i++) {
                    expect(marsURLs[i].style.zIndex).toBe("1");
                }
            });
            it("ensures the 'previousBtn' remains visible by setting its 'z-index' property to '1'", function() {
                expect(previousBtn.style.zIndex).toBe("1");
            });
            it("ensures the 'nextBtn' remains visible by setting its 'z-index' property to '1'", function() {
                expect(nextBtn.style.zIndex).toMatch("1");
            });
        });
    });
    describe("the 'increaseSepia()' function", function() {
        let increaseSepiaButton = document.querySelectorAll(".increase")[7];

        it("is invoked when the User clicks the '+' <button> that is situated beneath the 'Sepia +/-' <label>", function() {
            let increaseSepiaSpy = spyOn(window, 'increaseSepia').and.callThrough();
            expect(increaseSepiaSpy).not.toHaveBeenCalled();
            increaseSepiaButton.click();
            expect(increaseSepiaSpy).toHaveBeenCalledTimes(1);
        });
        describe("checks whether the 'sepiaValue' page variable is less than 100, and executes the following operations if the check evaluates to TRUE:", function() {
            it("increases the numerical representation of 'sepiaValue' by 1", function() {
                expect(sepiaValue).toEqual(86);
                increaseSepiaButton.click();
                expect(sepiaValue).toEqual(87);
            });
            it("sets the value of 'sepiaSlider' to the new 'sepiaValue'", function() {
                expect(sepiaSlider.value).toMatch("87");
            });
            it("sets the 'class' attribute of the 'sepiaSlider' element so that the correct sepia value is displayed on the slider thumb", function() {
                expect(sepiaSlider.getAttribute("class")).toBe("_87PerCent");
            });
            it("sets the image sepia effect to 'sepiaValue'% (for Chrome 53.0+, IE 13+, Firefox 35.0+, Safari 9.1+, and Opera 40.0+)", function() {
                for(i=0; i<50; i++) {
                    expect(marsSlides[i].style.filter).toBe("sepia(87%)");
                }
            });
            it("sets the image sepia effect to 'sepiaValue'% (for Chrome 18.0+, Safari 6.0+, and Opera 15.0+)", function() {
                for(i=0; i<50; i++) {
                    expect(marsSlides[i].style.WebkitFilter).toBe("sepia(87%)");
                }
            });
            it("ensures the martian URL remains visible by setting its 'z-index' property to '1'", function() {
                for(i=0; i<50; i++) {
                    expect(marsURLs[i].style.zIndex).toBe("1");
                }
            });
            it("ensures the 'previousBtn' remains visible by setting its 'z-index' property to '1'", function() {
                expect(previousBtn.style.zIndex).toBe("1");
            });
            it("ensures the 'nextBtn' remains visible by setting its 'z-index' property to '1'", function() {
                expect(nextBtn.style.zIndex).toMatch("1");
            });
        });
    });
    describe("the 'decreaseSepia()' function", function() {
        let decreaseSepiaButton = document.querySelectorAll(".decrease")[7];

        it("is invoked when the User clicks the '-' <button> that is situated beneath the 'Sepia +/-' <label>", function () {
            let decreaseSepiaSpy = spyOn(window, 'decreaseSepia').and.callThrough();
            expect(decreaseSepiaSpy).not.toHaveBeenCalled();
            decreaseSepiaButton.click();
            expect(decreaseSepiaSpy).toHaveBeenCalledTimes(1);
        });
        describe("checks whether the 'sepiaValue' page variable is greater than 0, and executes the following operations if the check evaluates to TRUE:", function () {
            it("decreases the numerical representation of 'sepiaValue' by 1", function() {
                expect(sepiaValue).toEqual(86);
                decreaseSepiaButton.click();
                expect(sepiaValue).toEqual(85);
            });
            it("sets the value of 'sepiaSlider' to the new 'sepiaValue'", function() {
                expect(sepiaSlider.value).toMatch("85");
            });
            it("sets the 'class' attribute of the 'sepiaSlider' element so that the correct sepia value is displayed on the slider thumb", function() {
                expect(sepiaSlider.getAttribute("class")).toMatch("_85PerCent");
            });
            it("sets the image sepia effect to 'sepiaValue'% (for Chrome 53.0+, IE 13+, Firefox 35.0+, Safari 9.1+, and Opera 40.0+)", function() {
                for (i = 0; i < 50; i++) {
                    expect(marsSlides[i].style.filter).toBe("sepia(85%)");
                }
            });
            it("sets the image sepia effect to 'sepiaValue'% (for Chrome 18.0+, Safari 6.0+, and Opera 15.0+)", function() {
                for (i = 0; i < 50; i++) {
                    expect(marsSlides[i].style.WebkitFilter).toBe("sepia(85%)");
                }
            });
            it("ensures the martian URL remains visible by setting its 'z-index' property to '1'", function() {
                for (i = 0; i < 50; i++) {
                    expect(marsURLs[i].style.zIndex).toBe("1");
                }
            });
            it("ensures the 'previousBtn' remains visible by setting its 'z-index' property to '1'", function() {
                expect(previousBtn.style.zIndex).toBe("1");
            });
            it("ensures the 'nextBtn' remains visible by setting its 'z-index' property to '1'", function() {
                expect(nextBtn.style.zIndex).toMatch("1");
            });
        });
    });
    describe("the 'toggleEditingDiv()' function", function() {
        let controlsHeading = document.querySelector(".controlsHeading");
        let editingDiv = document.querySelector("#editingDiv");
        it("is called when the 'Image Editing Controls...' <h2> element is clicked", function() {
            let toggleEditingDivSpy = spyOn(window, 'toggleEditingDiv').and.callThrough();
            expect(toggleEditingDivSpy).not.toHaveBeenCalled();
            controlsHeading.click();
            expect(toggleEditingDivSpy).toHaveBeenCalledTimes(1);
        });
        it("toggles between hiding/showing the editing controls", function() {
            expect(editingDiv.getAttribute("hidden")).toBeNull();
            controlsHeading.click();
            expect(editingDiv.getAttribute("hidden")).toBe("hidden");
        });
    });
    describe("the 'toggleWidthDiv()' function", function() {
        let widthLabel = document.getElementsByTagName("LABEL")[0];
        let widthDiv = document.querySelector("#widthDiv");

        it("is called when the 'Width +/-' <label> is clicked, to toggle between showing/hiding the width editing slider", function() {
            let toggleWidthDivSpy = spyOn(window, 'toggleWidthDiv').and.callThrough();
            expect(toggleWidthDivSpy).not.toHaveBeenCalled();
            widthLabel.click();
            expect(toggleWidthDivSpy).toHaveBeenCalledTimes(1);
        });
        it("toggles between hiding/showing the width editing controls", function() {
            expect(widthDiv.getAttribute("hidden")).toBeNull();
            widthLabel.click();
            expect(widthDiv.getAttribute("hidden")).toBe("hidden");
        });
    });
    describe("the 'toggleHeightDiv()' function", function() {
        let heightLabel = document.getElementsByTagName("LABEL")[1];
        let heightDiv = document.querySelector("#heightDiv");

        it("is called when the 'Height +/-' <label> is clicked, to toggle between showing/hiding the height editing slider", function() {
            let toggleHeightDivSpy = spyOn(window, 'toggleHeightDiv').and.callThrough();
            expect(toggleHeightDivSpy).not.toHaveBeenCalled();
            heightLabel.click();
            expect(toggleHeightDivSpy).toHaveBeenCalledTimes(1);
        });
        it("toggles between hiding/showing the height editing controls", function() {
            expect(heightDiv.getAttribute("hidden")).toBeNull();
            heightLabel.click();
            expect(heightDiv.getAttribute("hidden")).toBe("hidden");
        });
    });
    describe("the 'toggleBlurDiv()' function", function() {
        let blurLabel = document.getElementsByTagName("LABEL")[2];
        let blurDiv = document.querySelector("#blurDiv");

        it("is called when the 'Blur +/-' <label> is clicked, to toggle between showing/hiding the blur editing slider", function() {
            let toggleBlurDivSpy = spyOn(window, 'toggleBlurDiv').and.callThrough();
            expect(toggleBlurDivSpy).not.toHaveBeenCalled();
            blurLabel.click();
            expect(toggleBlurDivSpy).toHaveBeenCalledTimes(1);
        });
        it("toggles between hiding/showing the blur editing controls", function() {
            expect(blurDiv.getAttribute("hidden")).toBeNull();
            blurLabel.click();
            expect(blurDiv.getAttribute("hidden")).toBe("hidden");
        });
    });
    describe("the 'toggleBrightnessDiv()' function", function() {
        let brightnessLabel = document.getElementsByTagName("LABEL")[3];
        let brightnessDiv = document.querySelector("#brightnessDiv");

        it("is called when the 'Brightness +/-' <label> is clicked, to toggle between showing/hiding the brightness editing slider", function() {
            let toggleBrightnessDivSpy = spyOn(window, 'toggleBrightnessDiv').and.callThrough();
            expect(toggleBrightnessDivSpy).not.toHaveBeenCalled();
            brightnessLabel.click();
            expect(toggleBrightnessDivSpy).toHaveBeenCalledTimes(1);
        });
        it("toggles between hiding/showing the brightness editing controls", function() {
            expect(brightnessDiv.getAttribute("hidden")).toBeNull();
            brightnessLabel.click();
            expect(brightnessDiv.getAttribute("hidden")).toBe("hidden");
        });
    });
    describe("the 'toggleContrastDiv()' function", function() {
        let contrastLabel = document.getElementsByTagName("LABEL")[4];
        let contrastDiv = document.querySelector("#contrastDiv");

        it("is called when the 'Contrast +/-' <label> is clicked, to toggle between showing/hiding the contrast editing slider", function() {
            let toggleContrastDivSpy = spyOn(window, 'toggleContrastDiv').and.callThrough();
            expect(toggleContrastDivSpy).not.toHaveBeenCalled();
            contrastLabel.click();
            expect(toggleContrastDivSpy).toHaveBeenCalledTimes(1);
        });
        it("toggles between hiding/showing the contrast editing controls", function() {
            expect(contrastDiv.getAttribute("hidden")).toBeNull();
            contrastLabel.click();
            expect(contrastDiv.getAttribute("hidden")).toBe("hidden");
        });
    });
    describe("the 'toggleInvertDiv()' function", function() {
        let invertLabel = document.getElementsByTagName("LABEL")[5];
        let invertDiv = document.querySelector("#invertDiv");

        it("is called when the 'Invert +/-' <label> is clicked, to toggle between showing/hiding the invert editing slider", function() {
            let toggleInvertDivSpy = spyOn(window, 'toggleInvertDiv').and.callThrough();
            expect(toggleInvertDivSpy).not.toHaveBeenCalled();
            invertLabel.click();
            expect(toggleInvertDivSpy).toHaveBeenCalledTimes(1);
        });
        it("toggles between hiding/showing the invert editing controls", function() {
            expect(invertDiv.getAttribute("hidden")).toBeNull();
            invertLabel.click();
            expect(invertDiv.getAttribute("hidden")).toBe("hidden");
        });
    });
    describe("the 'toggleOpacityDiv()' function", function() {
        let opacityLabel = document.getElementsByTagName("LABEL")[6];
        let opacityDiv = document.querySelector("#opacityDiv");

        it("is called when the 'Opacity +/-' <label> is clicked, to toggle between showing/hiding the opacity editing slider", function() {
            let toggleOpacityDivSpy = spyOn(window, 'toggleOpacityDiv').and.callThrough();
            expect(toggleOpacityDivSpy).not.toHaveBeenCalled();
            opacityLabel.click();
            expect(toggleOpacityDivSpy).toHaveBeenCalledTimes(1);
        });
        it("toggles between hiding/showing the opacity editing controls", function() {
            expect(opacityDiv.getAttribute("hidden")).toBeNull();
            opacityLabel.click();
            expect(opacityDiv.getAttribute("hidden")).toBe("hidden");
        });
    });
    describe("the 'toggleSepiaDiv()' function", function(){
        let sepiaLabel = document.getElementsByTagName("LABEL")[7];
        let sepiaDiv = document.querySelector("#sepiaDiv");

        it("is called when the 'Sepia +/-' <label> is clicked, to toggle between showing/hiding the sepia editing slider", function() {
            let toggleSepiaDivSpy = spyOn(window, 'toggleSepiaDiv').and.callThrough();
            expect(toggleSepiaDivSpy).not.toHaveBeenCalled();
            sepiaLabel.click();
            expect(toggleSepiaDivSpy).toHaveBeenCalledTimes(1);
        });
        it("toggles between hiding/showing the sepia editing controls", function() {
            expect(sepiaDiv.getAttribute("hidden")).toBeNull();
            sepiaLabel.click();
            expect(sepiaDiv.getAttribute("hidden")).toBe("hidden");
        });
    });
    describe("the 'toggleAudioControls()' function", function() {
        let musicHeading = document.querySelector(".musicHeading");

        it("is called when the 'Music +/-' <h2> element is clicked, to toggle between showing/hiding the audio controls", function() {
            let toggleAudioControlsSpy = spyOn(window, 'toggleAudioControls');
            expect(toggleAudioControlsSpy).not.toHaveBeenCalled();
            musicHeading.click();
            expect(toggleAudioControlsSpy).toHaveBeenCalledTimes(1);
            musicHeading.click();
            expect(toggleAudioControlsSpy).toHaveBeenCalledTimes(2);
        });
        describe("checks whether the 'audioControls' <div> element has a 'hidden' attribute, and executes the following operations if the check evaluates to TRUE:", function() {
            describe("checks whether 'musicPlayer' equates to a 'falsy' value and executes the following operations if the check evaluates to TRUE:", function() {
                it("initializes the 'musicPlayer', 'musicalProgress', 'musicalPercentage', 'volumeDisplay', and 'autoplayError' variables", function() {
                    jasmine.addMatchers(customMatchers);
                    musicPlayer = false;
                    musicalProgress = false;
                    musicalPercentage = false;
                    volumeDisplay = false;
                    autoplayError = false;
                    expect(musicPlayer).toBeFalsy();
                    expect(musicalProgress).toBeFalsy();
                    expect(musicalPercentage).toBeFalsy();
                    expect(volumeDisplay).toBeFalsy();
                    expect(autoplayError).toBeFalsy();
                    musicHeading.click();
                    expect(musicPlayer).toBeTruthy();
                    expect(musicalProgress).toBeHTMLElement();
                    expect(musicalPercentage).toBeDefined();
                    expect(volumeDisplay).not.toBeFalsy();
                    expect(autoplayError).not.toNotBeHTMLElement();
                    musicHeading.click();
                    musicPlayer = false;
                });
                it("invokes the 'showProgress()' function in order to update the 'volumeDisplay', 'musicalProgress', 'musicalPercentage', and (potentially) the 'autoplayError' elements", function() {
                    let toggleAudioControlsSpy = spyOn(window, 'toggleAudioControls').and.callThrough();
                    let showProgressSpy = spyOn(window, 'showProgress');
                    expect(toggleAudioControlsSpy).not.toHaveBeenCalled();
                    expect(showProgressSpy).not.toHaveBeenCalled();
                    musicHeading.click();
                    expect(toggleAudioControlsSpy).toHaveBeenCalledTimes(1);
                    expect(showProgressSpy).toHaveBeenCalledTimes(1);
                    expect(toggleAudioControlsSpy).toHaveBeenCalledBefore(showProgressSpy);
                    musicHeading.click();
                    musicPlayer = false;
                });
            });
            it("removes the 'hidden' attribute from the 'audioControls' <div>", function() {
                expect(audioControls.getAttribute("hidden")).toBe("hidden");
                musicHeading.click();
                expect(audioControls.getAttribute("hidden")).toBeNull();
            });
        });
        describe("if the 'audioControls' <div> element does NOT have a 'hidden' attribute:", function() {
           it("hides the 'audioControls' <div> element", function() {
                expect(audioControls.getAttribute("hidden")).toBeNull();
                musicHeading.click();
                expect(audioControls.getAttribute("hidden")).toBe("hidden");
           });
        });
    });
    describe("the 'createLink()' function", function() {
        let martianURLDiv = document.querySelector(".martian_url");

        it("is called when the User clicks on the URL displayed at the centre-bottom of the various sol images", function() {
            let createLinkSpy = spyOn(window, 'createLink').and.callThrough();
            expect(createLinkSpy).not.toHaveBeenCalled();
            martianURLDiv.click();
            expect(createLinkSpy).toHaveBeenCalledTimes(1);
        });
        describe("checks whether this is the first time that the URL has been clicked, and executes the following operation if the check evaluates to TRUE:", function() {
            it("stores the value 1 in the numClicks[currentIndex] element", function() {
                numClicks[currentIndex] = 0;
                expect(numClicks[currentIndex]).toEqual(0);
                martianURLDiv.click();
                expect(numClicks[currentIndex]).toEqual(1);
            });
        });
        describe("if this is the second time that the URL has been clicked and the 'visitedLinkString' is equal to an empty String", function () {
            it("adds the String representation of the 'currentIndex' variable to the 'visitedLinkString'", function() {
                numClicks[currentIndex] = 1;
                visitedLinkString = "";
                expect(visitedLinkString).toMatch("");
                martianURLDiv.click();
                expect(visitedLinkString).toMatch("7");
                localStorage.removeItem("currentIndex");
            });
        });
        describe("if this is the second time that the URL has been clicked and if 'visitedLinkString' is not equal to an empty String", function() {
            it("splits the 'visitedLinkString' on the ',' operator, and stores the elements thus furnished in the 'visitedLinkArray'", function() {
                numClicks[currentIndex] = 1;
                visitedLinkString = "7";
                visitedLinkArray = null;
                expect(visitedLinkArray).toBeNull();
                martianURLDiv.click();
                expect(visitedLinkArray.length).toEqual(1);
                localStorage.removeItem("currentIndex");
            });
            it("adds a comma and the String representation of the 'currentIndex' variable to the 'visitedLinkString', if the 'visitedLinkArray' doesn't contain the String representation of the 'currentIndex' variable", function() {
                currentIndex = 8;
                numClicks[currentIndex] = 1;
                visitedLinkString = "7";
                expect(visitedLinkString).toMatch("7");
                martianURLDiv.click();
                expect(visitedLinkString).toMatch("7,8");
                localStorage.removeItem("currentIndex");
            });
        });
        describe("if this is the second time that the URL has been clicked" , function() {
            it("stores the freshly-updated 'visitedLinkString' in localStorage using the key represented by the value of the 'visitedLinkStringKey' variable", function() {
                expect(localStorage.getItem(visitedLinkStringKey)).toMatch("7,8");
            });
            it("sets a 'currentIndex' variable in localStorage, with the value of the string representation of the 'currentIndex' page variable", function() {
                expect(localStorage.getItem("currentIndex")).toBeNull();
                currentIndex = 20;
                numClicks[currentIndex] = 1;
                martianURLDiv.click();
                expect(localStorage.getItem("currentIndex")).toMatch("20");
                localStorage.removeItem("currentIndex");
            });
            it("sets the value of numClicks[currentIndex] back to zero", function() {
                currentIndex = 25;
                numClicks[currentIndex] = 1;
                expect(numClicks[currentIndex]).toEqual(1);
                martianURLDiv.click();
                expect(numClicks[currentIndex]).toEqual(0);
                localStorage.removeItem("currentIndex");
            });
        });
        it("stores a reference to the 'marsURLs[currentIndex]' element in the 'currentURL' variable", function() {
            expect(currentURL).toBe(marsURLs[25]);
            currentIndex = 30;
            numClicks[currentIndex] = 1;
            martianURLDiv.click();
            expect(currentURL).toBe(marsURLs[30]);
            localStorage.removeItem("currentIndex");
        });
        it("stores a reference to the 'hrefValues[currentIndex]' element in the 'hrefValue' variable", function() {
            expect(hrefValue).toBe(hrefValues[30]);
            currentIndex = 35;
            numClicks[currentIndex] = 1;
            martianURLDiv.click();
            expect(hrefValue).toBe(hrefValues[35]);
            localStorage.removeItem("currentIndex");
        });
        it("modifies the innerHTML of the currently-displayed martian url, such that it becomes a clickable link", function() {
            expect(currentURL.innerHTML).toBe('LINK: <a href="' + hrefValue + '" target="_blank"> ' + hrefValue + '</a>');
        });
        it("changes the background colour of the current martian url to a dark-ish green; this colour will persist for the length of time that the page is displayed, indicating to the User that s/he has interacted with this martian-url-displaying <div> element", function() {
            expect(currentURL.style.backgroundColor).toBe("rgb(46, 74, 54)");
        });
    });
});