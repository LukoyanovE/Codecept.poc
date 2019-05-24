Feature('Overview Scenario');

let password;
const url = `https://codecept.io/`;
const motto = 'h1.motto span';
const search = '.aa-input';

Scenario('Verify Overview Page', async (I) => {
    I.amOutsideAngularApp();
    I.amOnPage(url);
    I.waitForVisible(motto);
    I.seeTextEquals('End 2 End', motto);
    I.waitForVisible(search);
    const locatorText =  await I.getNonProdPassword();
    I.fillField(search, locatorText);
    I.wait(5);
    I.click('Guides');
});
