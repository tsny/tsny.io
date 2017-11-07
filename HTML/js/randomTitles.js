var titles = new Array
(
    'Intrinscly Scattered',
    'Test Title; Ignore',
    'Austin = DND Lord',
    '404, Just Kidding',
    'More Like Destiny Poo',
    'M-I-Z',
    'Z-O-U',
    'Just like Minecraft',
    'Turn on/off again',
    'Gramma?',
    'Hey spacer',
    'Remember Dead Space?'
);

function getTitle()
{
    var randomIndex = Math.floor(Math.random() * (titles.length - 1)) + 1;
    return titles[randomIndex];
}

function setTitle()
{
    document.title = getTitle();
    RandomWord();
}

function RandomWord() 
{
    var requestStr = "http://randomword.setgetgo.com/get.php";

    $.ajax({
        type: "GET",
        url: requestStr,
        dataType: "jsonp",
        jsonpCallback: 'RandomWordComplete'
    });
}

function RandomWordComplete(data) 
{
    alert(data.Word);
}
    
