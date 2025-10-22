export default class AccountObjects{

    constructor(page){

        this.page =page;
        this.email= this.page.locator("//input[@name='email']");
        this.enterPassword = this.page.locator("//input[@name='password']");
        this.clickButtonLogin= this.page.locator("//button[contains(.,'Login')]");
        this.clickButtonHrm =this.page.locator("//span[normalize-space()='HRM']");
        this.clickButtonEmployee = this.page.locator("//a[normalize-space()='Employee']");
        this.addNewEmployee = this.page.locator("//i[@class='ti ti-plus']")
        this.enterEmployeeName = this.page.locator("//input[@id='name']");
        this.enterPhoneNumber = this.page.locator("//input[@id='phone']");
        this.enterEmailAddress = this.page.locator("//input[@id='email']");
        this.enterPassword =this.page.locator("//input[@id='password']");


    }




}