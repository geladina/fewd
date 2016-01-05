// This is what the data returning from IMDB will look like:
var sampleResult = {
  "Search": [
    {
      "Title": "Cool Runnings",
      "Type": "movie",
      "Year": "1993",
      "imdbID": "tt0106611"
    }
  ]
}

// Attach an event listener to the form submit (using jQuery)
$("#movie-search-form").submit(formSubmitted);

// Handle the form submission: go to OMDB and get results
function formSubmitted(event) {
  event.preventDefault();
  var url = "http://omdbapi.com/?s=" + $("#query").val();
  $.get(url, resultsReceived);
}

function resultsReceived(results) {
  // Try putting a debugger here and inspecting the results argument
  // The array of movies lives inside results["Search"]
  // See the sampleResult above for an example
console.log(results);

 var movieArray = results["Search"];

  for (var i = 0; i < movieArray.length; i++) {

    var li = document.createElement("li");
    var title = document.createElement("div");
    var link = document.createElement("a");
    var date = document.createElement("div");
    var ul = document.querySelector("#movies");

    console.log(link);

    li.setAttribute("class", "movie");
    title.setAttribute("class", "movie-title");
    link.setAttribute("href", "http://www.imdb.com/title/" + movieArray[i]["imdbID"]);
    link.setAttribute("target", "_blank");
    date.setAttribute("class", "movie-release-date");

    link.textContent = movieArray[i]["Title"];
    date.textContent = movieArray[i]["Year"];

    title.appendChild(link);
    li.appendChild(title);
    ul.appendChild(li);
    li.appendChild(date);
  }

}

// // Access the array of movies:
// results["Search"]
//
// // Access the first movie title
// results["Search"][0]["Title"]
