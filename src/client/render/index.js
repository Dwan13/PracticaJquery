/* Mudule Dependencies */
import $ from 'jquery'
import $tvShowsContainer from '../tv-shows-container'
var template = `<article class="tv-show"> 
    <div class="left img-container"> 
    <img src=":img:" alt=":img alt:"> 
    </div> 
    <div class="right info"> 
    <h1>:name:</h1> 
    <p>:summary:</p> 
    <button data-id=:id: class="like">💖</button>
</div> 
</article>`;

export default function renderShows(shows) {
    $tvShowsContainer.find('.loader').remove();
    shows.forEach(function(show) {
        var article = template
            .replace(':name:', show.name)
            .replace(':img:', show.image.medium)
            .replace(':summary:', show.summary)
            .replace(':img alt:', show.name + "Logo")
            .replace(':id:', show.id)
        var $article = $(article)
        $article.hide();
        $tvShowsContainer.append($article.fadeIn())
    })
}