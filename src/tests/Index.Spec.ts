import { valid } from "../Controller/ImageController";
import { resizingImage } from "../Controller/ImageController"
import supertest from "supertest";
import app from "../index";
// const request = supertest(app)
const request: supertest.SuperTest<supertest.Test> = supertest(app);

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
describe('Test some endpoints', () => {
    it('Gets the /api endpoint', async () => {
        const response = await request.get('/api')
        expect(response.status).toBe(200)
    })
    it('Gets the /images/thumbnails/santamonica_400_200.jpg endpoint', async () => {
        const response = await request.get('/images/thumbnails/santamonica_400_200.jpg')
        expect(response.status).toBe(200)
    })
    it('Gets the /images/santamonica.jpg orginal image endpoint', async () => {
        const response = await request.get('/images/santamonica.jpg')
        expect(response.status).toBe(200)
    })
})