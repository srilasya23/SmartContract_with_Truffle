const Helloworld = artifacts.require('Helloworld')
contract("Helloworld", (accounts)=>{
    it("check hello method", async ()=>{
        let instance = await Helloworld.deployed();
        let message = await instance.hello();
        assert.equal(message, "hello");
    })
    it("verify constructor", async ()=>{
        let instance = await Helloworld.deployed();
        let message = await instance.message();
        assert.equal(message, "helloworld called");
    })
    it("test case for verify setMessage method", async ()=>{
        let newMsg = "new message";
        let instance = await Helloworld.deployed();
        await instance.setMessage(newMsg);
        let message = await instance.message();
        assert.equal(message, newMsg);
    })
})