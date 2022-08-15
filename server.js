const express = require("express");
const passport = require("passport");
const passportHttp = require("passport-http");
const app = express();
const port = process.env.PORT || 8080;

const record = { username: "aws", password: "candidate" };

passport.use(
  new passportHttp.DigestStrategy({ qop: "auth" }, (username, cb) => {
    if (username === record.username) {
      return cb(null, username, record.password);
    } else {
      return cb(null, false);
    }
  })
);

app.get("/", (req, res) => {
  res.send("AWS");
});

app.get(
  "/secret",
  passport.authenticate("digest", {
    session: false,
  }),
  (req, res) => {
    res.send("認証されました");
  }
);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
