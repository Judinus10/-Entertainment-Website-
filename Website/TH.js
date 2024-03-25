		function changeColorScheme(colorScheme) {//FOR COLOR CHNGING
			document.body.className = 'color-scheme-' + colorScheme;
		}
		
		function changeFontSize(fontSize) {// FOR FONT SIZE CHANGING
			document.body.style.fontSize = fontSize + 'px';
		}
		
		function displayImage(imageUrl, description1,description2) {
			var selectedImage = document.getElementById("selectedImage");//CREATE A VARIABLE(SELECTED IMAGE) AND STORE 
			selectedImage.src = imageUrl;//REPLACE IMAGE URL
			var selectedImageDescription = document.getElementById("selectedImageDescription");
			selectedImage.alt = description1;//REPLACE IMAGE ALT
			var DivContent = document.querySelector(".imgContent");
            DivContent.textContent = description2;//REPLACE IMAGE CONTANT PHARAGRAPH

           // Highlight the clicked description
			var clickedDescription = event.currentTarget.querySelector(".description");
			clickedDescription.classList.add("highlighted");

			// Remove highlight from other descriptions
			var allDescriptions = document.querySelectorAll(".description");
			allDescriptions.forEach(function (description) {
				if (description !== clickedDescription) {
				description.classList.remove("highlighted");
				}
			});
			}

			// Add click event listener to each clickable element
			var clickableElements = document.querySelectorAll(".clickable-element");
			clickableElements.forEach(function (element) {
			element.addEventListener("click", highlightDescription);
						
					})