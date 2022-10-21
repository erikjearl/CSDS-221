$(document).ready( () => {

    $('#hidden').hover(function() {
        $(this).css("color","black");
    },function() {
        $(this).css("color","white");
    })


    $('#adults').change(function(){
        let selectedOption = $('#adults option:selected')
        $('#displayCost').html("Cost: " + selectedOption.val()+ " text: " + selectedOption.text());
    })



    $("#reset").click(function(){
        toastr["info"]("Fields Successfully Cleared", "", {
            "closeButton": true,
            "positionClass": "toast-top-full-width",
            })
        $("form")[0].reset();
    })

    const validator = $("#form").validate({
        //debug: true,
        rules:{

        },
        messages: {

        },
        highlight: function (element, errorClass) {
            $(element).closest('.form-group').addClass('has-error');
        },
        unhighlight: function (element, errorClass) {
            $(element).closest('.form-group').removeClass('has-error');
        },
        submitHandler: function(form){
            //$("form")[0].reset();
            toastr["success"]("The form was successfully submitted", "", {
            "closeButton": true,
            "positionClass": "toast-top-full-width",
            })
            form.submit
        }
    })
    validator.resetForm(true);
})