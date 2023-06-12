
function displayPhotos()
{
    var container = document.getElementById("photoContainer");

    var imageLocations = [
        "photos/DSC_0081.jpg",
        "photos/DSC_0091.jpg",
        "photos/DSC_0125.jpg",
        "photos/DSC_0128.jpg",
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
