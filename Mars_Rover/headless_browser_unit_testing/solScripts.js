    let div3 = document.createElement("DIV");
    div3.setAttribute("class", "encompassing");
    div3.setAttribute("id", "div3");
    div3.innerHTML = '<div class="container" id="loading" style="display:block;"><p class="w3-center"><i class="fa fa-spinner w3-spin w3-i-spin"></i></p></div><div id="id01" style="display:none;"><table class="marsTable"><tr class="marsTableRow"><td class="marsTableCell" colspan="3"><h2 class="musicHeading" onclick="toggleAudioControls()">&#9834; &#9835; Music +/- &#9835; &#9834;</h2><br/><span class="autoplayError"></span><div class="audioControls" hidden="hidden"><audio id="musicPlayer"><source src="C:\\Users\\chris\\PhpstormProjects\\Mars_Rover\\audio\\mars_rover_music.mp3" type="audio/mpeg">Your browser does not support the audio tag.</audio><button class="audio1" onclick="playAudio()">PLAY<br/><span class="play" >&#9658;</span></button><button class="audio2" onclick="pauseAudio()">PAUSE<br/><span class="stop">||</span></button><button class="audio3" onclick="volumeUp()"><i class="fa fa-volume-up"></i><br/><span class="volumeUp" >&plus;</span></button><button class="audio4" onclick="volumeDown()"><i class="fa fa-volume-down"></i><br/><span class="volumeDown">&minus;</span></button><p class="audio5" id="volumeDisplay"><i class="fa fa-volume-up"></i><br/></p><div class="progress"><progress id="musicalProgress"></progress><p id="musicalPercentage" class="percentage"></p><p class="musicCredit"><strong>Inspiring music credit:</strong> <em>AShamaluevMusic</em> <strong>https://www.ashamaluevmusic.com/</strong></p></div></div></td></tr><tr class="marsTableRow"><th class="marsTableHeader"><button id="fullscreenBtn" onclick="fullscreenImage()">Fullscreen Image</button><p class="centred">Click Image to Exit Fullscreen</p></th><th class="marsTableHeader fiftyPerCentWidth"><h1 id="martianHeading" class="font-effect-anaglyph"></h1></th><th class="marsTableHeader"><p id="slideSelect" class="centred">Enter Slide Number</p><input type="number" oninput="slideSelect(this.value)" /></th></tr><tr><td class="marsTableCell" colspan="3"><p w3-repeat="photos" class="photo_description">{{slide_string}}</p></td></tr><tr><td id="imageCell" class="container" colspan="3"><button class="previousBtn" onclick="manualPrevious()">&larr;</button><button class="nextBtn" onclick="manualNext()">&rarr;</button><div class="martian_url" w3-repeat="photos" onclick="createLink()">{{img_src}}</div><div id="responsiveDiv"><img w3-repeat="photos" src="{{img_src}}" alt="{{alt_string}}" class="mars" onclick="departFullscreen()" /></div></td></tr><tr><td colspan="3"><h2 class="controlsHeading" onclick="toggleEditingDiv()">&#x270D; Image Editing Controls [Default values in brackets] +/- &#x270D;</h2><div id="editingDiv" hidden="hidden"><p class="labelPara"><label for="widthRange" onclick="toggleWidthDiv()"><span class="khaki">&larr;</span> Width +/- <span class="khaki">[100%]</span> <span class="khaki">&rarr;</span></label></p><div class="slidecontainer" id="widthDiv" hidden="hidden"><button class="decrease" onclick="decreaseWidth()">&minus;</button><input type="range" min="1" max="100" value="100" class="_100PerCent" id="widthRange" /><button class="increase" onclick="increaseWidth()">&plus;</button></div><p class="labelPara"><label for="heightRange" onclick="toggleHeightDiv()"><span class="khaki">&uarr;</span> Height +/- <span class="khaki">[75%]</span> <span class="khaki">&darr;</span></label></p><div class="slidecontainer" id="heightDiv" hidden="hidden"><button class="decrease" onclick="decreaseHeight()">&minus;</button><input type="range" min="1" max="100" value="75" class="_75PerCent" id="heightRange" /><button class="increase" onclick="increaseHeight()">&plus;</button></div><p class="labelPara"><label for="blurRange" onclick="toggleBlurDiv()"><span class="blur1">Blur +/-</span> <span class="khaki">[0px]</span></label></p><div class="slidecontainer" id="blurDiv" hidden="hidden"><button class="decrease" onclick="decreaseBlur()">&minus;</button><input type="range" min="0" max="100" value="0" class="_0Pixel" id="blurRange" /><button class="increase" onclick="increaseBlur()">&plus;</button></div><p class="labelPara"><label for="brightnessRange" onclick="toggleBrightnessDiv()"><span class="brightness200">Bright</span><span class="brightness50">ness</span> +/- <span class="khaki">[100%]</span></label></p><div class="slidecontainer" id="brightnessDiv" hidden="hidden"><button class="decrease" onclick="decreaseBrightness()">&minus;</button><input type="range" min="0" max="800" value="100" step="10" class="_100PerCent" id="brightnessRange" /><button class="increase" onclick="increaseBrightness()">&plus;</button></div><p class="labelPara"><label for="contrastRange" onclick="toggleContrastDiv()"><span class="contrast50">Con</span><span class="contrast150">trast</span> +/- <span class="khaki">[100%]</span></label></p><div class="slidecontainer" id="contrastDiv" hidden="hidden"><button class="decrease" onclick="decreaseContrast()">&minus;</button><input type="range" min="0" max="200" value="100" step="2" class="_100PerCent" id="contrastRange" /><button class="increase" onclick="increaseContrast()">&plus;</button></div><p class="labelPara"><label for="invertRange" onclick="toggleInvertDiv()"><span class="invert100">Invert +/-</span> <span class="khaki">[0%]</span></label></p><div class="slidecontainer" id="invertDiv" hidden="hidden"><button class="decrease" onclick="decreaseInvert()">&minus;</button><input type="range" min="0" max="100" value="0" class="_0PerCent" id="invertRange" /><button class="increase" onclick="increaseInvert()">&plus;</button></div><p class="labelPara"><label for="opacityRange" onclick="toggleOpacityDiv()"><span class="opacity60">Opacity +/-</span> <span class="khaki">[100%]</span></label></p><div class="slidecontainer" id="opacityDiv" hidden="hidden"><button class="decrease" onclick="decreaseOpacity()">&minus;</button><input type="range" min="0" max="100" value="100" class="_100PerCent" id="opacityRange" /><button class="increase" onclick="increaseOpacity()">&plus;</button></div><p class="labelPara"><label for="sepiaRange" onclick="toggleSepiaDiv()"><span class="sepia100">Sepia +/-</span> <span class="khaki">[0%]</span></label></p><div class="slidecontainer" id="sepiaDiv" hidden="hidden"><button class="decrease" onclick="decreaseSepia()">&minus;</button><input type="range" min="0" max="100" value="0" class="_0PerCent" id="sepiaRange" /><button class="increase" onclick="increaseSepia()">&plus;</button></div></div></td></tr><tr class="marsTableRow"><td class="marsTableCell2"><p class="centred" id="timingInfo">Timing Interval (Secs): 0</p></td><td class="marsTableCell2" colspan="2"><label for="interval-select">Slideshow Interval</label><br/><select name="interval-select" id="interval-select" onchange="setupSlideshow(this.value, currentIndex, alreadyRunning)"><option value="0">0</option><option value="1000">1</option><option value="2000">2</option><option value="3000">3</option><option value="4000">4</option><option value="5000">5</option><option value="6000">6</option><option value="7000">7</option><option value="8000">8</option><option value="9000">9</option><option value="10000">10</option></select></td></tr><tr class="marsTableRow"><td class="marsTableCell" colspan="3"><button class="solSelection oneHundredPerCentWidth" onclick="solSelectScreen()"><span class="centred">* <span class="backArrow">&lt;--</span> Return to Sol Selection *</span></button></td></tr></table></div>';
    document.body.appendChild(div3);

    let script2 = document.createElement("SCRIPT");
    script2.setAttribute("src", "C:\\Users\\chris\\PhpstormProjects\\Mars_Rover\\headless_browser_unit_testing\\custom-matchers.js");
    document.body.appendChild(script2);

    let script3 = document.createElement("SCRIPT");
    script3.setAttribute("src", "C:\\Users\\chris\\PhpstormProjects\\Mars_Rover\\headless_browser_unit_testing\\w3.js");
    document.body.appendChild(script3);

    let script4 = document.createElement("SCRIPT");
    script4.text = 'let slideshowObject = {"photos":[{"id":287319,"sol":1,"camera":{"id":27,"name":"FHAZ","rover_id":7,"full_name":"Front Hazard Avoidance Camera"},"img_src":"http://mars.nasa.gov/mer/gallery/all/2/f/001/2F126468064EDN0000P1001L0M1-BR.JPG","earth_date":"2004-01-05","rover":{"id":7,"name":"Spirit","landing_date":"2004-01-04","launch_date":"2003-06-10","status":"complete","max_sol":2208,"max_date":"2010-03-21","total_photos":124550,"cameras":[{"name":"FHAZ","full_name":"Front Hazard Avoidance Camera"},{"name":"NAVCAM","full_name":"Navigation Camera"},{"name":"PANCAM","full_name":"Panoramic Camera"},{"name":"MINITES","full_name":"Miniature Thermal Emission Spectrometer (Mini-TES)"},{"name":"ENTRY","full_name":"Entry, Descent, and Landing Camera"},{"name":"RHAZ","full_name":"Rear Hazard Avoidance Camera"}]}},{"id":287320,"sol":1,"camera":{"id":27,"name":"FHAZ","rover_id":7,"full_name":"Front Hazard Avoidance Camera"},"img_src":"http://mars.nasa.gov/mer/gallery/all/2/f/001/2F126468064EDN0000P1001R0M1-BR.JPG","earth_date":"2004-01-05","rover":{"id":7,"name":"Spirit","landing_date":"2004-01-04","launch_date":"2003-06-10","status":"complete","max_sol":2208,"max_date":"2010-03-21","total_photos":124550,"cameras":[{"name":"FHAZ","full_name":"Front Hazard Avoidance Camera"},{"name":"NAVCAM","full_name":"Navigation Camera"},{"name":"PANCAM","full_name":"Panoramic Camera"},{"name":"MINITES","full_name":"Miniature Thermal Emission Spectrometer (Mini-TES)"},{"name":"ENTRY","full_name":"Entry, Descent, and Landing Camera"},{"name":"RHAZ","full_name":"Rear Hazard Avoidance Camera"}]}},{"id":290673,"sol":1,"camera":{"id":28,"name":"RHAZ","rover_id":7,"full_name":"Rear Hazard Avoidance Camera"},"img_src":"http://mars.nasa.gov/mer/gallery/all/2/r/001/2R126468012EDN0000P1002L0M1-BR.JPG","earth_date":"2004-01-05","rover":{"id":7,"name":"Spirit","landing_date":"2004-01-04","launch_date":"2003-06-10","status":"complete","max_sol":2208,"max_date":"2010-03-21","total_photos":124550,"cameras":[{"name":"FHAZ","full_name":"Front Hazard Avoidance Camera"},{"name":"NAVCAM","full_name":"Navigation Camera"},{"name":"PANCAM","full_name":"Panoramic Camera"},{"name":"MINITES","full_name":"Miniature Thermal Emission Spectrometer (Mini-TES)"},{"name":"ENTRY","full_name":"Entry, Descent, and Landing Camera"},{"name":"RHAZ","full_name":"Rear Hazard Avoidance Camera"}]}},{"id":290674,"sol":1,"camera":{"id":28,"name":"RHAZ","rover_id":7,"full_name":"Rear Hazard Avoidance Camera"},"img_src":"http://mars.nasa.gov/mer/gallery/all/2/r/001/2R126468012EDN0000P1002R0M1-BR.JPG","earth_date":"2004-01-05","rover":{"id":7,"name":"Spirit","landing_date":"2004-01-04","launch_date":"2003-06-10","status":"complete","max_sol":2208,"max_date":"2010-03-21","total_photos":124550,"cameras":[{"name":"FHAZ","full_name":"Front Hazard Avoidance Camera"},{"name":"NAVCAM","full_name":"Navigation Camera"},{"name":"PANCAM","full_name":"Panoramic Camera"},{"name":"MINITES","full_name":"Miniature Thermal Emission Spectrometer (Mini-TES)"},{"name":"ENTRY","full_name":"Entry, Descent, and Landing Camera"},{"name":"RHAZ","full_name":"Rear Hazard Avoidance Camera"}]}},{"id":318416,"sol":1,"camera":{"id":29,"name":"NAVCAM","rover_id":7,"full_name":"Navigation Camera"},"img_src":"http://mars.nasa.gov/mer/gallery/all/2/n/001/2N126467960EDN0000P1500L0M1-BR.JPG","earth_date":"2004-01-05","rover":{"id":7,"name":"Spirit","landing_date":"2004-01-04","launch_date":"2003-06-10","status":"complete","max_sol":2208,"max_date":"2010-03-21","total_photos":124550,"cameras":[{"name":"FHAZ","full_name":"Front Hazard Avoidance Camera"},{"name":"NAVCAM","full_name":"Navigation Camera"},{"name":"PANCAM","full_name":"Panoramic Camera"},{"name":"MINITES","full_name":"Miniature Thermal Emission Spectrometer (Mini-TES)"},{"name":"ENTRY","full_name":"Entry, Descent, and Landing Camera"},{"name":"RHAZ","full_name":"Rear Hazard Avoidance Camera"}]}},{"id":318417,"sol":1,"camera":{"id":29,"name":"NAVCAM","rover_id":7,"full_name":"Navigation Camera"},"img_src":"http://mars.nasa.gov/mer/gallery/all/2/n/001/2N126467960EDN0000P1500R0M1-BR.JPG","earth_date":"2004-01-05","rover":{"id":7,"name":"Spirit","landing_date":"2004-01-04","launch_date":"2003-06-10","status":"complete","max_sol":2208,"max_date":"2010-03-21","total_photos":124550,"cameras":[{"name":"FHAZ","full_name":"Front Hazard Avoidance Camera"},{"name":"NAVCAM","full_name":"Navigation Camera"},{"name":"PANCAM","full_name":"Panoramic Camera"},{"name":"MINITES","full_name":"Miniature Thermal Emission Spectrometer (Mini-TES)"},{"name":"ENTRY","full_name":"Entry, Descent, and Landing Camera"},{"name":"RHAZ","full_name":"Rear Hazard Avoidance Camera"}]}},{"id":318418,"sol":1,"camera":{"id":29,"name":"NAVCAM","rover_id":7,"full_name":"Navigation Camera"},"img_src":"http://mars.nasa.gov/mer/gallery/all/2/n/001/2N126468200EDN0000P1502L0M1-BR.JPG","earth_date":"2004-01-05","rover":{"id":7,"name":"Spirit","landing_date":"2004-01-04","launch_date":"2003-06-10","status":"complete","max_sol":2208,"max_date":"2010-03-21","total_photos":124550,"cameras":[{"name":"FHAZ","full_name":"Front Hazard Avoidance Camera"},{"name":"NAVCAM","full_name":"Navigation Camera"},{"name":"PANCAM","full_name":"Panoramic Camera"},{"name":"MINITES","full_name":"Miniature Thermal Emission Spectrometer (Mini-TES)"},{"name":"ENTRY","full_name":"Entry, Descent, and Landing Camera"},{"name":"RHAZ","full_name":"Rear Hazard Avoidance Camera"}]}},{"id":318419,"sol":1,"camera":{"id":29,"name":"NAVCAM","rover_id":7,"full_name":"Navigation Camera"},"img_src":"http://mars.nasa.gov/mer/gallery/all/2/n/001/2N126468200EDN0000P1502R0M1-BR.JPG","earth_date":"2004-01-05","rover":{"id":7,"name":"Spirit","landing_date":"2004-01-04","launch_date":"2003-06-10","status":"complete","max_sol":2208,"max_date":"2010-03-21","total_photos":124550,"cameras":[{"name":"FHAZ","full_name":"Front Hazard Avoidance Camera"},{"name":"NAVCAM","full_name":"Navigation Camera"},{"name":"PANCAM","full_name":"Panoramic Camera"},{"name":"MINITES","full_name":"Miniature Thermal Emission Spectrometer (Mini-TES)"},{"name":"ENTRY","full_name":"Entry, Descent, and Landing Camera"},{"name":"RHAZ","full_name":"Rear Hazard Avoidance Camera"}]}},{"id":318420,"sol":1,"camera":{"id":29,"name":"NAVCAM","rover_id":7,"full_name":"Navigation Camera"},"img_src":"http://mars.nasa.gov/mer/gallery/all/2/n/001/2N126468253EDN0000P1502L0M1-BR.JPG","earth_date":"2004-01-05","rover":{"id":7,"name":"Spirit","landing_date":"2004-01-04","launch_date":"2003-06-10","status":"complete","max_sol":2208,"max_date":"2010-03-21","total_photos":124550,"cameras":[{"name":"FHAZ","full_name":"Front Hazard Avoidance Camera"},{"name":"NAVCAM","full_name":"Navigation Camera"},{"name":"PANCAM","full_name":"Panoramic Camera"},{"name":"MINITES","full_name":"Miniature Thermal Emission Spectrometer (Mini-TES)"},{"name":"ENTRY","full_name":"Entry, Descent, and Landing Camera"},{"name":"RHAZ","full_name":"Rear Hazard Avoidance Camera"}]}},{"id":318421,"sol":1,"camera":{"id":29,"name":"NAVCAM","rover_id":7,"full_name":"Navigation Camera"},"img_src":"http://mars.nasa.gov/mer/gallery/all/2/n/001/2N126468253EDN0000P1502R0M1-BR.JPG","earth_date":"2004-01-05","rover":{"id":7,"name":"Spirit","landing_date":"2004-01-04","launch_date":"2003-06-10","status":"complete","max_sol":2208,"max_date":"2010-03-21","total_photos":124550,"cameras":[{"name":"FHAZ","full_name":"Front Hazard Avoidance Camera"},{"name":"NAVCAM","full_name":"Navigation Camera"},{"name":"PANCAM","full_name":"Panoramic Camera"},{"name":"MINITES","full_name":"Miniature Thermal Emission Spectrometer (Mini-TES)"},{"name":"ENTRY","full_name":"Entry, Descent, and Landing Camera"},{"name":"RHAZ","full_name":"Rear Hazard Avoidance Camera"}]}},{"id":318422,"sol":1,"camera":{"id":29,"name":"NAVCAM","rover_id":7,"full_name":"Navigation Camera"},"img_src":"http://mars.nasa.gov/mer/gallery/all/2/n/001/2N126468305EDN0000P1502L0M1-BR.JPG","earth_date":"2004-01-05","rover":{"id":7,"name":"Spirit","landing_date":"2004-01-04","launch_date":"2003-06-10","status":"complete","max_sol":2208,"max_date":"2010-03-21","total_photos":124550,"cameras":[{"name":"FHAZ","full_name":"Front Hazard Avoidance Camera"},{"name":"NAVCAM","full_name":"Navigation Camera"},{"name":"PANCAM","full_name":"Panoramic Camera"},{"name":"MINITES","full_name":"Miniature Thermal Emission Spectrometer (Mini-TES)"},{"name":"ENTRY","full_name":"Entry, Descent, and Landing Camera"},{"name":"RHAZ","full_name":"Rear Hazard Avoidance Camera"}]}},{"id":318423,"sol":1,"camera":{"id":29,"name":"NAVCAM","rover_id":7,"full_name":"Navigation Camera"},"img_src":"http://mars.nasa.gov/mer/gallery/all/2/n/001/2N126468305EDN0000P1502R0M1-BR.JPG","earth_date":"2004-01-05","rover":{"id":7,"name":"Spirit","landing_date":"2004-01-04","launch_date":"2003-06-10","status":"complete","max_sol":2208,"max_date":"2010-03-21","total_photos":124550,"cameras":[{"name":"FHAZ","full_name":"Front Hazard Avoidance Camera"},{"name":"NAVCAM","full_name":"Navigation Camera"},{"name":"PANCAM","full_name":"Panoramic Camera"},{"name":"MINITES","full_name":"Miniature Thermal Emission Spectrometer (Mini-TES)"},{"name":"ENTRY","full_name":"Entry, Descent, and Landing Camera"},{"name":"RHAZ","full_name":"Rear Hazard Avoidance Camera"}]}},{"id":318424,"sol":1,"camera":{"id":29,"name":"NAVCAM","rover_id":7,"full_name":"Navigation Camera"},"img_src":"http://mars.nasa.gov/mer/gallery/all/2/n/001/2N126468357EDN0000P1502L0M1-BR.JPG","earth_date":"2004-01-05","rover":{"id":7,"name":"Spirit","landing_date":"2004-01-04","launch_date":"2003-06-10","status":"complete","max_sol":2208,"max_date":"2010-03-21","total_photos":124550,"cameras":[{"name":"FHAZ","full_name":"Front Hazard Avoidance Camera"},{"name":"NAVCAM","full_name":"Navigation Camera"},{"name":"PANCAM","full_name":"Panoramic Camera"},{"name":"MINITES","full_name":"Miniature Thermal Emission Spectrometer (Mini-TES)"},{"name":"ENTRY","full_name":"Entry, Descent, and Landing Camera"},{"name":"RHAZ","full_name":"Rear Hazard Avoidance Camera"}]}},{"id":318425,"sol":1,"camera":{"id":29,"name":"NAVCAM","rover_id":7,"full_name":"Navigation Camera"},"img_src":"http://mars.nasa.gov/mer/gallery/all/2/n/001/2N126468357EDN0000P1502R0M1-BR.JPG","earth_date":"2004-01-05","rover":{"id":7,"name":"Spirit","landing_date":"2004-01-04","launch_date":"2003-06-10","status":"complete","max_sol":2208,"max_date":"2010-03-21","total_photos":124550,"cameras":[{"name":"FHAZ","full_name":"Front Hazard Avoidance Camera"},{"name":"NAVCAM","full_name":"Navigation Camera"},{"name":"PANCAM","full_name":"Panoramic Camera"},{"name":"MINITES","full_name":"Miniature Thermal Emission Spectrometer (Mini-TES)"},{"name":"ENTRY","full_name":"Entry, Descent, and Landing Camera"},{"name":"RHAZ","full_name":"Rear Hazard Avoidance Camera"}]}},{"id":318426,"sol":1,"camera":{"id":29,"name":"NAVCAM","rover_id":7,"full_name":"Navigation Camera"},"img_src":"http://mars.nasa.gov/mer/gallery/all/2/n/001/2N126468424EDN0000P1502L0M1-BR.JPG","earth_date":"2004-01-05","rover":{"id":7,"name":"Spirit","landing_date":"2004-01-04","launch_date":"2003-06-10","status":"complete","max_sol":2208,"max_date":"2010-03-21","total_photos":124550,"cameras":[{"name":"FHAZ","full_name":"Front Hazard Avoidance Camera"},{"name":"NAVCAM","full_name":"Navigation Camera"},{"name":"PANCAM","full_name":"Panoramic Camera"},{"name":"MINITES","full_name":"Miniature Thermal Emission Spectrometer (Mini-TES)"},{"name":"ENTRY","full_name":"Entry, Descent, and Landing Camera"},{"name":"RHAZ","full_name":"Rear Hazard Avoidance Camera"}]}},{"id":318427,"sol":1,"camera":{"id":29,"name":"NAVCAM","rover_id":7,"full_name":"Navigation Camera"},"img_src":"http://mars.nasa.gov/mer/gallery/all/2/n/001/2N126468424EDN0000P1502R0M1-BR.JPG","earth_date":"2004-01-05","rover":{"id":7,"name":"Spirit","landing_date":"2004-01-04","launch_date":"2003-06-10","status":"complete","max_sol":2208,"max_date":"2010-03-21","total_photos":124550,"cameras":[{"name":"FHAZ","full_name":"Front Hazard Avoidance Camera"},{"name":"NAVCAM","full_name":"Navigation Camera"},{"name":"PANCAM","full_name":"Panoramic Camera"},{"name":"MINITES","full_name":"Miniature Thermal Emission Spectrometer (Mini-TES)"},{"name":"ENTRY","full_name":"Entry, Descent, and Landing Camera"},{"name":"RHAZ","full_name":"Rear Hazard Avoidance Camera"}]}},{"id":318428,"sol":1,"camera":{"id":29,"name":"NAVCAM","rover_id":7,"full_name":"Navigation Camera"},"img_src":"http://mars.nasa.gov/mer/gallery/all/2/n/001/2N126468476EDN0000P1502L0M1-BR.JPG","earth_date":"2004-01-05","rover":{"id":7,"name":"Spirit","landing_date":"2004-01-04","launch_date":"2003-06-10","status":"complete","max_sol":2208,"max_date":"2010-03-21","total_photos":124550,"cameras":[{"name":"FHAZ","full_name":"Front Hazard Avoidance Camera"},{"name":"NAVCAM","full_name":"Navigation Camera"},{"name":"PANCAM","full_name":"Panoramic Camera"},{"name":"MINITES","full_name":"Miniature Thermal Emission Spectrometer (Mini-TES)"},{"name":"ENTRY","full_name":"Entry, Descent, and Landing Camera"},{"name":"RHAZ","full_name":"Rear Hazard Avoidance Camera"}]}},{"id":318429,"sol":1,"camera":{"id":29,"name":"NAVCAM","rover_id":7,"full_name":"Navigation Camera"},"img_src":"http://mars.nasa.gov/mer/gallery/all/2/n/001/2N126468476EDN0000P1502R0M1-BR.JPG","earth_date":"2004-01-05","rover":{"id":7,"name":"Spirit","landing_date":"2004-01-04","launch_date":"2003-06-10","status":"complete","max_sol":2208,"max_date":"2010-03-21","total_photos":124550,"cameras":[{"name":"FHAZ","full_name":"Front Hazard Avoidance Camera"},{"name":"NAVCAM","full_name":"Navigation Camera"},{"name":"PANCAM","full_name":"Panoramic Camera"},{"name":"MINITES","full_name":"Miniature Thermal Emission Spectrometer (Mini-TES)"},{"name":"ENTRY","full_name":"Entry, Descent, and Landing Camera"},{"name":"RHAZ","full_name":"Rear Hazard Avoidance Camera"}]}},{"id":318430,"sol":1,"camera":{"id":29,"name":"NAVCAM","rover_id":7,"full_name":"Navigation Camera"},"img_src":"http://mars.nasa.gov/mer/gallery/all/2/n/001/2N126468527EDN0000P1502L0M1-BR.JPG","earth_date":"2004-01-05","rover":{"id":7,"name":"Spirit","landing_date":"2004-01-04","launch_date":"2003-06-10","status":"complete","max_sol":2208,"max_date":"2010-03-21","total_photos":124550,"cameras":[{"name":"FHAZ","full_name":"Front Hazard Avoidance Camera"},{"name":"NAVCAM","full_name":"Navigation Camera"},{"name":"PANCAM","full_name":"Panoramic Camera"},{"name":"MINITES","full_name":"Miniature Thermal Emission Spectrometer (Mini-TES)"},{"name":"ENTRY","full_name":"Entry, Descent, and Landing Camera"},{"name":"RHAZ","full_name":"Rear Hazard Avoidance Camera"}]}},{"id":318431,"sol":1,"camera":{"id":29,"name":"NAVCAM","rover_id":7,"full_name":"Navigation Camera"},"img_src":"http://mars.nasa.gov/mer/gallery/all/2/n/001/2N126468527EDN0000P1502R0M1-BR.JPG","earth_date":"2004-01-05","rover":{"id":7,"name":"Spirit","landing_date":"2004-01-04","launch_date":"2003-06-10","status":"complete","max_sol":2208,"max_date":"2010-03-21","total_photos":124550,"cameras":[{"name":"FHAZ","full_name":"Front Hazard Avoidance Camera"},{"name":"NAVCAM","full_name":"Navigation Camera"},{"name":"PANCAM","full_name":"Panoramic Camera"},{"name":"MINITES","full_name":"Miniature Thermal Emission Spectrometer (Mini-TES)"},{"name":"ENTRY","full_name":"Entry, Descent, and Landing Camera"},{"name":"RHAZ","full_name":"Rear Hazard Avoidance Camera"}]}},{"id":318432,"sol":1,"camera":{"id":29,"name":"NAVCAM","rover_id":7,"full_name":"Navigation Camera"},"img_src":"http://mars.nasa.gov/mer/gallery/all/2/n/001/2N126468579EDN0000P1502L0M1-BR.JPG","earth_date":"2004-01-05","rover":{"id":7,"name":"Spirit","landing_date":"2004-01-04","launch_date":"2003-06-10","status":"complete","max_sol":2208,"max_date":"2010-03-21","total_photos":124550,"cameras":[{"name":"FHAZ","full_name":"Front Hazard Avoidance Camera"},{"name":"NAVCAM","full_name":"Navigation Camera"},{"name":"PANCAM","full_name":"Panoramic Camera"},{"name":"MINITES","full_name":"Miniature Thermal Emission Spectrometer (Mini-TES)"},{"name":"ENTRY","full_name":"Entry, Descent, and Landing Camera"},{"name":"RHAZ","full_name":"Rear Hazard Avoidance Camera"}]}},{"id":318433,"sol":1,"camera":{"id":29,"name":"NAVCAM","rover_id":7,"full_name":"Navigation Camera"},"img_src":"http://mars.nasa.gov/mer/gallery/all/2/n/001/2N126468579EDN0000P1502R0M1-BR.JPG","earth_date":"2004-01-05","rover":{"id":7,"name":"Spirit","landing_date":"2004-01-04","launch_date":"2003-06-10","status":"complete","max_sol":2208,"max_date":"2010-03-21","total_photos":124550,"cameras":[{"name":"FHAZ","full_name":"Front Hazard Avoidance Camera"},{"name":"NAVCAM","full_name":"Navigation Camera"},{"name":"PANCAM","full_name":"Panoramic Camera"},{"name":"MINITES","full_name":"Miniature Thermal Emission Spectrometer (Mini-TES)"},{"name":"ENTRY","full_name":"Entry, Descent, and Landing Camera"},{"name":"RHAZ","full_name":"Rear Hazard Avoidance Camera"}]}},{"id":318434,"sol":1,"camera":{"id":29,"name":"NAVCAM","rover_id":7,"full_name":"Navigation Camera"},"img_src":"http://mars.nasa.gov/mer/gallery/all/2/n/001/2N126468631EDN0000P1502L0M1-BR.JPG","earth_date":"2004-01-05","rover":{"id":7,"name":"Spirit","landing_date":"2004-01-04","launch_date":"2003-06-10","status":"complete","max_sol":2208,"max_date":"2010-03-21","total_photos":124550,"cameras":[{"name":"FHAZ","full_name":"Front Hazard Avoidance Camera"},{"name":"NAVCAM","full_name":"Navigation Camera"},{"name":"PANCAM","full_name":"Panoramic Camera"},{"name":"MINITES","full_name":"Miniature Thermal Emission Spectrometer (Mini-TES)"},{"name":"ENTRY","full_name":"Entry, Descent, and Landing Camera"},{"name":"RHAZ","full_name":"Rear Hazard Avoidance Camera"}]}},{"id":318435,"sol":1,"camera":{"id":29,"name":"NAVCAM","rover_id":7,"full_name":"Navigation Camera"},"img_src":"http://mars.nasa.gov/mer/gallery/all/2/n/001/2N126468631EDN0000P1502R0M1-BR.JPG","earth_date":"2004-01-05","rover":{"id":7,"name":"Spirit","landing_date":"2004-01-04","launch_date":"2003-06-10","status":"complete","max_sol":2208,"max_date":"2010-03-21","total_photos":124550,"cameras":[{"name":"FHAZ","full_name":"Front Hazard Avoidance Camera"},{"name":"NAVCAM","full_name":"Navigation Camera"},{"name":"PANCAM","full_name":"Panoramic Camera"},{"name":"MINITES","full_name":"Miniature Thermal Emission Spectrometer (Mini-TES)"},{"name":"ENTRY","full_name":"Entry, Descent, and Landing Camera"},{"name":"RHAZ","full_name":"Rear Hazard Avoidance Camera"}]}},{"id":318436,"sol":1,"camera":{"id":29,"name":"NAVCAM","rover_id":7,"full_name":"Navigation Camera"},"img_src":"http://mars.nasa.gov/mer/gallery/all/2/n/001/2N126468719EDN0000P1502L0M1-BR.JPG","earth_date":"2004-01-05","rover":{"id":7,"name":"Spirit","landing_date":"2004-01-04","launch_date":"2003-06-10","status":"complete","max_sol":2208,"max_date":"2010-03-21","total_photos":124550,"cameras":[{"name":"FHAZ","full_name":"Front Hazard Avoidance Camera"},{"name":"NAVCAM","full_name":"Navigation Camera"},{"name":"PANCAM","full_name":"Panoramic Camera"},{"name":"MINITES","full_name":"Miniature Thermal Emission Spectrometer (Mini-TES)"},{"name":"ENTRY","full_name":"Entry, Descent, and Landing Camera"},{"name":"RHAZ","full_name":"Rear Hazard Avoidance Camera"}]}},{"id":318437,"sol":1,"camera":{"id":29,"name":"NAVCAM","rover_id":7,"full_name":"Navigation Camera"},"img_src":"http://mars.nasa.gov/mer/gallery/all/2/n/001/2N126468719EDN0000P1502R0M1-BR.JPG","earth_date":"2004-01-05","rover":{"id":7,"name":"Spirit","landing_date":"2004-01-04","launch_date":"2003-06-10","status":"complete","max_sol":2208,"max_date":"2010-03-21","total_photos":124550,"cameras":[{"name":"FHAZ","full_name":"Front Hazard Avoidance Camera"},{"name":"NAVCAM","full_name":"Navigation Camera"},{"name":"PANCAM","full_name":"Panoramic Camera"},{"name":"MINITES","full_name":"Miniature Thermal Emission Spectrometer (Mini-TES)"},{"name":"ENTRY","full_name":"Entry, Descent, and Landing Camera"},{"name":"RHAZ","full_name":"Rear Hazard Avoidance Camera"}]}},{"id":318438,"sol":1,"camera":{"id":29,"name":"NAVCAM","rover_id":7,"full_name":"Navigation Camera"},"img_src":"http://mars.nasa.gov/mer/gallery/all/2/n/001/2N126468852EDN0000P1503L0M1-BR.JPG","earth_date":"2004-01-05","rover":{"id":7,"name":"Spirit","landing_date":"2004-01-04","launch_date":"2003-06-10","status":"complete","max_sol":2208,"max_date":"2010-03-21","total_photos":124550,"cameras":[{"name":"FHAZ","full_name":"Front Hazard Avoidance Camera"},{"name":"NAVCAM","full_name":"Navigation Camera"},{"name":"PANCAM","full_name":"Panoramic Camera"},{"name":"MINITES","full_name":"Miniature Thermal Emission Spectrometer (Mini-TES)"},{"name":"ENTRY","full_name":"Entry, Descent, and Landing Camera"},{"name":"RHAZ","full_name":"Rear Hazard Avoidance Camera"}]}},{"id":318439,"sol":1,"camera":{"id":29,"name":"NAVCAM","rover_id":7,"full_name":"Navigation Camera"},"img_src":"http://mars.nasa.gov/mer/gallery/all/2/n/001/2N126468852EDN0000P1503R0M1-BR.JPG","earth_date":"2004-01-05","rover":{"id":7,"name":"Spirit","landing_date":"2004-01-04","launch_date":"2003-06-10","status":"complete","max_sol":2208,"max_date":"2010-03-21","total_photos":124550,"cameras":[{"name":"FHAZ","full_name":"Front Hazard Avoidance Camera"},{"name":"NAVCAM","full_name":"Navigation Camera"},{"name":"PANCAM","full_name":"Panoramic Camera"},{"name":"MINITES","full_name":"Miniature Thermal Emission Spectrometer (Mini-TES)"},{"name":"ENTRY","full_name":"Entry, Descent, and Landing Camera"},{"name":"RHAZ","full_name":"Rear Hazard Avoidance Camera"}]}},{"id":318440,"sol":1,"camera":{"id":29,"name":"NAVCAM","rover_id":7,"full_name":"Navigation Camera"},"img_src":"http://mars.nasa.gov/mer/gallery/all/2/n/001/2N126468889EDN0000P1503L0M1-BR.JPG","earth_date":"2004-01-05","rover":{"id":7,"name":"Spirit","landing_date":"2004-01-04","launch_date":"2003-06-10","status":"complete","max_sol":2208,"max_date":"2010-03-21","total_photos":124550,"cameras":[{"name":"FHAZ","full_name":"Front Hazard Avoidance Camera"},{"name":"NAVCAM","full_name":"Navigation Camera"},{"name":"PANCAM","full_name":"Panoramic Camera"},{"name":"MINITES","full_name":"Miniature Thermal Emission Spectrometer (Mini-TES)"},{"name":"ENTRY","full_name":"Entry, Descent, and Landing Camera"},{"name":"RHAZ","full_name":"Rear Hazard Avoidance Camera"}]}},{"id":318441,"sol":1,"camera":{"id":29,"name":"NAVCAM","rover_id":7,"full_name":"Navigation Camera"},"img_src":"http://mars.nasa.gov/mer/gallery/all/2/n/001/2N126468889EDN0000P1503R0M1-BR.JPG","earth_date":"2004-01-05","rover":{"id":7,"name":"Spirit","landing_date":"2004-01-04","launch_date":"2003-06-10","status":"complete","max_sol":2208,"max_date":"2010-03-21","total_photos":124550,"cameras":[{"name":"FHAZ","full_name":"Front Hazard Avoidance Camera"},{"name":"NAVCAM","full_name":"Navigation Camera"},{"name":"PANCAM","full_name":"Panoramic Camera"},{"name":"MINITES","full_name":"Miniature Thermal Emission Spectrometer (Mini-TES)"},{"name":"ENTRY","full_name":"Entry, Descent, and Landing Camera"},{"name":"RHAZ","full_name":"Rear Hazard Avoidance Camera"}]}},{"id":318442,"sol":1,"camera":{"id":29,"name":"NAVCAM","rover_id":7,"full_name":"Navigation Camera"},"img_src":"http://mars.nasa.gov/mer/gallery/all/2/n/001/2N126468921EDN0000P1503L0M1-BR.JPG","earth_date":"2004-01-05","rover":{"id":7,"name":"Spirit","landing_date":"2004-01-04","launch_date":"2003-06-10","status":"complete","max_sol":2208,"max_date":"2010-03-21","total_photos":124550,"cameras":[{"name":"FHAZ","full_name":"Front Hazard Avoidance Camera"},{"name":"NAVCAM","full_name":"Navigation Camera"},{"name":"PANCAM","full_name":"Panoramic Camera"},{"name":"MINITES","full_name":"Miniature Thermal Emission Spectrometer (Mini-TES)"},{"name":"ENTRY","full_name":"Entry, Descent, and Landing Camera"},{"name":"RHAZ","full_name":"Rear Hazard Avoidance Camera"}]}},{"id":318443,"sol":1,"camera":{"id":29,"name":"NAVCAM","rover_id":7,"full_name":"Navigation Camera"},"img_src":"http://mars.nasa.gov/mer/gallery/all/2/n/001/2N126468921EDN0000P1503R0M1-BR.JPG","earth_date":"2004-01-05","rover":{"id":7,"name":"Spirit","landing_date":"2004-01-04","launch_date":"2003-06-10","status":"complete","max_sol":2208,"max_date":"2010-03-21","total_photos":124550,"cameras":[{"name":"FHAZ","full_name":"Front Hazard Avoidance Camera"},{"name":"NAVCAM","full_name":"Navigation Camera"},{"name":"PANCAM","full_name":"Panoramic Camera"},{"name":"MINITES","full_name":"Miniature Thermal Emission Spectrometer (Mini-TES)"},{"name":"ENTRY","full_name":"Entry, Descent, and Landing Camera"},{"name":"RHAZ","full_name":"Rear Hazard Avoidance Camera"}]}},{"id":318444,"sol":1,"camera":{"id":29,"name":"NAVCAM","rover_id":7,"full_name":"Navigation Camera"},"img_src":"http://mars.nasa.gov/mer/gallery/all/2/n/001/2N126468972EDN0000P1503L0M1-BR.JPG","earth_date":"2004-01-05","rover":{"id":7,"name":"Spirit","landing_date":"2004-01-04","launch_date":"2003-06-10","status":"complete","max_sol":2208,"max_date":"2010-03-21","total_photos":124550,"cameras":[{"name":"FHAZ","full_name":"Front Hazard Avoidance Camera"},{"name":"NAVCAM","full_name":"Navigation Camera"},{"name":"PANCAM","full_name":"Panoramic Camera"},{"name":"MINITES","full_name":"Miniature Thermal Emission Spectrometer (Mini-TES)"},{"name":"ENTRY","full_name":"Entry, Descent, and Landing Camera"},{"name":"RHAZ","full_name":"Rear Hazard Avoidance Camera"}]}},{"id":318445,"sol":1,"camera":{"id":29,"name":"NAVCAM","rover_id":7,"full_name":"Navigation Camera"},"img_src":"http://mars.nasa.gov/mer/gallery/all/2/n/001/2N126468972EDN0000P1503R0M1-BR.JPG","earth_date":"2004-01-05","rover":{"id":7,"name":"Spirit","landing_date":"2004-01-04","launch_date":"2003-06-10","status":"complete","max_sol":2208,"max_date":"2010-03-21","total_photos":124550,"cameras":[{"name":"FHAZ","full_name":"Front Hazard Avoidance Camera"},{"name":"NAVCAM","full_name":"Navigation Camera"},{"name":"PANCAM","full_name":"Panoramic Camera"},{"name":"MINITES","full_name":"Miniature Thermal Emission Spectrometer (Mini-TES)"},{"name":"ENTRY","full_name":"Entry, Descent, and Landing Camera"},{"name":"RHAZ","full_name":"Rear Hazard Avoidance Camera"}]}},{"id":318446,"sol":1,"camera":{"id":29,"name":"NAVCAM","rover_id":7,"full_name":"Navigation Camera"},"img_src":"http://mars.nasa.gov/mer/gallery/all/2/n/001/2N126469021EDN0000P1503L0M1-BR.JPG","earth_date":"2004-01-05","rover":{"id":7,"name":"Spirit","landing_date":"2004-01-04","launch_date":"2003-06-10","status":"complete","max_sol":2208,"max_date":"2010-03-21","total_photos":124550,"cameras":[{"name":"FHAZ","full_name":"Front Hazard Avoidance Camera"},{"name":"NAVCAM","full_name":"Navigation Camera"},{"name":"PANCAM","full_name":"Panoramic Camera"},{"name":"MINITES","full_name":"Miniature Thermal Emission Spectrometer (Mini-TES)"},{"name":"ENTRY","full_name":"Entry, Descent, and Landing Camera"},{"name":"RHAZ","full_name":"Rear Hazard Avoidance Camera"}]}},{"id":318447,"sol":1,"camera":{"id":29,"name":"NAVCAM","rover_id":7,"full_name":"Navigation Camera"},"img_src":"http://mars.nasa.gov/mer/gallery/all/2/n/001/2N126469021EDN0000P1503R0M1-BR.JPG","earth_date":"2004-01-05","rover":{"id":7,"name":"Spirit","landing_date":"2004-01-04","launch_date":"2003-06-10","status":"complete","max_sol":2208,"max_date":"2010-03-21","total_photos":124550,"cameras":[{"name":"FHAZ","full_name":"Front Hazard Avoidance Camera"},{"name":"NAVCAM","full_name":"Navigation Camera"},{"name":"PANCAM","full_name":"Panoramic Camera"},{"name":"MINITES","full_name":"Miniature Thermal Emission Spectrometer (Mini-TES)"},{"name":"ENTRY","full_name":"Entry, Descent, and Landing Camera"},{"name":"RHAZ","full_name":"Rear Hazard Avoidance Camera"}]}},{"id":318448,"sol":1,"camera":{"id":29,"name":"NAVCAM","rover_id":7,"full_name":"Navigation Camera"},"img_src":"http://mars.nasa.gov/mer/gallery/all/2/n/001/2N126469072EDN0000P1503L0M1-BR.JPG","earth_date":"2004-01-05","rover":{"id":7,"name":"Spirit","landing_date":"2004-01-04","launch_date":"2003-06-10","status":"complete","max_sol":2208,"max_date":"2010-03-21","total_photos":124550,"cameras":[{"name":"FHAZ","full_name":"Front Hazard Avoidance Camera"},{"name":"NAVCAM","full_name":"Navigation Camera"},{"name":"PANCAM","full_name":"Panoramic Camera"},{"name":"MINITES","full_name":"Miniature Thermal Emission Spectrometer (Mini-TES)"},{"name":"ENTRY","full_name":"Entry, Descent, and Landing Camera"},{"name":"RHAZ","full_name":"Rear Hazard Avoidance Camera"}]}},{"id":318449,"sol":1,"camera":{"id":29,"name":"NAVCAM","rover_id":7,"full_name":"Navigation Camera"},"img_src":"http://mars.nasa.gov/mer/gallery/all/2/n/001/2N126469072EDN0000P1503R0M1-BR.JPG","earth_date":"2004-01-05","rover":{"id":7,"name":"Spirit","landing_date":"2004-01-04","launch_date":"2003-06-10","status":"complete","max_sol":2208,"max_date":"2010-03-21","total_photos":124550,"cameras":[{"name":"FHAZ","full_name":"Front Hazard Avoidance Camera"},{"name":"NAVCAM","full_name":"Navigation Camera"},{"name":"PANCAM","full_name":"Panoramic Camera"},{"name":"MINITES","full_name":"Miniature Thermal Emission Spectrometer (Mini-TES)"},{"name":"ENTRY","full_name":"Entry, Descent, and Landing Camera"},{"name":"RHAZ","full_name":"Rear Hazard Avoidance Camera"}]}},{"id":318450,"sol":1,"camera":{"id":29,"name":"NAVCAM","rover_id":7,"full_name":"Navigation Camera"},"img_src":"http://mars.nasa.gov/mer/gallery/all/2/n/001/2N126469104EDN0000P1503L0M1-BR.JPG","earth_date":"2004-01-05","rover":{"id":7,"name":"Spirit","landing_date":"2004-01-04","launch_date":"2003-06-10","status":"complete","max_sol":2208,"max_date":"2010-03-21","total_photos":124550,"cameras":[{"name":"FHAZ","full_name":"Front Hazard Avoidance Camera"},{"name":"NAVCAM","full_name":"Navigation Camera"},{"name":"PANCAM","full_name":"Panoramic Camera"},{"name":"MINITES","full_name":"Miniature Thermal Emission Spectrometer (Mini-TES)"},{"name":"ENTRY","full_name":"Entry, Descent, and Landing Camera"},{"name":"RHAZ","full_name":"Rear Hazard Avoidance Camera"}]}},{"id":318451,"sol":1,"camera":{"id":29,"name":"NAVCAM","rover_id":7,"full_name":"Navigation Camera"},"img_src":"http://mars.nasa.gov/mer/gallery/all/2/n/001/2N126469104EDN0000P1503R0M1-BR.JPG","earth_date":"2004-01-05","rover":{"id":7,"name":"Spirit","landing_date":"2004-01-04","launch_date":"2003-06-10","status":"complete","max_sol":2208,"max_date":"2010-03-21","total_photos":124550,"cameras":[{"name":"FHAZ","full_name":"Front Hazard Avoidance Camera"},{"name":"NAVCAM","full_name":"Navigation Camera"},{"name":"PANCAM","full_name":"Panoramic Camera"},{"name":"MINITES","full_name":"Miniature Thermal Emission Spectrometer (Mini-TES)"},{"name":"ENTRY","full_name":"Entry, Descent, and Landing Camera"},{"name":"RHAZ","full_name":"Rear Hazard Avoidance Camera"}]}},{"id":318452,"sol":1,"camera":{"id":29,"name":"NAVCAM","rover_id":7,"full_name":"Navigation Camera"},"img_src":"http://mars.nasa.gov/mer/gallery/all/2/n/001/2N126469170EDN0000P1503L0M1-BR.JPG","earth_date":"2004-01-05","rover":{"id":7,"name":"Spirit","landing_date":"2004-01-04","launch_date":"2003-06-10","status":"complete","max_sol":2208,"max_date":"2010-03-21","total_photos":124550,"cameras":[{"name":"FHAZ","full_name":"Front Hazard Avoidance Camera"},{"name":"NAVCAM","full_name":"Navigation Camera"},{"name":"PANCAM","full_name":"Panoramic Camera"},{"name":"MINITES","full_name":"Miniature Thermal Emission Spectrometer (Mini-TES)"},{"name":"ENTRY","full_name":"Entry, Descent, and Landing Camera"},{"name":"RHAZ","full_name":"Rear Hazard Avoidance Camera"}]}},{"id":318453,"sol":1,"camera":{"id":29,"name":"NAVCAM","rover_id":7,"full_name":"Navigation Camera"},"img_src":"http://mars.nasa.gov/mer/gallery/all/2/n/001/2N126469170EDN0000P1503R0M1-BR.JPG","earth_date":"2004-01-05","rover":{"id":7,"name":"Spirit","landing_date":"2004-01-04","launch_date":"2003-06-10","status":"complete","max_sol":2208,"max_date":"2010-03-21","total_photos":124550,"cameras":[{"name":"FHAZ","full_name":"Front Hazard Avoidance Camera"},{"name":"NAVCAM","full_name":"Navigation Camera"},{"name":"PANCAM","full_name":"Panoramic Camera"},{"name":"MINITES","full_name":"Miniature Thermal Emission Spectrometer (Mini-TES)"},{"name":"ENTRY","full_name":"Entry, Descent, and Landing Camera"},{"name":"RHAZ","full_name":"Rear Hazard Avoidance Camera"}]}},{"id":318454,"sol":1,"camera":{"id":29,"name":"NAVCAM","rover_id":7,"full_name":"Navigation Camera"},"img_src":"http://mars.nasa.gov/mer/gallery/all/2/n/001/2N126469222EDN0000P1503L0M1-BR.JPG","earth_date":"2004-01-05","rover":{"id":7,"name":"Spirit","landing_date":"2004-01-04","launch_date":"2003-06-10","status":"complete","max_sol":2208,"max_date":"2010-03-21","total_photos":124550,"cameras":[{"name":"FHAZ","full_name":"Front Hazard Avoidance Camera"},{"name":"NAVCAM","full_name":"Navigation Camera"},{"name":"PANCAM","full_name":"Panoramic Camera"},{"name":"MINITES","full_name":"Miniature Thermal Emission Spectrometer (Mini-TES)"},{"name":"ENTRY","full_name":"Entry, Descent, and Landing Camera"},{"name":"RHAZ","full_name":"Rear Hazard Avoidance Camera"}]}},{"id":318455,"sol":1,"camera":{"id":29,"name":"NAVCAM","rover_id":7,"full_name":"Navigation Camera"},"img_src":"http://mars.nasa.gov/mer/gallery/all/2/n/001/2N126469222EDN0000P1503R0M1-BR.JPG","earth_date":"2004-01-05","rover":{"id":7,"name":"Spirit","landing_date":"2004-01-04","launch_date":"2003-06-10","status":"complete","max_sol":2208,"max_date":"2010-03-21","total_photos":124550,"cameras":[{"name":"FHAZ","full_name":"Front Hazard Avoidance Camera"},{"name":"NAVCAM","full_name":"Navigation Camera"},{"name":"PANCAM","full_name":"Panoramic Camera"},{"name":"MINITES","full_name":"Miniature Thermal Emission Spectrometer (Mini-TES)"},{"name":"ENTRY","full_name":"Entry, Descent, and Landing Camera"},{"name":"RHAZ","full_name":"Rear Hazard Avoidance Camera"}]}},{"id":318456,"sol":1,"camera":{"id":29,"name":"NAVCAM","rover_id":7,"full_name":"Navigation Camera"},"img_src":"http://mars.nasa.gov/mer/gallery/all/2/n/001/2N126469273EDN0000P1503L0M1-BR.JPG","earth_date":"2004-01-05","rover":{"id":7,"name":"Spirit","landing_date":"2004-01-04","launch_date":"2003-06-10","status":"complete","max_sol":2208,"max_date":"2010-03-21","total_photos":124550,"cameras":[{"name":"FHAZ","full_name":"Front Hazard Avoidance Camera"},{"name":"NAVCAM","full_name":"Navigation Camera"},{"name":"PANCAM","full_name":"Panoramic Camera"},{"name":"MINITES","full_name":"Miniature Thermal Emission Spectrometer (Mini-TES)"},{"name":"ENTRY","full_name":"Entry, Descent, and Landing Camera"},{"name":"RHAZ","full_name":"Rear Hazard Avoidance Camera"}]}},{"id":318457,"sol":1,"camera":{"id":29,"name":"NAVCAM","rover_id":7,"full_name":"Navigation Camera"},"img_src":"http://mars.nasa.gov/mer/gallery/all/2/n/001/2N126469273EDN0000P1503R0M1-BR.JPG","earth_date":"2004-01-05","rover":{"id":7,"name":"Spirit","landing_date":"2004-01-04","launch_date":"2003-06-10","status":"complete","max_sol":2208,"max_date":"2010-03-21","total_photos":124550,"cameras":[{"name":"FHAZ","full_name":"Front Hazard Avoidance Camera"},{"name":"NAVCAM","full_name":"Navigation Camera"},{"name":"PANCAM","full_name":"Panoramic Camera"},{"name":"MINITES","full_name":"Miniature Thermal Emission Spectrometer (Mini-TES)"},{"name":"ENTRY","full_name":"Entry, Descent, and Landing Camera"},{"name":"RHAZ","full_name":"Rear Hazard Avoidance Camera"}]}},{"id":318458,"sol":1,"camera":{"id":29,"name":"NAVCAM","rover_id":7,"full_name":"Navigation Camera"},"img_src":"http://mars.nasa.gov/mer/gallery/all/2/n/001/2N126469324EDN0000P1503L0M1-BR.JPG","earth_date":"2004-01-05","rover":{"id":7,"name":"Spirit","landing_date":"2004-01-04","launch_date":"2003-06-10","status":"complete","max_sol":2208,"max_date":"2010-03-21","total_photos":124550,"cameras":[{"name":"FHAZ","full_name":"Front Hazard Avoidance Camera"},{"name":"NAVCAM","full_name":"Navigation Camera"},{"name":"PANCAM","full_name":"Panoramic Camera"},{"name":"MINITES","full_name":"Miniature Thermal Emission Spectrometer (Mini-TES)"},{"name":"ENTRY","full_name":"Entry, Descent, and Landing Camera"},{"name":"RHAZ","full_name":"Rear Hazard Avoidance Camera"}]}},{"id":318459,"sol":1,"camera":{"id":29,"name":"NAVCAM","rover_id":7,"full_name":"Navigation Camera"},"img_src":"http://mars.nasa.gov/mer/gallery/all/2/n/001/2N126469324EDN0000P1503R0M1-BR.JPG","earth_date":"2004-01-05","rover":{"id":7,"name":"Spirit","landing_date":"2004-01-04","launch_date":"2003-06-10","status":"complete","max_sol":2208,"max_date":"2010-03-21","total_photos":124550,"cameras":[{"name":"FHAZ","full_name":"Front Hazard Avoidance Camera"},{"name":"NAVCAM","full_name":"Navigation Camera"},{"name":"PANCAM","full_name":"Panoramic Camera"},{"name":"MINITES","full_name":"Miniature Thermal Emission Spectrometer (Mini-TES)"},{"name":"ENTRY","full_name":"Entry, Descent, and Landing Camera"},{"name":"RHAZ","full_name":"Rear Hazard Avoidance Camera"}]}},{"id":318460,"sol":1,"camera":{"id":29,"name":"NAVCAM","rover_id":7,"full_name":"Navigation Camera"},"img_src":"http://mars.nasa.gov/mer/gallery/all/2/n/001/2N126469375EDN0000P1503L0M1-BR.JPG","earth_date":"2004-01-05","rover":{"id":7,"name":"Spirit","landing_date":"2004-01-04","launch_date":"2003-06-10","status":"complete","max_sol":2208,"max_date":"2010-03-21","total_photos":124550,"cameras":[{"name":"FHAZ","full_name":"Front Hazard Avoidance Camera"},{"name":"NAVCAM","full_name":"Navigation Camera"},{"name":"PANCAM","full_name":"Panoramic Camera"},{"name":"MINITES","full_name":"Miniature Thermal Emission Spectrometer (Mini-TES)"},{"name":"ENTRY","full_name":"Entry, Descent, and Landing Camera"},{"name":"RHAZ","full_name":"Rear Hazard Avoidance Camera"}]}},{"id":318461,"sol":1,"camera":{"id":29,"name":"NAVCAM","rover_id":7,"full_name":"Navigation Camera"},"img_src":"http://mars.nasa.gov/mer/gallery/all/2/n/001/2N126469375EDN0000P1503R0M1-BR.JPG","earth_date":"2004-01-05","rover":{"id":7,"name":"Spirit","landing_date":"2004-01-04","launch_date":"2003-06-10","status":"complete","max_sol":2208,"max_date":"2010-03-21","total_photos":124550,"cameras":[{"name":"FHAZ","full_name":"Front Hazard Avoidance Camera"},{"name":"NAVCAM","full_name":"Navigation Camera"},{"name":"PANCAM","full_name":"Panoramic Camera"},{"name":"MINITES","full_name":"Miniature Thermal Emission Spectrometer (Mini-TES)"},{"name":"ENTRY","full_name":"Entry, Descent, and Landing Camera"},{"name":"RHAZ","full_name":"Rear Hazard Avoidance Camera"}]}}]}; let i, j; for(i in slideshowObject.photos) { if(!(slideshowObject.photos[i].hasOwnProperty(\'alt_string\'))) { slideshowObject.photos[i].alt_string = "Photo of Mars taken by the " + slideshowObject.photos[i].rover.name + " Rover\'s " + slideshowObject.photos[i].camera.full_name + " on " + slideshowObject.photos[i].rover.name + " Martian sol " + slideshowObject.photos[i].sol + " (Earth date " + slideshowObject.photos[i].earth_date + ")."; }} let len = slideshowObject.photos.length; for(i = 0, j = 1; i < len; i++, j++) { if(!(slideshowObject.photos[i].hasOwnProperty(\'slide_string\'))) { slideshowObject.photos[i].slide_string = "Slide " + j + "/" + len + ": Martian Photo taken by the <em>" + slideshowObject.photos[i].rover.name + "</em> Rover\'s <em>" + slideshowObject.photos[i].camera.full_name + "</em> on <em>" + slideshowObject.photos[i].rover.name + "</em> Martian Sol " + slideshowObject.photos[i].sol + " (Earth date " + slideshowObject.photos[i].earth_date + ")."; } slideshowObject.photos[i].img_src = slideshowObject.photos[i].img_src.replace(/http/g, "https"); }';
    document.body.appendChild(script4);

    w3.displayObject("id01", slideshowObject); //utilise the 'displayObject(elementId, object)' function of the 'w3.js' library to display the data contained in 'slideshowObject' in the HTML page [thus filling in the following HTML placeholders: {{slide_string}}, {{img_src}}, and {{alt_string}}]
    div3.querySelector(".w3-center").innerHTML += "<br/>Loading <em>Spirit</em> Martian Sol " + slideshowObject.photos[0].sol + ".<br/>This device MUST be connected to the internet in order to obtain the images for this <span class='font-effect-anaglyph'>martian sol</span>.  Once the first image is displayed, Wi-Fi/mobile data can be turned off.<br/>Internet Connection Status: "; //add information - to the first element in the document with a className of 'w3-center' - relating to the necessity of an internet connection for fetching the sol-pertinent martian images

    let marsSlides; //declare a 'marsSlides' variable that will be initialized to a NodeList Object that holds references to all 'div3' elements with a className of 'mars' once the 'pageshow' event fires
    let marsURLs; //declare a 'marsURLs2' variable that will be initialized to a NodeList Object that holds references to all 'div3' elements with a className of 'martian_url' once the 'pageshow' event fires
    let marsDescriptions; //declare a 'marsDescriptions' variable that will be initialized to a NodeList Object that holds references to all 'div3' elements with a className of 'photo_description' once the 'pageshow' event fires
    let hrefValues = []; //create a new array entitled 'hrefValues'
    let currentIndex = 0; //let the variable 'currentIndex' refer to the index of the currently-displayed 'marsSlides', 'marsURLs', and 'marsDescriptions' NodeList Objects
    let numClicks = []; //declare a [numClicks] array that will store the number of times that the URL pointed to by {{currentIndex}} has been clicked
    let slideNumber = 1; //let the variable 'slideNumber' refer to the non-zero-based-index of the currently-displayed 'marsSlides', 'marsURLs', and 'marsDescriptions' NodeList Objects
    let currentInterval = 0; //let the variable 'currentInterval' refer to the current timing interval in the martian slideshow
    let myTimer; //declare - but don't initialize - a timing variable that will be used to call - and control the behaviour of - the 'setupSlideshow(interval, index, alreadyRunning)' and 'displaySlide(currentIndex, currentInterval)' functions after a specified interval
    let alreadyRunning = false; //let the 'alreadyRunning' variable refer to whether there is an extant, initialized timing variable at present (currently FALSE)
    let formerSlide; //declare - but don't initialize - a 'formerSlide' variable that will be used to refer to the slide that the User was viewing when s/he clicked the link to view the original NASA image
    let placeholderText; //declare - but don't initialize - a 'placeholderText' variable that will be used to set the text <input> element's placeholder text from within the 'responsiveImage()' function
    let loading = div3.querySelector("#loading"); //let the 'loading' variable refer to the first DOM element with an id of 'loading'
    let loadingInfo = loading.firstElementChild.innerHTML; //let the 'loadingInfo' variable refer to the innerHTML of the 'loading' element's first element child
    let visitedLinkStringKey = "visitedLinkString" + slideshowObject.photos[0].sol; //set the unique 'visitedLinkStringKey' for use in localStorage to the value of the current sol number appended to the String 'visitedLinkString'
    let visitedLinkString = localStorage.getItem(visitedLinkStringKey)||""; //declare and initialize the 'visitedLinkString' to equal either the 'visitedLinkStringKey' in localStorage for this particular martian sol OR an empty string
    let visitedLinkArray; //declare - but don't initialize - a 'visitedLinkArray' variable that will be initialized in the 'responsiveImage()' function to store the elements resulting from the performance of a 'split(",")' operation on the 'visitedLinkString' variable
    let currentURL; //declare - but don't initialize - a 'currentURL' variable that will be initialized inside the 'createLink()' function to refer to the 'marsURLs[currentIndex]' element
    let hrefValue; //declare - but don't initialize - a 'hrefValue' variable that will be initialized inside the 'createLink()' function to refer to the 'hrefValues[currentIndex]' element

    let online = navigator.onLine; //let the 'online' variable refer to the browser's online status (TRUE or FALSE)


