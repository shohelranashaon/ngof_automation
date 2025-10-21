import AccountObjects from "../locators/accountObject";

export default class Account{

        constructor(page){

            this.page= page;
            this.locator = new AccountObjects(page);
        }

        async enterEmail(email){

            await this.locator.email.fill(email);
        }

        async enterPassword(password){

            await this.locator.enterPassword.fill(password);
        }


        async clickButtonLogin(){

            await this.locator.clickButtonLogin.click();
        }

        async clickButtonHrm(){

            await this.locator.clickButtonHrm.click();
        }

        async clickButtonEmployee(){
            await this.locator.clickButtonEmployee.click();
        }

}