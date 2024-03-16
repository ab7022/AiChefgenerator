const mongoose = require("mongoose");
const z = require("zod");
mongoose
 .connect(
    "mongodb+srv://abdul:srbAUEBouAvsp9HY@cluster0.argigth.mongodb.net/assignment-aichef",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )

 .then(() => {
    console.log("database connected successfully");
  })
 .catch((err) => console.log("error connecting", err));
 
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  username: {
    type: String,
    unique: true,
    required: [true, "Email is required"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
 
});

const User = mongoose.model("User", userSchema);

module.exports = {
  User: User,
};