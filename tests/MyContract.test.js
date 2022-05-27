const {
  setQuiet,
  setEndpoint,
  getAccount,
  deploy,
  expectToThrow,
} = require("@completium/completium-cli");

const { errors } = require("./utils");

// accounts
let alice;
let bob;

// contracts
let MyContract;

beforeAll(() => {
  // completium configs
  setQuiet("true");
  setEndpoint("mockup");
  alice = getAccount("alice");
  bob = getAccount("bob");
});

describe("MyContract Tests", () => {
  test("Contract deployment should succeed", async () => {
    [MyContract] = await deploy("./contracts/MyContract.arl", {
      parameters: {
        owner: alice.pkh,
      },
      as: alice.pkh,
    });
  });

  describe("Owner Functions", () => {
    test("Transfer ownership as non owner should fail", async () => {
      await expectToThrow(async () => {
        await MyContract.setOwner({
          arg: {
            newOwner: bob.pkh,
          },
          as: bob.pkh,
        });
      }, errors.INVALID_CALLER);
    });

    test("Transfer ownership as owner should succeed", async () => {
      await MyContract.setOwner({
        arg: {
          newOwner: bob.pkh,
        },
        as: alice.pkh,
      });

      const Storage = await MyContract.getStorage();

      expect(Storage.owner).toBe(bob.pkh);
    });
  });
});
