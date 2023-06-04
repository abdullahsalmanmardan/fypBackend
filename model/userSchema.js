const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: Number,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    }, //todo this is the array of the token
    tokens: [
      {
        token: {
          type: String,
        },
      },
    ],
  },
  //   todo updateAt createdAt is se pata chal jay ga
  { timestamps: true }
);

//todo database ma save karny se  pehly hum ye kam karin gay
userSchema.pre("save", async function (next) {
  //* only if the password is modified call this
  //? is se password hash ho jay ga agr avaliable ho ga
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);
    console.log(this.password);
  }
  //todo beacuse of this next .save method willl be callled
  next();
});

//* here we will generate the authentitcation token
userSchema.methods.generateAuthToken = async function () {
  try {
    //todo id must be equal to the id of releative username/password
    let token = jwt.sign({ _id: this._id }, process.env.SECRECTKEY);
    // * how we save token to the database;

    this.tokens = this.tokens.concat({ token: this.token });
    await this.save();

    return token;
  } catch (err) {
    console.log(err);
  }
};

module.exports = mongoose.model("User", userSchema);