if(loading.style.display === "block") { //if the 'loading' element's display is set to 'block' (a condition that will evaluate to TRUE while the page is loading)
    testConnection(); //...invoke the 'testConnection()' function
}

function testConnection() { //a function that is invoked while the page is loading, and runs once per second until the 'loading' element's display is no longer set to 'block'
    online = navigator.onLine; //let the 'online' variable refer to the browser's updated online status (TRUE or FALSE)
    if(online) { //if the browser is online
        loading.firstElementChild.innerHTML = loadingInfo + " CONNECTED"; //display the fact that the User's internet connection status is "CONNECTED"
    }
    else {
        loading.firstElementChild.innerHTML = loadingInfo + " NOT CONNECTED"; //display the fact that the User's internet connection status is "NOT CONNECTED"
    }
    if(loading.style.display === "block") { //if the 'loading' element's display is set to 'block'
        setTimeout(function() { testConnection(); }, 1000); //re-run the 'testConnection()' function after a delay of one second
    }
}

function startSlideshow() { //function invoked when the 'onload' event is fired
    let martianSlideshow = w3.slideshow("#div3 .mars", 0); //let the 'martianSlideshow' variable refer to the invocation of the 'w3.js' 'slideshow(selector, interval)' function, effectively displaying the first 'mars' image taken by the Rover on this sol
    let martianURLs = w3.slideshow("#div3 .martian_url" , 0); //let the 'martianURLs' variable refer to the invocation of the 'w3.js' 'slideshow(selector, interval)' function, effectively displaying the 'martian_url' of the first 'mars' image taken by the Rover on this sol
    let martianDescriptions = w3.slideshow("#div3 .photo_description", 0); //let the 'martianDescriptions' variable refer to the invocation of the 'w3.js' 'slideshow(selector, interval)' function, effectively displaying the 'photo_description' of the first 'mars' image taken by the Rover on this sol
    loading.style.display = "none"; //hide the 'loading' element, since the images are now ready for perusal
    document.getElementById("id01").style.display = "block"; //display the 'id01' element, since the images are now ready for perusal
}

