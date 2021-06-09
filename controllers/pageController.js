const Work = require('../models/Work');

exports.getIndexPage = async (req, res) => {

  const works = await Work.find({});

  res.status(200).render("index",{
    works
  });
};

exports.getAboutPage = (req, res) => {
  res.status(200).render("about");
};

exports.getContactPage = (req, res) => {
  res.status(200).render("contact");
};

exports.getAddPage = (req, res) => {
  res.status(200).render("add");
};
