const customer = {
    id: 'customer_69079',
    orgName: '周昊的客户',
    entry: {
        id: 'customer_69079',
        originId: '69079',
        visibleCode: 0,
        orgName: '周昊的客户',
        orgPYName: 'zhouhaodekehu',
        type: 2002,
        orgRank: 1665628606000,
        createTime: 1665628606000,
        parent: 'customer',
        area: '-',
        website: null,
        cLevel: '0',
        cLevelName: '',
        domain: '',
        shortName: '',
        starLevel: '0',
        sourceName: '未知',
        companyName: '周昊的客户',
        labelNames: [],
        managerNames: ['email_plus_test01', 'email_plus_test02'],
        customerType: 'customer',
        _lastUpdateTime: 1665629854229,
        _company: 'devtest.com'
    },
    contacts: [
        {
            id: '370393',
            contactLabel: 'B',
            contactPYName: 'buzhihuowu',
            contactPYLabelName: 'bzhw',
            contactName: '不知火舞',
            avatar: '',
            accountType: 2,
            displayEmail: 'zhouhao1@devtest.com',
            accountName: 'zhouhao1@devtest.com',
            remark: null,
            type: 'customer',
            visibleCode: 0,
            enableIM: false,
            accountId: '370393',
            color: '#70CCAB'
        }
    ],
    managerList: [
        {
            account: 'email_plus_test02@devtest.com',
            contactName: 'email_plus_test02',
            contactId: '1333659003'
        }
    ]
};

await apiResposity.mailApiImpl.doListMailBoxEntities({
    index: 0,
    returnModel: true,
    returnTag: true,
    checkType: 'checkCustomerMail',
    count: 30,
    endDate: '',
    attrQuery: [
        {
            to: ['zhouhao1@devtest.com']
        },
        {
            from: 'email_plus_test02@devtest.com',
            to: ['zhouhao1@devtest.com']
        }
    ],
    attrQueryFilter: {
        type: 'send'
    },
    noContactRace: false
});
