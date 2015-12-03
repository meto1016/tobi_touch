Ext.define('app.controller.Topcontroller', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
			blog: 'toppanel'
            
        },
        control: {
			'toppanel list': {
					itemtap: 'showPost'
				}
            
        }
    },
	showPost: function(list, index, element, record) {
			/*console.log(record.get('info'));*/
			this.getBlog().push({
							xtype: 'panel',
							title: record.get('name'),
                     style: {
                        backgroundImage: 'url(resources/img/wein_background_2.jpg)',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center'
                     },     
                    html: [
                        '<div class="central">',    
                            "<h2>", record.get('name'), "</h2>",
                            '<p><img class="detail-img" src="', record.get('url'), '"/> <div class="rating-conotroller"><span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span></div></p>',
                        '<span >',
                            '<p class="border-info">', record.get('detail-info'), '<p>',
                        '</span>',
                        '<div>'
                          ].
                            join(""),
                    scrollable: true,
                    styleHtmlContent: true
                        });
		},
    
    //called when the Application is launched, remove if not needed
    launch: function(app) {
        
    }
});
