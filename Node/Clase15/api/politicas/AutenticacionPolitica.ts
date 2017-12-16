import {Request, Response, NextFunction} from "express"

const politica = (req: Request, res: Response, next: NextFunction) => {
	if(req["user"]) {
		return next()
	}

	return res.redirect("/")
}

export {politica}