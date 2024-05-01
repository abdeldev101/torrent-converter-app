import { NextApiRequest, NextApiResponse } from 'next';
import multer from 'multer'; // File upload middleware

const upload = multer({ dest: '/tmp' }); // Configure upload destination

export const config = {
  api: {
    bodyParser: false, // Disable default body parsing (handled by multer)
  },
};

const handler = async (req, res) => {
  try {
    if (!req.method === 'POST') {
      return res.status(405).json({ error: 'Method not allowed' });
    }

    upload.single('file')(req, res, async (err) => {
      if (err) {
        return res.status(500).json({ error: 'Upload failed' });
      }

      //  torrent generation logic here with node-torrent
      
      const torrentFile = 'YOUR GENERATED TORRENT FILE HERE';
      

      // Serve the generated torrent file
      res.setHeader('Content-Type', 'application/x-bittorrent');
      res.setHeader('Content-Disposition', `attachment; filename="${req.file.originalname}.torrent"`);
      res.send(torrentFile);
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export default handler;
