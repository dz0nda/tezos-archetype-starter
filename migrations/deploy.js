const {
  deploy,
  setEndpoint,
  getAccount,
  setQuiet,
} = require("@completium/completium-cli");

const { env } = require("./env");

const getName = (stage, name) => `${stage}_${name}`;

const network = env.stages[process.env.STAGE || "mockup"];

// Completium config
setEndpoint(network.endpoint);
setQuiet(network.quiet);

// Context
const originator = getAccount(network.originator_alias);

describe("Contracts deployment", () => {
  test("Deploy MyContract contract", async () => {
    const { MyContract } = env.contracts;

    // eslint-disable-next-line no-undef
    [myContract, _] = await deploy(MyContract.path, {
      named: getName(network.id, MyContract.id),
      parameters: {
        owner: originator.pkh,
      },
      metadata_storage: MyContract.metadata,
      as: originator.pkh,
    });
  });
});
