$(document).ready(function () {
    $("#formularioLogin").validate({
        submitHandler: function (form) {
            var email = $("#email").val();
            alert(email)
        },
        rules: {
            nEmail: {
                required: true,
                email: true,
            },
            nContraseña: {
                required: true,
                minlength: 5,
            },
            terminos: {
                required: true,
            },
        },
        messages: {
            nEmail: {
                required: "Ingrese correo electronico",
                email: "Ingrese un correo valido",
            },
            nContraseña: {
                required: "Ingrese su contraseña",
                minlength: "La contraseña debe terner minimo 5 caracteres"
            },
            terminos: {
                required: "Debe aceptar los terminos del servicio"
            },
        },
        errorElement: "div",
        errorPlacement: function (error, element) {
            error.addClass('invalidacion-retroalimentacion');
            element.closest('.form-group').after(error);
        },
        highlight: function (element, errorClass, validClass) {
            $(element).addClass('error');
            $("#linea,.line").hide();
        },
        unhighlight: function (element, errorClass, validClass) {
            $(element).removeClass('error');
            $("#linea,.line").show();
            
        }
    })
});