

function Player(name, marker){
    this.name = name
    this.marker = marker
    this.sayHello = function(){
        return `${name} ${marker}`
    }
}

const player1 = new Player("steve", "x");

console.log(player1.sayHello());

function Book(title, author, numOfPages, isBookRead){
    this.title = title
    this.author = author
    this.numOfPages = numOfPages
    this.isBookRead = isBookRead
    this.bookInfo = function(){
        return `${title} by ${author}, ${numOfPages} ${isBookRead}`
    }
}

const reader = new Book("hobbit", "tolkien", "254", "not read yet");

console.log(reader.bookInfo());


let a = 17;

const func = (x) => {
     a = x;
}

func(99);

console.log(a);

const myName = () => {
    let name = "todd";

    console.log(name);
}

console.log(myName());