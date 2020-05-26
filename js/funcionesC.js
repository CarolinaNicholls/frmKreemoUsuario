$(document).ready(function(){
    let isValid = 0;

    $("#registrar").click(function(){
        //alert("bienvenido");
        //const patron = new RegExp('^[A-Z]+$', 'i');
        // || !patron.test($("#nombre").val()
    
        if ($("#nombre").val() == null || $("#nombre").val().length > 20 || $("#nombre").val() < 3 || $("#nombre").val().length == 0 )
        {
            $("#vNombre").text("Debes ingresar nombre.");
            document.getElementById('nombre').focus();
        }
        else
        {
            $("#vNombre").text("");
            isValid++;
          
        }

        //const patronApellido = new RegExp('^[A-Z]+$', 'i');
        // || !patronApellido.test($("#apellido").val()

        if ($("#apellido").val() == null || $("#apellido").val().length > 20 || $("#apellido").val() < 3 || $("#apellido").val().length == 0 )
        {
            $("#vApellido").text("Debes ingresar apellido.");
            //document.getElementById('apellido').focus();
        }
        else
        {
            $("#VApellido").text("");
            isValid++;
          
        }

        if ($("#documento").val() == null || $("#documento").val().length < 10 || $("#documento").val().length > 10 || isNaN($("#documento").val()) )
        {
            //alert("Ingrese valores sólo valores númericos de 10 dígitos.");
            $("#vDocumento").text("* Debe ingresar su número de documento.");
            document.getElementById("documento").focus();
        }
        else
        {
           isValid++;
           $("#vDocumento").text("");
        }



        if ($("#telefono").val().length == 0 )
        {
            $("#vTelefono").text("* Debe ingresar número de teléfono.");
           
        }
        else if ($("#teleono").val() > 10)
        {
            $("#vTelefono").text("El número de teléfono es de 10 digitos.");
            
        }
        else if ($("#telefono").val() < 10)
        {
            $("#vTelefono").text("El número de teléfono es de 10 digitos.");
           
        }
        else
        {
            $("#vTelefono").text("");
            isValid++;   
        }

        //const patronDir = new RegExp('[a-zA-Z1-9À-ÖØ-öø-ÿ]+\.?(( |\-)[a-zA-Z1-9À-ÖØ-öø-ÿ]+\.?)* (((#|[nN][oO]\.?) ?)?\d{1,4}(( ?[a-zA-Z0-9\-]+)+)?)');
        // || !patronDir.test($("#direccion").val()

        if ($("#direccion").val() == null || $("#direccion").val().length > 50 || $("#direccion").val() < 10 || $("#direccion").val().length == 0 
       )
        {
            $("#vDireccion").text("Debe ingresar su dirección.");
            document.getElementById('direccion').focus();
        }
        else
        {
            $("#vDireccion").text("");
            isValid++;
          
        }

        const patronCorreo = new RegExp('/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/')

        if ($("#correo").val() == null || $("#correo").val().length > 20 || $("#correo").val() < 3 || $("#correo").val() == 0 || !patronCorreo.test($("#correo").val()))
        {
            $("#vCorreo").text("Debe ingresar su correo.");
            document.getElementById('direccion').focus();
        }
        else
        {
            $("#vCorreo").text("");
            isValid++;
          
        }

        // || !patron.test($("#cargo").val()

        if ($("#cargo").val() == null || $("#cargo").val().length > 20 || $("#cargo").val() < 3 || $("#cargo").val().length == 0 )
        {
            $("#vCargo").text("Debe ingresar su cargo.");
            document.getElementById('nombre').focus();
        }
        else
        {
            $("#vCargo").text("");
            isValid++;
          
        }

        //const patronObra = new RegExp('^[A-Z]+$', 'i');
        // || !patronObra.test($("#nombreObra").val()

        if ($("#nombreObra").val() == null || $("#nombreObra").val().length > 20 || $("#nombreObra").val() < 3 || $("#nombreObra").val() == 0 )
        {
            $("#vNOmbreObra").text("Debes ingresar nombre de la obra.");
            document.getElementById('nombre').focus();
        }
        else
        {
            $("#vNOmbreObra").text("");
            isValid++;
          
        }
    
        console.log("isValid es: " + isValid);
    
        if (isValid == 7){
            Swal.fire("Registro exitoso!!!");
            //window.location.href = "index.html";
            
        }
        else
        {
            Swal.fire({
                icon: 'error',
                title: 'Debes llenar todos los campos.',
                text: 'Algun campo no ha sido seleccionado!',
              })
        }
        
    })
    
})

function limpiar()
{
    Swal.fire('Vamos a limpiar los campos.')
    // alert("Desea limpiar lo campos?");
    $("input").val("");
    // $("select").val("");
    // $("textarea").val("");
    // $("input[name='pago']").prop('checked',false);
}

function salir()
{
    window.location.href = "index.html";
}

$(document).ready(function (){
    $(".solo_numeros").on("keyup", function(){
        this.value = this.value.replace(/[^0-9]/g,'');
    })
})

$(document).ready(function (){
    $(".solo_mayus_letras").on("keyup", function(){
        this.value = this.value.replace(/[^a-zA-Z]/g,'');
        this.value = this.value.toUpperCase();
    })
})