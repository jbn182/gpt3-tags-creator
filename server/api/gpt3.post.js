import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY, 
});
const openai = new OpenAIApi(configuration);

export default async function (event) {
    const { textGPT } = await readBody(event);

    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: generatePrompt(textGPT),
      max_tokens: 3000,
      temperature: 0.75,
    });

    return {
        result: completion.data.choices[0].text,
      }
}

function generatePrompt(textGPT) {
    return `Please provide a list of keywords that you would like to use as tags for your YouTube video separated by coma.
    me: ${textGPT}
    bot: `;
  }