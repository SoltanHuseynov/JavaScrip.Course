var number = prompt("asalik test icin bir sayiya giriniz:");

var bolenMax = Math.floor(Math.sqrt(number));
var bolen = 2;
var sonuc = "sayi asal";

if (number > 2) {
    while (bolen <= bolenMax) {
        if (number % bolen == 0) {
            sonuc = "sayi asal diyil";
            break;
        }
        bolen++;
    }
    console.log(number + ":" + sonuc);
}
else {
    console.log("0.1 ya da negativ sayilar asal olmaz");
}