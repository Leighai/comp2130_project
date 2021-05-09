function storage()
{
    let text = document.getElementById("info").value

    if(text == "storage")
    {
        var storageText = document.createElement('p');
        var linkText = document.createTextNode("storage");
        storageText.appendChild(linkText);
        storageText.href = "./storage.html";
        document.body.appendChild(storageText);
    }
}