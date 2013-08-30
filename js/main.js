$('.thumbnail').click(function(){
    var fullSrc = $(this).find('img').attr('src').replace('_THUMB', '');
    $('.modal-body img').attr('src', fullSrc);
  	$('#myModal').modal({show:true});
});
