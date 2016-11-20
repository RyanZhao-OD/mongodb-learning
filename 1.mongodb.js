// 第一步 引入第三方模块
const mongoose = require('mongoose');   // 第三方模块

// 第二步 连接接指定的数据库

mongoose.connect('mongodb://localhost/mongodb-test');

// 第三步 操作结合  先定义集合的骨架模型(定义一个集合的名称，集合字段名称和类型)
// 其实它规定的是此集合中的文档中的名称和类型
let PersonSchema = new mongoose.Schema({
    name: String,
    birthday: Date,
    gender: String
    // name: String, //姓名
    // binary: Buffer,//二进制
    // living: Boolean,//是否活着
    // birthday: Date,//生日
    // age: Number,//年龄
    // _id: Schema.Types.ObjectId,  //主键  _id不能改, 如果不写 mongodb自动生成
    // _fk: Schema.Types.ObjectId,  //外键  _fk可以是别的名字,可以有多个外键
    // array: [],    //数组
    // arrOfString: [String], //字符串数组
    // arrOfNumber: [Number], //数字数组
    // arrOfDate: [Date],     //日期数组
    // arrOfBuffer: [Buffer], //Buffer数组
    // arrOfBoolean: [Boolean], //布尔值数组
    // arrOfObjectId: [Schema.Types.ObjectId], //对象ID数组
    // nested:{ //内嵌文档
    //     name: String,
    // }
},{
    collection: 'person'  // 定义此集合的名称是person
});

// 在向此集合中存储文档的时候，会判断次文档对象的属性名是否和schema匹配
// 还要判断类型是否匹配 如果属性名不匹配 则过滤此字段，如果类型不匹配会先尝试进行类型转换
// 如果转成功则保存 失败则报错

// 再根据schema定义模型
let PersonModel = mongoose.model('Person', PersonSchema);


// create可以保存一个文档，保存之后会把保存后的文档传给回调的result参数

/*
PersonModel.create({
    name: '张三',
    birthday: new Date(),
    gender: '男',
    home: '北京'     // Schema中不存在，就过滤这个字段
}, function(error, result){
    console.log(result);
});

PersonModel.create({
    name: '李四',
    birthday: new Date()
    // gender: '男'     // 缺少gender字段
}, function(error, result){
    console.log(result);
});
*/

// find 查找
/*
PersonModel.find({
    name: '张三'    //按条件查
}, function(error, data){
    console.log(data);
});

PersonModel.find({}, function(error, data){  //查所有
    console.log(data);
});
 */

// update 修改
/**
 * 参数1 更新的条件或者范围
 * 参数2 更新的字段
 * 参数3 callback
 */

// 修改匹配到的第一条记录
/*
PersonModel.update({
    name: '张三'
}, {
    gender: '女'
}, function(error, result){
    console.log(result);
});

// 修改匹配到的所有记录
PersonModel.update({
    name: '张三'
}, {
    gender: '女'
}, {
    multi: true
}, function(error, result){
    console.log(result);    // { ok: 1(1成功 0失败), nModified: 2(修改了几条), n: 4(匹配的记录)}
});
*/

// remove 删除文档
/**
 * 参数1 删除的条件或者范围
 */
/*
PersonModel.remove({name: '李四'}, function (error, result) {
    console.log(result.result);   // { ok: 1, n: 1 }
});

//删除全部
PersonModel.remove({}, function (error, result) {
    console.log(result.result);   // { ok: 1, n: 4 }
});
 */


// 准备数据

// var persons = [];
// for(let i = 0; i < 10; i++){
//     persons.push({ gender:"女" + i, name: 'zr' + i });
// }
// PersonModel.create(persons, function(error,docs) {
//     if(error) {
//         console.log(error);
//     } else {
//         console.log('save ok');
//     }
// });