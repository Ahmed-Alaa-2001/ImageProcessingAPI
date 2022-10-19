"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ImageController_1 = require("../Controller/ImageController");
const express_validator_1 = require("express-validator");
const imageNames = ['fjord', 'encenadaport', 'palmtunnel', 'santamonica', 'icelandwaterfall'];
const router = (0, express_1.Router)();
router.get('/images', (0, express_validator_1.query)('height')
    .exists()
    .withMessage('the height is required')
    .toInt()
    .isInt({ max: 1000, min: 100 })
    .withMessage('range of the height should be [ 100, 1000 ]'), (0, express_validator_1.query)('width')
    .exists()
    .withMessage('width is required')
    .toInt()
    .isInt({ max: 1000, min: 100 })
    .withMessage('range of the width should be [ 100, 1000 ]'), (0, express_validator_1.query)('filename')
    .exists()
    .withMessage('Image name is required')
    .isIn(imageNames)
    .withMessage('image is not exist'), ImageController_1.getResizedImage);
router.get('/orginal', (0, express_validator_1.query)('filename')
    .exists()
    .withMessage('Imge name is required')
    .isIn(imageNames)
    .withMessage('image is not exist'), ImageController_1.getOrginalImage);
router.get('/', ImageController_1.getApi);
exports.default = router;
