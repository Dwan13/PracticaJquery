/* window.onload = function() {
    alert('loaded')
} */
/* Conviene utilizar la función Ready */
/* $(document).ready(function({
    alert('ready')
})) */
/* $.noConflict(); //así evitamos problemas con prototipe
jQuery(document).ready(function($)) {

    } */
/* $ prototipe */
/* 
$(function() {
    var header = document.getElementById('app-header');
    console.log(header);
}) */
/* $(function() {
    var header = $('h1'); // Esto reemplaza el getElementById en jQuery 
    console.log(header);
}) */
/* $(function() {
    var subheader = $('h1 + h2');// Todos los h2 hermanos del h1
    console.log(subheader);
}) */
/* $(function() {
        var header = $('header');
        var title = $('h1', header[0]);//Así se escogen los elementos h1 que esten en header
        console.log(title);
    }) */
/* $(function() {
    var header= document.getElementById('app-header')
    var $header = $(header); //Así se definen los jQuery objects
}) */
/* $(function() {
    var headings = $('h1,h2'); //así se seleccionan todolos los elementos que cumplan una condición en este caso que sean h1 y h2
    console.log(headings);
}) */
/* $(function() {
    var header = document.getElementById('app-header')
    var seleccion = $([document, header]); // Array de jQuere objects
    $(':input') //<input>,<textarea> trae todos los elementos de ese tipo
}) */
/* ############################################################################################# */
/* $(function() {
    var header = document.getElementById('app-header')
    var seleccion = $([document, header]);
    $('app-header').fine('h1') //forma más rápida que getElement
    $('app-header').has('h1') //Todos los header que tengan un h1
    $('app-header').not('h1') //Todos los header que no tengan un h1
     $('p') // se pueden concatenar
        .filter('.text') //Todos los p ue tengan la classe text
        .has('a') // dentro de los p que tengan un a
        .eq(1)

}) */
/* $(function() {
    var header = document.getElementById('app-header')
    var seleccion = $([document, header]);
    var ps = $('p')
    var p = document.createElement('p');
    document.body.appendChild(p)
    ps = ps.add(p) // así se inserta
}) */
/* $(function() {
    var p = document.createElement('p');
    p.innerHTML = "Hola a todos"
    document.body.appendChild(p)
    ps = ps.add(p) // así se inserta
}) */
/* $(function() {
    //Función en jQuery para crear nuevos elementos
    var a = $('<a>', {
        href: 'http://platzy.com',
        target: '_blank',
        html: 'Ir a Platzi'
    })
    $('#app-body').append(a);
    //manipulación de atributos
    a
        .attr('href', 'http://google.com')
}) */
/* $(function() {
    $('h1').addClass('danger');
    //Métodos de manipulación de clase
    setTimeout(function() {
        $('h1').removeClass('danger');
    }, 1500)
}) */
/* $(function() {
    //Manipulación de css
    var $h1 = $('h1');
    $h1.css({
        'font-size': '70px'
    })
}) */
import $ from 'jquery';
$(function() {
    var $tvShowsContainer = $('#app-body').find('.tv-shows')
    $tvShowsContainer.on('click', 'button.like', function(ev) {
        var $this = $(this);
        /* $this.animate({
            'fontSize': '30px'
        }, 'fast') */
        $this.closest('.tv-show').toggleClass('liked')
    })

    function renderShows(shows) {
        $tvShowsContainer.find('.loader').remove();
        shows.forEach(function(show) {
            var article = template
                .replace(':name:', show.name)
                .replace(':img:', show.image.medium)
                .replace(':summary:', show.summary)
                .replace(':img alt:', show.name + "Logo")
            var $article = $(article)
            $article.hide();
            $tvShowsContainer.append($article.fadeIn())
        })
    }
    /* Submbit search form */
    $('#app-body')
        .find('form')
        .submit(function(ev) {
            ev.preventDefault();
            var Busqueda = $(this)
                .find('input[type="text"]')
                .val();
            $tvShowsContainer.find('.tv-show').remove()
            var $loader = $('<div class="loader">');
            $loader.appendTo($tvShowsContainer);
            $.ajax({
                url: 'http://api.tvmaze.com/search/shows',
                data: { q: Busqueda },
                success: function(res, textStatus, xhr) {
                    $loader.remove();
                    var shows = res.map(function(el) { //map permite recorrecr todo el contenido del data
                        return el.show;
                    })
                    renderShows(shows);
                }
            })
        })
    var template = '<article class="tv-show">' +
        '<div class="left img-container">' +
        '<img src=":img:" alt=":img alt:">' +
        '</div>' +
        '<div class="right info">' +
        '<h1>:name:</h1>' +
        '<p>:summary:</p>' +
        '<button class="like">💖</button>'
    '</div>' +
    '</article>';
    if (!localStorage.shows) {
        $.ajax('http://api.tvmaze.com/shows')
            .then(function(shows) { //Uso de promesas
                $tvShowsContainer.find('.loader').remove()
                localStorage.shows = JSON.stringify(shows);
                renderShows(shows);
            })
    } else {
        renderShows(JSON.parse(localStorage.shows));
    }

})