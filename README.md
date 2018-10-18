# Prosjekt 3 - Motivasjonsapp

## IMPORTANT
This project uses yarn not npm. To start the project:

#### Install yarn
`npm install -g yarn`
#### Install dependencies
`yarn install`
#### Start expo
`yarn start` or `expo start`

Skrive om:

Samarbeid

### Assignment demands

#### React Native and Expo


#### AsyncStorage
We decided early in the development that we wantet 1-1 parity between app state and AsyncStorage. To alleviate potential issues down the road we created a wrapper for this.setState which also handled storage in AsyncStorage. This method, situated in AppProvider was our sole writer of storage. This would later help us greatly as we never encountered issues with a mismatch between AsyncStorage and the state of our app. Since we have 1-1 parity we could also allow ourselves only to read from storage when we initialized the app. This is done with a simple get to fetch our entire state in the componentDidMount() of AppProvider.

AppProvider served as our central store for state and functions for most important update functionality that is used throughout the app. These functions are loaded into state and along with the rest of state is served to components throughout the tree through the use of _React Contex API_. You can read more about our implementation of Context in the section __Teleporting state for fun and profit__ under __Going beyond React UI__.


#### Cross-platform support


#### Use of git
We use what we like to call minimized-git-flow. We are very fond of the git-flow framework, but some of the tools there are not quite neccesary when you're not hosting a production app during development. One such example is that we use only a master branch, and not a develop branch.

We used issues, along with Figma(see below) to layout our development and feature set in the early development. Throughout development we also sporadically used issues to note problems we found, that needed to be fixed. Some plans we had early on turned out to be outside our final scope; they were labeled `won't fix` and closed. Other issues were closed after being referenced in pull requests, or PRs were referenced on the issues themselves.

We are definitely not above inserting humor and inside-jokes into our commit messages and comments on github. We strongly believe that git and github are tools that mold themselves to their users. We are a bunch of friends that like to work together while we joke around and this is reflected in our use of git and github. However, even through the jokes we strive to keep a clear, readable and understandable commit history.

### Going beyond React UI

#### Push notifications

To solve the part of the assignment where we had to implement something that wasn't ordinary react native UI problematics we decided to implement the possibility of recieveing push notifications.

#### Testing



### Yarn
Yarn is like npm a package manager for nodejs, at this date there is almost no difference between them. We chose to use yarn just because it's our personal preference. 

### Project Structure

We decided to use similar folder structure as our previous project, called the ‘Component Folder Pattern’. This gave us better oversight of the different components and makes the whole structure easier to understand.

You can read more about this structure here:

https://medium.com/styled-components/component-folder-pattern-ee42df37ec68

### Figma

Before we started coding we decided to make a prototype of our project in figma. This helped us immensely when coding, as we had a sketch of the finished product we could work towards. Which helped with developing functionality and finding third-party libraries.


Check out or figma here:LINK


### AirBNB Linter

After a lot of code reviews where most of the comments were about linting errors during our last project, we decided to implement the linter that AirBNB uses for their code. This lessened the amount of linting work we had to do ourselves, while also making our code easier to read and understand. After our experience with this linter we recommend everyone to use one on their project. 


@August, var det diss linkene du brukte? --------------------------------------------------
Check out:
https://www.npmjs.com/package/eslint-config-airbnb
and 
https://github.com/airbnb/javascript/issues/1589
for more info.




### Design, Styling and Appearance

The earliest stage of our development process was the design phase. Based on impressions and experience from earlier projects we decided to make decisions regarding general appearance, colors, icons, placement of objects early on. We created basic non-interactive dummies using Figma; an online tool for creating and designing prototypes. Figma was attractive compared to other design tools because of the ability to collaborate simultaneously online. 

#### Designing prototypes using Figma

As mentioned figma allowed us to collaborate simultaneously while working on the prototypes. We first decided on a color pallette. We went for a modern minimalistic pallette based on dark purple. Since we like purple and it gives the application a dark/nightly theme, since drinking mostly occurrs during night. 

