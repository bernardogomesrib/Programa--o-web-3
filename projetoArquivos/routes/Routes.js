const express = require('express')
const router = express.Router();

const AnswerControl = require('../controllers/AnswerControl');
const BoardControl = require('../controllers/BoardControl');


//answer
router.get('/respostas/',AnswerControl.getAll);
router.get('/respostas/:id',AnswerControl.getById);
router.post('/respostas/',AnswerControl.save);
router.put('/respostas/',AnswerControl.update);
router.delete('/respostas/',AnswerControl.delete);

//board
router.get('/boards/',BoardControl.getAll);
router.get('/boards/:id',BoardControl.getById);
router.post('/boards/',BoardControl.save);
router.put('/boards/',BoardControl.update);
router.delete('/boards/',BoardControl.delete);



module.exports = router;