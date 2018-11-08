/**
 *   CKAwesome 
 *   =========
 *   http://blackdevelop.com/io/ckawesome/
 *   
 *   Copyright (C) 2017 by Blackdevelop.com
 *   Licence under GNU GPL v3.
 */

CKEDITOR.on('instanceReady',function () { 
    CKEDITOR.document.appendStyleSheet(CKEDITOR.plugins.getPath('ckawesome') + 'resources/select2/select2.full.min.css');
    CKEDITOR.document.appendStyleSheet(CKEDITOR.plugins.getPath('ckawesome') + 'dialogs/ckawesome.css');
});

CKEDITOR.on('instanceReady',function () { CKEDITOR.document.appendStyleSheet(CKEDITOR.plugins.getPath('ckawesome') + 'dialogs/ckawesome.css');   });
CKEDITOR.scriptLoader.load(CKEDITOR.plugins.getPath('ckawesome') + 'resources/select2/select2.full.min.js');
//CKEDITOR.scriptLoader.load('//cdnjs.cloudflare.com/ajax/libs/select2/4.0.3/js/select2.min.js');
CKEDITOR.dtd.$removeEmpty.span = 0;
CKEDITOR.dtd.$removeEmpty.i = 0;
CKEDITOR.plugins.add('ckawesome', {
    requires: 'colordialog',
    icons: 'ckawesome',
    
    init: function(editor) {
        var config = editor.config;
        editor.fontawesomePath = config.fontawesomePath ? config.fontawesomePath : 'https://use.fontawesome.com/releases/v5.5.0/css/all.css';
        editor.fontawesomefontsPath = config.fontawesomefontsPath ? config.fontawesomefontsPath : CKEDITOR.plugins.getPath('ckawesome') + 'dialogs/fonts.tpl';

        CKEDITOR.document.appendStyleSheet(editor.fontawesomePath);
        if( editor.addContentsCss ) {
            editor.addContentsCss(editor.fontawesomePath);
        }
        
        CKEDITOR.dialog.add('ckawesomeDialog', this.path + 'dialogs/ckawesome.js');
        editor.addCommand( 'ckawesome', new CKEDITOR.dialogCommand( 'ckawesomeDialog', { allowedContent: 'span[class,style]{color,font-size}(*);' }));
        editor.ui.addButton( 'ckawesome', {
              label: 'Insert CKAwesome',
              command: 'ckawesome',
              toolbar: 'insert'
        });
    }
});
