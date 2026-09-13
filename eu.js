/* =========================================================
   GALERIAS DE ARTESANATO
========================================================= */


/* ABRIR GALERIA */

function abrirGaleria(tipo) {

    const galeria = document.getElementById("galeria-" + tipo);

    galeria.classList.add("aberta");
}


/* FECHAR GALERIA */

function fecharGaleria(tipo) {

    const galeria = document.getElementById("galeria-" + tipo);

    galeria.classList.remove("aberta");
}
