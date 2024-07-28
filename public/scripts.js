window.addEventListener('load', function () {
    const layer0 = document.querySelector('.layer0');
    const layer1 = document.querySelector('.layer1');
    const layer2 = document.querySelector('.layer2');
    const layer3 = document.querySelector('.layer3');
    const title = document.querySelector('.title');
    const subtitle = document.querySelector('.subtitle');
    const theRest = document.querySelector('.theRest');
    const headertext = document.querySelector('.headertext');
    const container = document.querySelector('.container');
    const gleamPart = document.getElementById('gleamPart');
    const donePart = document.getElementById('donePart');
    const imagesWrapper = document.querySelector('.images-wrapper');
    const g1 = document.querySelector('.g1');
    const g2 = document.querySelector('.g2');
    const g3 = document.querySelector('.g3');
    const g4 = document.querySelector('.g4');
    const g5 = document.querySelector('.g5');
    const g6 = document.querySelector('.g6');
    const g7 = document.querySelector('.g7');
    const g8 = document.querySelector('.g8');

    const area1 = document.getElementById('area1');
    const area2 = document.getElementById('area2');
    const area3 = document.getElementById('area3');
    const area4 = document.getElementById('area4');
    const area5 = document.getElementById('area5');
    const area6 = document.getElementById('area6');
    const area7 = document.getElementById('area7');
    const area8 = document.getElementById('area8');

    const ewidget = document.getElementsByClassName('.e-widget no-button');


    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;
    const aspectRatio = windowHeight / windowWidth;


    const mobileThreshold = 1.5; // Adjust as needed based on your requirements

    //mobile
if (aspectRatio > mobileThreshold) {
    layer0.style.height = `${window.innerHeight}px`;
    layer1.style.height = `${window.innerHeight}px`;
    layer2.style.height = `${window.innerHeight}px`;
    layer3.style.height = `${window.innerHeight }px`;
    theRest.style.height = `${window.innerHeight }px`;
    imagesWrapper.style.height = `${layer3.offsetHeight}px`;

    let midOfUpperPartFromTop = window.innerWidth * 1000 / 2400;
    let titleSubtitleHeight = title.offsetHeight + subtitle.offsetHeight;
    let titleSubtitleFromTop = midOfUpperPartFromTop - titleSubtitleHeight / 2;
    title.style.paddingTop = `${titleSubtitleFromTop}px`;
    let bgPicSize1 = imagesWrapper.offsetHeight;

    area1.style.top = `${-10}%`;
    area1.style.left = `${0}%`;
    area1.style.height = `${25}%`;
    area1.style.width = `${60}%`;

    area2.style.top = `${-5}%`;
    area2.style.left = `${40}%`;
    area2.style.height = `${35}%`;
    area2.style.width = `${60}%`;

    area3.style.top = `${0}%`;
    area3.style.left = `${0}%`;
    area3.style.height = `${35}%`;
    area3.style.width = `${50}%`;

    area4.style.top = `${70}%`;
    area4.style.left = `${-10}%`;
    area4.style.height = `${120}%`;
    area4.style.width = `${60}%`;
    
    area5.style.top = `${60}%`;
    area5.style.left = `${40}%`;
    area5.style.height = `${50}%`;
    area5.style.width = `${70}%`;

    area6.style.top = `${20}%`;
    area6.style.left = `${55}%`;
    area6.style.height = `${45}%`;
    area6.style.width = `${45}%`;

    area7.style.top = `${50}%`;
    area7.style.left = `${0}%`;
    area7.style.height = `${50}%`;
    area7.style.width = `${40}%`;

    area8.style.top = `${50}%`;
    area8.style.left = `${0}%`;
    area8.style.height = `${50}%`;
    area8.style.width = `${40}%`;



    g3Size = bgPicSize1 / 2.5
    g3.style.height = `${g3Size}px`;
    g3.style.width = `${g3Size / 2930 * 1675}px`;

    g4Size = bgPicSize1 / 1.2
    g4.style.height = `${g4Size}px`;
    g4.style.width = `${g4Size / 2930 * 1675}px`;

    g5Size = bgPicSize1 / 3
    g5.style.height = `${g5Size}px`;
    g5.style.width = `${g5Size / 2930 * 1675}px`;

    g6Size = bgPicSize1 / 3
    g6.style.height = `${g6Size}px`;
    g6.style.width = `${g6Size / 2930 * 1675}px`;

    g7Size = bgPicSize1 / 10
    g7.style.height = `${g7Size}px`;
    g7.style.width = `${g7Size / 2930 * 1675}px`;

    g8Size = bgPicSize1 / 10
    g8.style.height = `${g8Size}px`;
    g8.style.width = `${g8Size / 2930 * 1675}px`;

    // g1.style.display = 'none'
    // g2.style.display = 'none'
   //  g3.style.display = 'none'
   //  g4.style.display = 'none'
   //  g5.style.display = 'none'
     g6.style.display = 'none'
     g7.style.display = 'none'
     g8.style.display = 'none'

         // area1.style.display = 'none'
     //    area2.style.display = 'none'
     //    area3.style.display = 'none'
     //    area4.style.display = 'none'
     //    area5.style.display = 'none'
         area6.style.display = 'none'
         area7.style.display = 'none'
         area8.style.display = 'none'
}
//desktoip
else {
    layer0.style.height = `${window.innerWidth * 2500 / 2400}px`;
    layer1.style.height = `${window.innerWidth * 2500 / 2400}px`;
    layer2.style.height = `${window.innerWidth * 2500 / 2400}px`;
    layer3.style.height = `${window.innerWidth * 2650 / 2400}px`;
    theRest.style.height = `${window.innerWidth * 2650 / 2400}px`;
    imagesWrapper.style.height = `${layer3.offsetHeight}px`;
    let midOfUpperPartFromTop = window.innerWidth * 500 / 2400;
    let titleSubtitleHeight = title.offsetHeight + subtitle.offsetHeight;
    let titleSubtitleFromTop = midOfUpperPartFromTop - titleSubtitleHeight / 2;
    title.style.paddingTop = `${titleSubtitleFromTop}px`;
    let bgPicSize1 = imagesWrapper.offsetHeight;


    area1.style.top = `${-40}%`;
    area1.style.left = `${0}%`;
    area1.style.height = `${40}%`;
    area1.style.width = `${60}%`;

    area2.style.top = `${-30}%`;
    area2.style.left = `${40}%`;
    area2.style.height = `${50}%`;
    area2.style.width = `${60}%`;

    area3.style.top = `${50}%`;
    area3.style.left = `${0}%`;
    area3.style.height = `${50}%`;
    area3.style.width = `${35}%`;

    area4.style.top = `${70}%`;
    area4.style.left = `${-10}%`;
    area4.style.height = `${140}%`;
    area4.style.width = `${120}%`;
    
    area5.style.top = `${0}%`;
    area5.style.left = `${0}%`;
    area5.style.height = `${50}%`;
    area5.style.width = `${50}%`;

    area6.style.top = `${20}%`;
    area6.style.left = `${55}%`;
    area6.style.height = `${45}%`;
    area6.style.width = `${45}%`;

    area7.style.top = `${50}%`;
    area7.style.left = `${0}%`;
    area7.style.height = `${50}%`;
    area7.style.width = `${40}%`;

    area8.style.top = `${50}%`;
    area8.style.left = `${0}%`;
    area8.style.height = `${50}%`;
    area8.style.width = `${40}%`;


    g1Size = bgPicSize1 / 5;
    g1.style.height = `${g1Size}px`;
    g1.style.width = `${g1Size / 2930 * 1675}px`;

    g2Size = bgPicSize1 / 4;
    g2.style.height = `${g2Size}px`;
    g2.style.width = `${g2Size / 2930 * 1675}px`;

    g3Size = bgPicSize1 / 2.5
    g3.style.height = `${g3Size}px`;
    g3.style.width = `${g3Size / 2930 * 1675}px`;

    g4Size = bgPicSize1 / 1.2
    g4.style.height = `${g4Size}px`;
    g4.style.width = `${g4Size / 2930 * 1675}px`;

    g5Size = bgPicSize1 / 3
    g5.style.height = `${g5Size}px`;
    g5.style.width = `${g5Size / 2930 * 1675}px`;

    g6Size = bgPicSize1 / 3
    g6.style.height = `${g6Size}px`;
    g6.style.width = `${g6Size / 2930 * 1675}px`;

    g7Size = bgPicSize1 / 10
    g7.style.height = `${g7Size}px`;
    g7.style.width = `${g7Size / 2930 * 1675}px`;

    g8Size = bgPicSize1 / 10
    g8.style.height = `${g8Size}px`;
    g8.style.width = `${g8Size / 2930 * 1675}px`;

    // g1.style.display = 'none'
    // g2.style.display = 'none'
    // g3.style.display = 'none'
    // g4.style.display = 'none'
    // g5.style.display = 'none'
    // g6.style.display = 'none'
     g7.style.display = 'none'
     g8.style.display = 'none'

}




    function getRandomImage() {
        let src = `./mofos/originalgreeknft${Math.floor(Math.random() * 50) + 1}.png`;
            console.log(src)
        return src;
       
    }

    g1.src = getRandomImage();
    g2.src = getRandomImage();
    g3.src = getRandomImage();
    g4.src = getRandomImage();
    g5.src = getRandomImage();
    g6.src = getRandomImage();
    g7.src = getRandomImage();
    g8.src = getRandomImage();

    function wander(element, area) {
        let directionX, directionY, distance, duration;
    
        function move() {
            directionX = Math.random() < 0.5 ? -1 : 1;
            directionY = Math.random() < 0.5 ? -1 : 1;
            distance = (Math.random() * 10 + 10) / 100 * window.innerWidth; 
            duration = (Math.random() * 0.5 + 1) * distance  / window.innerWidth * 20;
    
            const areaRect = area.getBoundingClientRect();
            const elemRect = element.getBoundingClientRect();
            const maxLeft = areaRect.width - elemRect.width;
            const maxTop = areaRect.height - elemRect.height;
    
            const currentLeft = parseFloat(getComputedStyle(element).left) || 0;
            const currentTop = parseFloat(getComputedStyle(element).top) || 0;
            const newLeft = Math.max(0, Math.min(maxLeft, currentLeft + directionX * distance));
            const newTop = Math.max(0, Math.min(maxTop, currentTop + directionY * distance));
    
            setTimeout(() => {
                element.style.transition = `left ${duration}s linear, top ${duration}s linear`;
                element.style.left = `${newLeft}px`;
                element.style.top = `${newTop}px`;
    
               // element.classList.add('wobble-left');
                if (directionX < 0) {
                    element.classList.add('wobble-left');
                } else {
                    element.classList.add('wobble-right');
                }
    
                setTimeout(() => {
                    element.classList.remove('wobble-left');
                    element.classList.remove('wobble-right');
                    if (directionX < 0) {
                        element.style.transform = 'scaleX(-1)'; 
                    }
                    else {
                        element.style.transform = 'scaleX(1)'; 
                    }

                    setTimeout(move, Math.random() * 2000 + 1000);
                }, duration * 1000);
            }, 100);
        }
    
        setTimeout(move, Math.random() * 1000);
    }
    
    function wander_horizontal(element, area) {
        let directionX, directionY, distance, duration;
    
        function move() {
            directionX = Math.random() < 0.5 ? -1 : 1;
            directionY = Math.random() < 0.5 ? -1 : 1;
            distance = (Math.random() * 10 + 10) / 100 * window.innerWidth; 
            duration = (Math.random() * 0.5 + 1) * distance  / window.innerWidth * 20;
    
            const areaRect = area.getBoundingClientRect();
            const elemRect = element.getBoundingClientRect();
            const maxLeft = areaRect.width - elemRect.width;
            const maxTop = areaRect.height - elemRect.height;
           
    
            const currentLeft = parseFloat(getComputedStyle(element).left) || 0;
            const currentTop = parseFloat(getComputedStyle(element).top) || 0;
            const newLeft = Math.max(0, Math.min(maxLeft, currentLeft + directionX * distance));
            const newTop = directionY > 0? 0:maxTop;
    
            setTimeout(() => {
                element.style.transition = `left ${duration}s linear, top ${duration}s linear`;
                element.style.left = `${newLeft}px`;
                element.style.top = `${newTop}px`;
    
                element.classList.add('wobble-left');
                if (directionX < 0) {
                    element.classList.add('wobble-left');
                } else {
                    element.classList.add('wobble-right');
                }
    
                setTimeout(() => {
                    element.classList.remove('wobble-left');
                    element.classList.remove('wobble-right');
                    setTimeout(move, Math.random() * 2000 + 1000);
                }, duration * 1000);
            }, 100);
        }
    
        setTimeout(move, Math.random() * 1000);
    }

    function centerImage(element, area) {
        const areaRect = area.getBoundingClientRect();
        const elemRect = element.getBoundingClientRect();
        const centerX = areaRect.width / 2 - elemRect.width / 2;
        const centerY = areaRect.height / 2 - elemRect.height / 2;

        element.style.left = `${centerX}px`;
        element.style.top = `${centerY}px`;
    }

    centerImage(g1, area1);
    centerImage(g2, area2);
    centerImage(g3, area3);
    centerImage(g4, area4);
    centerImage(g5, area5);
    centerImage(g6, area6);
    centerImage(g7, area7);
    centerImage(g8, area8);

     wander(g1, area1);
     wander(g2, area2);
     wander(g3, area3);
     wander_horizontal(g4, area4);
     wander(g5, area5);
     wander(g6, area6);
     wander(g7, area7);
     wander(g8, area8);

    function cookieExists(name) {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim();
            if (cookie.indexOf(name + '=') === 0) {
                return true;
            }
        }
        return false;
    }

    if (cookieExists('ethAddress')) {
        // If cookies exist, change the display type to block
        gleamPart.style.display = 'none';
        donePart.style.display = 'block';
    } else {
        // If no cookies exist, change the display type to none
        donePart.style.display = 'none';
        gleamPart.style.display = 'block';
    }


    function handleScroll() {

        if (aspectRatio > mobileThreshold) {

          


            let scrollPosition = window.pageYOffset;
            let scaleValue = 1;
            let bgPicSize = imagesWrapper.offsetHeight;

            let scrollFraction = (scrollPosition) / (bgPicSize /2);
            let scrollFraction2 = (scrollPosition - bgPicSize) / (bgPicSize - window.innerHeight)

            if (scrollFraction2 < 0) {
                scrollFraction2 = 0;
            }
            scaleValue = 3 - scrollFraction * 2; // Scale from 2 at the top to 1 at the bottom
            if (scaleValue < 1) {
                scaleValue = 1;
            }

            let gleamScale = scrollFraction * 0.5;
            if (gleamScale < 0.5) {
                gleamScale = 0.5
            }
            let maxScale = window.innerWidth  / 325
            if (gleamScale > maxScale) {
                gleamScale = maxScale
            }
            let gleamHeight = 475 * gleamScale;

            let additionalScroll = scrollPosition - bgPicSize*0.5;
            let gleamMarginAtScreen = (window.innerHeight - gleamHeight) / 2;

            let gleamMarginTop = (window.innerHeight  - 475) / 2 - (1-gleamScale)*475

            if (gleamMarginTop < (window.innerHeight / 2 - 475) /2) {
                gleamMarginTop = (window.innerHeight / 2 - 475) /2
            }

             gleamPart.style.marginTop = `${gleamMarginTop}px`;
             console.log("mobile, ",scaleValue,additionalScroll, window.innerHeight, gleamScale);
             gleamPart.style.transform = `translateX(-50%) scale(${gleamScale})`;

            let backgroundMove = scrollPosition;
            if (backgroundMove > bgPicSize /2 ){
                backgroundMove = bgPicSize /2 
            }


            let bgmodifier = scrollFraction
            if (scrollFraction > 1) {
                bgmodifier = 1
            }

            layer0.style.backgroundSize = `${scaleValue * 100}%`;
            layer1.style.backgroundSize = `${scaleValue * 100}%`;
            layer2.style.backgroundSize = `${scaleValue * 100}%`;
            layer3.style.backgroundSize = `${scaleValue * 100}%`;


            // if (scaleValue < 1.5) {
            //     scaleValue =1.5
            // }

            g1Size = bgPicSize / 8 * scaleValue;
            g1.style.height = `${g1Size}px`;
            g1.style.width = `${g1Size / 2930 * 1675}px`;
        
            g2Size = bgPicSize /7 * scaleValue;
            g2.style.height = `${g2Size}px`;
            g2.style.width = `${g2Size / 2930 * 1675}px`;

            g3Size = bgPicSize /6 * scaleValue;
            g3.style.height = `${g3Size}px`;
            g3.style.width = `${g3Size / 2930 * 1675}px`;

            g4Size = bgPicSize /1.8 * scaleValue;
            g4.style.height = `${g4Size}px`;
            g4.style.width = `${g4Size / 2930 * 1675}px`;

             layer0.style.backgroundPosition = `center top ${backgroundMove *1}px`;
             layer1.style.backgroundPosition = `center top ${backgroundMove *1.05 -250*(1-bgmodifier)}px`;
             layer2.style.backgroundPosition = `center top ${backgroundMove *1.1 -250*(1-bgmodifier)}px`;
          //   layer3.style.backgroundPosition = `center bottom ${backgroundMove *1}px`;




        } else {

            let scrollPosition = window.pageYOffset;
            let scaleValue = 1;
            let bgPicSize = imagesWrapper.offsetHeight;

            
            let scrollFraction = (scrollPosition) / (bgPicSize - window.innerHeight);
            scaleValue = 2 - scrollFraction * 2, 5; // Scale from 2 at the top to 1 at the bottom
            if (scaleValue < 1) {
                scaleValue = 1;
            }

            let gleamStartMarginTop = (window.innerHeight - gleamPart.offsetHeight) /2

            let glemScaleStartPosition = bgPicSize - gleamStartMarginTop;
            let scrollFraction2 = (scrollPosition - glemScaleStartPosition) / (bgPicSize - window.innerHeight + gleamStartMarginTop)

            let gleamScale = 1 + scrollFraction2
             if (gleamScale < 1) {
                gleamScale = 1
            }

            let gleamHeight = gleamPart.offsetHeight * gleamScale;
            let gleamMarginAtScreen = (window.innerHeight - gleamPart.offsetHeight) / 2;

            let gleamMarginTop = scrollPosition - glemScaleStartPosition  - gleamStartMarginTop + gleamMarginAtScreen
          
                if (gleamMarginTop < 0) {
                gleamMarginTop = 0
            }
           
            let maxScale = window.innerWidth / 2 / 325
            if (gleamScale > maxScale) {
                gleamScale = maxScale
            }
          
            gleamPart.style.marginTop = `${gleamMarginTop}px`;
           
            
            console.log("desktop2, ", gleamScale, gleamHeight, gleamPart.offsetHeight);
            console.log("desktop, ", scrollPosition, scrollPosition - glemScaleStartPosition, scrollFraction2, gleamMarginTop, gleamMarginAtScreen);
          
            gleamPart.style.transform = `translateX(-50%) scale(${gleamScale})`;

            layer0.style.backgroundSize = `${scaleValue * 100}%`;
            layer1.style.backgroundSize = `${scaleValue * 100}%`;
            layer2.style.backgroundSize = `${scaleValue * 100}%`;
            layer3.style.backgroundSize = `${scaleValue * 100}%`;

            layer0.style.backgroundPosition = `50% ${scrollPosition * 0.4}px`;
            layer1.style.backgroundPosition = `50% ${scrollPosition * 0.2}px`;
            layer2.style.backgroundPosition = `50% ${scrollPosition * 0.1}px`;
            layer3.style.backgroundPosition = `50% ${scrollPosition * 0}px`;

          
        }


    }



    handleScroll();

    window.addEventListener('resize', function () {
        location.reload();
    });

    
    // Attach scroll event listener to the window
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
});
