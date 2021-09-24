import { Given, When, Then } from '@wdio/cucumber-framework';
const {should} = require("chai");

// Scenario: Login with Valid credentials
Given (/^I am on Cava Account Page$/, function (){
    browser.url("https://d1yet6b2d0b6dn.cloudfront.net/stores");
    $('//a[@class="header__menu-item header__menu-item--left"]').click();
 });
When (/^I enter valid credentials$/,function (){
    $('//input[@type="text"]').addValue("vblankinship@peakactivity.com");
    $('//input[@type="password"]').addValue("Cava2021!");
    $('//button[@class="login__button"]').click();
});
Then (/^I should be able to Sign In successfully$/, function (){
    $('//span[@class="store-card__header__text"]').getText();

});

When (/^I click on account icon$/, function (){
    $('//a[@class="header__menu-item header__menu-item--left"]').click();

});
Then (/^I should be able to logout$/, function (){
    $('//button[@class="account-quick-nav__link-item"]').click();
    browser.pause(3000);
    $('//span[@class="store-card__header__text"]').getText();
});

// // Scenario: Login with invalid credentials


When (/^I enter invalid credentials$/,function (){
    $('//input[@type="text"]').addValue("vblankinship@peakactivity.com");
    $('//input[@type="password"]').addValue("Cava!");
    $('//button[@class="login__button"]').click();
});

Then (/^I should see a message saying The email address or password you provided is incorrect$/, function(){
   $('//span[@class="response-errors__message"]').getText();
});

//Scenario: Forgot your password

When (/^I click on Forgot you password$/, function (){
    $('//button[@class="login__secondary-action"]').click();
});
Then (/^I should see the option to reset your Password$/, function (){
    $('//input[@type="text"]').addValue('test@test.com');
    $('//button[@class="login__button"]').click();
    browser.pause(5000);
});
//Scenario: My Profile
Given (/^I log in with Valid Credentials$/, function (){
    browser.url("https://d1yet6b2d0b6dn.cloudfront.net/stores");
    $('//a[@class="header__menu-item header__menu-item--left"]').click();
    $('//input[@type="text"]').addValue("vblankinship@peakactivity.com");
    $('//input[@type="password"]').addValue("Cava2021!");
    $('//button[@class="login__button"]').click();
   });
Then (/^I click on My profile button$/, function(){
    $('//a[@class="header__menu-item header__menu-item--left"]').click()
    });

When  (/^I click My profile option$/,function (){
    $('(//li[@class="account-quick-nav__link"])[1]').click();


});
Then (/^I should see the update Details button$/, function (){
    $('//button[@class="login__button"]').isDisplayed();
});

//Scenario: Search by city
When (/^I enter Washington is search box$/, function (){
    const searchBar = $('//input[@class="stores-search-bar__input"]');
    searchBar.click()
    searchBar.setValue("Washington")
    $('//button[@class="stores-search-bar__submit"]').click();
});
Then (/^I should be able to see the stores available$/, function(){
    $('(//span[@class="store-card__header__text"])[1]').getText();
});

//Scenario: search by city as Guest
Given (/^I landed in Cava home page$/, function (){
    browser.url("https://d1yet6b2d0b6dn.cloudfront.net");
});
When (/^I enter washington and click search$/, function(){
    const searchBar = $('//input[@class="stores-search-bar__input"]');
    searchBar.click()
    searchBar.setValue("Washington")
    $('//button[@class="stores-search-bar__submit"]').click()
});
//Scenario: Select the Lab location
Then (/^I click on lab location$/, function (){
    $('(//h1[@class="store-card__header"])[1]').click();
});
//Scenario: Create an order
When (/^I select pitas$/, function(){
    $('(//li[@class="menu-navigation__item"])[2]').waitForClickable({timeout:10000});
});
Then (/^I choose Greek Chicken$/, function(){
    $('(//button[@class="MenuEntreeProduct__buy-btn"])[12]').click();
});
When (/^I click on add to Bag$/, function (){
    $('//button[@class="menu-product-controls__add-btn"]').click();
});
Then (/^I should be able to click on go to checkout$/, function (){
    $('//button[@class="BagActions__checkout-btn"]').click()
});
When (/^I click on in Store then select a day and time, no Bag$/, function(){
   $('(//label[@class="RadioButtons__label"])[1]').click();
   $('//button[@class="Dropdown__faceplate"]').click();
   $('(//button[@class="Dropdown__options__item__button"])[1]').click();
   $('(//button[@class="Timeslot"])[1]').click();
   $('//label[@class="RadioButtons__label RadioButtons__label--selected"]').click();

});
Then (/^I submit the order to LAB location$/, function (){
    $('//button[@class="Checkout__checkout-btn Checkout__checkout-btn--large"]').click();
    $('//h1[@class="order-confirmation__screen-header"]').getText();
});
//Scenario: Create an account

