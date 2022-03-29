import * as secrets from "oci-secrets";
import common = require("oci-common");


const secretIdOci = "<secretId>";
const filePath = "<oci-config>";
const profile = "<Profile>";

const provider: common.ConfigFileAuthenticationDetailsProvider = new common.ConfigFileAuthenticationDetailsProvider(filePath, profile);

getSecret();

async function getSecret(){
  try {

    // Create a service client
    const client = new secrets.SecretsClient({ authenticationDetailsProvider: provider });

    // Create a request and dependent object(s).
    const getSecretBundleRequest: secrets.requests.GetSecretBundleRequest = {
      secretId: secretIdOci,
      stage: secrets.requests.GetSecretBundleRequest.Stage.Current
    };

    // Send request to the Client.
    const getSecretBundleResponse = await client.getSecretBundle(getSecretBundleRequest);
    console.log(getSecretBundleResponse.secretBundle)
  } catch (error) {
    console.log("getSecretBundle Failed with error  " + error);
  }
};