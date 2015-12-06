Ext.define('app.controller.Weisscontroller', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
			blog: 'weisspanel'
            
        },
        control: {
			'weisspanel list': {
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
							html: ["<table >",
                                  " <tr>",
                                   "<td>",
                                   "<h3 style='color:#AF1E2D'>", record.get('name'), "</h3>",
                                   "</td><td></td></tr>",
                                   "<tr><td><b>Jahrgang:</b>&nbsp", record.get('jahr'),"</p>",
                                   "<p><b>Winzer:</b>&nbsp", record.get('winzer'),"</p>",
                                   "<p><b>Farbe/Typus:</b>&nbsp", record.get('farbe'), "</p>",
                                   "<p><b>Alkoholgehalt:</b>&nbsp", record.get('alk'),"</p>",
                                   "<p><b>Geschmack:</b>&nbsp", record.get('geschmack'),"</p></td>",
                                   "<td>",
                                  '<img src="', record.get('url'), '"/>',
                                   "</td></tr>",
                                  "</table>",
                                  "<h3 style='color:#AF1E2D'><b>Preis:", record.get('preis'),"</b></h3>"].
                                    join(""),
							scrollable: true,
							styleHtmlContent: true
								});
		},
    
    //called when the Application is launched, remove if not needed
    launch: function(app) {
        
    }
});
