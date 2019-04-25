pragma solidity ^0.4.17; 

contract Inbox {
    // two public functions associated with the JSON
    // methods object
    // setMessage and getMessage (automatically created when
    // we declare message as public) 
    string public message; 

    function Inbox(string initialMessage) public {
        message = initialMessage; 
    }

    function setMessage(string newMessage) public {
        message = newMessage; 
    }
}
