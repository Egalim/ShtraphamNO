import { sql } from "../db.js"

export async function uploadFiles(req, res) {
    const { numberCar, addres, date, image, userId } = req.body
    const data = await sql`insert into Requests (numberCar, addres, date, image, userId, statusId) values (${numberCar}, ${addres}, ${date}, ${image}, ${userId}, 1)`
    res.send(data)
}
