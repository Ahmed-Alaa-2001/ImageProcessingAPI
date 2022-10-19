import { Request, Response, NextFunction } from 'express';

const getHome = (req: Request, res: Response, next: NextFunction) => {
    res.send("Welcome to our program");
}
// export default getHome;
export {getHome}
