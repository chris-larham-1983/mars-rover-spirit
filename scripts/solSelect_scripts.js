let desiredSol = document.getElementById("desiredSol"); //let the 'desiredSol' variable refer to the <input> element whose id attribute is 'desiredSol'

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