$(document).ready(function() {

    //====== quiz page - start
    
    $('.quiz-gallery-container').fadeIn(5000);

    $('#chartClick1').on("click", function() {
        $('#chartPopup1').toggleClass("active");
    });
    $('#chartClick2').on("click", function() {
        $('#chartPopup2').toggleClass("active");
    });
    
    $('.form-style label').click(function() {
        $('label').removeClass('active');
        if($('.form-style input').is(':checked')) { 
          $(this).addClass('active')
         } 
    });

    // onclick of start
    $("#start").click(function(){
        $('.screen1').hide();
        $('.formCommon').first().show();
        $('.button-group').show();
    });
    
    $('.button-group').hide();

    $("form .formCommon").each(function(e) {
        if (e != 0){
            $(this).hide();
        }   
        //console.log(e,'e num')        
    });  



     // range slider
    var slider = document.getElementById("waistSize");
    var sliderOutput = document.getElementById("sliderOutput");
    sliderOutput.innerHTML = slider.value;

    slider.oninput = function() {
        sliderOutput.innerHTML = this.value;
    }

    // datepicker
    $(".datePickerMonthYear").datepicker({
        changeMonth: true,
        changeYear: true,
        dateFormat: 'dd-mm-yy',
        beforeShow: function (input, inst) {
            setTimeout(function() {
                inst.dpDiv.find('a.ui-state-highlight').removeClass('ui-state-highlight');
            }, 100);
        }
    });

    
   

    // Custom method to validate username
    // $.validator.addMethod("usernameRegex", function(value, element) {
    //     return this.optional(element) || /^[a-zA-Z0-9]*$/i.test(value);
    // }, "Username must contain only letters, numbers");

    //firstname
    $.validator.addMethod("firstname", function (value, element) {
        return this.optional(element) || value == value.match(/^[a-zA-Z][a-zA-Z\s']*$/);
    }, "Kindly provide a first name");
  
    //lastname
    $.validator.addMethod("lastname", function (value, element) {
        return this.optional(element) || value == value.match(/^[a-zA-Z][a-zA-Z\s']*$/);
    }, "Kindly provide a last name");

    //email Address
    $.validator.addMethod("emailadd", function (value, element) {
        return this.optional(element) || value == value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/);
    }, "Kindly provide a valid email address");

    //mobile number
    $.validator.addMethod("mobilenum", function (value, element) {
        return this.optional(element) || value == value.match(/^[6789]\d{9}$/);
    }, "Kindly provide a valid mobile number");
    
    //pincode
    $.validator.addMethod("pincodenumber", function (value, element) {
        return this.optional(element) || value == value.match(/^[0-9]{6}$/);
    }, "Kindly provide a valid pincode");
    
    $(".form-style input[type=text], .form-style input[type=tel]").on("keydown", function(e) {
        if ($(this).attr("data-validation")) {
            if ($(this).attr("data-validation").indexOf("alphanumeric") != -1) {
                var alphanumericVal = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
                if (alphanumericVal.indexOf(e.key) == -1) {
                    if( !(e.key == 'Tab' || e.key == 'Backspace' || e.key == 'ArrowLeft' || e.key == 'ArrowRight' || e.key == 'Delete') ) {
                        return false;
                    }
                }
            }
            else if ($(this).attr("data-validation").indexOf("numeric") != -1) {
                var numericVal = "1234567890";
                if (numericVal.indexOf(e.key) == -1) {
                    if( !(e.key == 'Tab' || e.key == 'Backspace' || e.key == 'ArrowLeft' || e.key == 'ArrowRight' || e.key == 'Delete') ) {
                        return false;
                    }
                }
            }
            else 
            if ($(this).attr("data-validation").indexOf("alphabet") != -1) {
                var alphabetVal = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
                if (alphabetVal.indexOf(e.key) == -1) {
                    if( !(e.key == 'Tab' || e.key == 'Backspace' || e.key == 'ArrowLeft' || e.key == 'ArrowRight' || e.key == 'Delete') ) {
                        return false;
                    }
                }
            }
        }
    });


    $(".next").click(function(){
        var form = $("#formQuiz");
        form.validate({
            errorElement: 'span',
            errorClass: 'error-msg',
            highlight: function(element, errorClass, validClass) {
                $(element).closest('.form-field').addClass("has-error");
            },
            unhighlight: function(element, errorClass, validClass) {
                $(element).closest('.form-field').removeClass("has-error");
            },
            rules: {
                firstname: {
                    required: true,
                    firstname: true,
                },
                lastname: {
                    required: true,
                    lastname: true,
                },
                date: {
                    required: true,
                },
                subscription: {
                    required: true,
                },
                add1: {
                    required: true,
                },
                add2: {
                    required: true,
                },
                add3: {
                    required: false,
                },
                city: {
                    required: true,
                },
                state: {
                    required: true,
                },
                pincode: {
                    required: true,
                    pincodenumber: true,
                },
                mobile: {
                    required: true,
                    mobilenum: true,
                },
                email: {
                    required: true,
                    emailadd: true,
                },
                ft: {
                    required: true,
                },
                inches: {
                    required: false,
                },
                shirtSize: {
                    required: true,
                },
                waistSize: {
                    required: true,
                },
                kg: {
                    required: true,
                },
                shirtFitting: {
                    required: true,
                },
                bodytype: {
                    required: true,
                },
                box: {
                    required: true,
                },
                month: {
                    required: true,
                },
                
                
            },
            messages: {
                firstname: {
                    required: "First Name required",
                    minlength: "Kindly provide a First Name"
                },
                lastname: {
                    required: "Last Name required",
                    minlength: "Kindly provide a Last Name"
                },
                date: {
                    required: "Date required",
                },
                subscription: {
                    required: "select any one option",
                },
                add1: {
                    required: "Kindly provide a valid Address",
                },
                add2: {
                    required: "Kindly provide a valid Address",
                },
                add3: {
                    required: "Kindly provide a valid Address",
                },
                city: {
                    required: "City required",
                },
                state: {
                    required: "State required",
                },
                pincode: {
                    required: "Pincode required",
                    minlength: "Kindly provide a valid pincode",
                },
                mobile: {
                    required: "Mobile required",
                    minlength: "Kindly provide a valid mobile number"
                },
                email: {
                    required: "Email required",
                    minlength: "Kindly provide a valid email address",
                },
                ft: {
                    required: "Feet required",
                },
                shirtSize: {
                    required: "shirtSize required",
                },
                waistSize: {
                    required: "Waist required"
                },
                kg: {
                    required: "KGs required"
                },
                shirtFitting: {
                    required: "shirtFitting required",
                },
                bodytype: {
                    required: "bodytype required",
                },
                box: {
                    required: "box required",
                },
                month: {
                    required: "box required",
                },
            },
            errorPlacement: function(error, element) {
                if ( element.is(":radio") ) {
                    error.appendTo( element.parents('.group-radio') );
                } 
                else if ( element.is("#ft") ) {
                    error.appendTo( element.parents('.num-field') );
                }
                // else if ( element.is(":range") ) {
                //     error.appendTo( element.parents('.waist-group') );
                // }
                else { 
                    // This is the default behavior 
                    error.insertAfter( element );
                }
            },
            submitHandler: function () {
                //alert('form submit');
            }
        });

        if (form.valid() === true){
            if ($('.form1').is(":visible")){
                current_fs = $('.form1');
                next_fs = $('.form2');
            } else if($('.form2').is(":visible")){
                current_fs = $('.form2');
                next_fs = $('.form3');
            } else if($('.form3').is(":visible")){
                current_fs = $('.form3');
                next_fs = $('.form4');
            } else if($('.form4').is(":visible")){
                current_fs = $('.form4');
                next_fs = $('.form5');
            } else if($('.form5').is(":visible")){
                current_fs = $('.form5');
                next_fs = $('.form6');
            } else if($('.form6').is(":visible")){
                current_fs = $('.form6');
                next_fs = $('.form7');
            } else if($('.form7').is(":visible")){
                current_fs = $('.form7');
                next_fs = $('.form8');
            } else if($('.form8').is(":visible")){
                $('.button-group').hide();
                current_fs = $('.form8');
                next_fs = $('.form9');
            }
            
            next_fs.show();
            current_fs.hide();
        }

    });

    
    $('#previous').click(function(){
        if($('.form2').is(":visible")){
            current_fs = $('.form2');
            next_fs = $('.form1');
        }else if ($('.form3').is(":visible")){
            current_fs = $('.form3');
            next_fs = $('.form2');
        } else if ($('.form4').is(":visible")){
            current_fs = $('.form4');
            next_fs = $('.form3');
        } else if ($('.form5').is(":visible")){
            current_fs = $('.form5');
            next_fs = $('.form4');
        } else if ($('.form6').is(":visible")){
            current_fs = $('.form6');
            next_fs = $('.form5');
        } else if ($('.form7').is(":visible")){
            current_fs = $('.form7');
            next_fs = $('.form6');
        } else if ($('.form8').is(":visible")){
            current_fs = $('.form8');
            next_fs = $('.form7');
        } else if ($('.form9').is(":visible")){
            current_fs = $('.form9');
            next_fs = $('.form8');
        }


        next_fs.show();
        current_fs.hide();
    });






});



(function() {
    function toJSONString( form ) {
		var obj = {};
		var elements = form.querySelectorAll( "input" );
		for( var i = 0; i < elements.length; ++i ) {
			var element = elements[i];
			var name = element.name;
			var value = element.value;

			if( name ) {
				obj[ name ] = value;
			}
		}

		return JSON.stringify( obj );
	}

	document.addEventListener( "DOMContentLoaded", function() {
		var form = document.getElementById( "formQuiz" );
		var output = document.getElementById( "output" );
		form.addEventListener( "submit", function( e ) {
			e.preventDefault();
			var json = toJSONString( this );
			output.innerHTML = json;

		}, false);
        
	});

    
    //====== quiz page - end
    

})();