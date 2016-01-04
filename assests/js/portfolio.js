
$(document).ready(function(){/* copy loaded thumbnails into carousel */
$('.row .thumbnail').on('load', function() {

}).each(function(i) {
  attachModal(this, i);
});

function attachModal(thumb, counter) {
  if(thumb.complete && $('.carousel-inner').children().length >= counter) {
    var item = $('<div class="item"></div>');
    var itemDiv = $(thumb).parents('div');
    var title = $(thumb).parent('a').attr("title");

    item.attr("title",title);
    $(itemDiv.html()).appendTo(item);
    item.appendTo('.carousel-inner');
    if (counter==0){ // set first item active
     item.addClass('active');
    }
  } else {
      setTimeout(function(){attachModal(thumb, counter);}, 1000);
  }
}

/* activate the carousel */
$('#modalCarousel').carousel({interval:false});

/* change modal title when slide changes */
$('#modalCarousel').on('slid.bs.carousel', function () {
  $('.modal-title').html($(this).find('.active').attr("title"));
})

/* when clicking a thumbnail */
$('.row .thumbnail').click(function(){
    var idx = $(this).parents('div').index();
    var id = parseInt(idx);
    $('#photoModal').modal('show'); // show the modal
    $('#modalCarousel').carousel(id); // slide carousel to selected

});

});