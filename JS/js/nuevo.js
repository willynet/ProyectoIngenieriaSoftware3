var mielemento = $("#cabezera");
mielemento.text("Practica jQuery");

$("#form").submit(function(e){
	e.preventDefault();
});

$("#boton").click(function(){
	alert("Me dieron click");
});

        $().ready(function () {
            $("#form").validate({
                debug: true,
                rules: {
                    nombre: {
                        required: true,
                        minlength: 2
                    },
                    edad: {
                        required: true,
                        digits: true,
                        min: 18,
                        max: 99
                    }
                }
            });
        });