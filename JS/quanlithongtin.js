
        $(document).ready(function(){
            $("#myBtn").click(function(){
                $("#myModal").modal();
            });
            function KTTen()
            {
                var re = /^([A-Za-z]+)((\s{1}[A-Za-z]+){1,})$/
                var t = $("#txtten").val();
               if(!(re.test(t)))
               {
                   $("#errten").text("Sai cu phap");
                   return false;
               }
               else
               {
                   $("#errten").text("");
                   return true;
               }
            }
            $("#txtten").blur(KTTen);

            function checkSDT()
            {
                var re = /^[0-9]{10,11}$/;
                if(re.test($("#txtsdt").val()))
                {
                    $("#errsdt").html("*");
                    return true;
                }
                $("#errsdt").html("Sai cú pháp");
                    return false;                   
            }
            $("#txtsdt").blur(checkSDT);
            function checkDiaChi()
            {
                var re = /^([A-Za-z]+)((\s{1}[A-Za-z]+){1,})$/
                var t = $("#txtdiachi").val();
                if(!(re.test($("#txtdiachi").val())))
                {
                    $("#errdiachi").html("Sai cú pháp");
                    return false;                    
                }
                $("#errdiachi").html("*");
                    return true;               
            }
            $("#txtdiachi").blur(checkDiaChi);
        $("#btnCapNhat").click(function(){
            if(!KTTen() || !checkSDT() || !checkDiaChi())
            {
                alert("Bạn cần nhập đầy đủ thông tin");
            
                return false;
            }
            else{
                var hoten = $("#txtten").val();
                var sdt = $("#txtsdt").val();
                var diachi = $("#txtdiachi").val();
                $("#txtHoTen").attr("value",hoten);
                $("#txtSDT").attr("value", sdt);
                $("#txtDiaChi").attr("value", diachi);                  
                $("#myModal").modal("hide");    
                alert("Cập nhật thành công"); 
            } 
        });
        
        });
    