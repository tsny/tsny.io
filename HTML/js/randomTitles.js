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

function getTitle()
{
    var randomIndex = Math.floor(Math.random() * (titles.length - 1)) + 1;
    return titles[randomIndex];
}

function setTitle()
{
    document.title = getTitle();
}

