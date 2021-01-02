//const script = document.body.appendChild(document.createElement('script'))
//script.src = "https://cdn.rawgit.com/chrisveness/crypto/4e93a4d/sha256.js"

const loadformIn = async () => {
    const html = await (await fetch('https://yurii-donnikov.github.io/test/resources/signin.html')).text()
    document.body
        .appendChild(document.createElement('main'))
        .innerHTML = html
    const [login, password, avatar, submit, picture] = ['login', 'passwordIn', 'avatar', 'submitIn', 'pictureIn']
    .map((id) => document.getElementById(id))

    var log = ''
    var myLog = login.onchange = function (event) {
        log = event.target.value
    }

    var hashn = ''
    var myPass = password.onchange = function (event) {
        hashn = Sha256.hash(event.target.value)
    }

    submit.onclick = function (event) {
        fetch(`http://localhost:3000/users?login=${log}`)
            .then((response) => response.json())
            .then((resp) =>
                resp[0].password === hashn ?
                document.getElementById('pictureIn').src = resp[0].avatar : console.warn('неверный пароль')
            )
    }
}

loadformIn()
