const fs = require('fs');
const csv = require('csv-parser');
const { MongoClient } = require('mongodb');

const uri = "mongodb://localhost:27017";
const dbName = '411630691';
const collectionName = 'studentslist';

(async () => {
    const client = new MongoClient(uri);


    try {
        // 連接到 MongoDB
        await client.connect();
        console.log("成功連接到 MongoDB");

        const db = client.db(dbName);
        const collection = db.collection(collectionName);

        const students = await collection.find().toArray();

        console.log("學生資料列表:");
        students.forEach(student => {
            console.log(student);
        });
        // 讀取 CSV 檔案
    } catch (error) {
        console.error("發生錯誤：", error);
    } finally {
        await client.close();
        console.log("已斷開 MongoDB 連接");
    }
})();
