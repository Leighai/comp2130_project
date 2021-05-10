function abc()
{
    for(let i = 'z'.charCodeAt(0); i >= 'a'.charCodeAt(0); i--)
    {
        let letter = String.fromCharCode(i)

        let image = document.createElement('img')
        image.src = "letters/" + letter + ".png"
        image.id = letter
        image.width = 40
        
        document.getElementById('stage').appendChild(image)
    }

    let allImages = document.getElementsByTagName("img")

    for(i = 0; i < allImages.length; i++)
    {
        allImages[i].onclick = function()
        {
            let character = this.id
            for (j = 0; j <allImages.length; j++)
            {
                allImages[j].src = "letters/" + character + ".png"
            }
        }
    }
}
