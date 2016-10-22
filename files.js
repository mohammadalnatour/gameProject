modelFiles = {
    src : [


        'src/modules/json-editor/module.js',
        'src/modules/json-editor/{,**/}*.js',
        
        'src/modules/forms/module.js',
        'src/modules/forms/{,**/}*.js',

        'src/modules/user/module.js',
        'src/modules/user/{,**/}*.js',

        'src/module.js',
        'src/services/{,**/}*.js'



    ]
};

if (exports) {
    exports.files       = modelFiles;
}