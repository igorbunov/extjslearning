panel7 = new Ext.Panel({
    title: 'Задание 7',
    listeners: {
        scope: this,
        activate: function (a) {
            console.log('activate');
            a.doLayout();
        }
    },
    layout: {
        type: 'vbox',
        pack: 'start',
        align: 'stretch'
    },
    items: [
        {
            xtype: 'panel',
            autoHeight: true,
            padding: 10,
            style: {
                fontWeight: 'bold',
                fontSize: '14px',
                color: 'green'
            },
            html: [
                '<p>Работа с лайаутами</p>',
                'Добавить бордер лаяут, все части должны схлопываться',
                'В левой части добавить панельку с лаяут акордеон (из 3х панелек)',
                'В правой части добавить панельку с лаяут колумн (из 2х панелек)'
            ].join('<br/>')
        }, {
            xtype: 'panel',
            flex: 1,
            padding: 10,
            html: 'Тут решение'
        }
    ]
});