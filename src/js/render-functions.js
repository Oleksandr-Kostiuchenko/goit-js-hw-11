export const renderGallery = imageEl => {
    return `
    <li class="gallery-item">
        <img class="gallery-image" src="${imageEl.webformatURL}" alt="${imageEl.tags}">
        
        <div class='description-image'>
        <p>
        Likes <br>
        ${imageEl.likes}
        </p>
        <p>
        Views <br>
        ${imageEl.views}
        </p>
        <p>
        Likes <br>
        ${imageEl.likes}
        </p>
        <p>Downloads <br>
        ${imageEl.comments}</p>

        </div>
    </li>`
}