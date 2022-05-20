const playBtn = document.querySelector('#playBtn');
const  [ inputsLogin, inputsPass ] = document.querySelectorAll('input')


playBtn.addEventListener('click', async (event) => {
  const response = await fetch('/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({login: inputsLogin.value, pass: inputsPass.value})
    });
    if(response.ok){
      location.assign("http://localhost:3000/main");
    }

})