function responsiveImage() { //triggered when the 'pageshow' event fires
    availableHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight; //define the 'availableHeight' variable as equal to the viewport's height
    availableWidth = screen.availWidth; //define the 'availableWidth' variable as equal to the amount of horizontal space (in CSS pixels) available to the window
    responsiveDiv.height = (availableHeight/100)*75; //set the height property of the 'responsiveDiv' element to 75% of the 'availableHeight'
    responsiveDiv.style.width = "100%"; //set the width property of the 'responsiveDiv' element to 100% of the screen width
    marsSlides = div3.getElementsByClassName("mars"); //let the 'marsSlides' variable refer to a NodeList Object that holds references to all 'div3' elements with a className of 'mars'
    marsURLs = div3.getElementsByClassName("martian_url"); //let the 'marsURLs' variable refer to a NodeList Object that holds references to all 'div3' elements with a className of 'martian_url'
    marsDescriptions = div3.getElementsByClassName("photo_description"); //let the 'marsDescriptions' variable refer to a NodeList Object that holds references to all 'div3' elements with a className of 'photo_description'
    for (let i = 0; i < marsSlides.length; i++) { //for the length of the 'marsSlides' NodeList Object
        marsSlides[i].height = (availableHeight/100)*75; //set the height property of each martian image to 75% of the 'availableHeight'
        marsSlides[i].style.width = "100%"; //set the width property of each martian image to 100% of the screen width
        hrefValues.push(marsURLs[i].innerHTML); //'push' an element into the 'hrefValues' array, representing the innerHTML of the {{i}}th 'marsURLs' element
    }
    percentageHeight = 75; //update the value of the 'percentageHeight' variable to 75
    percentageWidth = 100; //update the value of the 'percentageWidth' variable to 100
    heightSlider.value = percentageHeight; //set the value of the 'heightSlider' to the new {{percentageHeight}} value - a.)
    heightSlider.className = "_75PerCent"; //set the 'class' of the 'heightSlider' to the new {{percentageHeight}}-reflecting value - b.)
    widthSlider.value = percentageWidth; //set the value of the 'widthSlider' to the new {{percentageWidth}} value - c.)
    widthSlider.className = "_100PerCent"; //set the 'class' of the 'widthSlider' to the new {{percentageWidth}}-reflecting value - d.); a.) - d.) ensure that the slider thumb displays the correct percentage and is correctly-positioned on the 'heightSlider' and 'widthSlider' RANGE <input> elements
    for(let index = 0; index < marsSlides.length; index++) { //for the length of the [marsSlides] array-like NodeList Object...
        numClicks.push(0); //add the number zero to the [numClicks] array
    }
    if(localStorage.getItem("currentIndex")) { //if there is a 'currentIndex' variable in localStorage
        formerSlide = Number(localStorage.getItem("currentIndex")); //let 'formerSlide' refer to the numerical equivalent of currentIndex
        for(let index = 0; index < marsSlides.length; index++) { //for the length of the [marsSlides] array...
            marsSlides[index].style.display = "none"; //...hide the martian photos
            marsURLs[index].style.display = "none"; //...hide the martian URLs
            marsDescriptions[index].style.display = "none"; //...hide the martian descriptions
        }
        marsSlides[formerSlide].style.display = "block"; //display the {{formerSlide}}th element of [marsSlides]
        marsURLs[formerSlide].style.display = "block"; //display the {{formerSlide}}th element of [marsURLs2]
        marsDescriptions[formerSlide].style.display = "block"; //display the {{formerSlide}}th element of [marsDescriptions]
        currentIndex = formerSlide; //set the value of {{currentIndex}} equal to {{formerSlide}}, so that subsequent 'manual next'/'manual previous' operations result in the correct slide being displayed
        localStorage.removeItem("currentIndex"); //remove the 'currentIndex' variable from localStorage, since the last viewed image is now being displayed and {{currentIndex}} has been updated appropriately
    }
    if(visitedLinkString) { //if the 'visitedLinkString' equates to a truthy value
        visitedLinkArray = visitedLinkString.split(","); //split the 'visitedLinkString' on the "," character, and store the elements thus furnished in the 'visitedLinkArray'
        for(let i = 0; i < visitedLinkArray.length; i++) {
            visitedLinkArray[i] = Number(visitedLinkArray[i]); //convert all the values of the 'visitedLinkArray' from a String to a Number
        }
        for(outerI = 0, innerI = 0; outerI < marsURLs.length; outerI++) { //for the length of the 'marsURLs' array...
            if(outerI === visitedLinkArray[innerI]) { //...if the 'outerI' variable is equal to the Number stored in visitedLinkArray[innerI]...
                marsURLs[outerI].style.backgroundColor = "#2e4a36"; //...set the background colour of the relevant 'marsURLs' element to dark green, so that the User knows that s/he has visited this particular link before
                innerI++; //increment the 'innerI' counter variable, so that 'outerI' is compared against the next value in the 'visitedLinkArray'
                if(innerI === visitedLinkArray.length) { //if the 'innerI' counter variable is equal to the length of the 'visitedLinkArray'...
                    break; //...break out of the loop
                }
            }
        }
    }
    imageWidth = marsSlides[currentIndex].width; //set the 'imageWidth' variable equal to the width property of the {{currentIndex}}th image element
    imageHeight = marsSlides[currentIndex].height; //set the 'imageHeight' variable equal to the 'height' property of the [currentIndex]th image element
    div3.querySelector("#martianHeading").innerHTML = "<em>" + slideshowObject.photos[0].rover.name + "</em> <strong>Martian Sol " + slideshowObject.photos[0].sol + "</strong> <em>[Earth Date " + slideshowObject.photos[0].earth_date + "]</em>"; 		//update the <h1> element with the id attribute of 'martianHeading' to display an appropriately-informative heading to the User, detailing the Rover name, martian sol, and earth date
    placeholderText = "1 - " + marsSlides.length + "..."; //let the 'placeholderText' variable equal "1 - {{marsSlides.length}}..."
    div3.querySelector("#slideSelect").nextElementSibling.placeholder = placeholderText; //set the text <input> element's placeholder text to 'placeholderText'
}

