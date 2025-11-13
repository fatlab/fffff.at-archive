function startIdleMode() {
    // console.log( 'startIdleMode' );
    if ( pinchActive || oneFingerDown || leftMouseDown || rightMouseDown )
        return;

    fadeLoop( 1, 3 );

    idleMode = true;
    lastActivity = 0;
    idlecamLookAtRandomObject();
}

function idlecamLookAtRandomObject() {
    // find a random object
    // var keys = Object.keys( meshes );
    // var index = THREE.Math.randInt( 0, keys.length-1 );
    // var object = meshes[keys[index]];
    // idlecamLookAtObject( object );

    var index = THREE.Math.randInt( 0, idlePointsOfInterest.length-1 );
    var object = idlePointsOfInterest[index];
    idlecamLookAtObject( object );
}

function idlecamLookAtObject( object ) {

    idleMode = true;

    var startPos = new THREE.Vector3().setFromMatrixPosition( camera.matrixWorld );
    var endPos = new THREE.Vector3(-50,0,0).applyMatrix4( new THREE.Matrix4().extractRotation( camera.matrixWorld ) ).add( startPos );
    endPos = new THREE.Vector3(
        THREE.Math.randFloat( cameraBounds.min.x, cameraBounds.max.x ),
        THREE.Math.randFloat( cameraBounds.min.y, cameraBounds.max.y ),
        THREE.Math.randFloat( cameraBounds.min.z, 60 )
    );

    var objectWorldPos = new THREE.Vector3().setFromMatrixPosition( object.matrixWorld );
    var startQuat = new THREE.Quaternion().setFromRotationMatrix( camera.matrix );
    var endQuat = new THREE.Quaternion().setFromRotationMatrix( new THREE.Matrix4().lookAt(endPos, objectWorldPos, new THREE.Vector3(0,1,0) ) );

    idleTween = new TWEEN.Tween({
        x: startPos.x,
        y: startPos.y,
        z: startPos.z,
        amount: 0,
        startQuat: startQuat,
        endQuat: endQuat
    })
    .to({
        x: endPos.x,
        y: endPos.y,
        z: endPos.z,
        amount: 1,
    }, 20000 )
    .easing( TWEEN.Easing.Quadratic.InOut )
    .onUpdate(function() {
        camera.position.set( this.x, this.y, this.z );
        var quat = new THREE.Quaternion();
        THREE.Quaternion.slerp( this.startQuat, this.endQuat, quat, this.amount );
        camera.rotation.setFromQuaternion( quat );
    })
    .onComplete(function() {
        idleTween = null;
        idlecamLookAtRandomObject();
    })
    .start( time );



}

function endIdleMode() {
    if ( idleTween )
        idleTween.stop();

    fadeLoop( loopLowVolume, 1 );

    camTargetPosition.copy( sceneCamStartPos );
    // camTargetRotation.copy( camera.rotation );
    camTargetRotation.set( 0, 0, 0 );
    idleMode = false;
}
