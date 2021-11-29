function distance (x1,x2,y1,y2){
    x = x1-x2
    x = x*x
    y = y1-y2
    y = y*y
    result = Math.sqrt(x+y)
    console.log(result)
}
distance(3,7,2,8)