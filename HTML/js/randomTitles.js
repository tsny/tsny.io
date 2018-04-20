var titles = new Array
(
    'Intrinscly Scattered', 'RIP Muse',
    'Test Title; Ignore', 'RIP Bungie.net',
    'Austin = DND Lord', 'You may have heard of me',
    '404, Just Kidding', 'More Like Destiny Poo',
    'M-I-Z', 'Z-O-U',
    'Just like Minecraft', 'Turn on/off again',
    'Gramma?', 'Hey spacer',
    'Remember Dead Space?', 'Will Mock was here',
    'Tommy the tertl', 'Mae Mae the Brave',
    'There was a lady from venus', 'Burn sky til we see lines',
    'Remember JSRF?', 'Call me maybe',
    'Just in time for *holiday*', 'Popculture Reference',
    'F5 F5 F5 F5', 'Bring back space sims', 
    'Time for school', 'How many clowns?',
    'Cmon Josh', 'Go tigers',
    'The tsny', 'Thats so parrfect',
    'Home of Ryans Laugh', 'RIP Noto',
    'Return the slab', '90s kids only',
    'Uhhh I dunno', 'Nickel the Pickle',
    'tsny the swell guy', 'jake308 was here',
    'the faust haus', 'apple bies?',
    'RIP Papa John'
);

var specChanges = new Array
(
        "Add 1 More Window!",
        "Add 2 More Windows!",
        "Add 3 More Windows!",
        "Add 4 More Windows!",
        "Add 5 More Windows!",
        "Add 1 More Door!",
        "Add 2 More Doors!",
        "Add 3 More Doors!",
        "Add 4 More Doors!",
        "The windows are square!",
        "Add 10 Antennas!",
        "We forgot phones! Multiple Telephone Lines outside!",
        "Wait... No more windows!",
        "No windows on the 1st floor!",
        "There's 3 Windows on the Second Floor!",
        "There's 6 Windows on the Second Floor!",
        "There's 8 Windows on the First Floor!",
        "There's 3 Windows on the Third Floor!",
        "Add 6 floors!",
        "Add 3 floors!",
        "Add 4 floors!",
        "Add 5 floors!",
        "There's a park next door!",
        "There's an orphanage next door!",
        "Add more solar panels!",
        "There's an airport nearby!",
        "There's a billboard nearby, about cake!",
        "There's a billboard nearby, about dogs!",
        "There's a billboard nearby, about cats!",
        "There's a billboard nearby, about church!",
        "There's a billboard nearby, about TV!",
        "There's a billboard nearby, about bananas!",
        "There's a parade going on in the street!",
        "The windows are circular!",
        "Half the windows are open!",
        "Half the windows are circular!",
        "Close those windows!",
        "There's a parade on the roof!",
        "The moon's out!",
        "The sun is huge!",
        "A plane is taking off!",
        "There's 3 planes in the air!",
        "The sewer is overflowing!",
        "The building is brick!",
        "It's Christmas!",
        "It's Easter!",
        "It's St. Patties!",
        "The President is visiting!",
        "It's Rush Hour!",
        "Oh crap, its super windy!",
        "Oh its super cloudy!",
        "No more clouds!",
        "Add 3 more clouds!",
        "Add 2 more clouds!",
        "It's raining!",
        "It's snowing!",
        "Alien invasion!",
        "It's a tide ad!",
        "The patriots won!",
        "The blues won!",
        "Mizzou logos everywhere!",
        
)

function getTitle()
{
    var randomIndex = Math.floor(Math.random() * (titles.length - 1)) + 1;
    return titles[randomIndex];
}

function setTitle()
{
    document.title = getTitle();
}

var duration = 10;
var display;
var specs;
var beginButton;

function StartTimer() 
{
    GetNewSpec();
    
    beginButton.disabled = true;
    beginButton.style.visibility = "hidden";
    
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) 
        {
            timer = duration;
            GetNewSpec();
        }
    }, 1000);
}

window.onload = function () 
{
    display = document.querySelector('#time');
    specs = document.querySelector('#specs');
    beginButton = document.querySelector('#beginButton');
};


function GetNewSpec()
{
    var randomIndex = Math.floor(Math.random() * (specChanges.length - 1)) + 1;
    specs.innerHTML += specChanges[randomIndex] + "<br />";
 
}