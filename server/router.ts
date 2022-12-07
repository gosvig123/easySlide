
import express, { Request, response, Response } from 'express';
const router = express.Router();
import createPresentations from './controlers/presentation_controler';
import presentation from './models/presentation';


// create a presentation post request]

router.post('/presentations', (req: Request, res: Response) => {
  console.log(req.body)
  // if status is 200 then send the presentations
  if (req.body !== undefined) {

    createPresentations(req.body, res)

    return res.status(201).json(req.body)
  } else {
    console.log('error')
    return res.status(401).send("error no body")
  }

});





export default router;
