![profile](resource/profile.png)

##命令行

这是js???
```
> db
test
> db.getName
function (){
    return this._name;
}
> db.getName()
test
> db.getName.toString()
function (){
    return this._name;
}
> db
test
> typeof db
object
> Object.prototype.toString.call(db)
[object DB]
```

- 查看所有数据库 

```
show dbs

201609blog    0.078GB
admin         (empty)
local         0.078GB
mongodb-test  0.078GB
```

- 使用数据库

```
use <database-name>
```

- 查看当前使用的数据库

```
db 或者 db.getName()

test
```

- 删除当前正在使用的数据库

```
db.dropDatabase()
```

- 查看帮助

```
db.worker.help()
```

- 查看数据库下的集合

```
show collections

article
sessions
system.indexes
user
```

