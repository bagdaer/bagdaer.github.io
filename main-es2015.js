(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper \">\n\n  <app-categories\n    (addCategory)=\"onAddCategory($event)\"\n    (deleteCategory)=\"onDeleteCategory($event)\"\n    (searchCategory)=\"onSearchCategory($event)\"\n    (selectCategory)=\"onSelectCategory($event)\"\n    (updateCategory)=\"onUpdateCategory($event)\"\n\n    [categories]=\"categories\"\n    [categoryMap]=\"categoryMap\"\n\n    [selectedCategory]=\"selectedCategory\"\n    [uncompletedTotal]=\"uncompletedTotalTasksCount\"\n  >\n\n  </app-categories>\n\n\n  <div class=\"main-panel\">\n    <!-- Navbar -->\n    <nav class=\"navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top \">\n      <app-header\n        [showStat]=\"showStat\"\n        [categoryName]=\"selectedCategory ? selectedCategory.title: 'Все'\"\n        (toggleStat)=\"toggleStat($event)\"\n\n      ></app-header>\n    </nav>\n    <!-- End Navbar -->\n    <div class=\"content\">\n      <div class=\"container-fluid\">\n\n        <app-stat\n        [totalTasksInCategory]=\"totalTasksCountInCategory\"\n        [completeTasksInCategory]=\"completeCountInCategory\"\n        [uncompletedTasksInCategory]=\"uncompletedCountInCategory\"\n        *ngIf=\"showStat\">\n        </app-stat>\n        <!--        <div class=\"row\">-->\n\n\n        <app-tasks\n          [tasks]=\"tasks\"\n          (updateTask)=\"onUpdateTask($event)\"\n          (deleteTask)=\"onDeleteTask($event)\"\n          (selectCategory)=\"onSelectCategory($event)\"\n\n          (filterByTitle)=\"onSearchTasks($event)\"\n          (filterByStatus)=\"onFilterTasksByStatus($event)\"\n          (filterByPriority)=\"onFilterTasksByPriority($event)\"\n          [priorities]=\"priorities\"\n          [selectedCategory]=\"selectedCategory\"\n          (addTask)=\"onAddTask($event)\"\n\n        >\n        </app-tasks>\n\n\n<!--        <div class=\"row\">-->\n<!--          <div class=\"col-md-4\">-->\n<!--            <div class=\"card card-chart\">-->\n<!--              <div class=\"card-header card-header-success\">-->\n<!--                <div class=\"ct-chart\" id=\"dailySalesChart\"></div>-->\n<!--              </div>-->\n<!--              <div class=\"card-body\">-->\n<!--                <h4 class=\"card-title\">Daily Sales</h4>-->\n<!--                <p class=\"card-category\">-->\n<!--                  <span class=\"text-success\"><i class=\"fa fa-long-arrow-up\"></i> 55% </span> increase in today sales.-->\n<!--                </p>-->\n<!--              </div>-->\n<!--              <div class=\"card-footer\">-->\n<!--                <div class=\"stats\">-->\n<!--                  <i class=\"material-icons\">access_time</i> updated 4 minutes ago-->\n<!--                </div>-->\n<!--              </div>-->\n<!--            </div>-->\n<!--          </div>-->\n<!--          <div class=\"col-md-4\">-->\n<!--            <div class=\"card card-chart\">-->\n<!--              <div class=\"card-header card-header-warning\">-->\n<!--                <div class=\"ct-chart\" id=\"websiteViewsChart\"></div>-->\n<!--              </div>-->\n<!--              <div class=\"card-body\">-->\n<!--                <h4 class=\"card-title\">Email Subscriptions</h4>-->\n<!--                <p class=\"card-category\">Last Campaign Performance</p>-->\n<!--              </div>-->\n<!--              <div class=\"card-footer\">-->\n<!--                <div class=\"stats\">-->\n<!--                  <i class=\"material-icons\">access_time</i> campaign sent 2 days ago-->\n<!--                </div>-->\n<!--              </div>-->\n<!--            </div>-->\n<!--          </div>-->\n<!--          <div class=\"col-md-4\">-->\n<!--            <div class=\"card card-chart\">-->\n<!--              <div class=\"card-header card-header-danger\">-->\n<!--                <div class=\"ct-chart\" id=\"completedTasksChart\"></div>-->\n<!--              </div>-->\n<!--              <div class=\"card-body\">-->\n<!--                <h4 class=\"card-title\">Completed Tasks</h4>-->\n<!--                <p class=\"card-category\">Last Campaign Performance</p>-->\n<!--              </div>-->\n<!--              <div class=\"card-footer\">-->\n<!--                <div class=\"stats\">-->\n<!--                  <i class=\"material-icons\">access_time</i> campaign sent 2 days ago-->\n<!--                </div>-->\n<!--              </div>-->\n<!--            </div>-->\n<!--          </div>-->\n<!--        </div>-->\n<!--        <div class=\"row\">-->\n<!--          <div class=\"col-lg-6 col-md-12\">-->\n<!--            <div class=\"card\">-->\n<!--              <div class=\"card-header card-header-tabs card-header-primary\">-->\n<!--                <div class=\"nav-tabs-navigation\">-->\n<!--                  <div class=\"nav-tabs-wrapper\">-->\n<!--                    <span class=\"nav-tabs-title\">Tasks:</span>-->\n<!--                    <ul class=\"nav nav-tabs\" data-tabs=\"tabs\">-->\n<!--                      <li class=\"nav-item\">-->\n<!--                        <a class=\"nav-link active\" href=\"#profile\" data-toggle=\"tab\">-->\n<!--                          <i class=\"material-icons\">bug_report</i> Bugs-->\n<!--                          <div class=\"ripple-container\"></div>-->\n<!--                        </a>-->\n<!--                      </li>-->\n<!--                      <li class=\"nav-item\">-->\n<!--                        <a class=\"nav-link\" href=\"#messages\" data-toggle=\"tab\">-->\n<!--                          <i class=\"material-icons\">code</i> Website-->\n<!--                          <div class=\"ripple-container\"></div>-->\n<!--                        </a>-->\n<!--                      </li>-->\n<!--                      <li class=\"nav-item\">-->\n<!--                        <a class=\"nav-link\" href=\"#settings\" data-toggle=\"tab\">-->\n<!--                          <i class=\"material-icons\">cloud</i> Server-->\n<!--                          <div class=\"ripple-container\"></div>-->\n<!--                        </a>-->\n<!--                      </li>-->\n<!--                    </ul>-->\n<!--                  </div>-->\n<!--                </div>-->\n<!--              </div>-->\n<!--              <div class=\"card-body\">-->\n<!--                <div class=\"tab-content\">-->\n<!--                  <div class=\"tab-pane active\" id=\"profile\">-->\n<!--                    <table class=\"table\">-->\n<!--                      <tbody>-->\n<!--                      <tr>-->\n<!--                        <td>-->\n<!--                          <div class=\"form-check\">-->\n<!--                            <label class=\"form-check-label\">-->\n<!--                              <input class=\"form-check-input\" type=\"checkbox\" value=\"\" checked>-->\n<!--                              <span class=\"form-check-sign\">-->\n<!--                                    <span class=\"check\"></span>-->\n<!--                                  </span>-->\n<!--                            </label>-->\n<!--                          </div>-->\n<!--                        </td>-->\n<!--                        <td>Sign contract for \"What are conference organizers afraid of?\"</td>-->\n<!--                        <td class=\"td-actions text-right\">-->\n<!--                          <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-primary btn-link btn-sm\">-->\n<!--                            <i class=\"material-icons\">edit</i>-->\n<!--                          </button>-->\n<!--                          <button type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-link btn-sm\">-->\n<!--                            <i class=\"material-icons\">close</i>-->\n<!--                          </button>-->\n<!--                        </td>-->\n<!--                      </tr>-->\n<!--                      <tr>-->\n<!--                        <td>-->\n<!--                          <div class=\"form-check\">-->\n<!--                            <label class=\"form-check-label\">-->\n<!--                              <input class=\"form-check-input\" type=\"checkbox\" value=\"\">-->\n<!--                              <span class=\"form-check-sign\">-->\n<!--                                    <span class=\"check\"></span>-->\n<!--                                  </span>-->\n<!--                            </label>-->\n<!--                          </div>-->\n<!--                        </td>-->\n<!--                        <td>Lines From Great Russian Literature? Or E-mails From My Boss?</td>-->\n<!--                        <td class=\"td-actions text-right\">-->\n<!--                          <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-primary btn-link btn-sm\">-->\n<!--                            <i class=\"material-icons\">edit</i>-->\n<!--                          </button>-->\n<!--                          <button type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-link btn-sm\">-->\n<!--                            <i class=\"material-icons\">close</i>-->\n<!--                          </button>-->\n<!--                        </td>-->\n<!--                      </tr>-->\n<!--                      <tr>-->\n<!--                        <td>-->\n<!--                          <div class=\"form-check\">-->\n<!--                            <label class=\"form-check-label\">-->\n<!--                              <input class=\"form-check-input\" type=\"checkbox\" value=\"\">-->\n<!--                              <span class=\"form-check-sign\">-->\n<!--                                    <span class=\"check\"></span>-->\n<!--                                  </span>-->\n<!--                            </label>-->\n<!--                          </div>-->\n<!--                        </td>-->\n<!--                        <td>Flooded: One year later, assessing what was lost and what was found when a ravaging rain-->\n<!--                          swept through metro Detroit-->\n<!--                        </td>-->\n<!--                        <td class=\"td-actions text-right\">-->\n<!--                          <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-primary btn-link btn-sm\">-->\n<!--                            <i class=\"material-icons\">edit</i>-->\n<!--                          </button>-->\n<!--                          <button type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-link btn-sm\">-->\n<!--                            <i class=\"material-icons\">close</i>-->\n<!--                          </button>-->\n<!--                        </td>-->\n<!--                      </tr>-->\n<!--                      <tr>-->\n<!--                        <td>-->\n<!--                          <div class=\"form-check\">-->\n<!--                            <label class=\"form-check-label\">-->\n<!--                              <input class=\"form-check-input\" type=\"checkbox\" value=\"\" checked>-->\n<!--                              <span class=\"form-check-sign\">-->\n<!--                                    <span class=\"check\"></span>-->\n<!--                                  </span>-->\n<!--                            </label>-->\n<!--                          </div>-->\n<!--                        </td>-->\n<!--                        <td>Create 4 Invisible User Experiences you Never Knew About</td>-->\n<!--                        <td class=\"td-actions text-right\">-->\n<!--                          <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-primary btn-link btn-sm\">-->\n<!--                            <i class=\"material-icons\">edit</i>-->\n<!--                          </button>-->\n<!--                          <button type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-link btn-sm\">-->\n<!--                            <i class=\"material-icons\">close</i>-->\n<!--                          </button>-->\n<!--                        </td>-->\n<!--                      </tr>-->\n<!--                      </tbody>-->\n<!--                    </table>-->\n<!--                  </div>-->\n<!--                  <div class=\"tab-pane\" id=\"messages\">-->\n<!--                    <table class=\"table\">-->\n<!--                      <tbody>-->\n<!--                      <tr>-->\n<!--                        <td>-->\n<!--                          <div class=\"form-check\">-->\n<!--                            <label class=\"form-check-label\">-->\n<!--                              <input class=\"form-check-input\" type=\"checkbox\" value=\"\" checked>-->\n<!--                              <span class=\"form-check-sign\">-->\n<!--                                    <span class=\"check\"></span>-->\n<!--                                  </span>-->\n<!--                            </label>-->\n<!--                          </div>-->\n<!--                        </td>-->\n<!--                        <td>Flooded: One year later, assessing what was lost and what was found when a ravaging rain-->\n<!--                          swept through metro Detroit-->\n<!--                        </td>-->\n<!--                        <td class=\"td-actions text-right\">-->\n<!--                          <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-primary btn-link btn-sm\">-->\n<!--                            <i class=\"material-icons\">edit</i>-->\n<!--                          </button>-->\n<!--                          <button type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-link btn-sm\">-->\n<!--                            <i class=\"material-icons\">close</i>-->\n<!--                          </button>-->\n<!--                        </td>-->\n<!--                      </tr>-->\n<!--                      <tr>-->\n<!--                        <td>-->\n<!--                          <div class=\"form-check\">-->\n<!--                            <label class=\"form-check-label\">-->\n<!--                              <input class=\"form-check-input\" type=\"checkbox\" value=\"\">-->\n<!--                              <span class=\"form-check-sign\">-->\n<!--                                    <span class=\"check\"></span>-->\n<!--                                  </span>-->\n<!--                            </label>-->\n<!--                          </div>-->\n<!--                        </td>-->\n<!--                        <td>Sign contract for \"What are conference organizers afraid of?\"</td>-->\n<!--                        <td class=\"td-actions text-right\">-->\n<!--                          <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-primary btn-link btn-sm\">-->\n<!--                            <i class=\"material-icons\">edit</i>-->\n<!--                          </button>-->\n<!--                          <button type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-link btn-sm\">-->\n<!--                            <i class=\"material-icons\">close</i>-->\n<!--                          </button>-->\n<!--                        </td>-->\n<!--                      </tr>-->\n<!--                      </tbody>-->\n<!--                    </table>-->\n<!--                  </div>-->\n<!--                  <div class=\"tab-pane\" id=\"settings\">-->\n<!--                    <table class=\"table\">-->\n<!--                      <tbody>-->\n<!--                      <tr>-->\n<!--                        <td>-->\n<!--                          <div class=\"form-check\">-->\n<!--                            <label class=\"form-check-label\">-->\n<!--                              <input class=\"form-check-input\" type=\"checkbox\" value=\"\">-->\n<!--                              <span class=\"form-check-sign\">-->\n<!--                                    <span class=\"check\"></span>-->\n<!--                                  </span>-->\n<!--                            </label>-->\n<!--                          </div>-->\n<!--                        </td>-->\n<!--                        <td>Lines From Great Russian Literature? Or E-mails From My Boss?</td>-->\n<!--                        <td class=\"td-actions text-right\">-->\n<!--                          <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-primary btn-link btn-sm\">-->\n<!--                            <i class=\"material-icons\">edit</i>-->\n<!--                          </button>-->\n<!--                          <button type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-link btn-sm\">-->\n<!--                            <i class=\"material-icons\">close</i>-->\n<!--                          </button>-->\n<!--                        </td>-->\n<!--                      </tr>-->\n<!--                      <tr>-->\n<!--                        <td>-->\n<!--                          <div class=\"form-check\">-->\n<!--                            <label class=\"form-check-label\">-->\n<!--                              <input class=\"form-check-input\" type=\"checkbox\" value=\"\" checked>-->\n<!--                              <span class=\"form-check-sign\">-->\n<!--                                    <span class=\"check\"></span>-->\n<!--                                  </span>-->\n<!--                            </label>-->\n<!--                          </div>-->\n<!--                        </td>-->\n<!--                        <td>Flooded: One year later, assessing what was lost and what was found when a ravaging rain-->\n<!--                          swept through metro Detroit-->\n<!--                        </td>-->\n<!--                        <td class=\"td-actions text-right\">-->\n<!--                          <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-primary btn-link btn-sm\">-->\n<!--                            <i class=\"material-icons\">edit</i>-->\n<!--                          </button>-->\n<!--                          <button type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-link btn-sm\">-->\n<!--                            <i class=\"material-icons\">close</i>-->\n<!--                          </button>-->\n<!--                        </td>-->\n<!--                      </tr>-->\n<!--                      <tr>-->\n<!--                        <td>-->\n<!--                          <div class=\"form-check\">-->\n<!--                            <label class=\"form-check-label\">-->\n<!--                              <input class=\"form-check-input\" type=\"checkbox\" value=\"\" checked>-->\n<!--                              <span class=\"form-check-sign\">-->\n<!--                                    <span class=\"check\"></span>-->\n<!--                                  </span>-->\n<!--                            </label>-->\n<!--                          </div>-->\n<!--                        </td>-->\n<!--                        <td>Sign contract for \"What are conference organizers afraid of?\"</td>-->\n<!--                        <td class=\"td-actions text-right\">-->\n<!--                          <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-primary btn-link btn-sm\">-->\n<!--                            <i class=\"material-icons\">edit</i>-->\n<!--                          </button>-->\n<!--                          <button type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-link btn-sm\">-->\n<!--                            <i class=\"material-icons\">close</i>-->\n<!--                          </button>-->\n<!--                        </td>-->\n<!--                      </tr>-->\n<!--                      </tbody>-->\n<!--                    </table>-->\n<!--                  </div>-->\n<!--                </div>-->\n<!--              </div>-->\n<!--            </div>-->\n<!--          </div>-->\n<!--          <div class=\"col-lg-6 col-md-12\">-->\n\n\n<!--          </div>-->\n<!--        </div>-->\n      </div>\n    </div>\n    <app-footer></app-footer>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dialog/confirm-dialog/confirm-dialog.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dialog/confirm-dialog/confirm-dialog.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 mat-dialog-title>{{dialogTitle}}</h1>\n\n<div mat-dialog-content>\n  <p>{{message}}</p>\n</div>\n\n<div mat-dialog-actions>\n  <button mat-raised-button color=\"primary\" (click)=\"onConfirm()\">OK</button>\n  <button mat-button (click)=\"onCancel()\">Отмена</button>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dialog/edit-category-dialog/edit-category-dialog.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dialog/edit-category-dialog/edit-category-dialog.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-dialog-content>\n  <p mat-dialog-title>{{dialogTitle}}</p>\n  <mat-form-field>\n    <mat-label>Название (15 символов)</mat-label>\n    <input #inputTitle matInput maxlength=\"15\" [(ngModel)]=\"categoryTitle\" (keydown.enter)=\"onConfirm()\">\n    <button *ngIf=\"categoryTitle.trim.length > 0\"\n            class=\"size25\" mat-button matSuffix mat-icon-button aria-label=\"Clear\"\n            (click)=\"categoryTitle = ''\"\n    >\n      <mat-icon>clear</mat-icon>\n    </button>\n  </mat-form-field>\n</mat-dialog-content>\n<mat-dialog-actions>\n  <div class=\"col-12 text-center\">\n    <button\n      mat-raised-button color=\"primary\"\n      (click)=\"onConfirm()\"\n      [disabled]=\"inputTitle.value.trim().length==0\"\n    >Сохранить</button>\n    <button\n      mat-raised-button\n      (click)=\"onCancel()\"\n    >Отмена</button>\n  </div>\n  <div class=\"col-12 text-center\">\n    <button\n      *ngIf=\"canDelete\"\n      mat-button\n      (click)=\"delete()\"\n      class=\"red\"\n    >Удалить</button>\n  </div>\n\n</mat-dialog-actions>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dialog/edit-priority-dialog/edit-priority-dialog.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dialog/edit-priority-dialog/edit-priority-dialog.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-dialog-content>\n  <p mat-dialog-title>{{dialogTitle}}</p>\n\n  <mat-form-field>\n    <mat-label>Название (20 символов)</mat-label>\n    <input\n      #inputTitle\n      (keydown.enter)=\"onConfirm()\"\n      [(ngModel)]=\"priorityTitle\"\n      maxInput\n      maxlength=\"20\"\n    >\n    <button\n      (click)=\"priorityTitle = ''\"\n      *ngIf=\"priorityTitle.trim().length > 0\"\n      aria-label=\"Clear\" class=\"clear-icon size25\"\n      mat-button\n      mat-icon-button\n      matSuffix\n    >\n      <mat-icon>clear</mat-icon>\n    </button>\n  </mat-form-field>\n</mat-dialog-content>\n\n<mat-dialog-actions>\n  <div>\n    <button\n      (click)=\"onConfirm()\"\n      [disabled]=\"inputTitle.value.trim().length==0\"\n      color=\"primary\"\n      mat-raised-button\n    >\n      Сохранить\n    </button>\n  </div>\n  <div class=\"col-12 text-center\">\n    <button (click)=\"delete()\"\n            *ngIf=\"canDelete()\"\n            class=\"red\"\n            mat-button\n    >\n      Удалить\n    </button>\n  </div>\n\n</mat-dialog-actions>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dialog/edit-task-dialog/edit-task-dialog.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dialog/edit-task-dialog/edit-task-dialog.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-dialog-content>\n  <p mat-dialog-title>{{dialogTitle}}</p>\n\n  <mat-form-field>\n\n    <input #inputTitle matInput [(ngModel)]=\"tmpTitle\" (keydown.enter)=\"onConfirm()\">\n\n    <button *ngIf=\"tmpTitle.trim().length > 0\"\n    mat-button matSuffix mat-icon-button aria-label=\"Clear\"\n    (click)=\"tmpTitle = '' \" class=\"size25\">\n      <mat-icon>clear</mat-icon>\n    </button>\n\n  </mat-form-field>\n\n  <mat-form-field>\n\n    <mat-label>Выбрать категорию</mat-label>\n\n    <mat-select [(ngModel)]=\"tmpCategory\">\n      <mat-option [value]=\"null\">Без категории</mat-option>\n      <mat-option *ngFor=\"let cat of categories\" [value]=\"cat\">{{cat.title}}</mat-option>\n    </mat-select>\n\n  </mat-form-field>\n  <mat-form-field>\n\n    <mat-label>Выбрать приоритет</mat-label>\n\n    <mat-select [(ngModel)]=\"tmpPriority\">\n      <mat-option [value]=\"null\">Без приоритета</mat-option>\n      <mat-option *ngFor=\"let prior of priorities\" [value]=\"prior\">{{prior.title}}</mat-option>\n    </mat-select>\n\n  </mat-form-field>\n\n  <mat-form-field>\n    <input #inputDate matInput placeholder=\"Выбрать дату выполнения\" readonly=\"true\"\n    [matDatepicker]=\"picker\" [(ngModel)]=\"tmpDate\" (click)=\"picker.open()\">\n\n    <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n\n    <mat-datepicker #picker></mat-datepicker>\n\n    <button *ngIf=\"inputDate.value.trim().length > 0\"\n            mat-button matSuffix mat-icon-button aria-label=\"Clear\"\n            (click)=\"tmpDate = null \" class=\"size25\">\n      <mat-icon>clear</mat-icon>\n    </button>\n\n  </mat-form-field>\n\n</mat-dialog-content>\n\n\n<mat-dialog-actions>\n  <div class=\"col-md-5 col-12\">\n  <button mat-raised-button color=\"primary\" (click)=\"onConfirm()\" [disabled]=\"inputTitle.value.trim().length==0\">Сохранить</button>\n  <button mat-raised-button (click)=\"onCancel()\">Отмена</button>\n  </div>\n  <div class=\"col-md-7 col-12 text-right\" *ngIf=\"taskStatus\">\n  <button mat-button *ngIf=\"task.completed\" (click)=\"onStatusTask(true)\">Активировать задачу</button>\n  <button mat-button *ngIf=\"!task.completed\" (click)=\"onStatusTask(false)\">Завершить задачу</button>\n\n  <button mat-button class=\"red\" (click)=\"onDelete()\">Удалить задачу</button>\n  </div>\n</mat-dialog-actions>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dialog/login-dialog/login-dialog.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dialog/login-dialog/login-dialog.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <div class=\"row\">\n    <div>\n      <h1 *ngIf=\"authenticationService && authenticationService.userData | async\">Hello {{ (authenticationService.userData | async)?.email }}</h1>\n      <div *ngIf=\"!(authenticationService.userData | async)\">\n<mat-dialog-content>\n  <p class=\"error-message\">{{authenticationService.errorMessage}}</p>\n  <p class=\"settings-title with-subtitle\" mat-dialog-title>Войдите в учетную запись</p>\n\n  <mat-form-field>\n\n      <mat-label for=\"email\">Email address:</mat-label>\n      <input\n        #inputEmail\n        type=\"text\"\n        [(ngModel)]=\"email\" placeholder=\"email\"\n        matInput\n        required\n      >\n\n  </mat-form-field>\n\n  <mat-form-field>\n\n      <mat-label for=\"pwd\">Password:</mat-label>\n      <input\n        #inputPassword\n        type=\"password\"\n        [(ngModel)]=\"password\" id=\"pwd\" placeholder=\"password\"\n        matInput\n        required\n      >\n\n  </mat-form-field>\n\n</mat-dialog-content>\n\n        <mat-dialog-actions>\n\n\n            <button\n              [disabled]=\"loading || inputEmail.value.trim().length == 0 || inputPassword.value.trim().length==0\"\n              (click)=\"signIn()\"\n              color=\"primary\"\n              mat-button\n              mat-raised-button\n            >\n              <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm mr-1\"></span>\n              Войти\n            </button>\n\n            <button\n              (click)=\"signUp()\"\n              mat-button\n              mat-raised-button\n            >\n              Регистрация\n            </button>\n\n          <button\n            (click)=\"clouse()\"\n            mat-button\n            mat-raised-button\n          >\n            Отмена\n          </button>\n\n\n        </mat-dialog-actions>\n\n       <div class=\"google-form\">\n        <button\n          (click)=\"authenticationService.SigninWithGoogle()\"\n          class=\"header-icon\"\n          mat-icon-button\n        >\n          <mat-icon class=\"google-icon\"></mat-icon>\n          <span>Войти с google</span>\n        </button>\n       </div>\n\n      </div>\n\n      <mat-dialog-actions>\n\n      <button\n        (click)=\"signOut()\"\n        *ngIf=\"authenticationService.userData | async\"\n        color=\"primary\"\n        mat-button\n        mat-raised-button\n      >\n        Выйти\n      </button>\n\n      <button\n        (click)=\"clouse()\"\n        *ngIf=\"authenticationService.userData | async\"\n        mat-button\n        mat-raised-button\n      >\n        Продолжить\n      </button>\n\n      </mat-dialog-actions>\n\n    </div>\n\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dialog/settings-dialog/settings-dialog.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dialog/settings-dialog/settings-dialog.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-dialog-content>\n\n  <p class=\"settings-title with-subtitle\" mat-dialog-title>Настройка приоритетов</p>\n  <p class=\"little subtitle\">При изменении - цвет сразу будет отображаться в таблице</p>\n\n  <app-priorities\n    (addPriority)=\"onAddPriority($event)\"\n    (deletePriority)=\"onDeletePriority($event)\"\n    (updatePriority)=\"onUpdatePriority($event)\"\n    [priorities]=\"priorities\"\n  >\n\n  </app-priorities>\n\n</mat-dialog-content>\n\n<mat-dialog-actions>\n\n  <button (click)=\"onClose()\" color=\"primary\" mat-raised-button>Закрыть</button>\n\n</mat-dialog-actions>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/categories/categories.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/categories/categories.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--suppress ALL -->\n<div class=\"sidebar\" data-color=\"purple\" data-background-color=\"white\">\n  <div id=\"categories\">\n\n    <div class=\"logo\">\n      <span class=\"nav-title\">Категории</span>\n      <span class=\"add-icon-area\">\n      <button mat-icon-button class=\"add-icon\" (click)=\"openAddDialog()\">\n        <mat-icon>add</mat-icon>\n      </button>\n    </span>\n    </div>\n\n    <div class=\"sidebar-wrapper\">\n    <ul class=\"nav\">\n\n    <div class=\"search-category-area\">\n      <mat-form-field class=\"example-full-width\">\n        <input #inputSearchCategory\n               (keydown.escape)=\"searchCategoryText=''; onFilterByCategory()\"\n               (keyup)=\"onFilterByCategory()\"\n               [(ngModel)]=\"searchCategoryText\"\n               matInput\n               matlength=\"256\"\n               placeholder=\"Поиск категории\"\n        >\n        <button\n          (click)=\"searchCategoryText=''; onFilterByCategory()\"\n          *ngIf=\"inputSearchCategory.value.trim().length > 0\"\n          aria-label=\"Clear\" class=\"search-category-button size25 gray\"\n          mat-button\n          mat-icon-button\n          matSuffix\n        >\n          <mat-icon>clear</mat-icon>\n        </button>\n      </mat-form-field>\n    </div>\n\n    <div class=\"sidebar-wrapper\">\n      <ul class=\"nav\">\n\n        <li class=\"nav-item category\" (click)=\"showByCategory(null)\" [class.active]=\"selectedCategory === null\">\n          <a class=\"nav-link pointer\">\n            <span class=\"all-category-title\">Все категории</span>\n            <span class=\"uncompleted-count\">{{uncompletedTotal}}</span>\n          </a>\n        </li>\n\n        <div class=\"line\"></div>\n\n        <li *ngFor=\"let mapValue of selectedCategoryMap | keyvalue ; let index = index\"\n            (click)=\"showByCategory(mapValue.key)\"\n            class=\"nav-item pointer\"\n            [class.active]=\" mapValue.key === selectedCategory\"\n            (mouseleave)=\"showEditIcon(null)\"\n            (mouseenter)=\"showEditIcon(index)\"\n        >\n          <a class=\"nav-link\">\n            <span class=\"category-title\">{{mapValue.key.title}}</span>\n            <span class=\"edit-category-icon-area\">\n            <mat-icon class=\"edit-category-icon\" *ngIf=\"indexMouseMove === index\"\n                      (click)=\"$event.stopPropagation(); openEditCategoryDialog(mapValue.key)\"\n            >edit\n            </mat-icon>\n          </span>\n            <span class=\"uncompleted-count\">{{mapValue.value}}</span>\n          </a>\n        </li>\n      </ul>\n      <div *ngIf=\"categories && categories.length == 0\"><p class=\"not-found\">Ничего не найдено</p></div>\n    </div>\n    </ul>\n    </div>\n    <div class=\"sidebar-background\"></div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/footer/footer.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/footer/footer.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"footer\">\n  <div class=\"container-fluid\">\n    <nav class=\"float-left\">\n      <ul>\n        <li>\n          <a href=\"https://www.creative-tim.com\">\n            Creative Tim\n          </a>\n        </li>\n        <li>\n          <a href=\"https://creative-tim.com/presentation\">\n            About Us\n          </a>\n        </li>\n        <li>\n          <a href=\"http://blog.creative-tim.com\">\n            Blog\n          </a>\n        </li>\n        <li>\n          <a href=\"https://www.creative-tim.com/license\">\n            Licenses\n          </a>\n        </li>\n      </ul>\n    </nav>\n    <div class=\"copyright float-right\">\n      &copy;\n      <script>\n        document.write(new Date().getFullYear())\n      </script>, made with <i class=\"material-icons\">favorite</i> by\n      <a href=\"https://www.creative-tim.com\" target=\"_blank\">Creative Tim</a> for a better web.\n    </div>\n  </div>\n</footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/header/header.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/header/header.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n  <div class=\"row settings\">\n\n    <div class=\"col-10 text-left align-self-top\">\n\n      <p class=\"navbar-brand\">{{categoryName}}</p>\n\n      <p class=\"link navbar-brand pointer\" (click)=\"onToggleStat()\" *ngIf=\"showStat\">Скрыть статистику</p>\n      <p class=\"link navbar-brand pointer\" (click)=\"onToggleStat()\" *ngIf=\"!showStat\">Показать статистику</p>\n\n    </div>\n\n    <div class=\"col-2 text-right align-self-top\">\n\n      <button (click)=\"showAuth()\" class=\"header-icon\" mat-icon-button>\n        <mat-icon *ngIf=\"!(authService.userData | async)\">person</mat-icon>\n        <mat-icon *ngIf=\"(authService.userData | async)\">how_to_reg</mat-icon>\n      </button>\n\n      <button mat-icon-button class=\"header-icon\" (click)=\"showSettings()\">\n        <mat-icon>settings</mat-icon>\n      </button>\n\n      <button mat-icon-button class=\"header-icon\">\n        <mat-icon>help</mat-icon>\n      </button>\n\n    </div>\n\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/priorities/priorities.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/priorities/priorities.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngFor=\"let priority of priorities\" class=\"vertical-middle priorities\">\n\n  <div class=\"row align-self-baseline\">\n\n    <div class=\"col-7\">\n      <a class=\"pointer\" (click)=\"onEditPriority(priority)\">{{priority.title}}</a>\n    </div>\n\n    <div class=\"col-2 text-right\">\n      <span [(colorPicker)]=\"priority.color\"\n            [style.background]=\"priority.color\"\n            class=\"color-circle\"\n      ></span>\n    </div>\n\n    <div class=\"col-1 text-left\">\n      <p class=\"pointer gray\" (click)=\"onDeletePriority(priority)\">\n        <mat-icon>delete</mat-icon>\n      </p>\n    </div>\n\n    <div class=\"col-1 text-left\">\n      <p class=\"pointer gray\" (click)=\"onEditPriority(priority)\">\n        <mat-icon>edit</mat-icon>\n      </p>\n    </div>\n\n  </div>\n\n</div>\n\n<p class=\"link little\" (click)=\"onAddPriority()\">\n  Добавить приоритет\n</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/stat/stat-card/stat-card.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/stat/stat-card/stat-card.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card card-stats\" [ngClass]=\"{'completed-card': completed}\">\n\n  <div class=\"card-header card-header-warning card-header-icon\">\n\n    <div class=\"card-icon\">\n      <i class=\"material-icons\">{{iconName}}</i>\n    </div>\n    <p class=\"card-category\"></p>\n    <h3 class=\"card-title\">{{count1}}\n      <span *ngIf=\"countTotal\">\n        из {{countTotal}}\n      </span>\n    </h3>\n  </div>\n\n  <div class=\"card-footer\">\n\n    <div class=\"stats\">\n      <p class=\"stat-card-title\">{{title}}</p>\n    </div>\n\n  </div>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/stat/stat.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/stat/stat.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <div class=\"row\">\n\n    <app-stat-card\n    class=\"col-lg-3 col-md-6 col-sm-6\"\n    title=\"Завершенные задачи\"\n    iconName=\"done_outline\"\n    [count1]=\"completeTasksInCategory\"\n    [countTotal]=\"totalTasksInCategory\"\n    [completed]=\"true\"\n    >\n    </app-stat-card>\n\n    <app-stat-card\n      class=\"col-lg-3 col-md-6 col-sm-6\"\n      title=\"Незавершенные задачи\"\n      iconName=\"thumb_down_alt\"\n      [count1]=\"uncompletedTasksInCategory\"\n      [countTotal]=\"totalTasksInCategory\"\n    >\n    </app-stat-card>\n\n    <app-stat-card\n      class=\"col-lg-3 col-md-6 col-sm-6 completed-card\"\n      title=\"Процент завершенных задач\"\n      iconName=\"poll\"\n      [count1]=\"completeTasksInCategory ? (completeTasksInCategory/totalTasksInCategory | percent) : '0 %'\"\n      [completed]=\"true\"\n    >\n    </app-stat-card>\n\n    <app-stat-card\n      class=\"col-lg-3 col-md-6 col-sm-6\"\n      title=\"Процент незавершенных задач\"\n      iconName=\"thumb_down_alt\"\n      [count1]=\"uncompletedTasksInCategory ? (uncompletedTasksInCategory/totalTasksInCategory | percent) : '0 %'\"\n    >\n    </app-stat-card>\n\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/tasks/tasks.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/tasks/tasks.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n\n  <div class=\"col-md-3 col-sm-12\">\n\n    <mat-form-field>\n      <input #filterInput\n      (keydown.escape)=\"searchTaskText = ''; onFilterByTitle()\"\n      (keyup)=\"onFilterByTitle()\"\n      [(ngModel)]=\"searchTaskText\"\n\n      matInput placeholder=\"Поиск в текущей категории\"\n      >\n      <button\n      (click)=\"searchTaskText=''; onFilterByTitle()\"\n      *ngIf=\"filterInput.value.trim().length > 0\"\n      aria-label=\"Clear\" class=\"clear-icon size25 gray\"\n      mat-button\n      mat-icon-button\n      matSuffix\n      >\n        <mat-icon>clear</mat-icon>\n      </button>\n    </mat-form-field>\n  </div>\n\n  <div class=\"col-md-3 col-sm-12\">\n    <mat-form-field>\n      <mat-select #statusFilter (valueChange)=\"onFilterByStatus(this.$event)\"\n      [value]=\"selectedStatusFilter\" placeholder=\"Фильтр по статусу\"\n      >\n        <mat-option [value]=\"null\">Все статусы</mat-option>\n        <mat-option [value]=\"true\">Завершенные задачи</mat-option>\n        <mat-option [value]=\"false\">Незавершенные задачи</mat-option>\n      </mat-select>\n      <button\n        (click)=\"$event.stopPropagation(); onFilterByStatus(null)\"\n        *ngIf=\"selectedStatusFilter != null\"\n\n        aria-label=\"Clear\" class=\"clear-icon size25 gray\"\n        mat-button\n        mat-icon-button\n\n        matSuffix\n      >\n        <mat-icon>clear</mat-icon>\n      </button>\n    </mat-form-field>\n  </div>\n\n  <div class=\"col-md-3 col-sm-12\">\n    <mat-form-field>\n      <mat-select #priorityStatus (valueChange)=\"onFilterByPriority(this.$event)\"\n      [value]=\"selectedPriorityFilter\" placeholder=\"Фильтр по приоритету\"\n      >\n        <mat-option [value]=\"null\">Все приоритеты</mat-option>\n        <mat-option *ngFor=\"let priority of priorities\" [value]=\"priority\">{{priority.title}}</mat-option>\n\n      </mat-select>\n      <button\n        (click)=\"$event.stopPropagation(); onFilterByPriority(null)\"\n        *ngIf=\"selectedPriorityFilter != null\"\n\n        aria-label=\"Clear\" class=\"clear-icon size25 gray\"\n        mat-button\n        mat-icon-button\n\n        matSuffix\n      >\n        <mat-icon>clear</mat-icon>\n      </button>\n    </mat-form-field>\n  </div>\n\n  <div class=\"col-md-3 col-sm-12 text-right\">\n    <div class=\"row\">\n      <div class=\"text-left col-6\">\n        <button\n        (click)=\"$event.stopPropagation();\n        onFilterByStatus(null);\n        searchTaskText='';\n        onFilterByTitle();\n        onFilterByPriority(null);\n        \"\n\n        *ngIf=\"selectedStatusFilter != null || (searchTaskText != null && searchTaskText.trim() != '')\n        || selectedPriorityFilter !=null\"\n        aria-label=\"Clear\"\n        mat-button\n        matSuffix\n        >\n          Сбросить фильтры\n        </button>\n      </div>\n      <div class=\"text-right col-6\">\n        <button mat-raised-button color=\"primary\" mat-raised-button\n        (click)=\"openAddTaskDialog()\"\n        >\n          Добавить\n        </button>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-md-12 task-list\">\n\n<div class=\"card\">\n  <div class=\"card-header card-header-warning\">\n    <h4 class=\"card-title\">Все Задачи</h4>\n  </div>\n  <div class=\"card-body table-responsive\" *ngIf=\"tasks && tasks.length > 0\">\n\n    <table mat-table matSort [dataSource]=\"dataSource\">\n\n      <ng-container matColumnDef=\"color\">\n        <th *matHeaderCellDef mat-header-cell></th>\n        <td class=\"col-color\" *matCellDef=\"let task\" mat-cell [style.background-color]=\"getPriorityColorTask(task)\"></td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"id\">\n        <th *matHeaderCellDef mat-header-cell></th>\n        <td class=\"col-id\" *matCellDef=\"let index = index\" mat-cell>\n          {{index+1}}\n        </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"title\">\n        <th *matHeaderCellDef mat-header-cell mat-sort-header>Title</th>\n        <td class=\"col-title pointer\" *matCellDef=\"let task\" [class.completed]=\"task.completed\" mat-cell (click)=\"openEditTaskDialog(task)\">\n          {{task.title}}\n        </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"date\">\n        <th *matHeaderCellDef mat-header-cell mat-sort-header>Date</th>\n        <td class=\"col-date\" *matCellDef=\"let task\" [ngClass]=\"{'completed': task.completed, 'nodate': task.date == null}\" mat-cell>\n          {{task.date | taskDate}}\n        </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"priority\">\n        <th *matHeaderCellDef mat-header-cell mat-sort-header>Priority</th>\n        <td class=\"col-priority\" *matCellDef=\"let task\" [ngClass]=\"{'completed': task.completed, 'nopriority': task.priority == null}\" mat-cell>\n          {{task.priority != null ? task.priority.title: 'Без приоритета'}}\n        </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"category\">\n        <th *matHeaderCellDef mat-header-cell mat-sort-header=\"\">Category</th>\n        <td class=\"col-category\" *matCellDef=\"let task\" [ngClass]=\"{'completed': task.completed, 'nocategory': task.category == null, 'link': !task.completed && task.category}\"\n        (click)=\"!task.completed && task.category && onSelectCategory(task.category)\"\n        >\n          {{task.category != null ? task.category.title: 'Без категории'}}\n        </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"operations\">\n        <th *matHeaderCellDef mat-header-cell></th>\n        <td class=\"col-operations\" *matCellDef=\"let task\" [class.completed]=\"task\">\n          <button mat-icon-button (click)=\"openDeleteDialog(task)\" class=\"delete-icon\">\n            <mat-icon aria-hidden=\"false\">delete</mat-icon>\n          </button>\n          <button mat-icon-button (click)=\"openEditTaskDialog(task)\" class=\"edit-icon\">\n            <mat-icon aria-hidden=\"false\">edit</mat-icon>\n          </button>\n        </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"select\">\n        <th *matHeaderCellDef mat-header-cel mat-sort-header></th>\n        <td class=\"col-select text-right\" *matCellDef=\"let task\" mat-cell>\n          <mat-checkbox\n            (click)=\"$event.stopPropagation()\"\n            [checked]=\"task.completed\"\n            (change)=\"$event ? toggleTaskCompleted(task) : null\">\n\n          </mat-checkbox>\n        </td>\n      </ng-container>\n\n\n\n\n\n\n      <tr *matHeaderRowDef=\"displayedColumns\" mat-header-row></tr>\n      <tr *matRowDef=\"let row; columns: displayedColumns\" mat-row></tr>\n\n    </table>\n    <mat-paginator [pageSizeOptions]=[5,10,20,50,100] showFirstLastButtons></mat-paginator>\n\n  </div>\n\n  <div *ngIf=\"tasks && tasks.length == 0\"><p class=\"not-found\">Ничего не найдено</p></div>\n\n</div>\n</div>\n</div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_data_handler_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service/data-handler.service */ "./src/app/service/data-handler.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let AppComponent = class AppComponent {
    constructor(dataHandler) {
        this.dataHandler = dataHandler;
        this.title = 'ToDo';
        this.selectedCategory = null;
        this.searchCategoryText = '';
        this.searchTaskText = '';
        this.showStat = true;
        this.categoryMap = new Map();
    }
    ngOnInit() {
        this.dataHandler.getAllPriorities().subscribe(p => this.priorities = p);
        this.dataHandler.getAllCategories().subscribe(c => this.categories = c);
        this.fillCategories();
        this.onSelectCategory(null);
    }
    onSelectCategory(category) {
        this.selectedCategory = category;
        this.updateTasksAndStat();
    }
    onUpdateTask(task) {
        this.dataHandler.updateTask(task).subscribe(res => {
            this.fillCategories();
            this.updateTasksAndStat();
        });
    }
    onDeleteTask(task) {
        this.dataHandler.deleteTask(task).pipe(
        // tslint:disable-next-line:no-shadowed-variable
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["concatMap"])(task => {
            // tslint:disable-next-line:no-shadowed-variable
            return this.dataHandler.getUncompletedCountInCategory(task.category).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(count => {
                return ({ t: task, count });
            }));
        })).subscribe(result => {
            const t = result.t;
            // если указана категория - обновляем счетчик для соотв. категории
            // чтобы не обновлять весь список - обновим точечно
            if (t.category) {
                this.categoryMap.set(t.category, result.count);
            }
            this.updateTasksAndStat();
        });
    }
    onDeleteCategory(category) {
        this.dataHandler.deleteCategory(category.id).subscribe(cat => {
            this.selectedCategory = null;
            this.categoryMap.delete(cat);
            this.onSearchCategory(this.searchCategoryText);
            this.updateTasksAndStat();
        });
    }
    onUpdateCategory(category) {
        this.dataHandler.updateCategory(category).subscribe(() => {
            this.onSearchCategory(this.searchCategoryText);
        });
    }
    onSearchTasks(searchString) {
        this.searchTaskText = searchString;
        this.updateTasksAndStat();
    }
    onFilterTasksByStatus(status) {
        this.statusFilter = status;
        this.updateTasksAndStat();
    }
    onFilterTasksByPriority(priority) {
        this.priorityFilter = priority;
        this.updateTasksAndStat();
    }
    updateTasks() {
        this.dataHandler.searchTasks(this.selectedCategory, this.searchTaskText, this.statusFilter, this.priorityFilter)
            .subscribe((tasks) => {
            this.tasks = tasks;
        });
    }
    onAddTask(task) {
        this.dataHandler.addTask(task).pipe(// сначала добавляем задачу
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["concatMap"])(task => {
            // .. и считаем кол-во задач в категории с учетом добавленной задачи
            return this.dataHandler.getUncompletedCountInCategory(task.category).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(count => {
                return ({ t: task, count }); // в итоге получаем массив с добавленной задачей и кол-вом задач для категории
            }));
        })).subscribe(result => {
            const t = result.t;
            // если указана категория - обновляем счетчик для соотв. категории
            // чтобы не обновлять весь список - обновим точечно
            if (t.category) {
                this.categoryMap.set(t.category, result.count);
            }
            this.updateTasksAndStat();
        });
    }
    onAddCategory(category) {
        this.dataHandler.addCategory(category).subscribe(() => {
            this.dataHandler.getAllCategories().subscribe(cat => this.categories = cat);
            this.fillCategories();
        });
    }
    onSearchCategory(title) {
        this.searchCategoryText = title;
        this.dataHandler.searchCategory(title).subscribe(categories => {
            this.categories = categories;
            this.fillCategories();
        });
    }
    updateTasksAndStat() {
        this.updateTasks();
        this.updateStat();
    }
    updateStat() {
        Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["zip"])(this.dataHandler.getTotalCountInCategory(this.selectedCategory), this.dataHandler.getCompletedCountInCategory(this.selectedCategory), this.dataHandler.getUncompletedCountInCategory(this.selectedCategory), this.dataHandler.getUncompletedTotalCount()).subscribe(array => {
            this.totalTasksCountInCategory = array[0];
            this.completeCountInCategory = array[1];
            this.uncompletedCountInCategory = array[2];
            this.uncompletedTotalTasksCount = array[3];
        });
    }
    toggleStat(status) {
        this.showStat = status;
    }
    fillCategories() {
        if (this.categoryMap) {
            this.categoryMap.clear();
        }
        this.categories = this.categories.sort((a, b) => a.title.localeCompare(b.title));
        this.categories.forEach(cat => {
            // tslint:disable-next-line:no-shadowed-variable
            this.dataHandler.getUncompletedCountInCategory(cat).subscribe(count => this.categoryMap.set(cat, count));
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _service_data_handler_service__WEBPACK_IMPORTED_MODULE_2__["DataHandlerService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _views_categories_categories_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/categories/categories.component */ "./src/app/views/categories/categories.component.ts");
/* harmony import */ var _views_tasks_tasks_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/tasks/tasks.component */ "./src/app/views/tasks/tasks.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm2015/scrolling.js");
/* harmony import */ var _dialog_edit_task_dialog_edit_task_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dialog/edit-task-dialog/edit-task-dialog.component */ "./src/app/dialog/edit-task-dialog/edit-task-dialog.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _dialog_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dialog/confirm-dialog/confirm-dialog.component */ "./src/app/dialog/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var _pipe_task_date_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pipe/task-date.pipe */ "./src/app/pipe/task-date.pipe.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_common_locales_ru__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/locales/ru */ "./node_modules/@angular/common/locales/ru.js");
/* harmony import */ var _angular_common_locales_ru__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_ru__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _dialog_edit_category_dialog_edit_category_dialog_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./dialog/edit-category-dialog/edit-category-dialog.component */ "./src/app/dialog/edit-category-dialog/edit-category-dialog.component.ts");
/* harmony import */ var _views_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./views/footer/footer.component */ "./src/app/views/footer/footer.component.ts");
/* harmony import */ var _views_header_header_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./views/header/header.component */ "./src/app/views/header/header.component.ts");
/* harmony import */ var _views_stat_stat_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./views/stat/stat.component */ "./src/app/views/stat/stat.component.ts");
/* harmony import */ var _views_stat_stat_card_stat_card_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./views/stat/stat-card/stat-card.component */ "./src/app/views/stat/stat-card/stat-card.component.ts");
/* harmony import */ var _dialog_settings_dialog_settings_dialog_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./dialog/settings-dialog/settings-dialog.component */ "./src/app/dialog/settings-dialog/settings-dialog.component.ts");
/* harmony import */ var _dialog_edit_priority_dialog_edit_priority_dialog_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./dialog/edit-priority-dialog/edit-priority-dialog.component */ "./src/app/dialog/edit-priority-dialog/edit-priority-dialog.component.ts");
/* harmony import */ var ngx_color_picker__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-color-picker */ "./node_modules/ngx-color-picker/dist/ngx-color-picker.es5.js");
/* harmony import */ var _views_priorities_priorities_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./views/priorities/priorities.component */ "./src/app/views/priorities/priorities.component.ts");
/* harmony import */ var _dialog_login_dialog_login_dialog_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./dialog/login-dialog/login-dialog.component */ "./src/app/dialog/login-dialog/login-dialog.component.ts");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/es2015/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _service_authentication_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./service/authentication.service */ "./src/app/service/authentication.service.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/es2015/index.js");































