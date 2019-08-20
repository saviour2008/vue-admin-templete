import Mock from 'mockjs'

const List=[];
const count=25;
for (let i = 0; i < count; i++) {
    List.push(Mock.mock({
        id: '@increment',
        infoNum: 'F@natural(1, 800)',
        'name|1':  ['协议联系人', '协议联系人电话', '协议联系人手机','协议联系人邮箱','协议收获地址','协议地址邮编','法人代表名字','法人代表电话','法人代表邮箱'],
        date: '@datetime',
        'isenable|1':[true,false]
    }))
}

const contractList=[];
const contractcount=25;
for (let i = 0; i < contractcount; i++) {
    contractList.push(Mock.mock({
        id: '@increment',
        'reason|1':['合规','销售','质量'],
        'tmplateName|1':['药品销售合同','药品警戒合同','销售终止合同'],
        'exprise|1':['长期','一年'],
        'law':'罗氏贸易',
        'signtory':'@natural(1, 5)人',
        'emailTemplate':'@natural(1, 5)个',
        'signtoryWay|1':['罗氏先签','罗氏后签'],
        'isEsignature|1':['是','否'],
        'isenable|1':[true,false],
        'isShow':false
    }))
}

export default [
    {
        url: '/system/getlist',
        type: 'get',
        response: config => {
            const { page = 1, limit = 10, sort } = config.query

            // if (sort === '-id') {
            //    mockList = mockList.reverse()
            // }

            const pageList = List.filter((item, index) => index < limit * page && index >= limit * (page - 1))

            return {
                code: 20000,
                data: {
                    total: List.length,
                    items: pageList
                }
            }
        }
    },
    {
        url:  '/system/getContractlist',
        type: 'get',
        response: config => {
            const { page = 1, limit = 10, sort } = config.query

            // if (sort === '-id') {
            //    mockList = mockList.reverse()
            // }

            const pageList = contractList.filter((item, index) => index < limit * page && index >= limit * (page - 1))

            return {
                code: 20000,
                data: {
                    total: contractList.length,
                    items: pageList
                }
            }
        }
    },
 
]