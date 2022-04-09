const express = require("express");
const app = express();
const port = 5000;

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const { User } = require("./models/User");
const config = require("./config/key");

// application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// application/josn
app.use(bodyParser.json());

app.use(cookieParser());

const mongoose = require("mongoose");
mongoose
  .connect(config.mongoURI)
  .then(() => console.log("Mongoose Connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello World!!!!!");
});

// register route
app.post("/register", (req, res) => {
  // 회원 가입 할 때 필요한 정보들을 client에서 가져오면 이것들을 DB에 넣어놓는다.
  const user = new User(req.body);
  user.save((err, userInfo) => {
    if (err) return res.json({ success: false, message: err.message });
    return res.status(200).json({ success: true, message: userInfo });
  });
});

app.post("/login", (req, res) => {
  // 1. 요청된 이메일을 DB에서 있는지 찾는다.
  User.findOne({ email: req.body.email }, (err, userInfo) => {
    if (!userInfo)
      return res.json({
        success: false,
        message: "해당하는 이메일이 존재하지 않습니다.",
      });

    // 2. 요청된 이메일의 password가 입력된 비밀번호와 같은지 확인한다.
    userInfo.comparePassword(req.body.password, (err, isMatch) => {
      if (!isMatch)
        return res.json({
          success: false,
          message: "비밀번호가 틀렸습니다.",
        });
      // 3. 위 두 가지가 확인되었다면 token을 생성해준다.
      userInfo.generateToken((err, userInfo) => {
        if (err) return res.status(400).send(err);

        // 토큰을 저장한다. 어디에???
        res
          .cookie("x_auth", userInfo.token)
          .status(200)
          .json({ loginSuccess: true, userInfo: userInfo });
        console.log("토큰의 생성과 로그인이 성공적으로 이뤄졌습니다.");
      });
    });
  });
});

app.listen(port, () => {
  console.log(`성공적으로 서버를 실행했습니다. ${port}`);
});
