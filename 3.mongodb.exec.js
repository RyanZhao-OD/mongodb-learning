let persons = {
    data: [{age: 1},{age: 2},{age: 3},{age: 4},{age: 5},{age: 6},{age: 7},{age: 8},{age: 9},{age: 10}],
    skip: function(num) {
        this._skip = num;
        return this;
    },
    limit: function(num) {
        this._limit = num;
        return this;
    },
    sort: function(sortObj) {
        let attr = Object.keys(sortObj)[0];  // 先取出排序的字段
        let order = sortObj[attr];           // 再取出是1升序还是-1降序
        this._sort = function(a, b){
            return (a[attr] - b[attr]) * order;
        };
        return this;
    },
    exec: function(callback){
        // callback(null, this.data.sort(this._sort).slice(this._skip, this._skip + this._limit));
        // this._skip = this._limit = this._sort = null;
        process.nextTick(() => {
            callback(null, this.data.sort(this._sort).slice(this._skip, this._skip + this._limit));
            this._skip = this._limit = this._sort = null;  // TODO
        });
        return this;
    }
};

/**
 * sortObj 1升序 -1降序
 */
persons.skip(6).sort({age: -1}).limit(3).exec(function(err, result){
    console.log(result);    // [4,3,2]
});
// persons.skip(6).limit(3).exec(function(err, result){
//     console.log(result);    // [4,3,2]
// });

persons.exec(function(err, result){
    console.log(result);    // [4,3,2]
}).skip(6).sort({age: -1}).limit(3);