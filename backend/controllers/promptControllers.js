const axios = require("axios");
// import OpenAI from "openai";
const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: "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",
});

const promptMessage = async (req, res) => {
  try {
    const resp = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "",
        },
        { role: "user", content: req.body.question },
      ],
    });
    res.status(200).json({ message: resp.choices[0].message.content });
    console.log(resp.choices[0].message.content);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};
module.exports = promptMessage;
