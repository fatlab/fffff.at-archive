var oneFingerDownPoint = new THREE.Vector2();
var twoFingerDownPoint = new THREE.Vector2();
var touchPos = new THREE.Vector2();
var touchVel = new THREE.Vector2();
var oneFingerDown = false, twoFingerDown = false;
var cameraPositionOnTouchDown = new THREE.Vector3();
var cameraRotationOnTouchDown = new THREE.Euler();
var touchDownTime;
var touchRotationScale = .003;
var pinchActive = false;
// var lastPinchScale, pinchDelta = 0;
var mc;

var lastPinchScale, pinchDelta=0, pinchStartSize = 10000, lastPinchSize, pinchSizeDelta = 0;

function initTouchControls() {

    $(document).on( 'touchstart', function() {
        if ( introTweening && introInterruptable && !introTweenInterrupted ) {
            introTween.stop();
            tweenToStartPos();
        }
    });

    mc = new Hammer.Manager(renderer.domElement);

    var pan = new Hammer.Pan({pointers:1});
    var pinch = new Hammer.Pinch();
    var tap = new Hammer.Tap();

    pinch.recognizeWith(pan);
    // pan.recognizeWith( pinch );

    mc.add( pan );
    mc.add( pinch );
    mc.add( tap );
    mc.on( 'panstart', onPanStart );
    mc.on( 'panmove', onPanMove );
    mc.on( 'panend', onPanEnd );
    mc.on( 'tap', onTap );

    mc.on('pinchstart', function(event) {
        if ( pvmFocus )
            return;

        pinchActive = true;

        lastPinchSize = pinchStartSize;
        var nextPinchSize = pinchStartSize * event.scale;
        pinchSizeDelta = lastPinchSize - nextPinchSize;
        lastPinchSize = nextPinchSize;
    });
    mc.on('pinchmove', function(event) {
        if ( pvmFocus )
            return;

        var nextPinchSize = pinchStartSize * event.scale;
        pinchSizeDelta = lastPinchSize - nextPinchSize;
        lastPinchSize = nextPinchSize;
        // console.log( pinchSizeDelta );
    });
    mc.on('pinchend', function(event ) {
        if ( pvmFocus )
            return;

        pinchActive = false;
    });
}

function onTap(event) {
    // if ( introTweening ) {
    //     introTween.stop();
    //     tweenToStartPos();
    // }


    lastActivity = Date.now();

    touchPos.set( event.center.x - WIDTH_OFFSET, event.center.y - HEIGHT_OFFSET );
    if ( !pvmFocus ) {
        // TAP anywhere on the screen instead of on a particular object
        // meshHitTest( touchPos );
        if ( hoverMesh ) {
            $('#reticle').fadeOut();
            pvmTouched();
        }
    }
}

function onPanEnd(event) {
    // if ( event.pointers.length == 1 ) {
        oneFingerDown = false;
    // }
    // else {
    //     twoFingerDown = false;
    // }

    lastActivity = Date.now();
}

function onPanStart(event) {

    lastActivity = Date.now();
    // if ( event.pointers.length == 1 ) {

        oneFingerDown = true;
        twoFingerDown = false;

        oneFingerDownPoint.set( event.center.x - WIDTH_OFFSET, event.center.y - HEIGHT_OFFSET );
        // cameraPositionOnTouchDown.copy( camera.position );
        cameraRotationOnTouchDown.copy( camera.rotation );
        touchDownTime = new Date();

    touchPos.set( event.center.x, event.center.y );
}

function onPanMove(event) {

    lastActivity = Date.now();
    // console.log( event );
    if ( oneFingerDown && event.pointers.length > 1 ) {

    }

    touchPos.set( event.center.x - WIDTH_OFFSET, event.center.y - HEIGHT_OFFSET );
    touchVel.set( event.velocityX, event.velocityY );
}
