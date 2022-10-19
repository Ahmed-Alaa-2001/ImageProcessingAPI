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
    it('Gets the /api/orginal endpoint', async () => {
        const response = await request.get('/api/orginal/?filename=fjord')
        expect(response.status).toBe(200)
    })
    it('Gets the /api/images/ endpoint', async () => {
        const response = await request.get('/api/images/?width=400&height=500&filename=santamonica')
        expect(response.status).toBe(200)
        console.log('\n\ni wasted almost three days to overcome 500 issue if it nessery to be solved spot the problem please\n\n');
    })
})