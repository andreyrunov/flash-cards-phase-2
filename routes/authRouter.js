const router = require('express').Router();
const { Auth } = require('../db/models');


router.get('/', async (req, res) => {;
  res.render('auth');
});

router.post('/', async (req, res) => {
  const {login, pass} = req.body;
  const user = await Auth.findOne( { where: {login}})
  if (user && pass === user.pass) {
    return res.sendStatus(200);
  }
  res.status(401).json({ message: 'Логин или пароль неверный'});
});

module.exports = router;
