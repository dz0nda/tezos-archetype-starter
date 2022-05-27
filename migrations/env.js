exports.env = {
  stages: {
    mockup: {
      id: "mockup",
      quiet: true,
      endpoint: "mockup",
      originator_alias: "alice",
      owner_address: "tz1VSUr8wwNhLAzempoch5d6hLRiTh8Cjcjb",
    },
    privatenet: {
      id: "private",
      quiet: false,
      endpoint: "http://localhost:20000",
      originator_alias: "bob",
      owner_address: "tz1aSkwEot3L2kmUvcoxzjMomb9mvBNuzFK6",
    },
    testnet: {
      id: "test",
      quiet: false,
      endpoint: "https://ithacanet.ecadinfra.com",
      originator_alias: "alice",
      owner_address: "tz1VSUr8wwNhLAzempoch5d6hLRiTh8Cjcjb",
    },
    mainnet: {
      id: "main",
      quiet: false,
      endpoint: "https://mainnet-node.madfish.solutions",
      originator_alias: "",
      owner_address: "",
    },
  },
  contracts: {
    MyContract: {
      id: "MyContract",
      path: "./contracts/MyContract.arl",
      metadata: "./metadata/MyContract.json",
    },
  },
};
