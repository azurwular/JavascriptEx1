function Person(id ,name , birth , city)
{
    this.id = id;
    this.name = name;
    this.birth = birth;
    this.city = city;
}

var p1 = new Person(1 , "N" , 11 , "C");


for(prop in p1)
{
    console.log(prop,p1[prop]);
}
  
delete p1.birth;

  for(prop in p1)
  {
    console.log(prop,p1[prop]);
  }

 