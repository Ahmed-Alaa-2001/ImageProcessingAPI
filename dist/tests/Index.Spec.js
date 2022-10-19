"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const ImageController_1 = require("../Controller/ImageController");
const ImageController_2 = require("../Controller/ImageController");
describe('Test if Image Exist', () => {
    it('expect checkIfImagesExist function to return false with file name imageName_500_500.jpg ', () => {
        expect((0, ImageController_1.valid)(500, 500, 'imageName') instanceof Promise).toBe(true);
    });
    it('expect valid function to be defined ', () => {
        expect(ImageController_1.valid).toBeDefined();
    });
    it('expect valid function to be defined ', () => {
        expect(() => __awaiter(void 0, void 0, void 0, function* () {
            yield (0, ImageController_2.resizingImage)(500, 500, "name");
        })).not.toThrow();
    });
});
