
import instituteModel from "../models/institute.model.js";


export const createInstitute = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      phoneNumber,
      address,
      website,
      BannerImage,
      Bio,
    } = req.body;

    if (!name || !email || !password || !phoneNumber) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if the email already exists
    const existingInstitute = await instituteModel.findOne({ email });
    if (existingInstitute) {
      return res.status(400).json({ message: "Institute already exists" });
    }

    const hashedPassword = await instituteModel.HashPassword(password);

    // Generate a 10-letter random string for the Code field
    const generateRandomCode = () => {
      const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      let result = "";
      for (let i = 0; i < 10; i++) {
        result += characters.charAt(
          Math.floor(Math.random() * characters.length)
        );
      }
      return result;
    };

    const Code = generateRandomCode();
    console.log("Generated Code:", Code);

    const newInstitute = new instituteModel({
      name,
      email,
      password: hashedPassword,
      phoneNumber,
      address,
      website,
      Code,
      BannerImage,
      Bio,
    });

    await newInstitute.save();
    res
      .status(201)
      .json({
        message: "Institute created successfully",
        institute: newInstitute,
      });
  } catch (error) {
    console.error("Error creating institute:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};