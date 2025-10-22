
import {test} from "@playwright/test";
import Account from "../pages/account.js";
import { generateRandomName } from "../../Utilities/helper.js";

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
         await page.waitForTimeout(3000);
         await account.enterPassword("11112222");
         await page.waitForTimeout(5000);
         await account.clickButtonLogin();        
    });



    test("Verify HRM button expands Menu Successfully",async ()=>{


        await account.clickButtonHrm();
        await page.waitForTimeout(2000);
        await account.clickButtonEmployee();
        // await page.pause()



    });


    test("New Employee plus Button works properly",async()=>{

        await account.addNewEmployee();

    });

    test("Insert New Employee Successfully",async()=>{

        await account.enterEmployeeName();

        // await page.pause();

    });

    test("Insert Employee Email Successfully",async()=>{

        await account.enterEmailAddress();

        // await page.pause();
    });

    test("Insert Number Successfully",async()=>{
         await account.enterPhoneNumber();
         await page.pause();

    });

    
    

});

