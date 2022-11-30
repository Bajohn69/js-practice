/**
 * MongoDB CRUD
 * insert
 * query
 * update
 * delete
 * 
 * https://www.mongodb.com/docs/v4.4/crud/
 * 
C:\Users\Miss Huang>cd "C:\Program Files\MongoDB\Server\4.4\bin"
// 先找他

C:\Program Files\MongoDB\Server\4.4\bin>mongo
// 輸入 mongo
MongoDB shell version v4.4.18
connecting to: mongodb://127.0.0.1:27017/?compressors=disabled&gssapiServiceName=mongodb
Implicit session: session { "id" : UUID("27d05106-c5d6-4c1a-9f2c-5013b88da33f") }
MongoDB server version: 4.4.18
---
The server generated these startup warnings when boting:
        2022-11-29T18:09:06.820+08:00: Access control is not enabled for the database. Read and write access to data and configuration is unrestricted
---
---
        Enable MongoDB's free cloud-based monitoring service, which will then receive and display
        metrics about your deployment (disk utilization, CPU, operation statistics, etc).

        The monitoring data will be available on a MongoDB website with a unique URL accessible to you
        and anyone you share the URL with. MongoDB may use this information to make product
        improvements and to suggest MongoDB products and deployment options to you.

        To enable free monitoring, run the following command: db.enableFreeMonitoring()
        To permanently disable this reminder, run the following command: db.disableFreeMonitoring()
---
// 看有哪些 DB
> show dbs
admin   0.000GB
config  0.000GB
local   0.000GB

// use DB 不存在的話會幫你新增一個
> use exampleDB
switched to db exampleDB
> show collections

// 查看當前 DB
> db
exampleDB

// 建立 collections(= table)
> db.students
exampleDB.students

// insertOne()
> db.students.insertOne({name:"Bajohn", age:28, major:'computer science', scholarship:{merit:3000, other:1500}})
{
        "acknowledged" : true,
        "insertedId" : ObjectId("6386ce9a790d443d8126ef58")
}

// 查看 collections
> db.students.find()
{ "_id" : ObjectId("6386ce9a790d443d8126ef58"), "name" : "Bajohn", "age" : 28, "major" : "computer science", "scholarship" : { "merit" : 3000, "other" : 1500 } }

// insertMany()
> db.students.insertMany([{name: "Mike", age: 23, major:'Chemistry', scholarship: {merit:4500, other:3000}}, {name:'John', age: 21, major: 'EE',scholarship:{merit:0, other:5000}}])
{
        "acknowledged" : true,
        "insertedIds" : [
                ObjectId("6386d0dc790d443d8126ef59"),
                ObjectId("6386d0dc790d443d8126ef5a")
        ]
}

// 查看 collections
> db.students.find()
{ "_id" : ObjectId("6386ce9a790d443d8126ef58"), "name" : "Bajohn", "age" : 28, "major" : "computer science", "scholarship" : { "merit" : 3000, "other" : 1500 } }
{ "_id" : ObjectId("6386d0dc790d443d8126ef59"), "name" : "Mike", "age" : 23, "major" : "Chemistry", "scholarship" : { "merit" : 4500, "other" : 3000 } }
{ "_id" : ObjectId("6386d0dc790d443d8126ef5a"), "name" : "John", "age" : 21, "major" : "EE", "scholarship" : { "merit" : 0, "other" : 5000 } }

// 直接 insert()(= insertOne/insertMany) (不建議因為回傳資訊較少)
> db.students.insert({name:'Fred', age:25, major: 'chemistry', scholarship:{merit:0, other: 0}})
WriteResult({ "nInserted" : 1 })

// 查看 collections
> db.students.find()
{ "_id" : ObjectId("6386ce9a790d443d8126ef58"), "name" : "Bajohn", "age" : 28, "major" : "computer science", "scholarship" : { "merit" : 3000, "other" : 1500 } }
{ "_id" : ObjectId("6386d0dc790d443d8126ef59"), "name" : "Mike", "age" : 23, "major" : "Chemistry", "scholarship" : { "merit" : 4500, "other" : 3000 } }
{ "_id" : ObjectId("6386d0dc790d443d8126ef5a"), "name" : "John", "age" : 21, "major" : "EE", "scholarship" : { "merit" : 0, "other" : 5000 } }
{ "_id" : ObjectId("6386d17c790d443d8126ef5b"), "name" : "Fred", "age" : 25, "major" : "chemistry", "scholarship" : { "merit" : 0, "other" : 0 } }

// 查詢 filter
> db.students.find({name:'Bajohn'})
{ "_id" : ObjectId("6386ce9a790d443d8126ef58"), "name" : "Bajohn", "age" : 28, "major" : "computer science", "scholarship" : { "merit" : 3000, "other" : 1500 } }

// 查詢 filter (大小寫有差)
> db.students.find({major:'chemistry'})
{ "_id" : ObjectId("6386d17c790d443d8126ef5b"), "name" : "Fred", "age" : 25, "major" : "chemistry", "scholarship" : { "merit" : 0, "other" : 0 } }
> db.students.find({major:'Chemistry'})
{ "_id" : ObjectId("6386d0dc790d443d8126ef59"), "name" : "Mike", "age" : 23, "major" : "Chemistry", "scholarship" : { "merit" : 4500, "other" : 3000 } }

// update() 若找到多個符合的只會修改第一個，updateMany() 則會修改多筆
// $set 修改內容
// $currentDate:{lastModified:true} 可加可不加，加了就會顯示在修改過的物件後
> db.students.updateOne({name:'Bajohn'}, {$set:{name:'Wilson', age:25}, $currentDate:{lastModified:true}})
{ "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }
// "matchedCount" : 1 符合的一筆, "modifiedCount" : 1 修改一筆

> db.students.find()
{ "_id" : ObjectId("6386ce9a790d443d8126ef58"), "name" : "Wilson", "age" : 25, "major" : "computer science", "scholarship" : { "merit" : 3000, "other" : 1500 }, "lastModified" : ISODate("2022-11-30T04:04:09.579Z") }
{ "_id" : ObjectId("6386d0dc790d443d8126ef59"), "name" : "Mike", "age" : 23, "major" : "Chemistry", "scholarship" : { "merit" : 4500, "other" : 3000 } }
{ "_id" : ObjectId("6386d0dc790d443d8126ef5a"), "name" : "John", "age" : 21, "major" : "EE", "scholarship" : { "merit" : 0, "other" : 5000 } }
{ "_id" : ObjectId("6386d17c790d443d8126ef5b"), "name" : "Fred", "age" : 25, "major" : "chemistry", "scholarship" : { "merit" : 0, "other" : 0 } }

// updateMany() 修改多筆
> db.students.updateMany({major:'Chemistry'}, {$set:{major:'Chem'}})
{ "acknowledged" : true, "matchedCount" : 2, "modifiedCount" : 2 }

> db.students.find()
{ "_id" : ObjectId("6386ce9a790d443d8126ef58"), "name" : "Wilson", "age" : 25, "major" : "computer science", "scholarship" : { "merit" : 3000, "other" : 1500 }, "lastModified" : ISODate("2022-11-30T04:04:09.579Z")}
{ "_id" : ObjectId("6386d0dc790d443d8126ef59"), "name" : "Mike", "age" : 23, "major" : "Chem", "scholarship" : { "merit" : 4500, "other" : 3000 } }
{ "_id" : ObjectId("6386d0dc790d443d8126ef5a"), "name" : "John", "age" : 21, "major" : "EE", "scholarship" : { "merit" : 0, "other" : 5000 } }
{ "_id" : ObjectId("6386d17c790d443d8126ef5b"), "name" : "Fred", "age" : 25, "major" : "Chem", "scholarship" : { "merit" : 0, "other" : 0 } }

// 刪除全部 (inventory = collection 名稱)
db.inventory.deleteMany({})

// deleteOne() 刪除一筆
> db.students.deleteOne({major:'Chem'})
{ "acknowledged" : true, "deletedCount" : 1 }

> db.students.find()
{ "_id" : ObjectId("6386ce9a790d443d8126ef58"), "name" : "Wilson", "age" : 25, "major" : "computer science", "scholarship" : { "merit" : 3000, "other" : 1500 }, "lastModified" : ISODate("2022-11-30T04:04:09.579Z")}
{ "_id" : ObjectId("6386d0dc790d443d8126ef5a"), "name" : "John", "age" : 21, "major" : "EE", "scholarship" : { "merit" : 0, "other" : 5000 } }
{ "_id" : ObjectId("6386d17c790d443d8126ef5b"), "name" : "Fred", "age" : 25, "major" : "Chem", "scholarship" : { "merit" : 0, "other" : 0 } }

// deleteMany() 刪除多筆
> db.students.deleteMany({age:25})
{ "acknowledged" : true, "deletedCount" : 2 }
> db.students.find()
{ "_id" : ObjectId("6386d0dc790d443d8126ef5a"), "name" : "John", "age" : 21, "major" : "EE", "scholarship" : { "merit" : 0, "other" : 5000 } }

// 查詢巢狀物件 nested object
> db.students.find({scholarship.merit:4500}) >>>>>>> 沒加雙引號會找不到
> db.students.find({"scholarship.merit":4500})
{ "_id" : ObjectId("6386e002790d443d8126ef5c"), "name" : "Mike", "age" : 23, "major" : "Chemistry", "scholarship" : { "merit" : 4500, "other" : 3000 } }

// 比較
https://www.mongodb.com/docs/v4.4/reference/operator/query-comparison/#std-label-query-selectors-comparison

// $gt 大於(greater than)
> db.students.find({"scholarship.other":{$gt:1500}})
{ "_id" : ObjectId("6386d0dc790d443d8126ef5a"), "name" : "Bajohn", "age" : 21, "major" : "Computer Science", "scholarship" : { "merit" : 0, "other" : 5000 } }
{ "_id" : ObjectId("6386e002790d443d8126ef5c"), "name" : "Mike", "age" : 23, "major" : "Chemistry", "scholarship" : { "merit" : 4500, "other" : 3000 } }
{ "_id" : ObjectId("6386e002790d443d8126ef5d"), "name" : "John", "age" : 21, "major" : "EE", "scholarship" : { "merit" : 0, "other" : 5000 } }
>

// AND/OR
https://www.mongodb.com/docs/v4.4/tutorial/query-documents/

// $in 查詢所有有關的
> db.students.find({major:{$in:['EE','Chemistry']}})
{ "_id" : ObjectId("6386e002790d443d8126ef5c"), "name" : "Mike", "age" : 23, "major" : "Chemistry", "scholarship" : { "merit" : 4500, "other" : 3000 } }
{ "_id" : ObjectId("6386e002790d443d8126ef5d"), "name" : "John", "age" : 21, "major" : "EE", "scholarship" : { "merit" : 0, "other" : 5000 } }


 */
