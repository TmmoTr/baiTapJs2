const kw50dau = 500;
const kw50ke = 650;
const kw100ke = 850;
const kw150ke = 1100;
const Kwke = 1300;

function tinhTien() {
    let KW = Number(document.getElementById("soKW").value);
    let total = 0;
    if (KW == "") {
        return document.getElementById("result-msg2").innerHTML= 'Hãy nhập số KW'        
    } else if(KW < 0){
        return document.getElementById("result-msg2").innerHTML=  'Số KW không thể nhỏ hơn 0'

    } else if (KW <=50 ){
        total = KW * kw50dau;
    } else if (KW <=100 ){
        total = 50 * kw50dau + (KW-50) * kw50ke;
    } else if (KW <=200 ){
        total = 50 * kw50dau + 50 * kw50ke + (KW-100) * kw100ke;
    } else if (KW <=350 ){
        total = 50 * kw50dau + 50 * kw50ke + 100 * kw100ke + (KW-200)* kw150ke;
    } else if (350<=KW){
        total = 50 * kw50dau + 50 * kw50ke + 100 * kw100ke + 150* kw150ke + (KW-350) * Kwke;
    }
    document.getElementById("result-msg2").innerHTML= `Tổng số tiền phải trả: ${total.toLocaleString()} VND`
    
    console.log(total);    
}