Object(_angular_common__WEBPACK_IMPORTED_MODULE_13__["registerLocaleData"])(_angular_common_locales_ru__WEBPACK_IMPORTED_MODULE_14___default.a);
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
            _views_categories_categories_component__WEBPACK_IMPORTED_MODULE_4__["CategoriesComponent"],
            _views_tasks_tasks_component__WEBPACK_IMPORTED_MODULE_5__["TasksComponent"],
            _dialog_edit_task_dialog_edit_task_dialog_component__WEBPACK_IMPORTED_MODULE_9__["EditTaskDialogComponent"],
            _dialog_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_11__["ConfirmDialogComponent"],
            _pipe_task_date_pipe__WEBPACK_IMPORTED_MODULE_12__["TaskDatePipe"],
            _dialog_edit_category_dialog_edit_category_dialog_component__WEBPACK_IMPORTED_MODULE_15__["EditCategoryDialogComponent"],
            _views_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__["FooterComponent"],
            _views_header_header_component__WEBPACK_IMPORTED_MODULE_17__["HeaderComponent"],
            _views_stat_stat_component__WEBPACK_IMPORTED_MODULE_18__["StatComponent"],
            _views_stat_stat_card_stat_card_component__WEBPACK_IMPORTED_MODULE_19__["StatCardComponent"],
            _views_stat_stat_card_stat_card_component__WEBPACK_IMPORTED_MODULE_19__["StatCardComponent"],
            _dialog_settings_dialog_settings_dialog_component__WEBPACK_IMPORTED_MODULE_20__["SettingsDialogComponent"],
            _dialog_edit_priority_dialog_edit_priority_dialog_component__WEBPACK_IMPORTED_MODULE_21__["EditPriorityDialogComponent"],
            _views_priorities_priorities_component__WEBPACK_IMPORTED_MODULE_23__["PrioritiesComponent"],
            _dialog_login_dialog_login_dialog_component__WEBPACK_IMPORTED_MODULE_24__["LoginDialogComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatPaginatorModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSortModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_8__["ScrollingModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatOptionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDatepickerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatNativeDateModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
            ngx_color_picker__WEBPACK_IMPORTED_MODULE_22__["ColorPickerModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_29__["AppRoutingModule"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_25__["AngularFireAuthModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_26__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_27__["environment"].firebaseConfig),
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_30__["AngularFireDatabaseModule"]
        ],
        providers: [_service_authentication_service__WEBPACK_IMPORTED_MODULE_28__["AuthenticationService"]],
        entryComponents: [
            _dialog_edit_task_dialog_edit_task_dialog_component__WEBPACK_IMPORTED_MODULE_9__["EditTaskDialogComponent"],
            _dialog_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_11__["ConfirmDialogComponent"],
            _dialog_edit_category_dialog_edit_category_dialog_component__WEBPACK_IMPORTED_MODULE_15__["EditCategoryDialogComponent"],
            _dialog_settings_dialog_settings_dialog_component__WEBPACK_IMPORTED_MODULE_20__["SettingsDialogComponent"],
            _dialog_edit_priority_dialog_edit_priority_dialog_component__WEBPACK_IMPORTED_MODULE_21__["EditPriorityDialogComponent"],
            _dialog_login_dialog_login_dialog_component__WEBPACK_IMPORTED_MODULE_24__["LoginDialogComponent"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/data/TestData.ts":
/*!**********************************!*\
  !*** ./src/app/data/TestData.ts ***!
  \**********************************/
/*! exports provided: TestData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestData", function() { return TestData; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class TestData {
}
TestData.categories = [
    { id: 1, title: 'Работа' },
    { id: 2, title: 'Семья' },
    { id: 3, title: 'Учеба' },
    { id: 4, title: 'Отдых' },
    { id: 5, title: 'Спорт' },
    { id: 6, title: 'Еда' },
    { id: 7, title: 'Финансы' },
    { id: 8, title: 'Гаджеты' },
    { id: 9, title: 'Здоровье' },
    { id: 10, title: 'Автомобиль' },
    { id: 11, title: 'Ремонт' },
];
TestData.priorities = [
    { id: 1, title: 'Низкий', color: '#e5e5e5' },
    { id: 2, title: 'Средний', color: '#85D1B2' },
    { id: 3, title: 'Высокий', color: '#F1828D' },
    { id: 4, title: 'Очень срочно!!', color: '#F1128D' }
];
// не забывать - индексация приоритетов и категорий начинается с нуля
TestData.tasks = [
    {
        id: 1,
        title: 'Залить бензин полный бак',
        priority: TestData.priorities[2],
        completed: false,
        category: TestData.categories[9],
        date: new Date('2019-04-10')
    },
    {
        id: 2,
        title: 'Передать отчеты начальнику управления',
        priority: TestData.priorities[0],
        completed: false,
        category: TestData.categories[0],
        date: new Date('2019-04-11')
    },
    {
        id: 3,
        title: 'Убраться у себя в комнате, полить растения',
        priority: TestData.priorities[2],
        completed: true,
        category: TestData.categories[1]
    },
    {
        id: 4,
        title: 'Сходить в парк с семьей, пригласить друзей',
        priority: TestData.priorities[1],
        completed: false,
        category: TestData.categories[1],
        date: new Date('2019-08-17')
    },
    {
        id: 5,
        title: 'Найти и выучить учебник по квантовой физике',
        completed: false,
        category: TestData.categories[2]
    },
    {
        id: 6,
        title: 'Сходить на семинар по программированию',
        priority: TestData.priorities[1],
        completed: true,
        category: TestData.categories[2],
        date: new Date('2019-06-11')
    },
    {
        id: 7,
        title: 'Найти билеты в Турцию, выбрать отель',
        priority: TestData.priorities[2],
        completed: false,
        category: TestData.categories[3]
    },
    {
        id: 8,
        title: 'Приготовить ужин для всей семьи (семга с картошкой)',
        completed: false,
        category: TestData.categories[5]
    },
    {
        id: 9,
        title: 'Подтянуться 10 раз',
        priority: TestData.priorities[2],
        completed: false,
        category: TestData.categories[4],
        date: new Date('2019-03-12')
    },
    {
        id: 10,
        title: 'Пробежать 100 м',
        priority: TestData.priorities[0],
        completed: true,
        category: TestData.categories[4]
    },
    {
        id: 11,
        title: 'Организовать детский праздник ',
        completed: false
    },
    {
        id: 12,
        title: 'Сходить на лекцию "Как научиться программировать на Java"',
        priority: TestData.priorities[1],
        completed: false,
        category: TestData.categories[2]
    },
    {
        id: 13,
        title: 'Купить продукты на неделю',
        priority: TestData.priorities[2],
        completed: false,
        category: TestData.categories[5],
        date: new Date('2019-05-11')
    },
    {
        id: 14,
        title: 'Провести собрание по поводу всех проектов',
        completed: true,
        category: TestData.categories[0]
    },
    {
        id: 15,
        title: 'Сдать экзамен по Java',
        priority: TestData.priorities[2],
        completed: true
    },
    {
        id: 16,
        title: 'Положить 100 000 р в банк на депозит',
        priority: TestData.priorities[3],
        completed: false,
        category: TestData.categories[6]
    },
    {
        id: 17,
        title: 'Попросить аванс на работе',
        priority: TestData.priorities[2],
        completed: false,
        category: TestData.categories[6]
    },
    {
        id: 18,
        title: 'Сдать анализы, проверить гемоглобин',
        priority: TestData.priorities[3],
        completed: false,
        category: TestData.categories[8],
        date: new Date('2020-12-11')
    },
    {
        id: 19,
        title: 'Сравнить новый айпад с самсунгом',
        priority: TestData.priorities[0],
        completed: false,
        category: TestData.categories[7],
        date: new Date('2019-10-11')
    },
    {
        id: 20,
        title: 'Футбол с сотрудниками',
        priority: TestData.priorities[0],
        completed: false,
        category: TestData.categories[4],
        date: new Date('2019-03-17')
    }
];


/***/ }),

