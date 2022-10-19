import { Request, Response} from 'express';

const getHome = (req: Request, res: Response) => {
    res.send("Welcome to our program");
}
// export default getHome;
export {getHome}
