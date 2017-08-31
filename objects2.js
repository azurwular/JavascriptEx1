function Person(id ,name , birth , city)
{
    this.id = id;
    this.name = name;
    this.birth = birth;
    this.city = city;
}
Person.prototype.getDetails = function()
{
    console.log("id: "+this.id+" Name: "+this.name
                +" birth: "+this.birth+" City: "+this.city);
}

var p1 = new Person(1 , "N" , 11 , "C");
p1.getDetails();