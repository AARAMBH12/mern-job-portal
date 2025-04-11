import { v2 as cloudinary } from "cloudinary";

import dotenv from "dotenv";
dotenv.config();

console.log(  "kk", process.env.CLOUD_NAME)

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API,
  api_secret: process.env.API_SECRET,
});

export default cloudinary;
