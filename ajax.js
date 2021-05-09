var ajaxExample = new XMLHttpRequest();

function ajax()
{

    var text = document.createElement("h1");
    var quote = JSON.parse(text)
    let adviceText = ajaxExample.responseText

    // text.innerText = text.toUpperCase();
    text.id= "advice"
    document.body.appendChild(text);

    ajaxExample.open("get", "advice.txt", true)
    ajaxExample.onreadystatechange = function()
    {
        document.getElementById("advice").innerHTML = stringfy(adviceText).toUpperCase() 
    }

    ajaxExample.send(null) 
}

ajax()