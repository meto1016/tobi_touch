Ext.application({
    name : 'Fiddle',

	requires: ['Ext.MessageBox'],

    launch : function() {
		

      var store_weingut = Ext.create('Ext.data.Store', {
            autoLoad: true,
            fields: ['bild', 'ort','email', 'name'],
            
            proxy: {
                type: 'ajax',
                url: 'data.xml',
                reader: {
                    type: 'xml',
                    rootProperty: 'data',
                    record: 'weingut'
                }
            }            
        });
        
        var store_wein = Ext.create('Ext.data.Store', {
            autoLoad: true,
            fields: ['name'],
            proxy: {
                type: 'ajax',
                url: 'data.xml',
                reader: {
                    type: 'xml',
                    rootProperty: 'data',
                    record: 'weine'
                }
            }
        });
	
        // View für Weingüter
        Ext.create('Ext.DataView', {
            fullscreen: true,
            store: store_weingut,
            itemTpl: '<img src="{bild}"> <p>{ort}</p> <p>{name}</p>'
        });
      /*
        //View für Weine
        Ext.create('Ext.DataView', {
        extend: 'Ext.TabPanel',
        config: {
          tabBarPosition: 'bottom',
          cardSwitchAnimation: 'slide'
            
        },
        items: [{
            title: 'Home',
            iconCls: 'home',
            items: [{
                xtype: 'titlebar',
                title: 'Hello',
                docked: 'top'
            }]
        }]
        });  */
        	/*
          Ext.create("Ext.tab.Panel", {
            fullscreen: true,
            tabBarPosition: 'bottom',
              store: store_wein,
              itemTpl: '{name}',

            items: [
                {
                    title: 'Home',
                    iconCls: 'home',
                    store: store_wein,
                    itemTpl: '{name}',
                    cls: 'home'
                }
            ]
        });
        */
		 /* 
		Ext.Msg.alert (
								 	'Hello!',
									'Hello there from Tobi Touch!'
									
						);
		
		var loginContainer = Ext.create('Ext.Container', {
											itemId: 'loginContainer',
											fullscreen: true,
											items: [
													{
														xtype: 'textfield',
														label: 'Login',
														placeHolder: 'Enter Username Here'
													},
													{
														xtype: 'textfield',
														label: 'Organization',
														itemId: 'orgField',
														placeHolder: 'Enter your Organization Here'
													},
													{
														xtype: 'textfield',
														label: 'Password',
														placeHolder: 'Enter Password Here'
													}
													]
										});
		*/
		
    },

});

 
