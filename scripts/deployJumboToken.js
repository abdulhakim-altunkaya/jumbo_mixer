
const hre = require("hardhat");

async function main() {
  const JumboToken = await hre.ethers.getContractFactory("JumboToken");
  //deploying contract with 1 million tokens
  const jumboToken = await JumboToken.deploy(100000000);

  await jumboToken.deployed();

  console.log(`jumboToken  deployed to ${jumboToken.address}`);
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
