
Ext.define('bla.view.over_all', {
    
    extend: 'Ext.navigation.View',
    xtype: 'over_all',
    
    config: {
        title: 'Home',
        iconCls: 'home',
        
        items: {
            xtype: 'list',
            itemTpl:'{name}, {id}',
            
            store: {
                autoLoad: true,
                fields: ['name', 'id'],
                
                 proxy: {
                    type: 'ajax',
                    url: 'data.xml',
                                                    
                    reader: {                   
                        type:'xml',
                        rootProperty: 'data',
                        record: 'weine'
                }
                }
            }           
               
    }
}
});
      