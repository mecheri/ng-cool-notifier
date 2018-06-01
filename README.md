# ng-cool-notifier

> An easy notifications library for Angular

[![](./src/assets/images/demo.gif)]()

## Table of Contents

  - [Example](#example)
  - [Install](#install)
  - [Setup](#setup)
  - [Usage](#setup)
    - [Creating Notifications](#crating-notifications)
    - [Options](#options)

## Example

Soon

## Install

Install the library

```sh
npm install --save ng-cool-notifier
```

## Setup

Import the `CoolNotifierModule` in to your root `AppModule`
```ts
import { CoolNotifierModule } from 'ng-cool-notifier';

@NgModule({
    imports: [
        BrowserModule,
        CoolNotifierModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
```

## Usage
Add the CoolNotifierComponent in to the component where you want to use the notifications. Or in your top level component for use in child components.
```js
...
template: '<cool-notifier></cool-notifier>'
...
```

### Creating Notifications

Soon

### Options

Soon
