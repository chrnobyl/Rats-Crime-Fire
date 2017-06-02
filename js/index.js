var mapObj
var markers = []
var infoWindows = []

$(document).ready(function(){
  console.log('Document ready!')
  setFormSubmitAction()
  ComplaintCategories.getGroupedComplaints()
})

function setFormSubmitAction(){
  $('form#zip-code').on('submit', function(event){
    event.preventDefault()
    const zip = $('input[name = zip]').val()
    const category = $('select[name = complaint-category]').val()
    const url = `https://infinite-ocean-43235.herokuapp.com/api/v1/complaints/search?zip_code=${zip}&complaint_type=${category}`

    $.ajax({
      url: url,
      success: function(data){
          updateMarkers(data)
      }
    })
  })
}

function initMap() {
  var nyc = {lat: 40.7255944265592, lng: -73.9446377360189}
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 11,
    center: nyc
  })
  mapObj = map
}

function makeNewMarker(complaint){
  const coords = [complaint.latitude, complaint.longitude]
  const latLng = new google.maps.LatLng(coords[0], coords[1])
  var infoWindow = new google.maps.InfoWindow({
      content: `${complaint.description}<br/> ${complaint.date}`
    })
    infoWindows.push(infoWindow)
  var marker = new google.maps.Marker({
    position: latLng,
    map: mapObj
  })

  marker.addListener('click', function() {
    closeAllInfoWindows()
    infoWindow.open(map, marker);
  })
  markers.push(marker)
}

function updateMarkers(data) {
  clearAllMarkers()
  data.map(function(complaint){
    makeNewMarker(complaint)
  })
}

function clearAllMarkers(){
  markers.forEach(function(marker){
    marker.setMap(null)
  })
}

function closeAllInfoWindows(){
  infoWindows.forEach(function(infoWindow){
    infoWindow.close()
  })
}
