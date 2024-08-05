import { localConf } from "./local.conf.js";
import { sauceConf } from "./sauce.conf.js";

import "dotenv/config";

function getConfig() {
  console.log(
    process.env.ENVIRONMENT,
    process.env.PLATFORM,
    process.env.REPORT,
    process.env.SAUCE_USERNAME,
    process.env.SAUCE_ACCESS_KEY
  );

  switch (process.env.ENVIRONMENT) {
    case "local":
      return localConf;
    case "saucelabs":
      return sauceConf;
  }
}

export const config = getConfig();
