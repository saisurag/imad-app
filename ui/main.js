var button = document.getElementById('counter');

button.onclick = function () {
    
  // create a request object
  var request = new XMLHttpRequest();
  
  // capturing the response and storing it in a variable
  
  request.onreadystatechange = function () {
      if (request.readyState === XMLHttpRequest.Done) {
          // taking some action
          if (requst.status === 200) {
              var counter = request.responseText;
              var span = document.getElementById('count');
                span.innerHTML = counter.toString();
          }
      }
    // not done yet
  };
  
  
  // make the request
    request.open('GET', 'http://lsaisurag.imad.hasura-app.io/counter', true);
    request.send(null);
};