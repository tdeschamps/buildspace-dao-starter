import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  process.env.BUNDLE_DROP_ADDRESS,
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Fist of Legend",
        description: "This NFT will give you access to JCVDAO!",
        image: readFileSync("scripts/assets/jcvd_fist.gif"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()
