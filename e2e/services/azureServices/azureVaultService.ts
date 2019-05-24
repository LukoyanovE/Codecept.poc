
export class AzureVaultService {

    async fakeFunction(): Promise<void> {
        console.log('return a void');
        return;
    }

    async getSomeText(): Promise<string> {
        await this.fakeFunction();
        console.log('void returned');
        return Promise.resolve('Locators');
    }

}
