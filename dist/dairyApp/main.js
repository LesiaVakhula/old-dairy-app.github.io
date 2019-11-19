(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n    display: -webkit-box;\r\n    display: flex;\r\n}\r\n\r\n.menu-container {\r\n    width: 18%;\r\n    background: #2b2f3e;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    height: 100vh;\r\n}\r\n\r\n.menu-container>div {\r\n    padding: 30px;\r\n    width: 100%;\r\n    height: -webkit-min-content;\r\n    height: -moz-min-content;\r\n    height: min-content;\r\n}\r\n\r\n.menu-container h1 {\r\n    color: #ffffff;\r\n    margin: 0;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.menu-container p {\r\n    color: #808080;\r\n    margin-top: 0;\r\n}\r\n\r\n.main-container {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    width: 100%;\r\n    background: #f9f9f9;\r\n}\r\n\r\napp-tasks {\r\n    width: 100%;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"menu-container\">\r\n    <div>\r\n      <h1>dairy app</h1>\r\n      <p>Comment with no sense</p>\r\n    </div>\r\n  </div>\r\n  <div class=\"main-container\">\r\n    <app-tasks></app-tasks>\r\n  </div>\r\n    \r\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'dairyApp';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _task_task_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./task/task.component */ "./src/app/task/task.component.ts");
/* harmony import */ var _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tasks/tasks.component */ "./src/app/tasks/tasks.component.ts");
/* harmony import */ var _comments_comments_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./comments/comments.component */ "./src/app/comments/comments.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _task_task_component__WEBPACK_IMPORTED_MODULE_3__["TaskComponent"],
                _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_4__["TasksComponent"],
                _comments_comments_component__WEBPACK_IMPORTED_MODULE_5__["CommentsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/comments/comments.component.css":
/*!*************************************************!*\
  !*** ./src/app/comments/comments.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-comments {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column;\r\n    -webkit-box-pack: justify;\r\n            justify-content: space-between;\r\n    height: 100%;\r\n    max-height: 92vh;\r\n}\r\n\r\nh1 {\r\n    margin: 3%;\r\n}\r\n\r\n.picture {\r\n    width: 52px;\r\n    height: 52px;\r\n    background: #ff8a00;\r\n    margin: 2% 2% 0 0;\r\n}\r\n\r\n.container-message:nth-child(2n+1) .picture {\r\n    background: #47568c;\r\n}\r\n\r\n.container-task {\r\n    max-height: 90vh;\r\n    overflow: auto;\r\n}\r\n\r\n.send-picture {\r\n    width: 52px;\r\n    height: 52px;\r\n    border: solid 1px #E6E6E6;\r\n    /* margin: 5%; */\r\n    background: #E6E6E6;\r\n}\r\n\r\n.container-message {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    border-bottom: solid 1px #CCCCCC;\r\n    margin: 1% 5%;\r\n}\r\n\r\n.container-send-message {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    justify-content: space-around;\r\n    margin: 1% 5%;\r\n}\r\n\r\n.message {\r\n    width: 90%;\r\n}\r\n\r\n#inputMessage {\r\n    height: 70px;\r\n    resize: none;\r\n    border: 2px solid #CCCCCC;\r\n    width: 99%;\r\n}\r\n\r\np {\r\n    margin-top: 2%;\r\n}"

/***/ }),

/***/ "./src/app/comments/comments.component.html":
/*!**************************************************!*\
  !*** ./src/app/comments/comments.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-comments\">\r\n  <h1>Comments#{{index}}</h1>\r\n  <div *ngIf=\"messageTask\" class=\"container-task\">\r\n    <div class=\"container-message\" *ngFor=\"let message of messageTask.comments\">\r\n      <div class=\"picture\">\r\n        <!-- <img src=\"\" alt=\"\"> -->\r\n      </div>\r\n      <div class=\"message\">\r\n        <p>{{message}}</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  \r\n  <div class=\"container-send-message\">\r\n    <div class=\"send-picture\">\r\n      <img src=\"\" alt=\"\">\r\n    </div>\r\n    <div class=\"message\">\r\n      <textarea #message name=\"inputMessage\" id=\"inputMessage\" cols=\"60\" rows=\"6\"\r\n        (keydown.control.Enter)=\"addMessage(message.value); message.value=''\"></textarea>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/comments/comments.component.ts":
/*!************************************************!*\
  !*** ./src/app/comments/comments.component.ts ***!
  \************************************************/
