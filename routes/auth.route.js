import express from 'express';
const router = express.Router();

router.get('/msg', (req, res) => {
    res.json({message: "success Route!"});
});

export default router;
