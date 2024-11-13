//книга 1
let book = {
    title: 'Захар Беркут',
   author: 'Іван Франко',
   year: 1883,
   genre: 'Історична повість',
   pages: 240,
   getInfo: function() {
       return `Назва книги: ${this.title}, автор: ${this.author}, рік: ${this.year}, кількість сторінок: ${this.pages}, видавництво: ${this.vudav}`;
   }
};
book.vudav = 'Друкарня Товариства ім. Шевченка'

delete book.genre;

for (let key in book) {
    console.log(key + ': ' + book[key]);
}

console.log(book.getInfo());

//книга 2
let book2 = {
    title: 'Майстер і Маргарита',
    author: {
        firstName: 'Михайло',
        lastName: 'Булгаков',
        birthYear: 1891,
        nationality: 'Українець'
    },
    getAuthorInfo: function() {
        return `Автор: ${this.author.firstName} ${this.author.lastName}, народився в ${this.author.birthYear}, національність: ${this.author.nationality}`;
    }

};

console.log(book2.getAuthorInfo());

for (let key in book2) {
    console.log(key + ': ' + book2[key]);
}

console.log(Object.keys(book2));
console.log(Object.values(book2));

let book2copy = Object.assign({},book2)
book2copy.title = 'Тореадори з Васюківки';
console.log(book2);
console.log(book2copy);

book.isModern = function(){
    return this.year > 2000 ? 'Ця книга є сучасною' : 'Ця книга не є сучасною';
};

console.log(book.isModern());