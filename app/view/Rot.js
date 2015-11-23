Ext.define('app.view.Rot',{
		  extend: 'Ext.navigation.View',
			xtype: 'rotpanel',
			
			config: {
				title: 'Rotweine',
				iconCls: 'home',
				
				items: {
					xtype: 'list',
					itemTpl:'{name}, {id}',
					
					store: {
						autoLoad: true,
						fields: ['name', 'id'],
						
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