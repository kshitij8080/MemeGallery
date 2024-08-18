let cardContainer = document.getElementById('cardContainer');
let loader = document.getElementById('loader');
let url = "https://api.imgflip.com/get_memes";

loader.style.display = 'block';

fetch(url)
    .then(response => response.json())
    .then(meme => {
        let memes = meme.data.memes;
        let ihtml = "";

        for (let item of memes) {
            ihtml += `
            <div class="card mb-4 shadow-sm">
                <img src="${item.url}" class="card-img-top" alt="${item.name}">
                <div class="card-body">
                    <h5 class="card-title">${item.name}</h5>
                    <a href="${item.url}" class="btn btn-primary" target="_blank">View Full Meme</a>
                </div>
            </div>
            `;
        }
        cardContainer.innerHTML = ihtml;
        loader.style.display = 'none';
    })
    .catch(error => {
        console.error('Error fetching memes:', error);
        cardContainer.innerHTML = '<p class="text-danger">Failed to load memes. Please try again later.</p>';
        loader.style.display = 'none';
    });