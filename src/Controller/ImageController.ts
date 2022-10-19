import { Request, Response} from 'express';
import { validationResult} from 'express-validator';
import sharp from 'sharp'
import fs from 'fs-extra'
import path from 'path';

const output: string = path.resolve(__dirname, '../assets/images/thumbnails')
const input: string = path.resolve(__dirname, '../assets/images')

// const getImage = (req: Request, res: Response, next: NextFunction) => {

// }
const valid = async (width: number, height: number, filename: string): Promise<boolean> => {
    try {
        await fs.ensureDir(output)
        return await fs.pathExists(`${output}/${filename}_${width}_${height}.jpg`)
    } catch (error) {
        throw new Error('File not exists in the output folder')
    }
}

const getApi = (req: Request, res: Response):void => {
    res.send("go to image Api");
}
const resizingImage = async (width: number, height: number, filename: string): Promise<void> => {
    const isImageExist = await valid(width, height, filename)
    if (!isImageExist) {
        await sharp(`${input}/${filename}.jpg`).resize(Number(width), Number(height)).toFile(`${output}/${filename}_${width}_${height}.jpg`)
    }
}

const getResizedImage = async (req: Request, res: Response) => {
    const height: number = parseInt(req.query.height as string, 10)
    const width: number = parseInt(req.query.width as string, 10)
    const filename: string = req.query.filename as string
    if (validationResult(req).isEmpty()) {
        try {
            resizingImage(width, height, filename);
            // console.log(req.flash("validationErrors"));
            res.render('resizeImage', {
                validationErrors: req.flash("validationErrors"),
                width,
                height,
                thumbnail: `${filename}_${width}_${height}.jpg`
            })
        } catch (err: unknown) {
            req.flash('authError',err as string );
            console.log(err);
            res.render('resizeImage', {
                validationErrors: req.flash("validationErrors"),
                width,
                height,
                authError: req.flash("authError")[0]
            })
        }
    }
    else {
        req.flash("validationErrors",validationResult(req).array() as unknown as string);
        res.render('resizeImage', {
            validationErrors: req.flash("validationErrors"),
            thumbnail: `${filename}_${width}_${height}.jpg`,
            width,
            height
        })
    }
}
const getOrginalImage= async (req: Request, res: Response) => {
    // get query parameters
    const name: string = req.query.filename as string
    if (validationResult(req).isEmpty()) {
        try {
            res.render('index', {
                thumbnail: `${name}.jpg`,
                validationErrors: req.flash("validationErrors")
            })
        } catch (err: unknown ) {
            req.flash('authError', err as string);
            res.render('index', {
                thumbnail: `${name}.jpg`,
                validationErrors: req.flash("validationErrors")
            })
        }
    }
    else {
        req.flash("validationErrors", validationResult(req).array() as unknown as string);
        res.render('index', {
            thumbnail: `${name}.jpg`,
            validationErrors: req.flash("validationErrors")
        })
    }
}
export { getApi,valid,getResizedImage,getOrginalImage,resizingImage };