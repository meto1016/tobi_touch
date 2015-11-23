Ext.application({
    name : 'bla',

    requires: ['bla.view.over_all'],
    views: ['Main', 'over_all'],
   // models: ['over_all'],
    stores: ['over_all_store'],

    launch : function() {
        
        Ext.fly('appLoadingIndicator').destroy();
        
        Ext.Viewport.add(Ext.create('bla.view.Main'));
		

      
        
       /* var store_wein = Ext.create('Ext.data.Store', {
            requires:[
                'bla.model.over_all'
                ],
            autoLoad: true,
            fields: ['name'],
            
            config: {
              autoLoad: true,
              model: 'bla.model.over_all',
              storeId: 'styleStore',
              clearOnPageLoad:false,
                
                proxy: {
                    type: 'ajax',
                    url: 'data.xml',
                    reader: {
                        type: 'xml',
                        rootProperty: 'data',
                        record: 'weine'
                    }
                }
            }
        });*/
	/*
    
    Ext.create('Ext.DataView', {
            fullscreen: true,
           store: store_weingut ,
            itemTpl: '<img src="{bild}"> <p>{ort}</p> <p>{name}</p>'
        });
        
        // View für Weingüter
        Ext.create('Ext.DataView', {
            fullscreen: true,
            store: store_weingut,
            itemTpl: '<img src="{bild}"> <p>{ort}</p> <p>{name}</p>'
        });
      
            ,
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
		
    }

});

 
