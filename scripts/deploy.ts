import { ethers } from "hardhat";
import verifyContract from "./verify";

async function main() {
  const campaignfactory = await ethers.deployContract("CampaignDeployer");
  const deployedContract = await campaignfactory.waitForDeployment();

  console.log(deployedContract.target)

  await sleep(180000);

  await verifyContract(deployedContract.target);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