function fullscreenImage() { //function triggered when the User clicks the 'Fullscreen Image' button
    availableHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight; //define the 'availableHeight' variable as equal to the viewport's height
    availableWidth = screen.availWidth; //ensure the 'availableWidth' variable is correctly defined
    responsiveDiv.height = availableHeight; //set the height property of 'responsiveDiv' to {{availableHeight}}px
    for (i = 0; i < marsSlides.length; i++) { //for the length of the 'marsSlides' NodeList Object
        if(availableHeight > availableWidth) { //if 'availableHeight' is greater than 'availableWidth'
            responsiveDiv.style.width = "100%"; //set the width property of 'responsiveDiv' to 100%
            marsSlides[i].height = availableHeight; //set the height of each martian image to {{availableHeight}}px
            marsSlides[i].style.width = "100%"; //set the width of each martian image to 100%
            percentageHeight = 100; //update the value of the 'percentageHeight' variable to 100
            percentageWidth = 100; //update the value of the 'percentageWidth' variable to 100
            heightSlider.value = percentageHeight; //set the value of the 'heightSlider' to the new 'percentageHeight' value
            heightSlider.className = "_100PerCent"; //set the 'class' attribute of the 'heightSlider' element so that the correct percentage is displayed on the slider thumb
            widthSlider.value = percentageWidth; //set the value of the 'widthSlider' to the new 'percentageWidth' value
            widthSlider.className = "_100PerCent"; //set the 'class' attribute of the 'widthSlider' element so that the correct percentage is displayed on the slider thumb
        }
        else if(availableHeight <= availableWidth) { //otherwise, if 'availableHeight' is less than - or equal to - 'availableWidth'
            responsiveDiv.style.width = availableHeight + "px"; //set the width of 'responsiveDiv' to {{availableHeight}}px
            responsiveDiv.style.marginLeft = "auto"; //set the left margin...
            responsiveDiv.style.marginRight = "auto"; //..and the right margin of the 'responsiveDiv' element so that it is always centred
            marsSlides[i].height = availableHeight; //set the height of each martian image to {{availableHeight}}px
            marsSlides[i].style.width = availableHeight + "px"; //set the width of each martian image to {{availableHeight}}px
            percentageHeight = 100; //update the value of the 'percentageHeight' variable to 100
            percentageWidth = Math.round((availableHeight/availableWidth) * 100); //update the value of the 'percentageWidth' variable to the rounded integer representation of (availableHeight/availableWidth) * 100
            heightSlider.value = percentageHeight; //set the value of the 'heightSlider' to the new 'percentageHeight' value
            heightSlider.className = "_100PerCent"; //set the 'class' attribute of the 'heightSlider' element so that the correct percentage is displayed on the slider thumb
            widthSlider.value = percentageWidth; //set the value of the 'widthSlider' to the new 'percentageWidth' value
            widthSlider.className = "_" + percentageWidth + "PerCent"; //set the 'class' attribute of the 'widthSlider' element so that the correct percentage is displayed on the slider thumb
        }
    }
    div3.querySelector("#imageCell").scrollIntoView(false); //scroll the 'imageCell' <td> element into view, aligning the bottom of the element with the bottom of the viewport
}