/***/ "./src/app/data/dao/impl/CategoryDAOArray.ts":
/*!***************************************************!*\
  !*** ./src/app/data/dao/impl/CategoryDAOArray.ts ***!
  \***************************************************/
/*! exports provided: CategoryDAOArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryDAOArray", function() { return CategoryDAOArray; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _TestData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../TestData */ "./src/app/data/TestData.ts");



class CategoryDAOArray {
    add(category) {
        if (category.id === null || category.id === 0) {
            category.id = this.getLastIdCategory();
        }
        _TestData__WEBPACK_IMPORTED_MODULE_2__["TestData"].categories.push(category);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(category);
    }
    delete(id) {
        _TestData__WEBPACK_IMPORTED_MODULE_2__["TestData"].tasks.forEach(task => {
            if (task.category && task.category.id === id) {
                task.category = null;
            }
        });
        const tmpCategory = _TestData__WEBPACK_IMPORTED_MODULE_2__["TestData"].categories.find(c => c.id === id);
        _TestData__WEBPACK_IMPORTED_MODULE_2__["TestData"].categories.splice(_TestData__WEBPACK_IMPORTED_MODULE_2__["TestData"].categories.indexOf(tmpCategory), 1);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(tmpCategory);
    }
    getAll() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_TestData__WEBPACK_IMPORTED_MODULE_2__["TestData"].categories);
    }
    getById(id) {
        return undefined;
    }
    search(title) {
        let allCategories = _TestData__WEBPACK_IMPORTED_MODULE_2__["TestData"].categories;
        if (title != null) {
            allCategories = allCategories.filter(cat => cat.title.toUpperCase().includes(title.toUpperCase()))
                .sort((c1, c2) => c1.title.localeCompare(c2.title));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(allCategories);
    }
    update(category) {
        const tmpCategory = _TestData__WEBPACK_IMPORTED_MODULE_2__["TestData"].categories.find(c => c.id === category.id);
        _TestData__WEBPACK_IMPORTED_MODULE_2__["TestData"].categories.splice(_TestData__WEBPACK_IMPORTED_MODULE_2__["TestData"].categories.indexOf(tmpCategory), 1, category);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(tmpCategory);
    }
    getLastIdCategory() {
        return Math.max.apply(Math, _TestData__WEBPACK_IMPORTED_MODULE_2__["TestData"].categories.map(c => c.id)) + 1;
    }
}


