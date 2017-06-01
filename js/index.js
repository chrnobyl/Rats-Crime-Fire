var mapObj;
$(document).ready(function(){
  console.log('Document ready!')
  setFormSubmitAction()

  // setTimeout(() => {
  //
  //   var marker = new google.maps.Marker({
  //     position: {lat: -26, lng: 143},
  //     map: mapObj
  //   });
  // }, 2000);
  // setFormSubmitAction()

})

function initMap() {
  var nyc = {lat: 40.7255944265592, lng: -73.9446377360189};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: nyc
  });
  mapObj = map

}

function makeNewMarker(position){
  var marker = new google.maps.Marker({
    position: position,
    map: mapObj
  })
}

function setFormSubmitAction(){
  $('form#zip-code').on('submit', function(event){
    event.preventDefault()
    const zip = $('input[name = zip]').val()
    // const url = `http://localhost:3000/api/v1/zip_codes/${zip}`
    const url = `http://localhost:3000/api/v1/complaints/search?zip_code=${zip}&complaint_type=rodent&description=rat+sighting`

    $.ajax({
      url: url,
      success: function(data){
        console.log("hello!")
        data.map(function(complaint){
          var position = {lat: complaint.latitude, lng: complaint.longitude}
          makeNewMarker(position)
        })
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
