const loadformIn = async () => { 
  const html = await (await fetch('https://yurii-donnikov.github.io/test/resources/signup.html')).text()
    document.body
      .appendChild(document.createElement('main'))
        .innerHTML = html
          .id = 'main1'
  const [login, password, avatar, submit, picture] = ['login', 'password', 'avatar', 'submit', 'picture']
    .map((id) => document.getElementById(id))
  
}

loadformIn()