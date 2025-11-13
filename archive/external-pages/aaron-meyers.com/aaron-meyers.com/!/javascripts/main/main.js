var container, stats;

var aspectLock = false;
var forcedAspect = 10.0/16.0;

var WIDTH, HEIGHT, WIDTH_OFFSET, HEIGHT_OFFSET;

var camera, scene, renderer, objects;
var controls;
var particleLight;
var dae;
var head;
var mouseX = 0, mouseY = 0;
var mouseDown = false;
var mouse = new THREE.Vector2();
var raycaster = new THREE.Raycaster();
var projector = new THREE.Projector();
var pvms = [];
var hitTestObjects = [];
var hoverMesh = 0;
var time = 0;
var cssRenderer, cssScene, cssCamera;

var introTweenInterrupted = false;
var introTweenTime = 20000;
var introTweenStartTime;
var introInterruptable = false;

var idleTimeout = 5000,
    lastActivity = Date.now(),
    idleMode = false,
    idleTween,
    idleModeEnabled = true,
    idlePointsOfInterest = [];

var front;
var sphere;
var cssObj, whatever, domScale;
var savedCamMatrix;
var pvmFocus = false;
var projectData;
var fov = 45;
var camNear = (fov==30?8:3);

var cubeCamera;
var aaron;
var isTouchDevice;

var camTargetPosition, camTargetRotation;
var loader = new THREE.ColladaLoader();
loader.options.convertUpAxis = true;
var cameraBounds = {
    min: new THREE.Vector3( 1, 5, 15 ),
    max: new THREE.Vector3( 64, 38, 96 )
};

var ctmLoader = new THREE.CTMLoader();

var meshes = {};
var ctmMesh;
var cameraControlEnabled = false;
var cameraOrbitEnabled = true;
var cameraOrbitSpeed = 1;


WIDTH = window.innerWidth;
HEIGHT = ( aspectLock ? WIDTH * forcedAspect : window.innerHeight );
HEIGHT_OFFSET = (window.innerHeight - HEIGHT) * .5;
WIDTH_OFFSET = 0;



cubeCamera = new THREE.CubeCamera( 1, 1000, 512 );
cubeCamera.renderTarget.minFilter = THREE.LinearMipMapLinearFilter;

camera = new THREE.PerspectiveCamera( fov, WIDTH / HEIGHT, camNear, 2000 );
camera.rotation.order = "YXZ";
var sceneCamStartPos;

var headPos = new THREE.Vector3( 31.88391, 23. , -15.37567 );
var camHeadOrbitDist = (fov==30?13:8);
var camOrbitAngle = 0;
var loadingStatus;

var introTweening;
var introTween;

var keepGoing = true;
var reticle;

$(function() {

    doOrientation();

    $.getJSON( './data/data2.json', function( json ) {

        // $(".fancybox").fancybox();

        $(".fancybox").fancybox({
            // closeBtn: false,
            margin: [ 40, 20, 40, 20 ],
            helpers : {
                media : true
            },
            youtube : {
              autoplay: 0
            },
            vimeo: {
                autoplay: 0
            }
        }); // fancybox

        projectData = json;
        ctmLoader.load( './models/Aaron_20k_2.ctm', function( geometry ) {
            // console.log( geometry );
            ctmMesh = new THREE.Mesh(
                geometry,
                new THREE.MeshBasicMaterial({
                    color: 0xFFFFFF,
                    // wireframe:true,
                    shading:THREE.SmoothShading,
                    envMap: cubeCamera.renderTarget,
                    reflectivity: 0
                })
            );
            ctmMesh.rotateX( THREE.Math.degToRad( -90 ) );
            ctmMesh.geometry.computeBoundingSphere();

            // hitTestObjects.push( ctmMesh );

            cubeCamera.position.copy( ctmMesh.geometry.boundingSphere.center );
            cubeCamera.position.z *= -1;


            // camera.lookAt( headPos );


            init();
            if ( isTouchDevice && HEIGHT > WIDTH ) {
                $('#orientationWarning').show();
            }


            onWindowResize();
            animate();
            loadScene();
        }, {userWorker:true, userBuffers:false});

        // loadScene();
    });
});



