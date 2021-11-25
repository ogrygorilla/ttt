import { Lightning, Colors } from "@lightningjs/sdk";

export default class PageBase extends Lightning.Component {
  static _template() {
    return {
      Content: {},
      FadeTop: {
        w: 1920,
        h: 500,
        rect: true,
        colorTop: Colors("white").alpha(0.7).get(),
        colorBottom: 0x00000000,
      },
      Header: {
        x: 200,
        y: 50,
        color: 0xff090909, // Colors("white").get(),
        text: { text: this.header, fontFace: "Londrina", fontSize: 75 },
      },
    };
  }

  _focus() {
    this.setSmooth("alpha", 1);
  }

  _unfocus() {
    this.setSmooth("alpha", 0);
  }

  _active() {
    this.patch({
      FadeTop: {
        colorTop: Colors(this.fireAncestors("$getThemeColor")).alpha(0.7).get(),
      },
    });
  }

  static get header() {
    return "PageBase";
  }
}
