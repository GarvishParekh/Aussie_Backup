//@input SceneObject tapHint
var tapHint = script.tapHint;

//@input SceneObject tapHintImage
var tapHintImage = script.tapHintImage;

//@input SceneObject firstQuestion
var firstQuestion = script.firstQuestion;

//@input SceneObject questionHint
var questionHint =script.questionHint;

var isFirstTime = true;

var hintEventTap = script.createEvent("TapEvent");
hintEventTap.bind(OnHintEventTap);

function OnHintEventTap ()
{
    if (isFirstTime)
    {
        isFirstTime = false;
        tapHint.enabled = false;
        tapHintImage.enabled = false;
    
        firstQuestion.enabled = true;
        print ("First Tap");
        
        global.tweenManager.startTween( firstQuestion, "Scale_Question");
    }   
}

global.OnResetQuizManager = function ()
{
    isFirstTime = true;
    tapHint.enabled = true;
    tapHintImage.enabled = true;
}


