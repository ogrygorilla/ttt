import { Lightning } from "@lightningjs/sdk";

export default class NavListItem extends Lightning.Component {
  static _template() {
    return {
      w: 155,
      h: 70,
      rect: true,
      color: 0xff090909,
      flexItem: { marginRight: 30 },
      Label: { x: 25, y: 20, color: 0xffaa009e },
    };
  }

  set item(obj) {
    this._item = obj;
  }

  set label(str) {
    this._item.label = str;
    this._update();
  }

  set displayColor(argb) {
    this._item.displayColor = argb;
    this._update();
  }

  _update() {
    if (this.active && this._item) {
      const { label = "Void", displayColor = 0xff090909 } = this._item;
      const color = this.hasFocus() ? 0xffffff : displayColor;
      this.patch({
        color: this.hasFocus() ? displayColor : 0xff090909,
        Label: { color, text: { text: label, fontSize: 28 } },
      });
    }
  }

  _firstActive() {
    this._update();
  }

  _focus() {
    this.patch({
      smooth: { color: this._item.displayColor },
      Label: { smooth: { color: 0xffffffff } },
    });
  }

  _unfocus() {
    const color = this._item.displayColor;
    this.patch({
      smooth: { color: 0xff090909 },
      Label: { smooth: { color } },
    });
  }

  _handleEnter() {
    this.fireAncestors("$changeContent", this._item);
  }
}
