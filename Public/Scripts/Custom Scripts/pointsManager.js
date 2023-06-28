global.sprunchPoints = 0;
global.megaPoints = 0;
global.volumePoints = 0;
global.freezePoints = 0;

//@input SceneObject tieBreaker
var tieBreaker = script.tieBreaker;

//@input SceneObject loadingScreen
var loadingScreen = script.loadingScreen;

//@input SceneObject sprunchBottle
var sprunchBottle = script.sprunchBottle;

//@input SceneObject megaBottle
var megaBottle = script.megaBottle;

//@input SceneObject volumeBottle
var volumeBottle = script.volumeBottle;

//@input SceneObject freezeBottle
var freezeBottle = script.freezeBottle;

//@input SceneObject doodles
var doodles = script.doodles;

//@input SceneObject freezeEffect
var freezeEffect = script.freezeEffect

//@input SceneObject megaEffect
var megaEffect = script.megaEffect

//@input SceneObject volumeEffect
var volumeEffect = script.volumeEffect

//@input SceneObject sprunchEffect
var sprunchEffect = script.sprunchEffect

//@input SceneObject restartButton
var restartButton = script.restartButton;

//@input SceneObject purpleLogo
var purpleLogo = script.purpleLogo;

//@input SceneObject whiteLogo
var whiteLogo = script.whiteLogo;


global.OnLastQuestion = function ()
{
    print (global.sprunchPoints);
    print (global.megaPoints);
    print (global.volumePoints);
    print (global.freezePoints);
    
    if (global.sprunchPoints < 2 && global.megaPoints < 2 && global.freezePoints <2 && global.volumePoints < 2)
    {
        print ("It is a tie");
        tieBreaker.enabled = true;
        global.sprunchPoints = 1;
        global.megaPoints = 1;
        global.volumePoints = 1;
        global.freezePoints = 1;
    }
    else
    {
        purpleLogo.enabled = false;
        whiteLogo.enabled = true;
        
        if (global.sprunchPoints >= 2)
        {
            print ("show sprunch bottle");
            sprunchBottle.enabled = true;
            
            OnGettingResult();
            sprunchEffect.enabled = true;
            return;
        }
        
        else if (global.megaPoints >= 2)
        {
            print ("show mega bottle");
            megaBottle.enabled = true;
            
            OnGettingResult();
            megaEffect.enabled = true;
            return;
        }
        
        else if (global.volumePoints >= 2)
        {
            print ("show volume bottle");
            volumeBottle.enabled = true;
            
            OnGettingResult();
            volumeEffect.enabled = true;
            return;
        }
        
        else if (global.freezePoints >= 2)
        {
            print ("show freeze bottle");
            freezeBottle.enabled = true;
            
            OnGettingResult();
            freezeEffect.enabled = true;
            return;
        } 
    }
}

function OnGettingResult ()
{
    loadingScreen.enabled = true;
    delayedEvent.reset(2.5);
    resterButtonEvent.reset(5.5);
    
    doodles.enabled = false;
}


var delayedEvent = script.createEvent("DelayedCallbackEvent");
delayedEvent.bind(function(eventData)
{
    loadingScreen.enabled = false;
});


var resterButtonEvent = script.createEvent("DelayedCallbackEvent");
resterButtonEvent.bind(function(eventData)
{
    restartButton.enabled = true;
    global.tweenManager.startTween( restartButton, "Restart_Scale");
    global.tweenManager.startTween( restartButton, "Restart_Rotation"); 
});


global.OnPointManagerReset = function ()
{
    global.sprunchPoints = 0;
    global.megaPoints = 0;
    global.volumePoints = 0;
    global.freezePoints = 0;
    
    sprunchBottle.enabled = false;
    sprunchEffect.enabled = false;
    
    megaBottle.enabled = false;
    megaEffect.enabled = false;
    
    volumeBottle.enabled = false;
    volumeEffect.enabled = false;
    
    freezeBottle.enabled = false;
    freezeEffect.enabled = false;
    
    restartButton.enabled = false;
    
    doodles.enabled = true;
    
    purpleLogo.enabled = true;
    whiteLogo.enabled = false;
}


