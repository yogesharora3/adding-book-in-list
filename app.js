function Book(title,author,isbn){
    this.title=title;
    this.author=author;
    this.isbn=isbn;
}
function UI(){}
UI.prototype.showAlert=function(message,className1){
    const div=document.createElement('div');
    div.className=`alert ${className1}`;
    div.appendChild(document.createTextNode(message));
    const container=document.querySelector(".container");
    const bookForm=document.querySelector('#Book-form');
    container.insertBefore(div,bookForm);
    setTimeout(function(){
        document.querySelector('.alert').remove();
    },3000);
}
//add book to table
UI.prototype.addBook=(book)=>{
    const list=document.querySelector(".Book-list");
    list.innerHTML=`
    <tr>
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="link delete"><i class="fa fa-times" aria-hidden="true"></i></a></td>
    `
}
//delete book from the list
UI.prototype.deleteBook=function(e){
    console.log(e.target.parentElement.classList);
    if(e.target.parentElement.classList.contains('delete')){
        e.target.parentElement.parentElement.parentElement.remove();
        this.showAlert('book deleted successfully','success');
    }
}
//clear all the fields
UI.prototype.clearField=function(title,author,ISBn){
    title.value='';
    author.value='';
    ISBn.value='';
}
//  add event listener to form o
document.querySelector("#Book-form").addEventListener('submit',(e)=>{
    const title=document.querySelector('#title');
    const author=document.querySelector('#Author');
    const ISBn=document.querySelector("#ISBN");
    // const div =document.createElement('div');
    const ui=new UI();
    // div.appendChild()
    console.log(author.value);
    if(title.value===""||author.value === ""||ISBn.value===""){
        // console.log("i am working");
       ui.showAlert('please fill  all the the field',"error")
    }
    else{
        ui.showAlert("book added succesfully","success");
        var book1=new Book(title.value,author.value,ISBn.value);
        ui.addBook(book1);
        ui.clearField(title,author,ISBn);
    }
    e.preventDefault();
});
//handled the delete function in ui
document.querySelector('.Book-list').addEventListener('click',(e)=>{
    const ui=new UI();
    ui.deleteBook(e);

})
