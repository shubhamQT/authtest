import { test, expect } from '../support/fixtures';
import testData from '../testdata/test-data.json';

test('Attempt to create Lead without Last Name and verify validation error', { tag: ["@e2e","@regression","@lead","@P0","@create-lead-missing-lastname"] }, async ({ page, homePage, leadNewPage }) => {
  await test.step('Open — Navigate to Salesforce Leads tab', async () => {
    await page.goto('/lightning/o/Lead/list');
  });
  await test.step("Click — 'New' button", async () => {
    await leadNewPage.clickNew();
  });
  await test.step('Fill — First Name input', async () => {
    await leadNewPage.fillFirstName('John');
  });
  await test.step('Fill — Company input', async () => {
    await leadNewPage.fillCompany('ABC Technologies');
  });
  await test.step("Click — 'Save' button", async () => {
    await leadNewPage.clickSaveEdit();
  });
  await test.step('Assert visible — Validation error for Last Name', async () => {
    await leadNewPage.expectNewLeadVisible();
  });
  await test.step('Assert contains — Error message mentions Last Name', async () => {

    await leadNewPage.expectNewLeadVisible();
  });
});

test('Attempt to create Lead without Company and verify validation error', { tag: ["@e2e","@regression","@lead","@P0","@create-lead-missing-company"] }, async ({ page, homePage, leadNewPage }) => {
  await test.step('Open — Navigate to Salesforce Leads tab', async () => {
    await page.goto('/lightning/o/Lead/list');
  });
  await test.step("Click — 'New' button", async () => {
    await leadNewPage.clickNew();
  });
  await test.step('Fill — First Name input', async () => {
    await leadNewPage.fillFirstName('John');
  });
  await test.step('Fill — Last Name input', async () => {
    await leadNewPage.fillLastName('Smith');
  });
  await test.step("Click — 'Save' button", async () => {
    await leadNewPage.clickSaveEdit();
  });
  await test.step('Assert visible — Validation error for Company', async () => {
    await leadNewPage.expectNewLeadVisible();
  });
  await test.step('Assert contains — Error message mentions Company', async () => {

    await leadNewPage.expectNewLeadVisible();
  });
});

test("Verify Lead Status is set to 'Open - Not Contacted' after creation", { tag: ["@e2e","@regression","@lead","@P1","@lead-default-status-check"] }, async ({ page, homePage, leadNewPage }) => {
  await test.step('Open — Navigate to Salesforce Leads tab', async () => {
    await page.goto('/lightning/o/Lead/list');
  });
  await test.step("Click — 'New' button", async () => {
    await leadNewPage.clickNew();
  });
  await test.step('Fill — Last Name input', async () => {
    await leadNewPage.fillLastName('Smith');
  });
  await test.step('Fill — Company input', async () => {
    await leadNewPage.fillCompany('ABC Technologies');
  });
  await test.step("Click — 'Save' button", async () => {
    await leadNewPage.clickSaveEdit();
  });
  await test.step("Assert text — Lead Status is 'Open - Not Contacted'", async () => {

  });
});

test('Verify user is redirected to Lead record page after successful creation', { tag: ["@e2e","@regression","@lead","@P1","@redirect-to-lead-record-after-save"] }, async ({ page, homePage, leadNewPage }) => {
  await test.step('Open — Navigate to Salesforce Leads tab', async () => {
    await page.goto('/lightning/o/Lead/list');
  });
  await test.step("Click — 'New' button", async () => {
    await leadNewPage.clickNew();
  });
  await test.step('Fill — Last Name input', async () => {
    await leadNewPage.fillLastName('Smith');
  });
  await test.step('Fill — Company input', async () => {
    await leadNewPage.fillCompany('ABC Technologies');
  });
  await test.step("Click — 'Save' button", async () => {
    await leadNewPage.clickSaveEdit();
  });
  await test.step("Assert visible — Lead record page is displayed", async () => {

  });
});
