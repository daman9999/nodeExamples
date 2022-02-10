<!-- steps in mongo db -->
1. download mongo db from website
2. install it
3. Check if installed properly or not by in cmd        type mongo


<!-- GUI TOOLS -->
Mongo db Compass

<!-- set Env of Mongo DB-->
by setting path

<!-- diff b/w sql and no sql -->
search on internet

<!-- mongo db ? -->
-> it is no-sql database
-> data stored in collection
-> it don't have rows and column data is stored in form of objects

<!-- where mongo db is useful -->
when we don't know the number of columns in the database or we know the number of columns but the data is vacant most of the times.


<!--  use commands in mongo db-->
use <new database>=>create db udo tk nahi dikhna jd tk collection nahi bndi in compass database
use <current database>=>use current databases

db.createCollection('video')=>create collection
show collections => dispaly collections
db.videos.drop() => drop the video collection
show dbs => show databases
db.dropDatabase() => delete current db


<!-- CURD in mongoDB  -->


<!--  -->
<!--************* INSERT *************-->
-> db.insertOne({name:"m 40",brand:'samsung',cost:250,category:'mobile'})
-> 
 <!--************* Read *************-->
-> db.products.find() => check inserted data
<!--************* UPDATE *************-->
#updateOne(where condition[where name is "m 40"],set update value using $set[brand:`oppo`])
->db.product.updateOne({name:"m40",{$set:{brand:"oppo"}}}) 

<!--************* delete *************-->
-> db.products.deleteOne({brand:"samsung"})
<!--  -->



<!-- CONNECT NODE WITH MONGO -->
-> npm i mongodb 
-> use in Node using
const {MongoClient} = require('mongodb');
or
const MongoClient = require('mongodb').MongoClient;
both are same thing

<!--  -->

