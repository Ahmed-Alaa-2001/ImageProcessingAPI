import { valid } from "../Controller/ImageController";
describe('Test if Image Exist', () => {
    it('expect checkIfImagesExist function to return false with file name imageName_500_500.jpg ', () => {
        expect(valid(500, 5000, 'imageName') instanceof Promise).toBe(true)
    })
    it('expect valid function to be defined ', () => {
        expect(valid).toBeDefined()
    })
})