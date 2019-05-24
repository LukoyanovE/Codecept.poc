import { AzureVaultService } from '../services/azureServices/azureVaultService';

class MyHelper extends Helper {

  async getNonProdPassword(): Promise<string> {
    const azureVault: AzureVaultService = new AzureVaultService();
    const password: string = await azureVault.getSomeText();
    return Promise.resolve(password);
  }

}

// use this variant
module.exports = MyHelper;

// or this variant, directly in declaration:
// module.exports = class MyHelper extends Helper {
