Ext.define('app.view.Rot',{
		  extend: 'Ext.navigation.View',
			xtype: 'rotpanel',
			
			config: {
				title: 'Rotweine',
				iconCls: 'home',
				
				items: {
					xtype: 'list',
					itemTpl:'<table><tr><td><img src="{url}", height="125px",width="125px"/></td><td><h3 style="color:#AF1E2D">{name}</h3></td></tr><tr><td><div class="rating"><span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span></div></td><td>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspPreis:&nbsp{preis}</td></tr></table>',
					
					store: {
						autoLoad: true,
						fields: ['name', 'id', 'jahr', 'winzer', 'farbe', 'rebsorte', 'alk', 'geschmack', 'url', 'preis', 'detail-info', 'bewertung' ],
						
						 proxy: {
							type: 'ajax',
							url: 'resources/database/rotwein.xml',
															
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