const express = require("express");
const Mock = require("mockjs");
const app = express();

//设置跨域访问
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    // res.header("Access-Control-Allow-Headers", "X-Requested-With");
    // res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    // res.header("X-Powered-By", ' 3.2.1')
    // res.header("Content-Type", "application/json;charset=utf-8");
    next();
});
//home
app.get("/navlists", function (req, res) {
    res.json(Mock.mock({
        'data|10': [
            {
                id: '@id',
                'addr|+1': 1,
                text: '@cword(4)'
            }
        ]
    }))
    res.json(data)
})
app.get("/hotword", function (req, res) {
    res.json(Mock.mock({
        'data|8': [
            {
                id: '@id',
                text: '@cword(2)'
            }
        ]
    }))
    res.json(data)
})
app.get("/slideimg", function (req, res) {
    res.json(Mock.mock({
        'data|4': [
            {
                id: '@id',
                'addr|+1': 1
            }
        ]
    }))
    res.json(data)
})
app.get("/recoms", function (req, res) {
    res.json(Mock.mock({
        'data|4': [
            {
                id: '@id',
                text: '@cword(4)',
                'hot|1': ["秒杀5.9/盒", "88减30", "最高减15"],
                'addr|+1': 1
            }
        ]
    }))
    res.json(data)
})
app.get("/seckills", function (req, res) {
    res.json(Mock.mock({
        'data|12': [
            {
                id: '@id',
                'price|0-50.1-2': 1,
                'd|50-100': 1,
                'addr|+1': 30
            }
        ]
    }))
    res.json(data)
})
app.get("/slidehots", function (req, res) {
    res.json(Mock.mock({
        'data|3': [
            {
                id: '@id',
                'addr|+1': 1
            }
        ]
    }))
    res.json(data)
})
app.get("/shopimgs", function (req, res) {
    res.json(Mock.mock({
        'data|20': [
            {
                id: '@id',
                'addr|+1': 1,
                'uname': '@cword(4)',
                'uadd': '@county()',
                'star|1-5': '❤',
                'num|10-10000': 1
            }
        ]
    }))
    res.json(data)
})
//my
app.get("/wicons", function (req, res) {
    res.json(Mock.mock({
        'data|10': [
            {
                id: '@id',
                'addr|+1': 1,
                text: '@pick("我的关注","我的评价","我的地址","签到有惊喜","退款/售后","客服反馈","帮助中心","办公室超市","配送员招募","关于我们")'
            }
        ]
    }))
    res.json(data)
})
//classify
app.get("/classnavs", function (req, res) {
    res.json(Mock.mock({
        'data|10': [
            {
                id: '@id',
                'text|1': ["水果蔬菜", "肉禽蛋奶", "冷热速食", "休闲食品", "酒水饮料", "粮油调味", "清洁日化", "家居用品", "鲜花蛋糕", "医药健康"]
            }
        ]
    }))
    res.json(data)
})
app.get("/classlists", function (req, res) {
    res.json(Mock.mock({
        'data|3-10': [
            {
                id: '@id',
                'uname': '@cword(2)',
                'ss|+1': 1,
                text: '@cword(2)'
            }
        ]
    }))
    res.json(data)
})
//shop
app.get("/shopnavs", function (req, res) {
    res.json(Mock.mock({
        'data|12-20': [
            {
                id:'@id',
                'index+1':0,
                'uname': '@cword(2)',
                'ss|+1': 3,
                text: '@cword(4)'
            }
        ]
    }))
    res.json(data)
})
app.get("/shopshops", function (req, res) {
    res.json(Mock.mock({
        'data|8-12': [
            {
                id: '@id',
                'uname': '@cword(2)',
                'ss|+1': 1,
                'price|50-200':2,
                'aprice|100-300':200,
                text: '【品质保证】实体蛋糕店同城配送，新鲜时令水果，不满意包退包换！电话：18082245775'
            }
        ]
    }))
    res.json(data)
})
//登录
app.post('/login_message', function (req, res) {
    const conn = require('./src/conn.js');
    var username = req.body.username;
    var password = req.body.password;
    conn.query('select * from `users` where `username`="' + username + '" and `password`="' +password+ '"', function (error, result) {
        if (error) {
            res.json({
                error: 1,
                message: '登陆失败',
                data: null,
                errorInfo: null
            });
        }
        if (result.length == 0) {
            res.json({
                error: 1,
                message: '登陆失败',
                data: null,
                errorInfo: null
            });
        } else {
            res.cookie('username', username);
            res.cookie('auth', result[0].auth);
            res.cookie('userinfo', JSON.stringify(result[0]));
            console.log(error)
            res.json({
                error: 0,
                message: '登陆成功',
                data: null,
                errorInfo: null
            });
        }
    });
});
//注册
app.post('/users/save', function (req, res) {
    const conn = require('./src/conn.js');
    var sql = "insert into `users` (`username`,`phone`,`email`,`password`) values ('" + req.body.username + "','" + req.body.phone + "','" + req.body.email + "','" + md5(req.body.password) + "')";
    conn.query(sql, function (error, result) {
        if (error == null) {
            res.json({
                error: 0,
                message: '成功',
                data: result
            })
        } else {
            res.json({
                error: 1,
                message: '失败',
                // data: result
            })
        }
    })
})

app.listen("80")