Ext.application({
    name : 'Fiddle',

	requires: ['Ext.MessageBox'],

    launch : function() {
		

        var store = Ext.create('Ext.data.Store', {
            autoLoad: true,
            fields: ['entryId', 'firstName','email'],
            proxy: {
                type: 'ajax',
                url: 'data.xml',
                reader: {
                    type: 'xml',
                    rootProperty: 'data',
                    record: 'person'
                }
            }            
        });
		

        Ext.create('Ext.DataView', {
            fullscreen: true,
            store: store,
            itemTpl: '<h2>{entryId}</h2> <p>{firstName}</p> <p>{email}</p>'
        });
		
		Ext.Msg.alert (
								 	'Hello!',
									'Hello there from Tobi Touch!'
									
						);
		
		
    },

}); test

 
