import { Router } from 'express'
import { getApi, getResizedImage, getOrginalImage } from '../Controller/ImageController';
import { query} from 'express-validator';
const imageNames: string[] = ['fjord', 'encenadaport', 'palmtunnel', 'santamonica', 'icelandwaterfall']
const router = Router();
router.get(
  '/images',
  query('height')
    .exists()
    .withMessage('the height is required')
    .toInt()
    .isInt({ max: 1000, min: 100 })
    .withMessage('range of the height should be [ 100, 1000 ]'),
  query('width')
    .exists()
    .withMessage('width is required')
    .toInt()
    .isInt({ max: 1000, min: 100 })
    .withMessage('range of the width should be [ 100, 1000 ]'),
  query('filename')
    .exists()
    .withMessage('Image name is required')
    .isIn(imageNames)
    .withMessage('image is not exist'),
    getResizedImage
);

router.get(
  '/orginal',
  query('filename')
    .exists()
    .withMessage('Imge name is required')
    .isIn(imageNames)
    .withMessage('image is not exist'),
  getOrginalImage
)

router.get('/', getApi);
export default router;
//module.exports=router