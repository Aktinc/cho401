import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cho401';

  nav = true;
  navb = true;
  items = [1, 2, 3]
  lists = [1, 2, 3]
  i = 0;
  bort !: string;
  bg !: string;
  /**
   * 显示消失
   */
  navShow() {
    this.nav = !this.nav;
    return false;
  }

  /**
   * 特定显示消失
   */
  listShow(list: number) {
    if (this.i != this.items[list - 1]) {
      this.i = this.items[list - 1];
    } else {
      this.i = 0;
    }
    this.bort = "";
    this.bg = ""
    this.navb = !this.navb;
  }
  goup() {
    return this.i;
  }

  /**
   * 边框点击
   */
  bor(item: number) {
    this.i = this.items[item - 1];
    this.bort = "1px solid antiquewhite";
    this.bg = "bisque"
  }
}
