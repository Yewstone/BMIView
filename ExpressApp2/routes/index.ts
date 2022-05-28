/*
 * GET home page.
 */
import express = require('express');
const router = express.Router();

router.get('/', (req: express.Request, res: express.Response) => {
    res.render('index', { title: 'BMI', bminb:'88.86', petname: 'Mr. Nash'});
});

export default router;