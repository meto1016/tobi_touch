Ext.define('app.view.Home',{
		    extend: 'Ext.navigation.View',
			xtype: 'homepanel',
			
			config: {
				title: 'Top 10',
				iconCls: 'home',
				
				items: {
					xtype: 'list',
					itemTpl:'{name}, {id}',
					
					store: {
						autoLoad: true,
						fields: ['name', 'id'],
						
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