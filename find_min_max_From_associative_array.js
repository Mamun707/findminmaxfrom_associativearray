var array = [{"a":6},{"b":3},{"a":7},{"b":10}];
var min = null;
var value = null;
var max=null;
function getValue(arr){
var res = [];
for(var j = 0; j < arr.length; j++)
{

    for(var anItem in arr[j])
    {
        res.push(arr[j][anItem]);
        // get the only value in new array from the associative array
        console.log(res);
    }
}
return res;
}
min = Math.min.apply(Math,getValue(array));
max=Math.max.apply(Math,getValue(array));
console.log(min);
console.log(max);