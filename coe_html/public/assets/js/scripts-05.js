//libraries like jquery etc
//libraries like jquery etc

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);
$(function() {

  function debounce(func, wait, immediate) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

 
  const newsletterModal = document.getElementById("newsletter-modal")
  const newsletterBtn = document.getElementById("newsletter-btn")

  // ex.addEventListener("click", function() {
  //   $(mobileNav).toggleClass("mobile-nav-active")
  // })

  newsletterModal.addEventListener("click", function() {
    $(newsletterModal).toggleClass("flex").toggleClass("hidden")
    
  })

  newsletterBtn.addEventListener("click", function() {
    $(newsletterModal).toggleClass("flex").toggleClass("hidden")
    
  })
  


  
  

  const mobileNav = document.getElementById("mobile-nav-menu")
  const hamburger = document.getElementById("nav-menu-btn")
  const ex = document.getElementById("nav-menu-exit-btn")

  ex.addEventListener("click", function() {
    $(mobileNav).toggleClass("mobile-nav-active")
  })

  hamburger.addEventListener("click", function() {
    $(mobileNav).toggleClass("mobile-nav-active")
  })
  

  mySplitText = new SplitText(".headline", { type: "lines,words",linesClass: "split-line" })
  words = mySplitText.words;





// Main fade scroll trigger animation for Supergiant
function animateFrom(elem) {
		
		
  var x = 0,
  y = 20,
  delay = .5
if(elem.classList.contains("gs_reveal_fromLeft")) { 
x = -20,
y = 0,
delay = .5
} else if(elem.classList.contains("gs_reveal_fromRight")) {
x = 20,
y = 0,
delay = .5
}else if(elem.classList.contains("gs_reveal_projectSub")) {
  delay = .8
}else if(elem.classList.contains("gs_reveal_projectSubTwo")) {
  delay = 1.6
}else if(elem.classList.contains("gs_reveal_stagger_1")) {
  delay = .5
}else if(elem.classList.contains("gs_reveal_stagger_2")) {
  delay = .7
}else if(elem.classList.contains("gs_reveal_stagger_3")) {
  delay = .9
}else if(elem.classList.contains("gs_reveal_stagger_4")) {
  x = 0,
  y = 0,
  delay = 1.1
}else if(elem.classList.contains("gs_reveal_stagger_5")) {
  x = 0,
  y = 0,
  delay = 1.3
}else if(elem.classList.contains("gs_reveal_stagger_6")) {
  x = 0,
  y = 0,
  delay = 1.5
}else if(elem.classList.contains("gs_reveal_stagger_7")) {
  x = 0,
  y = 0,
  delay = 1.7
}else if(elem.classList.contains("gs_reveal_staggerOneBanner")) {
  delay = .5
  x = 0,
  y = direction * 50
  
}
else if(elem.classList.contains("gs_reveal_staggerTwoBanner")) {
  delay = .8
  x = 0,
  y = direction * 50
}else if(elem.classList.contains("gs_reveal_staggerThreeBanner")) {
  delay = 1.1
  x = 0,
  y = direction * 50
}

gsap.fromTo(elem, {x: x, y: y, opacity: 0}, {
duration: 1.5, 
x: 0,
y: 0, 
delay: delay,
opacity: 1, 
ease: "expo", 
overwrite: "auto"
});
}

function hide(elem) {
gsap.set(elem, {autoAlpha: 0});
}




var reveals = gsap.utils.toArray(".gs_reveal");
for(var i = 0; i < reveals.length; i++) {
(function () {
var elem = reveals[i];
//   hide(elem); // assure that the element is hidden when scrolled into view

ScrollTrigger.create({
  trigger: elem,
  
  once: true,
  onEnter: function() { animateFrom(elem) }, 
  
});
})();
}  



const navItems = document.querySelectorAll(".nav-item")
const navBtns = document.querySelectorAll(".nav-btn")
const logo = document.getElementById("coe-logo")
const logoMobile = document.getElementById("coe-logo-mobile")
const firstSection = document.querySelector("section")



if(firstSection){
  if(firstSection.classList.contains("bg-slate")){
          
    for (let i = 0; i < navItems.length; i++) {
      const el = navItems[i];
      $(el).addClass("text-red")
    }
    for (let i = 0; i < navBtns.length; i++) {
      const el = navBtns[i];
      $(el).addClass("text-red border-red hover:text-slate hover:bg-red")
    }
    $(logo).addClass("text-red")
    $(logoMobile).addClass("text-red")
    $(hamburger).addClass("text-red")
  }else if(firstSection.classList.contains("bg-yellow")){
    for (let i = 0; i < navItems.length; i++) {
      const el = navItems[i];
      $(el).addClass("text-brick")
    }
    for (let i = 0; i < navBtns.length; i++) {
      const el = navBtns[i];
      $(el).addClass("text-brick border-brick hover:text-yellow hover:bg-brick")
    }
    $(logo).addClass("text-brick")
    $(logoMobile).addClass("text-brick")
    $(hamburger).addClass("text-brick")
  }else if(firstSection.classList.contains("bg-red")){
    for (let i = 0; i < navItems.length; i++) {
      const el = navItems[i];
      $(el).addClass("text-yellow")
    }
    for (let i = 0; i < navBtns.length; i++) {
      const el = navBtns[i];
      $(el).addClass("text-yellow border-yellow hover:text-red hover:bg-yellow")
    }
    $(logo).addClass("text-yellow")
    $(logoMobile).addClass("text-yellow")
    $(hamburger).addClass("text-yellow")
  }else if(firstSection.classList.contains("bg-salmon")){
    for (let i = 0; i < navItems.length; i++) {
      const el = navItems[i];
      $(el).addClass("text-navy")
    }
    for (let i = 0; i < navBtns.length; i++) {
      const el = navBtns[i];
      $(el).addClass("text-navy border-navy hover:text-salmon hover:bg-navy")
    }
    $(logo).addClass("text-navy")
    $(logoMobile).addClass("text-navy")
    $(hamburger).addClass("text-navy")
  }else if(firstSection.classList.contains("bg-navy")){
    if(window.location.pathname == "/directory" ) {
      for (let i = 0; i < navItems.length; i++) {
        const el = navItems[i];
        $(el).addClass("text-salmon")
      }
      for (let i = 0; i < navBtns.length; i++) {
        const el = navBtns[i];
        $(el).addClass("text-salmon border-salmon hover:text-navy hover:bg-salmon")
      }
      $(logo).addClass("text-salmon")
      $(logoMobile).addClass("text-salmon")
    $(hamburger).addClass("text-salmon")
    } else {
      for (let i = 0; i < navItems.length; i++) {
        const el = navItems[i];
        $(el).addClass("text-blue-light")
      }
      for (let i = 0; i < navBtns.length; i++) {
        const el = navBtns[i];
        $(el).addClass("text-blue-light border-blue-light hover:text-navy hover:bg-blue-light")
      }
      $(logo).addClass("text-blue-light")
      $(logoMobile).addClass("text-blue-light")
    $(hamburger).addClass("text-blue-light")
    }
  }else if(firstSection.classList.contains("bg-brick")){
    for (let i = 0; i < navItems.length; i++) {
      const el = navItems[i];
      $(el).addClass("text-yellow")
    }
    for (let i = 0; i < navBtns.length; i++) {
      const el = navBtns[i];
      $(el).addClass("text-yellow border-yellow hover:text-brick hover:bg-yellow")
    }
    $(logo).addClass("text-yellow")
    $(logoMobile).addClass("text-yellow")
    $(hamburger).addClass("text-yellow")
  }else if(firstSection.classList.contains("bg-blue")){
    for (let i = 0; i < navItems.length; i++) {
      const el = navItems[i];
      $(el).addClass("text-yellow")
    }
    for (let i = 0; i < navBtns.length; i++) {
      const el = navBtns[i];
      $(el).addClass("text-yellow border-yellow hover:text-blue hover:bg-yellow")
    }
    $(logo).addClass("text-yellow")
    $(logoMobile).addClass("text-yellow")
    $(hamburger).addClass("text-yellow")
  }else if(firstSection.classList.contains("bg-brown")){
    for (let i = 0; i < navItems.length; i++) {
      const el = navItems[i];
      $(el).addClass("text-slate")
    }
    for (let i = 0; i < navBtns.length; i++) {
      const el = navBtns[i];
      $(el).addClass("text-slate border-slate hover:text-brown hover:bg-slate")
    }
    $(logo).addClass("text-slate")
    $(logoMobile).addClass("text-slate")
    $(hamburger).addClass("text-slate")
  }else if(firstSection.classList.contains("bg-blue-light")){
    for (let i = 0; i < navItems.length; i++) {
      const el = navItems[i];
      $(el).addClass("text-navy")
    }
    for (let i = 0; i < navBtns.length; i++) {
      const el = navBtns[i];
      $(el).addClass("text-navy border-navy hover:text-blue-light hover:bg-navy")
    }
    $(logo).addClass("text-navy")
    $(logoMobile).addClass("text-navy")
    $(hamburger).addClass("text-navy")
  } else {
    for (let i = 0; i < navItems.length; i++) {
      const el = navItems[i];
      $(el).addClass("text-yellow")
    }
    for (let i = 0; i < navBtns.length; i++) {
      const el = navBtns[i];
      $(el).addClass("text-yellow border-yellow hover:text-black hover:bg-yellow")
    }
    $(logo).addClass("text-yellow")
    $(logoMobile).addClass("text-yellow")
    $(hamburger).addClass("text-yellow")
  }

}

const fullpageContainer = document.getElementById("fullpage")
const headerLogo = document.getElementById("coe-logo")
const mobileHeaderLogo = document.getElementById("coe-logo-mobile")
 

if(fullpageContainer) {
new fullpage('#fullpage', {
	//options here
  licenseKey: '471K9-SDF66-HY606-R9EOK-TTNMO',
  anchors: ['1', '2', '3', '4', '5'],
	autoScrolling:true,
	scrollHorizontally: false,
  scrollOverflow: true,
  onLeave: function(origin, destination,) {

    if(destination.index == 0){
      $(headerLogo).addClass("w-38");
      $(headerLogo).removeClass("w-20");
      $(mobileHeaderLogo).addClass("w-38");
      $(mobileHeaderLogo).removeClass("w-20");
    }else {
      
      $(headerLogo).removeClass("w-38");
      $(headerLogo).addClass("w-20");
      $(mobileHeaderLogo).removeClass("w-38");
      $(mobileHeaderLogo).addClass("w-20");
    }
    
    
    

    if(origin){
      
      $(navItems).removeClass("text-blue text-red text-salmon text-blue-light text-slate text-brown text-navy text-brick text-yellow")
      $(navBtns).removeClass("text-blue text-red text-salmon text-blue-light text-slate text-brown text-navy text-brick text-yellow border-blue border-red border-salmon border-blue-light border-slate border-brown border-navy border-brick border-yellow hover:text-blue hover:text-red hover:text-salmon hover:text-blue-light hover:text-slate hover:text-brown hover:text-navy hover:text-brick hover:text-yellow hover:bg-blue hover:bg-red hover:bg-salmon hover:bg-blue-light hover:bg-slate hover:bg-brown hover:bg-navy hover:bg-brick hover:bg-yellow")
      $(logo).removeClass("text-blue text-red text-salmon text-blue-light text-slate text-brown text-navy text-brick text-yellow")



      if(destination.item.classList.contains("bg-slate")){
          
        for (let i = 0; i < navItems.length; i++) {
          const el = navItems[i];
          $(el).addClass("text-red")
        }
        for (let i = 0; i < navBtns.length; i++) {
          const el = navBtns[i];
          $(el).addClass("text-red border-red hover:text-slate hover:bg-red")
        }
        $(logo).addClass("text-red")
      }else if(destination.item.classList.contains("bg-yellow")){
        for (let i = 0; i < navItems.length; i++) {
          const el = navItems[i];
          $(el).addClass("text-brick")
        }
        for (let i = 0; i < navBtns.length; i++) {
          const el = navBtns[i];
          $(el).addClass("text-brick border-brick hover:text-yellow hover:bg-brick")
        }
        $(logo).addClass("text-brick")
      }else if(destination.item.classList.contains("bg-red")){
        for (let i = 0; i < navItems.length; i++) {
          const el = navItems[i];
          $(el).addClass("text-yellow")
        }
        for (let i = 0; i < navBtns.length; i++) {
          const el = navBtns[i];
          $(el).addClass("text-yellow border-yellow hover:text-red hover:bg-yellow")
        }
        $(logo).addClass("text-yellow")
      }else if(destination.item.classList.contains("bg-salmon")){
        for (let i = 0; i < navItems.length; i++) {
          const el = navItems[i];
          $(el).addClass("text-navy")
        }
        for (let i = 0; i < navBtns.length; i++) {
          const el = navBtns[i];
          $(el).addClass("text-navy border-navy hover:text-salmon hover:bg-navy")
        }
        $(logo).addClass("text-navy")
      }else if(destination.item.classList.contains("bg-navy")){
        for (let i = 0; i < navItems.length; i++) {
          const el = navItems[i];
          $(el).addClass("text-blue-light")
        }
        for (let i = 0; i < navBtns.length; i++) {
          const el = navBtns[i];
          $(el).addClass("text-blue-light border-blue-light hover:text-navy hover:bg-blue-light")
        }
        $(logo).addClass("text-blue-light")
      }else if(destination.item.classList.contains("bg-brick")){
        for (let i = 0; i < navItems.length; i++) {
          const el = navItems[i];
          $(el).addClass("text-yellow")
        }
        for (let i = 0; i < navBtns.length; i++) {
          const el = navBtns[i];
          $(el).addClass("text-yellow border-yellow hover:text-brick hover:bg-yellow")
        }
        $(logo).addClass("text-yellow")
      }else if(destination.item.classList.contains("bg-blue")){
        for (let i = 0; i < navItems.length; i++) {
          const el = navItems[i];
          $(el).addClass("text-yellow")
        }
        for (let i = 0; i < navBtns.length; i++) {
          const el = navBtns[i];
          $(el).addClass("text-yellow border-yellow hover:text-blue hover:bg-yellow")
        }
        $(logo).addClass("text-yellow")
      }else if(destination.item.classList.contains("bg-brown")){
        for (let i = 0; i < navItems.length; i++) {
          const el = navItems[i];
          $(el).addClass("text-slate")
        }
        for (let i = 0; i < navBtns.length; i++) {
          const el = navBtns[i];
          $(el).addClass("text-slate border-slate hover:text-brown hover:bg-slate")
        }
        $(logo).addClass("text-slate")
      }else if(destination.item.classList.contains("bg-blue-light")){
        for (let i = 0; i < navItems.length; i++) {
          const el = navItems[i];
          $(el).addClass("text-navy")
        }
        for (let i = 0; i < navBtns.length; i++) {
          const el = navBtns[i];
          $(el).addClass("text-navy border-navy hover:text-blue-light hover:bg-navy")
        }
        $(logo).addClass("text-navy")
      } else {
        for (let i = 0; i < navItems.length; i++) {
          const el = navItems[i];
          $(el).addClass("text-yellow")
        }
        for (let i = 0; i < navBtns.length; i++) {
          const el = navBtns[i];
          $(el).addClass("text-yellow border-yellow hover:text-black hover:bg-yellow")
        }
        $(logo).addClass("text-yellow")
      }
    }
  }
});
}

// const anchor2 = document.getElementById("toSlideTwo")
// const anchor3 = document.getElementById("toSlideThree")

// anchor2.addEventListener("click", function() {
//   fullpage_api.moveTo(2);
// })

// anchor3.addEventListener("click", function() {
//   fullpage_api.moveTo(3);
// })

// Accordion
const accordItems = document.querySelectorAll(".accord-item")

for (let i = 0; i < accordItems.length; i++) {
  const el = accordItems[i];
  el.addEventListener("click", function() {
    $(accordItems).removeClass("accord-item-active")
    $(el).addClass("accord-item-active")
  })
}



})

const loader = document.getElementById("loading")

function delay() {
  setTimeout(function() {
      $(loader).addClass("loading-fade")
      setTimeout(function() {
        $(loader).addClass("loading-disabled")
      }, 300);
  }, 200);
}




if (document.readyState == 'complete') {
  delay();
} else {
  document.onreadystatechange = function () {
      if (document.readyState === "complete") {
          delay();
      }
  }
}

