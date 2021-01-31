
const chuckCategory = document.querySelector("select");
const chuckButton = document.getElementById("chuck");


const requestUrl = "https://api.giphy.com/v1/gifs/search?api_key=C45MMlNyrdjBOB9vgOy9BkNBfEhE4UOb&q=queen&limit=1&offset=0&rating=g&lang=en";


chuckButton.addEventListener("click", (e) => {
    e.preventDefault();
    fetch(`${requestUrl}`)
    .then((response) => {
        return response.json();
    })
    .then((parsedData) => {
        console.log("======>", parsedData.data[0].embed_url);
        document.querySelector("#one").src = parsedData.data[0].embed_url;

        // <iframe src="https://giphy.com/embed/l1KVcMMxJJpks23cs" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/thewhiteprincess-season-1-l1KVcMMxJJpks23cs">via GIPHY</a></p>
    })
    .catch((error) => {
        console.error("ERROR: ", error)
    });
})