/*! exports provided: CommentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsComponent", function() { return CommentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_tasks_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/tasks.service */ "./src/app/service/tasks.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CommentsComponent = /** @class */ (function () {
    function CommentsComponent(taskservice) {
        this.taskservice = taskservice;
    }
    CommentsComponent.prototype.ngOnInit = function () { };
    CommentsComponent.prototype.addMessage = function (message) {
        var _this = this;
        this.messageTask.comments.push(message);
        var tasks = this.taskservice.getTasks()
            .map(function (task) {
            if (task.id === _this.messageTask.id) {
                task.comments = _this.messageTask.comments;
            }
            return task;
        });
        this.taskservice.setTasksToLocalStorage(tasks);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CommentsComponent.prototype, "messageTask", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CommentsComponent.prototype, "index", void 0);
    CommentsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-comments',
            template: __webpack_require__(/*! ./comments.component.html */ "./src/app/comments/comments.component.html"),
            styles: [__webpack_require__(/*! ./comments.component.css */ "./src/app/comments/comments.component.css")]
        }),
        __metadata("design:paramtypes", [_service_tasks_service__WEBPACK_IMPORTED_MODULE_1__["TasksService"]])
    ], CommentsComponent);
    return CommentsComponent;
}());



/***/ }),

/***/ "./src/app/service/tasks.service.ts":
/*!******************************************!*\
  !*** ./src/app/service/tasks.service.ts ***!
  \******************************************/
/*! exports provided: TasksService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasksService", function() { return TasksService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TasksService = /** @class */ (function () {
    function TasksService() {
        this.deleteTask$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.tasks$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
        this.tasks = [];
        this.init();
    }
    TasksService.prototype.init = function () {
        var _this = this;
        this.tasks$.next(this.getTasks());
        this.deleteTask$.subscribe(function (task) {
            var index;
            _this.tasks = _this.getTasks();
            index = _this.tasks.findIndex(function (item) { return item.id === task.id; });
            _this.tasks.splice(index, 1);
            _this.setTasksToLocalStorage(_this.tasks);
            _this.tasks$.next(_this.tasks);
        });
    };
    TasksService.prototype.getTasks = function () {
        return localStorage.getItem('tasks') !== null ? JSON.parse(localStorage.getItem('tasks')) : [];
    };
    TasksService.prototype.setTasksToLocalStorage = function (tasks) {
        localStorage.setItem('tasks', JSON.stringify(tasks));
        this.tasks$.next(this.getTasks());
    };
    TasksService.prototype.getTask = function (id) {
        return this.getTasks().find(function (data) { return data.id === id; });
    };
    TasksService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], TasksService);
    return TasksService;
}());



/***/ }),

