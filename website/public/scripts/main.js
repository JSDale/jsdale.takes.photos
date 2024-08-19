
function displayPhotos()
{    
    var imageLocations = [
        "photos/knowlton1.jpg", 
        "photos/knowlton2.jpg", 
        "photos/knowlton3.jpg", 
        "photos/IMG_0744.jpg",
        "photos/IMG_0746.jpg",
        "photos/IMG_0757.jpg",
        "photos/IMG_0768.jpg",
        "photos/IMG_1154.jpg",
        "photos/IMG_7936.jpg",
        "photos/DSC0402.jpg",
        "photos/MG_1312.jpg",
        "photos/MG_1340.jpg",
        "photos/MG_2157.jpg",
        "photos/MG_2176.jpg",
        "photos/MG_2227.jpg",
        "photos/f1-10.jpg",
        "photos/f1-4.jpg",
        "photos/f1-5.jpg",
        "photos/f1-6.jpg",
        "photos/f1-8.jpg",
        "photos/f1-9.jpg",
        "photos/honeymoon1.jpg",
        "photos/honeymoon2.jpg",
        "photos/honeymoon3.jpg",
    ];

    var containerOne = document.getElementById("column1");
    var containerTwo = document.getElementById("column2");
    containerOne.innerHTML = "";
    containerTwo.innerHTML = "";

    var isColumnOne = true;
    for (var i = 0; i < imageLocations.length; i++)
    {
        col = containerTwo;
        if (isColumnOne)
        {
            col = containerOne;
        }
        var imageElement = CreateImage(imageLocations[i]);
        col.appendChild(imageElement);
        isColumnOne = !isColumnOne;
    }
}

function CreateImage(filepath)
{
    var imageSrc = filepath;
    console.log(filepath);
    var imgElement = document.createElement("img");
    imgElement.style.display = 'flex'
    imgElement.style.flexWrap = 'no-wrap'
    imgElement.oncontextmenu = function(){return false};
    imgElement.src = imageSrc;
    var figure = document.createElement('figure');
    figure.appendChild(imgElement);
    return figure;
}
