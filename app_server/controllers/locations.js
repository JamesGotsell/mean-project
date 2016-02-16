/* GET 'home page */
module.exports.homelist = function(req, res){
    res.render('locations-list', {title: "Home"});
};

/* get location info page */

module.exports.locationInfo = function(req, res) {
  res.render('index', {title: "Location Info"});
};

/* get add review page*/

module.exports.addReview = function(req, res){
  res.render('index', {title: 'Add review'});
};