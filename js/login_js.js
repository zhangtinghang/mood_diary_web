	function username(){
      var regstr = /^[\u4e00-\u9fa5]{2,8}$/; //^匹配开始 $匹配结束,2到4位汉字
      var namestr = document.regform.uname.value;
      if(!regstr.test(namestr)){
        x = document.getElementById("error").innerHTML="2-8位汉字";
        return false; 
      }
      x=document.getElementById("error").innerHTML="格式正确";
      return true;
    }
    function password1(){
      var regstr = /^\w{6,18}$/;//   \w表示数字字母下划线
      var passstr = document.regform.uname.value;
      if(!regstr.test(passstr)){
        document.getElementById("error").innerHTML="必须是6-18位数字,字母或下划线";
        return false;
      }
      document.getElementById("error").innerHTML="格式正确";
      return true;
    }
    function password2(){
      
      var passstr = document.regform.upass.value;
      var passstr2 = document.regform.upass2.value;
      if(passstr==passstr2){
        document.getElementById("error").innerHTML="密码一致";
        return true;
      }
      document.getElementById("error").innerHTML="密码不一致";
      return false;
    }
    function checkForm(){
      if(username()&&password1()&&password2())
        return true;
      return false;
    }