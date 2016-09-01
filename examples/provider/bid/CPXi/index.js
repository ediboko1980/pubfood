var pf = new pubfood();

var slot = pf.addSlot({
         name: '/6355419/Travel/Europe/France/Paris',
         sizes: [
             [300, 250]
         ],
         elementId: 'pub_food_div',
         bidProviders: [
             'CPXi'
         ]
     });

pf.addBidProvider({
         name: 'CPXi',
         libUri: 'http://optimizedby.brealtime.com/jpt?id=2447350&size=300x250&referrer=http://localhost:8000/drew_modules/pubfood/examples/provider/bid/Triple%20Lift/&callback=myCallback',
         init: {

         }
     });

     pf.setAuctionProvider({
    name: 'googletag',
    libUri: '//www.googletagservices.com/tag/js/gpt.js',
    init: function(bids, done) {
        function(targeting, done) {
             googletag.cmd.push(function() {
                 for (var i = 0; i < targeting.length; i++) {
                     var tgtObject = targeting[i];
                     var gptObject;
                     if (tgtObject.name) {
                         gptObject = googletag.defineSlot(tgtObject.name, tgtObject.sizes, tgtObject.elementId)
                                         .addService(googletag.pubads());
                     } else {
                         gptObject = googletag.pubads();
                     }
                     for (var p in tgtObject.targeting) {
                         gptObject.setTargeting(p, tgtObject.targeting[p]);
                     }
                 }
             });
             googletag.cmd.push(function() {
                 googletag.pubads().enableSingleRequest();
                 googletag.enableServices();
                 done();
             });
         }
    },
    refresh: function(bids, done) {
    }
  });

  pf.timeout(1500);
  pf.observe(function(ev) {
    console.log(ev);
  });
  
  pf.start();

<!-- /22979003/PF_Test -->
<div id='pub_food_div'>
  <script>
  pf.observe('AUCTION_POST_RUN', function() {
          googletag.cmd.push(function() {
           // debugger;
            googletag.display('pub_food_div');
          });
   });
  </script>