import PageBase from "./PageBase";
import { NavList, NavListItem } from "../components/navigation-list";

export default class HomePage extends PageBase {
  static _template() {
    return {
      ...super._template(),
      NavList: {
        x: 200,
        y: 190,
        type: NavList,
        spacing: 30,
        direction: "row",
      },
      Content: {
        x: 200,
        y: 390,
        w: 1200,
        h: 470,
        rect: true,
        color: 0xff090909,
        Label: {
          x: 600,
          y: 235,
          color: 0xffc0392b,
          mountX: 0.5,
          mountY: 0.4,
          text: { text: "OPTION1" + "\nsub content page", fontSize: 150 },
        },
      },
    };
  }

  static get header() {
    return "Home page";
  }

  $changeContent({ label, displayColor }) {
    this.tag("Label").patch({
      text: { text: label.toUpperCase() + "\nsub content page" },
      color: displayColor,
    });
  }

  _init() {
    console.log("HomePage _init() test");
    this.tag("NavList").items = [
      {
        type: NavListItem,
        item: { label: "Option1", displayColor: 0xffc0392b },
      },
      {
        type: NavListItem,
        item: { label: "Option2", displayColor: 0xff27ae60 },
      },
      {
        type: NavListItem,
        item: { label: "Option3", displayColor: 0xff8e44ad },
      },
      {
        type: NavListItem,
        item: { label: "Option4", displayColor: 0xfff39c12 },
      },
      {
        type: NavListItem,
        item: { label: "Option5", displayColor: 0xff3498db },
      },
    ];
  }

  _getFocused() {
    return this.tag("NavList");
  }
}
