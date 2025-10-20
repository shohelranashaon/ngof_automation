
import {test} from "@playwright/test";
// import Account from "./pages/account.js";
import Account from "../tests/pages/account.js";



test.describe("NGO Forum ERP",()=>{
    let account;
    test.beforeEach(async ({page})=>{
        account = new Account(page);
        await page.goto("https://ngof.4axizerp.com/login");
    });


    
    test("Successfully Login with valid Information",async({page})=>{
        await page.waitForTimeout(2000);
         await account.enterEmail("admin@ngof.org");
         await page.waitForTimeout(5000);
         await account.enterPassword("11112222");
         await page.waitForTimeout(5000);
         await account.clickButtonLogin();
        
    });

});

