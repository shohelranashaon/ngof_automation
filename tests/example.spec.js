
import {test} from "@playwright/test";
import Account from "../tests/pages/account.js";

test.describe.configure({mode: "serial" })

test.describe("NGO Forum ERP",()=>{
    let account,page,context;

    // test.beforeEach(async ({page})=>{
    //     account = new Account(page);
    //     await page.goto("https://ngof.4axizerp.com/login");
    // });
        test.beforeAll(async({browser})=>{
            context = await browser.newContext();
            page =await context.newPage();
            account = new Account(page);

            await page.goto("/");

        });

    
    test("Successfully Login with valid Information",async()=>{
        await page.waitForTimeout(2000);
         await account.enterEmail("admin@ngof.org");
         await page.waitForTimeout(5000);
         await account.enterPassword("11112222");
         await page.waitForTimeout(5000);
         await account.clickButtonLogin();        
    });

    // test("Verify HRM button expands Menu Successfully",async ()=>{


    //     await account.clickButtonHrm();
    //     await account.clickButtonEmployee();
    //     await page.pause()



    // });

    
    

});

