function show(respond, nr, tx1, tx2, tx3, v1, v2) {

    console.log(tx1 + v1);
    console.log(tx2 + v2);
    console.log(tx3 + respond);
};
//CALLBACK 1
function callback1(data) {
    console.log("--Zadanie 1--");
    let y1 = data.works[0].year;
    let y2 = data.works[0].company[0].worktime;
    const sum = y2 + y1;
    show(sum, "1","Rok rozpoczęcia pracy: ", "Czas pracy: ", "Dodaj: ", y1, y2);
}
let btn1 = document.getElementById("btn1");
btn1.addEventListener("click", function(){
    $.getJSON("https://my-json-server.typicode.com/jakubzengota/projektowanie-serwisow-www-21684-185ic/users/1", callback1);
});
//CALLBACK 2
function callback2(data) {
    console.log("--Zadanie 2--");
     const x1 = data.name;
     const x2 = data.works[0].company[0].companyname;
     const text1 = `${x1} pracował w firmie ${x2}`;
     show(text1, "1", "Tekst 1: ", "Tekst 2: ", "Połączone: ", x1, x2);
}
let btn2 = document.getElementById("btn2");
btn2.addEventListener("click", function(){
    $.getJSON("https://my-json-server.typicode.com/jakubzengota/projektowanie-serwisow-www-21684-185ic/users/1", callback2);
});