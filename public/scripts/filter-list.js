
loadJSON(JSON_FILE, function (data) {
    console.log(data.entities);



});




// get all elements
var element = document.querySelectorAll('.list li');
// convert NodeList into an array
// for older browser use [].slice.call(element)
Array.from(element)
// iterate over the element
    .forEach(function(ele, i) {
        // generate and set id
        ele.setAttribute("id", 'item' + (i + 1));
    })
