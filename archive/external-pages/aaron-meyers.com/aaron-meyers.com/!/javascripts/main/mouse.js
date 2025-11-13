var leftMouseDownPoint = new THREE.Vector2();
var rightMouseDownPoint = new THREE.Vector2();
var mousePos = new THREE.Vector2();
var leftMouseDown = false, rightMouseDown = false;
var cameraPositionOnMouseDown = new THREE.Vector3();
var cameraRotationOnMouseDown = new THREE.Euler();
var leftMouseDownTime, mouseClickTimeThreshold = 150;
var wheelDelta = 0;

function initMouseControls() {
    $(document).on( 'mousedown', onMouseDown );
    $(document).on( 'mousewheel', onMouseWheel );
    $(document).on( 'mousemove', onMouseMove );
    $(document).on( 'mouseup', onMouseUp );
    $(document).on( 'contextmenu', function(e) {
        return false;
    });
}

function onMouseWheel(event) {

    if ( pvmFocus )
        return;

    lastActivity = Date.now();

    var delta = event.originalEvent.deltaY * .05;
    wheelDelta = delta;
}

function onMouseDown(event) {
    if ( introTweening && introInterruptable && !introTweenInterrupted ) {
        introTween.stop();
        tweenToStartPos();
    }

    lastActivity = Date.now();

    if ( event.button == 0 ) {
        leftMouseDownPoint.set( event.clientX - WIDTH_OFFSET, event.clientY - HEIGHT_OFFSET );
        leftMouseDown = true;
        cameraPositionOnMouseDown.copy( camera.position );
        leftMouseDownTime = new Date();
    }
    else if ( event.button == 2 ) {
        rightMouseDownPoint.set( event.clientX - WIDTH_OFFSET, event.clientY - HEIGHT_OFFSET );
        rightMouseDown = true;
        cameraRotationOnMouseDown.copy( camera.rotation );
    }
}

function onMouseMove(event) {

    lastActivity = Date.now();
    mousePos.set( event.clientX - WIDTH_OFFSET, event.clientY - HEIGHT_OFFSET );
}

function onMouseUp(event) {


    lastActivity = Date.now();

    if ( event.button == 0 ) {
        leftMouseDown = false;
        var elapsed = (new Date()) - leftMouseDownTime;
        if ( elapsed < mouseClickTimeThreshold ) {

            // mouse.x = ( event.clientX / WIDTH ) * 2 - 1;
            // mouse.y = - ( event.clientY / HEIGHT ) * 2 + 1;
            // console.log( 'mouse:', mouse );
            // var v = new THREE.Vector2( (mousePos.x / WIDTH) * 2 - 1, -(event.clientY/HEIGHT) * 2 + 1 );
            if ( !pvmFocus ) {
                meshHitTest( mousePos );
                if ( hoverMesh )
                    pvmTouched();
            }
        }
    }
    else if ( event.button == 2 ) {
        rightMouseDown = false;
    }
    // $(document).off( 'mousemove', onMouseMove );
    // $(document).off( 'mouseup', onMouseUp )
}
