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