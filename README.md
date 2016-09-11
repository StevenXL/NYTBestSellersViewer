# NYTBestSellersViewer

Learning how to build iOS apps with React Native and the NYT API.

## Setup and Installation

This application has been tested only on the iOS simulator. It should work for
android as well, since  it does not use any platform-specific components.

To run the application, run the following commands *in the root directory of the
project*:

1. Install all the dependencies via: `npm install`
1. Open the project in Xcode: `open ios/NYTBestSellersViewer.xcodeproj`
1. Press the "play" icon in Xcode.

## Issues

While the NYT API returns relatively clean data, this application does not make
any attempts to correct for data that is not as expected. When necessary data is
missing the app will crash.

Furthermore, the API key is hard-coded into this project. I have asked NYT to
invalidate the API key, but have so far been unsuccessful in doing so. I
imagine that this API key will not work in the future.

## Libraries Used

1. `redux` for state management.
1. `react-redux` for Redux bindings in React.
1. `redux-thunk` for async actions.
