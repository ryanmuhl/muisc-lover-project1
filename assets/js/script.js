<<<<<<< HEAD
var songContainer = document.querySelector("#song-list");
var songListArray = [];
//Click button then fetch artist data
$("#click-celebrity").click(function () {
  getArtistData();
});

//Function to fetch artist data
var getArtistData = function () {
  var text = $("#type-artist-name").val();

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
      console.log(allSongs);
      for (var i = 0; i < allSongs.length; i++) {
        var artistSongList = allSongs[i].result.title; 

        var artistSongs = document.createElement("li");

        artistSongs.textContent = artistSongList;
        console.log(artistSongList);
        songContainer.append(artistSongs);
        songListArray.push(artistSongList);// push artist song list into this array
      }
      localStorage.setItem("text", JSON.stringify(songListArray));

      //  store for loop to local storage here - localStorage.setItem(text,jSON.stringify(the array)) artist name is key = array
    });
};

// if(songContainer.hasChildren()){
//   songContainer.empty();
//   ---run the function to get the info---
//   } else {
//   ---run the function to get the info---
//   }

// function clearHistory(event){
//   event.preventDefault();
//   songListArray=[];
//   localStorage.removeItem("text");
//   document.location.reload();

//create an empty array to store all song titles, then after the for loop is complete save the array to local and give the array key of artist names//
//one array for the song titles, and second for the artist name another for the artist

//Fetch API info

//Function/Logic

//Make one function that makes call to shazam API and One functon that makes a call to the Genius API

//Need to make two API calls to get to genius

//User Input Variable will determine what information is pulled from the Genius API

//User Input Variable will determine what Lyrics will be pulled from the Shazam API

//Append the Data to the page

//Save to Local Storage

//pull from local storage and append to second html page
=======
//Research API Documentation


//Add API scripts


//Need to declare Variables one Being a Function


//Query Selector for click me Buttons



//Fetch API info


//Function/Logic 


//User Input Variable will determine what information is pulled from the Genius API


//User Input Variable will determine what Lyrics will be pulled from the Shazam API


//Append the Data to the page


//Save to Local Storage


//pull from local storage and append to second html page




>>>>>>> 7d7801a899ca3f1ee881d2b803340e9a6328dd69
