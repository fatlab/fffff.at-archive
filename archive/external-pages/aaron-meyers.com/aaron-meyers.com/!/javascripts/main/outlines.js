var composer;
var maskScene, postMaskScene;
var fxaa;
var outlinedObject,
    maskWireframeObject,
    maskSolidObject,
    cloneObject;

var dpr = 1;

var cachedOutlines = {};
var cachedSolids = {};
var cachedClones = {};

var wireframeMaterial;

function initOutlineStuff() {

    if ( window.devicePixelRatio !== undefined )
        dpr = window.devicePixelRatio;

    maskScene = new THREE.Scene();
    postMaskScene = new THREE.Scene();

    wireframeMaterial = new THREE.MeshBasicMaterial({color: 0xFFFFFF, wireframe: true, wireframeLinewidth: 5, wireframeLineJoin: 'miter', depthWrite: false });
}

function renderScenes() {
    renderer.render( scene, camera );
    renderer.render( maskScene, camera );
    renderer.render( postMaskScene, camera );
}

function disposeOutlineModel() {
    if ( outlinedObject ) {
        outlinedObject.visible = true;
        outlinedObject = 0;
        maskWireframeObject.parent.remove( maskWireframeObject );
        maskWireframeObject = 0;
        maskSolidObject.parent.remove( maskSolidObject );
        maskSolidObject = 0;
        cloneObject.parent.remove( cloneObject );
        cloneObject = 0;
    }
}

function setOutlineModel( model ) {

    if ( outlinedObject == model )
        return;

    if ( outlinedObject )
        disposeOutlineModel();


    outlinedObject = model;
    outlinedObject.visible = false;

    if ( !cachedOutlines[model.name] ) {

        cachedOutlines[model.name] = new THREE.Mesh(outlinedObject.geometry, wireframeMaterial);
        cachedSolids[model.name] = new THREE.Mesh( outlinedObject.geometry, new THREE.MeshBasicMaterial({color:0xFFFFFF}) );
        cachedClones[model.name] = new THREE.Mesh( outlinedObject.geometry, outlinedObject.material );
    }

    maskWireframeObject = cachedOutlines[model.name];
    maskSolidObject = cachedSolids[model.name];
    cloneObject = cachedClones[model.name];
    cloneObject.material = outlinedObject.material;

    maskWireframeObject.position.copy( outlinedObject.parent.position );
    maskWireframeObject.rotation.copy( outlinedObject.parent.rotation );
    maskScene.add( maskWireframeObject );

    maskSolidObject.position.copy( outlinedObject.parent.position );
    maskSolidObject.rotation.copy( outlinedObject.parent.rotation );
    maskScene.add( maskSolidObject );

    cloneObject.position.copy( outlinedObject.parent.position );
    cloneObject.rotation.copy( outlinedObject.parent.rotation );
    postMaskScene.add( cloneObject );
}
