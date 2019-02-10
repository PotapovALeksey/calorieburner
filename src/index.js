import "./scss/styles.scss";
import "@babel/polyfill";

import "./progress-bar/loading-bar";

import "./js/filter";
import "./js/progress-bar-cal.js";
import "./js/progress-bar-time.js";

import View from "./js/view";
import Model from "./js/model";
import Controller from "./js/controller";

const view = new View();
const model = new Model();
const controller = new Controller(model, view);
