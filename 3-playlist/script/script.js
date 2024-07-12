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

        boton.innerHTML = '<i class="fa-solid fa-x boton__responsive"></i>';
    }

    else 
    {
        let boton = document.getElementById('barra__menu');
        boton.innerHTML = '<i class="fa-solid fa-bars boton__responsive"></i>';
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

window.onload = handleEvent;