
window.onload = function () {
    loadNewAnimation();
};

function loadNewAnimation() {

    // 
    let jadsdsEnginemapmapzdxTalTalMountainc = new JadsdsEngine('mapzdxTalTalMountainc');
    jadsdsEnginemapmapzdxTalTalMountainc.fixCanvasSize = false;
    jadsdsEnginemapmapzdxTalTalMountainc.loadAnimationScreen = "zdxTalTalMountaincLoading";
    
    jadsdsEnginemapmapzdxTalTalMountainc.stopAnimationWhenIsNotVisible = true;
    jadsdsEnginemapmapzdxTalTalMountainc.loadAnimation('zdxTalTalMountainc');
    

    //-----------------------------------------------------------------------------------------------------

   


    

    let jadsdsEnginemapzdxForest = new JadsdsEngine('mapzdxForest');
    jadsdsEnginemapzdxForest.fixCanvasSize = false;
    jadsdsEnginemapzdxForest.loadAnimationScreen = "zdxForestLoading";
    jadsdsEnginemapzdxForest.stopAnimationWhenIsNotVisible = true;
    jadsdsEnginemapzdxForest.loadAnimation('zdxForest');

 //-----------------------------------------------------------------------------------------------------

    

    let jadsdsEnginemapzdxMabe = new JadsdsEngine('mapzdxMabe');
    jadsdsEnginemapzdxMabe.fixCanvasSize = false;
    jadsdsEnginemapzdxMabe.loadAnimationScreen = "zdxMabeLoading";
    jadsdsEnginemapzdxMabe.stopAnimationWhenIsNotVisible = true;
    jadsdsEnginemapzdxMabe.loadAnimation('zdxMabe');

  //-----------------------------------------------------------------------------------------------------

  

    let jadsdsEnginemapzdxMabeb = new JadsdsEngine('mapzdxMabeb');
    jadsdsEnginemapzdxMabeb.fixCanvasSize = false;
    jadsdsEnginemapzdxMabeb.loadAnimationScreen = "zdxMabebLoading";
    jadsdsEnginemapzdxMabeb.stopAnimationWhenIsNotVisible = true;
    jadsdsEnginemapzdxMabeb.loadAnimation('zdxMabeb');

  
}

function changaClasses(newclass) {
    document.getElementById("divzdxTalTalMountainc").className = newclass;
    document.getElementById("divzdxForest").className = newclass;
    document.getElementById("divzdxMabe").className = newclass;
    document.getElementById("divzdxMabeb").className = newclass;
}