function loadScene() {

    // loader.load( './models/room_test.dae', function( collada ) {
    // $('#loadStatus').text('Loading:' );

    loader.load( './models/scene_05.dae', function( collada ) {
    // loader.load( 'getCollada.php?filename=scene_01.dae', function( collada ) {
    // loader.load( './models/tvs.dae', function( collada ) {
        dae = collada.scene;
        dae.traverse( function ( child ) {

            // console.log( child.name );
            var name = child.name;
            // console.log( name );

            if ( name.indexOf( "Camera" ) > -1 ) {
                // camera.position.set( child.position.x, child.position.y, child.position.z );
                sceneCamStartPos = new THREE.Vector3().copy( child.position );
                if ( camera.fov == 45 ) {
                    sceneCamStartPos.set( 33.08134841918945, 17.852209091186523, 57.058999633789114 );
                }
            }
            else if ( name == 'Head' ) {
                head = child;
            }
            else if ( name.indexOf( 'poi_' ) >= 0 ) {
                idlePointsOfInterest.push( child );
            }

            if ( child instanceof THREE.Mesh ) {
                var meshName = child.parent.name;

                meshes[meshName] = child;
                // console.log( meshName );
                if ( meshName.indexOf( 'pvm' ) >= 0 ) {
                    pvms.push( child );
                    hitTestObjects.push( child );
                }
                else if ( meshName == 'mbp' ) {
                    hitTestObjects.push( child );
                }

                if ( child.material instanceof THREE.MeshFaceMaterial ) {

                    for ( var i=0; i<child.material.materials.length; i++ ) {
                        var mat = child.material.materials[i];
                        child.material.materials[i] = new THREE.MeshBasicMaterial({
                            wireframe:true,
                            // shading: THREE.NoShading,
                            map: THREE.ImageUtils.loadTexture( './textures/pixel.png', THREE.UVMapping ),
                            name: mat.name,
                            envMap: cubeCamera.renderTarget,
                            reflectivity: 0
                        });
                    }
                }
                else
                {
                    child.material = new THREE.MeshBasicMaterial({
                        wireframe:true,
                        shading: THREE.NoShading,
                        map: THREE.ImageUtils.loadTexture( './textures/pixel.png', THREE.UVMapping )
                    });
                }

                if ( child.parent.name == 'LowInsulationFront' || child.parent.name == 'BeveledInsulationFront' ) {
                    child.visible = false;
                    front = child;
                }
            }

        } ); // end dae.traverse()
        dae.updateMatrix();

        for ( var key in meshes ) {
            if ( meshes.hasOwnProperty( key ) ) {
                if ( key.indexOf( "Aaron" ) < 0 ) {
                    addTextureToQueue( meshes[key].material, key );
                }
                else {
                    meshes[key].material = ctmMesh.material;
                }
            }
        }

        loadQueue( 3, 'low', onLowResTexturesLoaded );

    }, function( progress ) {
        // FU APACHE MOD_DEFLATE.C!!!
        var filesize = 5343514;
        // var percent = Math.round(progress.loaded / progress.total) * 100;
        var percent = Math.round( (progress.loaded / filesize) * 100 );
        $('#loadInfo').text( 'Scene Geometry ' + percent + '%' );
    });
}

function onLowResTexturesLoaded() {

    loadSounds( function() {
        $('#loadInfo').text('');
        $('#loadStatus').text( (isTouchDevice ? 'Touch' : 'Click') + ' to Begin' );
        $('#three_webgl').on( 'touchstart mousedown', onFirstClick );
        // $('#three_webgl').css( 'cursor', 'pointer' );

        // now start loading high res textures
        loadQueue( 3, 'high', function() {
            // console.log( 'high res textures loaded' );
        });
    });

}

function onFirstClick() {

    $('#three_webgl').off();

    // $('#three_webgl').off( 'touchstart mousedown', onFirstClick );
    // $('#three_webgl').css( 'cursor', 'default' );
    // playSound( sounds['intro_sound.wav'], 0 );
    // playSpoofSound();
    playIntroSound();

    var delay = 500;
    var tweenTime = 675;

    // stop rotating the camera
    cameraOrbitEnabled = false;
    // cameraOrbitSpeed = 0;

    camera.near = .1;
    camera.updateProjectionMatrix();
    var tween = new TWEEN.Tween({camOrbitAngle: camOrbitAngle, camHeadOrbitDist: camHeadOrbitDist})
    .to({camOrbitAngle: 0, camHeadOrbitDist: 2}, tweenTime)
    .easing( TWEEN.Easing.Quadratic.InOut )
    .onStart(function() {
        // playIntroSound();
    })
    .onUpdate(function() {
        camOrbitAngle = this.camOrbitAngle;
        camHeadOrbitDist = this.camHeadOrbitDist;
        setCameraOrbit( camOrbitAngle );
    })
    .onComplete(function() {
        scene.add( dae );
        ctmMesh.visible = false;
        renderCubeMap();
        tweenToStartPos();
        setTimeout( function() {
            introInterruptable = true;
        }, 500 );
        // playIntroSound();

    })
    // .delay( delay )
    .start( time );

    $('#loadStatus')
    // .delay(delay)
    .fadeOut( tweenTime );
}

