import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';
if(Meteor.isClient){

Template.body.onRendered(function(){
  console.log("HELLO WORLD");
});

var fullWidth = window.innerWidth;
var fullHeight = window.innerHeight;

  //Session.setDefault('marquee', false);
  //Session.setDefault('finger', false);
  //Session.setDefault('travelingBall', false);

Template.templateChanger.onCreated(function(){

  var self = this;
  //self.marqueeOption = new ReactiveVar();
  //self.fingerOption = new ReactiveVar();
  //self.travelingBallOption = new ReactiveVar();

});

Template.body.events({
  'click #chooseMarquee': function(event,template){
    event.preventDefault();
    //template.marqueeOption.set(true);
  },
  'click #chooseFinger': function(event,template){
    event.preventDefault();
    //console.log('hit finger, template: ',template);
    //template.fingerOption.set(true);
    //template.chosenTemplate.set('finger', true);
    //Session.set('finger', true);
    //this.chosenTemplate.set('finger', true);
    //var instance = Template.instance();
    //instance.chosenTemplate.set('finger', true);
  },
  'click #chooseTravelingBall': function(event,template){
    event.preventDefault();
    //template.travelingBallOption.set(true);
    //var instance = Template.instance();
    //instance.instance().chosenTemplate.set('travelingBall', true);
  }
});

Template.templateChanger.helpers({
  marqueeOption: function(){
    //return Template.instance().marqueeOption.get();
    //var instance = Template.instance();
    //return instance.chosenTemplate.get('marquee');
    //return Session.equals('marquee',true);
  },
  fingerOption: function(){
    //return Template.instance().fingerOption.get();

    //var instance = Template.instance();
    //return instance.chosenTemplate.get('finger');
    //return Session.equals('finger',true);
  },
  travelingBallOption:function(){
    //return Template.instance().travelingBallOption.get();
    //var instance = Template.instance();
    //return instance.chosenTemplate.get('travelingBall');
    //return Session.equals('finger',true);
  }
});

Template.video.onRendered(function(){
  $("#video").attr('width',window.innerWidth+'px');
  $("#video").attr('preserveAspectRatio',1);
  //$("#video").attr('autoplay', 'autoplay');

});
/*Template.travelingBallView.onRendered(function(){
  var s = prepSVG(3);

  var ballWidth = 50;
  var ballHeight = 50;
  var initialY = 500;
  var initialX = parseInt(-1*ballWidth);

  var ball = s.circle(initialX, initialY, 50);//rect(initialX,initialY, ballWidth, ballHeight,15,15);

  ball.attr({
    fill:'black'
  });

  var headline = s.multitext(initialX+50,parseInt(initialY+20), "JetBlue continues to be the best airline out \n- love those chips!");
  headline.attr({
    fontFamily:'Helvetica',
    fontSize:18,
    fill:'black'
  });

  var author = s.text(initialX+80,parseInt(initialY+80), "jetblueAuthority");
  author.attr({
    fontFamily:'Helvetica',
    fontSize:18,
    fill:'black',
    width:parseInt(headline.node.scrollWidth - author.node.scrollWidth)
  });

  var image = s.image('cute.png',-100,parseInt(initialY+3), 70,70);

  var link = s.text(-100,parseInt(initialY+90), 'READ ME');



  var circlePath = s.path("M150,380 a250,350 0 1,0 0,10 z");
  //var circlePath = s.path("M300,200 h-150 a150,150 0 1,0 150,-150 z");
  //var circlePath = s.path("C-50,500,0,50");
  circlePath.attr({
    stroke:'red',
    strokeWidth:1
  });

  //******
  initGroup();

  // Initialize Triangle on Path
  function initGroup(){
    var bannerGroup = s.group(ball,headline, author, image, link);
    movePoint = circlePath.getPointAtLength(length);

    console.log('movePoint: ', movePoint);
    bannerGroup.transform( 't'+parseInt(movePoint.x-50) + ',' + parseInt( movePoint.y-30)+'r'+ (movePoint.alpha));//parseInt(movePoint.x - 15) + ',' + parseInt( movePoint.y - 15) + 'r' + (movePoint.alpha - 90));
    //bannerGroup.transform( 't' + parseInt(movePoint.x - 15) + ',' + parseInt( movePoint.y - 15) + 'r' + (movePoint.alpha - 90));
  }

  // SVG C - Draw Path
  var lenC = circlePath.getTotalLength();

  // SVG C - Animate Path
  function animateSVG() {

    circlePath.attr({
      stroke: '#fff',
      strokeWidth: 4,
      fill: 'none',
      // Draw Path
      "stroke-dasharray": "12 6",
      "stroke-dashoffset": "180"
    });//.animate({"stroke-dashoffset": 10}, 4500,mina.easeinout);
    var bannerGroup = s.group(ball,headline, author, image, link);
    //var triangleGroup = s.g(bannerGroup); // Group polyline

    setTimeout( function() {
      Snap.animate(0, lenC, function( value ) {

        movePoint = circlePath.getPointAtLength( value );
        console.log('value: ',value);
        console.log('t' + parseInt(movePoint.x - 15) + ',' + parseInt( movePoint.y - 15) + 'r' + (movePoint.alpha - 90));
        //triangleGroup.transform( 't' + parseInt(movePoint.x - 15) + ',' + parseInt( movePoint.y - 15) );
        bannerGroup.transform( 't' + parseInt(movePoint.x - 15) + ',' + parseInt( movePoint.y - 15));// + 'r' + (movePoint.alpha - 90));

      }, 4500,mina.easeinout, function(){
        alertEnd();
      });
    });

  }

  animateSVG();

  // Callback Function
  function alertEnd(){
    console.log('ended animation');
    // Do Animation
    //$('#ball').addClass('red');
    // Enable Button
    //$('#nin').removeAttr('disabled');
  }

  // Animate Button
  function kapow(){
    //$("#nin").click(function(event){
    //
    //  // Disable Button
    //  $(this).attr('disabled','disabled');
    //  // Animate Ball
    //  if ($('#ball').hasClass('red')){
    //    $('#ball').removeClass('red');
    //  }
    //  // Run SVG
    //  animateSVG();
    //
    //});
  }

  //kapow();


  ///*****
  //
  //function animateMarquee(){
  //  console.log("ani");
  //  //highlight context tab:
  //
  //  s.select('#context-tab-button').attr({
  //    stroke:'white',
  //    strokeWidth:'3px',
  //    fill:'white'
  //  });
  //
  //  bannerGroup.animate({transform:'translate('+circlePath+')'}, 5000, function(){
  //
  //    bannerGroup.animate({
  //      transform:'translate(0, -500)'
  //    }, 5000, function(){
  //      console.log('done with finger');
  //      bannerGroup.attr({
  //        transform:"translate(-"+2*ballWidth+", 600)"
  //      });
  //      s.select('#context-tab-button').attr({
  //        stroke:'none',
  //        fill:'lightgray'
  //      });
  //    });
  //
  //    //console.log(bannerGroup.attr("trans"))
  //  });
  //}
  //createContextCardTab(s);
  //animateMarquee();
  //
  //setInterval(function(){
  //  console.log('hihi ani');
  //  animateMarquee();
  //}, 23000);


});
*/

  Template.travelingBallView.onRendered(function(){
    var s = prepSVG(3);

    var ballWidth = 50;
    var ballHeight = 50;
    var initialY = 0;
    var initialX =0 ;//parseInt(-1*ballWidth);

    var ball = s.circle(0, 0, 50);//rect(initialX,initialY, ballWidth, ballHeight,15,15);

    ball.attr({
      fill:'black'
    });

    var headline = s.multitext(initialX+50,parseInt(initialY+20), "JetBlue continues to be the best airline out \n- love those chips!");
    headline.attr({
      fontFamily:'Helvetica',
      fontSize:18,
      fill:'black'
    });

    var author = s.text(initialX+80,parseInt(initialY+80), "jetblueAuthority");
    author.attr({
      fontFamily:'Helvetica',
      fontSize:18,
      fill:'black',
      width:parseInt(headline.node.scrollWidth - author.node.scrollWidth)
    });

    var image = s.image('cute.png',-100,parseInt(initialY+3), 70,70);

    var link = s.text(-100,parseInt(initialY+90), 'READ ME');



    var circlePath = s.path("M150,380 a250,350 0 1,0 0,10 z");
    //var circlePath = s.path("M150,380 a250,350 0 1,0 0,10 z");//worked
    //var circlePath = s.path("M300,200 h-150 a150,150 0 1,0 150,-150 z");
    //var circlePath = s.path("C-50,500,0,50");
    circlePath.attr({
      stroke:'none',
      strokeWidth:1,
      fill: 'none'
    });
    var bannerGroup = s.group(ball,headline, author, image, link);
    //******
    initGroup();

    // Initialize Triangle on Path
    function initGroup(){
      //var bannerGroup = s.group(ball,headline, author, image, link);
      movePoint = circlePath.getPointAtLength(length);

      console.log('movePoint: ', movePoint);
      bannerGroup.transform( 't'+parseInt(movePoint.x-150) + ',' + parseInt( movePoint.y+310)+'r'+ (movePoint.alpha-90));//parseInt(movePoint.x - 15) + ',' + parseInt( movePoint.y - 15) + 'r' + (movePoint.alpha - 90));
      //bannerGroup.transform( 't' + parseInt(movePoint.x - 15) + ',' + parseInt( movePoint.y - 15) + 'r' + (movePoint.alpha - 90));
    }

    // SVG C - Draw Path
    var lenC = circlePath.getTotalLength();

    // SVG C - Animate Path
    function animateSVG() {
      //bannerGroup.transform( 't'+parseInt(movePoint.x) + ',' + parseInt( movePoint.y+30)+'r'+ (movePoint.alpha-90));//parseInt(movePoint.x - 15) + ',' + parseInt( movePoint.y - 15) + 'r' + (movePoint.alpha - 90));

      setTimeout( function() {
        //bannerGroup.transform( 't'+parseInt(movePoint.x-150) + ',' + parseInt( movePoint.y+310)+'r'+ (movePoint.alpha-90));//parseInt(movePoint.x - 15) + ',' + parseInt( movePoint.y - 15) + 'r' + (movePoint.alpha - 90));
        Snap.animate(0, lenC, function( value ) {

          movePoint = circlePath.getPointAtLength( value );
          console.log('t' + parseInt(movePoint.x) + ',' + parseInt( movePoint.y) );//+ 'r' + (movePoint.alpha - 90));
          //triangleGroup.transform( 't' + parseInt(movePoint.x - 15) + ',' + parseInt( movePoint.y - 15) );
          //if(movePoint.x>134){
          // THIS ONE IS FUN BUT YOU NEED TO RESET PALCEMENT OF BANNERGROUP: NO NO NO  does't work
          //  set up above>   bannerGroup.transform( 't'+parseInt(movePoint.x-150) + ',' + parseInt( movePoint.y+310)+'r'+ (movePoint.alpha-90));//parseInt(movePoint.x - 15) + ',' + parseInt( movePoint.y - 15) + 'r' + (movePoint.alpha - 90));
            //bannerGroup.attr({transform:  't'+parseInt(movePoint.x-150) + ',' + parseInt( movePoint.y+310)});//+'r'+ (movePoint.alpha-90)});//parseInt(movePoint.x - 15) + ',' + parseInt( movePoint.y - 15) + 'r' + (movePoint.alpha - 90));
          //END FUN ONE
          //}
          bannerGroup.attr({transform: 't' + parseInt(movePoint.x - 15) + ',' + parseInt( movePoint.y + 15)});// + 'r' + (movePoint.alpha - 90));
          //bannerGroup.transform( 't' + parseInt(movePoint.x - 15) + ',' + parseInt( movePoint.y + 15));// + 'r' + (movePoint.alpha - 90));

        }, 4500,mina.easeinout, function(){
          alertEnd();
        });
      });

    }

    setInterval(function(){
      animateSVG();
    },4500);

    // Callback Function
    function alertEnd(){
      console.log('ended animation');
      // Do Animation
      //$('#ball').addClass('red');
      // Enable Button
      //$('#nin').removeAttr('disabled');
    }

    // Animate Button
    function kapow(){
      //$("#nin").click(function(event){
      //
      //  // Disable Button
      //  $(this).attr('disabled','disabled');
      //  // Animate Ball
      //  if ($('#ball').hasClass('red')){
      //    $('#ball').removeClass('red');
      //  }
      //  // Run SVG
      //  animateSVG();
      //
      //});
    }

    //kapow();


    ///*****
    //
    //function animateMarquee(){
    //  console.log("ani");
    //  //highlight context tab:
    //
    //  s.select('#context-tab-button').attr({
    //    stroke:'white',
    //    strokeWidth:'3px',
    //    fill:'white'
    //  });
    //
    //  bannerGroup.animate({transform:'translate('+circlePath+')'}, 5000, function(){
    //
    //    bannerGroup.animate({
    //      transform:'translate(0, -500)'
    //    }, 5000, function(){
    //      console.log('done with finger');
    //      bannerGroup.attr({
    //        transform:"translate(-"+2*ballWidth+", 600)"
    //      });
    //      s.select('#context-tab-button').attr({
    //        stroke:'none',
    //        fill:'lightgray'
    //      });
    //    });
    //
    //    //console.log(bannerGroup.attr("trans"))
    //  });
    //}
    //createContextCardTab(s);
    //animateMarquee();
    //
    //setInterval(function(){
    //  console.log('hihi ani');
    //  animateMarquee();
    //}, 23000);

  })

Template.marqueeView.onRendered(function marquee() {
var s = prepSVG(1);
//The marquee function renders textual information in the top bar that scrolls from the 'context tab' on the top left

  var banner = s.rect(parseInt(fullWidth), 0, fullWidth, 80);
  banner.attr({
    fill: 'rgba(255,255,255,0.7)',
    stroke: 'lightgray',
    strokeWidth: '2px'
  });
  var bannerText = s.text(parseInt(fullWidth+20), 55, "JetBlue continues to be the best airline out - love those chips!");
  bannerText.attr({
    class: 'bannertext',
    fill: 'black',
    fontSize: 30,
    fontFamily:"Helvetica"
  });
  console.log('banner text: ', bannerText.node.scrollWidth);

  var bannerAuthor = s.text(parseInt(fullWidth+20), 20, "jetblueAuthority");
  bannerAuthor.attr({
    fill:'gray',
    fontSize:14,
    fontFamily:"Helvetica",
    fontStyle:'italic'
  });

  var bannerImg = s.image('cute.png',parseInt(bannerText.node.scrollWidth+fullWidth),2, 70,70);

  var bannerLink = s.text(parseInt(bannerText.node.scrollWidth+fullWidth+75),50, "READ MORE");
  bannerLink.attr({
    fontSize:24,
    fontVariant:'all-small-caps',
    fill:'rgb(0,0,0)',
    textDecoration:'underline'
  });

  banner.attr({width:parseFloat(bannerText.node.scrollWidth+bannerImg.node.scrollWidth+bannerLink.node.scrollWidth+30)});

  var bannerGroup = s.group(banner, bannerText, bannerImg, bannerLink, bannerAuthor);

  createContextCardTab(s);
  function animateMarquee(){
    console.log("ani");
    //highlight context tab:

    s.select('#context-tab-button').attr({
      stroke:'white',
      strokeWidth:'3px',
      fill:'white'
    });
    bannerGroup.animate({transform:'translate('+parseInt(-2*fullWidth)+', 0)'}, 23000, function(){
      console.log('done with marquee movement');
      bannerGroup.attr({
        transform:'translate('+3*fullWidth+", 0)"
      });
      s.select('#context-tab-button').attr({
        stroke:'none',
        fill:'lightgray'
      });
      //console.log(bannerGroup.attr("trans"))
    });
  }

  animateMarquee();

  setInterval(function(){
    console.log('hihi ani');
    animateMarquee();
  }, 23000);

  var bottomRect = s.rect(0,parseInt(.6*fullHeight),fullWidth, parseInt(fullHeight*.4));
  bottomRect.attr({
    fill:'rgb(0,0,0)',
    stroke:'gray',
    strokeWidth:1
  });


  //Template.instance().chosenTemplate.set('marquee',false);
  // counter starts at 0
  //this.counter = new ReactiveVar(0);
});
Template.fingerView.onRendered(function(){
  var s = prepSVG(2);
  var fingerWidth = 500;
  var fingerHeight = 100;
  var initialY = 500;
  var initialX = parseInt(-1*fingerWidth);

  var fingerRect = s.rect(initialX,initialY, fingerWidth, fingerHeight,15,15);
  fingerRect.attr({
    fill:'lightgray'
  });
  //var fingerTip = s.circle(initialX+fingerWidth-fingerWidth/2,initialY,20);
  var headline = s.multitext(initialX+50,parseInt(initialY+20), "JetBlue continues to be the best airline out \n- love those chips!");
  headline.attr({
    fontFamily:'Helvetica',
    fontSize:18,
    fill:'black'
  });

  var author = s.text(initialX+50,parseInt(initialY+fingerHeight-20), "jetblueAuthority");
  author.attr({
    fontFamily:'Helvetica',
    fontSize:18,
    fill:'black',
    width:parseInt(headline.node.scrollWidth - author.node.scrollWidth)
  });

  var image = s.image('cute.png',-100,parseInt(initialY+3), 70,70);

  var link = s.text(-100,parseInt(initialY+90), 'READ ME');

  var bannerGroup = s.group(fingerRect,headline, author, image, link);
  function animateMarquee(){
    console.log("ani");
    //highlight context tab:

    s.select('#context-tab-button').attr({
      stroke:'white',
      strokeWidth:'3px',
      fill:'white'
    });
    bannerGroup.animate({transform:'translate('+fingerWidth+', -100)'}, 5000, function(){
      console.log('done with marquee movement');
      bannerGroup.animate({
        transform:'translate(0, -500)'
      }, 5000, function(){
        console.log('done with finger');
        bannerGroup.attr({
          transform:"translate(-"+fingerWidth+", 600)"
        });
        s.select('#context-tab-button').attr({
          stroke:'none',
          fill:'lightgray'
        });
      });

      //console.log(bannerGroup.attr("trans"))
    });
  }
  createContextCardTab(s);
  animateMarquee();

  setInterval(function(){
    console.log('hihi ani');
    animateMarquee();
  }, 23000);

  //Template.instance().chosenTemplate.set('finger',false);


});
function prepSVG(n){
  Snap.plugin(function (Snap, Element, Paper, glob) {
    Paper.prototype.multitext = function (x, y, txt) {
      txt = txt.split("\n");
      var t = this.text(x, y, txt);
      t.selectAll("tspan:nth-child(n+2)").attr({
        dy: "1.1em",
        x: x,
        class:'inputText'
      });
      return t;
    };
  });
  var s = Snap('#snapsvg'+n);
  s.attr({
    x: 0,
    y: 0,
    width: window.innerWidth,
    height: window.innerHeight
  });

  var rect = s.rect(0, 0, fullWidth, fullHeight);
  rect.attr({
    fill: 'white',
    opacity: 0.3
  });

  return s;
}

function createContextCardTab(s){

  var buttonRect = s.rect(-8,0,58,100,8,8);

  buttonRect.attr({
    fill:'lightgray',
    id:'context-tab-button'
  });

  var button = s.path('M15.6841739,14.5283095 C15.6841739,14.7903452 15.5787826,15.0413333 15.3926957,15.2267262 L2.07130435,28.4483095 C1.68243478,28.8339405 1.05286957,28.8339405 0.664,28.4483095 C0.275826087,28.0626786 0.275826087,27.4374524 0.664,27.0518214 L13.2817391,14.5279643 L0.607304348,1.94817857 C0.218782609,1.56254762 0.218782609,0.93697619 0.607304348,0.551345238 C0.995826087,0.166059524 1.62573913,0.166059524 2.01426087,0.551345238 L15.3926957,13.8298929 C15.5787826,14.0152857 15.6841739,14.2662738 15.6841739,14.5283095 L15.6841739,14.5283095 Z');
  //var button = s.path('M15.6841739,14.5283095 C15.6841739,14.7903452 15.5787826,15.0413333 15.3926957,15.2267262 L2.07130435,28.4483095 C1.68243478,28.8339405 1.05286957,28.8339405 0.664,28.4483095 C0.275826087,28.0626786 0.275826087,27.4374524 0.664,27.0518214 L13.2817391,14.5279643 L0.607304348,1.94817857 C0.218782609,1.56254762 0.218782609,0.93697619 0.607304348,0.551345238 C0.995826087,0.166059524 1.62573913,0.166059524 2.01426087,0.551345238 L15.3926957,13.8298929 C15.5787826,14.0152857 15.6841739,14.2662738 15.6841739,14.5283095 L15.6841739,14.5283095 Z');

  button.attr({
    width:'29px',
    height:'16px',
    transform:'translate(10,30)'
  });

}

function renderVid(){
  var vid = document.createElement('video');
  vid.setAttribute('width','2000px');
  vid.setAttribute('height', "1300px");
  vid.setAttribute('src', 'doop.webm');
  vid.setAttribute('id','video');
  $('body').append($(vid));
}

}


//
//Template.hello.helpers({
//  counter() {
//    return Template.instance().counter.get();
//  },
//});
//
//Template.hello.events({
//  'click button'(event, instance) {
//    // increment the counter when button is clicked
//    instance.counter.set(instance.counter.get() + 1);
//  },
//});
