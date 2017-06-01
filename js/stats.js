$(document).ready(function(){
  $('form#total_complaints').on('submit', function(event){
    event.preventDefault()
    const guess = $('input[name=tcomplaints]').val()
    $.ajax({
      url: 'http://localhost:3000/api/v1/boroughs',
      success: function(data){
        var total = 0
        data.forEach(function(borough){
          total += borough.total_complaints
        })
        if (guess > (total - total *.1) && guess < (total + total *.1)){
        $('#ans1Desc').html ('<h5> Great guess! The actual answer is: </h5>')
        $('#ans1').html(total)
      } else {
        $('#ans1Desc').html ('<h5> Not really a good guess at all! The actual answer is: </h5>')
        $('#ans1').html('<h5>' + total + " complaints" + '</h5>')
      }
      }
    })
  })
  $('#submitButton').on('click', function(event){
    event.preventDefault()
    const guess2 = $('input[name=bcomplaints]').val()
    $.ajax({
      url: 'http://localhost:3000/api/v1/boroughs',
      success : function(data){
        const complaints = data.map(function(borough){
          var boro = {
            name : '',
            tcomplaints: 0
          }
          boro.name = borough.name
          boro.tcomplaints = borough.total_complaints
          return boro
        })
        var high = 0
        var ans = ''
        for (i in complaints) {
          if (complaints[i].tcomplaints > high){
            ans = complaints[i].name
            high = complaints[i].tcomplaints
          }
        }
        if (guess2 === ans){
              $('#ans2Desc').html ('<h5> Indeed! All those dirty Brooklyn hipsters do is complain! </h5>')
            } else {
              $('#ans2Desc').html ('<h5> Despite ($"#your incorrect reasoning") certainly being true, the answer is actually Brooklyn!  </h5>')
            }
      }
    })
  })
  $('#submitButton').on('click', function(event){
    event.preventDefault()
    const guess2 = $('input[name=bcomplaints]').val()
    $.ajax({
      url: 'http://localhost:3000/api/v1/boroughs',
      success : function(data){
        const complaints = data.map(function(borough){
          var boro = {
            name : '',
            tcomplaints: 0
          }
          boro.name = borough.name
          boro.tcomplaints = borough.total_complaints
          return boro
        })
        var high = 0
        var ans = ''
        for (i in complaints) {
          if (complaints[i].tcomplaints > high){
            ans = complaints[i].name
            high = complaints[i].tcomplaints
          }
        }
        if (guess2 === ans){
              $('#ans2Desc').html ('<h5> Indeed! All those dirty Brooklyn hipsters do is complain! </h5>')
            } else {
              $('#ans2Desc').html ('<h5> Despite ($"#your incorrect reasoning") certainly being true, the answer is actually Brooklyn!  </h5>')
            }
      }
    })
  })






})


// CatchPhrase.all(function(data){
//   const listView = new CatchPhraseListView(data)
//   $('#phrases').html( listView.render() )
// })
