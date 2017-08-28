Ext.define('NastedJsonBind.view.main.SupplierItemsOneGrid', {
    extend: 'Ext.panel.Panel',
    xtype: 'supplierItemsOneGrid',

    items: [{
        xtype: 'grid',
        title: 'Suppliers',
        store: {
            type: 'supplier'
        },
        columns: [{
            text: 'First Name',
            dataIndex: 'firstName',
            flex: 1,
            hideable: false
        }, {
            text: 'Last Name',
            dataIndex: 'lastName',
            flex: 1,
        }, {
            text: 'Phone Number',
            dataIndex: 'phoneNumber',
            flex: 1
        }],

        plugins: [{
            ptype: 'rowwidget',

            widget: {
                xtype: 'grid',
                autoScroll: true,
                //autoLoad: true,
                title: 'Orders',
                pluginWidget:true,
                store : Ext.create(Ext.data.Store),

                bind: {
                    store: '{record.items}',
                    title: '{record.firstName} {record.lastName}&apos;s Inventory'
                },
                columns: [{
                    header: 'Item Photo',
                    renderer: function(value){
                        //return '<img src="' + value + '" />';
                        return '<img src="' + value + '" width="50" height="50" borer="0" />';
                    },

                    dataIndex: 'src',
                    flex: 1
                }, {
                    text: 'Description',
                    dataIndex: 'caption',
                    flex: 1
                }]

            },
        }],

    }]
});
