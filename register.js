var data;
window.onload = pageLoad;
function pageLoad(){
    data=document.getElementById("myForm");
    data.onsubmit= validateForm;
}

function validateForm() {
    //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย
    
    if(data.password.value == data.repassword.value){
        alert("OK");
    }
    else{
        var errormsg = document.getElementById("errormsg");
        errormsg.innerHTML = "รหัสไม่ถูกต้อง";
        return false;
    }
}