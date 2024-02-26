// pages/api/submitComment.js

export default async function handler(req, res) {
    if (req.method === 'POST') {
      // Extraction des données du corps de la requête
      const { name, email, comment } = req.body;
  
      // Préparation de la requête à l'API externe
      const response = await fetch('https://api.metahumansdk.io/auth/token', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&comment=${encodeURIComponent(comment)}`,
      });
  
      // Vérifier la réponse de l'API externe
      if (!response.ok) {
        // Gérer l'erreur si la requête a échoué
        //return res.status(response.status).json({ message: 'Erreur lors de l\'envoi de la requête à l\'API externe.' });
        return res.status(response.status).json({ message: response.message });
      }
  
      // Vous pouvez choisir de renvoyer la réponse de l'API externe ou un message personnalisé
      const data = await response.json();
      return res.status(200).json(data);
    } else {
      // Gérer les méthodes non autorisées
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
  