function departFullscreen() { //triggered when the martian image is clicked in order to exit (depart) the bespoke fullscreen mode
    availableHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight; //ensure the 'availableHeight' variable is correctly defined
    availableWidth = screen.availWidth; //define the 'availableWidth' variable as equal to the amount of horizontal space (in CSS pixels) available to the window
    responsiveDiv.height = (availableHeight/100)*75; //set the height property of the 'responsiveDiv' element to 75% of the 'availableHeight'
    responsiveDiv.style.width = "100%"; //set the width property of the 'responsiveDiv' element to 100% of the screen width
    for (i = 0; i < marsSlides.length; i++) { //for the length of the 'marsSlides' NodeList Object
        marsSlides[i].height = (availableHeight/100)*75; //set the height property of each martian image to 75% of the 'availableHeight'
        marsSlides[i].style.width = "100%"; //set the width property of each martian image to 100% of the screen width
    }
    imageWidth = marsSlides[currentIndex].width; //set the 'imageWidth' variable equal to the width property of the {{currentIndex}}th image element
    imageHeight = marsSlides[currentIndex].height; //set the 'imageHeight' variable equal to the 'height' property of the [currentIndex]th image element
    percentageWidth = 100; //set the 'percentageWidth' variable equal to 100
    percentageHeight = 75; //set the 'percentageHeight' variable equal to the rounded result of (imageHeight/availableHeight)*100 [it will be 75]
    widthSlider.value = percentageWidth; //set the 'widthSlider' value property equal to 'percentageWidth'
    widthSlider.className = "_100PerCent"; //set the 'widthSlider' class attribute equal to "_{{percentageWidth}}PerCent"
    heightSlider.value = percentageHeight; //set the 'heightSlider' value attribute equal to 'percentageHeight'
    heightSlider.className = "_75PerCent"; //set the 'heightSlider' class attribute equal to "_{{percentageHeight}}PerCent"
    div3.querySelector("#imageCell").scrollIntoView(false); //scroll the 'imageCell' <td> element into view, aligning the bottom of the element with the bottom of the viewport
}

function landscapeOrPortrait() { //called when the 'resize' event is fired (for example, when the phone is changed from portrait to landscape orientation || the 'Fullscreen Image' button is clicked)
    availableHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight; //define the 'availableHeight' variable as equal to the viewport's height
    responsiveDiv.height = (availableHeight/100) * percentageHeight; //set the pixel height property of the 'responsiveDiv' image-encapsulating element to (availableHeight/100) * percentageHeight
    responsiveDiv.style.width = percentageWidth + "%"; //set the width property of the 'responsiveDiv' image-encapsulating element to 100%
    for (i = 0; i < marsSlides.length; i++) { //for the length of the 'marsSlides' NodeList object
        marsSlides[i].height = (availableHeight/100) * percentageHeight; //set the pixel height property of every element of the 'marsSlides' NodeList Object to (availableHeight/100) * percentageHeight
        marsSlides[i].style.width = percentageWidth + "%"; //set the width property of every element of the 'marsSlides' NodeList Object to {{percentageWidth}}%
    }
    document.querySelector("#div3 .marsTable").style.width = "100%"; //set the width property of the 'div3' 'marsTable' to 100%
}

function manualNext() { //triggered when the User clicks the 'NEXT' button
    marsURLs[currentIndex].innerHTML = hrefValues[currentIndex]; //set the innerHTML of the currently-displayed, martian-url-displaying <div> element to the corresponding url stored in 'hrefValues' [this removes the "LINK: " text - but retains the dark-ish green background colour - after the User has interacted with the <div> element]
    if(currentIndex < marsSlides.length-1) { //if 'currentIndex' is less than (the length of the 'marsSlides' NodeList Object minus one)
        currentIndex += 1; //increment 'currentIndex' by one
        slideNumber = currentIndex + 1; //set 'slideNumber' to 'currentIndex' plus one
    }
    else { //otherwise,
        currentIndex = 0; //set 'currentIndex' to 0
        slideNumber = currentIndex + 1; //set 'slideNumber' to 'currentIndex' plus one
    }
    div3.querySelector("#slideSelect").nextElementSibling.value = ""; //clear the text <input> field
    slideSelect(slideNumber); //invoke the 'slideSelect(slideNumber)' function
}

function manualPrevious() { //triggered when the User clicks the 'PREVIOUS' button
    marsURLs[currentIndex].innerHTML = hrefValues[currentIndex]; //set the innerHTML of the currently-displayed, martian-url-displaying <div> element to the corresponding url stored in 'hrefValues' [this removes the "LINK: " text - but retains the dark-ish green background colour - after the User has interacted with the <div> element]
    if(currentIndex > 0) { //if 'currentIndex' is greater than zero
        currentIndex -= 1; //decrement 'currentIndex' by one
        slideNumber = currentIndex + 1; //set 'slideNumber' to ('currentIndex' plus one)
    }
    else { //otherwise,
        currentIndex = marsSlides.length-1; //set 'currentIndex' to (the length of the 'marsSlides' NodeList Object minus one)
        slideNumber = currentIndex + 1; //set 'slideNumber' to ('currentIndex' plus one)
    }
    div3.querySelector("#slideSelect").nextElementSibling.value = ""; //clear the text <input> element
    slideSelect(slideNumber); //invoke the 'slideSelect(slideNumber)' function
}

function slideSelect(slideNumber) { //invoked from within the 'manualNext()' and 'manualPrevious()' functions && in response to the User entering a number in the text <input> element
    let len = slideshowObject.photos.length; //let the variable 'len' refer to the length of the 'photos' array in the 'slideshowObject'
    if (Number(slideNumber) > 0 && Number(slideNumber) <= len) { //if the numerical representation of 'slideNumber' is greater than 0 and less than 'len' (a necessary check because the User could enter inappropriate data into the <input> element)
        if(alreadyRunning) { //if there is already a martian slideshow running
            clearTimeout(myTimer); //clear the timing variable that controls the martian slideshow
            alreadyRunning = false; //set the 'alreadyRunning' variable to FALSE
            currentInterval = 0; //set the 'currentInterval' to 0
            div3.querySelector("#timingInfo").innerHTML = "Timing Interval (Secs): 0"; //update the 'timingInfo' element, clarifying that the timing interval has been reset to '0'
            div3.querySelector("#interval-select").value = "0"; //set the value of the <select> element - that displays the timing interval - to 0
        }
        for(i = 0; i < marsSlides.length; i++) { //for the length of the 'marsSlides' NodeList Object
            marsSlides[i].style.display = "none"; //set the display attribute of all the elements of the 'marsSlides' NodeList Object to 'none'
            marsURLs[i].style.display = "none"; //set the display attribute of all the elements of the 'marsURLs' NodeList Object to 'none'
            marsDescriptions[i].style.display = "none"; //set the display attribute of all the elements of the 'marsDescriptions' NodeList Object to 'none'
        }
        marsSlides[slideNumber - 1].style.display = "block"; //set the display attribute of the [slideNumber - 1]th element of the 'marsSlides' NodeList Object to 'block'
        marsURLs[slideNumber - 1].style.display = "block"; //set the display attribute of the [slideNumber - 1]th element of the 'marsURLs2' NodeList Object to 'block'
        marsDescriptions[slideNumber - 1].style.display = "block"; //set the display attribute of the [slideNumber - 1]th element of the 'marsDescriptions' NodeList Object to 'block'
        currentIndex = slideNumber - 1; //set 'currentIndex' equal to (slideNumber - 1)
    }
}

function setupSlideshow(interval, index, alreadyRunning) { //function triggered when the User <select>s a slideshow timing interval, in response to the "change" event
    div3.querySelector("#slideSelect").nextElementSibling.value = ""; //clear the text <input> element
    if((alreadyRunning) && (currentInterval !== Number(interval))) { //if there is a slideshow 'alreadyRunning' AND the 'currentInterval' is not equal to the numerical representation of 'interval' passed into the function
        clearTimeout(myTimer); //stop the extant slideshow
    }
    currentInterval = Number(interval); //set 'currentInterval' to the numerical representation of 'interval' passed into the function
    currentIndex = index; //set 'currentIndex' to the 'index' value passed into this function
    div3.querySelector("#timingInfo").innerHTML = "Timing Interval (Secs): " + currentInterval/1000; //update the 'timingInfo' element for the User's benefit
    displaySlide(currentIndex, currentInterval); //invoke the 'displaySlide(currentIndex, currentInterval)' function
    if(currentInterval === 0) { //if 'currentInterval' is equal to 0
        return; //exit the function; this 'if' statement only runs if the User changes 'currentInterval' back to zero
    }
}

