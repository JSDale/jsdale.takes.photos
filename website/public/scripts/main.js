
function displayPhotos(imageLocations)
{   
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
