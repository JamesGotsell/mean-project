/* GET home page */ 

module.exports.index = function(req, res){
  res.render('index', {title: 'Express'});
};

/* get about page */
module.exports.about = function(req, res){
  res.render('generic-text', {
    title: "About SportsClub",
    content: "sportclub was created to help people find places and clubs to do there favourite sport doneLorem ipsum dolor sit amet, consecteturadipiscing elit. Nunc sed lorem ac nisi dignissim accumsan. Nullamsit amet interdum magna. Morbi quis faucibus nisi. Vestibulum mollispurus quis eros adipiscing tristique. Proin posuere semper tellus, idplacerat augue dapibus ornare. Aenean leo metus, tempus in nisl eget,accumsan interdum dui. Pellentesque sollicitudin volutpat ullamcorper."
  });
};