/* GET 'home page */
module.exports.homelist = function(req, res){
    res.render('locations-list', {
        title: "SportsBar  - find a sports club near you",
        pageHeader: {
            title: "SportsBar",
            strapline: "fine a sports club near you!"
        },
        sidebar: "Love Sports....SportsBar helps you find a place to play......",
        locations: [{
            name: 'Reading RFC',
            address: '125 High Street, Reading, RG6 1PS',
            rating: 5,
            keyFeatures: ['good rugby stardard', 'booze', 'top quatility pitches'],
            distance: '100m'
        },{
            name: 'southwark FC',
            address: '123 High Street, london, SE15 211',
            rating: 4,
            keyFeatures: ['good football stardard', 'Food', 'bants'],
            distance: '12km'
        },{
            name: 'streatham nightwolves ',
            address: '125 High Street, streatham, sw13 1PS',
            rating: 2,
            keyFeatures: ['ice hockey ', 'booze'],
            distance: '13km'
        }]
    });
};

/* get location info page */

module.exports.locationInfo = function(req, res) {
  res.render('location-info', {
      title: "Southwark RFC",
      pageHeader: {title: "Southwark RFC"},
      sidebar: {
          context: "during training normally we start with standard warmup followed by ball handling skills, then we split into specific forwards and backs training",
          callToAction: "please come along and checkout training and give the club a review"
      },
      location: {
          name:"Southwark RFC",
          address: "123 steet street london se15 xxx",
          benifits: ['good rugby stardard', 'booze', 'top quatility pitches'],
          coords: {lat:51.484670, lng: -0.074592},
          trainingTimes: [{
              days: "wednesday",
              start: "19.00hrs",
              finish: "21.00hrs"
          }],
          reviews: [
              {
                  author:"Simon Holmes",
                  timestamp: "16 July 2013",
                  reviewText:"Great club very welcoming."
              },
              {
                  author:"Simon Holmes",
                  timestamp: "16 July 2013",
                  reviewText:"I had a fun time at training we got pushed hard but i have improved each time i've been on a wednesday."

              }
          ]
      }
  });
};

/* get add review page*/

module.exports.addReview = function(req, res){
  res.render('location-review-form', {title: 'Add review'});
};

































