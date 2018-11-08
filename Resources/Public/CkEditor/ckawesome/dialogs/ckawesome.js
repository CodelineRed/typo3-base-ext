
CKEDITOR.dialog.add('ckawesomeDialog', function( editor ) {
    function getCKAwesomeIcons(selectList ){
         var result = [];
         var scriptUrl = editor.fontawesomefontsPath;

         $.ajax({
            url: scriptUrl,
            type: 'get',
            dataType: 'html',
            async: false,
            success: function(response) {
                var excludeStyles = [".fa.",".fa",".fa-lg",".fa-2x",".fa-3x",".fa-4x",".fa-5x",".fa-fw",".fa-ul",".fa-ul>",".fa-li",".fa-border",".fa-pull-left",".fa-pull-right",".fa-spin",".fa-pulse",".fa-rotate-90",".fa-rotate-180",".fa-rotate-270",".fa-flip-horizontal",".fa-flip-vertical",".fa-stack",".fa-stack-1x",".fa-stack-2x",".fa-inverse"];
            //    var regxstyles = new RegExp(/\.[a-zA-Z_][\w-_]*[^\.\s\{#:\,;]/,"g" );
                var regxstyles = new RegExp(/<i class="(.*)">(.*)<\/i>/,"g" );
                var styles = response.match(regxstyles);
                styles.sort();
                $.each(styles, function( index, value ) {
                    
                    class_val = value.replace(regxstyles, "$1");
                    //alert("class: "+class_val);
                    
                    html_val = value.replace(regxstyles, "$2");
                    //alert("html: "+html_val);
                    
                //    var xstart=value.substring(0, 3).substring(1);
                //    if (xstart != 'fa' || excludeStyles.indexOf(value) > 0){ return; }
                //    value = value.substring(1);
                    
                    selectList.add(html_val, class_val);
                });

            },
            error: function (jqXHR, exception) {
                alert("Error loading Font Awesome css: \n" + scriptUrl);
            }
         });
    }

    function getSelectionOptions(selectList, start, inc, many){
        var result = [];
        var val = start; 
        
        result.push(start);
        
        many = many > 0 ? many : 5;
        for(var i = 0; i < many; i++){
            val += inc;
            result.push(val);
        }
        
        $.each(result, function( index, value ) {
            selectList.add(value, value);
        });
    }

    function formatCKAwesome (icon) {
        if (!icon.id) { return icon.text; }
        //  var text = icon.text.replace(/fa-|\.|\-/gi, " ");
        console.log(icon);
        var text = icon.text;
        var vid = icon.id;

        //  var icon = $('<span class="ckawesome_options"><i class="' + icon.element.value + '"></i> ' + text + "</span>");
        var icon = $('<span class="ckawesome_options"><i class="'+vid+'"></i>  '+text+'</span>');
        return icon;
    };
    
    return {
        title: 'Insert Icon',
        minWidth: 200,
        minHeight: 200,

        contents: [
            {
                id: 'options',
                label: 'Basic Settings',
                elements: [
                    {
                        
                        type: "hbox",
                        padding: 0,
                        widths: ["50%", "50%"],
                        children: [
                            {
                                type: 'html',
                                html: '<a style="display: block;text-align: center;" href="https://fontawesome.com/icons?d=gallery" target="_blank" class="ckawesome_icon_search">Search Icon</a>'
                                        + '<div class="ckawesome_icon"></div>'
                            },
                            {
                                type: 'html',
                                html: '<a style="display: block;text-align: center;" href="https://fontawesome.com/cheatsheet" target="_blank" class="ckawesome_icon_search">All Icons</a>'
                            }
                        ]
                        
                    },
                    {
                        type: 'select',
                        id: 'ckawesomebox',
                        label: 'Select Icon',
                        validate: CKEDITOR.dialog.validate.notEmpty("Icon field cannot be empty."),
                        items: [[ editor.lang.common.notSet, '' ]],
                        onLoad: function () {
                               getCKAwesomeIcons(this);
//                               console.log('#' + this.getInputElement().getAttribute('id'));
//                               var selectbx = $('#' + this.getInputElement().getAttribute('id'));  
//                               $(selectbx).select2({ width: "100%", templateResult: formatCKAwesome, templateSelection: formatCKAwesome});
                        },
                        onShow: function(){
                            var selectbx = $('#' + this.getInputElement().getAttribute('id'));  
                            $(selectbx).val('').trigger('change') ;
                        },
                        onChange: function( api ) {
                            // this = CKEDITOR.ui.dialog.select
                            $('.ckawesome_icon').html('<i class="' + this.getValue() + '"></i>');
                        }
                    },
                    {
                        type: 'select',
                        id: 'textsize',
                        label: 'Select fix size',
                        items: [[ 'default size', '' ]],
                        onLoad: function (widget) {
                            getSelectionOptions(this, 8, 1, 42);
                        },
                        onChange: function( api ) {
                            // this = CKEDITOR.ui.dialog.select
                            $('.ckawesome_icon i').css('font-size', this.getValue() + 'px');
                        }
                    },
                    {
                        type: "hbox",
                        padding: 0,
                        widths: ["80%", "20%"],
                        children: [
                            {
                                id: 'fontcolor',
                                type: 'text',
                                label: 'Select color',
                                onChange: function( element ) {
                                    var idEl = $('#' +this.getInputElement().getAttribute('id'));
                                    idEl.css("background-color", idEl.val());
                                    $('.ckawesome_icon i').css('color', idEl.val());
                                },
                                onKeyUp: function( element ) {
                                    var idEl = $('#' + this.getInputElement().getAttribute('id'));
                                    idEl.css("background-color", idEl.val());
                                },
                                onShow: function(){
                                    var idEl = $('#' + this.getInputElement().getAttribute('id'));  
                                    idEl.css("background-color", "");
                                }
                            },
                            {
                                type: "button",
                                id: "fontcolorChooser",
                                "class": "colorChooser",
                                label: "Color",
                                style: "margin-left: 8px",
                                onLoad: function () {
                                    this.getElement().getParent().setStyle("vertical-align", "bottom")
                                },
                                onClick: function () {
                                    editor.getColorFromDialog(function (color) {
                                        color && this.getDialog().getContentElement("options", "fontcolor").setValue( color );
                                        this.focus();
                                    }, this);
                                }
                            }
                        ]
                    }
                ]
            }
        ],
        onOk: function() {
            var dialog = this;

            var cka = editor.document.createElement( 'i' );

            var cka_size = dialog.getValueOf( 'options', 'textsize' );
            var cka_color = dialog.getValueOf( 'options', 'fontcolor' );
            var cka_class = dialog.getValueOf( 'options', 'ckawesomebox' );
            var cka_style = ( cka_size != '' ? 'font-size: '+cka_size+'px;' : '' ) + ( cka_color != '' ? 'color: '+cka_color+';' : '' ) ;
            
            cka.setAttribute( 'class', cka_class );
            if ( cka_style ) cka.setAttribute( 'style', cka_style );

            cka.appendHtml("&nbsp;");
            $('.ckawesome_icon').html('');
            editor.insertElement( cka );
        }
    };
});

