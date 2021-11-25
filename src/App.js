/*
 * If not stated otherwise in this file or this component's LICENSE file the
 * following copyright and licenses apply:
 *
 * Copyright 2020 Metrological
 *
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Lightning, Router, Utils } from "@lightningjs/sdk";
import HomePage from "./pages/Home";
import routes from "./routing/routes";

export default class App extends Router.App {
  static _template() {
    return {
      Background: {
        w: 1920,
        h: 1080,
        rect: true,
        color: this.bindProp("background"), //dark blue: 0xff073763
      },
      ...super._template(),
    };
  }

  static colors() {
    return true;
  }

  set themeColor(str) {
    this._themeColor = str;
  }

  get themeColor() {
    return this._themeColor;
  }

  $getThemeColor() {
    return this.themeColor;
  }

  _setup() {
    console.log("App _setup()");
    Router.startRouter(routes, this);
  }

  _construct() {
    console.log("App _construct()");
  }

  _build() {
    console.log("App _build()");
  }

  _init() {
    console.log("App _init()");
  }

  _attach() {
    console.log("App _attach()");
  }

  _detach() {
    console.log("App _detach()");
  }

  _firstEnable() {
    console.log("App _firstEnable()");
  }

  _enable() {
    console.log("App _enable()");
  }

  _disable() {
    console.log("App _disable()");
  }

  _firstActive() {
    console.log("App _firstActive()");
  }

  _active() {
    console.log("App _active()");
  }
  _inactive() {
    console.log("App _inactive()");
  }
}