![](https://i.imgur.com/VyW4F01.png)

As seen below the different tints and colors are used throughout the application, and different functions and items such as text and backgrounds are used consequently to satisfy the basic principles of design 
 
![](https://i.imgur.com/G4Rvavc.png)

### Third-party components

#### Nativebase

Nativebase is a library for cross platform, easy to use, and good looking UI components in react native. In this project we have used 'Container, Content, Form, Item, Input, Label and Textarea' from nativebase which can be found in ``inputForm/index.js``.

Read more about nativebase here:
[https://docs.nativebase.io/](https://docs.nativebase.io/)

#### Datetime-picker

This is a library that exposes a cross-platform interface to pick a date and/or time. This component can be found in ``inputForm/dateTimePicker.js``

Read more about this datetim-picker here:
[https://github.com/mmazzarolo/react-native-modal-datetime-picker](https://github.com/mmazzarolo/react-native-modal-datetime-picker)


#### Lodash


#### Moment


#### PropTypes


#### React-native-remote-svg

As explained later we thought that we were going to use font-awesome instead of this, however we concluded that font-awesome did not have the symbols we wanted. This meant that we had to make import the SVG files we wanted, while the 'Image' component in react native does not support SVG files. This library makes this possible. The implementation of this library can be found in ``screens/eventScreen.js`` and the SVG files can be found in `assets`


#### React-native-chart-kit

Making a graph to show the user their estimated blood alcohol content (BAC) proved to be very easy using this library. Implementation of this library can be found in ``graph/index.js``

You can read more about the chart-kit here:
[https://www.npmjs.com/package/react-native-chart-kit](https://www.npmjs.com/package/react-native-chart-kit)


#### React-navigation

To be able to change between the different screens, we needed a way to navigate. This was solved by using the 'react-navigation' library. Implementation of the navigator and its configurations can be found in ``Navigator.js``

Read more about this library here:
[https://reactnavigation.org/en/](https://reactnavigation.org/en/)

#### React-native-material-ui

Starting out we thought we were going to use a lot of components from this library, however during development we found better ways to implement different components. Because of this, the only thing we used from this library is the ActionButton component which takes you to the create event screen. You can find the implementation of this component in `` screens/scheduleScreen.js ``


Read more about this library here:
[https://github.com/xotahal/react-native-material-ui](https://github.com/xotahal/react-native-material-ui)


### React Context API - Teleporting state for fun and profit

For our last project we were not completely happy with how we handled state flowing between components. We would simply pass state from the parent to the child through props. This works well in most cases, however sometimes you end up with intermediary components that really have no reason to have access to some part of the state but we still need to pass everything all the way through the component tree.

For this project we decided to experiment with the React Context API for distributing state throughout the application. Context is especially good for variables and functions that you would like to be globally available in the application. Due to the relatively small scope and timeline of the project we decided to see how far we could push Context instead of finding the _perfect_ solution for all our state-handling issues. Overall we were very happy with how context helped us and it certainly worked very well in coordinating state with AsyncStorage. For later projects we'll definitely consider using Context again.

#### How it works

This section is written both so that we'll have a place to lookup Context later, and so that groups that have to evaluate our project won't need to go look up how Context works. Hopefully you learn something you would like to try out in your next project!

Context has two core components a Provider and a Consumer. The Provider provides access to the context to the component tree and the Consumer enables a component to consume or use the context.

Our Provider is defined along with the context in `src/components/AppProvider`. We decided to create a component that could serve as a provider in the component tree. This class also acts as our primary state handler. This way we had one centralised access to our storage and state-handling methods. In the render() you can see that we use the Context to generate a provider that takes the state of AppProvider as it's input and distributes that to the rest the component tree. The provider is inserted at the top of the component tree in `App.js`.

The consumer is used all over the application in any place where we need access to something from the provider. To use a consumer you need a code snippet that looks a lot like this:
```
<AppContext.Consumer>
        {value =>(
            <Button title={value.relevantPieceOfState} />
        )}
</AppContext.Consumer>
```

you also need to import the context from AppProvider:

`import { AppContext } from '../AppProvider';`