/***/ }),

/***/ "./src/app/data/dao/impl/PriorityDAOArray.ts":
/*!***************************************************!*\
  !*** ./src/app/data/dao/impl/PriorityDAOArray.ts ***!
  \***************************************************/
/*! exports provided: PriorityDAOArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PriorityDAOArray", function() { return PriorityDAOArray; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _TestData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../TestData */ "./src/app/data/TestData.ts");



class PriorityDAOArray {
    add(priority) {
        if (priority.id === null || priority.id === 0) {
            priority.id = this.getLastIdPriority();
        }
        _TestData__WEBPACK_IMPORTED_MODULE_2__["TestData"].priorities.push(priority);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(priority);
    }
    delete(id) {
        _TestData__WEBPACK_IMPORTED_MODULE_2__["TestData"].tasks.forEach(task => {
            if (task.priority && task.priority.id === id) {
                task.priority = null;
            }
        });
        const tmpPriority = _TestData__WEBPACK_IMPORTED_MODULE_2__["TestData"].priorities.find(p => p.id === id);
        _TestData__WEBPACK_IMPORTED_MODULE_2__["TestData"].priorities.splice(_TestData__WEBPACK_IMPORTED_MODULE_2__["TestData"].priorities.indexOf(tmpPriority), 1);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(tmpPriority);
    }
    getAll() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_TestData__WEBPACK_IMPORTED_MODULE_2__["TestData"].priorities);
    }
    getById(id) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_TestData__WEBPACK_IMPORTED_MODULE_2__["TestData"].priorities.find(p => p.id === id));
    }
    update(priority) {
        const tmpPriority = _TestData__WEBPACK_IMPORTED_MODULE_2__["TestData"].priorities.find(p => p.id === priority.id);
        _TestData__WEBPACK_IMPORTED_MODULE_2__["TestData"].priorities.splice(_TestData__WEBPACK_IMPORTED_MODULE_2__["TestData"].priorities.indexOf(tmpPriority), 1, priority);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(tmpPriority);
    }
    getLastIdPriority() {
        return Math.max.apply(Math, _TestData__WEBPACK_IMPORTED_MODULE_2__["TestData"].priorities.map(c => c.id)) + 1;
    }
}


