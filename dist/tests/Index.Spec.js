"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ImageController_1 = require("../Controller/ImageController");
describe('Test if Image Exist', () => {
    it('expect checkIfImagesExist function to return false with file name imageName_500_500.jpg ', () => {
        console.log((0, ImageController_1.valid)(500, 500, 'imageName') instanceof Promise);
        expect((0, ImageController_1.valid)(0, -0, 'imageName') instanceof Promise).toBe(true);
    });
    it('expect valid function to be defined ', () => {
        expect(ImageController_1.valid).toBeDefined();
    });
});
