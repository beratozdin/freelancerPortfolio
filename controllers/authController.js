const User = require('../models/User');

exports.loginUser = async (req, res) => {
    
      const { email, password } = req.body;
        
      await User.findOne({ email }, (err, user) => {
        
        if (user) {   
            
            if (password === user.password) {
              // Admin session
              req.session.userID = user._id;
              res.status(200).redirect('/');
            } else {
              res.status(400).redirect('/login');
            }
        } else {
          res.status(400).redirect('/login');
        }
      });
  };

exports.logoutUser = (req, res) => {
    req.session.destroy(()=> {
      res.redirect('/');
    })
}