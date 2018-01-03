document.addEventListener("DOMContentLoaded", function() {
  var ulElection = document.querySelector('#election')
  $.ajax({
    url: 'https://bb-election-api.herokuapp.com/',
    method: 'GET',
    dataType: 'JSON'
  }).done(function(responseData){
    responseData.candidates.forEach(function(candidate) {
      var li = document.createElement('li')
      li.innerHTML = '<b>' + candidate.name + ':</b> ' + candidate.votes + ' votes';
      ulElection.append(li)
    })
  })


});
