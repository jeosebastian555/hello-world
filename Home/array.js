/**
 * Created by Jeo on 11/29/2016.
 */
var skillsets = [
    {id: 'one', name: 'george'},
    {id: 'two', name: 'greg'},
    {id: 'three', name: 'jason'},
    {id: 'four', name: 'jane'},
];


var index = getIndex('one', skillsets, 'id');


function getIndex(value, arr, prop) {
    for(var i = 0; i < arr.length; i++) {
        if(arr[i][prop] === value) {
            return i;
        }
    }
    return -1; //to handle the case where the value doesn't exist
}



For better search example download this project

https://github.com/StevenIseki/react-search/tree/master/example