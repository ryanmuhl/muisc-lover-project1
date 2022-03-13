var songContainer = document.querySelector("#song-list");
var songListArray = [];
//Click button then fetch artist data
$("#click-celebrity").click(function () {
  getArtistData();
  getSongLink()
});

//Function to fetch artist data
var getArtistData = function () {
  text = $("#type-artist-name").val();

  var requestUrl = "https://genius.p.rapidapi.com/search?q=" + text;

  fetch(requestUrl, {
    method: "GET",
    headers: {
      "x-rapidapi-host": "genius.p.rapidapi.com",
      "x-rapidapi-key": "ac9ab99d33msh3d2e68d58bcbf83p143df8jsn672a2b9e440d",
    },
  })
    .then(function (response) {
      return response.json();

    })
    .then(function (data) {
      var allSongs = data.response.hits; // are we only display the hits of the artist? we may need to make this clear to the user; Rihanna for example has over ten songs
      // console.log(data)
      // console.log(allSongs)

      for (var i = 0; i < allSongs.length; i++) {
        var artistSongList = allSongs[i].result.title;
        // console.log(artistSongList)

        var artistSongs = document.createElement("li");
        var artistSongsText = document.createElement("a")
        artistSongsText.textContent = artistSongList;

        artistSongsText.href = "#artistLink" ;



        songContainer.append(artistSongs);
        artistSongs.append(artistSongsText)



        songListArray.push(artistSongList);// push artist song list into this array
      }
      localStorage.setItem("text", JSON.stringify(songListArray));

      //  store for loop to local storage here - localStorage.setItem(text,jSON.stringify(the array)) artist name is key = array
    });
};
$()
var getSongLink = function() {

  var requestUrlLink = "https://shazam.p.rapidapi.com/search?term=kiss%20the%20rain&locale=en-US&offset=0&limit=5"
  
  fetch(requestUrlLink, {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "shazam.p.rapidapi.com",
      "x-rapidapi-key": "20462df53amsh8d0409a5e8b7f2fp1522cejsn8fa1bed5cd51"
    }
  })
  .then(function (response) {
    console.log(response)
    return response.json();
  })
}
//Fetch API info



//Function/Logic


//Make one function that makes call to shazam API and One functon that makes a call to the Genius API


//Need to make two API calls to get to genius


//User Input Variable will determine what information is pulled from the Genius API


//User Input Variable will determine what Lyrics will be pulled from the Shazam API


//Append the Data to the page


//Save to Local Storage


//pull from local storage and append to second html page




