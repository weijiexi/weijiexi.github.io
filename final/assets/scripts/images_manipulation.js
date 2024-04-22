/**
 * Makes lightbox overlay visible, and shows the lightbox pop-up corresponding to the id
 * @param {string} lightboxID The id of the lightbox pop-up to show
 */
function unhideLightbox(lightboxID) {
	// This add the .hidden class to the #gallery div
	// document.getElementById('gallery').classList.add('hidden');
	// This removes the .hidden class from the #lightbox-overlay div
	document.getElementById('lightbox-overlay').classList.remove('hidden');
	// Remove the .hidden class from the div with the given id
	document.getElementById(lightboxID).classList.remove('hidden');
}

//Calls unhideLightbox with the id of the first lightbox
function unhideLightbox1() {
	unhideLightbox("pic1");
}
// Set the browser to run the function unhideLightbox1 when someone clicks #picture-1
document.getElementById("picture-1").onclick = unhideLightbox1;

//	do the same for #picture-2, write a function and then make it run on click
function unhideLightbox2() {
	// Look in q2.html to see what the id for the lightbox div for the first picture, and call unhideLightbox
	unhideLightbox("pic2");
}
document.getElementById("picture-2").onclick = unhideLightbox2

// do the same for #picture-3, write a function and then make it run on click
function unhideLightbox3() {
	// TODO: Look in q2.html to see what the id for the lightbox div for the first picture, and call unhideLightbox
	unhideLightbox("pic3");
}
document.getElementById("picture-3").onclick = unhideLightbox3

// do the same for #picture-4, write a function and then make it run on click
function unhideLightbox4() {
	// TODO: Look in q2.html to see what the id for the lightbox div for the first picture, and call unhideLightbox
	unhideLightbox("pic4");
}
document.getElementById("picture-4").onclick = unhideLightbox4

// do the same for #picture-4, write a function and then make it run on click
function unhideLightbox5() {
	// TODO: Look in q2.html to see what the id for the lightbox div for the first picture, and call unhideLightbox
	unhideLightbox("pic5");
}
document.getElementById("picture-5").onclick = unhideLightbox5

// do the same for #picture-6, write a function and then make it run on click
function unhideLightbox6() {
	// TODO: Look in q2.html to see what the id for the lightbox div for the first picture, and call unhideLightbox
	unhideLightbox("pic6");
}
document.getElementById("picture-6").onclick = unhideLightbox6

// do the same for #picture-7, write a function and then make it run on click
function unhideLightbox7() {
	// TODO: Look in q2.html to see what the id for the lightbox div for the first picture, and call unhideLightbox
	unhideLightbox("pic7");
}
document.getElementById("picture-7").onclick = unhideLightbox7

// do the same for #picture-6, write a function and then make it run on click
function unhideLightbox8() {
	// TODO: Look in q2.html to see what the id for the lightbox div for the first picture, and call unhideLightbox
	unhideLightbox("pic8");
}
document.getElementById("picture-8").onclick = unhideLightbox8

function closeLightbox(lightboxID) {
	document.getElementById('lightbox-overlay').classList.add('hidden');	// This adds the .hidden class to the #lightbox-overlay div
	// document.getElementById('gallery').classList.remove('hidden');
	document.getElementById(lightboxID).classList.add('hidden');
}


// This function class closeLightbox() for every .lightbox div - feel free to read it, but you do not have to understand it completely!
function closeAllLightboxes() {
	// get every .lightbox div, getElementsByClassName gives us an array 
	var lightboxElements = document.getElementsByClassName('lightbox');

	// sneak preview of Javascript loops, which will go through every element in an array of elements
	for (var i = 0; i < lightboxElements.length; i++) {
		// get id of this particular .lightbox div
		var id = lightboxElements[i].id;
		// call closeLightbox for this id
		closeLightbox(id);
	}
}

document.getElementById("lightbox-overlay").onclick = closeAllLightboxes;



