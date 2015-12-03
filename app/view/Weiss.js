Ext.define('app.view.Weiss',{
		   extend: 'Ext.navigation.View',
			xtype: 'weisspanel',
			
			config: {
				title: 'Weißweine',
				iconCls: 'home',
				
				items: {
					xtype: 'list',
					itemTpl:'{name}, {id}',
					
					store: {
						autoLoad: true,
						fields: ['name', 'id', 'bewertung'],
						
						 proxy: {
							type: 'ajax',
							url: 'resources/database/weisswein.xml',
															
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