/***/ }),

/***/ "./src/app/data/dao/impl/TaskDAOArray.ts":
/*!***********************************************!*\
  !*** ./src/app/data/dao/impl/TaskDAOArray.ts ***!
  \***********************************************/
/*! exports provided: TaskDAOArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskDAOArray", function() { return TaskDAOArray; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _TestData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../TestData */ "./src/app/data/TestData.ts");



class TaskDAOArray {
    add(task) {
        if (task.id === null || task.id === 0) {
            task.id = this.getLastIdTask();
        }
        _TestData__WEBPACK_IMPORTED_MODULE_2__["TestData"].tasks.push(task);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(task);
    }
    delete(id) {
        const tmpTask = _TestData__WEBPACK_IMPORTED_MODULE_2__["TestData"].tasks.find(t => t.id === id);
        _TestData__WEBPACK_IMPORTED_MODULE_2__["TestData"].tasks.splice(_TestData__WEBPACK_IMPORTED_MODULE_2__["TestData"].tasks.indexOf(tmpTask), 1);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(tmpTask);
    }
    getAll() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_TestData__WEBPACK_IMPORTED_MODULE_2__["TestData"].tasks);
    }
    getById(id) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_TestData__WEBPACK_IMPORTED_MODULE_2__["TestData"].tasks.find(t => t.id === id));
    }
    getCompletedCountInCategory(category) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.searchTasks(category, null, true, null).length);
    }
    getTotalCount() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_TestData__WEBPACK_IMPORTED_MODULE_2__["TestData"].tasks.length);
    }
    getTotalCountInCategory(category) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.searchTasks(category, null, null, null).length);
    }
    getUncompletedCountInCategory(category) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.searchTasks(category, null, false, null).length);
    }
    search(category, searchText, status, priority) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.searchTasks(category, searchText, status, priority));
    }
    update(task) {
        const tmpTask = _TestData__WEBPACK_IMPORTED_MODULE_2__["TestData"].tasks.find(t => t.id === task.id);
        _TestData__WEBPACK_IMPORTED_MODULE_2__["TestData"].tasks.splice(_TestData__WEBPACK_IMPORTED_MODULE_2__["TestData"].tasks.indexOf(tmpTask), 1, task);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(task);
    }
    searchTasks(category, searchText, status, priority) {
        let allTasks = _TestData__WEBPACK_IMPORTED_MODULE_2__["TestData"].tasks;
        if (status != null) {
            allTasks = allTasks.filter(task => task.completed === status);
        }
        if (category != null) {
            allTasks = allTasks.filter(task => task.category === category);
        }
        if (priority != null) {
            allTasks = allTasks.filter(task => task.priority === priority);
        }
        if (searchText != null) {
            allTasks = allTasks.filter(task => task.title.toUpperCase().includes(searchText.toUpperCase()));
        }
        return allTasks;
    }
    getLastIdTask() {
        return Math.max.apply(Math, _TestData__WEBPACK_IMPORTED_MODULE_2__["TestData"].tasks.map(t => t.id)) + 1;
    }
}


/***/ }),

/***/ "./src/app/dialog/confirm-dialog/confirm-dialog.component.css":
/*!********************************************************************!*\
  !*** ./src/app/dialog/confirm-dialog/confirm-dialog.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RpYWxvZy9jb25maXJtLWRpYWxvZy9jb25maXJtLWRpYWxvZy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/dialog/confirm-dialog/confirm-dialog.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/dialog/confirm-dialog/confirm-dialog.component.ts ***!
  \*******************************************************************/
/*! exports provided: ConfirmDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmDialogComponent", function() { return ConfirmDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");



let ConfirmDialogComponent = class ConfirmDialogComponent {
    constructor(dialogMatRef, data) {
        this.dialogMatRef = dialogMatRef;
        this.data = data;
        this.dialogTitle = data.dialogTitle;
        this.message = data.message;
    }
    ngOnInit() {
    }
    onConfirm() {
        this.dialogMatRef.close(true);
    }
    onCancel() {
        this.dialogMatRef.close(false);
    }
};
ConfirmDialogComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
ConfirmDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-confirm-dialog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./confirm-dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dialog/confirm-dialog/confirm-dialog.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./confirm-dialog.component.css */ "./src/app/dialog/confirm-dialog/confirm-dialog.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], ConfirmDialogComponent);



/***/ }),

/***/ "./src/app/dialog/edit-category-dialog/edit-category-dialog.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/dialog/edit-category-dialog/edit-category-dialog.component.css ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RpYWxvZy9lZGl0LWNhdGVnb3J5LWRpYWxvZy9lZGl0LWNhdGVnb3J5LWRpYWxvZy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/dialog/edit-category-dialog/edit-category-dialog.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/dialog/edit-category-dialog/edit-category-dialog.component.ts ***!
  \*******************************************************************************/
/*! exports provided: EditCategoryDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditCategoryDialogComponent", function() { return EditCategoryDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../confirm-dialog/confirm-dialog.component */ "./src/app/dialog/confirm-dialog/confirm-dialog.component.ts");




let EditCategoryDialogComponent = class EditCategoryDialogComponent {
    constructor(dialogRef, data, dialog) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.dialog = dialog;
        this.canDelete = true;
    }
    ngOnInit() {
        this.categoryTitle = this.data[0];
        this.dialogTitle = this.data[1];
        if (!this.categoryTitle) {
            this.canDelete = false;
        }
    }
    onConfirm() {
        this.dialogRef.close(this.categoryTitle);
    }
    onCancel() {
        this.dialogRef.close();
    }
    delete() {
        const dialogRef = this.dialog.open(_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmDialogComponent"], {
            maxWidth: '500px',
            data: {
                dialogTitle: 'Подтвердите действие',
                message: 'Вы действительно хотите удалить категорию: ' + this.categoryTitle + '?'
            },
            autoFocus: false
        });
        dialogRef.afterClosed().subscribe(res => {
            if (res) {
                this.dialogRef.close('delete');
            }
        });
    }
};
EditCategoryDialogComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
];
EditCategoryDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-category-dialog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-category-dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dialog/edit-category-dialog/edit-category-dialog.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-category-dialog.component.css */ "./src/app/dialog/edit-category-dialog/edit-category-dialog.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], EditCategoryDialogComponent);



/***/ }),

/***/ "./src/app/dialog/edit-priority-dialog/edit-priority-dialog.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/dialog/edit-priority-dialog/edit-priority-dialog.component.css ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RpYWxvZy9lZGl0LXByaW9yaXR5LWRpYWxvZy9lZGl0LXByaW9yaXR5LWRpYWxvZy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/dialog/edit-priority-dialog/edit-priority-dialog.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/dialog/edit-priority-dialog/edit-priority-dialog.component.ts ***!
  \*******************************************************************************/
/*! exports provided: EditPriorityDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPriorityDialogComponent", function() { return EditPriorityDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../confirm-dialog/confirm-dialog.component */ "./src/app/dialog/confirm-dialog/confirm-dialog.component.ts");




let EditPriorityDialogComponent = class EditPriorityDialogComponent {
    constructor(dialog, dialogRef, data) {
        this.dialog = dialog;
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ngOnInit() {
        this.priorityTitle = this.data[0];
        this.dialogTitle = this.data[1];
    }
    onConfirm() {
        this.dialogRef.close(this.priorityTitle);
    }
    onCancel() {
        this.dialogRef.close(false);
    }
    delete() {
        const dialogRef = this.dialog.open(_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmDialogComponent"], {
            maxWidth: '500px',
            data: {
                dialogTitle: 'Подтвердите действие',
                message: 'Вы действительно хотите удалить приоритет: "%{this.priorityTitle}"',
            },
            autoFocus: false
        });
        dialogRef.afterClosed().subscribe(res => {
            if (res) {
                this.dialogRef.close('delete');
            }
        });
    }
    canDelete() {
        return;
    }
};
EditPriorityDialogComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
EditPriorityDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-priority-dialog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-priority-dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dialog/edit-priority-dialog/edit-priority-dialog.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-priority-dialog.component.css */ "./src/app/dialog/edit-priority-dialog/edit-priority-dialog.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], EditPriorityDialogComponent);



