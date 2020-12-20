# Insult Bot

## User Stories
  As a user, I want to be able to:
  - As a user, I expect to see a list of available names from 401n17 so that I can easily insult individuals 
  - As a user, I want to be able to click on a name and be returned a picture of the individual, the persons name, and a randomized insult

    ![john](./src/img/john.png)
    
    
    ``John smells like farts``

<br>

## Application Architecture
Create the Insult Bot application as follows:

Write an ``App`` component that serves as the container for all sub-components of this application
  - A ``<Header>`` component which shows the name of your virtual store
  - A ``<ThunderDome>`` component which shows the components
  - A ``<People>`` component
    - Shows a list of all the people
    - Dispatches an action when one is clicked to “activate” it
  - An ``<Insult>`` component
    - That stores a list of all of the insults
    - Dispatches an action when one is clicked to “activate” it
    - Randomizes insult on render


<br>

## Pseudo Code

```
Redux Store:
- Reducers:

 - People:
  - s: People
  - s: Victim
  - a: showPeople
  - a: selectVictim

 - Insults:
  - s: Insults
  - a: sendRandomInsult

<App />

<Header />
  // Displays App name

<ThunderDome>
  // Acts as a stage for the components

<People />
  // Lists out all of the people
  s: people
  a: selectVictim

<Insults />
  // Displays the selectedVictim
  s: selectedVictim
  s: insults
  a: sendRandomInsult

```

// TODO: find a way to reference the images and show corresponding name 
// TODO: Call the select victim and the insult them action differently