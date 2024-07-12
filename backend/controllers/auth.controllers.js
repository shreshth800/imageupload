import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { generateTokenAndSetCookie } from "../utils/generateTokenAndSetCookie.js";
import Folder from "../models/folder.model.js";

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });

    const isMatch = await bcryptjs.compare(password, user?.password || "");
    if (!user || !isMatch) {
      return res.status(400).json({ error: "wrong credentials" });
    }

    generateTokenAndSetCookie(user, res);

    res.status(200).json({
      user: user._id,
      fullName: user.fullName,
      username: user.username,
      profilePic: user.profilePic,
    });
  } catch {
    console.log("Error in Signup", error.message);
    res.status(500).json({ error: "Error in Signup" });
  }
};

// export const signup = async (req, res) => {
//   try {
//     const { fullName, username, password, confirmPassword, gender } = req.body;

//     if (confirmPassword !== password) {
//       return res.status(400).json({ error: "passwords do not match" });
//     }

//     const user = await User.findOne({ username });

//     if (user) {
//       return res.status(400).json({ error: "user already exists" });
//     }

//     const salt = await bcryptjs.genSalt(10);
//     const hashedPassword = await bcryptjs.hash(password, salt);

//     const boyUserAvatar = "https://avatar.iran.liara.run/public/boy";
//     const girlUserAvatar = "https://avatar.iran.liara.run/public/girl";

//     const newUser = new User({
//       fullName,
//       username,
//       password: hashedPassword,
//       gender,
//       profilePic: gender === "male" ? boyUserAvatar : girlUserAvatar,
//     });

//     if (newUser) {
//       generateTokenAndSetCookie(newUser, res);

//       await newUser.save();

//       res.status(201).json({
//         _id: newUser._id,
//         fullName: newUser.fullName,
//         username: newUser.username,
//         profilePic: newUser.profilePic,
//       });
//     } else {
//       res.status(400).json({ error: "Error in Signup" });
//     }
//   } catch (error) {
//     console.log("Error in Signup", error.message);
//     res.status(500).json({ error: "Error in Signup" });
//   }
// };

export const signup = async (req, res) => {
  try {
    const { fullName, username, password, confirmPassword, gender } = req.body;

    if (confirmPassword !== password) {
      return res.status(400).json({ error: "Passwords do not match" });
    }

    const existingUser = await User.findOne({ username });

    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const boyUserAvatar = "https://avatar.iran.liara.run/public/boy";
    const girlUserAvatar = "https://avatar.iran.liara.run/public/girl";

    const newUser = new User({
      fullName,
      username,
      password: hashedPassword,
      gender,
      profilePic: gender === "male" ? boyUserAvatar : girlUserAvatar,
    });

    if (newUser) {
      // Save the new user first to get the user ID
      await newUser.save();

      // Create root folder for the new user
      const rootFolder = new Folder({
        name: "root",
        user: newUser._id,
        parentFolder: null,
      });

      await rootFolder.save();

      // Update user with root folder ID
      newUser.rootFolder = rootFolder._id;
      await newUser.save();

      generateTokenAndSetCookie(newUser, res);

      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        username: newUser.username,
        profilePic: newUser.profilePic,
        rootFolder: newUser.rootFolder,
      });
    } else {
      res.status(400).json({ error: "Error in Signup" });
    }
  } catch (error) {
    console.log("Error in Signup", error.message);
    res.status(500).json({ error: "Error in Signup" });
  }
};

export const logout = (req, res) => {
  try {
    res.cookie("jwt", "", {
      maxAge: 0,
    });
    res.status(200).json({ message: "logged out" });
  } catch (error) {
    console.log("Error in Signup", error.message);
    res.status(500).send("Error in Signup");
  }
};
