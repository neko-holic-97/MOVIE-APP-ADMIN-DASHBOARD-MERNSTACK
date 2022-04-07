const jwt = require("jsonwebtoken");

function verify(req, res, next) {
  const authHeader = req.headers.token;
  if (authHeader) {
    const token = authHeader.split(" ")[1];

    jwt.verify(token, process.env.JWT_ACCESS_KEY, (err, user) => {
      if (err) res.status(403).json("Token không hợp lệ.");
      //successful
      req.user = user;
      next();
    });
  } else {
    return res.status(401).json("Xác thực không thành công.");
  }
}

module.exports = verify;
