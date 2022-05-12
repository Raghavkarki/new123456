const mongoose=require('mongoose');
const test=require('../models/userModel');
const url='mongodb://127.0.0.1:27017/ApiTesting';

beforeAll(async()=>{
    await mongoose.connect(url, {
        
    })
});
afterAll(async()=>{
    await mongoose.connection.close();
})

//register testing
describe(' testanything', ()=>{
    it('testinganything', ()=>{
        const userTest={
            name: "raghav",
            email:"raghav@gmail.com",
            password:"raghav123",
            avatar:"Hero",            
        }
        return test.create(userTest).then((pro_ret)=>{
            expect(pro_ret.name).toEqual("raghav")
        })
    })
})

//dproductmodel 
beforeAll(async()=>{
    await mongoose.connect(url, {
        
    })
});
afterAll(async()=>{
    await mongoose.connection.close();
})
