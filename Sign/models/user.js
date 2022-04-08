const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 50,
  },
  email: {
    type: String,
    trim: true,
    unique: 1,
  },
  password: {
    type: String,
    minlength: 5,
  },
  role: {
    type: Number,
    default: 0,
  },
  image: String,
  token: {
    type: String,
  },
  tokenExp: {
    type: Number,
  },
});

// User 모델에 유저 정보를 저장하기 전에 다음 스크립트가 실행된다.
userSchema.pre("save", function (next) {
  var user = this;
  // 비밀번호를 암호화 시킨다.
  if (user.isModified("password")) {
    bcrypt.genSalt(saltRounds, function (err, salt) {
      if (err) return next(err);
      bcrypt.hash(user.password, salt, function (err, hash) {
        if (err) return next(err);
        user.password = hash;
        console.log("비밀번호가 성공적으로 암호화되었습니다.");
        next();
      });
    });
  }
});

const User = mongoose.model("User", userSchema);

module.exports = { User };
