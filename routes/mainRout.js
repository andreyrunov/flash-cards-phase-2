const router = require('express').Router();
const { Answers, Auth, Category, Question, User } = require('../db/models');



router.get('/', async (req, res) => {
  const response = await Category.findAll({ raw: true });
  res.render('main', { categories: response })
})

router.post('/', async (req, res) => {
  const { id } = req.body;

  const response = await Question.findAll({where: { cat_id: id }, include:{ model: Answers } },{ raw: true });
  res.json( { response })
})

module.exports = router;
