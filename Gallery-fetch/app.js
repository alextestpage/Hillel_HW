const ALBUMS_URL = 'https://jsonplaceholder.typicode.com/albums';
const PHOTOS_URL = 'https://jsonplaceholder.typicode.com/photos?albumId={{id}}';

const ALBUMS = document.getElementById('albums');
const IMAGES = document.getElementById('images');
albums.addEventListener('click', onAlbumItemClick);

initState();

function initState() {
    fetchAlbums()
        .then(setFirstAlbumImages);
}

function fetchAlbums() {
    return fetch(ALBUMS_URL)
        .then((response) => response.json())
        .then((data) => {
            renderAlbums(data);
            return data
        });
}

function renderAlbums(data) {
    ALBUMS.innerHTML = data
        .map((album) => generateAlbumsHtml(album))
        .join('\n');
}

function generateAlbumsHtml(album) {
    return `<div class="album-item" data-id="${album.id}">${album.id} ${album.title}.</div>`
}

function setFirstAlbumImages(data) {
    fetchImages(data[0].id);
}

function fetchImages(albumId) {
    return fetch(getImagesUrl(albumId))
        .then((resp) => resp.json())
        .then(renderImages);
}

function getImagesUrl(albumId) {
    return PHOTOS_URL.replace('{{id}}', albumId);
}

function renderImages(data) {
    IMAGES.innerHTML = data
        .map((image) => generateImageHtml(image))
        .join('\n');
}

function generateImageHtml(image) {
    return `<img class="photo-item" src="${image.thumbnailUrl}" alt="${image.title}"/>`
}

function onAlbumItemClick(e) {
    if (e.target.classList.contains('album-item')) {
        fetchImages(e.target.dataset.id);
    }
}