function tweenToStartPos() {

    if ( introTweenInterrupted )
        return;

    if ( introTween ) {
        introTweenInterrupted = true;
        var tweenTimeRemaining = (introTweenTime - ( Date.now() - introTweenStartTime ) );
        if ( tweenTimeRemaining > 1000 ) {
            skipIntroSound();
        }
    }

    var tweenTime = introTweenInterrupted ? (introTweenTime - (Date.now()-introTweenStartTime)) * .025 : introTweenTime;

    introTween = new TWEEN.Tween({
        x: camera.position.x,
        y: camera.position.y,
        z: camera.position.z,
        amount: introTweenInterrupted ? (Date.now()-introTweenStartTime)/introTweenTime : 0
    })
    .to({
        x: sceneCamStartPos.x,
        y: sceneCamStartPos.y,
        z: sceneCamStartPos.z,
        amount: 1
    }, tweenTime )
    .easing( TWEEN.Easing.Quadratic.Out )
    .onStart(function() {
        renderCubeMap();
        introTweenStartTime = Date.now();
    })
    .onUpdate(function() {
        camera.position.set( this.x, this.y, this.z );
        ctmMesh.material.reflectivity = this.amount;
    })
    .onComplete(function() {
        camTargetPosition.copy( camera.position );
        cameraControlEnabled = true;
        // set near clipping back to the right dist
        camera.near = camNear;
        camera.updateProjectionMatrix();
        introTweening = false;
        lastActivity = Date.now();

        hitTestObjects.push( meshes.Aaron );
        if ( isTouchDevice ) {
            $('#reticle').fadeIn();
        }
    })
    .delay(100)
    .start(time);

    introTweening = true;
}

function killPageScroll() {
    $(document).on('touchmove', function(e) {
        e.preventDefault();
    });
    var selScrollable = '.scrollable';
    $('body').on('touchstart', selScrollable, function(e) {
        if (e.currentTarget.scrollTop === 0) {
            e.currentTarget.scrollTop = 1;
        } else if (e.currentTarget.scrollHeight === e.currentTarget.scrollTop + e.currentTarget.offsetHeight) {
            e.currentTarget.scrollTop -= 1;
        }
    });
    $('body').on('touchmove', selScrollable, function(e) {
        e.stopPropagation();
    });
}

function init() {

    container = $('#three_webgl')[0];
    // document.body.appendChild( container );
    isTouchDevice = 'ontouchstart' in document.documentElement;

    var sceneScale = 1;
    scene = new THREE.Scene();
    if ( dae ) {
        dae.scale.multiplyScalar(sceneScale);
        scene.add( dae );    }
    if ( ctmMesh ) {
        scene.add( ctmMesh );
    }

    camera.position.multiplyScalar(sceneScale);
    camera.near *= sceneScale;
    camera.far *= sceneScale;
    camera.updateProjectionMatrix();

    // var geometry = new THREE.SphereGeometry( 1, 8, 8 );
    // var material = new THREE.MeshBasicMaterial( {color: 0xffff00, wireframe:true} );
    // sphere = new THREE.Mesh( geometry, material );
    // scene.add( sphere );

    renderer = new THREE.WebGLRenderer({antialias:true});
    renderer.setSize( WIDTH, HEIGHT );
    container.appendChild( renderer.domElement );
	renderer.setClearColor( 0x000000, 1 );
	renderer.autoClear = false;

    var cssContainer = $('#three_css3d')[0];
    cssRenderer = new THREE.CSS3DRenderer();
    cssRenderer.setSize( WIDTH, HEIGHT );
    cssContainer.appendChild( cssRenderer.domElement );
    cssScene = new THREE.Scene();

    cssCamera = new THREE.PerspectiveCamera( fov, WIDTH/HEIGHT, 1, 1000 );
    cssCamera.position.set( 0,0,100 );
    cssScene.add( cssCamera );

    whatever = new THREE.CSS3DObject( $('#whatever')[0] );
    whatever.position.x = $(whatever.element).width() * .5;
    whatever.position.y = -( $(whatever.element).height() ) * .5;

    cssObj = new THREE.CSS3DObject( document.createElement('div') );
    cssObj.position.x -= 10;
    cssObj.position.y += 10;
    cssObj.rotation.y -= .4;

    domScale = sceneScale / 100;
    cssObj.scale.set( domScale, domScale, domScale );
    cssObj.add( whatever );
    cssScene.add(cssObj);

    loadingStatus = new THREE.CSS3DObject( $('#loadStatus')[0] );
    loadingStatus.position.copy( headPos ).add( new THREE.Vector3(0,.5,0) );
    loadingStatus.scale.set( domScale, domScale, domScale );
    cssScene.add( loadingStatus );

    reticle = new THREE.CSS3DObject( $('#reticle')[0] );
    reticle.scale.set( domScale, domScale, domScale );
    cssScene.add( reticle );
    reticle.parent = cssCamera;
    reticle.position.set( 0, 0, -10 );

    scene.add( cubeCamera );
    camTargetPosition = new THREE.Vector3().copy( camera.position );
    camTargetRotation = new THREE.Euler().copy( camera.rotation );

    // stats = new Stats();
    // stats.domElement.style.position = 'absolute';
    // stats.domElement.style.top = '0px';
    // container.appendChild( stats.domElement );

    killPageScroll();

    window.addEventListener( 'resize', onWindowResize, false );
    window.onblur = function() {
        mute();
    }
    window.onfocus = function() {
        unmute();
    }

    initOutlineStuff();

    if ( isTouchDevice ) {
        initTouchControls();
    }
    else {
        initMouseControls();
    }
}

