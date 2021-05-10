

function addAlien()
{
    let box = document.createElement('div')
    box.id = 'box'
    box.style.width = '600px'
    box.style.height = '400px'
    box.style.margin = '20px 20px 0 20px'
    box.style.backgroundColor = '#E8F9FF'
    box.style.position = 'relative'

    let floor = document.createElement('div')
    floor.id = 'floor'
    floor.style.width = '600px'
    floor.style.height = '80px'
    floor.style.margin = '0 20px'
    floor.style.backgroundColor = 'grey'
    floor.style.position = 'relative'
    
    let alien = document.createElement('img')
    alien.src = './alien/alienlwalk0.gif'
    alien.id = 'alien'
    alien.style.position = 'absolute'
    alien.style.bottom='0'
    alien.style.left='280px'

    document.getElementById('stage').append(box, floor)
    document.getElementById('box').append(alien)
}


var steps = 0

function moveAlien(d)
{   
    alien.style.left = parseInt(alien.style.left) - 1 + 'px'

    steps = steps+1   
    if(steps >= 30)
    {
        steps = 0
    }
    alien.src = './alien/alienlwalk' + steps + '.gif'
    
    edgeChecker(d)
}

function backAlien(d)
{   
    alien.style.left = parseInt(alien.style.left) + 1 + 'px'

    steps = steps+1   
    if(steps >= 30)
    {
        steps = 0
    }
    alien.src = './alien/alienrwalk' + steps + '.gif'

    edgeChecker(d)
}


function edgeChecker(m)
{
    alienL = alien.offsetLeft

    if( alienL > -35 && alienL < -20)
    {
        if(m == 'walk')
        {
            alienBack(m)
        }
        else if ( m == 'run')
        {
            alienRunBack(m)
        }
    }
    else if(alienL > 525 && alienL < 540)
    {
        if(m == 'walk')
        {
            alienWalk(m)
        }
        else if ( m == 'run' )
        {
            alienRun(m)
        }
    }
}

function alienWalk(data)
{  
    if( document.getElementById('alien') == null )
    {
        cleanStage()
        addAlien()
    }

    if( timer == null )
    {
        timer = setInterval(moveAlien, 100, data)
    }
    else
    {
        clearInterval(timer)
        timer = setInterval(moveAlien, 100, data)
    }
}

function alienBack(data)
{
    if( timer == null )
    {
        timer = setInterval(backAlien, 100, data)
    }
    else
    {
        clearInterval(timer)
        timer = setInterval(backAlien, 100, data)
    }
}

function alienRun(data)
{
    if( document.getElementById('alien') == null )
    {
        cleanStage()
        addAlien()
    }
    
    if( timer == null )
    {
        timer = setInterval(moveAlien, 10, data)
    }
    else
    {
        clearInterval(timer)
        timer = setInterval(moveAlien, 10, data)
    }
}

function alienRunBack(data)
{
    if( timer == null )
    {
        timer = setInterval(backAlien, 10, data)
    }
    else
    {
        clearInterval(timer)
        timer = setInterval(backAlien, 10, data)
    }
}

function alienStop()
{
    clearInterval(timer)
}