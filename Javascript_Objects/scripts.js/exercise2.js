function Book(t,a,rS){
    this.title=t;
    this.author=a;
    this.readingStatus=rS;
    this.readingStatusInfo=function(){
        if(this.readingStatus==="true"){
            console.log(`You have already read: "${this.title}" by ${this.author}`);
        }
        else if(this.readingStatus==="false"){
            console.log(`You still need to read: "${this.title}" by ${this.author}`);
        }
        else{
            console.log("ERROR");
        }
    }
}

let bookTitle=document.getElementById("title");
let bookAuthor=document.getElementById("author");
let bookReadingStatus=document.getElementById("readingStatus");
let button=document.getElementById("button");

button.addEventListener("click",function(){
    let userBook=new Book(bookTitle.value,bookAuthor.value,bookReadingStatus.value);
    userBook.readingStatusInfo();
})