function displaySlide(currentIndex, currentInterval) { //function called from within 'setupSlideshow(interval, index, alreadyRunning)'
    for(i = 0; i < marsSlides.length; i++) { //for the length of the 'marsSlides' NodeList Object
        marsSlides[i].style.display = "none"; //hide all the martian images
        marsURLs[i].style.display = "none"; //hide all the martian URLs
        marsDescriptions[i].style.display = "none"; //hide all the martian descriptions
    }
    if(currentIndex === marsSlides.length) { //if 'currentIndex' is equal to the length of the 'marsSlides' NodeList Object
        currentIndex = 0; //set 'currentIndex' to 0
    }
    marsSlides[currentIndex].style.display = "block"; //display the {{currentIndex}}th martian image
    marsURLs[currentIndex].style.display = "block"; //display the {{currentIndex}}th martian URL
    marsDescriptions[currentIndex].style.display = "block"; //display the {{currentIndex}}th martian description
    if(currentInterval === 0) { //if 'currentInterval' was passed in as - or has subsequently been changed to - 0
        clearTimeout(myTimer); //stop the slideshow
        return; //return to the 'setupSlideshow(interval, index, alreadyRunning)' function, and subsequently exit the slideshow loop
    }
    currentIndex += 1; //increment the 'currentIndex' by one
    alreadyRunning = true; //set 'alreadyRunning' to TRUE
    myTimer = setTimeout(function(){ setupSlideshow(currentInterval, currentIndex, alreadyRunning);}, currentInterval); //after a delay of 'currentInterval' milliseconds, call the 'setupSlideshow(currentInterval, currentIndex, alreadyRunning)' function to continue the slideshow
}

function solSelectScreen() { //function triggered when the User clicks the '* Return to Sol Selection *' <button>
    if(localStorage.getItem("currentIndex")) { //if there is a 'currentIndex' variable in localStorage
        localStorage.removeItem("currentIndex"); //remove the 'currentIndex' variable from localStorage
    }
    window.location.href = "../solSelect/spirit_accordion.html"; //navigate to the 'spirit_accordion.html' sol selection screen
}

/* References to the 'previous' and 'next' <button>s: */

let previousBtn = div3.querySelector(".previousBtn"); //let the variable 'previousBtn' refer to the first 'div3' element in the document with a className of 'previousBtn'
let nextBtn = div3.querySelector(".nextBtn"); //let the variable 'nextBtn' refer to the first 'div3' element in the document with a className of 'nextBtn'

/* References to the various 'range' <input> elements: */

let widthSlider = div3.querySelector("#widthRange"); //let the variable 'widthSlider' refer to the range <input> element with an id attribute of "widthRange"
let heightSlider = div3.querySelector("#heightRange"); //let the variable 'heightSlider' refer to the range <input> element with an id attribute of "heightRange"
let blurSlider = div3.querySelector("#blurRange"); //let the variable 'blurSlider' refer to the range <input> element with an id attribute of "blurRange"
let brightnessSlider = div3.querySelector("#brightnessRange"); //let the variable 'brightnessSlider' refer to the range <input> element with an id attribute of "brightnessRange"
let contrastSlider = div3.querySelector("#contrastRange"); //let the variable 'contrastSlider' refer to the range <input> element with an id attribute of "contrastRange"
let invertSlider = div3.querySelector("#invertRange"); //let the variable 'invertSlider' refer to the range <input> element with an id attribute of "invertRange"
let opacitySlider = div3.querySelector("#opacityRange"); //let the variable 'opacitySlider' refer to the range <input> element with an id attribute of "opacityRange"
let sepiaSlider = div3.querySelector("#sepiaRange"); //let the variable 'sepiaSlider' refer to the range <input> element with an id attribute of "sepiaRange"

/* References to the various <div> elements that are used to edit the images: */

let responsiveDiv = div3.querySelector("#responsiveDiv"); //let the variable 'responsiveDiv' refer to the <div> element with an id attribute of 'responsiveDiv'
let editingDiv = div3.querySelector("#editingDiv"); //let the variable 'editingDiv' refer to the <div> element with an id attribute of 'editingDiv'
let audioControls = div3.querySelector(".audioControls"); //let the variable 'audioControls' refer to the first <div> element with a className of 'audioControls'
let widthDiv = div3.querySelector("#widthDiv"); //let the variable 'widthDiv' refer to the <div> element with an id attribute of 'widthDiv'
let heightDiv = div3.querySelector("#heightDiv"); //let the variable 'heightDiv' refer to the <div> element with an id attribute of 'heightDiv'
let blurDiv = div3.querySelector("#blurDiv"); //let the variable 'blurDiv' refer to the <div> element with an id attribute of 'blurDiv'
let brightnessDiv = div3.querySelector("#brightnessDiv"); //let the variable 'brightnessDiv' refer to the <div> element with an id attribute of 'brightnessDiv'
let contrastDiv = div3.querySelector("#contrastDiv"); //let the variable 'contrastDiv' refer to the <div> element with an id attribute of 'contrastDiv'
let invertDiv = div3.querySelector("#invertDiv"); //let the variable 'invertDiv' refer to the <div> element with an id attribute of 'invertDiv'
let opacityDiv = div3.querySelector("#opacityDiv"); //let the variable 'opacityDiv' refer to the <div> element with an id attribute of 'opacityDiv'
let sepiaDiv = div3.querySelector("#sepiaDiv"); //let the variable 'sepiaDiv' refer to the <div> element with an id attribute of 'sepiaDiv'

/* Variables that will be used for image editing purposes: */

let availableWidth, availableHeight, imageWidth, imageHeight; //declare four variables that are initialized when the 'pageshow' event fires and will be used whenever the range <input> values are altered to effect a change in the dimensions of the various martian images
let percentageWidth = 100; //set the 'percentageWidth' variable equal to 100
let percentageHeight = 75; //set the 'percentageHeight' variable equal to the rounded result of (imageHeight/availableHeight)*100 [it will be 75]
let blurValue = 0; //let the variable 'blurValue' initially equal 0
let brightnessValue = 100; //let the variable 'brightnessValue' initially equal 100
let contrastValue = 100; //let the variable 'contrastValue' initially equal 100
let invertValue = 0; //let the variable 'invertValue' initially equal 0
let opacityValue = 100; //let the variable 'opacityValue' initially equal 100
let sepiaValue = 0; //let the variable 'sepiaValue' initially equal 0

/* Image editing functions triggered when the User drags the various 'range' <input> sliders to new values: */

widthSlider.oninput = function() {
    percentageWidth = this.value; //set the 'percentageWidth' variable equal to the new value of the range <input> element
    for (let i = 0; i < marsSlides.length; i++) { //for the length of the 'marsSlides' NodeList object
        responsiveDiv.style.width = percentageWidth + "%"; //set the width of 'responsiveDiv' to {{percentageWidth}}%
        responsiveDiv.style.marginLeft = "auto"; //set the left margin...
        responsiveDiv.style.marginRight = "auto"; //...and the right margin such that 'responsiveDiv' is centred
        marsSlides[i].style.width = percentageWidth + "%"; //set the width attribute of the martian images to {{percentageWidth}}%
        marsSlides[i].height = Math.round((availableHeight/100)*percentageHeight); //set the image height to the rounded value of (availableHeight/100)*percentageHeight to avoid pixel height increasing proportionate to width
        marsURLs[i].style.zIndex = "1"; //ensure the martian URL remains visible by setting its 'z-index' property to '1'
        previousBtn.style.zIndex = "1"; //ensure the 'previousBtn' remains visible by setting its 'z-index' property to '1'
        nextBtn.style.zIndex = "1"; //ensure the 'nextBtn' remains visible by setting its 'z-index' property to '1'
    }
    this.className = "_" + this.value + "PerCent"; //set the 'class' attribute of the 'widthSlider' element so that the correct percentage is displayed on the slider thumb
};

heightSlider.oninput = function() {
    percentageHeight = this.value; //set the 'percentageHeight' variable equal to the new value of the range <input> element
    responsiveDiv.height = Math.round((availableHeight/100) * percentageHeight); //set the pixel height attribute of the 'responsiveDiv' equal to the rounded result of (availableHeight/100) * percentageHeight
    for (let i = 0; i < marsSlides.length; i++) { //for the length of the 'marsSlides' NodeList object
        responsiveDiv.style.width = percentageWidth + "%"; //set the width of 'responsiveDiv' to {{percentageWidth}}%
        responsiveDiv.style.marginLeft = "auto"; //set the left margin...
        responsiveDiv.style.marginRight = "auto"; //...and the right margin such that 'responsiveDiv' is centred
        marsSlides[i].height = Math.round((availableHeight/100)*percentageHeight); //set the pixel height attribute of the martian image equal to the rounded result of (availableHeight/100)*percentageHeight
        marsSlides[i].style.width = percentageWidth + "%"; //set the image width to {{percentageWidth}}% in order to avoid width increasing proportionate to height
        marsURLs[i].style.zIndex = "1"; //ensure the martian url remains visible by setting its 'z-index' property to '1'
        previousBtn.style.zIndex = "1"; //ensure the 'previousBtn' remains visible by setting its 'z-index' property to '1'
        nextBtn.style.zIndex = "1"; //ensure the 'nextBtn' remains visible by setting its 'z-index' property to '1'
    }
    this.className = "_" + this.value + "PerCent"; //set the 'class' attribute of the 'heightSlider' element so that the correct percentage is displayed on the slider thumb
};

blurSlider.oninput = function() {
    blurValue = this.value; //set the 'blurValue' variable equal to the new value of the range <input> element
    for (let i = 0; i < marsSlides.length; i++) { //for the length of the 'marsSlides' NodeList object
        marsSlides[i].style.filter = "blur(" + blurValue + "px)"; //set the image blur effect to {{blurValue}}px (for Chrome 53.0+, IE 13+, Firefox 35.0+, Safari 9.1+, and Opera 40.0+)
        marsSlides[i].style.WebkitFilter = "blur(" + blurValue + "px)"; //set the image blur effect to {{blurValue}}px (for Chrome 18.0+, Safari 6.0+, and Opera 15.0+)
        marsURLs[i].style.zIndex = "1"; //ensure the martian url remains visible by setting its 'z-index' property to '1'
        previousBtn.style.zIndex = "1"; //ensure the 'previousBtn' remains visible by setting its 'z-index' property to '1'
        nextBtn.style.zIndex = "1"; //ensure the 'nextBtn' remains visible by setting its 'z-index' property to '1'
    }
    this.className = "_" + this.value + "Pixel"; //set the 'class' attribute of the 'blurSlider' element so that the correct blur pixel effect is displayed on the slider thumb
};

brightnessSlider.oninput = function () {
    brightnessValue = this.value; //set the 'brightnessValue' variable equal to the new value of the range <input> element
    for (let i = 0; i < marsSlides.length; i++) { //for the length of the 'marsSlides' NodeList object
        marsSlides[i].style.filter = "brightness(" + brightnessValue + "%)"; //set the image brightness to {{brightnessValue}}% (for Chrome 53.0+, IE 13+, Firefox 35.0+, Safari 9.1+, and Opera 40.0+)
        marsSlides[i].style.WebkitFilter = "brightness(" + brightnessValue + "%)"; //set the image brightness to {{brightnessValue}}% (for Chrome 18.0+, Safari 6.0+, and Opera 15.0+)
        marsURLs[i].style.zIndex = "1"; //ensure the martian url remains visible by setting its 'z-index' property to '1'
        previousBtn.style.zIndex = "1"; //ensure the 'previousBtn' remains visible by setting its 'z-index' property to '1'
        nextBtn.style.zIndex = "1"; //ensure the 'nextBtn' remains visible by setting its 'z-index' property to '1'
    }
    this.className = "_" + this.value + "PerCent"; //set the 'class' attribute of the 'brightnessSlider' element so that the correct brightness percentage is displayed on the slider thumb
};

contrastSlider.oninput = function () {
    contrastValue = this.value; //set the 'contrastValue' variable equal to the new value of the range <input> element
    for (let i = 0; i < marsSlides.length; i++) { //for the length of the 'marsSlides' NodeList object
        marsSlides[i].style.filter = "contrast(" + contrastValue + "%)"; //set the image contrast to {{contrastValue}}% (for Chrome 53.0+, IE 13+, Firefox 35.0+, Safari 9.1+, and Opera 40.0+)
        marsSlides[i].style.WebkitFilter = "contrast(" +  contrastValue + "%)"; //set the image contrast to {{contrastValue}}% (for Chrome 18.0+, Safari 6.0+, and Opera 15.0+)
        marsURLs[i].style.zIndex = "1"; //ensure the martian url remains visible by setting its 'z-index' property to '1'
        previousBtn.style.zIndex = "1"; //ensure the 'previousBtn' remains visible by setting its 'z-index' property to '1'
        nextBtn.style.zIndex = "1"; //ensure the 'nextBtn' remains visible by setting its 'z-index' property to '1'
    }
    this.className = "_" + this.value + "PerCent"; //set the 'class' attribute of the 'contrastSlider' element so that the correct contrast percentage is displayed on the slider thumb
};

invertSlider.oninput = function () {
    invertValue = this.value; //set the 'invertValue' variable equal to the new value of the range <input> element
    for (let i = 0; i < marsSlides.length; i++) { //for the length of the 'marsSlides' NodeList object
        marsSlides[i].style.filter = "invert(" + invertValue + "%)"; //set the image colour inversion effect to {{invertValue}}% (for Chrome 53.0+, IE 13+, Firefox 35.0+, Safari 9.1+, and Opera 40.0+)
        marsSlides[i].style.WebkitFilter = "invert(" + invertValue + "%)"; //set the image colour inversion effect to {{invertValue}}% (for Chrome 18.0+, Safari 6.0+, Opera 15.0+)
        marsURLs[i].style.zIndex = "1"; //ensure the martian url remains visible by setting its 'z-index' property to '1'
        previousBtn.style.zIndex = "1"; //ensure the 'previousBtn' remains visible by setting its 'z-index' property to '1'
        nextBtn.style.zIndex = "1"; //ensure the 'nextBtn' remains visible by setting its 'z-index' property to '1'
    }
    this.className = "_" + this.value + "PerCent"; //set the 'class' attribute of the 'invertSlider' element so that the correct image colour inversion percentage is displayed on the slider thumb
};

opacitySlider.oninput = function () {
    opacityValue = this.value; //set the 'opacityValue' variable equal to the new value of the range <input> element
    for (let i = 0; i < marsSlides.length; i++) { //for the length of the 'marsSlides' NodeList object
        marsSlides[i].style.filter = "opacity(" + opacityValue + "%)"; //set the image opacity to {{opacityValue}}% (for Chrome 53.0+, IE 13+, Firefox 35.0+, Safari 9.1+, and Opera 40.0+)
        marsSlides[i].style.WebkitFilter = "opacity(" +  opacityValue + "%)"; //set the image opacity to {{opacityValue}}% (for Chrome 18.0+, Safari 6.0+, and Opera 15.0+)
        marsURLs[i].style.zIndex = "1"; //ensure the martian url remains visible by setting its 'z-index' property to '1'
        previousBtn.style.zIndex = "1"; //ensure the 'previousBtn' remains visible by setting its 'z-index' property to '1'
        nextBtn.style.zIndex = "1"; //ensure the 'nextBtn' remains visible by setting its 'z-index' property to '1'
    }
    this.className = "_" + this.value + "PerCent"; //set the 'class' attribute of the 'opacitySlider' element so that the correct opacity percentage is displayed on the slider thumb
};

sepiaSlider.oninput = function () {
    sepiaValue = this.value; //set the 'sepiaValue' variable equal to the new value of the range <input> element
    for (let i = 0; i < marsSlides.length; i++) { //for the length of the 'marsSlides' NodeList object
        marsSlides[i].style.filter = "sepia(" + sepiaValue + "%)"; //set the image sepia effect to {{sepiaValue}}% (for Chrome 53.0+, IE 13+, Firefox 35.0+, Safari 9.1+, and Opera 40.0+)
        marsSlides[i].style.WebkitFilter = "sepia(" +  sepiaValue + "%)"; //set the image sepia effect to {{sepiaValue}}% (for Chrome 18.0+, Safari 6.0+, and Opera 15.0+)
        marsURLs[i].style.zIndex = "1"; //ensure the martian url remains visible by setting its 'z-index' property to '1'
        previousBtn.style.zIndex = "1"; //ensure the 'previousBtn' remains visible by setting its 'z-index' property to '1'
        nextBtn.style.zIndex = "1"; //ensure the 'nextBtn' remains visible by setting its 'z-index' property to '1'
    }
    this.className = "_" + this.value + "PerCent"; //set the 'class' attribute of the 'sepiaSlider' element so that the correct sepia effect percentage is displayed on the slider thumb
};

/* Image editing functions triggered when the User clicks the '+' or '-' <button>s adjacent to the various 'range' <input> elements in order to increase/decrease a particular image effect */

