const loadformIn = async () => {
    const html = await (await fetch('https://yurii-donnikov.github.io/test/resources/signup.html')).text()
    document.body
        .appendChild(document.createElement('main'))
        .innerHTML = html
    const [login, password, avatar, submit, picture] = ['login', 'password', 'avatar', 'submit', 'picture']
    .map((id) => document.getElementById(id))

    //    login.onchange = function (event) {
    //        fetch(`http://localhost:3000/users?login=${event.target.value}`)
    //            .then((response) => response.json())
    //            .then((response) => {
    //                if (response.length > 0) {
    //                    event.target.style.color = 'green'
    //                    password.disabled = false
    //                    //                        localStorage.setItem('user', event.target.value)
    //                } else {
    //                    event.target.style.color = 'red'
    //                    password.disabled = true
    //                }
    //            })
    //    }

//    login.onchange = function (event) {event.target.value}
//
//    password.onchange = function (event) {
//        event.target.value
        //    if (event.target.value.length >= 8 && event.target.value.match(/[\dA-Z]+/g)) {
        //      avatar.disabled = false
        //      submit.disabled = false
        //      const hash = Sha256.hash(event.target.value)
        //      localStorage.setItem('pass', hash)
        //    }
//    }
    let myPass = password.onchange = function (event) {Sha256.hash(event.target.value)}

    submit.disabled = false
    password.disabled = false

    submit.onclick = function (event) {
        fetch(`http://localhost:3000/users?login=${login.onchange = function (event) {event.target.value}}`)
            .then((response) => response.json())
            .then((resp) => resp[0].password === myPass
 ?
                console.log('все верно') : console.log('пароль не верный'))
    }
}

loadformIn()
