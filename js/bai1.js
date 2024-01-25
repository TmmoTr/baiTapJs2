
function tinhDiem() {
    let d1 = Number(document.getElementById("inputDiem1").value);
    let d2 = Number(document.getElementById("inputDiem2").value);
    let d3 = Number(document.getElementById("inputDiem3").value);

        if (d1 < 0 || d1 > 10 || d2 < 0 || d2 > 10 || d3 < 0 || d3 > 10){
            return document.getElementById("result-msg1").innerHTML= 'Điểm Thi Chỉ Trong Phảm Vi Từ 0 tới 10 <br> Hãy Nhập Lại'
        }else if( d1 == "" || d2 == "" || d3 == "" )
            return document.getElementById("result-msg1").innerHTML= 'Điểm không thể để trống <br> Hãy nhập điểm'
        
    let KV = Number(document.getElementById("selectKV").value);
        if(KV == "A"){
            KV = 2;
        }else if(KV == "B"){
            KV = 1;
        }else if(KV == "C"){
            KV = 0.5;
        }else{
            KV = 0;
        }    
    let DT = Number(document.getElementById("selectDT").value);

    let total = d1 + d2 + d3 + KV + DT;

    if( total >= 20 && d1 > 0 && d2 > 0 && d3 > 0 ){
        document.getElementById("result-msg1").innerHTML= `Tổng Điểm: ${total} <br> Bạn Đã Đậu` 
    }else{
        document.getElementById("result-msg1").innerHTML= `Tổng Điểm: ${total} <br> Bạn Đã Trượt`
    }
}

