const Post = require('../model/post_model');

exports.addPost = (req, res, next) => {
  const post = new Post({
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    email: req.body.email,
    celular: req.body.celular,
    telfijo: req.body.telfijo,
    puesto: req.body.puesto,
    empresa: req.body.empresa
    });
  post
    .save()
    .then(() => {
      // console.log(req.body.title);
      res.send('post added successfully');
    })
    .catch(err => {
      res.status(400).send(err);
    });
};

exports.showPost = (req, res, next) => {
  Post.find()
    .then(result => {
      res.send(result);
    })
    .catch(err => res.status(400).send(err));
};

exports.singlePost = (req, res, next) => {
  Post.findById(req.params.id)
    .then(result => {
      res.send(result);
    })
    .catch(err => res.status(400).send(err));
};

exports.updatePost = (req, res, next) => {
  Post.findById(req.body.id).then(result => {
    result.nombre = req.body.nombre;
    result.apellido = req.body.apellido;
    result.email = req.body.email;
    result.celular = req.body.celular;
    result.telfijo = req.body.telfijo;
    result.puesto = req.body.puesto;
    result.empresa = req.body.empresa;
    return result.save();
  }).then(post => {
    res.send('post updated successfully');
  }).catch(err => res.status(400).send(err));
};

exports.deletePost = (req, res, next) => {
  Post.findByIdAndRemove(req.params.id)
    .then(() => {
      res.send('post deleted');
    }).catch(err => res.status(400).send(err));
};