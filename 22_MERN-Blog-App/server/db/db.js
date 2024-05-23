const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

mongoose
  .connect(
    "mongodb+srv://dubedivya1992:Amazing01*@cluster0.pgnmbpt.mongodb.net/",
  )
  .then(() => console.log("Connected mongodb"))
  .catch((e) => console.log(e));
