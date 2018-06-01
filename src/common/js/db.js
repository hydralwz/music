const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017/music'

MongoClient.connect(url, function (err, db) {
  if (err) throw err
  console.log('数据库已创建!')
  var dbase = db.db('music')
  dbase.createCollection('site', function (err, res) {
    if (err) throw err
    console.log('创建集合!')
    db.close()
  })
  var myobj = { name: 'userid', url: 'username' }
  dbase.collection('site').insertOne(myobj, function (err, res) {
    if (err) throw err
    console.log('文档插入成功')
    db.close()
  })
  dbase.collection('site').find({}).toArray(function (err, result) {
    if (err) throw err
    console.log(result)
    db.close()
  })
  var whereStr1 = { 'name': 'user' }
  dbase.collection('site').find(whereStr1).toArray(function (err, result) {
    if (err) throw err
    console.log(result)
    db.close()
  })
  var whereStr2 = { 'name': '菜鸟教程' }
  dbase.collection('site').deleteOne(whereStr2, function (err, obj) {
    if (err) throw err
    console.log('文档删除成功')
    db.close()
  })
})