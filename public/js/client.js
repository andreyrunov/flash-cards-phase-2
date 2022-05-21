const btns = document.querySelector('.check-category');
//console.log(btns);

btns.addEventListener('click', async (event) => {
  event.preventDefault();
  const getBtnId = { id: event.target.id };
  // отправляем фетч запрос с id кнопки, на которую кликнули
  const response = await fetch('/main', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(getBtnId),
  });
  if (response.ok) {
    const item = await response.json();
    // const test = "Hi!!!"
    // console.log(item);
    // console.log(item.response);

    const questions = document.querySelector('.questions');
    questions.innerHTML += `
        <h2>Вопросы и ответы:</h2>
        `;
    let count = 1;
    let countIdLabels = 1;
    item.response.forEach((el) => {
      questions.innerHTML += `
        <div class="question-block">
        ${count}. ${el.text}
        <br></div>
        `;
      count += 1;
      el.Answers.forEach((elem) => {
        questions.innerHTML += `
            <div class="form-check">
              <input class="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault${countIdLabels}">
              <label class="form-check-label" for="flexRadioDefault${countIdLabels}">
                ${elem.text}
              </label>
            </div>
            `;
        countIdLabels += 1;
      });
    });
    questions.innerHTML += `
      <br>
      <form action="/sendAnswers" method="post">
      <button type="submit" id="add" class="btn btn-primary send-form-btn">Ответить</button>
      </form>
        `;
  }

  const sendFormBtn = document.getElementById('add');
  //console.log(sendFormBtn);

  // ловим форму. в document.forms лежат все формы страницы и обращаемся к нужному нам нейму формы
  const  answersForm  = document.forms.answersForm;

  sendFormBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.id === 'add') {
    // собираем значение всех инпутов из формы в виде объекта
      const formData = Object.fromEntries(new FormData(answersForm));
      console.log(formData);
    }
  });
});
