// // This is what the data returning from IMDB will look like:
// var sampleResult = {
//   "Search": [
//     {
//       "Title": "Cool Runnings",
//       "Type": "movie",
//       "Year": "1993",
//       "imdbID": "tt0106611"
//     }
//   ]
// }

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

    var li = $("<li>");
    var title = $("<div>");
    var link = $("<a>");
    var date = $("<div>");
    var ul = $("#movies");

    console.log(link);

    li.attr("class", "movie");
    title.attr("class", "movie-title");
    link.attr("href", "http://www.imdb.com/title/" + movieArray[i]["imdbID"]);
    link.attr("target", "_blank");
    date.attr("class", "movie-release-date");

    link.text = movieArray[i]["Title"];
    date.text = movieArray[i]["Year"];

    title.append(link);
    li.append(title);
    ul.append(li);
    li.append(date);
  }

}

// // Access the array of movies:
// results["Search"]
//
// // Access the first movie title
// results["Search"][0]["Title"]
