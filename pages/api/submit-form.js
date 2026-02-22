export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    try {
      const response = await fetch('https://formspree.io/f/xblrbara', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        return res.status(200).json({ success: true, message: 'Form submitted successfully!' });
      }
      const errorData = await response.json();
      return res.status(response.status).json({ message: errorData.error || 'Failed to submit the form' });
    } catch (error) {
      console.error('Error submitting form:', error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  }
  res.setHeader('Allow', ['POST']);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}
