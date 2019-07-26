const apiKey = "d5de65c79f7e74381ecb55b7caad1609";

function displayLyrics() {
    
    const songName = $("#userInput").val();
    const corsAnywhere = "http://cors-anywhere.herokuapp.com/";
    const musixUrl = `${corsAnywhere}http://api.musixmatch.com/ws/1.1/track.search?apikey=${apiKey}&q_track=${songName}`;

    $.ajax({
        url: musixUrl,
        method: "GET"
    }).then(function (responseString) {
        let response = JSON.parse(responseString);
        response = response.message.body;
        console.log(response.track_list[0].track.track_name);
        console.log(response.track_list[0].track.artist_name);
        console.log(response.track_list[0].track.album_name);
        // grabs first song's name
    });
}