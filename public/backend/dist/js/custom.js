$(document).ready(function() {

  
   $('#admin-login-form').validate({
        errorClass: "validity-error",
        validClass: "validity-success",
        highlight: function (element) {
            $(element).closest('.form-group').removeClass('success').addClass('error');
        },
        unhighlight: function (element) {
            $(element).closest('.form-group').removeClass('error').addClass('success');
        },
        errorPlacement: function (error, element) {
            if (element.parent('.input-group').length || element.prop('type') === 'checkbox' || element.prop('type') === 'radio') {
                error.insertAfter(element.parent());
            } else {
                error.insertAfter(element);
            }
            $('#is_active-error').css({
                display: 'inline-block',
                fontWeight: 'bolder'
            });
        },
        rules: {
            email: {
                required: true
            },
            password: {
                required: true
            }
        },
        messages: {

            email: {
                required: "Please enter your username.",
                
            },
            password: {
                required: "Please enter your password."
            }  
             
        }
    });
   



   $('#main-office,#branch-office,#form').validate({
        errorClass: "validity-error",
        validClass: "validity-success",
        highlight: function (element) {
            $(element).closest('.form-group').removeClass('success').addClass('error');
        },
        unhighlight: function (element) {
            $(element).closest('.form-group').removeClass('error').addClass('success');
        },
        errorPlacement: function (error, element) {
            if (element.parent('.input-group').length || element.prop('type') === 'checkbox' || element.prop('type') === 'radio') {
                error.insertAfter(element.parent());
            } else {
                error.insertAfter(element);
            }
            $('#is_active-error').css({
                display: 'inline-block',
                fontWeight: 'bolder',
                color : 'red'
            });
        },
        rules: {
            name: {
                required: true
            },
            adhar: {
                required: true
            },
            pass: {
                required: true
            },
            f_name: {
                required: true
            },
            file: {
                required: true
            },
            category: {
                required: true
            },
            code: {
                required: true
            },
            duration: {
                required: true
            },
            address: {
                required: true
            },
            f_add: {
                required: true
            },
            desc: {
                required: true
            },
            contact: {
                required: true
            },
            f_contact: {
                required: true
            },
            mail: {
                required: true
            },
            f_mail: {
                required: true
            },
            status: {
                required: true
            }
        },
        messages: {

            name: {
                required: "Enter name.....",
                
            },
            f_name: {
                required: "Enter Name of Franchise Owner.....",
                
            },
            adhar: {
                required: "Enter Adhar Number.....",
                
            },
            pass: {
                required: "Set Password.....",
                
            },
            file: {
                required: "Select file.....",
                
            },
            category: {
                required: "Select Category.....",
                
            },
            code: {
                required: "Enter Code....",
                
            },
            duration: {
                required: "Enter Course Duration....",
                
            },
            address: {
                required: "Enter Address.....",
                
            },
            f_add: {
                required: "Enter Address franchise owner.....",
                
            },
            desc: {
                required: "Enter description....",
                
            },
            contact: {
                required: "Enter Contact Number...",
                
            },
            f_contact: {
                required: "Enter Contact Number of franchise Owner...",
                
            },
            f_mail: {
                required: "Enter email of Franchise owner..."
            },
            status: {
                required: "Select Status..."
            }   
             
        }
    });


    $('#footer').validate({
        errorClass: "validity-error",
        validClass: "validity-success",
        highlight: function (element) {
            $(element).closest('.form-group').removeClass('success').addClass('error');
        },
        unhighlight: function (element) {
            $(element).closest('.form-group').removeClass('error').addClass('success');
        },
        errorPlacement: function (error, element) {
            if (element.parent('.input-group').length || element.prop('type') === 'checkbox' || element.prop('type') === 'radio') {
                error.insertAfter(element.parent());
            } else {
                error.insertAfter(element);
            }
            $('#is_active-error').css({
                display: 'inline-block',
                fontWeight: 'bolder'
            });
        },
        rules: {
            g_contact: {
                required: true
            },
            s_contact: {
                required: true
            },
            f_contact: {
                required: true
            },
            mail: {
                required: true
            },
            address: {
                required: true
            },
            fb: {
                required: true
            },
            twitter: {
                required: true
            },
            pinterest: {
                required: true
            },
            whatsapp: {
                required: true
            }
        },
        messages: {

            g_contact: {
                required: "Enter Contact Number...",
                
            },
            s_contact: {
                required: "Enter Contact Number...",
                
            },
            f_contact: {
                required: "Enter Contact Number...",
                
            },
            mail: {
                required: "Enter Email.....",
                
            },
             address: {
                required: "Enter Address.",
                
            },
            fb: {
                required: "Enter FB Link...",
                
            },
            twitter: {
                required: "Enter twitter Link...."
            },
            pinterest: {
                required: "Enter pinterest Link...."
            },
            whatsapp: {
                required: "Enter whatsapp Link...."
            }  
             
        }
    });



    



   
})