/***/ }),

/***/ "./src/app/dialog/edit-task-dialog/edit-task-dialog.component.css":
/*!************************************************************************!*\
  !*** ./src/app/dialog/edit-task-dialog/edit-task-dialog.component.css ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RpYWxvZy9lZGl0LXRhc2stZGlhbG9nL2VkaXQtdGFzay1kaWFsb2cuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/dialog/edit-task-dialog/edit-task-dialog.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/dialog/edit-task-dialog/edit-task-dialog.component.ts ***!
  \***********************************************************************/
/*! exports provided: EditTaskDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditTaskDialogComponent", function() { return EditTaskDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _service_data_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/data-handler.service */ "./src/app/service/data-handler.service.ts");
/* harmony import */ var _confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../confirm-dialog/confirm-dialog.component */ "./src/app/dialog/confirm-dialog/confirm-dialog.component.ts");





let EditTaskDialogComponent = class EditTaskDialogComponent {
    constructor(dialogRef, data, dataHandler, dialog, adapter) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.dataHandler = dataHandler;
        this.dialog = dialog;
        this.adapter = adapter;
        this.taskStatus = true;
    }
    ngOnInit() {
        this.task = this.data[0];
        this.dialogTitle = this.data[1];
        this.tmpTitle = this.task.title;
        this.tmpCategory = this.task.category;
        this.tmpPriority = this.task.priority;
        this.adapter.setLocale('ru-RU');
        // @ts-ignore
        this.tmpDate = this.task.date;
        this.dataHandler.getAllPriorities().subscribe(p => this.priorities = p);
        this.dataHandler.getAllCategories().subscribe(c => this.categories = c);
        this.checkTaskStatus();
    }
    onConfirm() {
        this.task.title = this.tmpTitle;
        this.task.category = this.tmpCategory;
        this.task.priority = this.tmpPriority;
        this.task.date = this.tmpDate;
        this.dialogRef.close(this.task);
    }
    onCancel() {
        this.dialogRef.close(null);
    }
    onDelete() {
        const dialogRef = this.dialog.open(_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmDialogComponent"], {
            maxWidth: '500px',
            data: {
                dialogTitle: 'Подтвердите действие',
                message: `Вы действительно хотите удалить задачу: "${this.task.title}" ?`
            },
            autoFocus: false
        });
        dialogRef.afterClosed().subscribe(res => {
            if (res) {
                this.dialogRef.close('delete');
            }
        });
    }
    onStatusTask(bool) {
        console.log(bool);
        let status;
        if (bool === true) {
            status = 'activate';
        }
        else {
            status = 'complete';
        }
        this.dialogRef.close(status);
    }
    checkTaskStatus() {
        if (this.task.title === null || this.task.title === '') {
            this.taskStatus = false;
        }
    }
};
EditTaskDialogComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
    { type: _service_data_handler_service__WEBPACK_IMPORTED_MODULE_3__["DataHandlerService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["DateAdapter"] }
];
EditTaskDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-task-dialog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-task-dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dialog/edit-task-dialog/edit-task-dialog.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-task-dialog.component.css */ "./src/app/dialog/edit-task-dialog/edit-task-dialog.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], EditTaskDialogComponent);



/***/ }),

/***/ "./src/app/dialog/login-dialog/login-dialog.component.css":
/*!****************************************************************!*\
  !*** ./src/app/dialog/login-dialog/login-dialog.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".google-icon {\n  background-image: url('google.png');\n  width: 100%;\n  height: 100%;\n  margin: 5px;\n}\n\n.google-form {\n  margin-top: 20px;\n}\n\n.error-message {\n  color: red;\n  text-align: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlhbG9nL2xvZ2luLWRpYWxvZy9sb2dpbi1kaWFsb2cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1DQUE2RDtFQUM3RCxXQUFXO0VBQ1gsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9kaWFsb2cvbG9naW4tZGlhbG9nL2xvZ2luLWRpYWxvZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdvb2dsZS1pY29uIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZy9pY29ucy9nb29nbGUucG5nXCIpO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW46IDVweDtcbn1cblxuLmdvb2dsZS1mb3JtIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLmVycm9yLW1lc3NhZ2Uge1xuICBjb2xvcjogcmVkO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/dialog/login-dialog/login-dialog.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/dialog/login-dialog/login-dialog.component.ts ***!
  \***************************************************************/
/*! exports provided: LoginDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginDialogComponent", function() { return LoginDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _service_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/authentication.service */ "./src/app/service/authentication.service.ts");




let LoginDialogComponent = class LoginDialogComponent {
    constructor(dialog, authenticationService) {
        this.dialog = dialog;
        this.authenticationService = authenticationService;
        this.loading = false;
    }
    ngOnInit() {
        this.authenticationService.errorMessage = '';
    }
    signUp() {
        this.authenticationService.SignUp(this.email, this.password);
        this.email = '';
        this.password = '';
        if (this.authenticationService.errorMessage) {
            this.authenticationService.errorMessage = '';
        }
    }
    signIn() {
        this.loading = true;
        this.authenticationService.SignIn(this.email, this.password);
        this.email = '';
        this.password = '';
        this.loading = false;
        if (this.authenticationService.errorMessage) {
            this.authenticationService.errorMessage = '';
        }
    }
    signOut() {
        this.authenticationService.SignOut();
        if (this.authenticationService.errorMessage) {
            this.authenticationService.errorMessage = '';
        }
    }
    clouse() {
        this.dialog.closeAll();
    }
};
LoginDialogComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: _service_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
];
LoginDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login-dialog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login-dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dialog/login-dialog/login-dialog.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login-dialog.component.css */ "./src/app/dialog/login-dialog/login-dialog.component.css")).default]
    })
], LoginDialogComponent);



/***/ }),

/***/ "./src/app/dialog/settings-dialog/settings-dialog.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/dialog/settings-dialog/settings-dialog.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RpYWxvZy9zZXR0aW5ncy1kaWFsb2cvc2V0dGluZ3MtZGlhbG9nLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/dialog/settings-dialog/settings-dialog.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/dialog/settings-dialog/settings-dialog.component.ts ***!
  \*********************************************************************/
/*! exports provided: SettingsDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsDialogComponent", function() { return SettingsDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _service_data_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/data-handler.service */ "./src/app/service/data-handler.service.ts");




let SettingsDialogComponent = class SettingsDialogComponent {
    constructor(dialogRef, dataHandler) {
        this.dialogRef = dialogRef;
        this.dataHandler = dataHandler;
    }
    ngOnInit() {
        this.dataHandler.getAllPriorities().subscribe(p => this.priorities = p);
    }
    onClose() {
        this.dialogRef.close(false);
    }
    onAddPriority(priority) {
        this.dataHandler.addPriority(priority).subscribe();
    }
    onDeletePriority(priority) {
        this.dataHandler.deletePriority(priority).subscribe();
    }
    onUpdatePriority(priority) {
        this.dataHandler.updatePriority(priority).subscribe();
    }
};
SettingsDialogComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: _service_data_handler_service__WEBPACK_IMPORTED_MODULE_3__["DataHandlerService"] }
];
SettingsDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-settings-dialog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./settings-dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dialog/settings-dialog/settings-dialog.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./settings-dialog.component.css */ "./src/app/dialog/settings-dialog/settings-dialog.component.css")).default]
    })
], SettingsDialogComponent);



/***/ }),

/***/ "./src/app/model/Category.ts":
/*!***********************************!*\
  !*** ./src/app/model/Category.ts ***!
  \***********************************/
/*! exports provided: Category */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Category", function() { return Category; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Category {
    constructor(id, title) {
        this.id = id;
        this.title = title;
    }
}


/***/ }),

/***/ "./src/app/model/Priority.ts":
/*!***********************************!*\
  !*** ./src/app/model/Priority.ts ***!
  \***********************************/
/*! exports provided: Priority */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Priority", function() { return Priority; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Priority {
    constructor(id, title, color) {
        this.id = id;
        this.title = title;
        this.color = color;
    }
}


/***/ }),

/***/ "./src/app/model/Task.ts":
/*!*******************************!*\
  !*** ./src/app/model/Task.ts ***!
  \*******************************/
/*! exports provided: Task */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Task", function() { return Task; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Task {
    constructor(id, title, completed, priority, category, date) {
        this.id = id;
        this.title = title;
        this.completed = completed;
        this.priority = priority;
        this.category = category;
        this.date = date;
    }
}


/***/ }),

/***/ "./src/app/pipe/task-date.pipe.ts":
/*!****************************************!*\
  !*** ./src/app/pipe/task-date.pipe.ts ***!
  \****************************************/
/*! exports provided: TaskDatePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskDatePipe", function() { return TaskDatePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");



let TaskDatePipe = class TaskDatePipe extends _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"] {
    transform(date, format = 'mediumDate') {
        if (date == null) {
            return 'Без срока';
        }
        date = new Date(date);
        const currentDate = new Date().getDate();
        if (date.getDate() === currentDate) {
            return 'Сегодня';
        }
        if (date.getDate() === currentDate - 1) {
            return 'Вчера';
        }
        if (date.getDate() === currentDate + 1) {
            return 'Завтра';
        }
        return new _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]('ru-RU').transform(date, format);
    }
};
TaskDatePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'taskDate'
    })
], TaskDatePipe);



/***/ }),

/***/ "./src/app/service/authentication.service.ts":
/*!***************************************************!*\
  !*** ./src/app/service/authentication.service.ts ***!
  \***************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let AuthenticationService = class AuthenticationService {
    constructor(angularFireAuth, ngZone, router) {
        this.angularFireAuth = angularFireAuth;
        this.ngZone = ngZone;
        this.router = router;
        this.userData = angularFireAuth.authState;
    }
    /* Sign up */
    SignUp(email, password) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.angularFireAuth
                .auth
                .createUserWithEmailAndPassword(email, password)
                .then(res => {
                console.log('You are Successfully signed up!', res);
            })
                .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    this.errorMessage = 'Пользователь уже существует';
                }
                else if (error.code === 'auth/invalid-email') {
                    this.errorMessage = 'Неправильный email';
                }
                else if (error.code === 'auth/weak-password') {
                    this.errorMessage = 'Пароль должен содержать не менее 6 символов';
                }
                console.log('Something is wrong:', error.message);
                console.log(error.code);
            });
        });
    }
    /* Sign in */
    SignIn(email, password) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.angularFireAuth
                .auth
                .signInWithEmailAndPassword(email, password)
                .then(res => {
                console.log('You are Successfully logged in!');
            })
                .catch(err => {
                this.errorMessage = err.message;
                if (err.code === 'auth/invalid-email') {
                    this.errorMessage = 'Неправильный формат почты';
                }
                else if (err.code === 'auth/wrong-password') {
                    this.errorMessage = 'Неправильный пароль';
                }
                else if (err.code === 'auth/user-not-found') {
                    this.errorMessage = 'Такой пользователь не найден';
                }
                console.log('Something is wrong:', err.message);
                console.log(err);
            });
        });
    }
    /* Sign out */
    SignOut() {
        this.angularFireAuth
            .auth
            .signOut();
    }
    OAuthProvider(provider) {
        return this.angularFireAuth.auth.signInWithPopup(provider)
            .then((res) => {
            this.ngZone.run(() => {
                this.router.navigate(['']);
            });
        }).catch((error) => {
            window.alert(error);
        });
    }
    // Firebase Google Sign-in
    SigninWithGoogle() {
        return this.OAuthProvider(new firebase_app__WEBPACK_IMPORTED_MODULE_3__["auth"].GoogleAuthProvider())
            .then(res => {
            console.log('Successfully logged in!');
        }).catch(error => {
            console.log(error);
        });
    }
};
AuthenticationService.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthenticationService);



/***/ }),

/***/ "./src/app/service/data-handler.service.ts":
/*!*************************************************!*\
  !*** ./src/app/service/data-handler.service.ts ***!
  \*************************************************/
/*! exports provided: DataHandlerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataHandlerService", function() { return DataHandlerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _model_Category__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/Category */ "./src/app/model/Category.ts");
/* harmony import */ var _data_dao_impl_TaskDAOArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/dao/impl/TaskDAOArray */ "./src/app/data/dao/impl/TaskDAOArray.ts");
/* harmony import */ var _data_dao_impl_CategoryDAOArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/dao/impl/CategoryDAOArray */ "./src/app/data/dao/impl/CategoryDAOArray.ts");
/* harmony import */ var _data_dao_impl_PriorityDAOArray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data/dao/impl/PriorityDAOArray */ "./src/app/data/dao/impl/PriorityDAOArray.ts");






