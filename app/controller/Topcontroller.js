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
							html: ["<table >",
                                  " <tr>",
                                   "<td>",
                                   "<h3 style='color:#AF1E2D'>", record.get('name'), "</h3>",
                                   '</td><td></td></tr>',
                                   '<tr><td><div class="rating2" style="margin-left:0px"><span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span></div></td><td></td></tr>',
                                   "<tr><td><b>Jahrgang:</b>&nbsp", record.get('jahr'),"</p>",
                                   "<p><b>Winzer:</b>&nbsp", record.get('winzer'),"</p>",
                                   "<p><b>Farbe/Typus:</b>&nbsp", record.get('farbe'), "</p>",
                                   "<p><b>Alkoholgehalt:</b>&nbsp", record.get('alk'),"</p>",
                                   "<p><b>Geschmack:</b>&nbsp", record.get('geschmack'),"</p></td>",
                                   "<td>",
                                  '<img src="', record.get('url'), '"/>',
                                   "</td></tr>",
                                   '<tr><td><h3 style="color:#AF1E2D"><b>Preis:', record.get("preis"),'</b></h3></td><td> <button type="button" class="button">kaufen</button></td></tr>',
                                   "</table>",
                                   "<table>",
                                   "<tr><td><h3 style='color:#AF1E2D'>Sagen Sie uns Ihre Meinung zu diesem Wein!</h3></td></tr>",
                                   
                                   '<tr><td><textarea cols="35" rows="4" style="border-radius:5px">Schreiben Sie einen Kommentar zu diesem Wein</textarea></td></tr>',
                                   '<tr><td><div class="rating2" style="margin-left:0px"><span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span></div></td></tR>',
                                   '<tr><td><button type="button" class="button">speichern</button></td</tr>',
                                   '<tr><td><hr width="100%"></td</tr>',
                                   "<tr><td><h3 style='color:#AF1E2D'>weitere Bewertungen</h3></td></tr>",
                                   '<tr><td><a style="color:brown">Weinkenner1009</a></td></tR>',
                                   '<tr><td><div class="rating2" style="margin-left:0px"><span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span></div></td></tR>',
                                   '<tr><td><textarea cols="35" rows="4" style="border-radius:5px">Ein sehr edler Tropfen! Dieser saftige und körperreiche Rotwein ist ein kleines Meisterwerk mit seidiger Textur</textarea></td></tr>',
                                                                  
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
