function dangNhap()
{
    var USERNAME = "taikhoan1234";
    var PASSWORD = "matkhau1234";
    var txtUser = document.getElementById("txtName").value;
    var txtPass = document.getElementById("txtMK").value;

    if (txtUser == USERNAME && txtPass == PASSWORD)
    {
        alert("Đăng nhập thành công");
        location.assign("https://www.youtube.com/");
    }   
    else
    {
        alert("Đăng nhập thất bại");
    }
}

function dangKi(){
    location.assign("../html/formregister.html");
}