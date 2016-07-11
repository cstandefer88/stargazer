$(document).ready(function() {


$('#search').on('submit', function(event) {
  event.preventDefault();
  var starSearch = $('#search-name').val();
  search(starSearch);
  });
})

function showImage(json) {
    var image = json.image.src
    $('#preview').html(`<div><img src='${image}'</div>`)
};


function search(name) {

  var api = 'http://www.strudel.org.uk/lookUP/json/?name='+name;

  $.ajax({
    method: "GET",
    url: api,
    dataType: 'jsonp',
    jsonpCallback: "showImage"
  })

}
