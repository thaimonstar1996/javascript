let object = {
  "name": "nicolas",
  "age": 29
}

let book = {
  title: "Professional Javascript",
  author: [
    "Nicolas",
    "Adam"
  ],
  edition: 4,
  year: 2017
};

let jsonTextBook = JSON.stringify(book);
console.log(jsonTextBook);
/**
 * When serializing a JavaScript object, all functions and prototype members are intentionally omitted from the result. 
 * Additionally, any property whose value is undefined is also skipped.
 *  You're left with just a representation of the instance properties that are one of the JSON data types.
 */
let book2 = {
  name: "thai",
  title: undefined
};
console.log(JSON.stringify(book2));

/**
 * A JSON string can be passed directly into JSON.parse() and it creates an appropriate JavaScript value.
 *  For example, you can create an object similar to the book object using this code:
let bookCopy = JSON.parse(jsonText);
Note that book and bookCopy are each separate objects without any relationship to one another even though they do share the same properties.
 */
console.log("cmnr");
let jsonbook3Text = "{\"title\":\"Le quang thai\",\"author\":[\"Nicolas\",\"Adam\"],\"edition\":4,\"year\":2018}";
let book3 = JSON.parse(jsonbook3Text);
console.log(book3);

//Filtering Results

let book4 = {
  title: "XXXX",
  name: "abcd",
  edition: 4
};

let jsonText = JSON.stringify(book4, ["title", "edition"]);
console.log(jsonText);
let jsonTextFilter2 = JSON.stringify(book4, null, 4);
console.log(jsonTextFilter2);
console.log(JSON.stringify(book4, null, "\t"));
console.log(JSON.stringify(book4, null, "**"));

// toJSON 
let book5 = {
  title: "ABBB",
  author: "Thai",
  toJSON: function() {
    return this.title;
  }
}
console.log(JSON.stringify(book5));

// Parsing option
let jsonTextbook6 = '{"title": "Professional JavaScript","authors": ["Nicholas C. Zakas","Matt Frisbie"],"edition": 4,"year": 2017,"releaseDate": "2021-08-29T09:58:33.899Z"}';
let book6Ver1 = JSON.parse(jsonTextbook6,(key, value) => key == "releaseDate" ? new Date(value) : value);
let book6Ver2 = JSON.parse(jsonTextbook6);

console.log(book6Ver1);// Ta thấy rằng khi  convert thành Date thì  book6Ver1.releaseDate là Date
console.log(book6Ver2); // book6Ver2 không convert thành Date nên kiểu dữ liệu của nó là string
console.log(book6Ver1.releaseDate instanceof Date);// true
console.log(book6Ver2.releaseDate instanceof Date);// false
console.log(typeof book6Ver1.releaseDate);// type of book6Ver1 is object because it is a Date object
console.log(typeof book6Ver2.releaseDate); // type of book6Ver2.releaseDate is string because you not convert it to Date object


console.log(book6Ver1.releaseDate.getHours()); 
console.log(book6Ver1.releaseDate.getMinutes());
let book7 = {
  name: "abc",
  release: new Date()
}
console.log(book7);
