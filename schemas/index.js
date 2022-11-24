const mongoose = require("mongoose");

const connect = () => {
    mongoose
        .connect("mongodb://127.0.0.1/personal")
        .catch(err => console.log(err));
};

mongoose.connection.on("error", err => {
    console.error("MongoDB connection error", err);
});

module.exports = connect;