export default async function handler(req, res) {

  if (req.method !== 'POST') {
    return res.status(405).json({
      error: 'Method not allowed'
    });
  }

  try {

    const response = await fetch(
      'https://api.sarvam.ai/v1/chat/completions',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'api-subscription-key': 'sk_6z23vh7y_gyhvxmAFzzlHIEesZdahI80W'
        },
        body: JSON.stringify(req.body)
      }
    );

    const data = await response.json();

    res.status(response.status).json(data);

  } catch (err) {

    res.status(500).json({
      error: err.message
    });

  }
}