import express from "express"
import { Request, Response } from "express"

export default function ContactsRouter() {
    const router = express.Router()

    router.get("/", async (req: Request, res: Response) => {
        try {
        } catch (err) {
            res.status(500).send({ message: `Error fetching data ${err}` })
        }
    })
}
