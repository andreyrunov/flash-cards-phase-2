const btns = document.querySelector('.check-category');


btns.addEventListener('click', async (event) => {
  event.preventDefault();
  const getBtnId = { id: event.target.id };
  // отправляем фетч запрос с id кнопки, на которую кликнули
  const response = await fetch('/main', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(getBtnId)
  })
  if(response.ok) {
    const item = await response.json();
    // const test = "Hi!!!"
    console.log(item);
    console.log(item.response);
    
    const questions = document.querySelector('.questions');
    
    item.response.forEach((el) => {
      questions.innerHTML = `
      <h2>Вопросы и ответы:</h2>
      ${el.text}

      <br>
      `
    })
  }
})
