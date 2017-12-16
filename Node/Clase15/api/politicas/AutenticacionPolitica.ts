import {Request, Response, NextFunction} from "express"

const politica = (req: Request, res: Response, next: NextFunction) => {
	if(req["session"]["usuario"]) {
		return next()
	}

	return res.redirect("/")
}

export {politica}