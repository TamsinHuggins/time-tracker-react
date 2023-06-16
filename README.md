# Time Tracker
Desktop view:
![Screenshot 2023-06-15 184438](https://github.com/TamsinHuggins/time-tracker-react/assets/32196191/32652160-0732-4ba0-a882-7ef4e0d56c36)

### Overview

Time Tracker is a portfolio application which I built to develop and demonstrate my front end web development skills in React.js, including building from a design, creating interactive custom React components, and implementing device-responsive styling. Time Tracker is a user interface which allows the user to visualise their time spent on different activities (e.g. work, exercise, social), over different time scales (e.g. daily, weekly, monthly). This interface would make up one part of a larger, data-driven application: I have built the final part of this data pipeline, which displays an interactive breakdown of the user's personal statistics.

I obtained the design and assets for the project from [FrontEndMentor.io](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw).


### What does Time Tracker do?
Time Tracker displays the number of hours the user has spent on different activities over the past day, month or week. The app has buttons which allow the user to select the timescale in which they want to view their data. Time Tracker adapts to the size of the user's view window, changing its layout depending on whether the viewer is using a desktop, tablet or phone screen.

Time Tracker, as viewed on a tablet screen, displaying monthly stats (left) and as viewed on a phone screen, displaying weekly stats (right):

<img src=https://github.com/TamsinHuggins/time-tracker-react/assets/32196191/b25115cf-a831-4be4-bea6-fbb85ad1c8b7) height="600"> <img src=
https://github.com/TamsinHuggins/time-tracker-react/assets/32196191/3e4cfee7-9704-4801-b535-5e1b2277b88f height="600"> <img src=https://github.com/TamsinHuggins/time-tracker-react/assets/32196191/7fb72c2f-0e21-4e06-8e55-14f0c055b4d5 height="600">


### Technologies and Skills Used to Build Time Tracker

Time Tracker was coded in React.js, which is a front end framework that couples JavaScript (JS) and HTML tightly, so you can write HTML within JS scripts. I chose React because it allows you to create custom reusable components that can each be tailored using a feature of React called props. From the design, I identified six 'Time Cards', identical in structure but differing in colour, background image and data displayed, making them ideal candidates for a reusable React component using props.

Time Tracker was styled with vanilla CSS, to showcase vanilla CSS skills, whereas I will use Tailwind for future portfolio projects. I used CSS media queries to allow Time Tracker to adapt its layout to suit the device which it is viewed on.

### Challenges associated with building Time Tracker

Adding interactivity to TimeTracker posed challenges in determining which components would use state and how event information, such as user clicks, would be passed between components to change the state. In this case, the state represents the timescale for displaying time statistics (daily, monthly, or weekly). To address this, I utilized the useState hook in the App component to hold the state and passed state information down to the Time Cards through props. The Title Card component also received the state information and the function for changing the state via props, enabling the buttons to modify the state and allowing users to switch between different stats by clicking.

Certain decisions proved difficult when there was no obvious optimal solution. Initially, I was uncertain whether to hard-code the width and height of the cards or make them adaptable to the view window's size. Hard-coded sizes might result in small cards on large screens, while adaptive sizes would require minimum size rules or adaptive font sizes to prevent text overflow. Ultimately, I chose to give the cards a fixed size but maintain flexibility in their arrangement based on the view window, whether it be in 2 rows, 4 rows, or one column. This compromise acknowledges that the cards might appear small on very large screens. This experience taught me the importance of having some fixed-size elements to enhance the simplicity and predictability of an interface.

Another challenge I encountered was making quick decisions when multiple valid approaches existed, as there is a balance between writing perfectly scaleable, reusable code versus taking the quickest approach. This consideration becomes especially crucial when early design choices may lead to complications as the project progresses. For example, I had to break the code first in order to improve its flexibility. Because I initially overlooked the tablet view design, I later had to restructure the hierarchy of CSS classes and HTML divs to accommodate this requirement. This made me consider how design decisions can become significantly more complex when developing larger applications, as early design choices may necessitate substantial code restructuring in the future.


### How to Install and Run Time Tracker

	- clone the repo `git clone <link-to-repository>`

	- run `npm I` or `npm install` (they’re the same command) to install the packages needed to run your app

	- npm start

