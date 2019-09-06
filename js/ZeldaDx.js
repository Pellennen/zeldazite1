
window.onload = function () {
    loadNewAnimation();
};

function loadNewAnimation() {

    document.getElementById("divzdxTalTalMountainc").style.left = "0px";
    document.getElementById("divzdxTalTalMountainc").style.top = "50px";//+50

    let jadsdsEnginemapmapzdxTalTalMountainc = new JadsdsEngine('mapzdxTalTalMountainc');
    jadsdsEnginemapmapzdxTalTalMountainc.fixCanvasSize = false;
    jadsdsEnginemapmapzdxTalTalMountainc.loadAnimationScreen = "zdxTalTalMountaincLoading";
    
    jadsdsEnginemapmapzdxTalTalMountainc.stopAnimationWhenIsNotVisible = true;
    jadsdsEnginemapmapzdxTalTalMountainc.loadAnimation('zdxTalTalMountainc');
    

    //-----------------------------------------------------------------------------------------------------

   


    // document.getElementById("divzdxForest").style.left = "0px";
    // document.getElementById("divzdxForest").style.top = "562px";

    let jadsdsEnginemapzdxForest = new JadsdsEngine('mapzdxForest');
    jadsdsEnginemapzdxForest.fixCanvasSize = false;
    jadsdsEnginemapzdxForest.loadAnimationScreen = "zdxForestLoading";
    jadsdsEnginemapzdxForest.stopAnimationWhenIsNotVisible = true;
    jadsdsEnginemapzdxForest.loadAnimation('zdxForest');

 //-----------------------------------------------------------------------------------------------------

    // document.getElementById("divzdxMabe").style.left = "0px";
    // document.getElementById("divzdxMabe").style.top = "1090px";

    let jadsdsEnginemapzdxMabe = new JadsdsEngine('mapzdxMabe');
    jadsdsEnginemapzdxMabe.fixCanvasSize = false;
    jadsdsEnginemapzdxMabe.loadAnimationScreen = "zdxMabeLoading";
    jadsdsEnginemapzdxMabe.stopAnimationWhenIsNotVisible = true;
    jadsdsEnginemapzdxMabe.loadAnimation('zdxMabe');

  //-----------------------------------------------------------------------------------------------------

    // document.getElementById("divzdxMabeb").style.left = "0px";
    // document.getElementById("divzdxMabeb").style.top = "1570px";

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
