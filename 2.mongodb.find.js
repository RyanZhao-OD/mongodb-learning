const mongoose = require('mongoose');   // 第三方模块

mongoose.connect('mongodb://localhost/mongodb-test');

let PersonSchema = new mongoose.Schema({
    name: String,
    birthday: Date,
    gender: String,
    age: Number
},{
    collection: 'person2'  // 定义此集合的名称是person
});


let PersonModel = mongoose.model('Person2', PersonSchema);


// 准备数据

// var persons = [];
// for(let i = 0; i < 10; i++){
//     persons.push({ age:i, name: 'zr' + i });
// }
// PersonModel.create(persons, function(error,docs) {
//     if(error) {
//         console.log(error);
//     } else {
//         console.log('save ok');
//     }
// });

// 查一个
/**
 * gt: greater than  lt:less than
 */
/*
PersonModel.findOne({age: {$gt:5, $lt:8}}, function(error, result){
    console.log(result);
});
 */



// 过滤字段
/**
 * 参数1 查询的条件或范围
 * 参数2 0表示要除了这些字段之外的其他字段 1表示只要这些字段， 其他字段不要
 *
 */
// PersonModel.find({name: 'zr1'}, {age: 0}, function(error, result){
//     console.log(result);
// });
//
// PersonModel.findById('582fda55a1e8cb1de87b34cd', function(error, result){
//     console.log(result);
// });

// 排序分页查询

// 执行exec时才会发送请求
// PersonModel.find()返回Promise
/*
PersonModel.find().limit(3).sort({age: -1}).exec(function(error, result){
    console.log(result);
});
*/

let pageNum = 2;
let pageSize = 3;
PersonModel.find().sort({age: -1}).skip((pageNum - 1) * pageSize).limit(pageSize).exec(function(error, result){
    console.log(result);
});