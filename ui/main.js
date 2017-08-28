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
              console.log('user logged in');
              alert('Logged in succesfully');
          } else if (request.status === 403) {
              alert('Username/password is incorrect');
          } else if (request.status === 500) {
              alert('Something went wrong on the server');
          }
      }
    // Not done yet
  };
  
  // Make the request
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    console.log(username);
    console.log(username);
    request.open('POST', 'http://lsaisurag.imad.hasura-app.io/login', true);
    request.setRequestHeader('Content-type', 'application/json');
    request.send(JSON.strigify({username: username, password: password}));
    
};