let DataHandlerService = class DataHandlerService {
    constructor() {
        // taskSubject = new BehaviorSubject<Task[]>(TestData.tasks);
        // categoriesSubject = new BehaviorSubject<Category[]>(TestData.categories);
        this.taskDAOArray = new _data_dao_impl_TaskDAOArray__WEBPACK_IMPORTED_MODULE_3__["TaskDAOArray"]();
        this.categoryDAOArray = new _data_dao_impl_CategoryDAOArray__WEBPACK_IMPORTED_MODULE_4__["CategoryDAOArray"]();
        this.priorityDAOArray = new _data_dao_impl_PriorityDAOArray__WEBPACK_IMPORTED_MODULE_5__["PriorityDAOArray"]();
    }
    getAllTasks() {
        return this.taskDAOArray.getAll();
    }
    getAllCategories() {
        return this.categoryDAOArray.getAll();
    }
    getAllPriorities() {
        return this.priorityDAOArray.getAll();
    }
    searchTasks(category, searchText, status, priority) {
        return this.taskDAOArray.search(category, searchText, status, priority);
    }
    searchCategory(title) {
        return this.categoryDAOArray.search(title);
    }
    updateTask(task) {
        return this.taskDAOArray.update(task);
    }
    deleteTask(task) {
        return this.taskDAOArray.delete(task.id);
    }
    deleteCategory(id) {
        return this.categoryDAOArray.delete(id);
    }
    updateCategory(category) {
        return this.categoryDAOArray.update(category);
    }
    addTask(task) {
        return this.taskDAOArray.add(task);
    }
    addCategory(title) {
        return this.categoryDAOArray.add(new _model_Category__WEBPACK_IMPORTED_MODULE_2__["Category"](null, title));
    }
    getTotalCountInCategory(category) {
        return this.taskDAOArray.getTotalCountInCategory(category);
    }
    getCompletedCountInCategory(category) {
        return this.taskDAOArray.getCompletedCountInCategory(category);
    }
    getUncompletedCountInCategory(category) {
        return this.taskDAOArray.getUncompletedCountInCategory(category);
    }
    getUncompletedTotalCount() {
        return this.taskDAOArray.getUncompletedCountInCategory(null);
    }
    updatePriority(priority) {
        return this.priorityDAOArray.update(priority);
    }
    deletePriority(priority) {
        return this.priorityDAOArray.delete(priority.id);
    }
    addPriority(priority) {
        return this.priorityDAOArray.add(priority);
    }
};
DataHandlerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DataHandlerService);



/***/ }),

/***/ "./src/app/views/categories/categories.component.css":
/*!***********************************************************!*\
  !*** ./src/app/views/categories/categories.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".pointer {\n  cursor: pointer;\n}\n\n.edit-category-icon-area {\n  width: 15%;\n  display: inline-block;\n  text-align: left;\n  font-size: 13px;\n}\n\n.category-title {\n  width: 70%;\n  display: inline-block;\n  font-size: 16px;\n}\n\n.all-category-title {\n  width: 85%;\n  display: inline-block;\n  font-size: 16px;\n}\n\n.edit-category-icon {\n  color: #dadada;\n}\n\n.add-icon {\n  cursor: pointer;\n  font-size: 25px;\n  vertical-align: middle;\n}\n\nspan.add-icon-area {\n  width: 15%;\n  display: inline-block;\n  text-align: left;\n}\n\n#categories {\n  width: 100%;\n  overflow-x: hidden;\n}\n\n.nav-title {\n  width: 85%;\n  display: inline-block;\n  font-size: 20px;\n  text-align: center;\n  vertical-align: middle;\n}\n\n.search-category-area {\n  padding-left: 20px;\n  padding-right: 20px;\n  background-color: #f2f2f2;\n  border-radius: 6px;\n}\n\n.search-category-button {\n  margin-left: 10px;\n  font-size: 25px;\n}\n\n.sidebar-background {\n  background-image: url('sidebar-1.jpg');\n}\n\n.sidebar-wrapper {\n  padding-bottom: 0px;\n}\n\n.uncompleted-count {\n  background-color: #eaeaea;\n  border-radius: 3px;\n  padding: 5px;\n  color: black;\n  width: 15%;\n  display: inline-block;\n  text-align: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvY2F0ZWdvcmllcy9jYXRlZ29yaWVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixxQkFBcUI7RUFDckIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixxQkFBcUI7RUFDckIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBQ0E7RUFDRSxlQUFlO0VBQ2YsZUFBZTtFQUNmLHNCQUFzQjtBQUN4Qjs7QUFDQTtFQUNFLFVBQVU7RUFDVixxQkFBcUI7RUFDckIsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixzQkFBc0I7QUFDeEI7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLHNDQUEwRDtBQUM1RDs7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFlBQVk7RUFDWixVQUFVO0VBQ1YscUJBQXFCO0VBQ3JCLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2NhdGVnb3JpZXMvY2F0ZWdvcmllcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBvaW50ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5lZGl0LWNhdGVnb3J5LWljb24tYXJlYSB7XG4gIHdpZHRoOiAxNSU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4uY2F0ZWdvcnktdGl0bGUge1xuICB3aWR0aDogNzAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLmFsbC1jYXRlZ29yeS10aXRsZSB7XG4gIHdpZHRoOiA4NSU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4uZWRpdC1jYXRlZ29yeS1pY29uIHtcbiAgY29sb3I6ICNkYWRhZGE7XG59XG4uYWRkLWljb24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbnNwYW4uYWRkLWljb24tYXJlYSB7XG4gIHdpZHRoOiAxNSU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbiNjYXRlZ29yaWVzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbn1cblxuLm5hdi10aXRsZSB7XG4gIHdpZHRoOiA4NSU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG4uc2VhcmNoLWNhdGVnb3J5LWFyZWEge1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbn1cbi5zZWFyY2gtY2F0ZWdvcnktYnV0dG9uIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMjVweDtcbn1cbi5zaWRlYmFyLWJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1nL3NpZGViYXItMS5qcGdcIik7XG59XG4uc2lkZWJhci13cmFwcGVyIHtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbn1cblxuLnVuY29tcGxldGVkLWNvdW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VhZWFlYTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBwYWRkaW5nOiA1cHg7XG4gIGNvbG9yOiBibGFjaztcbiAgd2lkdGg6IDE1JTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/views/categories/categories.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/views/categories/categories.component.ts ***!
  \**********************************************************/
/*! exports provided: CategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesComponent", function() { return CategoriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_data_handler_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/data-handler.service */ "./src/app/service/data-handler.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _dialog_edit_category_dialog_edit_category_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../dialog/edit-category-dialog/edit-category-dialog.component */ "./src/app/dialog/edit-category-dialog/edit-category-dialog.component.ts");





let CategoriesComponent = class CategoriesComponent {
    constructor(dataHandler, dialog) {
        this.dataHandler = dataHandler;
        this.dialog = dialog;
        this.selectCategory = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.deleteCategory = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.updateCategory = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.addCategory = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.searchCategory = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    set setCategoryMap(categoryMap) {
        this.selectedCategoryMap = categoryMap;
    }
    ngOnInit() {
        // this.dataHandler.getAllCategories().subscribe(c => this.categories = c);
    }
    showByCategory(category) {
        if (this.selectedCategory === category) {
            return;
        }
        this.selectedCategory = category;
        this.selectCategory.emit(this.selectedCategory);
    }
    showEditIcon(index) {
        this.indexMouseMove = index;
    }
    openEditCategoryDialog(category) {
        const dialogRef = this.dialog.open(_dialog_edit_category_dialog_edit_category_dialog_component__WEBPACK_IMPORTED_MODULE_4__["EditCategoryDialogComponent"], { data: [category.title, 'Редактирование категории'], width: '400px' });
        dialogRef.afterClosed().subscribe(res => {
            if (res === 'delete') {
                this.deleteCategory.emit(category);
                return;
            }
            if (res) {
                category.title = res;
                this.updateCategory.emit(category);
                return;
            }
        });
    }
    openAddDialog() {
        const dialogRef = this.dialog.open(_dialog_edit_category_dialog_edit_category_dialog_component__WEBPACK_IMPORTED_MODULE_4__["EditCategoryDialogComponent"], { data: ['', 'Добавление категории'], width: '400px' });
        dialogRef.afterClosed().subscribe(res => {
            if (res) {
                this.addCategory.emit(res);
            }
        });
    }
    onFilterByCategory() {
        if (this.searchCategoryText == null) {
            return;
        }
        this.searchCategory.emit(this.searchCategoryText);
    }
};
CategoriesComponent.ctorParameters = () => [
    { type: _service_data_handler_service__WEBPACK_IMPORTED_MODULE_2__["DataHandlerService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CategoriesComponent.prototype, "categories", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], CategoriesComponent.prototype, "selectCategory", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CategoriesComponent.prototype, "selectedCategory", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], CategoriesComponent.prototype, "deleteCategory", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], CategoriesComponent.prototype, "updateCategory", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], CategoriesComponent.prototype, "addCategory", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], CategoriesComponent.prototype, "searchCategory", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CategoriesComponent.prototype, "uncompletedTotal", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('categoryMap')
], CategoriesComponent.prototype, "setCategoryMap", null);
CategoriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-categories',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./categories.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/categories/categories.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./categories.component.css */ "./src/app/views/categories/categories.component.css")).default]
    })
], CategoriesComponent);



/***/ }),

/***/ "./src/app/views/footer/footer.component.css":
/*!***************************************************!*\
  !*** ./src/app/views/footer/footer.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/views/footer/footer.component.ts":
/*!**************************************************!*\
  !*** ./src/app/views/footer/footer.component.ts ***!
  \**************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.css */ "./src/app/views/footer/footer.component.css")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/views/header/header.component.css":
/*!***************************************************!*\
  !*** ./src/app/views/header/header.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header-icon {\n  cursor: pointer;\n  margin-right: 20px;\n}\n\n.settings button {\n  margin-right: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLWljb24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cblxuLnNldHRpbmdzIGJ1dHRvbiB7XG4gIG1hcmdpbi1yaWdodDogMDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/views/header/header.component.ts":
/*!**************************************************!*\
  !*** ./src/app/views/header/header.component.ts ***!
  \**************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _dialog_settings_dialog_settings_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../dialog/settings-dialog/settings-dialog.component */ "./src/app/dialog/settings-dialog/settings-dialog.component.ts");
/* harmony import */ var _dialog_login_dialog_login_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../dialog/login-dialog/login-dialog.component */ "./src/app/dialog/login-dialog/login-dialog.component.ts");
/* harmony import */ var _service_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/authentication.service */ "./src/app/service/authentication.service.ts");






let HeaderComponent = class HeaderComponent {
    constructor(dialog, authService) {
        this.dialog = dialog;
        this.authService = authService;
        this.toggleStat = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        this.userLogin = this.authService.userData;
    }
    onToggleStat() {
        this.toggleStat.emit(!this.showStat);
    }
    showSettings() {
        this.dialog.open(_dialog_settings_dialog_settings_dialog_component__WEBPACK_IMPORTED_MODULE_3__["SettingsDialogComponent"], { autoFocus: false, width: '500px' });
    }
    showAuth() {
        const dialogRef = this.dialog.open(_dialog_login_dialog_login_dialog_component__WEBPACK_IMPORTED_MODULE_4__["LoginDialogComponent"], {
            autoFocus: false,
            width: '300'
        });
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: _service_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], HeaderComponent.prototype, "categoryName", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], HeaderComponent.prototype, "showStat", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], HeaderComponent.prototype, "toggleStat", void 0);
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.css */ "./src/app/views/header/header.component.css")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/views/priorities/priorities.component.css":
/*!***********************************************************!*\
  !*** ./src/app/views/priorities/priorities.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".priority-titles {\n  vertical-align: middle;\n  width: 150px;\n  float: left;\n}\n\n.priority-color {\n  vertical-align: middle;\n  width: 40px;\n  float: left\n}\n\n.color-circle {\n  height: 25px;\n  width: 25px;\n  border-radius: 50%;\n  display: inline-block;\n  border: 1px solid #dadada;\n}\n\n.priorities p {\n  margin: 0 !important;\n}\n\n.little {\n  font-size: 14px;\n  color: rgba(99, 99, 99, 0.98);\n  margin-top: 20px;\n}\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcHJpb3JpdGllcy9wcmlvcml0aWVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1g7QUFDRjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQix5QkFBeUI7QUFDM0I7O0FBR0E7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsNkJBQTZCO0VBQzdCLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3ByaW9yaXRpZXMvcHJpb3JpdGllcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByaW9yaXR5LXRpdGxlcyB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHdpZHRoOiAxNTBweDtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5wcmlvcml0eS1jb2xvciB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHdpZHRoOiA0MHB4O1xuICBmbG9hdDogbGVmdFxufVxuXG4uY29sb3ItY2lyY2xlIHtcbiAgaGVpZ2h0OiAyNXB4O1xuICB3aWR0aDogMjVweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkYWRhZGE7XG59XG5cblxuLnByaW9yaXRpZXMgcCB7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xufVxuXG4ubGl0dGxlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogcmdiYSg5OSwgOTksIDk5LCAwLjk4KTtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuXG5cbiJdfQ== */");

/***/ }),

/***/ "./src/app/views/priorities/priorities.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/views/priorities/priorities.component.ts ***!
  \**********************************************************/
/*! exports provided: PrioritiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrioritiesComponent", function() { return PrioritiesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _model_Priority__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../model/Priority */ "./src/app/model/Priority.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _dialog_edit_priority_dialog_edit_priority_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../dialog/edit-priority-dialog/edit-priority-dialog.component */ "./src/app/dialog/edit-priority-dialog/edit-priority-dialog.component.ts");
/* harmony import */ var _dialog_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../dialog/confirm-dialog/confirm-dialog.component */ "./src/app/dialog/confirm-dialog/confirm-dialog.component.ts");
var PrioritiesComponent_1;






let PrioritiesComponent = PrioritiesComponent_1 = class PrioritiesComponent {
    constructor(dialog) {
        this.dialog = dialog;
        this.addPriority = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.updatePriority = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.deletePriority = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
    }
    onAddPriority() {
        const dialogRef = this.dialog.open(_dialog_edit_priority_dialog_edit_priority_dialog_component__WEBPACK_IMPORTED_MODULE_4__["EditPriorityDialogComponent"], { data: ['', 'Добавление приоритета', true], width: '400px' });
        dialogRef.afterClosed().subscribe(res => {
            if (res) {
                const newPriority = new _model_Priority__WEBPACK_IMPORTED_MODULE_2__["Priority"](null, res, PrioritiesComponent_1.defaultColor);
                this.addPriority.emit(newPriority);
            }
        });
    }
    onDeletePriority(priority) {
        const dialogRef = this.dialog.open(_dialog_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_5__["ConfirmDialogComponent"], {
            maxWidth: '500px',
            data: {
                dialogTitle: 'Подтвердите действие',
                message: 'Вы действительно хотите удалить категорию?'
            },
            autoFocus: false
        });
        dialogRef.afterClosed().subscribe(res => {
            if (res) {
                this.deletePriority.emit(priority);
            }
        });
    }
    onEditPriority(priority) {
        const dialogRef = this.dialog.open(_dialog_edit_priority_dialog_edit_priority_dialog_component__WEBPACK_IMPORTED_MODULE_4__["EditPriorityDialogComponent"], { data: [priority.title, 'Изменить приоритет', true], width: '400px' });
        dialogRef.afterClosed().subscribe(res => {
            if (res === 'delete') {
                this.deletePriority.emit(priority);
                return;
            }
            if (res) {
                priority.title = res;
                this.updatePriority.emit(priority);
                return;
            }
        });
    }
};
PrioritiesComponent.defaultColor = '#fff';
PrioritiesComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PrioritiesComponent.prototype, "priorities", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], PrioritiesComponent.prototype, "addPriority", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], PrioritiesComponent.prototype, "updatePriority", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], PrioritiesComponent.prototype, "deletePriority", void 0);
PrioritiesComponent = PrioritiesComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-priorities',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./priorities.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/priorities/priorities.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./priorities.component.css */ "./src/app/views/priorities/priorities.component.css")).default]
    })
], PrioritiesComponent);