Given (/^I landed in Home Page$/, function (){
    browser.url("https://d1yet6b2d0b6dn.cloudfront.net/stores");
});
When (/^I click on account silhouette$/, function (){
    $('//a[@class="header__menu-item header__menu-item--left"]').click();
});
Then (/^I click on New to the CAVA App Sign Up$/, function (){
    $("//button[contains(text(),'Sign Up')]").click();
   
});
When (/^I Enter Valid Name Last Name email address Password and confirmation contact number and DOB$/, function (){
    $("//body/div[@id='app']/div[1]/div[1]/form[1]/div[1]/div[2]/div[1]/input[1]").setValue("Dharav");
    $("//body/div[@id='app']/div[1]/div[1]/form[1]/div[1]/div[2]/div[1]/input[2]").setValue("Patel");
    $("//body/div[@id='app']/div[1]/div[1]/form[1]/div[1]/div[2]/div[1]/input[3]").setValue("dpatel@peakactivity.com");
    $("//body/div[@id='app']/div[1]/div[1]/form[1]/div[1]/div[2]/div[1]/input[4]").setValue("Peakactivity1");
    $("//body/div[@id='app']/div[1]/div[1]/form[1]/div[1]/div[2]/div[1]/input[5]").setValue("Peakactivity1");
    $("//body/div[@id='app']/div[1]/div[1]/form[1]/div[1]/div[2]/div[1]/input[6]").setValue("6146205859");
    $("//body/div[@id='app']/div[1]/div[1]/form[1]/div[1]/div[2]/div[1]/input[7]").setValue("03/04");
});
Then(/^I click on Im at least 18 years old and agree to CAVA Terms Conditions and Reward Terms Conditions$/, function (){
    $('//input[@class="Checkbox__input"]').click();
});
When(/^I click on Create account$/, function (){
    $("//button[contains(text(),'Create an Account')]").click();
});
Then (/^I should be able to log in successfully$/, function () {
    browser.url("https://d1yet6b2d0b6dn.cloudfront.net/stores");
    $("//header/div[3]/a[1]/*[1]").click();
    $('//input[@type="text"]').addValue("dpatel@peakactivity.com");
    $('//input[@type="password"]').addValue("Peakactivity1");
    $('//button[@class="login__button"]').click();
});
//Scenario: Invalid Account Creation

Given (/^I landed in Home Page$/, function (){
    browser.url("https://d1yet6b2d0b6dn.cloudfront.net/stores");
    browser.pause(3000);
});

When (/^I click on account silhouette$/, function (){
    $('//a[@class="header__menu-item header__menu-item--left"]').click();
});
Then (/^I click on New to the CAVA App Sign Up$/, function (){
    $("//button[contains(text(),'Sign Up')]").click();
   
});
When (/^I Enter invalid Name Last Name email address Password and confirmation contact number and DOB$/, function (){
    $("//body/div[@id='app']/div[1]/div[1]/form[1]/div[1]/div[2]/div[1]/input[1]").setValue("D");
    $("//body/div[@id='app']/div[1]/div[1]/form[1]/div[1]/div[2]/div[1]/input[2]").setValue("Patel");
    $("//body/div[@id='app']/div[1]/div[1]/form[1]/div[1]/div[2]/div[1]/input[3]").setValue("dpatel@peakactivity.com");
    $("//body/div[@id='app']/div[1]/div[1]/form[1]/div[1]/div[2]/div[1]/input[4]").setValue("Peakactivity1");
    $("//body/div[@id='app']/div[1]/div[1]/form[1]/div[1]/div[2]/div[1]/input[5]").setValue("Peakactivity1");
    $("//body/div[@id='app']/div[1]/div[1]/form[1]/div[1]/div[2]/div[1]/input[6]").setValue("6146205859");
    $("//body/div[@id='app']/div[1]/div[1]/form[1]/div[1]/div[2]/div[1]/input[7]").setValue("03/04");
});
Then (/^I click on Im at least 18 years old and agree to CAVA Terms Conditions and Reward Terms Conditions$/, function (){
    $('//input[@class="Checkbox__input"]').click();
});
When (/^I click on Create account$/, function (){
    $("//button[contains(text(),'Create an Account')]").click();
});

Then (/^I should not be able to create an account$/, function(){
    $('//span[@class="response-errors__message"]').isDisplayed();

});


//Scenario: Add payment method

Given (/^I landed on my account$/, function (){
    browser.url("https://d1yet6b2d0b6dn.cloudfront.net/");
    $('//a[@class="header__menu-item header__menu-item--left"]').click();
    $('//input[@type="text"]').addValue("vblankinship@peakactivity.com");
    $('//input[@type="password"]').addValue("Cava2021!");
    $('//button[@class="login__button"]').click();
});

When (/^I click on account silhouette$/, function (){
    $('//a[@class="header__menu-item header__menu-item--left"]').click();
});

Then(/^I land in my account page$/, function (){
    browser.pause(1000);
});

When (/^I click on payment$/, function (){
    $("//a[text()='Payment']").click();
});

Then(/^I land in payment page$/, function (){
    $('//h1[@class="account-page__primary-heading"]').isDisplayed();

});

When (/^I click on add new payment method$/, function (){
    $("//button[@class='account-page__add-payment-btn']").click();
});

Then(/^I should be able to add Card Number 4111111111111111 Date 1025 and ccv 567$/, function (){
    $('//input[@name="cardnumber"]').setValue("4111111111111111");
    $('//input[@name="cvc"]').setValue("567");
    $('//input[@name="exp-date"]').setValue("10/25");
    $('//input[@name="postalCode"]').setValue("12345");
});

When (/^I click on confirm$/, function (){
    $("//button[@type='submit']").click();
});

Then(/^I should be able to see the card saved$/, function (){

});


//Scenario: Remove payment method

Given (/^I login with Valid credentials$/, function (){
    browser.url("https://d1yet6b2d0b6dn.cloudfront.net/stores");
    $('//a[@class="header__menu-item header__menu-item--left"]').click();
    $('//input[@type="text"]').addValue("vblankinship@peakactivity.com");
    $('//input[@type="password"]').addValue("Cava2021!");
    $('//button[@class="login__button"]').click();
});

When (/^I click on Payments from my account page$/, function (){
    $('//a[@class="header__menu-item header__menu-item--left"]').click();
    $("//a[text()='Payment']").click();  
});

Then (/^I should be able to see and click on remove card$/, function (){
    $("//button[@class='account-page__remove-payment-btn']").click();
});   