function increaseWidth() { //function to increase the width of an image
    if(percentageWidth < 100) { //if the 'percentageWidth' is less than 100
        percentageWidth = Number(percentageWidth) + 1; //increase the numerical representation of 'percentageWidth' by 1
        widthSlider.value = percentageWidth; //set the value attribute of the 'widthSlider' element to the new 'percentageWidth' value
        widthSlider.className = "_" + percentageWidth + "PerCent"; //set the 'class' attribute of the 'widthSlider' element so that the correct percentage is displayed on the slider thumb
        responsiveDiv.height = Math.round((availableHeight/100) * percentageHeight);//set the pixel 'height' property of the 'responsiveDiv' element to the rounded result of ((availableHeight/100) * percentageHeight)
        for (let i = 0; i < marsSlides.length; i++) { //for the length of the 'marsSlides' NodeList object
            responsiveDiv.style.width = percentageWidth + "%"; //set the width of 'responsiveDiv' to {{percentageWidth}}%
            responsiveDiv.style.marginLeft = "auto"; //set the left margin...
            responsiveDiv.style.marginRight = "auto"; //...and the right margin such that 'responsiveDiv' is centred
            marsSlides[i].style.width = percentageWidth + "%"; //set the width of the martian image element to {{percentageWidth}}%
            marsSlides[i].height = Math.round((availableHeight/100)*percentageHeight); //set the 'height' attribute of the image equal to the rounded result of (availableHeight/100)*percentageHeight in order to avoid height increasing proportionate to width
            marsURLs[i].style.zIndex = "1"; //ensure the martian url remains visible by setting its 'z-index' property to '1'
            previousBtn.style.zIndex = "1"; //ensure the 'previousBtn' remains visible by setting its 'z-index' property to '1'
            nextBtn.style.zIndex = "1"; //ensure the 'nextBtn' remains visible by setting its 'z-index' property to '1'
        }
    }
}

function decreaseWidth() { //function to decrease the width of an image
    if(percentageWidth > 1) { //if the 'percentageWidth' is greater than 1
        percentageWidth = Number(percentageWidth) - 1; //decrease the numerical representation of 'percentageWidth' by 1
        widthSlider.value = percentageWidth; //set the value of the 'widthSlider' to the new 'percentageWidth' value
        widthSlider.className = "_" + percentageWidth + "PerCent"; //set the 'class' attribute of the 'widthSlider' element so that the correct percentage is displayed on the slider thumb
        responsiveDiv.height = Math.round((availableHeight/100) * percentageHeight);//set the pixel 'height' property of the 'responsiveDiv' element to the rounded result of ((availableHeight/100) * percentageHeight)
        for (let i = 0; i < marsSlides.length; i++) { //for the length of the 'marsSlides' NodeList object
            responsiveDiv.style.width = percentageWidth + "%"; //set the width of 'responsiveDiv' to {{percentageWidth}}%
            responsiveDiv.style.marginLeft = "auto"; //set the left margin...
            responsiveDiv.style.marginRight = "auto"; //...and the right margin such that 'responsiveDiv' is centred
            marsSlides[i].style.width = percentageWidth + "%"; //set the width of the image to {{percentageWidth}}%
            marsSlides[i].height = Math.round((availableHeight/100)*percentageHeight); //set the 'height' attribute of the image equal to the rounded result of (availableHeight/100)*percentageHeight in order to avoid height increasing proportionate to width
            marsURLs[i].style.zIndex = "1"; //ensure the martian url remains visible by setting its 'z-index' property to '1'
            previousBtn.style.zIndex = "1"; //ensure the 'previousBtn' remains visible by setting its 'z-index' property to '1'
            nextBtn.style.zIndex = "1"; //ensure the 'nextBtn' remains visible by setting its 'z-index' property to '1'
        }
    }
}

function increaseHeight() { //function to increase the height of an image
    if(percentageHeight < 100) { //if the 'percentageHeight' is less than 100
        percentageHeight = Number(percentageHeight) + 1; //increase the numerical representation of 'percentageHeight' by 1
        heightSlider.value = percentageHeight; //set the value of the 'heightSlider' to the new 'percentageHeight' value
        heightSlider.className = "_" + percentageHeight + "PerCent"; //set the 'class' attribute of the 'heightSlider' element so that the correct percentage is displayed on the slider thumb
        imageHeight = Math.round((availableHeight/100) * percentageHeight); //set the value of 'imageHeight' to the rounded result of (availableHeight/100)*percentageHeight
        for (let i = 0; i < marsSlides.length; i++) { //for the length of the 'marsSlides' NodeList object
            marsSlides[i].height = imageHeight; //set the 'height' attribute of the image to {{imageHeight}}px
            marsSlides[i].style.width = percentageWidth + "%"; //set the width of the image to {{percentageWidth}} to avoid width increasing proportionate to height
            marsURLs[i].style.zIndex = "1"; //ensure the martian url remains visible by setting its 'z-index' property to '1'
            previousBtn.style.zIndex = "1"; //ensure the 'previousBtn' remains visible by setting its 'z-index' property to '1'
            nextBtn.style.zIndex = "1"; //ensure the 'nextBtn' remains visible by setting its 'z-index' property to '1'
        }
    }
}

function decreaseHeight() { //function to decrease the height of an image
    if(percentageHeight > 1) { //if the 'percentageHeight' is greater than 1
        percentageHeight = Number(percentageHeight) - 1; //decrease the numerical representation of 'percentageHeight' by 1
        heightSlider.value = percentageHeight; //set the value of 'heightSlider' to the new 'percentageHeight' value
        heightSlider.className = "_" + percentageHeight + "PerCent"; //set the 'class' attribute of the 'heightSlider' element so that the correct percentage is displayed on the slider thumb
        imageHeight = Math.round((availableHeight/100) * percentageHeight); //set the value of 'imageHeight' to the rounded result of (availableHeight/100) * percentageHeight
        for (let i = 0; i < marsSlides.length; i++) { //for the length of the NodeList object
            marsSlides[i].height = imageHeight; //set the 'height' attribute of the image to {{imageHeight}}px
            marsSlides[i].style.width = percentageWidth + "%"; //set the width of the image to {{percentageWidth}}% to avoid width increasing proportionate to height
            marsURLs[i].style.zIndex = "1"; //ensure the martian url remains visible by setting its 'z-index' property to '1'
            previousBtn.style.zIndex = "1"; //ensure the 'previousBtn' remains visible by setting its 'z-index' property to '1'
            nextBtn.style.zIndex = "1"; //ensure the 'nextBtn' remains visible by setting its 'z-index' property to '1'
        }
    }
}

function increaseBlur() { //function to increase the blur effect of an image
    if(blurValue < 100) { //if the 'blurValue' is less than 100
        blurValue = Number(blurValue) + 1; //increase the numerical representation of 'blurValue' by 1
        blurSlider.value = blurValue; //set the value of 'blurSlider' to the new 'blurValue'
        blurSlider.className = "_" + blurValue + "Pixel"; //set the 'class' attribute of the 'blurSlider' element so that the correct blur pixel effect is displayed on the slider thumb
        for (let i = 0; i < marsSlides.length; i++) { //for the length of the 'marsSlides' NodeList object
            marsSlides[i].style.filter = "blur(" + blurValue + "px)"; //set the image blur effect to {{blurValue}}px (for Chrome 53.0+, IE 13+, Firefox 35.0+, Safari 9.1+, and Opera 40.0+)
            marsSlides[i].style.WebkitFilter = "blur(" + blurValue + "px)"; //set the image blur effect to {{blurValue}}px (for Chrome 18.0+, Safari 6.0+, and Opera 15.0+)
            marsURLs[i].style.zIndex = "1"; //ensure the martian url remains visible by setting its 'z-index' property to '1'
            previousBtn.style.zIndex = "1"; //ensure the 'previousBtn' remains visible by setting its 'z-index' property to '1'
            nextBtn.style.zIndex = "1"; //ensure the 'nextBtn' remains visible by setting its 'z-index' property to '1'
        }
    }
}

function decreaseBlur() { //function to decrease the blur effect of an image
    if(blurValue > 0) { //if the 'blurValue' is greater than 0
        blurValue = Number(blurValue) - 1; //decrease the numerical representation of 'blurValue' by 1
        blurSlider.value = blurValue; //set the value of 'blurSlider' to the new 'blurValue'
        blurSlider.className = "_" + blurValue + "Pixel"; //set the 'class' attribute of the 'blurSlider' element so that the correct blur pixel effect is displayed on the slider thumb
        for (let i = 0; i < marsSlides.length; i++) { //for the length of the 'marsSlides' NodeList object
            marsSlides[i].style.filter = "blur(" + blurValue + "px)"; //set the image blur effect to {{blurValue}}px (for Chrome 53.0+, IE 13+, Firefox 35.0+, Safari 9.1+, and Opera 40.0+)
            marsSlides[i].style.WebkitFilter = "blur(" + blurValue + "px)"; //set the image blur effect to {{blurValue}}px (for Chrome 18.0+, Safari 6.0+, and Opera 15.0+)
            marsURLs[i].style.zIndex = "1"; //ensure the martian url remains visible by setting its 'z-index' property to '1'
            previousBtn.style.zIndex = "1"; //ensure the 'previousBtn' remains visible by setting its 'z-index' property to '1'
            nextBtn.style.zIndex = "1"; //ensure the 'nextBtn' remains visible by setting its 'z-index' property to '1'
        }
    }
}

function increaseBrightness() { //function to increase the brightness of an image
    if(brightnessValue < 800) { //if the 'brightnessValue' is less than 800
        brightnessValue = Number(brightnessValue) + 10; //increase the numerical representation of 'brightnessValue' by 10
        brightnessSlider.value = brightnessValue; //set the value of 'brightnessSlider' to the new 'brightnessValue'
        brightnessSlider.className = "_" + brightnessValue + "PerCent"; //set the 'class' attribute of the 'brightnessSlider' element so that the correct brightness value is displayed on the slider thumb
        for (let i = 0; i < marsSlides.length; i++) { //for the length of the 'marsSlides' NodeList object
            marsSlides[i].style.filter = "brightness(" + brightnessValue + "%)"; //set the image brightness to {{brightnessValue}}% (for Chrome 53.0+, IE 13+, Firefox 35.0+, Safari 9.1+, and Opera 40.0+)
            marsSlides[i].style.WebkitFilter = "brightness(" + brightnessValue + "%)"; //set the image brightness to {{brightnessValue}}% (for Chrome 18.0+, Safari 6.0+, and Opera 15.0+)
            marsURLs[i].style.zIndex = "1"; //ensure the martian url remains visible by setting its 'z-index' property to '1'
            previousBtn.style.zIndex = "1"; //ensure the 'previousBtn' remains visible by setting its 'z-index' property to '1'
            nextBtn.style.zIndex = "1"; //ensure the 'nextBtn' remains visible by setting its 'z-index' property to '1'
        }
    }
}

function decreaseBrightness() { //function to decrease the brightness of an image
    if(brightnessValue > 0) { //if the 'brightnessValue' is greater than 0
        brightnessValue = Number(brightnessValue) - 10; //decrease the numerical representation of 'brightnessValue' by 10
        brightnessSlider.value = brightnessValue; //set the value of 'brightnessSlider' to the new 'brightnessValue'
        brightnessSlider.className = "_" + brightnessValue + "PerCent"; //set the 'class' attribute of the 'brightnessSlider' element so that the correct brightness value is displayed on the slider thumb
        for (let i = 0; i < marsSlides.length; i++) { //for the length of the 'marsSlides' NodeList object
            marsSlides[i].style.filter = "brightness(" + brightnessValue + "%)"; //set the image brightness to {{brightnessValue}}% (for Chrome 53.0+, IE 13+, Firefox 35.0+, Safari 9.1+, and Opera 40.0+)
            marsSlides[i].style.WebkitFilter = "brightness(" + brightnessValue + "%)"; //set the image brightness to {{brightnessValue}}% (for Chrome 18.0+, Safari 6.0+, and Opera 15.0+)
            marsURLs[i].style.zIndex = "1"; //ensure the martian url remains visible by setting its 'z-index' property to '1'
            previousBtn.style.zIndex = "1"; //ensure the 'previousBtn' remains visible by setting its 'z-index' property to '1'
            nextBtn.style.zIndex = "1"; //ensure the 'nextBtn' remains visible by setting its 'z-index' property to '1'
        }
    }
}

function increaseContrast() { //function to increase the contrast of an image
    if(contrastValue < 200) { //if the 'contrastValue' is less than 200
        contrastValue = Number(contrastValue) + 2; //increase the numerical representation of 'contrastValue' by 2
        contrastSlider.value = contrastValue; //set the value of 'contrastSlider' to the new 'contrastValue'
        contrastSlider.className = "_" + contrastValue + "PerCent"; //set the 'class' attribute of the 'contrastSlider' element so that the correct contrast value is displayed on the slider thumb
        for (let i = 0; i < marsSlides.length; i++) { //for the length of the 'marsSlides' NodeList object
            marsSlides[i].style.filter = "contrast(" + contrastValue + "%)"; //set the image contrast to {{contrastValue}}% (for Chrome 53.0+, IE 13+, Firefox 35.0+, Safari 9.1+, and Opera 40.0+)
            marsSlides[i].style.WebkitFilter = "contrast(" + contrastValue + "%)"; //set the image contrast to {{contrastValue}}% (for Chrome 18.0+, Safari 6.0+, and Opera 15.0+)
            marsURLs[i].style.zIndex = "1"; //ensure the martian url remains visible by setting its 'z-index' property to '1'
            previousBtn.style.zIndex = "1"; //ensure the 'previousBtn' remains visible by setting its 'z-index' property to '1'
            nextBtn.style.zIndex = "1"; //ensure the 'nextBtn' remains visible by setting its 'z-index' property to '1'
        }
    }
}

function decreaseContrast() { //function to decrease the contrast of an image
    if(contrastValue > 0) { //if the 'contrastValue' is greater than 0
        contrastValue = Number(contrastValue) - 2; //decrease the numerical representation of 'contrastValue' by 2
        contrastSlider.value = contrastValue; //set the value of 'contrastSlider' to the new 'contrastValue'
        contrastSlider.className = "_" + contrastValue + "PerCent"; //set the 'class' attribute of the 'contrastSlider' element so that the correct contrast value is displayed on the slider thumb
        for (let i = 0; i < marsSlides.length; i++) { //for the length of the 'marsSlides' NodeList object
            marsSlides[i].style.filter = "contrast(" + contrastValue + "%)"; //set the image contrast to {{contrastValue}}% (for Chrome 53.0+, IE 13+, Firefox 35.0+, Safari 9.1+, and Opera 40.0+)
            marsSlides[i].style.WebkitFilter = "contrast(" + contrastValue + "%)"; //set the image contrast to {{contrastValue}}% (for Chrome 18.0+, Safari 6.0+, and Opera 15.0+)
            marsURLs[i].style.zIndex = "1"; //ensure the martian url remains visible by setting its 'z-index' property to '1'
            previousBtn.style.zIndex = "1"; //ensure the 'previousBtn' remains visible by setting its 'z-index' property to '1'
            nextBtn.style.zIndex = "1"; //ensure the 'nextBtn' remains visible by setting its 'z-index' property to '1'
        }
    }
}

function increaseInvert() { //function to increase the colour inversion of an image
    if(invertValue < 100) { //if the 'invertValue' is less than 100
        invertValue = Number(invertValue) + 1; //increase the numerical representation of 'invertValue' by 1
        invertSlider.value = invertValue; //set the value of 'invertSlider' to the new 'invertValue'
        invertSlider.className = "_" + invertValue + "PerCent"; //set the 'class' attribute of the 'invertSlider' element so that the correct inversion value is displayed on the slider thumb
        for (let i = 0; i < marsSlides.length; i++) { //for the length of the 'marsSlides' NodeList object
            marsSlides[i].style.filter = "invert(" + invertValue + "%)"; //set the image inversion to {{invertValue}}% (for Chrome 53.0+, IE 13+, Firefox 35.0+, Safari 9.1+, and Opera 40.0+)
            marsSlides[i].style.WebkitFilter = "invert(" + invertValue + "%)"; //set the image inversion to {{invertValue}}% (for Chrome 18.0+, Safari 6.0+, and Opera 15.0+)
            marsURLs[i].style.zIndex = "1"; //ensure the martian url remains visible by setting its 'z-index' property to '1'
            previousBtn.style.zIndex = "1"; //ensure the 'previousBtn' remains visible by setting its 'z-index' property to '1'
            nextBtn.style.zIndex = "1"; //ensure the 'nextBtn' remains visible by setting its 'z-index' property to '1'
        }
    }
}

