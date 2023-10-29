
function displayPhotos()
{
    var container = document.getElementById("photoContainer");

    var imageLocations = [
        "photos\_honeymoon1.jpg",
        "photos\_honeymoon2.jpg",
        "photos\_honeymoon3.jpg",
        "photos\_honeymoon4.jpg",
        "photos\f1-1.jpg",
        "photos\f1-10.jpg",
        "photos\f1-11.jpg",
        "photos\f1-12.jpg",
        "photos\f1-2.jpg",
        "photos\f1-3.jpg",
        "photos\f1-4.jpg",
        "photos\f1-5.jpg",
        "photos\f1-6.jpg",
        "photos\f1-7.jpg",
        "photos\f1-8.jpg",
        "photos\f1-9.jpg",
        "photos\haloween23-1.jpg",
        "photos\haloween23-2.jpg",
        "photos\haloween23-3.jpg",
        "photos\haloween23-4.jpg",
        "photos\haloween23-5.jpg",
        "photos\haloween23-6.jpg",
        "photos\haloween23-7.jpg"
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
