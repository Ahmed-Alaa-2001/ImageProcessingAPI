import { valid } from "../Controller/ImageController";
import { resizingImage } from "../Controller/ImageController"

describe('Test if Image Exist', () => {
    it('expect checkIfImagesExist function to return false with file name imageName_500_500.jpg ', () => {
        expect(valid(500, 500, 'santamonica') instanceof Promise).toBe(true)
    })
    it('expect valid function to be defined ', () => {
        expect(valid).toBeDefined()
    })
    it('Check resizingImage is valid', () => {
        expect(async () => {
            await resizingImage(500, 500, "santamonica");
        }).not.toThrow();
    })
})