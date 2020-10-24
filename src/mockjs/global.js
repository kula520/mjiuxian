const Mock = require("mockjs");
const Random = Mock.Random;

//nav 数据
let navLists = Mock.mock({
    "data":[
        {
            'id':1,
            'name':'首页',
            'url':'',
            'newsImage':require('../assets/navs/indexIcon.png')
        },
        {
            'id':2,
            'name':'分类',
            'url':'sort',
            'newsImage':require('../assets/navs/sortIcon.png')
        },
        {
            'id':3,
            'name':'特卖',
            'url':'',
            'newsImage':require('../assets/navs/jIcon.png')
        },
        {
            'id':4,
            'name':'购物车',
            'url':'',
            'newsImage':require('../assets/navs/shopIcon.png')
        },
        {
            'id':5,
            'name':'我的',
            'url':'login',
            'newsImage':require('../assets/navs/userIcon.png')
        }
    ]
})
Mock.mock(/newjiuxian\/navList/, 'get', () => { //三个参数。第一个路径，第二个请求方式post/get，第三个回调，返回值
    return navLists
})

//顶部 swipe 数据
let topSwipeImg = Mock.mock({
    "data":[
        {
            'id':1,
            'newsImage':require('../assets/swipeImg/1.jpg')
        },
        {
            'id':2,
            'newsImage':require('../assets/swipeImg/2.jpg')
        },
        {
            'id':3,
            'newsImage':require('../assets/swipeImg/3.jpg')
        },
        {
            'id':4,
            'newsImage':require('../assets/swipeImg/4.jpg')
        },
        {
            'id':5,
            'newsImage':require('../assets/swipeImg/5.jpg')
        }
    ]
})
Mock.mock(/mjiuxian\/swipeImg/, 'get', () => { //三个参数。第一个路径，第二个请求方式post/get，第三个回调，返回值
    return topSwipeImg
})

//sort 分裂数据
let sortLists = Mock.mock({
    "data":[
        {
            'id':1,
            'claSty':'claSty',
            'name':'白酒',
            'url':'https://m.jiuxian.com/'
        },
        {
            'id':2,
            'claSty':'claSty',
            'name':'葡萄酒',
            'url':'https://m.jiuxian.com/'
        },
        {
            'id':3,
            'claSty':'claSty',
            'name':'洋酒',
            'url':'https://m.jiuxian.com/'
        },
        {
            'id':4,
            'claSty':'claSty',
            'name':'整箱购',
            'url':'https://m.jiuxian.com/'
        },
        {
            'id':5,
            'claSty':'claSty',
            'name':'老酒',
            'url':'https://m.jiuxian.com/'
        },
        {
            'id':6,
            'claSty':'claSty',
            'name':'清仓特卖',
            'url':'https://m.jiuxian.com/'
        },
        {
            'id':7,
            'claSty':'claSty',
            'name':'海外直采',
            'url':'https://m.jiuxian.com/'
        },
        {
            'id':8,
            'claSty':'claSty',
            'name':'精美大坛',
            'url':'https://m.jiuxian.com/'
        },
        {
            'id':9,
            'claSty':'claSty',
            'name':'红酒整箱',
            'url':'https://m.jiuxian.com/'
        },
        {
            'id':10,
            'claSty':'claSty',
            'name':'值得买',
            'url':'https://m.jiuxian.com/'
        },
        {
            'id':11,
            'claSty':'claSty',
            'name':'销量排行',
            'url':'https://m.jiuxian.com/'
        },
        {
            'id':12,
            'claSty':'claSty',
            'name':'礼尚往来',
            'url':'https://m.jiuxian.com/'
        }
        
    ]
})
Mock.mock(/mjiuxian\/sortLists/, 'get', () => { //三个参数。第一个路径，第二个请求方式post/get，第三个回调，返回值
    return sortLists
})
