const router = require('express').Router();
const {
  Answers, Auth, Category, Question, User,
} = require('../db/models');

router.post('/', async (req, res) => {
  const { id } = req.body;
  const response = await Question.findAll({ where: { cat_id: id }, include: { model: Answers } }, { raw: true });
  res.json({ response });
});

module.exports = router;
