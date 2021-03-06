/**
 * Created by AlexXie on 2015/8/26.
 */
'use strict';
angular.module('app')
    .factory('securityInterceptor', ["$q", "AlertMsg", function ($q, AlertMsg) {
        var responseInterceptor = {
            response: function (response) {
                return response;
            },
            'responseError': function (response) {

                AlertMsg.failtrue(response.data.responseMsg, "异常提示");

                return $q.reject(response);
            }
        };
        return responseInterceptor;
    }])
    .factory("AjaxRequest", ["$http", "AlertMsg", "Upload", "AppUtil", function ($http, AlertMsg, Upload, AppUtil) {

        return {
            post: function (url, params, alertmsg) {
                console.log("post:" + url);
                return $http.post(url, params).then(function (response) {
                    if (response.data.responseMsg != "") {
                        if (response.data.success == "true") {
                            if (!(alertmsg == false)) {
                                AlertMsg.success(response.data.responseMsg);
                            }
                        }
                        else {
                            AlertMsg.warning(response.data.responseMsg);
                        }
                    }
                    return response.data;
                });
            },
            put: function (url, params, alertmsg) {
                console.log("put:" + url);
                return $http.put(url, params).then(function (response) {
                    if (response.data.responseMsg != "") {
                        if (response.data.success == "true") {
                            if (!(alertmsg == false)) {
                                AlertMsg.success(response.data.responseMsg);
                            }
                        }
                        else {
                            AlertMsg.warning(response.data.responseMsg);
                        }
                    }
                    return response.data;
                });
            },
            get: function (url, params) {
                var strParams = AppUtil.toQueryString(params);
                url += "?" + strParams;
                console.log("get:" + url);
                return $http.get(url).then(function (response) {
                    return response.data;
                });
            },
            restGet: function (url, params) {
                var strParams = "";
                if (params) {
                    var values = [];
                    for (var i in params) {
                        values.push(params[i]);
                    }
                    strParams = values.join("/");

                    url = url + "/" + strParams;
                }
                console.log("get:" + url);
                return $http.get(url).then(function (response) {
                    return response.data;
                });
            },
            delete: function (url, params, alertmsg) {
                var strParams = "";
                if (params) {
                    var values = [];
                    for (var i in params) {
                        values.push(params[i]);
                    }
                    strParams = values.join("/");

                    url = url + "/" + strParams;
                }
                console.log("delete:" + url);
                return $http.delete(url).then(function (response) {
                    if (response.data.responseMsg != "") {
                        if (response.data.success == "true") {
                            if (!(alertmsg == false)) {
                                AlertMsg.success(response.data.responseMsg);
                            }
                        }
                        else {
                            AlertMsg.warning(response.data.responseMsg);
                        }
                    }
                    return response.data;
                });
            },
            head: function (url, params) {

            },
            options: function (url, params) {

            },
            upload: function (url, data, alertmsg, progressFn, xhrFn) {
                if (angular.isFunction(alertmsg)) {
                    xhrFn = progressFn;
                    progressFn = alertmsg;
                    alertmsg = true;
                }
                var uploadFn = Upload.upload({
                    url: url,
                    headers: {
                        "Content-Type": "multipart/form-data"
                    },
                    data: data
                });

                uploadFn.xhr(function (xhr) {
                    if (xhrFn) xhrFn(xhr);
                });

                return uploadFn.then(function (response) {
                    if (response.data.responseMsg != "") {
                        if (response.data.success == "true") {
                            if (!(alertmsg == false)) {
                                AlertMsg.success(response.data.responseMsg);
                            }
                        }
                        else {
                            AlertMsg.warning(response.data.responseMsg);
                        }
                    }
                    return response.data;
                }, null, function (evt) {
                    if (progressFn) progressFn(evt);
                });
            }
        }
    }])
    .factory("NgTableUtil", ["NgTableParams", function (NgTableParams) {

        return {
            initNgTableParams: function (getDataService) {

                var funGetData;
                if (getDataService) {
                    funGetData = function (params) {

                        var exparams = {};

                        if (params.parameters().extParams) exparams = angular.copy(params.parameters().extParams);
                        exparams.page = params.page();
                        exparams.pagesize = params.count();
                        var sort = params.sorting();
                        for (var key in sort) {
                            exparams.orderby = key;
                            exparams.desc = sort[key] == "desc";
                        }
                        var filter = params.filter();
                        for (var key in filter) {
                            exparams[key] = filter[key];
                        }
                        return getDataService(exparams, params);
                    };
                }
                else {
                    funGetData = function () {
                        return false;
                    }
                }


                return new NgTableParams({
                    page: 1,
                    count: 20,
                    filter: {}
                }, {
                    counts: [],
                    // 只有当1.5s内无变化时才会过滤
                    filterDelay: 1500,
                    getData: funGetData
                });
            },

            setNgTableFn: function (ngtable, fn) {
                ngtable.settings({
                    getData: function (params) {

                        var exparams = {};

                        if (params.parameters().extParams) exparams = angular.copy(params.parameters().extParams);
                        exparams.page = params.page();
                        exparams.pagesize = params.count();
                        var sort = params.sorting();
                        for (var key in sort) {
                            exparams.orderby = key;
                            exparams.desc = sort[key] == "desc";
                        }
                        var filter = params.filter();
                        for (var key in filter) {
                            exparams[key] = filter[key];
                        }
                        return fn(exparams, params);
                    }
                });
            },
            reloadNgTable: function (ngtable, extParams, page) {

                var param = {extParams: extParams};
                if (page) param.page = page;
                ngtable.parameters(param, false);
                ngtable.reload();

            }
        }

    }])
    .factory("AlertMsg", ["toaster", function (toaster) {

        var info = function (msg, title) {
            toaster.add({
                type: 'info',
                title: angular.isDefined(title) ? title : "系统提示",
                message: msg
            });
        };
        var success = function (msg, title) {
            toaster.add({
                type: 'success',
                title: angular.isDefined(title) ? title : "系统提示",
                message: msg
            });
        };
        var failture = function (msg, title) {
            toaster.add({
                type: 'danger',
                title: angular.isDefined(title) ? title : "系统提示",
                message: msg,
                timeout: 6000
            });
        };
        var warn = function (msg, title) {
            toaster.add({
                type: 'warning',
                title: angular.isDefined(title) ? title : "系统提示",
                message: msg,
                timeout: 5000
            });
        };

        return {
            info: info,
            success: success,
            failtrue: failture,
            warn: warn
        }

    }])
    .factory('DlgMsg', ['$modal', function ($modal) {

        return {
            confirm: function (title, content, size) {
                var s = '';
                if (size)
                    s = size;
                return $modal.open({
                    animation: true,
                    size: s,
                    templateUrl: '/pages/tpls/modal/comfirm.tpl.html',
                    controller: function ($scope, $modalInstance, viewContent) {
                        $scope.viewContent = viewContent;
                        $scope.btnClick = function (btn) {
                            $modalInstance.close(btn)
                        };
                        $scope.cancel = function () {
                            $modalInstance.dismiss('cancel');
                        }
                    },
                    resolve: {
                        viewContent: function () {
                            return {
                                title: title,
                                content: content
                            };
                        }
                    }
                });
            },
            alert: function (title, content, size) {
                var s = '';
                if (size)
                    s = size;
                return $modal.open({
                    animation: true,
                    size: s,
                    templateUrl: '/pages/tpls/modal/alert.tpl.html',
                    controller: function ($scope, $modalInstance, viewContent) {
                        $scope.viewContent = viewContent;
                        $scope.btnClick = function (btn) {
                            $modalInstance.close(btn)
                        };
                        $scope.cancel = function () {
                            $modalInstance.dismiss('cancel');
                        }
                    },
                    resolve: {
                        viewContent: function () {
                            return {
                                title: title,
                                content: content
                            };
                        }
                    }
                });
            }
        }
    }])
    .factory("AppStorage", ["$localStorage", function ($localStorage) {
        return {
            set: function (key, data) {
                $localStorage[key] = data;
            },
            get: function (key) {
                return $localStorage[key];
            }
        }
    }])
    .factory("UserStgService", ["$localStorage", function ($localStorage) {

        return {
            setWebuser: function (data) {
                $localStorage.webUser = data;

            },
            getWebuser: function () {
                return $localStorage.webUser;

            },
            setApps: function (data) {
                $localStorage.apps = data;
            },
            getApps: function () {
                return $localStorage.apps;
            },
            remove: function () {
                delete $localStorage.apps;
                delete $localStorage.webUser;
            },
            checkMenuAuth: function (state) {
                var root = state.substr(0, state.indexOf("."));
                var chkResult = true;
                var apps = $localStorage.apps,
                    app;
                angular.forEach(apps, function (a) {
                    if (a.code == root) {
                        app = a;
                        return false;
                    }
                });
                if (!app) {
                    return false;
                }

                angular.forEach(app.menuList, function (menu) {
                    if (menu.state == state && menu.enable == false) {
                        chkResult = false;
                        return false;
                    }
                });

                return chkResult;
            }
        }

    }])
    .factory("AppUtil", function () {
        function toQueryPair(key, value) {
            if (typeof value == 'undefined') {
                return key;
            }
            return key + '=' + encodeURIComponent(value === null ? '' : String(value));
        }

        return {
            toQueryString: function toQueryString(obj) {
                var ret = [];
                for (var key in obj) {
                    key = encodeURIComponent(key);
                    var values = obj[key];
                    if (values && values.constructor == Array) {
                        var queryValues = [];
                        for (var i = 0, len = values.length, value; i < len; i++) {
                            value = values[i];
                            queryValues.push(toQueryPair(key, value));
                        }
                        ret = ret.concat(queryValues);
                    } else {
                        ret.push(toQueryPair(key, values));
                    }
                }
                return ret.join('&');
            }
        }
    });