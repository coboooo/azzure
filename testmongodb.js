const { MongoClient } = require("mongodb");

// MongoDB 서버 URL
const url =
  "mongodb+srv://blog:zlzXkfuV4hb4LAei@cluster0.u4e0zui.mongodb.net/?retryWrites=true&w=majority";

// 데이터베이스 이름
const dbName = "mydatabase";

// 몽고디비 연결
MongoClient.connect(url, function (err, client) {
  if (err) {
    console.error("Failed to connect to MongoDB:", err);
    return;
  }

  console.log("Connected to MongoDB");

  const db = client.db(dbName);

  // 쿼리 예제: 'users' 컬렉션에서 모든 문서 가져오기
  db.collection("users")
    .find({})
    .toArray(function (err, docs) {
      if (err) {
        console.error("Failed to fetch documents:", err);
        return;
      }

      console.log("Fetched documents:");
      console.log(docs);

      // 연결 종료
      client.close();
    });
});
