export default class AccountObjects{

    constructor(page){

        this.page =page;
        this.email= this.page.locator("//input[@name='email']");
        this.enterPassword = this.page.locator("//input[@name='password']");
        this.clickButtonLogin= this.page.locator("//button[contains(.,'Login')]")



    }




}