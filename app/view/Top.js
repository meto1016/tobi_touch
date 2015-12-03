Ext.define('app.view.Top',{
		    extend: 'Ext.navigation.View',
			xtype: 'toppanel',
            
			config: {
				title: 'Top 10',
				iconCls: 'home',
				html: 'Topweintest',
				items: {
					xtype: 'list',
					itemTpl: '<p><img src="{url}", height="125px",width="125px"/> &nbsp; {name}<div class="rating"><span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span></div><p>',
                    
					
					store: {
						autoLoad: true,
						fields: ['name', 'id', 'info', 'url', 'detail-info', 'bewertung', 'test'],
						
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
