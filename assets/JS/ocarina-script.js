let timeLine = anime.timeline({
    easing: 'easeInOutQuad',
    duration: 7000
})
timeLine.add({
    targets: 'svg',
    keyframes: [
        {scale: 1, rotate: '0deg'},
        {scale: 1.5, rotate: '1440deg'}
    ],
    duration: 3000
})
//Steg1
timeLine.add({
    targets: ['#triForcePoly1', 'feTurbulence', 'feDisplacementMap'],
    
    baseFrequency: 0.3,
    translateX: 100,
    translateY: -70,
    rotate: '360deg',
    rotateX: '720deg',
    scale: 1,
    fill: '#C73E1D',
    fillOpacity: '1',
    duration: 5000,
    complete: function() { document.querySelector("feTurbulence").numOctaves = 6}
}, "-=7000")

timeLine.add({
    targets: ['#triForcePoly2', 'feTurbulence', 'feDisplacementMap'],
    
    baseFrequency: 0.5,
    translateY: 50,
    rotate: '360deg',
    rotateY: '720deg',
    scale: 1,
    fill: '#F18F01',
    fillOpacity: '1',
    duration: 5000,
    complete: function() { document.querySelector("feTurbulence").numOctaves = 1}
}, "-=7000")

timeLine.add({
    targets: ['#triForceLine', 'feTurbulence', 'feDisplacementMap'],
    
    baseFrequency: 0.5,
    translateX: 70,
    rotateX: '360deg',
    rotateY: '720deg',
    scale: 1,
    fill: '#37FF8B',
    fillOpacity: '1',
    duration: 5000,
    complete: function() { document.querySelector("feTurbulence").numOctaves = 4}
}, "-=7000")
//steg2
timeLine.add({
    targets: ['#triForcePoly1', 'feTurbulence', 'feDisplacementMap'],
    
    baseFrequency: 0.3,
    translateX: 0,
    translateY: 0,
    rotate: '-360deg',
    rotateX: '-720deg',
    scale: 1,
    fill: '#3953C2',
    fillOpacity: '1',
    complete: function() { document.querySelector("feTurbulence").numOctaves = 3}
}, "-=6000")

timeLine.add({
    targets: ['#triForcePoly2', 'feTurbulence', 'feDisplacementMap'],
    
    baseFrequency: 0.5,
    translateY: 0,
    rotate: '-360deg',
    rotateY: '-720deg',
    scale: 1,
    fill: '#A70407',
    fillOpacity: '1',
    complete: function() { document.querySelector("feTurbulence").numOctaves = 5}
}, "-=6000"),

timeLine.add({
    targets: ['#triForceLine', 'feTurbulence', 'feDisplacementMap'],
    
    baseFrequency: 0.5,
    translateX: 0,
    rotateX: '-360deg',
    rotateY: '-720deg',
    scale: 1,
    fill: '#23A359',
    fillOpacity: '1',
}, "-=6000")
//Försvinner
timeLine.add({
    targets: ['#triForcePoly1','#triForcePoly2','#triForceLine'],
    scale: 0,
    fillOpacity: 0, 
    fill: '#fff',
    duration: 500
})

    anime({
        targets: '.empty-shield',
        keyframes: [
            {translateX: -100},
            {translateX: 0 }
        ],
        easing: 'easeOutSine',
        duration: 2000,
    })

    anime({
        targets: '.empty-sword',
        keyframes: [
            {translateY: -50, scale: 1.5},
            {translateY: 0, scale: 1}
        ],
        duration: 2000,
        easing: 'easeOutSine'
    })

    anime({
        targets: '.empty-ocarina',
        keyframes: [
            {translateX: 100},
            {translateX: 0 },
        ],
        easing: 'easeOutSine',
        duration: 2000,
    })

 function emptyScroller(){

 }
     