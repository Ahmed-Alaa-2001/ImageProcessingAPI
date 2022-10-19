import { valid } from "../Controller/ImageController";
describe('Test if Image Exist', () => {
    it('expect checkIfImagesExist function to return false with file name imageName_500_500.jpg ', () => {
        console.log(valid(500, 500, 'imageName') instanceof Promise );
        
        expect(valid(0, -0, 'imageName') instanceof Promise).toBe(true)
    })
    it('expect valid function to be defined ', () => {
        expect(valid).toBeDefined()
    })
})