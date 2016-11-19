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
// PersonModel.create({
//     name: '张三',
//     birthday: new Date(),
//     gender: '男',
//     home: '北京'     // Schema中不存在，就过滤这个字段
// }, function(error, result){
//     console.log(result);
// });

PersonModel.create({
    name: '李四',
    birthday: new Date()
    // gender: '男'     // 缺少gender字段
}, function(error, result){
    console.log(result);
});