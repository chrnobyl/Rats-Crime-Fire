$(document).ready(function(){
  console.log('Document ready!')
  var map;
  function initMap() {
    map = $('#map')
  }

  $('form#zip-code').on('submit', function(event){
    event.preventDefault()
    const zip = $('input[name = zip]').val()
    const url = `http://localhost:3000/api/v1/zip_codes/${zip}`



    $.ajax({
      url: url,
      success: function(data){

        data.complaints.map(function(complaint){
          debugger
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
