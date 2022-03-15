import mongoose, { Document, Schema } from "mongoose";
import bcrypt from "bcryptjs";

export interface IUserSchema extends Document {
  phone?: string;
  fullName: string;
  email: string;
  address?: string;
  isAdmin: boolean;
  password: string;
  authProvider?: string;
  role?: string;
}

const userSchema = new Schema<IUserSchema>({
  fullName: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    min: 8,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },

  phone: { type: String },

  role: { type: String },

  isAdmin: {
    type: Boolean,
    required: true,
    default: false,
  },
  authProvider: {
    type: String,
    enum: ["LOCAL", "GOOGLE", "FACEBOOK", "TWITTER"],
    default: "LOCAL",
    required: false,
    select: false,
  },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.index({ "$**": "text" });

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
