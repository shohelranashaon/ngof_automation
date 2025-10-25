import { createPassword, generateRandomEmail, generateRandomName, generateRandomNumber } from "../../Utilities/helper";
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
            await this.page.waitForTimeout(2000);

            await this.locator.buttonHrm.click();

        }

        async clickButtonEmployee(){
            await this.locator.clickButtonEmployee.click();
        }

        async addNewEmployee(){

            await this.locator.addNewEmployee.click();
        }

        async enterEmployeeName(){

            await this.locator.enterEmployeeName.fill(generateRandomName());
        }

        async enterEmailAddress(){
            await this.locator.enterEmailAddress.fill(generateRandomEmail());

        }

        async enterPhoneNumber(){

            await this.locator.enterPhoneNumber.fill(generateRandomNumber());
        }

        async enterPassword(){

            await this.locator.enterPassword.fill(createPassword());
        }

}