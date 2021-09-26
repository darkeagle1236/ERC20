const MyToken = artifacts.require("./MyToken.sol");

contract("MyToken", accounts => {
  it("...should store the value 89.", async () => {
    const myToken = await MyToken.deployed();

    assert.equal(myToken.address, accounts[0], "The initial supply was not right");
  });
});
