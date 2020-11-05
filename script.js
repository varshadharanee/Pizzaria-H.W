var menu_list_array = ["Farm House","Peppy Paneer","Mexican Green Wave","Deluxe Veggie","Veg Extravaganza","CHEESE CORN"];
function getMenu() {
    var htmldata;
    htmldata="<ul class='menulist'>";
    menu_list_array.sort();
    for(var i=0;i<menu_list_array.length;i++){
        htmldata=htmldata+'<li>'+ menu_list_array[i]+"<br>"+"<br>"
    }
    htmldata=htmldata+"<ul>"
    document.getElementById("display_menu").innerHTML = htmldata;
}
function add_item(){
   
    var htmldata;
    var item=document.getElementById("Add_item").value;
    menu_list_array.push(item);
    menu_list_array.sort();
    htmldata = "<section class='cards'>"
    for(var i=0;i<menu_list_array.length;i++){
        htmldata = htmldata+"<img src='https://image.shutterstock.com/image-vector/pizza-outline-icon-600w-448929421.jpg' height=50px>"+ '<div class="cards">'+menu_list_array[i]+'</div>'+"<br>"
    }
    htmldata=htmldata+"</section>"
    document.getElementById("display_addedMenu").innerHTML=htmldata;
}