Meteor.startup(function(){

  // Insert sample data if the business collection is empty
  
    if(Business.find().count() === 0){
      Business.insert({
        _id:'1',
        name:'Business McDonalds',
        vouchershortmessage : "Free Dessert",
        voucherlongmessage : "Deserts that you like from your local restaurant , enjoy a pista cake valued at $",
        vouchervalue : 5,
        Vouchersremained : 278,
         hasContract:true 
      });
      Business.insert({
        _id:'2',
        name:'Business Burger King',
        vouchershortmessage : "Free Dessert",
        voucherlongmessage : "Deserts that you like from your local restaurant , enjoy a pista cake valued at $",
        vouchervalue : 5,
        Vouchersremained : 278,
        hasContract:true
      });
      Business.insert({
        _id: '3',
        name:'Business Wendys',
        vouchershortmessage : "Free Dessert",
        voucherlongmessage : "Deserts that you like from your local restaurant , enjoy a pista cake valued at $",
        vouchervalue : 5,
        Vouchersremained : 278,
        hasContract:true 
      });

    }

//     "vouchershortmessage" : "Free Dessert",
//         "voucherlongmessage" : "Deserts that you like from your local restaurant , enjoy a pista cake valued at $",
//         "vouchervalue" : 5,
//         "Vouchersremained" : 278,
// hasContract:true



    // if (Business.find().count() === 0) {
    //   JSON.parse(Assets.getText("business.json")).business.forEach(function (doc) {
    //     Business.insert(doc);
    //   });
    // }



});