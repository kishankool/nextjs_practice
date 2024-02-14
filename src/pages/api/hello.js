// pages/api/hello.js
export default function handler(req, res) {
  if (req.method === 'POST') {
    // Handle POST request
    res.status(200).json({ message: 'Received a POST request!' });
  }else if(req.method ==='GET'){
    res.status(200).json({ message: 'Received a GET request!' });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
