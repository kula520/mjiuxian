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
