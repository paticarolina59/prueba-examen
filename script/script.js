function handleEvent () 
{
    
     // Abre y cierra menu Diseño
     let botonDiseno = document.getElementById ('botonDiseno');
     botonDiseno.addEventListener('click', apareceYDesapareceSubMenu);

     // Abre y cierra menu Foto
     let botonFoto = document.getElementById ('botonFoto');
     botonFoto.addEventListener('click', apareceYDesapareceSubMenu2);

     // Cambia el menu de barra a x y muestra menu 
     let botonMenu = document.getElementById ('barra__menu');
     botonMenu.addEventListener('click', muestraMenu);


     // Aparece busqueda
     let botonLupa = document.getElementById ('boton__lupa');
     botonLupa.addEventListener('mouseenter', muestraBusqueda);

     let botonLupaNo = document.getElementById ('cuadro__buscar');
     botonLupaNo.addEventListener('mouseleave', desapareceBusqueda);

     // Funcion aplicada a conocimientos
    let boton1 = document.getElementById('primerBoton');
    boton1.addEventListener('click', muestraDiv);

    let boton2 = document.getElementById('segundoBoton');
    boton2.addEventListener('click', muestraDiv);

    // modal de envio 
    let botonEnviar = document.getElementById('modalEnviar');
    botonEnviar.addEventListener('click', apareceModal)

    // Cerrar modal
    let cerrarModal = document.getElementById('cerrarModalA');
    cerrarModal.addEventListener('click', desapareceModal)


     // SLICE 
     let arrayBotones = document.getElementsByClassName('contenedor__boton');
    
        for (let i = 0; i < arrayBotones.length; i++)
        {
            arrayBotones[i].addEventListener('click',seleccionaImagen)
        }
}

// HEADER

function apareceYDesapareceSubMenu()
{
    let submenu = document.getElementById('sublistaDiseno');
    submenu.classList.toggle('nuevosubmenu');
}

function apareceYDesapareceSubMenu2()
{
    let submenu = document.getElementById('sublistaFoto');
    submenu.classList.toggle('nuevosubmenu');
}


// Abre submenu colecction
function muestraSubMenu2() 
{
    let submenu = document.getElementsByClassName('navegador__sublistaFoto');

    for (let i = 0; i < submenu.length; i++)
    {
        submenu[i].style.maxHeight = '0';
    }

    submenu[0].style.maxHeight = '11rem';
}

// Oculta submenu colecction
function ocultarSubMenu2() 
{
    let submenu = document.getElementsByClassName('navegador__sublistaFoto');

    for (let i = 0; i < submenu.length; i++)
    {
        submenu[i].style.maxHeight = '0';
    }
}
    
function muestraMenu () 
{
    let lista = document.getElementById('listaCompleta');

    lista.classList.toggle('muestrate');

    if (lista.classList.contains('muestrate') == true) 
    {
        let boton = document.getElementById('barra__menu');

        boton.innerHTML = '<i class="fa-solid fa-x"></i>';
    }

    else 
    {
        let boton = document.getElementById('barra__menu');
        boton.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }
}

// Abre buscador
function muestraBusqueda () 
{
    let lupa = document.getElementById('buscar');

    lupa.style.display = 'block';
}

// Desaparece buscador
function desapareceBusqueda () 
{
    let lupa = document.getElementById('buscar');

    lupa.style.display = 'none';
}

// SLIDE

let arrayImagenes = ['./img/banner_mimeomia-01.webp','./img/banner_mimeomia-02.webp','./img/banner_mimeomia-03.webp','./img/banner_mimeomia-04.webp']
let posicion = 0;
let isApagado = false;


function seleccionaImagen (e)
{
    let valorBoton = e.target.value;
    let arrayBotones = document.getElementsByClassName('contenedor__boton');

    for (let i = 0; i < arrayBotones.length; i++)
    {
        if (valorBoton == i)
            {
                arrayBotones[i].style.opacity = '1';
            }
        else 
            {
                arrayBotones[i].style.opacity = '0.5';
            }
    }

    posicion = parseInt(valorBoton);
    
    let imagen = document.getElementById('imagen');
    imagen.src = arrayImagenes[posicion]
}

function pasaImagen()
{
    let imagen = document.getElementById('imagen');

    posicion = posicion + 1;

    if (posicion == 4)
    {
        posicion = 0
    }
    
    imagen.src = arrayImagenes[posicion];

    let arrayBotones = document.getElementsByClassName('contenedor__boton');

    for (let i = 0; i < arrayBotones.length;i++)
    {
        if (i == posicion) 
        {
            arrayBotones[i].style.opacity = '1';
        }
        else 
        {
            arrayBotones[i].style.opacity = '0.5';
        }
    }
} 


function atrasImagen() 
{
    posicion = posicion - 1;

    if (posicion == - 1)
    {
        posicion = 4
    }

    let imagen = document.getElementById('imagen');
    imagen.src = arrayImagenes[posicion];
}

let intervalo = setInterval(pasaImagen,3000);

// MAIN
     // Funcion aplicada a conocimientos
     function muestraDiv(e) 
{
    let div = document.getElementsByClassName('contenedor__conocimientos');

    for (let i = 0; i < div.length; i++)
    {  
        div[i].style.display ='none';
    }

    let valor = parseInt(e.target.value);
    div[valor].style.display = 'block'
}

    // Funcion de aparece modal
    function apareceModal () 
{
    let agradecimiento = document.getElementById('agradecimiento');

    agradecimiento.style.display = 'block';
}

    // Funcion de aparece modal
    function desapareceModal () 
{
    let agradecimiento = document.getElementById('agradecimiento');

    agradecimiento.style.display = 'none';
}



window.onload = handleEvent;