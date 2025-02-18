$(document).ready(function() {



    $('#alert').hide();

    $('#contact-form').validate({
        
        rules: {
            name: {
                required: true
            },
            mail: {
                required: true
            },
            phone: {
                required: true
            },
            msg: {
                required: true
            }
        },
        messages: {

            name: {
                required: "Please enter your username...",
                
            },
            mail: {
                required: "Please enter your Email...",
                
            },
            phone: {
                required: "Please enter your contact Number...",
                
            },
            msg: {
                required: "Please Enter your message..."
            }  
             
        }


    });



    $('#contact-form').submit(function(event){

        event.preventDefault();
        var values=$('#contact-form').serialize();
        
         if($(this).valid())
         {
    
                $.ajax({ 
                     type: 'POST',
                     url: baseurl + 'contact-us/save-details', 
                     data: values,
                     dataType: 'json',
                     success: function (data){

                        console.log(data); 

                        if(data.status == 'success')
                        {    
                            $('#alert').html( data.message);
                            $('#alert').show();
                            setTimeout(function() { $('#alert').hide(); }, 3000);
                           
                            //clear the form value after succesful submit

                            $('#contact-name').val('');
                            $('#contact-num').val('');
                            $('#contact-mail').val('');
                            $('#contact-msg').val('');
                        }

                     }

                });
         }

     })

     $('#cat').change(function( ){

        var value=$('#cat').val();
        console.log(value);
        
                $.ajax({ 
                     type: 'POST',
                     url: baseurl + 'students/course_duration', 
                     data:{category:value},
                     dataType: 'json',
                     success: function (data)
                     {
                        var len =data.length;
                        $("#time").empty();

                        for(i=0;i<len;i++)
                        {
                            var time = data[i]['time'];
                            $('#time').append("<option value='" + time + "'>" + time + " Months</option>");
                        }

                     }

                });
     });

     

     $('#time').click(function( ){

        var cat=$('#cat').val();
        var time= $('#time').val();
        
                $.ajax({ 
                     type: 'POST',
                     url: baseurl + 'students/fetch_course', 
                     data:{category:cat,time:time},
                     dataType: 'json',
                     success: function (data)
                     {
                        var len =data.length;
                        $("#course").empty();

                        for(i=0;i<len;i++)
                        {
                            var id = data[i]['id'];
                            var course = data[i]['name'];
                            
                            $('#course').append("<option value='" +  + "'>" +  + "</option>");
                            $('#course').append("<option value='" + id + "'>" + course + "</option>");
                        }

                     }

                });
     });




     $('#student-registration').validate({
        
        rules: {
            code: {
                required: true
            },
            centre_name: {
                required: true
            },
            category: {
                required: true
            },
            duration: {
                required: true
            },
            course_name: {
                required: true
            },
            c_name: {
                required: true
            },
            f_name: {
                required: true
            },
            dob: {
                required: true
            },
            dob_proof: {
                required: true
            },
            nationality: {
                required: true
            },
            caste: {
                required: true
            },
            religion: {
                required: true
            },
            gender: {
                required: true
            },
            education: {
                required: true
            },
            edu_proof: {
                required: true
            },
            address: {
                required: true
            },
            mail: {
                required: true
            },
            contact: {
                required: true
            },
            photo: {
                required: true
            },
            check: {
                required: true
            }


        },
        messages: {

            code: {
                required: "Please enter Study Centre Code...",
                
            },
            centre_name: {
                required: "Please enter Study Centre name...",
                
            },
            category: {
                required: "Please Select Category...",
                
            },
            duration: {
                required: "Select Course duration..."
            },
            course_name: {
                required: "Select Course..."
            },
            c_name: {
                required: "Enter Your Name..."
            },  
            f_name: {
                required: "Enter Your Father's Name..."
            },
            dob: {
                required: "Select Your DOB..."
            },
            dob_proof: {
                required: "Upload Date of Birth Proof in (PDF|DOC|DOCX) format..."
            },
            nationality: {
                required: "Enter your Nationality..."
            },
            caste: {
                required: "Select your Cast..."
            },
            religion: {
                required: "Enter Your Religion..."
            },
            gender: {
                required: "Select Gender..."
            },
            education: {
                required: "Write about your Qualification..."
            },
            edu_proof: {
                required: "Upload Highest Qualification Certificate in (PDF|DOC|DOCX) format..."
            },
            address: {
                required: "Enter Your Address..."
            },
            mail: {
                required: "Enter Your Email..."
            },
            contact: {
                required: "Enter Your Contact Number..."
            },
            photo: {
                required: "Upload recent Passport Size Photo in (JPG|JPEG|PNG) format..."
            },
            check: {
                required: "Check the box Before submitting the form..."
            }

             
        }


    });




})