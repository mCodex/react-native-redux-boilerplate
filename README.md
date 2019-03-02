# React-Native Redux Boilerplate

[![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)](https://github.com/mCodex/react-native-redux-boilerplate/blob/master/LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/mCodex/react-native-redux-boilerplate)

This is a simple `react-native init` project with some libraries. This project includes out of the box:

* React-Native
* React-Native-Navigation v2
* Redux
* Redux Saga
* Redux Offline
* ESlint
* Airbnb's ESlint rules

## Description

Starting a new project can take some time to configure project structure, libraries and so on... So, I decided to make this starter kit open source for anyone who needs a little help.

## Download

You can download this boilerplate from command line:

```bash
git clone https://github.com/mCodex/react-native-redux-boilerplate.git
```

or you can download the releases from github's releases:

https://github.com/mCodex/react-native-redux-boilerplate/releases

## Installation

After you've downloaded RNReduxBoilerplate, go to its folder and type:

```
yarn
cd ios/ && pod install
cd .. && yarn start
```

## Tips

### jsc-android

Android's react-native support is based on an old version of jsc-android (November of 2014) which is, basically, the JavaScript interpreter for Android, but we can update it ourselves to gain performance improvements. I've been doing it for a while and I've seen performance improvements. On the other hand, to update jsc-android you will have to support only versions of Android> 5.0, which nowadays seems fine. If you would like to give it a try, check this [NPM package](https://www.npmjs.com/package/jsc-android).
