
// How would you print/log John's age?
var container = document.getElementById('container');
container.style = "color: blue; border: 2px solid black; text-align: center; padding: 5%";

for (let i=1; i<=10; i++){
    var p = document.createElement('P');
    p.innerHTML = i;
    container.appendChild(p);
}

var users = [{name: "Michael", age:37}, {name: "John", age:30}, {name: "David", age:27}];

console.log(users[1].age);

// How would you print/log the name of the first object?

var users = [{name: "Michael", age:37}, {name: "John", age:30}, {name: "David", age:27}];

console.log(users[0].name);

// How would you print/log the name and age of each user using a for loop?  Your output should look something like this

for (let i=0; i<users.length; i++){
    console.log(users[1].name+" - "+ users[i].age)
}

function printUsers(arr){
    var heading = document.createElement('h1');
    for (let i = 0; i<arr.length;i++){
        heading.innerHTML = `${users[i].name} - ${users[i].age}`;
        container.appendChild(heading)
    }
}