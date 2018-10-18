# Prosjekt 3 - Motivasjonsapp

## IMPORTANT
This project uses yarn not npm. To test the project:

#### Install yarn
`npm install -g yarn`
#### Install dependencies
`yarn install`
#### Start expo
`yarn start` or `expo start`

Skrive om:

AsyncStorage

Testing

Samarbeid

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

Nativebase is a library for cross platform, easy to use, and good looking UI components in react native. In this project we have used 'Container, Content, Form, Item, Input, Label and Textarea' from nativebase which can be found in inputForm/index.js.

Read more about nativebase here:
[https://docs.nativebase.io/](https://docs.nativebase.io/)

#### Datetime-picker

This is a library that exposes a cross-platform interface to pick a date and/or time. This component can be found in inputForm/dateTimePicker.js

Read more about this datetim-picker here:
[https://github.com/mmazzarolo/react-native-modal-datetime-picker](https://github.com/mmazzarolo/react-native-modal-datetime-picker)


#### Lodash


#### Moment


#### PropTypes


#### Remote-svg


#### Chart-kit


#### Navigation



#### React Context API - Teleporting state for fun and profit

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
