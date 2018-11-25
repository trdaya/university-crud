const Student = require('../models/student');

const studentRouter = (router) => {
  router.get('/', (req, res) => {
    res.send({ type: 'GET' });
  });

  router.post('/', (req, res,next) => {
    Student.create(req.body).then(student => {
      res.send(student);
    }).catch(next);
  });

  router.put('/:id', (req, res) => {
    res.send({ type: 'PUT' });

  });

  router.delete('/:id', (req, res) => {
    res.send({ type: 'DELETE' });

  });

  return router;
};

module.exports = studentRouter;