function renderCubeMap() {

    if ( front ) {
        front.visible = true;
    }
    var cachedReflectivity;
    if ( meshes.Aaron ) {
        cachedReflectivity = meshes.Aaron.material.reflectivity;
        meshes.Aaron.material.reflectivity = 1.0;
    }
    cubeCamera.updateCubeMap( renderer, scene );
    if ( front ) {
        front.visible = false;
    }
    if ( meshes.Aaron ) {
        meshes.Aaron.material.reflectivity = cachedReflectivity;
    }
}

function aaronTouched() {
    // callback for special situation when aaron is touched
    console.log( 'aaronTouched' );
    var data = projectData['items']['aaron'];
    setupDomElement( data );
    $('#whatever').css( 'width', '600px' );

    console.log( hoverMesh );
    hoverMesh.geometry.computeBoundingBox();
    // cssObj.position.copy( hoverMesh.geometry.boundingBox.max ).applyMatrix4( hoverMesh.matrixWorld );
    // cssObj.rotation.setFromQuaternion( new THREE.Quaternion().setFromRotationMatrix(hoverMesh.matrixWorld) );
    // cssObj.rotation.y -= 90 * (Math.PI/180);
    


    var lookAtTarget = new THREE.Vector3().copy(headPos).add( new THREE.Vector3(3,0,0) );
    var targetPos = new THREE.Vector3().copy(lookAtTarget).add( new THREE.Vector3(0, 0, 8) );
    console.log( targetPos );
    var startQuat = new THREE.Quaternion().setFromRotationMatrix( camera.matrix );
    var finishQuat = new THREE.Quaternion().setFromRotationMatrix( new THREE.Matrix4().lookAt(targetPos, lookAtTarget, new THREE.Vector3(0,1,0) ) );

    cssObj.position.set( 33.38391, 25.90000000000002, -16.87567 );
    cssObj.rotation.copy( new THREE.Euler( 0, -.2, 0 ) );
    cssObj.scale.x = 0;
    $('#whatever').show();

    var tween = new TWEEN.Tween({
        x: camera.position.x,
        y: camera.position.y,
        z: camera.position.z,
        startQuat: startQuat,   // starting rotation
        finishQuat: finishQuat, // finishing rotation
        dom:cssObj,
        amount: 0
    })
    .to({
        amount: 1,
        x: targetPos.x,
        y: targetPos.y,
        z: targetPos.z
    }, 1500 )
    .easing( TWEEN.Easing.Cubic.InOut )
    .onUpdate( tweenUpdate )
    .onComplete( function() {
        setupCssInteraction();
        // $('#three_css3d').show();
    });

    function tweenUpdate() {
        camera.position.set( this.x, this.y, this.z );
        var quat = new THREE.Quaternion();
        THREE.Quaternion.slerp( this.startQuat, this.finishQuat, quat, this.amount );
        camera.rotation.setFromQuaternion( quat );
        if ( this.dom ) {
            this.dom.scale.x = this.amount * domScale;
        }
    }

    tween.start(time);
}

function mbpTouched() {
    var mbp = meshes.mbp;

    var lookAtTarget = new THREE.Vector3().copy( new THREE.Vector3( 0, -2, -2 ).applyMatrix4( mbp.matrixWorld ) );
    var targetPos = new THREE.Vector3().copy( new THREE.Vector3( 0, 2, -2 ).applyMatrix4( mbp.matrixWorld ) );
    var startQuat = new THREE.Quaternion().setFromRotationMatrix( camera.matrix );
    var finishQuat = new THREE.Quaternion().setFromRotationMatrix( new THREE.Matrix4().lookAt(targetPos, lookAtTarget, new THREE.Vector3(0,1,0) ) );

    var tween = new TWEEN.Tween({
        x: camera.position.x,
        y: camera.position.y,
        z: camera.position.z,
        startQuat: startQuat,   // starting rotation
        finishQuat: finishQuat, // finishing rotation
        // dom:cssObj,
        amount: 0
    })
    .to({
        amount: 1,
        x: targetPos.x,
        y: targetPos.y,
        z: targetPos.z
    }, 1500 )
    .easing( TWEEN.Easing.Cubic.InOut )
    .onUpdate( tweenUpdate )
    .onComplete( function() {
        camera.position.copy( sceneCamStartPos );
        camera.rotation.setFromQuaternion( new THREE.Quaternion() );
        camTargetPosition.copy( camera.position );
        camTargetRotation.copy( camera.rotation );
        $('#three_css3d').css( 'pointer-events', 'none' );
        $('#three_css3d').off();
        $('#whatever').off();
        pvmFocus = false;
        lastActivity = Date.now();
        if ( isTouchDevice ) {
            $('#reticle').fadeIn();
        }
        // setupCssInteraction();
        // $('#three_css3d').show();
    });

    function tweenUpdate() {
        camera.position.set( this.x, this.y, this.z );
        var quat = new THREE.Quaternion();
        THREE.Quaternion.slerp( this.startQuat, this.finishQuat, quat, this.amount );
        camera.rotation.setFromQuaternion( quat );
        if ( this.dom ) {
            this.dom.scale.x = this.amount * domScale;
        }
    }

    tween.start(time);
}

