
exports.getLogin = (req, res, next) => {
      res.render('login/login', {
        pageTitle: 'login',
        path: '/login'
      });
};

