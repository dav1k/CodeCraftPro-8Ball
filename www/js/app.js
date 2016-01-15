// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('EightBall', ['ionic']);

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});

app.controller('PredictionCtrl', function ($scope, $timeout) {

  var predictionList = [
    "Signs point to yes",
    "Yes",
    "Reply hazy, try again",
    "Without a doubt",
    "My sources say no",
    "As I see it, yes",
    "You may rely on it",
    "Concentrate and ask again",
    "Outlook not so good",
    "It is decidedly so",
    "Better not tell you now",
    "Very doubtful",
    "Yes - definitely",
    "It is certain",
    "Cannot predict now",
    "Most likely",
    "Ask again later",
    "My reply is no",
    "Outlook good",
    "Don't count on it"
  ];

  $scope.prediction = "Tap 8Ball for an answer";
  $scope.answered = true;

  $scope.ask = function() {
    $scope.answered = false;
    $scope.prediction = "Asking the Oracle ...";
    $timeout(function() {
      $scope.prediction = predictionList[Math.floor(Math.random() * predictionList.length)];
      $scope.answered = true;
    }, 2000);



  };

});
