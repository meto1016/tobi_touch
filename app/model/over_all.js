Ext.define('bla.model.over_all', {
    extend: 'Ext.data.Model',
    
    config: {
        fileds: [{
            name: 'id', type: 'int'
        }],
        idProperty: 'id'/*
        proxy: {
                type: 'ajax',
                url: 'data.xml',
                reader: {
                    type: 'xml',
                    rootProperty: 'data',
                    record: 'weine'
                }
            }*/
    }
});