function tinhThue() {
    let N = document.getElementById("name").value;
        if(N == ""){
        return document.getElementById("result-msg3").innerHTML= 'Hãy nhập Họ Và Tên'
        }
    let TN = Number(document.getElementById("inputTN").value);
    let SN = Number(document.getElementById("inputSN").value);
    let tax = 0;
    const i = 4000000;
    if(TN < i){
        return document.getElementById("result-msg3").innerHTML= 'Hãy Kiểm Tra Lại số Tổng Thu Nhập '
    }else if(TN <=60000000){    
        tax = (TN - i - (SN*1600000))*0.05;
    }else if(TN <=120000000){
        tax = (TN - i - (SN*1600000))*0.1;
    }else if(TN <=210000000){
        tax = (TN - i - (SN*1600000))*0.15;
    }else if(TN <=384000000){
        tax = (TN - i - (SN*1600000))*0.2;
    }else if(TN <=624000000){
        tax = (TN - i - (SN*1600000))*0.25;
    }else if(TN <=960000000){
        tax = (TN - i - (SN*1600000))*0.3;    
    }else if(TN > 960000000){
        tax = (TN - i - (SN*1600000))*0.35;
    }    
    document.getElementById("result-msg3").innerHTML= `Thuế Phải Trả: ${tax.toLocaleString()}`
}        

