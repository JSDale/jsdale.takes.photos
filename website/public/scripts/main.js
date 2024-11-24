
window.DisplayPhotos = async function displayPhotos(fetchRequest)
{
    console.debug("Getting photos...")
    var containerOne = document.getElementById("column1");
    var containerTwo = document.getElementById("column2");
    containerOne.innerHTML = "";
    containerTwo.innerHTML = "";
    var response;
    try
    {
        response = await fetch(fetchRequest);
        if (!response.ok)
        {
            console.error('Could not get filenames on release port');
            return;
        }
    }
    catch
    {
        console.debug('could not get photos...')
    }

    const data = await response.json();
    let imageLocations = data;
    console.log(imageLocations);
    var isColumnOne = true;
    for (var i = 0; i < imageLocations.length; i++)
    {
        let col = containerTwo;
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
