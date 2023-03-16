import supertest from 'supertest'
import app from '../src/app'
/*function sum(a,b){
    return a + b
}

test('sumar a + b', () =>{
    expect(sum(1,2)).toBe(3)
})*/
describe('Index route', () =>{
    it('should return an empty object', async () =>{
        // acá va el códgio de la prueba
        //1.- Llamar a la api
        const res = await supertest(app).get('/products')
        
        //2. esperar que el resultado  sea un objeto vacío
        expect(res.statusCode).toEqual(200)
    })
})