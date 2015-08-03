(function() {
  'use strict';

  var app = angular.module('fccportfolio', []);

  app.controller('ContentsController', ['$scope', function($scope) {
    $scope.title = "My FCC Projects";
    $scope.brand = "fccportfolio";
    $scope.copyright = "your site";

    // Social media urls
    $scope.twitter = undefined;
    $scope.codepen = undefined;
    $scope.github = undefined;

    $scope.categories = [
      {
        type: 'Ziplines',
        tag: 'Front End Development Projects',
        bgColor: 'bg-light-gray',
        projects: [
          {
            name: 'Random Quote Machine',
            tag: 'Zipline: Build a Random Quote Machine',
            fccurl: 'zipline-build-a-random-quote-machine',
            previewImg: '/images/Ziplines/quote.png',
            url: undefined,
            sourcecode: undefined
          }, {
            name: 'Local Weather',
            tag: 'Zipline: Show the Local Weather',
            fccurl: 'zipline-show-the-local-weather',
            previewImg: '/images/Ziplines/weather.png',
            url: undefined,
            sourcecode: undefined
          }, {
            name: 'Twitch.tv Status Checker',
            tag: 'Zipline: Use the Twitch.tv JSON API',
            fccurl: 'zipline-use-the-twitch.tv-json-api',
            previewImg: '/images/Ziplines/twitch.png',
            url: undefined,
            sourcecode: undefined
          }, {
            name: 'Camper News Feed',
            tag: 'Zipline: Stylize Stories on Camper News',
            fccurl: 'zipline-stylize-stories-on-camper-news',
            previewImg: '/images/Ziplines/campernews.png',
            url: undefined,
            sourcecode: undefined
          }, {
            name: 'Wikipedia Viewer',
            tag: 'Zipline: Wikipedia Viewer',
            fccurl: 'zipline-wikipedia-viewer',
            previewImg: '/images/Ziplines/wikiviewer.png',
            url: undefined,
            sourcecode: undefined
          }, {
            name: 'Pomodoro',
            tag: 'Zipline: Build a Pomodoro Clock',
            fccurl: 'zipline-build-a-pomodoro-clock',
            previewImg: '/images/Ziplines/pomodoro.png',
            url: undefined,
            sourcecode: undefined
          }, {
            name: 'Simple Calculator',
            tag: 'Zipline: Build a JavaScript Calculator',
            fccurl: 'zipline-build-a-javascript-calculator',
            previewImg: '/images/Ziplines/calculator.png',
            url: undefined,
            sourcecode: undefined
          }, {
            name: 'TicTacToe',
            tag: 'Zipline: Build a Tic Tac Toe Game',
            fccurl: 'zipline-build-a-tic-tac-toe-game',
            previewImg: '/images/Ziplines/tictactoe.png',
            url: undefined,
            sourcecode: undefined
          }
        ]
      }, {
        type: 'Basejumps',
        tag: 'Full Stack JavaScript Projects',
        projects: [
          {
            name: 'Voting',
            tag: 'Basejump: Build a Voting App',
            fccurl: 'basejump-build-a-voting-app',
            previewImg: '/images/Basejumps/voting.png',
            url: undefined,
            sourcecode: undefined
          }, {
            name: 'Nightlife',
            tag: 'Basejump: Build a Nightlife Coordination App',
            fccurl: 'basejump-build-a-nightlife-coordination-app',
            previewImg: '/images/Basejumps/nightlife.png',
            url: undefined,
            sourcecode: undefined
          }, {
            name: 'Stock Market',
            tag: 'Basejump: Chart the Stock Market',
            fccurl: 'basejump-chart-the-stock-market',
            previewImg: '/images/Basejumps/stockmarket.png',
            url: undefined,
            sourcecode: undefined
          }, {
            name: 'Book Trading Club',
            tag: 'Basejump: Manage a Book Trading Club',
            fccurl: 'basejump-manage-a-book-trading-club',
            previewImg: '/images/Basejumps/bookoutpost.png',
            url: undefined,
            sourcecode: undefined
          }, {
            name: 'Pinterest Clone',
            tag: 'Basejump: Build a Pinterest Clone',
            fccurl: 'basejump-build-a-pinterest-clone',
            previewImg: '/images/Basejumps/pinterest.png',
            url: undefined,
            sourcecode: undefined
          }
        ]
      }
    ];
  }]);
})();
