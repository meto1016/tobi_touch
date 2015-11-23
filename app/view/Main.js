/*Ext.define('bla.view.Main', {
    config: {
        name: null
    },

    constructor: function(config) {
        this.initConfig(config);
    },

    speak: function() {
        alert('grunt');
    }
});
var bob = Ext.create('Animal', {
    name: 'Bob'
});
*/
Ext.define('app.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: ['Ext.TitleBar'],
	
    config: {
        tabBarPosition: 'bottom',

        items: [
			{
				xtype:'homepanel'
			},
			{
				xtype:'rotpanel'
			},	
			{
				xtype:'weisspanel'
			},
			{
				xtype:'sektpanel'
			},


        ]
                    
                        
             
                        /*
                        proxy: {
                            type: 'ajax',
                            xtype: 'json',
                            url: 'http://adsenseforfeeds.blogspot.de/2010/10/your-stats-right-away.html'
                        } */
                       
	}
               
    
});
