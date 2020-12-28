const user = localStorage.getItem('user')
const pass = localStorage.getItem('password')
fetch(`http://localhost:3000/users?login=${user}`)
  .then((response) => response.json())
  .then((response) => {
    if (response[0].password === pass) {
      document.getElementById('message').innerHTML = '<h1>Hello</h1>'
    } else {
        document.getElementById('message').innerHTML = '<h1>you should login or register</h1>'
    }     
  })