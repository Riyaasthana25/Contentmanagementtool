document.addEventListener("DOMContentLoaded", function (){
    const contentItemsList = document.getElementById("content-items");
    const titleInput = document.getElementById("heading");
    const bodyInput = document.getElementById("writecontent");
    const imageInput = document.getElementById("picture");
    const videoInput = document.getElementById("video");
    const addContentButton = document.getElementById("add-content");
    addContentButton.addEventListener("click", function () {
        const heading = titleInput.value;
        const writecontent = bodyInput.value;
        const pictureFile = imageInput.files[0];
        const videoFile = videoInput.files[0];
        if (heading && (writecontent || pictureFile || videoFile)) {
            const contentItem = document.createElement("li");
            let contentHtml = `<h3>${heading}</h3>`;
            if (writecontent){
                contentHtml += `<p>${writecontent}</p>`;
            }
            if (pictureFile){
                contentHtml += `<img src="${URL.createObjectURL(pictureFile)}" alt="Image">`;
            }
            if (videoFile){
                contentHtml += `<video controls><source src="${URL.createObjectURL(videoFile)}" type="video/mp4">Your browser does not support the video tag.</video>`;
            }
            contentItem.innerHTML = contentHtml;
            contentItemsList.appendChild(contentItem);
            titleInput.value = "";
            bodyInput.value = "";
            imageInput.value = "";
            videoInput.value = "";
        }
    });
});
