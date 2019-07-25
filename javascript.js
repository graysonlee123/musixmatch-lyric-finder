const apiKey = "d5de65c79f7e74381ecb55b7caad1609";

$("#find-movie").on("click", displayLyrics);

function displayLyrics(e) {
    e.preventDefault();
    
    const songName = $("#userInput").val();
    const corsAnywhere = "https://cors-anywhere.herokuapp.com/";
    const musixUrl = `${corsAnywhere}https://api.musixmatch.com/ws/1.1/track.search?apikey=${apiKey}&q_track=${songName}`;

    $.ajax({
        url: musixUrl,
        method: "GET"
    }).then(function (response) {
        console.log(response.json());
        const fetchedSongName = response.message.body;
    });
}

// $.ajax({
//     url: "https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?apikey=d5de65c79f7e74381ecb55b7caad1609&q_track=test",
//     method: "GET"
// }).then(function (response) {
//     console.log(response);
// });

// const apiKey = "d5de65c79f7e74381ecb55b7caad1609";

// $("#find-movie").on("click", displayLyrics);

// function displayLyrics(e) {
//     console.log("Fetching lyrics...");
//     e.preventDefault();

//     let songName = $("#userInput").val();
//     const musixUrl = `https://api.musixmatch.com/ws/1.1/track.search?apikey=${apiKey}&q_track=${songName}`;

//     $.ajax({
//         url: "https://api.musixmatch.com/ws/1.1/track.search?apikey=d5de65c79f7e74381ecb55b7caad1609&q_track=test",
//         method: "GET"
//     }).then(function (response) {
//         console.log(JSNO.stringify(response));
//     });
// }