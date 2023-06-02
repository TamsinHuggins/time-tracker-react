# Time Tracker

![desktop-preview](https://github.com/TamsinHuggins/time-tracker-react/assets/32196191/63a80b95-089b-477a-813c-1df877b8be74)

### Overview

Time Tracker is a portfolio application which I built to develop and demonstrate my front end web development skills in React.js, including building from a design, creating interactive custom React components, and implementing device-responsive styling for desktop, phone, and tablet. Time Tracker is a user interface which allows the user to visualise their time spent on different activities (e.g. work, exercise, social), over different time scales (e.g. daily, weekly, monthly). This interface would make up one part of a larger, data-driven application: I have built the final part of this data pipeline, which displays an interactive breakdown of the user's personal statistics.

I obtained the [design for Time Tracker](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw), as shown in the image above, from [FrontEndMentor.io](https://www.frontendmentor.io/). From the same page I obtained assets for the project such as a JSON file containing the time data to display, and styling content such as hexkeys for the CSS colours and images for the card backgrounds.

### What does Time Tracker do?
Time Tracker displays the number of hours the user has spent on different activities over the past day, month or week. The app has buttons which allow the user to select the timescale in which they want to view their data. Time Tracker adapts to the size of the user's view window, changing its layout depending on whether the viewer is using a desktop, tablet or phone screen.

### Technologies and Skills Used to Build Time Tracker

Time Tracker was coded in React.js, which is a front end framework that couples JavaScript (JS) and HTML tightly, such that you can write HTML within JS scripts. I chose React because it allows you to create custom reusable components that can each be tailored using a feature of React called props. When first viewing the design for Time Tracker, I noticed 6 'time cards', which differ in their highlight colour, background images, and data displayed, but are identical in their size, shape, structure, and other aspects of their styling. I designed these 'cards' as a single React component, customized with props.

Vanilla CSS. 

Media Queries



### Challenges associated with building Time Tracker

	- figuring out where state should be stored and passed down through 		components

	- making design decisions (e.g. multiple ways to apply CSS to achieve 		the design layout. Example: hardcode the <Card> width or make it 			scaled

	- when should something be a React component?

### How to Install and Run Time Tracker

	- clone the repo `git clone <link-to-repository>`

	- run `npm I` or `npm install` (they’re the same command) to install the packages needed to run your app

	- npm start



License 
