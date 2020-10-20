const Mock = require("mockjs");
const Random = Mock.Random;

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
Mock.mock(/newjiuxian\/topSwipeImg/, 'get', () => { //三个参数。第一个路径，第二个请求方式post/get，第三个回调，返回值
    return topSwipeImg
})
// 搜索热词列表
let hotList = Mock.mock({
    "data|20": [ //生成多少条数据 数组
        {
            "id|+1": 1,//生成商品id，自增1
            "hot": "@ctitle(4)", //生成商品信息，长度为多少个汉字
            "url":'https://m.jiuxian.com/',
            "color|1-2":true
        }
    ]
})
Mock.mock(/newjiuxian\/hotList/, 'get', () => { //三个参数。第一个路径，第二个请求方式post/get，第三个回调，返回值
    return hotList
})
// 搜索下拉列表
let seachList = Mock.mock({
    "data|10": [ //生成多少条数据 数组
        {
            "hot": "@ctitle(3)", //生成商品信息，长度为多少个汉字
        }
    ]
})
Mock.mock(/newjiuxian\/seachList/, 'post', () => { //三个参数。第一个路径，第二个请求方式post/get，第三个回调，返回值
    return seachList
})
// 判断验证码
let phoneYzm = Mock.mock({
    "data|1": [ //生成多少条数据 数组
        {
            "boolean|1": 'true'
        }
    ]
})
Mock.mock(/newjiuxian\/phoneYzm/, 'post', () => { //三个参数。第一个路径，第二个请求方式post/get，第三个回调，返回值
    return phoneYzm
})

// 验证名字是否是0
let userName = Mock.mock({
    "data|1": [ //生成多少条数据 数组
        {
            "userName": 0
        }
    ]
})
Mock.mock(/newjiuxian\/userNameID/, 'post', () => { //三个参数。第一个路径，第二个请求方式post/get，第三个回调，返回值
    return userName
})

// 提交登录
let userLogin = Mock.mock({
    "data|1": [ //生成多少条数据 数组
        {
            "userName":'liangzhen',
            "userPass":'123456'
        }
    ]
})
Mock.mock(/newjiuxian\/userLogin/, 'post', () => { //三个参数。第一个路径，第二个请求方式post/get，第三个回调，返回值
    return userLogin
})

// 头条新闻
let newLists = Mock.mock({
    "data|5": [ //生成多少条数据 数组
        {
            "newList":"@ctitle(8)",
        }
    ]
})
Mock.mock(/newjiuxian\/newLists/, 'get', () => { //三个参数。第一个路径，第二个请求方式post/get，第三个回调，返回值
    return newLists
})

// 秒杀商品列表a
let shopList = Mock.mock({
    "data|10": [ //生成多少条数据 数组
        {
            "shopImg":Random.dataImage('110x110', '商品图'),
            "shopTil":"@ctitle(18)",
            "price|1-1000": 1000
        }
    ]
})
Mock.mock(/newjiuxian\/shopLists/, 'get', () => { //三个参数。第一个路径，第二个请求方式post/get，第三个回调，返回值
    return shopList
})