function pvmTouched() {
    // callback for when a tv is touched
    $('#title_text').hide();

    playSelectSound();


    savedCamMatrix = new THREE.Matrix4().copy( camera.matrixWorld );
    pvmFocus = true;
    disposeOutlineModel();

    if ( hoverMesh == meshes.Aaron ) {
        aaronTouched();
        return;
    }
    else if ( hoverMesh == meshes.mbp ) {
        mbpTouched();
        return;
    }

    var data = projectData['items'][hoverMesh.parent.name.split('-')[1]];
    setupDomElement( data );

    hoverMesh.geometry.computeBoundingBox();
    var hoverMeshWorldPos = new THREE.Vector3().setFromMatrixPosition( hoverMesh.matrixWorld );
    var centerOffset = new THREE.Vector3().addVectors( hoverMesh.geometry.boundingBox.max, hoverMesh.geometry.boundingBox.min ).multiplyScalar( .5 );
    centerOffset.y += .5;
    var targetPos0 = new THREE.Vector3(0,0,fov==30?20:15).add(centerOffset).applyMatrix4(hoverMesh.matrixWorld);
    var targetPos1 = new THREE.Vector3( -10, 0, 10 ).add(centerOffset).applyMatrix4( hoverMesh.matrixWorld );
    var targetPos = targetPos0;

    var lookAtOffset = new THREE.Vector3();
    lookAtOffset.x += hoverMesh.geometry.boundingBox.max.x + 40;
    lookAtOffset.z += hoverMesh.geometry.boundingBox.min.z;

    var lookAtTarget0 = new THREE.Vector3().add(centerOffset).applyMatrix4( hoverMesh.matrixWorld );
    var lookAtTarget1 = lookAtOffset.add(centerOffset).applyMatrix4( hoverMesh.matrixWorld );
    var lookAtTarget = lookAtTarget0;

    if ( fov == 45 ) {
        // changed camera fov from 30 to 45 late in the game and found the easiest way to get the proper camera positioning was to translate the camera forward by 5 units!
        targetPos1.add( new THREE.Vector3(0,0,-5).applyMatrix4( new THREE.Matrix4().lookAt(targetPos1, lookAtTarget1, new THREE.Vector3(0,1,0) ) ) );
    }

    // a quaternion representing the starting rotation of the camera
    var startQuat0 = new THREE.Quaternion().setFromRotationMatrix( camera.matrix );
    var finishQuat0 = new THREE.Quaternion().setFromRotationMatrix( new THREE.Matrix4().lookAt(targetPos0, lookAtTarget0, new THREE.Vector3(0,1,0) ) );
    var startQuat1 = new THREE.Quaternion().copy(finishQuat0);
    var finishQuat1 = new THREE.Quaternion().setFromRotationMatrix( new THREE.Matrix4().lookAt(targetPos1, lookAtTarget1, new THREE.Vector3(0,1,0) ) );

    // var max = hoverMesh.geometry.boundingBox.max;
    cssObj.position.copy( hoverMesh.geometry.boundingBox.max ).applyMatrix4( hoverMesh.matrixWorld );
    cssObj.rotation.setFromQuaternion( new THREE.Quaternion().setFromRotationMatrix(hoverMesh.matrixWorld) );
    cssObj.rotation.y -= 90 * (Math.PI/180);
    cssObj.scale.x = 0;
    $('#whatever').show();

    var tween0 = new TWEEN.Tween({
        x: camera.position.x,
        y: camera.position.y,
        z: camera.position.z,
        startQuat: startQuat0,   // starting rotation
        finishQuat: finishQuat0, // finishing rotation
        amount: 0
    })
    .to({
        amount: 1,
        x: targetPos0.x,
        y: targetPos0.y,
        z: targetPos0.z
    }, 1500 )
    .easing( TWEEN.Easing.Cubic.InOut )
    .onUpdate( tweenUpdate )
    .onComplete( function() {
        setTimeout( function() {
            playSound( sounds["note03.mp3"] );
        }, 400 );
        // $('#three_css3d').show();
    });

    var tween1 = new TWEEN.Tween({
        x: targetPos0.x,
        y: targetPos0.y,
        z: targetPos0.z,
        startQuat: startQuat1,
        finishQuat: finishQuat1,
        amount: 0,
        dom: cssObj,
    })
    .to({
        amount:1,
        x: targetPos1.x,
        y: targetPos1.y,
        z: targetPos1.z
    }, 1000 )
    .easing( TWEEN.Easing.Quadratic.InOut )
    .onUpdate( tweenUpdate )
    .onComplete( function() {
        setupCssInteraction();
    });

    tween0.chain(tween1);

    tween0.start(time);


    function tweenUpdate() {
        camera.position.set( this.x, this.y, this.z );
        var quat = new THREE.Quaternion();
        THREE.Quaternion.slerp( this.startQuat, this.finishQuat, quat, this.amount );
        camera.rotation.setFromQuaternion( quat );
        if ( this.dom ) {
            this.dom.scale.x = this.amount * domScale;
        }
    }
}

