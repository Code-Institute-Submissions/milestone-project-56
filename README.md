# Fly Away

Milestone Project 2 - Interactive Frontend Deployment

This website is a destination booking page. Where you pick a country, and view which package you want to go for. Theres 3 attractions for each package/country. You can find a demo to the website [here.](https://amit238.github.io/milestone-project-2/)

# UX

My goal in the design was to make website very easy to use website. The website only contains one page and it goes in a "step by step" order. From the title, to viewing the map, then to viewing what packages we do for each country, and then finally enquiring using the contact form on what package the user wants.

Using all the skills i learnt on my last project (User-Centric Frontend) i was able to make it responsive. Javascript is also implemented throughout my page. It is used to view markers on the Google Maps API

####  User Stories

A new user can input a location on the search to see and find what countries we are flying too. A user can select the countries using a dropdown box. Once clicked you are able to see what activities we are providing for each country. 

##### Strategy

The main focus of this webpage was to create a user-friendly webpage where users can view the destinations and activities we are doing for each country and for them to be able to enquire with us.

##### Scope

The scope of the webpage is for users to easily view what destinations were flying too, view the activities/packages were providing for each page and being able to enquire about a certain destination.

##### Structure

The structure of my dropdown box will display 3 cards for each country. These cards will provide activities for each selected country. Once another country it clicked. The previous country will no longer show but the new one clicked will be visible.

##### Skeleton

All my Wireframe can be viewed in my *Technologies Used* section.

##### Surface

I focused on giving my page a very light look. By using colours that resemble the "outdoors" for example, using blue for that sea/clear sky look.

# Features

##### Existing Features

* Home - User is introduced to a map to see what countries we have to offer.
* Packages - Users are able to view all the packages we are offering for each country.
* Contact Form - Users can use the contact form to email us about what country/package they would like to go for.

##### Features left to Implement

* Give the bootstrap cards a more authentic/interactive look
* Make the markers on map clickable for users to be able view information about the selected country/city

# Technologies Used

##### 1. HTML
* Used to create the website.

##### 2. CSS
* This was used to style the website.

##### 3. Font Awesome
* Used to put icons throughout the website.


##### 4. Bootstrap v. 4.2.1
* Bootstrap Grid that I have deployed throughout the website, for it to be responsive on all platforms. 
* Bootstrap Cards that I have also deployed throughout the website, to give it a more aesthetic look.
* Bootstrap Form

##### 5. Javascript

* Added a Map with markers (Google Maps Places Javascript API)
* Used to make my Dropdown box, Navbar and Contact Form (EmailJS)


##### 6. Wireframes

* Used to create template of my project.

My Wireframe can be seen here

[Desktop](https://wireframe.cc/a3mXEu)

[Tablet](https://wireframe.cc/bgubF8)

[Mobile](https://wireframe.cc/Nyrlf8)

# Testing

I used AWS Cloud 9 to create my webpage. 

I used the following to test if my code works:

* https://validator.w3.org to validate my HTML
* https://jigsaw.w3.org/css-validator to validate my CSS
* https://jshint.com/ to validate my Javascript

These test were done throughout my project from start to finish.

I have tested my webpage on:

* Internet Explorer
* Safari
* Mozilla Firefox
* Google Chrome

I created my web page on Google Chrome, with this i was able to use their developer tools to view my HTML or CSS, or even to find any console errors throughout my webpage. It was also used to see how my webpage looked in different screen sizes.

I was able to view my webpage on these devices:

* Moto G4
* Galaxy S5
* Pixel 2
* Pixel 2 XL
* iPhone 5/SE
* iPhone 6/7/8
* iPhone 6/7/8 Plus
* iPhone X
* iPad
* iPad Pro

##### Testing Links

My aim was to make every link on my webpage go to another tab. I was able to do this by adding `target=_blank"` to my any links in my HTML.

The 'required' attribute were added to the 'Name' 'Phone Number' and 'Email' fields, so if those fields are not filled in, the form will not submit.

##### Debugging

While i was working on this project i did run through a few minor issues.

One issue was that my map was not showing up, by simply adding a height class to it. I was able to make my map visible on the page. 

# Deployment 

I created a repository on GitHub. By doing this i was able to keep track of every key code i had added on my webpage. 

You can view me GitHub [here](https://github.com/amit238/milestone-project-2)

The initial steps to link my webpage to my repository were as followed:

1. Made my environment using Cloud9.
2. Created all my folders and files.
3. Inside the terminal, I typed the following in this order `ls`, `git init`, `git add .` `git commit` this then created my initial commit.
4. By using `git push` i was then able to link my page to a GitHub repository.

To deploy this website to GitHub pages:

Click on the *milestone-project-2* from my GitHub dashboard.
Select *Settings* from the menu bar.
Scroll down to *GitHub pages* section, I chose *master branch* from the dropdown menu.
Once selected, The page was then refreshed. Then i by scrolling down back to *Github pages* i was able to see a link to my website

Here is a link to my deployed website. [My Website](https://amit238.github.io/milestone-project-2/);

**To run this project locally**

* Go to my [GitHub Repository](https://github.com/amit238/milestone-project-2)
* On the right hand side you will be able to see a *Clone or download* dropdown button. Click that.
* Copy the URL provided from the dropdown.
* Open up a terminal, move it to the directory you want.
* Type `git clone` and paste the URL

# Credits

* To my mentor in helping me find a good responsive look on my text.
* [StartBootstrap](https://startbootstrap.com/themes/clean-blog/) for providing me with my Navbar and the theme in the background.
* [W3Schools](www.w3schools.com) for helping me with my HTML CSS and Javascript.
* Using a Google Maps API to help me implement a map on my webpage.
* Using EmailJS to connect my contact form with an actual email.

##### Media

All the images i used for my webpage came from Google images.

##### Content

All the information about each activity and country came from Wikipedia.

# Acknowledgements

Had inspirations to do this as I love travelling and would one day love to go to all the countries I have displayed on my webpage.