//TODO: Інтерактивна галерея

//* Import libraries
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

//* Import modules
import { renderGallery } from "./js/render-functions";
import { fetchImg } from "./js/pixabay-api";

//* Find elements
const queryForm = document.querySelector('.user-query-form'); 
const queryInput = document.querySelector('.user-query-input'); 
const queryBtn = document.querySelector('.user-query-btn');
const gallery = document.querySelector('.galley-list');

const onFormSubmit = event => {
    event.preventDefault();
    const userQuery = queryInput.value.trim();

    if (userQuery === '') {
        iziToast.show({
                message: 'Please fill the gap!',
                messageColor: 'white',
                messageSize: '30',
                messageLineHeight: '',
                backgroundColor: 'red',
                theme: 'light',
                color: '',
            }
    );

        return;
    }

    fetchImg(userQuery, gallery, queryInput);
}

queryForm.addEventListener('submit', onFormSubmit);