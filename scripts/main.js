
function displayPhotos()
{
    var container = document.getElementById("photoContainer");

    var imageLocations = [
        "DSC_0081.jpg",
        "DSC_0091.jpg",
        "DSC_0125.jpg",
        "DSC_0128.jpg",
        "IMG_0016.jpg",
        "IMG_0036.jpg",
        "IMG_0096.jpg",
        "IMG_0237.jpg",
        "IMG_9554.jpg",
        "IMG_9555.jpg",
        "IMG_9573.jpg",
        "IMG_9594.jpg",
        "IMG_9647.jpg",
        "IMG_9857.jpg",
        "IMG_9950.jpg",
        "IMG_9955.jpg"
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
