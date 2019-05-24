import { AzureVaultService } from '../services/azureServices/azureVaultService';

export class MyHelper extends Helper {

  async getNonProdPassword(): Promise<string> {
    const azureVault: AzureVaultService = new AzureVaultService();
    const password: string = await azureVault.getNonProdPassword();
    return Promise.resolve(password);
  }

}
