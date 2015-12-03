Ext.application({
    
	name : 'app',

	requires: ['Ext.MessageBox'],
	
	views: [ 'Main', 'Top', 'Rot', 'Weiss', 'Sekt'],
	
	controllers: ["Topcontroller","Rotcontroller","Weisscontroller","Perlcontroller"],
	

    launch : function() {
        
       
		
		 Ext.fly('appLoadingIndicator').destroy();

        // Initialize the main view
        Ext.Viewport.add(Ext.create('app.view.Main'));
		/*Ext.create("Ext.tab.Panel", {
                fullscreen: true,
                tabBarPosition: 'bottom',

                items: [
                    {
                        title: 'chart',
                        iconCls: 'home',
                        cls: 'home',
                        html: [
                            '<img width="65%" src="http://staging.sencha.com/img/sencha.png" />',
                            '<h1>Welcome to Sencha Touch</h1>',
                            "<p>We're creating the Getting Started app, which demonstrates how ",
                            "to use tabs, lists, and forms to create a simple app.</p>",
                            '<h2>Sencha Touch</h2>'
                        ].join("")
                    },
                    {
                        xtype: 'nestedlist',
                        title: 'Blog',
                        iconCls: 'star',
                        displayField: 'title',

                        store: 'TreeStore',

                        detailCard: {
                            xtype: 'panel',
                            scrollable: true,
                            styleHtmlContent: true
                        		}
					}
					]
				   });*/
								
		
/*
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
        });*/
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

 
