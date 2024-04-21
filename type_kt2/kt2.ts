abstract class Publisher{
    title: string
    author: string
    pubYear: number
    copies: number

     static count: number = 0
     constructor(){
        Publisher.count++
     }

    //Метод получения
    get getTitle(){
        return this.title
    }
    //Метод изменения
    set setTitle(value: string){
        this.title = value

    }
    get getAuthor(){
        return this.author 
    }
    set setAuthor(value:string){
        this.author = value

    }
    get getpubYear(){
        return this.pubYear
    }
    set setpubYear(value: number){
        this.pubYear = value
    }
    get getcopies(){
        return this.copies
    }
    set setcopies(value: number){
        this.copies = value
    }
}
//Наследуется от Publisher
class Book extends Publisher implements Reception{
    pages: number   
    delivery(item: Publisher){

    }
    recieve(item: Publisher){

    }
}
class Magazine extends Publisher implements Reception{
    issue: number
    delivery(item: Publisher){

    }
    recieve(item: Publisher){
        
    }
}
interface Reception{
    delivery(item: Publisher): void
    recieve(item: Publisher): void
}

class Reader extends Publisher implements Reception{
    firstName: string
    lastName: string
    items: Publisher[]

    get getfirstName(){
        return this.firstName
    }
    set setfirstName( value: string){
        this.firstName = value

    }
    get getlastName(){
        return this.lastName
    }
    set setlastname(value: string){
        this.lastName = value
    }
    get getitems(){
        return this.items
    }
    set setitems( value: Publisher[]){
        this.items = value
    }

    delivery(item: Publisher){
        //Если число копий равно 0 выдача невозможна
        //Если число изданий максимальное у читателя выдача невозможна
        if(Publisher.count == this.items.length || this.copies == 0) return
        this.copies = this.copies - 1
    }
    recieve(item: Publisher){
        this.copies = this.copies + 1
    }
}
class Library{
    items: Publisher[]
    add(item: Publisher){
        this.items.push(item)
    }
    remove(){
        this.items.pop()
    }
}