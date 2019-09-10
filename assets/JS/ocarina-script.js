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
    numOctaves: 5,
    translateX: 100,
    translateY: -70,
    rotate: '360deg',
    rotateX: '720deg',
    scale: 1,
    fill: '#C73E1D',
    fillOpacity: '1',
    duration: 5000
}, "-=7000")

timeLine.add({
    targets: ['#triForcePoly2', 'feTurbulence', 'feDisplacementMap'],
    
    baseFrequency: 0.5,
    numOctaves: 1.8,
    translateY: 50,
    rotate: '360deg',
    rotateY: '720deg',
    scale: 1,
    fill: '#F18F01',
    fillOpacity: '1',
    duration: 5000
}, "-=7000")

timeLine.add({
    targets: ['#triForceLine', 'feTurbulence', 'feDisplacementMap'],
    
    baseFrequency: 0.5,
    numOctaves: 1.8,
    translateX: 70,
    rotateX: '360deg',
    rotateY: '720deg',
    scale: 1,
    fill: '#37FF8B',
    fillOpacity: '1',
    duration: 5000
}, "-=7000")
//steg2
timeLine.add({
    targets: ['#triForcePoly1', 'feTurbulence', 'feDisplacementMap'],
    
    baseFrequency: 0.3,
    numOctaves: 5,
    translateX: 0,
    translateY: 0,
    rotate: '-360deg',
    rotateX: '-720deg',
    scale: 1,
    fill: '#3953C2',
    fillOpacity: '1',
}, "-=6000")

timeLine.add({
    targets: ['#triForcePoly2', 'feTurbulence', 'feDisplacementMap'],
    
    baseFrequency: 0.5,
    numOctaves: 1.8,
    translateY: 0,
    rotate: '-360deg',
    rotateY: '-720deg',
    scale: 1,
    fill: '#A70407',
    fillOpacity: '1',
}, "-=6000")

timeLine.add({
    targets: ['#triForceLine', 'feTurbulence', 'feDisplacementMap'],
    
    baseFrequency: 0.5,
    numOctaves: 1.8,
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

/* timeLine.add({
    targets: ['#triForcePoly2', 'feTurbulence', 'feDisplacementMap' ],
    translateX: -100,
    duration: 700
})

timeLine.add({
    targets: ['#triForceLine', 'feTurbulence', 'feDisplacementMap' ],
    rotateY: '200deg',
    translateY: 100,
    duration: 500
})

timeLine.add({
    targets: ['#triForcePoly1','#triForcePoly2','#triForceLine'],
    scale: 1,
    fillOpacity: 0, 
    translateY: -200,
    duration: 700
}) */
