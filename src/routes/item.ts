import { Request, Response, Router } from "express";

//creación del router
const router = Router();

router.get('/items', (req: Request, res: Response) => {
    res.send({ data: "AQUI_VAN_MODELOS" })
})

export { router };