function setupCssInteraction() {
    $('#three_css3d').css( 'pointer-events', 'auto' );
    $('#three_css3d').on( 'touchstart mousedown', function(e) {
        moveCameraBack();
    });
    $('#whatever').on( 'touchstart mousedown', function(e) {
        e.stopPropagation();
    });
}

function setupDomElement( data ) {
    var mainDom = $('#whatever');
    mainDom.scrollTop(0);

    mainDom.find('.projectTitle').text( data.title );

    if ( data.description != null ) {
        mainDom.find('.projectDescription').html( data.description );
    }
    // add image thumbnails
    var imageThumbs = mainDom.find('.imageThumbs');
    imageThumbs.empty();
    var count = 0;

    data.images.forEach(function(image) {
        var imgName = image.substr(0, image.length - 4 );
        var imgElement = '<a class="fancybox" rel="group" href="./images/' + data.dir + '/' + image + '"><img src="./images/' + data.dir + '/thumbs/' + image + '" /></a>';
        // var imgElement = '<img src="./images/' + data.dir + '/' + imgName + '_tn.jpg' + '" />';
        imageThumbs.append( imgElement );

        if ( ++count%6!=0 ) {
            $(imageThumbs).find( '.fancybox' ).last().append( '<img class="spacer" src="./stylesheets/blank.gif" />' );
        }
    });
    data.videos.forEach(function(video) {
        if ( video.url.indexOf( 'youtube' ) >= 0 ) {
            var video_id = video.url.split('v=')[1];
            var ampersandPosition = video_id.indexOf('&');
            if(ampersandPosition != -1) {
                video_id = video_id.substring(0, ampersandPosition);
            }
            var imgURL = 'http://img.youtube.com/vi/' + video_id + '/default.jpg';
            var style = "background-image:url('"+imgURL+"'); background-position:center;"
            var imgElement = '<a class="fancybox" rel="group" href="'+video.url+'"><img class="vidThumb" style="width:96px; height:96px;' + style +'" src="./images/vidThumbOverlay.png" /></a>';
            imageThumbs.append( imgElement );
            if ( ++count%6!=0 ) {
                $(imageThumbs).find( '.fancybox' ).last().append( '<img class="spacer" src="./stylesheets/blank.gif" />' );
            }

        }
        else if ( video.url.indexOf( 'vimeo' ) >= 0 ) {
            var video_id = video.url.split( 'vimeo.com/video/' )[1];
            $.ajax({
                type:'GET',
                url: 'http://vimeo.com/api/v2/video/' + video_id + '.json',
                jsonp: 'callback',
                dataType: 'jsonp',
                success: function(data){
                    var imgURL = data[0].thumbnail_medium;
                    var style = "background-image:url('"+imgURL+"'); background-position:center;"
                    var imgElement = '<a class="fancybox" rel="group" href="'+video.url+'"><img style="width:96px; height:96px;' + style +'" src="./images/vidThumbOverlay.png" /></a>';
                    imageThumbs.append( imgElement );
                    if ( ++count%6!=0 ) {
                        $(imageThumbs).find( '.fancybox' ).last().append( '<img class="spacer" src="./stylesheets/blank.gif" />' );
                    }
                }
            });
        }
    });
}

function moveCameraBack() {
    var targetPos = new THREE.Vector3().applyMatrix4( savedCamMatrix );
    $('#three_css3d').css( 'pointer-events', 'none' );
    $('#three_css3d').off();
    $('#whatever').off();


    var tween = new TWEEN.Tween({
        amount: 0,
        x: camera.position.x,
        y: camera.position.y,
        z: camera.position.z,
        startQuat: new THREE.Quaternion().setFromRotationMatrix( camera.matrix ),
        finishQuat: new THREE.Quaternion().setFromRotationMatrix( savedCamMatrix ),
        dom: cssObj
    })
    .to({
        amount: 1,
        x: targetPos.x,
        y: targetPos.y,
        z: targetPos.z
    })
    .easing( TWEEN.Easing.Quadratic.InOut )
    .onUpdate(function() {
        camera.position.set( this.x, this.y, this.z );
        var quat = new THREE.Quaternion();
        THREE.Quaternion.slerp( this.startQuat, this.finishQuat, quat, this.amount );
        camera.rotation.setFromQuaternion( quat );
        this.dom.scale.x = domScale * ( 1.0-this.amount )
    })
    .onComplete(function() {
        pvmFocus = false;
        lastActivity = Date.now();

        $('#whatever').css( 'width', '' );
        if ( isTouchDevice ) {
            $('#reticle').fadeIn();
        }
        // console.log( 'dom scale: ', this.dom.scale );

    })
    .start(time);
}

