const { User } = require("../models/User");

let auth = (req, res, next) => {
    // 1. 클라이언트 속에 저장한 토큰을 가져온다. (cookie 안에 있음)
    let token = req.cookies.x_auth;

    // 2. 토큰을 복호화한 후 유저를 찾는다.
    User.findByToken(token, (err, user) => {
        if (err) throw err;
        if (!user) return res.json({ isAuth: false, error: true })

        req.token = token;
        req.user = user;
        next()
    })

    // 3. 유저가 있으면 인증 Okay

    // 4. 유저가 없으면 인증 No
}

module.exports = { auth };