/***/ "./src/app/task/task.component.css":
/*!*****************************************!*\
  !*** ./src/app/task/task.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-task {\r\n    margin: 3%;\r\n    border-bottom: solid 1px #e5e5e5;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: justify;\r\n            justify-content: space-between;\r\n    height: 7vh;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    font-size: 26px;\r\n    border-left: 5px solid transparent;\r\n}\r\n\r\nbutton {\r\n    height: 5vh;\r\n    background: none;\r\n    border: solid 2px #ff305a;\r\n    border-radius: 5px;\r\n    color: #ff305a;\r\n    width: 100%;\r\n    outline: none;\r\n}\r\n\r\nspan {\r\n    background: #27ccc0;\r\n    border-radius: 20px;\r\n    padding: 7px;\r\n    font-size: 14px;\r\n    color: #ffffff;\r\n    margin-left: 5px;\r\n}\r\n\r\n.container-task:focus {\r\n    border-left: 5px solid #ff0000;\r\n    padding-left: 3%;\r\n    margin-left: 0%;\r\n    outline: none;\r\n}\r\n\r\n.task-title {\r\n    width: 70%;\r\n    cursor: pointer;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    overflow: hidden;\r\n    height: 100%;\r\n}\r\n\r\n.task-delete {\r\n    width: 20%;\r\n}\r\n\r\nbutton {\r\n    cursor: pointer;\r\n}\r\n\r\n.task-name {\r\n    max-width: 80%;\r\n    overflow: auto;\r\n}"

/***/ }),

/***/ "./src/app/task/task.component.html":
/*!******************************************!*\
  !*** ./src/app/task/task.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-task\">\r\n  <div class=\"task-title\" (click)=\"sendId()\">\r\n    <div class=\"task-name\">\r\n      {{task.name}}\r\n    </div>\r\n    <span>{{ task.comments.length }}</span>\r\n  </div>\r\n  <div class=\"task-delete\">\r\n    <button (click)=\"deleteTask()\">Delete</button>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/task/task.component.ts":
/*!****************************************!*\
  !*** ./src/app/task/task.component.ts ***!
  \****************************************/
/*! exports provided: TaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskComponent", function() { return TaskComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TaskComponent = /** @class */ (function () {
    function TaskComponent() {
        this.delete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.idTask = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    TaskComponent.prototype.ngOnInit = function () {
    };
    TaskComponent.prototype.deleteTask = function () {
        this.delete.emit(this.task);
    };
    TaskComponent.prototype.sendId = function () {
        this.idTask.emit(this.task.id);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TaskComponent.prototype, "task", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], TaskComponent.prototype, "delete", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], TaskComponent.prototype, "idTask", void 0);
    TaskComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-task',
            template: __webpack_require__(/*! ./task.component.html */ "./src/app/task/task.component.html"),
            styles: [__webpack_require__(/*! ./task.component.css */ "./src/app/task/task.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TaskComponent);
    return TaskComponent;
}());



/***/ }),

/***/ "./src/app/tasks/tasks.component.css":
/*!*******************************************!*\
  !*** ./src/app/tasks/tasks.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-container {\r\n  width: 48%;\r\n  height: -webkit-min-content;\r\n  height: -moz-min-content;\r\n  height: min-content;\r\n  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);\r\n  background: #ffffff;\r\n  max-height: 95vh;\r\n  overflow: auto;\r\n}\r\n\r\n.comments-container {\r\n  margin-left: 3%;\r\n  width: 48%;\r\n  height: -webkit-min-content;\r\n  height: -moz-min-content;\r\n  height: min-content;\r\n  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);\r\n  background: #ffffff;\r\n  max-height: 95vh;\r\n}\r\n\r\n.input-text {\r\n  margin: 3%;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-pack: justify;\r\n          justify-content: space-between;\r\n}\r\n\r\n.input-container>h1 {\r\n  margin: 3%;\r\n  font-size: 36px;\r\n}\r\n\r\ninput {\r\n  width: 55%;\r\n  height: 5vh;\r\n  border-radius: 3px;\r\n  border: solid 2px #e5e5e5;\r\n  font-size: 26px;\r\n}\r\n\r\n::-webkit-input-placeholder {\r\n  color: #e5e5e5;\r\n  padding-left: 5px;\r\n  font-size: 18px;\r\n}\r\n\r\n::-moz-placeholder {\r\n  color: #e5e5e5;\r\n  padding-left: 5px;\r\n  font-size: 18px;\r\n}\r\n\r\n::-ms-input-placeholder {\r\n  color: #e5e5e5;\r\n  padding-left: 5px;\r\n  font-size: 18px;\r\n}\r\n\r\n::placeholder {\r\n  color: #e5e5e5;\r\n  padding-left: 5px;\r\n  font-size: 18px;\r\n}\r\n\r\n.add-new {\r\n  height: 5vh;\r\n  border-radius: 3px;\r\n  border: solid 1px #27ccc0;\r\n  background: #27ccc0;\r\n  width: 30%;\r\n  margin-left: 2%;\r\n  color: #ffffff;\r\n  font-size: 25px;\r\n}\r\n\r\n.item-container {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  width: 94%;\r\n  padding: 3%;\r\n}\r\n\r\n.button-disable {\r\n  opacity: 0.5;\r\n  cursor: not-allowed;\r\n}"

/***/ }),

