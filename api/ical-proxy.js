export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  const { url } = req.query;

  if (!url) {
    return res.status(400).json({ error: 'URL mancante' });
  }

  // Accetta solo URL iCal di Airbnb e Booking
  const allowed = [
    'airbnb.com',
    'booking.com',
    'airbnb.it',
    'homeaway.com',
    'vrbo.com'
  ];
  const isAllowed = allowed.some(domain => url.includes(domain));
  if (!isAllowed) {
    return res.status(403).json({ error: 'Dominio non autorizzato' });
  }

  try {
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; AirbnbManager/1.0)'
      }
    });

    if (!response.ok) {
      return res.status(response.status).json({ error: 'Errore nel recupero del calendario' });
    }

    const text = await response.text();
    res.setHeader('Content-Type', 'text/calendar; charset=utf-8');
    res.status(200).send(text);
  } catch (err) {
    console.error('iCal proxy error:', err);
    res.status(500).json({ error: 'Errore interno: ' + err.message });
  }
}
