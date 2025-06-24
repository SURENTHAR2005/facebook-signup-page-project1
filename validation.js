$(document).ready(function(){
    $('#signupfo').validate({
        rules:{
            fname:{
                required:true,
                minlength:6,
            },
            lname:{
                required:true,
                minlength:5,
            },
            phoneno:{
                required:true,
                
            },
            pass:{
                required:true,
                minlength:5,
            },
            date:{
                required:true,
            },
            month:{
                required:true,
            },
            year:{
                required:true,
            },
            gen:{
                required:true,
            }

        },
        messages:{
            fname:{
                required:"please enter the first name",
                minlength:"enter atleast 5 to 6 characters"

            }
        }
    });
});