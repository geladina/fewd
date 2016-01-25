
var visibleCardID = 1;
var img = document.querySelector( '#card-' + visibleCardID);
var likedImages = [];

// show and hide images
function hideImage() {
  img.classList.add("hide");
  visibleCardID = visibleCardID + 1;
  img = document.querySelector( "#card-" + visibleCardID);

  if (visibleCardID >= 14){
    showMeResults();
  }
 }

function showMeResults(){
  //adopt link
  var resultList = document.querySelector(".results-list");
  var matchText = document.createElement("h2");

  var textLink = document.createElement('a');
  var body = document.querySelector("body");
  textLink.textContent = "Feel like adopting a puppy?";
  textLink.href = "https://www.sfspca.org/adoptions";
  body.appendChild(textLink);

  if (likedImages.length === 0) {
    matchText.textContent = "You didn't like any dogs. Lame!";
  } else {
    matchText.textContent = "You've been matched with the following dogs:";
  }
  resultList.appendChild(matchText);



  for (var i = 0; i < likedImages.length; i++) {
    var imageSource = likedImages[i];

    var thumbnail = document.createElement("div"); //create div element
    var img = document.createElement("img"); //create img element
    thumbnail.setAttribute("class","thumb"); //give it the thumb attribute
    img.setAttribute("src", imageSource); //add src of likedImage[i] to img
    thumbnail.appendChild(img); //add img element to li element
    resultList.appendChild(thumbnail); //append to resultsList element (resultList.appendChild())
  }


  var allPhotos = document.querySelector('#allcards');
  console.log(allPhotos);
  allPhotos.setAttribute("class", "display-none");

}

//add event listener for like button to slideOutRight
var awwButton = document.querySelector(".like");

function slideOutRight(event){
  event.preventDefault();
  img.classList.add("slideOutRight");

  var picElement = document.querySelector( "#card-" + visibleCardID + "-img");
  var pic = picElement.getAttribute("src"); //"../final project/images/PacificHeights.jpg"

  likedImages.push(pic);

  hideImage();
}
  awwButton.addEventListener("click", slideOutRight);

//add event listener for meh button to slideOutLeft
var mehButton = document.querySelector(".dislike");

function slideOutLeft(event){
  event.preventDefault();
  img.classList.add("slideOutLeft");

  hideImage();
}
  mehButton.addEventListener("click", slideOutLeft);
