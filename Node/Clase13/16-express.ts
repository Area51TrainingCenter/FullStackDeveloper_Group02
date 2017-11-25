import express = require("express")
import { Application, Request, Response, NextFunction } from "express"

const app: Application = express()

app.get("/", (req: Request, res: Response, next: NextFunction) => {
	res
		.status(200)
		.type("text/html")
		.sendFile(`${__dirname}/home.html`)

/* 	res.status(200)
	res.type("text/html")
	res.sendFile("./home.html") */
})

app.listen(5000, () => console.log("Servidor ejecutándose en el puerto 5000"))