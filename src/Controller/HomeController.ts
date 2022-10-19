import { Request, Response} from 'express';

const getHome = (req: Request, res: Response) => {
    res.status(200).send("Welcome to our program");
}
// export default getHome;
export {getHome}
