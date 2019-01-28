import "./scss/styles.scss";
import "@babel/polyfill";

import userProgress from "./js/temper";
import "./js/progress-bar.js";
import "./progress-bar/loading-bar";
//import "./loading-bar/loading-bar";


import View from "./js/view";
import Model from "./js/model";
import Controller from "./js/controller";
import array from "./js/array";

import "./js/array";
import "./js/slider";
import "./js/filter";

const view = new View();
const model = new Model();

const controller = new Controller(model, view);
