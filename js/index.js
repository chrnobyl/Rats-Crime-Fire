var mapObj

$(document).ready(function(){
  console.log('Document ready!')
  setFormSubmitAction()
})

function setFormSubmitAction(){
  $('form#zip-code').on('submit', function(event){
    event.preventDefault()
    const zip = $('input[name = zip]').val()
    const url = `http://localhost:3000/api/v1/complaints/search?zip_code=${zip}&complaint_type=rodent&description=rat+sighting`

    $.ajax({
      url: url,
      success: function(data){
          processData(data)
      }
    })
  })
}

function initMap() {
  var nyc = {lat: 40.7255944265592, lng: -73.9446377360189}
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: nyc
  })
  mapObj = map
}

function makeNewMarker(position){
  new google.maps.Marker({
    position: position,
    map: mapObj
  })
}

function processData(data) {
  data.map(function(complaint){
    const coords = [complaint.latitude, complaint.longitude]
    const latLng = new google.maps.LatLng(coords[0], coords[1])
    makeNewMarker(latLng)
  })
}
