let timeLine = anime.timeline({
    easing: 'easeInOutQuad',
    duration: 4000
})
timeLine.add({
    targets: 'svg',
    keyframes: [
        {scale: 1, rotate: '0deg'},
        {scale: 1.5, rotate: '450deg'}
    ],
    duration: 3000
})

timeLine.add({
    targets: ['#triForcePoly1', 'feTurbulence', 'feDisplacementMap'],
    
    baseFrequency: 0,
    numOctaves: 5,
    rotate: 'deg',
    translateX: -100,
    scale: 1,
    fill: '#fff',
    fillOpacity: '1',
    strokeWidth: 3,
    stroke: '#fff',
    strokeDasharray: '20,10,5,4,30,10',
}, "-=4000");

timeLine.add({
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
})

/* timeLine.add({
    targets: 'svg',
    scale: 0,
    fillOpacity: 0,
    duration: 500
}) */
