$(document).ready(function(){
    $("#all-form").validate({//validate is a function used to check form requiremets, the plugin is added through script//
        rules:{
            fname:{
                required:true,
                minlength:4
            },
            sname:{
                required:true,
                minlength:4
            },
            mnum:{
                required:true,
                minlength:10,
                
            },
            pass:{
                required:true,
                minlength:8,
                Number:true
            },
            day:{
                required:true,
            },
            Gender:{
                required:true
            }
        }
    })
})