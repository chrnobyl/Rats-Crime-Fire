class Complaint {
  static all(callbackFn) {
    $.ajax({
      url: 'http://localhost:3000/api/v1/complaints',
      success: callbackFn
    })
  }
}
