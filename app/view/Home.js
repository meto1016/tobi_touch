Ext.define('app.view.Home',{
		    extend: 'Ext.navigation.View',
			xtype: 'homepanel',
			
			config: {
				title: 'Home',
				iconCls: 'home',
				
				items: {
					xtype: 'list',
					itemTpl:'{name}, {id}',
					
					store: {
						autoLoad: true,
						fields: ['name', 'id'],
						
						 proxy: {
							type: 'ajax',
							url: 'data.xml',
															
							reader: {                   
								type:'xml',
								rootProperty: 'data',
								record: 'weine'
						}
						}
					}           
					   
			}
}
		   
});