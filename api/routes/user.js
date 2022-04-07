const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const verify = require("../verifyToken");

//UPDATE

router.put("/:id", verify, async (req, res) => {
  if (req.params.id === req.params.id || req.user.isAdmin) {
    //create new password
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      const hashed = await bcrypt.hash(req.body.password, salt);
      req.body.password = hashed;
    }
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );

      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res
      .status(403)
      .json("Bạn chỉ có thể chỉnh sửa thông tin tài khoản của mình.");
  }
});

//DELETE
router.delete("/:id", verify, async (req, res) => {
  if (req.params.id === req.params.id || req.user.isAdmin) {
    try {
      await User.findByIdAndDelete(req.params.id);

      res.status(200).json("Tài khoản đã bị xóa.");
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(403).json("Bạn chỉ có thể xóa tài khoản của mình.");
  }
});

//GET
router.get("/find/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...info } = user._doc;

    res.status(200).json(info);
  } catch (error) {
    res.status(500).json(error);
  }
});
//GET ALL
router.get("/", verify, async (req, res) => {
  const query = req.query.new;
  if (req.user.isAdmin) {
    try {
      const users = query
        ? await User.find().sort({ _id: -1 }).limit(5)
        : await User.find(); //find last 10 user

      res.status(200).json(users);
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(403).json("Bạn không được cấp quyền.");
  }
});

//GET USER STATS
router.get("/stats", async (req, res) => {
  const today = new Date();
  const lastYear = today.setFullYear(today.setFullYear() - 1);

  try {
    const data = await User.aggregate([
      {
        $project: {
          month: { $month: "$createdAt" },
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: 1 },
        },
      },
    ]);
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
