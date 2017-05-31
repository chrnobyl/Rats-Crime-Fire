$(document).ready(function(){
  console.log('Document ready!')


  $('form#zip-code').on('submit', function(event){
    event.preventDefault()
    const zip = $('input[name = zip]').val()
    const url = `http://localhost:3000/api/v1/zip_codes/${zip}`



    $.ajax({
      url: url,
      success: function(data){
        var map;
        var nyc = {lat: 40.7255944265592, lng: -73.9446377360189}
        function initMap() {
          map = new google.maps.Map(document.getElementById('map'), {
            zoom: 4,
            center: nyc
          })
        }

        data.complaints.map(function(complaint){
          // debugger
          var coords = [complaint.latitude, complaint.longitude]
          var latLng = new google.maps.LatLng(coords[0], coords[1])
          var marker = new google.maps.Marker({
            position: latLng,
            map: map
          })
        })
      }
    })
  })
})





          // return `<li>${complaint.date}</li>`
          // })
          // $('ul#complaints').html(lis.join(''))
