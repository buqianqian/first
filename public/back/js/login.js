$(function(){
    $('#form').bootstrapValidator({
        //设置小图标
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
    },  
      
      //设置校验规则
        fields:{
        
            username:{
                validators:{
                    notEmpty:{
                        message:"用户名不能为空"
                    },
                    stringLength:{
                        min:4,
                        max:12,
                        message:"用户名在4-12位"
                    },
                    callback:{
                        message:"用户名不存在"
                    }
                }
            },
            password:{
                validators:{
                    notEmpty:{
                        message:"密码不能为空"
                    },
                    stringLength:{
                        min:4,
                        max:12,
                        message:"用户名在4-12位"
                    },
                    callback:{
                        message:"密码错误"
                    }
                }
            }
        
        }
      
    });

    $('#form').on("success.form.bv", function(e){
        //阻止表单的默认提交
        e.preventDefault();
        //使用ajax进行提交
        $.ajax({
          type:"post",
          url:"/employee/employeeLogin",
          data:
            $('#form').serialize(),
          dataType:"json",
          success:function(data){
            console.log(data);
            if(data.success){
                location.href="index.html";
            }
            if(data.error===1000){
                $('#form').data("bootstrapValidator").updateStatus("username", "INVALID", "callback");
            }
            if(data.error===1001){
                $('#form').data("bootstrapValidator").updateStatus("password", "INVALID", "callback");
            }
          }
        });

        $("[type='reset']").on("click", function(){
  
            //重置表单样式
            $("form").data("bootstrapValidator").resetForm();
            
          });
      })





    })