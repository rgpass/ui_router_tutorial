app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  // Default route
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('about', {
      url: '/about',
      templateUrl: 'app/components/about/aboutView.html',
      controller: 'AboutController'
    })

    // // EXAMPLE OF PARTIALS
    // .state('home', {
    //   url: '/',
    //   views: {
    //     'header': {
    //       templateUrl: 'app/shared/header/headerView.html',
    //       controller: 'HeaderController'
    //     },
    //     'content': {
    //       templateUrl: 'app/components/home/homeView.html',
    //       controller: 'HomeController'
    //     },
    //     'footer': {
    //       templateUrl: 'app/shared/footer/footerView.html'
    //       // No controller needed
    //     }
    //   }
    // })
    // .state('dashboard', {
    //   url: '/dashboard',
    //   views: {
    //     'header': {
    //       templateUrl: 'app/shared/header/headerView.html',
    //       controller: 'HeaderController'
    //     },
    //     'content': {
    //       templateUrl: 'app/components/dashboard/dashboardView.html',
    //       controller: 'DashboardController'
    //     },
    //     'footer': {
    //       templateUrl: 'app/shared/footer/footerView.html'
    //       // No controller needed
    //     }
    //   }
    // })
    // .state('campaigns', {
    //   url: '/campaigns',
    //   views: {
    //     'header': {
    //       templateUrl: 'app/shared/header/headerView.html',
    //       controller: 'HeaderController'
    //     },
    //     'content': {
    //       templateUrl: 'app/components/campaigns/campaignsView.html',
    //       controller: 'CampaignsController'
    //     },
    //     'footer': {
    //       templateUrl: 'app/shared/footer/footerView.html'
    //       // No controller needed
    //     }
    //   }
    // })

    // // EXAMPLE OF NESTED VIEWS
    // .state('shows', {
    //   url: '/shows',
    //   templateUrl: 'app/components/shows/showsView.html',
    //   controller: 'ShowsController'
    // })
    // .state('shows.detail', {
    //   url: '/detail/:id',
    //   templateUrl: 'app/components/shows/detail/showsDetailView.html',
    //   controller: 'ShowsDetailController'
    // })



    // EXAMPLE OF PARTIALS & NESTED VIEWS
    // MUCH DRYer THAN ABOVE
    .state('app', {
      url: '/',
      views: {
        'header': {
          templateUrl: 'app/shared/header/headerView.html',
          controller: 'HeaderController'
        },
        'content': {
          templateUrl: 'app/components/home/homeView.html',
          controller: 'HomeController'
        },
        'footer': {
          templateUrl: 'app/shared/footer/footerView.html'
          // No controller needed
        }
      }
    })
      .state('app.dashboard', {
        url: 'dashboard',
        views: {
          'content@': {
            templateUrl: 'app/components/dashboard/dashboardView.html',
            controller: 'DashboardController'
          }
        }
      })
      .state('app.campaigns', {
        url: 'campaigns',
        views: {
          'content@': {
            templateUrl: 'app/components/campaigns/campaignsView.html',
            controller: 'CampaignsController'
          }
        }
      })

      // .state('app.subscribers', {
      //   url: 'subscribers',
      //   views: {
      //     'content@': {
      //       templateUrl: 'app/components/subscribers/subscribersView.html',
      //       controller: 'SubscribersController'
      //     }
      //   }
      // })
      //   .state('app.subscribers.detail', {
      //     url: '/:id',
      //     views: {
      //       'detail@app.subscribers': {
      //         templateUrl: 'app/components/subscribers/detail/subscribersDetailView.html',
      //         controller: 'SubscribersDetailController'
      //       }
      //     }
      //   })

      .state('app.shows', {
        url: 'shows',
        views: {
          'content@': {
            templateUrl: 'app/components/shows/showsView.html',
            controller: 'ShowsController'
          }
        }
      })
        .state('app.shows.detail', {
          url: '/:id',
          views: {
            'detail@app.shows': {
              templateUrl: 'app/components/shows/detail/showsDetailView.html',
              controller: 'ShowsDetailController'
            }
          }
        })
}]);
