var div = function(n1,n2)
{
    return n1/n2;
}

var cb = function (n1 , n2 , callback)
{
   
     return   "Result from the two numbers : " +n1
    + "/" +n2+ "=" + callback(n1,n2);
    
}

console.log (cb(6,3,div))

