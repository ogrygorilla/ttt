import HomePage from "../pages/Home";
import {AppInstance} from "@lightningjs/sdk/src/Application";
import {Colors} from "@lightningjs/sdk";

const routes = [
  {
    path: "/home",
    component: HomePage,
  },
];

export default {
  root: routes[0].path,
  routes,
  beforeEachRoute: (from, to) => {
    const randomColor = `color${Math.floor(Math.random() * 5) + 1}`;
    AppInstance.themeColor = randomColor;
    AppInstance.background = Colors(randomColor).get();
    return true;
  },
};
