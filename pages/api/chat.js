// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// Importing the axios package which provides an easy way to send HTTP requests
import axios from 'axios';

// Defining an asynchronous function named "handler" which takes two parameters req and res.
export default async function handler(req, res) {
  // Getting the referer from the request headers or from the referrer header if referer header is not present.
  const referer = req.headers.referer || req.headers.referrer;

  // Checking if the http method is POST. If not, returns a status of 405 with an error message in json format
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method should be POST' });
  } else {
    try {
      // Extracting the body from the req object
      const { body } = req;
      // Defining the API URL to be used for sending the chatbot message.
      const url = 'https://api.openai.com/v1/chat/completions';
      // Setting up the headers which should contain content type and authorization information.
      const headers = {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
      };
      
      // Sending the post request to the open AI api using axios.
      // The data sent along with the request is the body of the incoming request, the headers and the url.
      const response = await axios.post(url, body, { headers: headers })

      // Returns a status of 200 along with the response data from the api in json format.
      res.status(200).json(response.data);
    } catch (error) {
      // If there is an error, logs it to the console and sends a 500 status with a simple error message in json format.
      console.log(error);
      res.status(500).json({ message: "Something went wrong" });
    }
  }
}
