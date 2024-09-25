import { Message } from "../models/messageSchema.js";

export const sendMessage = async (req, res, next) =>{
    const { firstName, lastName, email, phone } = req.body;
    if (!firstName || !lastName || !email || !phone ) {
      return res.status(400).json({
        success: false,
        message: "Please Fill Full Form",
      });
    }
    await Message.create({ firstName, lastName, email, phone });
    res.status(200).json({
      success: true,
      message: "Message Sent!",
    });
};
  
//   export const getAllMessages = catchAsyncErrors(async (req, res, next) => {
//     const messages = await Message.find();
//     res.status(200).json({
//       success: true,
//       messages,
//     });
// });