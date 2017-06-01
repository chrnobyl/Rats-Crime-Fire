$(document).ready(function(){
  console.log('Document ready!')
  var mapObj;

  setTimeout(() => {
    var marker = new google.maps.Marker({
      position: {lat: -26, lng: 143},
      map: mapObj
    });
  }, 2000);
  // setFormSubmitAction()
})

const mapObj = function(map) {
  debugger
  return function(){
    return map;
  }
}

mapObj(theMapFromInitMap);

mapObj() // returns theMapFromInitMap

function initMap() {
  var uluru = {lat: -25.363, lng: 131.044};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: {lat: -27, lng: 145},
    map: map
  });
  mapObj(map);
}

function setFormSubmitAction(){
  $('form#zip-code').on('submit', function(event){
    event.preventDefault()
    const zip = $('input[name = zip]').val()
    const url = `http://localhost:3000/api/v1/zip_codes/${zip}`

    $.ajax({
      url: url,
      data: data,
      success: function(data){
        console.log("hello!")
        // var nyc = {lat: 40.7255944265592, lng: -73.9446377360189}
      }

      // function(data){
      //   processData(data)
      // }
    })
  })
}

function processData(data) {
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







          // return `<li>${complaint.date}</li>`
          // })
          // $('ul#complaints').html(lis.join(''))
