
const hre = require("hardhat");

async function main() {
  const JumboMixer = await hre.ethers.getContractFactory("JumboMixer");
  const jumboMixer = await JumboMixer.deploy();
  await jumboMixer.deployed();
  console.log(`JumboMixer  deployed to ${jumboMixer.address}`);
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