function decreaseInvert() { //function to decrease the colour inversion of an image
    if(invertValue > 0) { //if the 'invertValue' is greater than 0
        invertValue = Number(invertValue) - 1; //decrease the numerical representation of 'invertValue' by 1
        invertSlider.value = invertValue; //set the value of 'invertSlider' to the new 'invertValue'
        invertSlider.className = "_" + invertValue + "PerCent"; //set the 'class' attribute of the 'invertSlider' element so that the correct inversion value is displayed on the slider thumb
        for (let i = 0; i < marsSlides.length; i++) { //for the length of the 'marsSlides' NodeList object
            marsSlides[i].style.filter = "invert(" + invertValue + "%)"; //set the image inversion to {{invertValue}}% (for Chrome 53.0+, IE 13+, Firefox 35.0+, Safari 9.1+, and Opera 40.0+)
            marsSlides[i].style.WebkitFilter = "invert(" + invertValue + "%)"; //set the image inversion to {{invertValue}}% (for Chrome 18.0+, Safari 6.0+, and Opera 15.0+)
            marsURLs[i].style.zIndex = "1"; //ensure the martian url remains visible by setting its 'z-index' property to '1'
            previousBtn.style.zIndex = "1"; //ensure the 'previousBtn' remains visible by setting its 'z-index' property to '1'
            nextBtn.style.zIndex = "1"; //ensure the 'nextBtn' remains visible by setting its 'z-index' property to '1'
        }
    }
}

function increaseOpacity() { //function to increase the opacity of an image
    if(opacityValue < 100) { //if the 'opacityValue' is less than 100
        opacityValue = Number(opacityValue) + 1; //increase the numerical representation of 'opacityValue' by 1
        opacitySlider.value = opacityValue; //set the value of 'opacitySlider' to the new 'opacityValue'
        opacitySlider.className = "_" + opacityValue + "PerCent"; //set the 'class' attribute of the 'opacitySlider' element so that the correct opacity value is displayed on the slider thumb
        for (let i = 0; i < marsSlides.length; i++) { //for the length of the 'marsSlides' NodeList object
            marsSlides[i].style.filter = "opacity(" + opacityValue + "%)"; //set the image opacity to {{opacityValue}}% (for Chrome 53.0+, IE 13+, Firefox 35.0+, Safari 9.1+, and Opera 40.0+)
            marsSlides[i].style.WebkitFilter = "opacity(" + opacityValue + "%)"; //set the image opacity to {{opacityValue}}% (for Chrome 18.0+, Safari 6.0+, and Opera 15.0+)
            marsURLs[i].style.zIndex = "1"; //ensure the martian url remains visible by setting its 'z-index' property to '1'
            previousBtn.style.zIndex = "1"; //ensure the 'previousBtn' remains visible by setting its 'z-index' property to '1'
            nextBtn.style.zIndex = "1"; //ensure the 'nextBtn' remains visible by setting its 'z-index' property to '1'
        }
    }
}

function decreaseOpacity() { //function to decrease the opacity of an image
    if(opacityValue > 0) { //if the 'opacityValue' is greater than 0
        opacityValue = Number(opacityValue) - 1; //decrease the numerical representation of 'opacityValue' by 1
        opacitySlider.value = opacityValue; //set the value of 'opacitySlider' to the new 'opacityValue'
        opacitySlider.className = "_" + opacityValue + "PerCent"; //set the 'class' attribute of the 'opacitySlider' element so that the correct opacity value is displayed on the slider thumb
        for (let i = 0; i < marsSlides.length; i++) { //for the length of the 'marsSlides' NodeList object
            marsSlides[i].style.filter = "opacity(" + opacityValue + "%)"; //set the image opacity to {{opacityValue}}% (for Chrome 53.0+, IE 13+, Firefox 35.0+, Safari 9.1+, and Opera 40.0+)
            marsSlides[i].style.WebkitFilter = "opacity(" + opacityValue + "%)"; //set the image opacity to {{opacityValue}}% (for Chrome 18.0+, Safari 6.0+, and Opera 15.0+)
            marsURLs[i].style.zIndex = "1"; //ensure the martian url remains visible by setting its 'z-index' property to '1'
            previousBtn.style.zIndex = "1"; //ensure the 'previousBtn' remains visible by setting its 'z-index' property to '1'
            nextBtn.style.zIndex = "1"; //ensure the 'nextBtn' remains visible by setting its 'z-index' property to '1'
        }
    }
}

function increaseSepia() { //function to increase the sepia effect of an image
    if(sepiaValue < 100) { //if the 'sepiaValue' is less than 100
        sepiaValue = Number(sepiaValue) + 1; //increase the numerical representation of 'sepiaValue' by 1
        sepiaSlider.value = sepiaValue; //set the value of 'sepiaSlider' to the new 'sepiaValue'
        sepiaSlider.className = "_" + sepiaValue + "PerCent"; //set the 'class' attribute of the 'sepiaSlider' element so that the correct sepia value is displayed on the slider thumb
        for (let i = 0; i < marsSlides.length; i++) { //for the length of the 'marsSlides' NodeList object
            marsSlides[i].style.filter = "sepia(" + sepiaValue + "%)"; //set the image sepia effect to {{sepiaValue}}% (for Chrome 53.0+, IE 13+, Firefox 35.0+, Safari 9.1+, and Opera 40.0+)
            marsSlides[i].style.WebkitFilter = "sepia(" + sepiaValue + "%)"; //set the image sepia effect to {{sepiaValue}}% (for Chrome 18.0+, Safari 6.0+, and Opera 15.0+)
            marsURLs[i].style.zIndex = "1"; //ensure the martian url remains visible by setting its 'z-index' property to '1'
            previousBtn.style.zIndex = "1"; //ensure the 'previousBtn' remains visible by setting its 'z-index' property to '1'
            nextBtn.style.zIndex = "1"; //ensure the 'nextBtn' remains visible by setting its 'z-index' property to '1'
        }
    }
}

function decreaseSepia() { //function to decrease the sepia effect of an image
    if(sepiaValue > 0) { //if the 'sepiaValue' is greater than 0
        sepiaValue = Number(sepiaValue) - 1; //decrease the numerical representation of 'sepiaValue' by 1
        sepiaSlider.value = sepiaValue; //set the value of 'sepiaSlider' to the new 'sepiaValue'
        sepiaSlider.className = "_" + sepiaValue + "PerCent"; //set the 'class' attribute of the 'sepiaSlider' element so that the correct sepia value is displayed on the slider thumb
        for (let i = 0; i < marsSlides.length; i++) { //for the length of the 'marsSlides' NodeList object
            marsSlides[i].style.filter = "sepia(" + sepiaValue + "%)"; //set the image sepia effect to {{sepiaValue}}% (for Chrome 53.0+, IE 13+, Firefox 35.0+, Safari 9.1+, and Opera 40.0+)
            marsSlides[i].style.WebkitFilter = "sepia(" + sepiaValue + "%)"; //set the image sepia effect to {{sepiaValue}}% (for Chrome 18.0+, Safari 6.0+, and Opera 15.0+)
            marsURLs[i].style.zIndex = "1"; //ensure the martian url remains visible by setting its 'z-index' property to '1'
            previousBtn.style.zIndex = "1"; //ensure the 'previousBtn' remains visible by setting its 'z-index' property to '1'
            nextBtn.style.zIndex = "1"; //ensure the 'nextBtn' remains visible by setting its 'z-index' property to '1'
        }
    }
}

/* Functions to toggle between showing/hiding the various audio/image editing <div> elements: */

function toggleEditingDiv() { //called when the 'Image Editing Controls...' <h2> element is clicked, to toggle between showing/hiding the editing controls
    if(editingDiv.hasAttribute("hidden")) { //if the 'editingDiv' <div> element has a "hidden" attribute
        editingDiv.removeAttribute("hidden"); //remove the "hidden" attribute from the 'editingDiv' <div>
    }
    else { //otherwise, if the 'editingDiv' <div> element does not have a "hidden" attribute
        editingDiv.setAttribute("hidden", "hidden"); //set a "hidden" attribute on the 'editingDiv' <div> element
    }
}

function toggleWidthDiv() { //called when the 'Width +/-' <label> is clicked, to toggle between showing/hiding the width editing slider
    if(widthDiv.hasAttribute("hidden")) { //if the 'widthDiv' <div> element has a "hidden" attribute
        widthDiv.removeAttribute("hidden"); //remove the "hidden" attribute from the 'widthDiv' <div>
    }
    else { //otherwise, if the 'widthDiv' <div> element does not have a "hidden" attribute
        widthDiv.setAttribute("hidden", "hidden"); //set a "hidden" attribute on the 'widthDiv' <div> element
    }
}

function toggleHeightDiv() { //called when the 'Height +/-' <label> is clicked, to toggle between showing/hiding the height editing slider
    if(heightDiv.hasAttribute("hidden")) { //if the 'heightDiv' <div> element has a "hidden" attribute
        heightDiv.removeAttribute("hidden"); //remove the "hidden" attribute from the 'heightDiv' <div>
    }
    else { //otherwise, if the 'heightDiv' <div> element does not have a "hidden" attribute
        heightDiv.setAttribute("hidden", "hidden"); //set a "hidden" attribute on the 'heightDiv' <div> element
    }
}

function toggleBlurDiv() { //called when the 'Blur +/-' <label> is clicked, to toggle between showing/hiding the blur editing slider
    if(blurDiv.hasAttribute("hidden")) { //if the 'blurDiv' <div> element has a "hidden" attribute
        blurDiv.removeAttribute("hidden"); //remove the "hidden" attribute from the 'blurDiv' <div>
    }
    else { //otherwise, if the 'blurDiv' <div> element does not have a "hidden" attribute
        blurDiv.setAttribute("hidden", "hidden"); //set a "hidden" attribute on the 'blurDiv' <div> element
    }
}

function toggleBrightnessDiv() { //called when the 'Brightness +/-' <label> is clicked, to toggle between showing/hiding the brightness editing slider
    if(brightnessDiv.hasAttribute("hidden")) { //if the 'brightnessDiv' <div> element has a "hidden" attribute
        brightnessDiv.removeAttribute("hidden"); //remove the "hidden" attribute from the 'brightnessDiv' <div>
    }
    else { //otherwise, if the 'brightnessDiv' <div> element does not have a "hidden" attribute
        brightnessDiv.setAttribute("hidden", "hidden"); //set a "hidden" attribute on the 'brightnessDiv' <div> element
    }
}

function toggleContrastDiv() { //called when the 'Contrast +/-' <label> is clicked, to toggle between showing/hiding the contrast editing slider
    if(contrastDiv.hasAttribute("hidden")) { //if the 'contrastDiv' <div> element has a "hidden" attribute
        contrastDiv.removeAttribute("hidden"); //remove the "hidden" attribute from the 'contrastDiv' <div>
    }
    else { //otherwise, if the 'contrastDiv' <div> element does not have a "hidden" attribute
        contrastDiv.setAttribute("hidden", "hidden"); //set a "hidden" attribute on the 'contrastDiv' <div> element
    }
}

function toggleInvertDiv() { //called when the 'Invert +/-' <label> is clicked, to toggle between showing/hiding the invert editing slider
    if(invertDiv.hasAttribute("hidden")) { //if the 'invertDiv' <div> element has a "hidden" attribute
        invertDiv.removeAttribute("hidden"); //remove the "hidden" attribute from the 'invertDiv' <div>
    }
    else { //otherwise, if the 'invertDiv' <div> element does not have a "hidden" attribute
        invertDiv.setAttribute("hidden", "hidden"); //set a "hidden" attribute on the 'invertDiv' <div> element
    }
}

function toggleOpacityDiv() { //called when the 'Opacity +/-' <label> is clicked, to toggle between showing/hiding the opacity editing slider
    if(opacityDiv.hasAttribute("hidden")) { //if the 'opacityDiv' <div> element has a "hidden" attribute
        opacityDiv.removeAttribute("hidden"); //remove the "hidden" attribute from the 'opacityDiv' <div>
    }
    else { //otherwise, if the 'opacityDiv' <div> element does not have a "hidden" attribute
        opacityDiv.setAttribute("hidden", "hidden"); //set a "hidden" attribute on the 'invertDiv' <div> element
    }
}

function toggleSepiaDiv() { //called when the 'Sepia +/-' <label> is clicked, to toggle between showing/hiding the sepia editing slider
    if(sepiaDiv.hasAttribute("hidden")) { //if the 'sepiaDiv' <div> element has a "hidden" attribute
        sepiaDiv.removeAttribute("hidden"); //remove the "hidden" attribute from the 'sepiaDiv' <div>
    }
    else { //otherwise, if the 'sepiaDiv' <div> element does not have a "hidden" attribute
        sepiaDiv.setAttribute("hidden", "hidden"); //set a "hidden" attribute on the 'sepiaDiv' <div> element
    }
}

function toggleAudioControls() { //called when the 'Music +/-' <h2> element is clicked, to toggle between showing/hiding the audio controls
    if(audioControls.hasAttribute("hidden")) { //if the 'audioControls' <div> element has a "hidden" attribute
        if(!musicPlayer) { //if 'musicPlayer' equates to a 'falsy' value (i.e. it hasn't yet been initialized - and, therefore, neither have the 'musicalProgress', 'musicalPercentage', 'volumeDisplay', or 'autoplayError' variables)
            musicPlayer = div3.querySelector("#musicPlayer"); //obtain a reference to the 'musicPlayer' <audio> element
            volumeDisplay = div3.querySelector("#volumeDisplay"); //obtain a reference to the 'volumeDisplay' <p>
            musicalProgress = div3.querySelector("#musicalProgress"); //obtain a reference to the 'musicalProgress' <progress> element
            musicalPercentage = div3.querySelector("#musicalPercentage"); //obtain a reference to the 'musicalPercentage' <p> element
            autoplayError = div3.querySelector(".autoplayError"); //obtain a reference to the 'autoplayError' <span> element
            showProgress(); //invoke the 'showProgress()' function in order to update the 'volumeDisplay', 'musicalProgress', 'musicalPercentage', and (potentially) the 'autoplayError' elements
        }
        audioControls.removeAttribute("hidden"); //remove the "hidden" attribute from the 'audioControls' <div>
    }
    else { //otherwise, if the 'audioControls' <div> element does not have a "hidden" attribute
        audioControls.setAttribute("hidden", "hidden"); //set a "hidden" attribute on the 'audioControls' <div> element
    }
}

function createLink() { //called when the User clicks on the URL displayed at the centre-bottom of the various sol images
    if(numClicks[currentIndex] === 0) { //if this is the first time that the URL has been clicked
        numClicks[currentIndex] = 1; //set the {{currentIndex}}th element of the [numClicks] array to the numerical value 1
    }
    else if(numClicks[currentIndex] === 1) { //otherwise, if this is the second time that the URL has been clicked
        if(visitedLinkString === "") { //if 'visitedLinkString' is equal to an empty String...
            visitedLinkString += currentIndex.toString(); //...add the String representation of the 'currentIndex' variable to the 'visitedLinkString'
        }
        else { //otherwise, if 'visitedLinkString' is not equal to an empty String...
            visitedLinkArray = visitedLinkString.split(","); //split the 'visitedLinkString' on the ',' operator, and store the elements thus furnished in the 'visitedLinkArray'
            if(!visitedLinkArray.includes(currentIndex.toString())) { //if the 'visitedLinkArray' doesn't contain the String representation of the 'currentIndex' variable...
                visitedLinkString += "," + currentIndex.toString(); //...add a comma and the String representation of the 'currentIndex' variable to the 'visitedLinkString'
            }
        }
        localStorage.setItem(visitedLinkStringKey, visitedLinkString); //store the freshly-updated 'visitedLinkString' in localStorage as 'visitedLinkStringKey'
        localStorage.setItem("currentIndex", currentIndex.toString()); //set a 'currentIndex' variable in localStorage, with the value of the string representation of {{currentIndex}}
        numClicks[currentIndex] = 0; //set the value of the {{currentIndex}}th element of the [numClicks] array back to zero
    }
    currentURL = marsURLs[currentIndex]; //store a reference to the 'marsURLs[currentIndex]' element in the 'currentURL' variable
    hrefValue = hrefValues[currentIndex]; //store a reference to the 'hrefValues[currentIndex]' element in the 'hrefValue' variable
    currentURL.innerHTML = "LINK: <a href='" + hrefValue + "' target='_blank'> " + hrefValue + "</a>"; //modify the innerHTML of the currently-displayed martian url, such that it becomes a clickable link
    currentURL.style.backgroundColor = "#2e4a36"; //change the background colour of the current martian url to a dark-ish green; this colour will persist for the length of time that the page is displayed, indicating to the User that s/he has interacted with this martian-url-displaying <div> element
}

