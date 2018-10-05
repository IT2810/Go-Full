# Prosjekt 3 - Motivasjonsapp


Skrive om:

AsyncStorage

Testing

Samarbeid

Yarn

Komponentsstruktur/Mappestruktur

Figma

AirBNB Linter

Tredjepartsbiblioteker:
https://github.com/mmazzarolo/react-native-modal-datetime-picker

https://github.com/gcanti/tcomb-form

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
