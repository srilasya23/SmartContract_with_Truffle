### Truffle Assignment
### Installation of truffle and contract creation

- Install truffle 
- Initialise the project
```sh
truffle init
```
- Create HelloWorld contract
- Helloworld.sol
```sh
// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Helloworld {
    string public message;

    function returnHello() public pure returns(string memory){
        return "hello";
    }
}
```
- 2_helloworld_migrations.js
```sh
const Helloworld = artifacts.require("Helloworld");
module.exports = function(deployer) {
  deployer.deploy(Helloworld);
};
```
- Perform migration and interact with contract using console
```sh
truffle develop
migrate
truffle(develop)> instance.hello()
'hello'
truffle(develop)> 
```

### Migrations Deployment

- Modify contract to add constructor and setMessage
```sh
Helloworld.sol
// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Helloworld {
// for storing owner and message
    address public owner;
    string public message;
    function hello() public pure returns(string memory){
        return "hello";
    }
    constructor (string memory _message){
        owner = msg.sender;
        message = _message;
    }
    function setMessage(string memory _message) public {
        require(owner == msg.sender);
        message = _message;
    }
}
```
- For interacting with another contract we create contract HelloworldPermanent.sol
```sh
truffle(develop)> let instance = await HelloworldPermanent.deployed()
undefined
truffle(develop)> instance.message()
'helloworld called'
truffle(develop)> 
```

## Testing contract with truffle
- Create helloworld_test.js inside tests directory
- Add test cases for Helloworld contract
```sh
Compiling your contracts...
===========================
> Compiling ./contracts/Helloworld.sol
> Artifacts written to /var/folders/z5/g2v084hd0bx_z_9s0b8pvjzm0000gn/T/test--6854-GJgRChBe6aQv
> Compiled successfully using:
   - solc: 0.8.17+commit.8df45f5f.Emscripten.clang


  Contract: Helloworld
    ✔ check hello method
    ✔ verify constructor
    ✔ test case for verify setMessage method (67ms)


  3 passing (154ms)

```

##Deploy on testnet using truffle
Ropsen testnet has been deprecated. Using Goerli testnet
- Install @truffle/hdwallet-provider
- Generate mnemonic using
```sh
npx mnemonics
```
- setup testnet inside truffle-config.js
