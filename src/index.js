import "./scss/styles.scss";
import "@babel/polyfill";

import View from "./js/view";
import Model from "./js/model";
import Controller from "./js/controller";
import array from './js/array';
import "./loading-bar/loading-bar";
import "./js/slider";

const view = new View();
const model = new Model();
<<<<<<< HEAD

const controller = new Controller(model, view);
=======
const controller = new Controller(model, view);
>>>>>>> d068e05b82599926531bcd3c3f7903f9a3d40ed7
