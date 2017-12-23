import {Request, Response, NextFunction} from "express"

const controlador = {
	home: (req: Request, res: Response, next: NextFunction) => {
		res.render("home")
	}
}

export {controlador}