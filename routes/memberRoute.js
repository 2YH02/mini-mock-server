const express = require("express");
const router = express.Router();

router.post("/join", (_, res) => {
  const resData = {
    message: "가입 성공!",
    data: 2,
  };
  res.send(resData);
});

router.post("/login", (_, res) => {
  const resData = {
    message: "로그인이 완료되었습니다.",
    data: {
      memberId: 2,
      nickname: "test name",
    },
  };

  res.header("Access_Token", "accessToken123");
  res.header("Refresh_Token", "refreshToken123");

  res.send(resData);
});

router.post("/logout", (_, res) => {
  const resData = {
    message: "로그아웃이 완료되었습니다.",
  };

  res.send(resData);
});

router.post("/refresh", (_, res) => {
  const resData = {
    accessToken: "accessToken123",
    refreshToken: "refreshToken123",
  };

  res.send(resData);
});

module.exports = router;
