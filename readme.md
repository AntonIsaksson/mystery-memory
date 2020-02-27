# Mistery Memory Game #
### User Centric Milestone Project ###

### Project Info ### 
My goal is to make a Memory Game. The plan is to make it in 3 stages(/pages) with a different difficulty level on each (Easy, Medium and Hard). You play the game by clicking on a card, the card will flip to show a picture of a mysterious creature. This creature got a matching pair, so the users goal is to find its match. If a match is made, the 2 clicked cards will stay open. If the 2 clicked cards doesn't match, the cards will flip back over. If you manage to match all available cards, within a certain time-period and click-count, the user will move on to the next stage. If not, it's Game Over/Restart.    

### UX ###

The main UX goal with the game and website, is to capture the visitors interest and give them an urge to play and complete the game. I want the game to look fun and easy to play, and self-explanatory at first glance. This with the combination of colors and effects, and exctincting the cards and game itself from the background and the rest of the layout. 
  

#### User Stories: ####

1.	As a visitor looking for a fun way to spend some time,  in 

2.	As a visitor who wants to take a short break from the duties i got in my life, I am looking for a game that can take my mind of things.

3.	As a visitor looking for a challenge for my memory, I'm looking for a memorygame.                 

Strategy

I wanted to make a website that would capture the visitors attention at a first glance, and from there get the urge to play, and complete the game.

Scope

A simple and self-explanatory layout, with "fun" colors and distinctive cards.

Structure

Firstly, I decided on the structure for the card layout, with the goal to keep it simple. A heading, some kind of Start Button, a timer and the cards. Early on I decided to go with different difficulty stages/levels and that the first level would contain 6 cards with 3 pairs. The theme for the game = mystery and magic. 

Skeleton

Wireframe: https://github.com/AntonIsaksson/slowdown-milestonep/blob/master/assets/wireframe/Wireframe-SlowDownResort.pdf

Surface

I wanted the surface to represent mystery and fun. I wanted the user to be curious of what would show when clicking on the cards. While google:ing around, looking for inspiration, I came over Dreamworks animated movie-series "How To Train Your Dragon", and decided to make my game around that. Post-poning my thinking about copyrights and just went online to find pictures to put into my project, I later on decided to change my whole theme for


Features

Existing Features

     -     Bootstrap ScrollSpy: when you scroll down the page and reach different sections, these will light up in the navbar. Vice-versa, when you click on any menu item you will be directed to that section. 
-	Smooth Scroll: to make things scoll more smoothly with the ScrollSpy function, some Javascript was needed. 
-	Image Slider: This is used both in the room page and the restaurant page, using Bootstraps Carousel class. 
-	Booking Form: let’s the visitor fill out and send a form to request a booking.

Features Left to Implement

In the future:
- I would like to add a page showing the activities that takes place on the resort. Perhaps by showing videos of when these activities (beach volleyball for example) is practiced. 
- I would like to evolve the booking system so that the visitor can check the availability right there on the website. 


Technologies Used

-	HTML
-	CSS
-	Bootstrap 4.1.0: https://getbootstrap.com/
-	Javascript (for smoothscroll and datepicker functions)
-	Font Awesome (for social icons): https://fontawesome.com/
-	Balsamiq (for wireframe): https://balsamiq.cloud/


Testing

The code and website have been tested through-out a number of different Browsers (Chrome, Firefox, Explorer) and on a number of different devices via Google Chromes Developer Tools, to check responsiveness (different mobile devices like Iphone & Samsung Galaxy, Ipad, etc.)

The fallout went as I had hoped following the planed UX and User Stories. 

User story 1; this was accomplished with the landing page image, which shows a big part of what the resort has to offer (pool, ocean-view, villas, beach volleyball courts, etc.)
User story 2; this was accomplished with the booking form.
User story 3; this was accomplished with the restaurant page, following the contact page with the phone number to the restaurant.

Testing the Booking Form: the attribute ‘required’ is added to the following input fields: ‘name’, ‘email adress’, ‘number of people’, ‘from date’ and ‘to date’. That means, if any of these fields are empty you will get an error message pointing out which field you have missed to fill in. 
If the email address field is filled in the wrong structure (xxx@xxx.xxx is the right way) you will get an error message as well. 
If all ‘required’ fields are filled in the right way, clicking the ‘Send Booking Request’ button will take you to the top of the page.

When clicking on the social icons in the ‘Contact’ page, a new tab will open because of the ‘ target=”_blank” ‘ attribute. 

Errors/Problems: One thing I struggled most with was the navbar-collapse class combined with the ScrollSpy function. When clicking the toggler-icon on smaller devices to collapse to show the menu items it works well. But then, when clicking on a menu item, the menu does not subtract back into the toggler-icon and is still visible. I tried different solutions which fixed this problem but made the navbar “jumpy” when clicking or scrolling. In the end, I decided that this was worse than having the menu-items show, so I let it be that way for now. 

Deployment

The website is hosted using Github pages. To check out the live website, follow this link: https://antonisaksson.github.io/slowdown-milestonep/#rooms

Credits

Acknowledgements

Inspiration and in particular the ‘ScrollSpy’ function was taken from this youtube tutorial: https://www.youtube.com/watch?v=V_lAhqLXT9A

Content

All written content is from myself.

Media

All pictures is taken by my colleagues and myself for the purpose to market Slow Down Resort. Some of them are used on Slow Down Resorts official web-page.