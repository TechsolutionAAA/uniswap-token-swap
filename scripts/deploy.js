const hre = require('hardhat');

async function main() {
  const NappyToken = await hre.ethers.getContractFactory('NappyToken');
  const nappyToken = await NappyToken.deploy();

  await nappyToken.deployed();

  console.log('NappyToken deployed to:', nappyToken.address);

  const Uniswap = await hre.ethers.getContractFactory('Uniswap');
  const uniswap = await Uniswap.deploy(nappyToken.address);

  await uniswap.deployed();

  console.log('Uniswap Token deployed to:', uniswap.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
