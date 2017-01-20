
(function(){

	console.log('Ready to go, boss!');

	var theImages = document.querySelectorAll('.image-holder');
	var theHeading = document.querySelector('.heading');
    var theSubHead = document.querySelector('.main-copy h2');
    var seasonText = document.querySelector('.main-copy p');

    var appliedClass = this.id; //this variable correponds to the ID that was previously clicked

    function loadPreset(){

        theSubHead.firstChild.nodeValue = dynamicContent.spring.headline;
        seasonText.firstChild.nodeValue = dynamicContent.spring.text;
        theHeading.classList.add('spring');


    }

    window.addEventListener("load", loadPreset, false);

    function changeElements() {
    
        theSubHead.classList.remove(appliedClass);
        theHeading.classList.remove(appliedClass);

        //change the color
        theSubHead.classList.add(this.id);
        theHeading.classList.add(this.id);

        //debugger;
        theSubHead.firstChild.nodeValue = dynamicContent[this.id].headline;
        seasonText.firstChild.nodeValue = dynamicContent[this.id].text;

        //the above is a very hardcore programming way of changing objects without use of classe toggling
        //the "first child" method selects the text within main-copy
        //the second half of the code references the "headline" and "text" values in the contentObject.js file
        //it displays the text and headlines in accordance with the image's ID.

    }

    [].forEach.call(theImages, function(image) {image.addEventListener('click', changeElements, false);
});

	

})();