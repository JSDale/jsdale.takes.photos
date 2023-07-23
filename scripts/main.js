
function displayPhotos()
{
    var container = document.getElementById("photoContainer");

    var imageLocations = [
        "photos/DSC_0081.jpg",
        "photos/DSC_0091.jpg",
        "photos/DSC_0125.jpg",
        "photos/DSC_0128.jpg",
        "photos/IMG_0016.jpg",
        "photos/IMG_0036.jpg",
        "photos/IMG_0096.jpg",
        "photos/IMG_0237.jpg",
        "photos/IMG_9554.jpg",
        "photos/IMG_9555.jpg",
        "photos/IMG_9573.jpg",
        "photos/IMG_9594.jpg",
        "photos/IMG_9647.jpg",
        "photos/IMG_9857.jpg",
        "photos/IMG_9950.jpg",
        "photos/IMG_9955.jpg"
    ];

    container.innerHTML = "";

    for (var i = 0; i < imageLocations.length; i++)
    {
        var imageSrc = imageLocations[i];
        var imgElement = document.createElement("img");
        imgElement.oncontextmenu = function(){return false};
        imgElement.src = imageSrc;

        container.appendChild(imgElement);
    }

    for (var i = 0; i < imageLocations.length; i++)
    {
        console.log(container.children[i]);
    }
}
