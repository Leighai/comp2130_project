function callAjax()
{
    var xhttp = new XMLHttpRequest()

    var textH1 = document.createElement('h1')
    stage.append(textH1)
    
    xhttp.onreadystatechange = function()
    {
        if(this.readyState == 4 && this.status ==200)
        {
            text= JSON.parse(this.responseText)
            word = ""

            for(i in text){
                word += text[i] + " "
                textH1.innerHTML = word.toUpperCase() 
            }
        }
    }
    xhttp.open('get', 'advice.txt', true)
    xhttp.send()
} 
