//

document.addEventListener('DOMContentLoaded', () => {
    // Initially hide all outfits
    hideAllOutfits();
    // Show only the body by default
    document.getElementById('body').classList.remove('hidden');
});

// Utility function to hide all outfits
function hideAllOutfits() {
    let outfitElements = document.getElementsByClassName('outfit');
    for (let outfit of outfitElements) {
        outfit.classList.add('hidden');
    }
}

// s1 outfit
let s1 = document.getElementById("s1")
/* the process: */
s1.onclick = function() {
	/* 1. hide #body (set display to none) */
    document.getElementById('body').classList.add('hidden');

	/* 2. call the function you created to hide all the outfits
	(remember: get the list of .outfit elements and use a for loop to hide each outfit)*/
    let outfitElements = document.getElementsByClassName('outfit');
    for (let i = 0; i < outfitElements.length; i++) {
        outfitElements[i].classList.add('hidden');
    }

	/* 3. show #o1 outfit (set display to block)*/
    document.getElementById('o1').classList.remove('hidden');
};

// s2 outfit
let s2 = document.getElementById("s2")

s2.onclick = function() {
    document.getElementById('body').classList.add('hidden');

    let outfitElements = document.getElementsByClassName('outfit');
    for (let i = 0; i < outfitElements.length; i++) {
        outfitElements[i].classList.add('hidden');
    }

    document.getElementById('o2').classList.remove('hidden');
};

// s3 outfit
let s3 = document.getElementById("s3")

s3.onclick = function() {
    document.getElementById('body').classList.add('hidden');

    let outfitElements = document.getElementsByClassName('outfit');
    for (let i = 0; i < outfitElements.length; i++) {
        outfitElements[i].classList.add('hidden');
    }

    document.getElementById('o3').classList.remove('hidden');
};

// s4 outfit
let s4 = document.getElementById("s4")

s4.onclick = function() {
    document.getElementById('body').classList.add('hidden');

    let outfitElements = document.getElementsByClassName('outfit');
    for (let i = 0; i < outfitElements.length; i++) {
        outfitElements[i].classList.add('hidden');
    }

    document.getElementById('o4').classList.remove('hidden');
};

// s5 outfit
let s5 = document.getElementById("s5")

s5.onclick = function() {
    document.getElementById('body').classList.add('hidden');

    let outfitElements = document.getElementsByClassName('outfit');
    for (let i = 0; i < outfitElements.length; i++) {
        outfitElements[i].classList.add('hidden');
    }

    document.getElementById('o5').classList.remove('hidden');
};

// strip outfit
let strip = document.getElementById("strip-button")
strip.onclick = function() {
	/* call the function you created to hide all the outfits */
    let outfitElements = document.getElementsByClassName('outfit');
    for (let i = 0; i < outfitElements.length; i++) {
        outfitElements[i].classList.add('hidden');
    }
	/* show #body */
    document.getElementById('body').classList.remove('hidden');
};