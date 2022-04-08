const express = require("express");
const app = express();
const port = 5000;

const bodyParser = require("body-parser");
const { User } = require("./models/User");

// application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// application/josn
app.use(bodyParser.json());

const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://guinness5167:s2941208@boiler-project-sign.emgtm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  )
  .then(() => console.log("Mongoose Connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/register", (req, res) => {
  // 회원 가입 할 때 필요한 정보들을 client에서 가져오면 이것들을 DB에 넣어놓는다.
  const user = new User(req.body);
  console.log(user);
  user.save((err, userInfo) => {
    if (err) return res.json({ success: false, message: err.message });
    return res.status(200).json({ success: true, message: userInfo });
  });
});

app.listen(port, () => {
  console.log(`성공적으로 서버를 실행했습니다. ${port}`);
});
