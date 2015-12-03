Ext.define('app.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: ['Ext.TitleBar'],
	
    config: {
        tabBarPosition: 'bottom',

        items: [
			{
				xtype:'toppanel'
			},
			{
				xtype:'rotpanel'
			},	
			{
				xtype:'weisspanel'
			},
			{
				xtype:'perlweinpanel'
			}
        ]    
	}
});
