const apiKey = "d5de65c79f7e74381ecb55b7caad1609";
let trackID;

function displayLyrics() {
    
    const userSearch = $("#userInput").val();
    const corsAnywhere = "http://cors-anywhere.herokuapp.com/";
    const musixUrl = `${corsAnywhere}http://api.musixmatch.com/ws/1.1/track.search?apikey=${apiKey}&q=${userSearch}&s_track_rating=desc`;

    $.ajax({
        url: musixUrl,
        method: "GET"
    }).then(function (responseString) {
        let response = JSON.parse(responseString);
        response = response.message.body;
        trackID = response.track_list[0].track.track_id;
        console.log("Track ID: " + trackID)
        console.log(response);
        console.log("Track name: " + response.track_list[0].track.track_name);
        console.log("Artist name: " + response.track_list[0].track.artist_name);
        console.log("Album name: " + response.track_list[0].track.album_name);
        // grabs first song's name
    }).then(function() {
        $.ajax({
            url: `${corsAnywhere}http://api.musixmatch.com/ws/1.1/track.lyrics.get?apikey=${apiKey}&track_id=${trackID}`,
            method: "GET"
        }).then(function (lyricResponseString) {
            let lyricResponse = JSON.parse(lyricResponseString);
            lyricResponse = lyricResponse.message.body.lyrics.lyrics_body;
            $("#lyricsContainer").text(lyricResponse);
        });
    });
}