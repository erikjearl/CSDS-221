$(document).ready(function(){
    let numAdults = 1;
    let checkIn;
    let checkOut;
    let numDays;
    let cost;

    function calcNumDays(){
        if(checkIn && checkOut){
            console.log("Days")
            numDays = checkOut.diff(checkIn,"days") 
            $('#displayDays').val(numDays + " days");
        }
    }

    function calcCost(){
        if(numAdults && checkIn && checkOut){
            cost = 150 * numAdults * numDays;
            $('#displayCost').val(cost);
        }
    }

    // update on checkIn date change
    $('#checkIn').change(function(){
        checkIn = moment($(this).val());
        calcNumDays();
        calcCost();
    })

    // update on checkOut date change
    $('#checkOut').change(function(){
        checkOut = moment($(this).val());
        calcNumDays();
        calcCost();
    })
    
    // update on numAdults selection
    $('#adults').change(function(){
        numAdults = $('#adults option:selected').val();
        calcCost();
    })

    // reset button
    $("#reset").click(function(){
        toastr["info"]("Fields Successfully Cleared", "", {
            "closeButton": true,
            "positionClass": "toast-top-full-width",
        });
        numAdults = 1;
        checkIn = null;
        checkOut = null;   
        numDays = null;
        cost = null;
        $('#displayDays').html("Displays days...");
        $('#displayCost').html("Displays cost...");
        validator.resetForm(true);
    })

    const validator = $("#form").validate({
        //debug: true,
        rules:{
            displayCost:{
                min:1
            }
        },
        messages:{
            username:"",
            firstName:"",
            lastName:"",
            inputPhone:"",
            inputFax:"",
            inputEmail:"",
            displayCost:"",
        },
        highlight: function (element, errorClass) {
            const name = $(element).attr('name')
            let errorMSG = "Missing field " + name;
            if(name === "displayCost"){
                errorMSG = "Cost is not calculated"
                if(cost<=0){
                    errorMSG = "Cost must be a positive number"
                }
            }
            toastr["error"](errorMSG, "", {
                "closeButton": true,
                "positionClass": "toast-top-right",
            });
            $(element).closest('.form-group').addClass('has-error');
        },
        unhighlight: function (element, errorClass) {
            $(element).closest('.form-group').removeClass('has-error');
        },
        
        submitHandler: function(form){
            toastr["success"]("The form was successfully submitted", "", {
            "closeButton": true,
            "positionClass": "toast-top-full-width",
            });
            form.submit;
        },
    })
})