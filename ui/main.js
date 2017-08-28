

// Submit name
var submit = document.getElementById('submit.btn');
submit.onclick = function () {
    
  // Create a request object
  var request = new XMLHttpRequest();
  
  // Capture the response and store it in a variable
  request.onreadystatechange = function () {
      if (request.readyState === XMLHttpRequest.DONE) {
          // taking some action
          if (request.status === 200) {
              // Capture a list of names and render it as a list
              var names = request.responseText;
              names = JSON.parse(names);
              var list = '';
              for (var i=0; i< names.length; i++) {
                  list += '<li>' + names[i] + '</li>';
              }
              var ul = document.getElementById('namelist');
              ul.innerHTML = list;
          }
      }
    // Not done yet
  };
  
  // Make the request
    var nameInput = document.getElementById('name');
    var name = nameInput.value;
    request.open('GET', 'http://lsaisurag.imad.hasura-app.io/submit-name?name=' + name, true);
    request.send(null);
    
};