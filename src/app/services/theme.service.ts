import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  themeDark = 'theme-dark';
  theme = 'theme';

  addThemeDataToLocalStorage(themeStatus: boolean) {
    if(!themeStatus && localStorage.getItem(this.theme) === this.themeDark) {
      localStorage.removeItem(this.theme);
    } else {
      localStorage.setItem(this.theme, this.themeDark);
    }
    this.addClassToBody();
  }

  addClassToBody () {
    const body: any = document.querySelector('body');
    if(localStorage.getItem(this.theme) === this.themeDark) {
      body.classList.add(this.themeDark);
      localStorage.setItem('themeStatus', 'true');
    } else {
      body.classList.remove(this.themeDark);
      localStorage.setItem('themeStatus', 'false');
    }
  }
}
