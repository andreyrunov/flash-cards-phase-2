const router = require('express').Router();
const { Answers, Auth, Category, Question, User } = require('../db/models');



router.get('/', async (req, res) => {
  try {
    const response = await Category.findAll({ raw: true });
    console.log(response);
    console.log('response');
    res.render('main', { categories: response })
  } catch (err) {
    console.log(err);
  }
})

router.post('/', async (req, res) => {
  const { id } = req.body;

  const response = await Question.findAll({where: { cat_id: id }, include:{ model: Answers } },{ raw: true });
  res.json( { response })
})

module.exports = router;
