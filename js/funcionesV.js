$(document).ready(function() {
    $("#btnregistrar_visita").click(function() {
        var validado=0;
        
        if(!$("input[name='TipoVisita']").is(':checked')){
            $("#validacion_tvisita").text("*");
        } else{
            $("#validacion_tvisita").text("");
            validado++;
        }
       
        if ($("#documento").val().length == 0) {
            $("#validacion_documento").text("*"); 
        } else  if ($("#documento").val().length != 10) {
            $("#validacion_documento").text("*Sólo 10 dígitos");
        }else {
            $("#validacion_documento").text("");
            validado++;
        }

        if ($("#tipodocumento").val().length == 0) {
            $("#validacion_tipodocumento").text("*");
            
        } else {
            $("#validacion_tipodocumento").text("");
            validado++;
        }

        if ($("#nombre").val().length == 0 ) {
            $("#validacion_nombre").text("*");
        }else if ($("#nombre").val().length > 20 ||$("#nombre").val().length < 2 ) {
            $("#validacion_nombre").text("*");
         }else {
            $("#validacion_nombre").text("");
            validado++;
        }
        
        if ($("#apellido").val().length == 0 ) {
            $("#validacion_apellido").text("*");
        }else if ($("#apellido").val().length > 20 ||$("#apellido").val().length < 2 ) {
            $("#validacion_apellido").text("*");
    }   else{
            $("#validacion_apellido").text("");
            validado++;
        }

        if ($("#direccion").val().length == 0 ) {
            $("#validacion_direccion").text("*");
        }  else{
            $("#validacion_direccion").text("");
            validado++;
        }

        if ($("#ciudad").val().length == 0) {
            $("#validacion_ciudad").text("*");
            
        } else {
            $("#validacion_ciudad").text("");
            validado++;
        }
        var fecha_actual =new Date();
        var fecha_v = new Date ($("#fechaV").val());
  
        if ($("#fechaV").val().length == 0 ){
            $("#validacion_fvisita").text("*");
        }else if(fecha_actual> fecha_v){
            $("#validacion_fvisita").text("*");
        alert('La fecha de visita debe ser mayor a la fecha actual');
         }else if(fecha_actual==fecha_v){
        alert('La fecha de visita no puede ser igual que la fecha actual');
        }
        else{
            $("#validacion_fvisita").text("");
            validado++;
        }
        if($("#correo").val().indexOf('@', 0) == -1 || $("#correo").val().indexOf('.', 0) == -1) {  
            $("#validacion_correo").text("*Correo inválido");  
        }else {
            $("#validacion_correo").text(""); 
            validado++;
            }

        
       
        if(validado == 9){
            swal.fire("Se agendó la visita!","Exitosamente","success")
            $("input").val(""); 
            $("select").val("");
           $("input[name='TipoVisita']").prop('checked',false);
        }
    }
    );

         
  
});
$(document).ready(function() {
    $('.solo_numeros').on("keyup",function() {
        this.value = this.value.replace(/[^0-9]/g, '');
        Ethis.value=this.value.toUpperCase();
    });
});

$(document).ready(function() {
    $('.solo_letras').on("keyup",function() {
        this.value = this.value.replace(/[^a-zA-Z]/g, '');
        this.value=this.value.toUpperCase();
    });
});

$("#fechaV").flatpickr({
    minDate: "today",
    maxDate: ""
}); // Calendario


$(document).ready(function(){
    $("#btnlimpiar").click(function()
    {
        $("input").val("");  
        $("select").val(""); 
        $("input[name='TipoVisita']").prop('checked',false);
    })
});