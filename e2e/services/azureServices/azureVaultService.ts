
export class AzureVaultService {

    async makeAzureRequest(): Promise<void> {
        console.log('Start a fake 5 second delay');
        return new Promise((resolve) => setTimeout(() => resolve, 5000));
    }

    async getNonProdPassword(): Promise<string> {
        await this.makeAzureRequest();
        console.log('END a fake 5 second delay');
        return Promise.resolve('Locators');
    }

}
