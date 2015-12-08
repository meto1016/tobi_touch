Ext.define('app.view.Top',{
		  extend: 'Ext.navigation.View',
			xtype: 'toppanel',
			
			config: {
				title: 'Top 10',
				iconCls: 'home',
				
				items: {
					xtype: 'list',
					itemTpl:'<table><tr><td><img src="{url}", height="125px",width="125px"/></td><td><h3 style="color:#AF1E2D">{name}</h3></td></tr><tr><td><div class="rating"><span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span></div></td><td>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspPreis:&nbsp{preis}</td></tr></table>',
					
					store: {
						autoLoad: true,
						fields: ['name', 'id', 'jahr', 'winzer', 'farbe', 'rebsorte', 'alk', 'geschmack', 'url', 'preis', 'detail-info', 'bewertung' ],
						
						 proxy: {
							type: 'ajax',
							url: 'resources/database/topweine.xml',
															
							reader: {                   
								type:'xml',
								rootProperty: 'data',
								record: 'wein'
						}
						}
					}
                    
					   
			}
} 
});