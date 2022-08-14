var json = [{
    "id":"sanjayvinoth",
    "email":"sanjayvinoth7@gmail.com",
    "age":20,
    "mobile":6382826464,
}

];
//for loop
for(var i = 0; i < json.length; i++) {
    var obj = json[i];

    console.log(obj.id);
    console.log(obj.email);
    console.log(obj.age);
    console.log(obj.mobile);

}

//for Each
json.forEach(function(obj) { console.log(obj.email); });


//for In
for (var key in json) {
    if (json.hasOwnProperty(key)) {
      console.log(json[key].id);
    }
}

//for Of
let text = "";
for (let x of json[key].email) {
 text += x; 
}
 console.log(text);