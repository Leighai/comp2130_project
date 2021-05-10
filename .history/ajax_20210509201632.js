function callAjax()
{
    var xhttp = new XMLHttpRequest()
    
    xhttp.onreadystatechange = function()
    {
        if(this.readyState == 4 && this.status ==200)
        {
            text= JSON.parse(this.responseText)
            word = ""

            for(i in text){
                word += text[i] + " "
                stage.innerHTML = word.toUpperCase()
            }
        }
    }
    xhttp.open('get', 'advice.txt', true)
    xhttp.send()
<<<<<<< HEAD
} 
=======
} 

// textbox has the word “ajax” in it, then create an XMLHttpRequest object 
// GET request to read data from a text file named “advice.txt”
// h1 object (use document.createElement and document.body.appendChild) in UPPERCASE
//  advice in advice.txt is actually an array of words in JSON format
>>>>>>> main
