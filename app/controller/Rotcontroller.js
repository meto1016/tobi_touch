Ext.define('app.controller.Rotcontroller', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
			blog: 'rotpanel'
            
        },
        control: {
			'rotpanel list': {
					itemtap: 'showPost'
				}
            
        }
    },
	
	showPost: function(list, index, element, record) {
			/*console.log(record.get('info'));*/
			this.getBlog().push({
							xtype: 'panel',
							title: record.get('name'),
                            
							html: ["<h2 style='color:red'>", record.get('name'), "</h2>",
                                  '<img src="', record.get('url'), '"/>'].
                                    join(""),
							scrollable: true,
							styleHtmlContent: true
								});
		},
    
    //called when the Application is launched, remove if not needed
    launch: function(app) {
        
    }
});
