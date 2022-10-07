function checkHoTen()
{
    var hoTen = /^([A-Za-z]+)((\s{1}[A-Za-z]+){1,})$/
            var t = document.getElementById("txtHoTen").value;
            if(hoTen.test(t))
            {
                document.getElementById("errHoTen").innerHTML = "";
                return true;
            }
            else
            {
                document.getElementById("errHoTen").innerHTML = "Họ Tên không hợp lệ";
                return false;
            }
}

function checkTenDangNhap()
{
    var username = /^[A-Za-z0-9]{6,20}$/
    var t = document.getElementById("txtTenDangNhap").value;
    if(username.test(t))
    {
        document.getElementById("errTenDangNhap").innerHTML = "";
        return true;
    }
    else{
        document.getElementById("errTenDangNhap").innerHTML = "Tên đăng nhập không hợp lệ";
        return false;
    }
}
function checkSDT()
{
    var numberphone = /^[0-9]{10}$/
    var t = document.getElementById("txtSDT").value;
    if(numberphone.test(t))
    {
        document.getElementById("errSDT").innerHTML = "";
        return true;
    }
    else{
        document.getElementById("errSDT").innerHTML = "Số điện thoại không hợp lệ";
        return false;
    }
}

function checkDiaChi()
{
    var diachi = /^([A-Za-z0-9]+)((\s{1}[A-Za-z0-9]+){1,})$/
    var t = document.getElementById("txtDiaChi").value;
    if(diachi.test(t))
    {
        document.getElementById("errDiaChi").innerHTML = "";
        return true;
    }
    else{
        document.getElementById("errDiaChi").innerHTML = "Địa chỉ không hợp lệ";
        return false;
    }
}


function checkMatKhau()
{
    var mk = /^[A-Za-z]{1,25}[0-9]{1,20}$/
    var t = document.getElementById("txtMatKhau").value;
    if(mk.test(t))
    {
        document.getElementById("errMatKhau").innerHTML = "";
        return true;
    }
    else{
        document.getElementById("errMatKhau").innerHTML = "Mật khẩu phải gồm chữ và số ít nhất 6 kí tự";
        return false;
    }
}
function checkRMatKhau()
{
    var t = document.getElementById("txtMatKhau").value;
    var t1 = document.getElementById("txtRMatKhau").value;
    if(t == t1)
    {
        document.getElementById("errRMatKhau").innerHTML = "";
        return true;
    }
    else{
        document.getElementById("errRMatKhau").innerHTML = "Mật khẩu không trùng khớp";
        return false;
    }
}
function dangKy()
{
    var t = document.getElementById("txtHoTen").value;
    var t1 = document.getElementById("txtTenDangNhap").value;
    var t2 = document.getElementById("txtSDT").value;
    var t3 = document.getElementById("txtDiaChi").value;
    var t4 = document.getElementById("txtMatKhau").value;
    var t5 = document.getElementById("txtRMatKhau").value;
    if(checkHoTen() && checkTenDangNhap() && checkSDT() && checkDiaChi() && checkMatKhau() && checkRMatKhau())
    {
        alert("Đăng ký thành công");
        location.assign("../html/formdk.html");
    }
    else
    {
        alert("Đăng ký thất bại");
    }
}