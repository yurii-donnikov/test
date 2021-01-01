const loadformIn = async () => {
    const html = await (await fetch('https://yurii-donnikov.github.io/test/resources/signup.html')).text()
    document.body
        .appendChild(document.createElement('main'))
        .innerHTML = html
    const [login, password, avatar, submit, picture] = ['login', 'password', 'avatar', 'submit', 'picture']
    .map((id) => document.getElementById(id))

    login.onchange = function (event) {
        //    fetch(`http://localhost:3000/users?login=${event.target.value}`)
        //        .then((response) => response.json())
        //        .then((response) => {
        //            if (response.length === 0) {
        //                event.target.style.color = 'green'
        //                password.disabled = false
        //                localStorage.setItem('user', event.target.value)
        //            } else {
        //              event.target.style.color = 'red'
        //              password.disabled = true
        //            }
        //        })

        if (localStorage.getItem('user') === event.target.value) {
            event.target.style.color = 'green'
        } else {
            event.target.style.color = 'red'
            password.disabled = true
        }
    }

}

loadformIn()
