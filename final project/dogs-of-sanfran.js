
//global variables
var visibleCardID = 1;
var img = document.querySelector("#card-" + visibleCardID);
var likedImages = [];

//SHOW AND HIDE IMAGES
function hideImage() {
  img.classList.add("hide"); //add hide class
  visibleCardID = visibleCardID + 1;
  img = document.querySelector("#card-" + visibleCardID);

  if (visibleCardID > 14){
    showMeResults();
  }
 }

//SHOW LIKED IMAGE RESULTS
function showMeResults(){
  var resultList = document.querySelector(".results-list");
  var matchText = document.createElement("h2");

  //adopt link
  var textLink = document.createElement('a');
  var body = document.querySelector("body");
  textLink.textContent = "Feel like adopting a puppy?";
  textLink.href = "https://www.sfspca.org/adoptions/dogs";
  body.appendChild(textLink);

  //results page message
  if (likedImages.length === 0) {
    matchText.textContent = "You didn't like any dogs. Lame!";
  } else {
    matchText.textContent = "You've been matched with the following dogs:";
  }
  resultList.appendChild(matchText);

  //liked images for loop
  for (var i = 0; i < likedImages.length; i++) {
    var imageSource = likedImages[i];
    var thumbnail = document.createElement("div"); //create thumbnail element
    var img = document.createElement("img"); //create img element
    thumbnail.setAttribute("class","thumb"); //give the thumbnail a class
    img.setAttribute("src", imageSource); //add src of likedImages[i] to img
    thumbnail.appendChild(img); //add img element to li element
    resultList.appendChild(thumbnail); //append to resultsList element (resultList.appendChild())
  }

  //hide all 14 cards
  var allPhotos = document.querySelector('#allcards');
  allPhotos.setAttribute("class", "display-none");
}

//SLIDE OUT RIGHT - event handler for like button to slideOutRight
var awwButton = document.querySelector(".like");
function slideOutRight(event){
  event.preventDefault();
  img.classList.add("slideOutRight");

  var picElement = document.querySelector( "#card-" + visibleCardID + "-img");
  var pic = picElement.getAttribute("src"); //"../final project/images/PacificHeights.jpg"

  likedImages.push(pic); //add new item to the liked images
  hideImage();
}
  awwButton.addEventListener("click", slideOutRight);

//SLIDE OUT LEFT - event handler for dislike button to slideOutLeft
var mehButton = document.querySelector(".dislike");
function slideOutLeft(event){
  event.preventDefault();
  img.classList.add("slideOutLeft");
  hideImage();
}
  mehButton.addEventListener("click", slideOutLeft);