function onWindowResize() {

    WIDTH = window.innerWidth;
    HEIGHT = ( aspectLock ? WIDTH * forcedAspect : window.innerHeight );
    HEIGHT_OFFSET = (window.innerHeight - HEIGHT) * .5;
    // HEIGHT_OFFSET = 20;

    // console.log( 'aspect ratio: ' + WIDTH/HEIGHT );
    if ( WIDTH/HEIGHT > 16/9.0 ) {
        WIDTH = Math.round( HEIGHT * ( 16 / 9.0 ) );
    }
    WIDTH_OFFSET = ( window.innerWidth - WIDTH ) * .5;

    camera.aspect = WIDTH / HEIGHT;
    camera.updateProjectionMatrix();
    cssCamera.aspect = WIDTH/HEIGHT;
    cssCamera.updateProjectionMatrix();

    renderer.setSize( WIDTH, HEIGHT );
    cssRenderer.setSize( WIDTH, HEIGHT );

    doOrientation();
    if ( isTouchDevice && HEIGHT > WIDTH ) {
        $('#orientationWarning').show();
        $('#title_text').hide();
    }
    else {
        $('#orientationWarning').hide();
    }

    $('#three_webgl').css({'top':HEIGHT_OFFSET, 'left':WIDTH_OFFSET});
    $('#three_css3d').css({'top':HEIGHT_OFFSET, 'left':WIDTH_OFFSET});


    cssRenderer.render( cssScene, cssCamera );
    if ( window.scrollY != 0 )
        window.scrollTo( 0, 0 );
    // $('#three_container').css({top: HEIGHT_OFFSET});

    // controls.handleResize();
}

function doOrientation() {

    $('#orientationWarning').css({
        width: window.innerWidth,
        height: window.innerHeight
    });
    $('#orientationText').css({
        'margin-top': window.innerHeight*.5 - 40
    });

    // TODO -- check if this is an issue on Android browsers. might require a conditional statement only for mobile safari
    $('#orientationMessage').css( 'line-height', '190px' );
}

function meshHitTest( pos ) {

    var vector = new THREE.Vector3( (pos.x / WIDTH) * 2 - 1, -(pos.y / HEIGHT) * 2 + 1, 1 );

    projector.unprojectVector( vector, camera );
    raycaster.set( camera.position, vector.sub( camera.position ).normalize() );

    // var intersects = raycaster.intersectObjects( pvms );
    var intersects = raycaster.intersectObjects( hitTestObjects );
    if ( intersects.length > 0 ) {
        hoverMesh = intersects[0].object;
        // console.log( hoverMesh.parent.name );
        // if ( !isTouchDevice && !pvmFocus ) {
        if ( !pvmFocus ) {
            $('#three_webgl').css( 'cursor', 'pointer' );

            if ( outlinedObject != hoverMesh ) {

                var titleText;

                if ( hoverMesh == meshes.Aaron ) {
                    // titleText = Math.random() > .5 ? 'Sup' : 'Hi, it me.';
                    titleText = 'Aaron'
                }
                else if ( hoverMesh == meshes.mbp ) {
                    titleText = '???';
                }
                else {
                    titleText = projectData['items'][hoverMesh.parent.name.split('-')[1]].title;
                }
                $('#title_text').html( titleText ).show();
                playNote();
                // $('#title_text').show();
            }
            setOutlineModel( hoverMesh );
        }
    }
    else {
        hoverMesh = 0;
        // if ( !isTouchDevice ) {
            $('#three_webgl').css( 'cursor', 'default' );
            disposeOutlineModel();
            $('#title_text').hide();
        // }
    }
}

