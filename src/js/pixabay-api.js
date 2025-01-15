import { renderGallery } from "./render-functions";

export const fetchImg = (userQuery, gallery, queryInput) => {
    fetch(`https://pixabay.com/api/?q=${userQuery}&key=39635982-91d856b8fc78635a8aaf79b21&image_type=photo&orientation=horizontal&safesearch=true`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }

            gallery.innerHTML = '';
            queryInput.value = '';
            return response.json();
        })
        .then(imagesArr => {
            if (imagesArr.total === 0) {
            iziToast.show({
                message: 'Sorry, there are no images matching your search query. Please try again!',
                messageColor: 'white',
                messageSize: '30',
                messageLineHeight: '',
                backgroundColor: 'red',
                theme: 'light',
                color: '',
            })
            }

            let galleryHTML = [];
            imagesArr.hits.map(imageEl => {
                galleryHTML.push(renderGallery(imageEl));
            })

            galleryHTML.join('');
            gallery.insertAdjacentHTML('beforeend', galleryHTML);
        })
}