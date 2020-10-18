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
            'url':'',
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
