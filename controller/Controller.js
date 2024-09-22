const modules = {
    index: (req, res) => {
        res.render('index'); 
    },
    about: (req, res) => {
        res.render('about'); 
    },
    services: (req, res) => {
        res.render('services'); 
    },
    contact: (req, res) => {
        res.render('contact'); 
    },
    gallery: (req, res) => {
        res.render('gallery'); 
    },
};

module.exports = modules;