import * as mongoose from "mongoose";

interface IUser {
    first_name: string;
    last_name: string;
    email: string;
}

interface IUserModel extends IUser, mongoose.Document {
}

let userSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    email: String,
});

export var User = mongoose.model<IUserModel>("User", userSchema);
