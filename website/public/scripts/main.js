
document.addEventListener('DOMContentLoaded', async function() {
    await displayPhotos();
  });

async function displayPhotos()
{    
    console.debug("Getting photos...")
    var containerOne = document.getElementById("column1");
    var containerTwo = document.getElementById("column2");
    containerOne.innerHTML = "";
    containerTwo.innerHTML = "";
    var response;
    try
    {
        response = await fetch("http://localhost:3000/filenames");
        if (!response.ok)
        {
            console.error('Could not get filenames on release port');
            return;
        }
    }
    catch
    {
        response = await fetch("http://localhost:9090/filenames");
        if (!response.ok) return;
    }
    

    const data = await response.json();
    imageLocations = data;
    console.log(imageLocations);
    var isColumnOne = true;
    for (var i = 0; i < imageLocations.length; i++)
    {
        col = containerTwo;
        if (isColumnOne)
        {
            col = containerOne;
        }
        if (!imageLocations[i].endsWith(".png") && !imageLocations[i].endsWith(".jpg"))
        {
            console.debug("skipping over: " + imageLocations[i]);
            continue;
        }

        var imageElement = CreateImage('photos/' + imageLocations[i]);
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
