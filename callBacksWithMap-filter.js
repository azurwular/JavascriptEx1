//callbacks 1 to 3

var names = ["Lars" , "Jan" , "Peter" , "Bo"];

function namesLessThan3(data)
{
    return data.length <= 3;
}

function makeUpper(data)
{
    return data.toUpperCase();
}

function lineMap(name)
{
    return "<li><td>" +name+ "</td></li>";
}

names.forEach(function(f)
{
    console.log(f);
});
var shortnames = names.filter(namesLessThan3);
shortnames.forEach(function(f)
{
    console.log(f);
});

var upper = names.map(makeUpper);

upper.forEach(function(f)
{
    console.log(f);
});

var show = names.map(lineMap);

show.forEach(function(f)
{
    console.log(f);
});

upper.forEach(function(f)
{
    console.log(f);
});