/***/ }),

/***/ "./src/app/views/stat/stat-card/stat-card.component.css":
/*!**************************************************************!*\
  !*** ./src/app/views/stat/stat-card/stat-card.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card-title {\n  font-size: 35px\n}\n\n.stat-card-title {\n  margin-bottom: 0;\n  font-size: 16px;\n}\n\n.completed-card {\n  border: 3px solid #93d893 !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3Mvc3RhdC9zdGF0LWNhcmQvc3RhdC1jYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTtBQUNGOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEMiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9zdGF0L3N0YXQtY2FyZC9zdGF0LWNhcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLXRpdGxlIHtcbiAgZm9udC1zaXplOiAzNXB4XG59XG5cbi5zdGF0LWNhcmQtdGl0bGUge1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5jb21wbGV0ZWQtY2FyZCB7XG4gIGJvcmRlcjogM3B4IHNvbGlkICM5M2Q4OTMgIWltcG9ydGFudDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/views/stat/stat-card/stat-card.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/views/stat/stat-card/stat-card.component.ts ***!
  \*************************************************************/
/*! exports provided: StatCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatCardComponent", function() { return StatCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let StatCardComponent = class StatCardComponent {
    constructor() {
        this.completed = false;
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], StatCardComponent.prototype, "iconName", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], StatCardComponent.prototype, "count1", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], StatCardComponent.prototype, "countTotal", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], StatCardComponent.prototype, "title", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], StatCardComponent.prototype, "completed", void 0);
StatCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-stat-card',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./stat-card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/stat/stat-card/stat-card.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./stat-card.component.css */ "./src/app/views/stat/stat-card/stat-card.component.css")).default]
    })
], StatCardComponent);



/***/ }),

/***/ "./src/app/views/stat/stat.component.css":
/*!***********************************************!*\
  !*** ./src/app/views/stat/stat.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3N0YXQvc3RhdC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/views/stat/stat.component.ts":
/*!**********************************************!*\
  !*** ./src/app/views/stat/stat.component.ts ***!
  \**********************************************/
/*! exports provided: StatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatComponent", function() { return StatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let StatComponent = class StatComponent {
    constructor() { }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], StatComponent.prototype, "completeTasksInCategory", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], StatComponent.prototype, "totalTasksInCategory", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], StatComponent.prototype, "uncompletedTasksInCategory", void 0);
StatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-stat',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./stat.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/stat/stat.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./stat.component.css */ "./src/app/views/stat/stat.component.css")).default]
    })
], StatComponent);



/***/ }),

/***/ "./src/app/views/tasks/tasks.component.css":
/*!*************************************************!*\
  !*** ./src/app/views/tasks/tasks.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".completed {\n  text-decoration: line-through;\n  color: #797979;\n}\n.novalue {\n  color: #b7b7b7;\n}\ntable {\n  width: 100%;\n}\n.nodate {\n  color: #b7b7b7;\n}\n.nopriority {\n  color: #b7b7b7;\n}\n.nocategory {\n  color: #b7b7b7;\n}\n.col-color {\n  width: 1% !important;\n}\n.col-id {\n  width: 4%;\n  text-align: center;\n}\n.col-title {\n  width: 40%;\n}\n.col-date {\n  width: 10%;\n}\n.col-priority {\n  width: 10%;\n}\n.col-category {\n  width: 10%;\n}\n.col-select {\n  width: 3%;\n}\n.col-operations {\n  width: 8%;\n}\n.delete-icon {\n  cursor: pointer;\n  color: #ea6561;\n  font-size: 18px;\n  margin-left: 3px;\n  margin-right: 3px;\n}\n.edit-icon {\n  cursor: pointer;\n  color: #9A9A9A;\n  font-size: 18px;\n  margin-left: 3px;\n  margin-right: 3px;\n}\n.mat-header-cell {\n  font-size: 1.063rem;\n  color: #9c27b0 !important;\n  font-weight: normal;\n}\n.link {\n  cursor: pointer;\n  text-decoration: underline;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvdGFza3MvdGFza3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDZCQUE2QjtFQUM3QixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0UsU0FBUztFQUNULGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsVUFBVTtBQUNaO0FBQ0E7RUFDRSxVQUFVO0FBQ1o7QUFDQTtFQUNFLFVBQVU7QUFDWjtBQUNBO0VBQ0UsVUFBVTtBQUNaO0FBQ0E7RUFDRSxTQUFTO0FBQ1g7QUFDQTtFQUNFLFNBQVM7QUFDWDtBQUNBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGVBQWU7RUFDZiwwQkFBMEI7QUFDNUIiLCJmaWxlIjoic3JjL2FwcC92aWV3cy90YXNrcy90YXNrcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbXBsZXRlZCB7XG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICBjb2xvcjogIzc5Nzk3OTtcbn1cbi5ub3ZhbHVlIHtcbiAgY29sb3I6ICNiN2I3Yjc7XG59XG50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLm5vZGF0ZSB7XG4gIGNvbG9yOiAjYjdiN2I3O1xufVxuLm5vcHJpb3JpdHkge1xuICBjb2xvcjogI2I3YjdiNztcbn1cbi5ub2NhdGVnb3J5IHtcbiAgY29sb3I6ICNiN2I3Yjc7XG59XG4uY29sLWNvbG9yIHtcbiAgd2lkdGg6IDElICFpbXBvcnRhbnQ7XG59XG4uY29sLWlkIHtcbiAgd2lkdGg6IDQlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY29sLXRpdGxlIHtcbiAgd2lkdGg6IDQwJTtcbn1cbi5jb2wtZGF0ZSB7XG4gIHdpZHRoOiAxMCU7XG59XG4uY29sLXByaW9yaXR5IHtcbiAgd2lkdGg6IDEwJTtcbn1cbi5jb2wtY2F0ZWdvcnkge1xuICB3aWR0aDogMTAlO1xufVxuLmNvbC1zZWxlY3Qge1xuICB3aWR0aDogMyU7XG59XG4uY29sLW9wZXJhdGlvbnMge1xuICB3aWR0aDogOCU7XG59XG4uZGVsZXRlLWljb24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiAjZWE2NTYxO1xuICBmb250LXNpemU6IDE4cHg7XG4gIG1hcmdpbi1sZWZ0OiAzcHg7XG4gIG1hcmdpbi1yaWdodDogM3B4O1xufVxuLmVkaXQtaWNvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6ICM5QTlBOUE7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbWFyZ2luLWxlZnQ6IDNweDtcbiAgbWFyZ2luLXJpZ2h0OiAzcHg7XG59XG4ubWF0LWhlYWRlci1jZWxsIHtcbiAgZm9udC1zaXplOiAxLjA2M3JlbTtcbiAgY29sb3I6ICM5YzI3YjAgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cbi5saW5rIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/views/tasks/tasks.component.ts":
/*!************************************************!*\
  !*** ./src/app/views/tasks/tasks.component.ts ***!
  \************************************************/
/*! exports provided: TasksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasksComponent", function() { return TasksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_data_handler_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/data-handler.service */ "./src/app/service/data-handler.service.ts");
/* harmony import */ var _model_Task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../model/Task */ "./src/app/model/Task.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _dialog_edit_task_dialog_edit_task_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../dialog/edit-task-dialog/edit-task-dialog.component */ "./src/app/dialog/edit-task-dialog/edit-task-dialog.component.ts");
/* harmony import */ var _dialog_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../dialog/confirm-dialog/confirm-dialog.component */ "./src/app/dialog/confirm-dialog/confirm-dialog.component.ts");







let TasksComponent = class TasksComponent {
    constructor(dataHandler, dialog) {
        this.dataHandler = dataHandler;
        this.dialog = dialog;
        this.displayedColumns = ['color', 'id', 'title', 'date', 'priority', 'category', 'operations', 'select'];
        this.deleteTask = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.updateTask = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.selectCategory = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.filterByTitle = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.filterByStatus = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.filterByPriority = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.addTask = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.selectedStatusFilter = null;
        this.selectedPriorityFilter = null;
    }
    set setTask(tasks) {
        this.tasks = tasks;
        this.fillTable();
    }
    set setPriorities(priorities) {
        this.priorities = priorities;
    }
    ngOnInit() {
        // this.dataHandler.getAllTasks().subscribe(tasks => this.tasks = tasks);
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]();
        this.fillTable();
        this.onSelectCategory(null);
    }
    toggleTaskCompleted(task) {
        task.completed = !task.completed;
        this.updateTask.emit(task);
        return;
    }
    getPriorityColorTask(task) {
        if (task.completed) {
            return '#F8F9FA';
        }
        if (task.priority && task.priority.color) {
            return task.priority.color;
        }
        return '#fff';
    }
    fillTable() {
        if (!this.dataSource) {
            return;
        }
        this.dataSource.data = this.tasks;
        this.addTableObjects();
        this.dataSource.sortingDataAccessor = (task, colName) => {
            switch (colName) {
                case 'priority': {
                    return task.priority ? task.priority.id : null;
                }
                case 'category': {
                    return task.category ? task.category.title : null;
                }
                case 'date': {
                    return task.date ? task.date : null;
                }
                case 'title': {
                    return task.title;
                }
            }
        };
    }
    addTableObjects() {
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
    }
    openEditTaskDialog(task) {
        // this.updateTask.emit(task);
        const dialogRef = this.dialog.open(_dialog_edit_task_dialog_edit_task_dialog_component__WEBPACK_IMPORTED_MODULE_5__["EditTaskDialogComponent"], { data: [task, 'Редактирование задачи'], autoFocus: false });
        dialogRef.afterClosed().subscribe(res => {
            if (res === 'activate') {
                task.completed = false;
                this.updateTask.emit(task);
                return;
            }
            if (res === 'complete') {
                task.completed = true;
                this.updateTask.emit(task);
                return;
            }
            if (res === 'delete') {
                this.deleteTask.emit(task);
                return;
            }
            if (res) {
                this.updateTask.emit(task);
                return;
            }
        });
    }
    openDeleteDialog(task) {
        const dialogRef = this.dialog.open(_dialog_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmDialogComponent"], {
            maxWidth: '500px',
            data: { dialogTitle: 'Подтвердите действие', message: `Вы действительно хотите удалить задачу: "${task.title}" ?` },
            autoFocus: false
        });
        dialogRef.afterClosed().subscribe(res => {
            if (res) {
                this.deleteTask.emit(task);
            }
        });
    }
    onSelectCategory(category) {
        this.selectCategory.emit(category);
    }
    onFilterByTitle() {
        this.filterByTitle.emit(this.searchTaskText);
    }
    onFilterByStatus(value) {
        if (value !== this.selectedStatusFilter) {
            this.selectedStatusFilter = value;
            this.filterByStatus.emit(this.selectedStatusFilter);
        }
    }
    onFilterByPriority(value) {
        if (value !== this.selectedPriorityFilter) {
            this.selectedPriorityFilter = value;
            this.filterByPriority.emit(this.selectedPriorityFilter);
        }
    }
    openAddTaskDialog() {
        const task = new _model_Task__WEBPACK_IMPORTED_MODULE_3__["Task"](null, '', false, null, this.selectedCategory);
        const dialogRef = this.dialog.open(_dialog_edit_task_dialog_edit_task_dialog_component__WEBPACK_IMPORTED_MODULE_5__["EditTaskDialogComponent"], { data: [task, 'Добавление задачи'] });
        dialogRef.afterClosed().subscribe(res => {
            if (res) {
                this.addTask.emit(task);
            }
        });
    }
};
TasksComponent.ctorParameters = () => [
    { type: _service_data_handler_service__WEBPACK_IMPORTED_MODULE_2__["DataHandlerService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], { static: false })
], TasksComponent.prototype, "paginator", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"], { static: false })
], TasksComponent.prototype, "sort", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('tasks')
], TasksComponent.prototype, "setTask", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], TasksComponent.prototype, "deleteTask", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], TasksComponent.prototype, "updateTask", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], TasksComponent.prototype, "selectCategory", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], TasksComponent.prototype, "filterByTitle", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], TasksComponent.prototype, "filterByStatus", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], TasksComponent.prototype, "filterByPriority", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], TasksComponent.prototype, "addTask", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('priorities')
], TasksComponent.prototype, "setPriorities", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TasksComponent.prototype, "selectedCategory", void 0);
TasksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tasks',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tasks.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/tasks/tasks.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tasks.component.css */ "./src/app/views/tasks/tasks.component.css")).default]
    })
], TasksComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    firebaseConfig: {
        apiKey: 'AIzaSyDL-WIerlPQ6_NLxlWlV9BaUzGEuIjoIvQ',
        authDomain: 'angularfarebasetest.firebaseapp.com',
        databaseURL: 'https://angularfarebasetest.firebaseio.com',
        projectId: 'angularfarebasetest',
        storageBucket: 'angularfarebasetest.appspot.com',
        messagingSenderId: '479258471913',
        appId: '1:479258471913:web:57a52d3683e7585c686f78',
        measurementId: 'G-JC9NHXS4P9'
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/bagdaer/WebstormProjects/ToDo/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map