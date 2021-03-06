/**
 * Created by Administrator on 2015/10/26.
 */
"use strict"
define(['angularAMD', 'balintimesConstant', 'ui-bootstrap', 'angular-messages','angular-treetable'],function(angularAMD, balintimesConstant){
        var app=angular.module("trainmodule",['ui.router', 'ui.bootstrap', 'ngMessages','ngTreetable']);

        var mainState = {
            name: 'org/train',
            url: '/org/train',
            templateUrl: balintimesConstant.rootpath + '/views/org/train/list.html',
            controller: 'trainistController'
        };
        var editState = {
            name: 'org/train/edit',
            url: '/org/train/edit/:uid',
            templateUrl: balintimesConstant.rootpath + '/views/org/train/edit.html',
            controller: 'trainEditController',
            resolve: {
                trainData: function (AjaxRequest, $stateParams) {
                    if($stateParams.uid=="0"){
                        return {data:{
                            uid:"0",
                            kid:"",
                            name:""
                        }};
                    }else{
                        return AjaxRequest.Post("/train/getonetrain",{uid :$stateParams.uid});
                    }
                }
            }
        };

        app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
            $stateProvider.state(mainState).state(editState);
        }]);

        app.factory("trainServices", function (AjaxRequest) {
            return {
                listByPage: function (params) {
                    return AjaxRequest.Post("/train/listbypage",params);
                },
                deletetrain: function (UID) {
                    return AjaxRequest.Post("/train/delete", {uid: UID});
                }
            }
        });

        app.factory("lineServices", function (AjaxRequest) {
            return {
                lineData: function (params) {
                    return AjaxRequest.Post("/line/listbypage",params);
                }
            }
        });

        app.factory("cityServices",function(AjaxRequest){
            return{
                cityData:function(){
                    return AjaxRequest.Post("/city/list");
                }
            }
        });

        app.controller("trainistController",function($scope, $state, $stateParams, AjaxRequest, DlgMsg, NgUtil,trainServices,lineServices,cityServices){
            $scope.trains = {};
            $scope.trainTypes = [];
            $scope.searchParams = {};
            var params={ name:"",lineuid:"" };
            var lineParams={ cityuid:"",name:"" };
            $scope.totalItems = 1;

            $scope.resetForm = function () {
                $scope.searchParams = NgUtil.initPageParams();
                trainServices.listByPage($scope.searchParams).then(function (rsBody) {
                    $scope.trains = rsBody.data;
                    $scope.searchParams.total = rsBody.total;
                });
            };
            $scope.init = function () {
                $scope.resetForm();
            };
            $scope.init();

            $scope.loadPage = function () {
                trainServices.listByPage($scope.searchParams).then(function (rsBody) {
                    $scope.trains = rsBody.data;
                    $scope.searchParams.total = rsBody.total;
                })
            };

            $scope.searchtrain = function () {
                trainServices.listByPage($scope.searchParams).then(function (rsBody) {
                    $scope.trains = rsBody.data;
                    $scope.searchParams.total = rsBody.total;
                })
            };

            $scope.deletetrain = function(UID) {
                DlgMsg.confirm('系统提示', '是否删除该列车').result.then(function(btn) {
                    if (btn == "ok") {
                        trainServices.deletetrain(UID).then(function(rsBody) {
                            if (rsBody.success == 'true') {
                                $scope.init();
                            }
                        })
                    }
                });
            };

            cityServices.cityData().then(function(rsBody){
                $scope.cities=rsBody.data;
                $scope.searchParams.cityuid=rsBody.data[3].uid;
            });

            $scope.$watch('searchParams.cityuid', function(cityuid) {
                lineParams.cityuid=cityuid;
                lineServices.lineData(lineParams).then(function(rsBody){
                    $scope.lines=rsBody.data;
                });
            });


        }).controller("trainEditController",function($scope,$state,$stateParams,AjaxRequest,DlgMsg,NgUtil,trainServices,trainData,cityServices,lineServices){

            $scope.train = trainData.data;
            var original = angular.copy(trainData.data);
            var lineParams={ cityuid:"",name:"" };

            $scope.savetrain = function () {
                var url = "/train/update"
                if (angular.isUndefined($scope.train.uid) == true || $scope.train.uid == "0") {
                    url = "/train/create"
                }

                AjaxRequest.Post(url, $scope.train).then(function (rsBody) {
                    if (rsBody.success == 'true') {
                        $state.go('org/train');
                    }
                })
            };
            $scope.revert = function () {
                $scope.train = angular.copy(original);
                $scope.editForm.$setPristine();
            };

            cityServices.cityData().then(function(rsBody){
                $scope.cities=rsBody.data;
            });

            $scope.$watch('train.cityuid', function(cityuid) {
                lineParams.cityuid=cityuid;
                lineServices.lineData(lineParams).then(function(rsBody){
                    $scope.lines=rsBody.data;
                });
            });
        });

        return{
            mainState: mainState,
            module: app
        };

    }
)
