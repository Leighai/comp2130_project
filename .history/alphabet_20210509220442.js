function abc()
{
  // loop through characters 
    for(let i = 'z'.charCodeAt(0); i >= 'a'.charCodeAt(0); i--)
    {
        let letter = String.fromCharCode(i)

        // create img in each run of loop + make src ".png"
        let image = document.createElement('img')
        image.src = "letters/" + letter + ".png"
        image.id = letter
        image.width = 40
        
        document.getElementById('stage').appendChild(image)
    }
    

    let allImages = document.getElementsByTagName("img")
    // console.log(allImage)

    for(i = 0; i < allImages.length; i++)
    {
        // console.log(allImage[i].src)
        allImages[i].onclick = function()
        {
            let character = this.id
            // this = who has been clicked, target id in all images 
            for (j = 0; j <allImages.length; j++)
            {
                allImages[j].src = "letters/" + character + ".png"
            }
        }
    }
}