function cameraControl() {
    if ( twoFingerDown && !pvmFocus ) {
        // console.log( 'two fingers down!' );
        var movementVector = new THREE.Vector3();
        movementVector.x = touchVel.x;
        movementVector.y = touchVel.y;
        movementVector.applyQuaternion( new THREE.Quaternion().setFromEuler( camera.rotation ) );
        camTargetPosition.add( movementVector );
    }
    if ( pinchSizeDelta != 0 ) {
        // console.log( 'moving on z axis by ' + pinchDelta );
        var movementVector = new THREE.Vector3( 0, 0, pinchSizeDelta * 0.005 );
        movementVector.applyQuaternion( new THREE.Quaternion().setFromEuler( camera.rotation ) );
        camTargetPosition.add(movementVector);
        pinchSizeDelta = 0;
    }
    if ( oneFingerDown && !pvmFocus ) {
        camTargetRotation.y = cameraRotationOnTouchDown.y + ( oneFingerDownPoint.x-touchPos.x ) * touchRotationScale;
        camTargetRotation.x = cameraRotationOnTouchDown.x + ( oneFingerDownPoint.y-touchPos.y ) * touchRotationScale;
    }

    if ( leftMouseDown && !pvmFocus ) {
        var movementVector = new THREE.Vector3();
        movementVector.x = (leftMouseDownPoint.x - mousePos.x) * .05;
        movementVector.y = -(leftMouseDownPoint.y - mousePos.y) * .05;
        movementVector.applyQuaternion( new THREE.Quaternion().setFromEuler( camera.rotation ) );
        var targetPos = new THREE.Vector3().copy(cameraPositionOnMouseDown);
        targetPos.add( movementVector );

        camTargetPosition.x = targetPos.x;
        camTargetPosition.y = targetPos.y;
        camTargetPosition.z = targetPos.z;
    }
    if ( wheelDelta != 0 ) {
        var movementVector = new THREE.Vector3( 0, 0, wheelDelta );
        movementVector.applyQuaternion( new THREE.Quaternion().setFromEuler( camera.rotation ) );
        camTargetPosition.add(movementVector);
        wheelDelta = 0;
    }

    if ( rightMouseDown && !pvmFocus ) {
        camTargetRotation.y = cameraRotationOnMouseDown.y + (rightMouseDownPoint.x-mousePos.x) * .001;
        camTargetRotation.x = cameraRotationOnMouseDown.x + (rightMouseDownPoint.y-mousePos.y) * .001;
    }

    // // limit camera
    camTargetPosition.x = Math.max( Math.min( camTargetPosition.x, cameraBounds.max.x ), cameraBounds.min.x );
    camTargetPosition.y = Math.max( Math.min( camTargetPosition.y, cameraBounds.max.y ), cameraBounds.min.y );
    camTargetPosition.z = Math.max( Math.min( camTargetPosition.z, cameraBounds.max.z ), cameraBounds.min.z );

    var xRotLimit = THREE.Math.degToRad( 45 );
    var yRotLimit = THREE.Math.degToRad( 45 );
    var zRotLimit = THREE.Math.degToRad( 45 );

    camTargetRotation.x = Math.max( Math.min( camTargetRotation.x, xRotLimit ), -xRotLimit );
    camTargetRotation.y = Math.max( Math.min( camTargetRotation.y, yRotLimit ), -yRotLimit );
    camTargetRotation.z = Math.max( Math.min( camTargetRotation.z, zRotLimit ), -zRotLimit );

    if ( !pvmFocus ) {
        camera.position.x = lerp( camera.position.x, camTargetPosition.x, .1 );
        camera.position.y = lerp( camera.position.y, camTargetPosition.y, .1 );
        camera.position.z = lerp( camera.position.z, camTargetPosition.z, .1 );
        camera.rotation.x = lerp( camera.rotation.x, camTargetRotation.x, .1 );
        camera.rotation.y = lerp( camera.rotation.y, camTargetRotation.y, .1 );
        camera.rotation.z = lerp( camera.rotation.z, camTargetRotation.z, .1 );
    }

    cssCamera.position.copy( camera.position );
    cssCamera.rotation.copy( camera.rotation );
}

function setCameraOrbit( angle ) {

    camOrbitAngle = camOrbitAngle >= 360 ? camOrbitAngle - 360 : camOrbitAngle;
    var camOffset = new THREE.Vector3( 0, 0, camHeadOrbitDist );
    // set camera position before applying the matrix rotation
    cssCamera.position.copy( headPos ).add( camOffset );
    // now rotate it
    camOffset.applyAxisAngle( new THREE.Vector3( 0, 1, 0 ), THREE.Math.degToRad( camOrbitAngle ) );
    camera.position.copy( headPos ).add( camOffset );
    camera.lookAt( headPos );
    cssCamera.lookAt( headPos );
}

function setCubeCameraRotation( rot ) {
    cubeCamera.rotation.x = rot;
    renderCubeMap();
}

function animate() {

    if ( keepGoing )
        requestAnimationFrame( animate );


    time += 1000 / 60;
    TWEEN.update(time);


    render();
    if ( stats ) stats.update();

}

function render() {

    if ( cameraControlEnabled && !pvmFocus && !idleMode && Date.now() - lastActivity > idleTimeout ) {
        if ( idleModeEnabled ) {
            startIdleMode();
        }
    }
    if ( cameraControlEnabled && idleMode && Date.now() - lastActivity < idleTimeout ) {
        endIdleMode();
    }

    var timer = Date.now() * 0.0005;
    // time += clock.getDelta();
    if ( !idleMode && cameraControlEnabled ) {
        cameraControl();
    }
    else if ( cameraOrbitEnabled ) {
        camOrbitAngle += cameraOrbitSpeed;
        setCameraOrbit( camOrbitAngle );
    }

    if ( !isTouchDevice )
    {
        meshHitTest( mousePos );
    }
    else
    {
        meshHitTest( new THREE.Vector3( WIDTH*.5, HEIGHT*.5, 0 ) );
    }

    renderScenes();
    cssRenderer.render( cssScene, cssCamera );

}

function lerp( start, end, amt ) {
    return start + amt * (end-start);
}
