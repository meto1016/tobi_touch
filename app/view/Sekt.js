Ext.define('app.view.Sekt',{
		   extend: 'Ext.navigation.View',
			xtype: 'perlweinpanel',
			
			config: {
				title: 'Perlweine',
				iconCls: 'home',
				
				items: {
					xtype: 'list',
					itemTpl:'{name}, {id}',
					
					store: {
						autoLoad: true,
						fields: ['name', 'id'],
						
						 proxy: {
							type: 'ajax',
							url: 'resources/database/perlwein.xml',
															
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