var globalTextures = {};

var textureQueue = [];

function addTextureToQueue( material, textureName ) {

    textureQueue[ textureName ] = material;
    textureQueue.push({
        material: material,
        textureName: textureName
    });

}

function loadQueue( concurrent, quality, callback ) {

    // console.log( 'loading ' + textureQueue.length + ' textures' );
    var subdir = ( quality==='low' ? '256/' : '1024/' );
    var loaded = 0;


    async.eachLimit( textureQueue, 3, function( textureInfo, callback) {
        var extension = ( textureInfo.textureName.indexOf( 'Cannabis' ) >= 0 ? '.png' : '.jpg' );
        // console.log( 'loading ' + textureInfo.textureName );
        THREE.ImageUtils.loadTexture( './textures/' + subdir + textureInfo.textureName + extension, THREE.UVMapping, function(texture) {
            texture.premultiplyAlpha = true;
            if ( textureInfo.material instanceof THREE.MeshFaceMaterial ) {
                textureInfo.material.materials.forEach(function(material) {
                    material.wireframe = false;
                    material.map = texture;
                    // material.map = material.name.indexOf( "Chrome" ) >= 0 ? undefined : texture;
                    // material.color = material.name.indexOf( "Chrome" ) >= 0 ? new THREE.Color(.75,.75,.75) : new THREE.Color(1,1,1);
                    material.reflectivity = material.name.indexOf( "Chrome" ) >= 0 ? .75 : material.name.indexOf('-screen-') >= 0 ? .05 : 0.0;
                    // material.reflectivity = 1;
                });
            }
            else
            {
                textureInfo.material.wireframe = false;
                textureInfo.material.map = texture;
            }
            // renderCubeMap();
            if ( quality == 'low' ) {
                loaded++;
                $('#loadInfo').text( 'Texture ' + loaded + '/' + textureQueue.length );
            }
            callback();
        }, function(error) {
            callback();
        });
    }, function(error) {
        if ( error ) {
            console.log( 'error!', error );
        }
        callback();
    });

}

function loadTextures( callback ) {
    // console.log( 'loadTextures' );

    var filenameIndex = 0;

    var textureLoadedCallback = function( arg ) {
        // console.log( 'textureLoadedCallback' );
        // console.log( arg );
        globalTextures[textureFilenames[filenameIndex]] = arg;

        if ( ++filenameIndex == textureFilenames.length ) {
            callback();
        }
        else {
            THREE.ImageUtils.loadTexture( './textures/' + textureFilenames[filenameIndex] + '.png', THREE.UVMapping, textureLoadedCallback );
        }
    }

    THREE.ImageUtils.loadTexture( './textures/' + textureFilenames[filenameIndex] + '.png', THREE.UVMapping, textureLoadedCallback );

}
