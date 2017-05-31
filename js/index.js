$(document).ready(function(){
  console.log('Document ready!')
  $('form#zip-code').on('submit', function(event){
    event.preventDefault()
    const zip = $('input[name = zip]').val()
    const url = `http://localhost:3000/api/v1/zip_codes/${zip}`

    $.ajax({
      url: url,
      success: function(data){

        const lis = data.complaints.map(function(complaint){
          return `<li>${complaint.date}</li>`
          })
          $('ul#complaints').html(lis.join(''))
      }

    })
  })
})
