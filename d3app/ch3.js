//Declaring variables in JavaScript
var number = 5;
var value = 12.3467;
var active = true;
var text = "Crystal clear";

var numbers = [ 5, 10, 15, 20, 25 ]; numbers

var mishmash = [ 1, 2, 3, 4.5, 5.6, "oh boy", "say it isn't", true ];

var fruit = {
    kind: "grape",
    color: "red",
    quantity: 12,
    tasty: true
};

fruit.kind      //Returns "grape"
fruit.color     //Returns "red"
fruit.quantity  //Returns 12
fruit.tasty     //Returns true

var fruits = [
    {
        kind: "grape",
        color: "red",
        quantity: 12,
        tasty: true
    },
    {
        kind: "kiwi",
        color: "brown",
        quantity: 98,
        tasty: true
    },
    {
        kind: "banana",
        color: "yellow",
        quantity: 0,
        tasty: true
    }
];

// json
var jsonFruit = {
    "kind": "grape",
    "color": "red",
    "quantity": 12,
    "tasty": true
};

// geo json
var geodata = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [ 150.1282427, -24.471803 ]
            },
            "properties": {
                "type": "town"
            }
        }
    ]
};

//
if (3 < 5) {
    console.log("Eureka! Three is less than five!");
}

var numbers = [ 8, 100, 22, 98, 99, 45 ];
for (var i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);  //Print value to console
}

var calculateGratuity = function(bill) {
    return bill * 0.2;
}

var tip = calculateGratuity(38.40);
console.log(tip);  //Prints 7.68 to the console

// dynamic typing
typeof 67;              //Returns "number"
var myName = "Scott";
typeof myName;          //Returns "string"
myName = true;
typeof myName;          //Returns "boolean"