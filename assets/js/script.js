//Declair Global Variables
var songContainer = document.querySelector("#song-list");
var videoContainer = document.querySelector("#text-list");
var list = document.querySelector("#favorites")


//Click button to fetch Artist Data/Top 10 Songs for Artist
$("#click-celebrity").click(function () {
  getArtistData();

});

//Function to fetch data from Genius API
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
      var allSongs = data.response.hits;

      $(songContainer).empty()
      for (var i = 0; i < allSongs.length; i++) {
        var artistSongList = allSongs[i].result.title;

        //Append List of top 10 songs to DIV/UL
        //Assign each Li an unique id
        var artistSongs = document.createElement("li");
        var artistSongsText = document.createElement("a")
        artistSongsText.textContent = artistSongList;


        artistSongsText.setAttribute('id', "artist-" + i);

        artistSongs.append(artistSongsText)
        songContainer.append(artistSongs);

      }

      //Create Click Event for each Song within top 10 Song List
      //This allows user to click on song and fetch Shazam API info
      for (i = 0; i < 10; i++) {

        //click event to target feth data from Genius API 
        document.getElementById("artist-" + i).addEventListener("click", nextAPI)

      }

    });
};

//Function to target click event within get Artist Data and pass songName
//to getSongLink parameter
function nextAPI(event) {

  $("#text-list").empty()
  var songName = event.target.text
  getSongLink(songName)

}

//Function to Fetch Shazam API
function getSongLink(param) {


  var requestUrlLink = "https://shazam.p.rapidapi.com/search?term=" + param + "&locale=en-US&offset=0&limit=5"

  fetch(requestUrlLink, {
    "method": "GET",
    "headers": {
      'x-rapidapi-host': 'shazam.p.rapidapi.com',
      'x-rapidapi-key': 'ac9ab99d33msh3d2e68d58bcbf83p143df8jsn672a2b9e440d'
    }
  })
    .then(function (response) {

      return response.json();
    })
    .then(function (data) {

      var textList = data.tracks.hits
      var videoTextList = textList[0].track.share.href;
      var textListVideo = document.createElement("li");
      var textListVideoA = document.createElement("a");
      textListVideoA.setAttribute("href", videoTextList)
      textListVideoA.setAttribute("target", "_blank")

      //Append song link/url to song link field
      videoContainer.append(textListVideo)
      textListVideo.append(textListVideoA)
      textListVideoA.append(videoTextList)

      loadingPlaylistText(videoTextList)


    });

};

//Function to keep local storage persistant when page reloads (Song List remains when page reloads)
function loadingPlaylistText(songUrl) {

  var songListArray = JSON.parse(window.localStorage.getItem("text")) || [];

  if (songUrl) {
    songListArray.push(songUrl);
  }

  localStorage.setItem("text", JSON.stringify(songListArray));

  saveClick(songListArray)

}

//function to Save to local storage when an individual song link is selected
function saveClick(info) {
  $(list).empty()
  for (i = 0; i < info.length; i++) {
    var listContent = document.createElement("li")
    listContent.textContent = (info[i])
    list.append(listContent)
  }

}

//function to Clear Playlist/Local Storage when button is selected (Also reloads browser)
$("#clear-playlist").click(function () {
  if ("clear-playlist") {
    $(favorites).empty()
  }
  localStorage.clear();
  window.location.reload();

});

//function to Clear List of Songs and URL (Also reloads browser)
$("#clear").click(function () {
  var clearAllLists = document.getElementById("song-list")
  $(clearAllLists).empty()
  $(clear).empty()
  window.location.reload();


});

loadingPlaylistText()










