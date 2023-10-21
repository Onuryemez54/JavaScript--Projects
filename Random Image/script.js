
const configurations = {
  api_key: '', //Please enter your own api key
  api_base_url: 'https://api.unsplash.com/photos/random',
  number_of_images_to_fetch: 4,
}

const image_url = `${configurations.api_base_url}?client_id=${configurations.api_key}&count=${configurations.number_of_images_to_fetch}`;

const button = document.getElementById('fetch-button');
const container = document.getElementById('image-container');

function fetchImages() {

  container.innerHTML = '';

  fetch(image_url)
    .then(response => response.json())
    .then(data => {
      data.map(img => {
        const imageDiv = document.createElement('div');
        imageDiv.classList.add('image-div');

        const newImg = document.createElement('img');
        newImg.src = img.urls.regular;

        imageDiv.appendChild(newImg);
        container.appendChild(imageDiv);
      })
        .catch(err => console.log(err));
    })

}


window.addEventListener('load', fetchImages);
button.addEventListener('click', fetchImages);

