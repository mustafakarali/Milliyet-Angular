'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
.controller('MyCtrl1', ['$scope', function($scope) {
	$scope.test = "12312412";
}])
.controller('Anasayfa',['$scope','$http',function($scope,$http){

	function haber_olsun(element) {
	  return element.ContentType === "NewsArticle";
	}



	$http.get('http://mw.milliyet.com.tr/ashx/Milliyet.ashx?aType=MobileAPI_HomePageV2')
	.success(function(data) {
		$scope.haberler = data.root.filter(haber_olsun);
	}).
	error(function(data, status, headers, config) {
		$scope.error = 1;
	});



}])
.controller('HaberSingle',['$scope','$http','$routeParams','$sce',function($scope,$http,$routeParams,$sce){
	$scope.url = "http://mw.milliyet.com.tr/ashx/Milliyet.ashx?aType=MobileAPI_NewsArticle&ArticleID="+$routeParams.haber_id;
	$http.get($scope.url).
	success(function(data) {
		$scope.haber = data.root[0];
		$scope.haber_detay = $sce.trustAsHtml($scope.haber.Description);
	}).
	error(function(data, status, headers, config) {
		$scope.error = 1;
	});
}])
.controller('Kategori',['$scope','$http','$routeParams','$sce',function($scope,$http,$routeParams,$sce){
	function haber_olsun(element) {
	  return element.ContentType === "NewsArticle";
	}
	
	$scope.url = "http://mw.milliyet.com.tr/ashx/Milliyet.ashx?aType=MobileAPI_NewsByCategoryV2&CategoryID="+$routeParams.kategori_id+"&PageIndex=0";
	$http.get($scope.url).
	success(function(data) {
		$scope.haberler = data.root.filter(haber_olsun);;
	}).
	error(function(data, status, headers, config) {
		$scope.error = 1;
	});
}]);



