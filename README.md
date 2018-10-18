# Project 3 - Go'Full - A Motivational App

## IMPORTANT - Installing and running the project
This project uses yarn not npm. To start the project:

#### Install yarn
`npm install -g yarn`
#### Install dependencies
`yarn install`
#### Start expo
`yarn start` or `expo start`

### Testing the app
Testing some of the functionality might be difficult as the graphs base themselves on drinking over a long period of time. We recommend bringing the app to Samfundet for a real test.

Jokes aside we have included a few test events that show of the functionality. There is also a line in ``AppProvider`` that can be uncommented to test notifications without having to wait 15 minutes.

Also take note that the app was designed around a real alcohol consumption level. Due to technical constraints with our solution the app slows down after adding 30 units of alcohol. We've decided to call this a _Health Related Safety Feature_.

On IOS you won't get push notifications if you have the expo app open, which means that to see the notification you have to be in another app or on the home screen.

## About the App

Go'Full is a party and drinks tracking app. The core idea is that students like to drink and stay drunk. We work to ensure that our users never forget to open that next beer.

The app is a tounge-in-cheek joke referencing students relationship to alcohol and apps such as Lykkepromillen. We consider this repository a vertical slice of a larger product. As such, some code is created to ease further development and some desirable features are left uncreated.

## Technical Decisions and Processes

### AirBNB Linter - Our angry goblin overlord

For the last project a lot of code-review-time was used linting eachothers code. For this project we decided to use ESLint and chose the ruleset that AirBnB uses. It is a very popular ruleset, which is very opinionated. This is good because it means we get a uniform codebase, while not having to research every little implementation detail of JS. It also saved us a lot of work linting and hours of headaches that we would have had while debugging.

While the start was heavy and the linter could seem downright aggressive we emerged on the other side as complete converts and better coders. We heartily recommend using both a linter and the AirBnB ruleset to anyone.

@August, var det diss linkene du brukte? --------------------------------------------------
Check out:
https://www.npmjs.com/package/eslint-config-airbnb
and
https://github.com/airbnb/javascript/issues/1589
for more info.

### AsyncStorage - Storage that is Async, I guess...
We decided early in the development that we wantet 1-1 parity between app state and AsyncStorage. To alleviate potential issues down the road we created a wrapper for this.setState which also handled storage in AsyncStorage. This method, situated in AppProvider was our sole writer of storage. This would later help us greatly as we never encountered issues with a mismatch between AsyncStorage and the state of our app. Since we have 1-1 parity we could also allow ourselves only to read from storage when we initialized the app. This is done with a simple get to fetch our entire state in the componentDidMount() of AppProvider.

AppProvider served as our central store for state and functions for most important update functionality that is used throughout the app. These functions are loaded into state and along with the rest of state is served to components throughout the tree, through the use of _React Contex API_. You can read more about our implementation of Context in the section __Teleporting state for fun and profit__ under __Going beyond React UI__.


### Yarn - It's like npm, but different
Yarn is like npm a package manager for nodejs, at this date there is almost no difference between them. We chose to use yarn just because it's our personal preference.

### Testing - Why would you even? The code is perfect.

Based on feedback from the lecturerer we decided to focus on demonstrating systematic testing, instead of applying this principle to the entire app. As such you'll see snapshot testing of our graphs, Mocking of third-party compontents and good structured use of jest. You will not see a high code coverage statistic.

## Not-That-Techinical Decisions and Processes

### Design, Styling, Appearance and Pzazz

The earliest stage of our development process was the design phase. Based on impressions and experience from earlier projects we decided to make decisions regarding general appearance, colors, icons, placement of objects early on. We created basic non-interactive dummies using Figma; an online tool for creating and designing prototypes. Figma was attractive compared to other design tools because of the ability to collaborate simultaneously online.

