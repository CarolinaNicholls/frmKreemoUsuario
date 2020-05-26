$(document).ready(function(){
    $("#btncotizar").click(function(){
         //validacion Cliente
         let validado=0;

         if($("#cliente").val().length == 0 )
         {
              $("#validacion_cliente").text("*");
              $("#validacion_cliente2").text("Debe ingresar un Cliente");
         }else
         {
              $("#validacion_cliente").text("");
              $("#validacion_cliente2").text("ok");
              validado++;
         }

         //validacion Direccion
         if($("#direccion").val().length == 0 )
         {
              $("#validacion_direccion").text("*");
              $("#validacion_direccion2").text("Debe ingresar la Direccion");
         }else
         {
              $("#validacion_direccion").text("");
              $("#validacion_direccion2").text("ok");
              validado++;
         }
         //identificacion
         if($("#identificacion").val() == 0 || $("#identificacion").val() == null )
         {
              $("#validacion_identificacion").text("*");$("#validacion_identificacion2").text("Debes selecionar una cantidad");
         }else
         {
              $("#validacion_identificacion").text("");$("#validacion_identificacion2").text("ok");
              validado++;
         }

         //documento

         if($("#documento").val().length == 0 )
         {
              $("#validacion_documento2").text("Debes Ingresar tu  documento");$("#validacion_documento").text("*");
         }else if ($("#documento").val().length < 10 || $("#documento").val().length > 10 )
         {
              $("#validacion_documento2").text(" El documento debe ser de 10 digitos");$("#validacion_documento").text("*");
         }else
         {
              $("#validacion_documento").text("");$("#validacion_documento2").text("OK");
              validado++;
         }
         // tipo concreto
         if($("#tipo_concreto").val() == 0 )
         {
              $("#validacion_tipocon2").text("Debes Ingresar tu  documento");$("#validacion_tipocon").text("*");
              
         }else
         {
              $("#validacion_tipocon2").text("ok");$("#validacion_tipocon").text("");
              validado++;
         }
         //etapa
         if (!$("input[name='etapa']").is(':checked')) 
         {
             
              $("#validacion_etapa2").text("Debe seleccionar una etapa");$("#validacion_etapa").text("*");
         }else
         {
              $("#validacion_etapa2").text("ok");$("#validacion_etapa").text("");
              validado++;
         }
         //celullar
         if($("#telefono").val().length == 0 )
         {
             
              $("#validacion_cel").text("*");$("#validacion_cel2").text("Debe ingresar # de celular");
         }
         else if ($("#telefono").val().length > 10 || $("#telefono").val().length < 7  ) 
         {
              $("#validacion_cel2").text("El numero debe  telefonico debe ser entre 7 y 10 digitos");$("#validacion_cel").text("*");
         }
         else
         {
              $("#validacion_cel").text("");$("#validacion_cel2").text("ok");
              validado++;
         }


         if ($("#fecha").val().length == 0 ) {
              
              Swal.fire({
                   title:'Verificar',
                   text:'Debes selecionar  una fecha de inicio',
                   icon:'error',
                   
                   padding:'1rem',
                   //background:'#000',
                   backdrop:true,
                   //toast: true,
                   position:'center',
              });
              
         }else{

              validado++;

         }

         //fecha
         let fecha_actual = new Date();
         let fecha_inicioobra =  new Date($("#fecha").val())
         if (fecha_inicioobra==fecha_actual || fecha_inicioobra<fecha_actual ) 
         {
              $("#validacion_fecha").text("*");$("#validacion_fecha2").text("La  fecha de inicio de obra  debe ser mayor al dia de  hoy");
         }
         else
         {
              $("#validacion_fecha").text("");$("#validacion_fecha2").text("");
              validado++;
         }

      
        

         if (!$("input[name='condiciones']").is(':checked')) //el caractes  signo de admiracion es para  negar
         {
             
              $("#validacion_condiciones").text(" * Debe  aceptar terminos y condiciones");
         }
         else
         {
              $("#validacion_condiciones").text("");
              validado++;
         }


         if (validado==10) 
         {
              Swal.fire('Registro exitoso')
              // alert("registro exitoso");
              $("input").val("");
              $("select").val("0");
              $("input[name='etapa']").prop('checked',false);
              $("input[name='condiciones']").prop('checked',false);
     
              $("#validacion_cliente").text("");$("#validacion_cliente2").text("");
              $("#validacion_direccion").text("");$("#validacion_direccion2").text("");
              $("#validacion_direccion").text("");
              $("#validacion_direccion2").text("");
              $("#validacion_identificacion").text("");
              $("#validacion_identificacion2").text("");
              $("#validacion_documento").text("");
              $("#validacion_documento2").text("");
              $("#validacion_tipocon2").text("");
              $("#validacion_tipocon").text("");
              $("#validacion_etapa2").text("");$("#validacion_etapa").text("");
              $("#validacion_cel").text("");$("#validacion_cel2").text("");
              $("#validacion_fecha").text("");$("#validacion_fecha2").text("");
              $("#validacion_condiciones").text("");
     

         }else{
              
              Swal.fire('Pendientes  registros por validar');
         }


    });
})


$(document).ready(function(){
    $("#btnlimpiar").click(function(){

         $("input").val("");
         $("select").val("0");
         $("input[name='etapa']").prop('checked',false);
         $("input[name='condiciones']").prop('checked',false);

         $("#validacion_cliente").text("");$("#validacion_cliente2").text("");
         $("#validacion_direccion").text("");$("#validacion_direccion2").text("");
         $("#validacion_direccion").text("");
         $("#validacion_direccion2").text("");
         $("#validacion_identificacion").text("");
         $("#validacion_identificacion2").text("");
         $("#validacion_documento").text("");
         $("#validacion_documento2").text("");
         $("#validacion_tipocon2").text("");
         $("#validacion_tipocon").text("");
         $("#validacion_etapa2").text("");$("#validacion_etapa").text("");
         $("#validacion_cel").text("");$("#validacion_cel2").text("");
         $("#validacion_fecha").text("");$("#validacion_fecha2").text("");
         $("#validacion_condiciones").text("");

    });
})

$(document).ready(function(){

    $(".solo_numeros").on("keyup",function(){
         this.value = this.value.replace(/[^0-9]/g,'');
    });

    $(".solo_letras").on("keyup",function(){
         this.value = this.value.replace(/[^a-zA-Z]/g,'');
    });


});