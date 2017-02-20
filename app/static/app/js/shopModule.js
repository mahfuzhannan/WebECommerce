/**
 * Created by mafz on 19/02/2017.
 */
(function (angular) {
    'use strict';
    angular.module('app.shop', [
        'app.data'
    ])
        .controller('shopController', ['shopService', '$scope', function (shop, $scope) {
            $scope.items = null;

            $scope.getItems = function () {
                console.log('getting items...');
                shop.getItems().then(function (response) {
                    console.log(response);
                    $scope.items = response;
                });
            }

        }])
        .service('shopService', ['dataService', function (data) {
            this.getItems = function () {
                return data.get('/items');
            };

            this.addToBasket = function (item) {
                return data.put('/baskets/add', {item:item});
            };

            this.removeFromBasket = function (item) {
                return data.put('/baskets/remove', {item:item});
            };

            this.checkout = function () {
                return data.get('/baskets/checkout');
            };
        }]);
})(window.angular);