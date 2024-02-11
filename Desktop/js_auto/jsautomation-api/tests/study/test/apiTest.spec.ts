import { test,expect } from "@playwright/test";

test.describe.serial("API TESTS",()=>{
    // test("Testing Api 1",async ({request})=>{
    //     let result = await request.get("http://localhost:3000/users")
    //     let data = await result.json()
    //     expect(result.ok()).toBeTruthy()
    //     // expect(data).toEqual(expect.arrayContaining([
    //     //     {
    //     //         id:"1",
    //     //         name:"Ilya"
    //     //     },
    //     //     {
    //     //         id:"2",
    //     //         name:"Vadim"
    //     //     },
    //     //     {
    //     //         id:"3",
    //     //         name:"Alex"
    //     //     }
    //     // ]));
    // })
    
    // test("Testing Api 2",async ({request})=>{
    //     let result = await request.get("http://localhost:3000/users/2")
    //     let data = await result.json()
    //     expect(result.ok()).toBeTruthy()
    //     // expect(data).toEqual(expect.objectContaining(
    //     //     {
    //     //         id:"2",
    //     //         name:"Vadim"
    //     //     }
    //     // ));
    // })
    
    // test("Testing Api 3",async ({request})=>{
    //     let result = await request.delete("https://reqres.in/api/users/2")
    //     expect(result.status()).toBe(204)
    // })

    test("Testing Api 404 response",async ({request})=>{
        let result = await request.get("https://reqres.in/api/users/23")
        expect(result.status()).toBe(404)
    })

    test("Testing Api single user",async ({request})=>{
        let result = await request.get("https://reqres.in/api/users/2")
        expect(result.status()).toBe(200)
        let responseBody = await result.json()
        expect(responseBody.data.email).toBe("janet.weaver@reqres.in")
        expect(responseBody.data.first_name).toBe("Janet")
        expect(responseBody.data.last_name).toBe("Weaver")
    })
})



