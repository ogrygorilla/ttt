import { Lightning } from "@lightningjs/sdk";

export default class NavList extends Lightning.Component {
  static _template() {
    return {
      Items: {
        flex: { direction: "column", wrap: true },
      },
    };
  }

  _construct() {
    this._index = 0;
    this._items = [];
    this._orientation = "horizontal";
  }

  set orientation(str) {
    this._orientation = str;
  }

  set items(arr) {
    this._items = arr;
    if (this.active) {
      this._setup();
    }
  }

  get items() {
    return this.tag("Items").children;
  }

  get currentItem() {
    return this.items[this._index];
  }

  _handleLeft() {
    return this.setIndex(this._index - 1, "horizontal");
  }

  _handleRight() {
    return this.setIndex(this._index + 1, "horizontal");
  }

  setIndex(targetIdx, orientation = this._orientation) {
    if (
      orientation === this._orientation &&
      targetIdx > -1 &&
      targetIdx < this.items.length
    ) {
      this._index = targetIdx;
      return true;
    }
    return false;
  }

  _update() {
    this._setState("");

    if (this.active && this._items.length > 0) {
      this.tag("Items").children = this._items;
      this._setState("Filled");
    } else {
      this.tag("Items").childList.clear();
    }
  }

  _firstActive() {
    this._update();
  }

  static _states() {
    return [
      class Filled extends this {
        _getFocused() {
          return this.currentItem;
        }
      },
    ];
  }
}

// export class NavListDIY extends NavList {
//   static _template() {
//     return {
//       Items: {},
//     };
//   }

//   set orientation(str) {
//     this._orientation = str;
//   }

//   set spacing(num) {
//     this._spacing = num;
//   }

//   get spacing() {
//     return this._spacing || 10;
//   }

//   _update() {
//     this._setState("");

//     if (this.active && this._items.length > 0) {
//       const isHorizontal = this._orientation === "horizontal";
//       const surface = isHorizontal ? "x" : "y";

//       const dimension = isHorizontal ? "width" : "height";

//       let acc = 0;

//       this.tag("Items").children = this._items.map((item) => {
//         const targetPos = acc;
//         acc += item.type[dimension] + this.spacing;
//         return { ...item, [surface]: targetPos };
//       });
//       this._setState("Filled");
//     } else {
//       this.tag("Items").childList.clear();
//     }
//   }
// }