[Figma](https://www.figma.com/)

#### Designing prototypes using Figma - It's Like Google Drive for Illustrator

As mentioned figma allowed us to collaborate simultaneously while working on the prototypes. We first decided on a color palette. We went for a modern minimalistic pallette based on dark purple. Since we like purple and it gives the application a dark/nightly theme, since drinking mostly occurrs during night.

![](https://i.imgur.com/VyW4F01.png)

As seen below the different tints and colors are used throughout the application, and different functions and items such as text and backgrounds are used consequently to satisfy the basic principles of design

![](https://i.imgur.com/G4Rvavc.png)

### Our Use of Git and GitHub and Gitting Gud
We use what we like to call minimized-git-flow. We are very fond of the git-flow framework, but some of the tools there are not quite neccesary when you're not hosting a production app during development. One such example is that we use only a master branch, and not a develop branch.

We used issues, along with Figma(see above) to layout our development and feature set in the early development. Throughout development we also sporadically used issues to note problems we found, that needed to be fixed. Some plans we had early on turned out to be outside our final scope; they were labeled `won't fix` and closed. Other issues were closed after being referenced in pull requests, or PRs were referenced on the issues themselves.

We are definitely not above inserting humor and inside-jokes into our commit messages and comments on github. We strongly believe that git and github are tools that mold themselves to their users. We are a bunch of friends that like to work together while we joke around, and this is reflected in our use of git and github. However, even through the jokes we strive to keep a clear, readable and understandable commit history.

### Project Structure - Folders Files and Fantasy

We decided to use similar folder structure as our previous project, called the ‘Component Folder Pattern’. This gave us better oversight of the different components, and makes the whole structure easier to understand.

You can read more about this structure here:

https://medium.com/styled-components/component-folder-pattern-ee42df37ec68


## Going Beyond React Native UI
We have decided to discuss three parts of our app in this section. Notifications, BAC-calculation and our implementation of the React Context API.

### Notifications - But not like annoying ones.
We take use of Expos excellent notification features to send notifications if we think it's about time for the user to have another drink. We use scheduled notifications that are sent when submitting a beverage. Older scheduled notifications are cancelled when new ones are created to make sure we don't spam the users should they have a higher than anticipated rate of consumption.

For android we created three notification channels (this is a new feature in android 8.0). For this vertical slice only one, 'mission-critical' is used. However best-practice for android notification channels is to spend some time planning when first creating them, and not updating them too often. As such we have also created 'test' for test-notifications and 'nudge' for less important, less intrusive notifications.

### BAC-Calculation - We know our alcohol
We wanted a central part of our app to be showing off cool graphs after a night out on the town. And as such we believed it to be very important that we calculate a true-to-life blood alcohol content for our users. In this vertical slice we assume default weights, height and gender however the functionality we created supports custom settings for each user.

### React Context API - Teleporting state for fun and profit

In our last project we were not completely happy with how we handled state flowing between components. We would simply pass state from the parent to the child through props. This works well in most cases, however sometimes you end up with intermediary components that really have no reason to have access to some part of the state but we still need to pass everything all the way through the component tree.

For this project we decided to experiment with the React Context API for distributing state throughout the application. Context is especially good for variables and functions that you would like to be globally available in the application. Due to the relatively small scope and timeline of the project we decided to see how far we could push Context instead of finding the _perfect_ solution for all our state-handling issues. Overall we were very happy with how context helped us and it certainly worked very well in coordinating state with AsyncStorage. For later projects we'll definitely consider using Context again.

#### How it works and doesn't

This section is written both so that we'll have a place to lookup Context later, and so that groups that have to evaluate our project won't need to go look up how Context works. Hopefully you learn something you would like to try out in your next project!

Context has two core components a Provider and a Consumer. The Provider provides access to the context to the component tree and the Consumer enables a component to consume or use the context.

Our Provider is defined along with the context in `src/components/AppProvider`. We decided to create a component that could serve as a provider in the component tree. This class also acts as our primary state handler. This way we had one centralised access to our storage and state-handling methods. In the render() you can see that we use the Context to generate a provider that takes the state of AppProvider as it's input and distributes that to the rest the component tree. The provider is inserted at the top of the component tree in `App.js`.

The consumer is used all over the application in any place where we need access to something from the provider. To use a consumer you need a code snippet that looks a lot like this:

```
<AppContext.Consumer>
        {appState =>(
            <Button title={appState.relevantPieceOfState} />
        )}
</AppContext.Consumer>
```

you also need to import the context from AppProvider:

`import { AppContext } from '../AppProvider';`

## Third-Party Dependencies - they are not as good as parties we host, but they are ok I guess.
In this section we will outline our third-party dependencies.

### Nativebase

Nativebase is a library for cross platform, easy to use, and good looking UI components in react native. In this project we have used 'Container, Content, Form, Item, Input, Label and Textarea' from nativebase which can be found in ``inputForm/index.js``.

Read more about nativebase here:
[https://docs.nativebase.io/](https://docs.nativebase.io/)

### Datetime-picker

This is a library that exposes a cross-platform interface to pick a date and/or time. This component can be found in ``inputForm/dateTimePicker.js``

Read more about this datetim-picker here:
[https://github.com/mmazzarolo/react-native-modal-datetime-picker](https://github.com/mmazzarolo/react-native-modal-datetime-picker)

### Lodash

Lodash is one of the most used npm packages that exists. It is a ton of utilities that makes programming in JS objectively better. We heavily leaned on cloneDeep.
[https://lodash.com/](https://lodash.com/)

### MockDate

MockDate is a great little tool for mocking dates. Basically MockDate allows you to set a "fake" date for testing. This makes snapshot testing when you have datefields and such a breeze.

[https://www.npmjs.com/package/mockdate](https://www.npmjs.com/package/mockdate)

### Moment

This library makes it _a lot_ easier to work with date objects in react. It contains a ton of useful functionality to handle dates, and can output just about any format with no problems.

Read more about this library here:
[https://www.npmjs.com/package/react-moment](https://www.npmjs.com/package/react-moment)

### React-native-remote-svg

As explained later we thought that we were going to use font-awesome instead of this, but after hearing some bad things about font-awesome for react-native we decided to take the easy path and just use some SVGs. This meant that we had to make import the SVG files we wanted, while the 'Image' component in react native does not support SVG files. This library makes this possible. The implementation of this library can be found in ``screens/eventScreen.js`` and the SVG files can be found in `assets`

### React-native-chart-kit

Making a graph to show the user their estimated blood alcohol content (BAC) proved to be very easy using this library. Implementation of this library can be found in ``graph/index.js``

You can read more about the chart-kit here:
[https://www.npmjs.com/package/react-native-chart-kit](https://www.npmjs.com/package/react-native-chart-kit)


### React-navigation

To be able to change between the different screens, we needed a way to navigate. This was solved by using the 'react-navigation' library. Implementation of the navigator and its configurations can be found in ``Navigator.js``

Read more about this library here:
[https://reactnavigation.org/en/](https://reactnavigation.org/en/)

### React-native-material-ui

Starting out we thought we were going to use a lot of components from this library, however during development we found better ways to implement different components. Because of this, the only thing we used from this library is the ActionButton component which takes you to the create event screen. You can find the implementation of this component in `` screens/scheduleScreen.js ``


Read more about this library here:
[https://github.com/xotahal/react-native-material-ui](https://github.com/xotahal/react-native-material-ui)
