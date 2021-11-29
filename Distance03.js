 class calDistance {
     constructor(x1,x2,y1,y2){
        var x = x1-x2
        var  x = x*x
        var  y = y1-y2
        var  y = y*y
         console.log(Math.sqrt(x+y))
     }
 }

 let myObject = new calDistance(3,7,2,8)