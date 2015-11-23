Ext.define('bla.store.over_all_store', {
    extend: 'Ext.data.Store',
    xtype: 'over_all_store',
    
    model: 'bla.model.over_all',
    requires:['bla.model.over_all'],
            autoLoad: true,
            fields: ['id'],
            
            config: {
              autoLoad: true,
              
              storeId: 'over_all',
              autoLoad: true,
              clearOnPageLoad:false,
               
                proxy: {
                    type: 'ajax',
                    url: 'data.xml',
                    reader: {
                        type: 'xml',
                        rootProperty: 'data',
                        record: 'weingut'
                    }
                }
            }
});