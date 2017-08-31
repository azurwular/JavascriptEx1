//callbacks 4

var cars = [
    { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
    { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
    { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
    { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
    { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
  ];
  
  function newCars(car)
  {
    return car.year >=1999
  };

  function volvos(car)
  {
      return car.make ==="Volvo";
  }

  var newCarArr = cars.filter(newCars);
  var volvoArr = cars.filter(volvos);

  console.log(newCarArr);
  console.log(volvoArr);

