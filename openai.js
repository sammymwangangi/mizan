import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
    organization: "org-im9yIX3vpG90T1emplAJX1I2",
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);


export default openai;
