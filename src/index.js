import "./scss/styles.scss";
import "@babel/polyfill";
import userProgress from "./js/temper";
import View from "./js/view";
import Model from "./js/model";
import Controller from "./js/controller";

import "./loading-bar/loading-bar";

const view = new View();
const model = new Model();
// userProgress(500);

const controller = new Controller(model, view);
