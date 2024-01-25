function ba() {
    if(document.getElementById("selectKH").value == "Doanh Nghiệp"){
        document.getElementById("sp").classList.remove("kn");
    }else{
        document.getElementById("sp").classList.add("kn");
    }

}
const ND_HD = 4.5;
const ND_DV = 20.5;
const ND_K = 7.5;

const DN_HD = 15;
const DN_DV = 75;
const DN_K = 50;

function tinhCap() {
    let kH = document.getElementById("KH").value;
    if(kH == ""){
        return document.getElementById("result-msg4").innerHTML= 'Hãy nhập Mã Khách Hàng'
    }
    let SK = Number(document.getElementById("soKenh").value);
    let SKN = Number(document.getElementById("soKetNoi").value);
    if (SK <0 || SKN <0){
        return document.getElementById("result-msg4").innerHTML= ' Số Kênh Hoặc Số Kế Nối Không Thể Nhỏ Hơn 0 '
    }
    let total = 0;
    let LKH = document.getElementById("selectKH").value;

    if (LKH == "Nhà Dân") {
        total = ND_HD + ND_DV + (SK * ND_K)
    }else if (LKH == "Doanh Nghiệp" && SKN <= 10) {
        total = DN_HD + DN_DV + (SK * DN_K)
    }else if (LKH == "Doanh Nghiệp" && SKN > 10) {
        total = DN_HD + DN_DV + (SK * DN_K) + ((SKN-10)*5)
    }else{
        return document.getElementById("result-msg4").innerHTML= 'Hãy Chọn Loại Khách Hàng'
    }

    document.getElementById("result-msg4").innerHTML= `Tổng Phí phải trả: ${total}$`
}