/***/ "./src/app/tasks/tasks.component.html":
/*!********************************************!*\
  !*** ./src/app/tasks/tasks.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"item-container\">\r\n  <div class=\"input-container\">\r\n    <h1>Items</h1>\r\n    <div class=\"input-text\">\r\n      <input type=\"text\" placeholder=\"Type name here...\" (keyup)=\"0\" #input>\r\n      <button class=\"add-new\" \r\n        (click)=\"addTask(input.value); input.value=''\" \r\n        [disabled]=\"!input.value\" \r\n        [ngClass]=\"{'button-disable' : !input.value}\">Add new</button>\r\n    </div>\r\n    <div *ngIf=\"tasks.length\">\r\n      <div *ngFor=\"let task of tasks\">\r\n        <app-task \r\n          [task]=\"task\"\r\n          (delete)=\"onDelete($event)\"\r\n          (idTask)=\"message($event)\"\r\n          ></app-task>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"comments-container\" *ngIf=\"!!messageTask && !!tasks.length\">\r\n    <app-comments\r\n      [messageTask]=\"messageTask\"\r\n      [index]=\"index\"></app-comments>  \r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/tasks/tasks.component.ts":
/*!******************************************!*\
  !*** ./src/app/tasks/tasks.component.ts ***!
  \******************************************/
/*! exports provided: TasksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasksComponent", function() { return TasksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_tasks_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/tasks.service */ "./src/app/service/tasks.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TasksComponent = /** @class */ (function () {
    function TasksComponent(taskservice) {
        this.taskservice = taskservice;
        this.tasks = [];
        this.messageTask = null;
    }
    TasksComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tasksSubscribtion = this.taskservice.tasks$.subscribe(function (tasks) {
            _this.tasks = tasks;
        });
    };
    TasksComponent.prototype.ngOnDestroy = function () {
        this.tasksSubscribtion.unsubscribe();
    };
    TasksComponent.prototype.addTask = function (inputvalue) {
        var task = { name: inputvalue, comments: [], id: Math.floor(Math.random() * 1000) };
        this.tasks.push(task);
        this.taskservice.setTasksToLocalStorage(this.tasks);
    };
    TasksComponent.prototype.onDelete = function (task) {
        this.taskservice.deleteTask$.next(task);
        this.messageTask = null;
    };
    TasksComponent.prototype.message = function (id) {
        var _this = this;
        this.messageTask = this.taskservice.getTask(id);
        this.index = this.taskservice.getTasks().findIndex(function (elem) { return elem.id === _this.messageTask.id; }) + 1;
    };
    TasksComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tasks',
            template: __webpack_require__(/*! ./tasks.component.html */ "./src/app/tasks/tasks.component.html"),
            styles: [__webpack_require__(/*! ./tasks.component.css */ "./src/app/tasks/tasks.component.css")]
        }),
        __metadata("design:paramtypes", [_service_tasks_service__WEBPACK_IMPORTED_MODULE_1__["TasksService"]])
    ], TasksComponent);
    return TasksComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\BackUp\fedia\1\dairy-app.github.io\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map