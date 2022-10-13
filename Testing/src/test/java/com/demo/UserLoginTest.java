package com.demo;

import org.testng.annotations.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;

public class UserLoginTest {

	WebDriver driver;
	@Test
	public void user() throws InterruptedException {
		
		driver.get("http://localhost:4200/user");
		
		//Login
		//Used my own credentials to login
		driver.findElement(By.cssSelector("#exampleInputEmail1")).sendKeys("user");
		Thread.sleep(4000);
		driver.findElement(By.cssSelector("#exampleInputPassword1")).sendKeys("user");
		Thread.sleep(4000);
		driver.findElement(By.cssSelector("body > app-root > app-user-login > div > div > div > div > div > form > button")).submit();	
		
	}
	@BeforeMethod
	public void beforeMethod() {
		
		System.setProperty("webdriver.chrome.driver", "D:\\SimpliLearn\\selenium drivers\\chromedriver_win32\\chromedriver.exe");
		driver= new ChromeDriver();
	}
	@AfterMethod
	public void afterMethod() {
		//driver.close();
		driver=null;
	}
	
	
}