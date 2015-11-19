Ext.application({
    name : 'Fiddle',

    launch : function() {

        var store = Ext.create('Ext.data.Store', {
            autoLoad: true,
            fields: ['entryId', 'firstName'],
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
            itemTpl: '<h2>{entryId}</h2> <p>{firstName}</p>'
        });
    }
});
