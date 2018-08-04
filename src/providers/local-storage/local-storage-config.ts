import { Injectable } from '@angular/core';

const config_key_name = "config";

@Injectable()
export class LocalStorageConfigProvider {
  
  private config = {
    showSlide: false,
    name: ""
  }

  constructor() {
    
  }

  getConfigData() {
    return localStorage.getItem(config_key_name);
  }

  setConfigData(showSlide?: boolean, name?: string) {
    let config = {
      showSlide: false,
      name: ""
    }

    if(showSlide)
      config.showSlide = showSlide;
    if(name)
      config.name = name;

    localStorage.setItem(config_key_name, JSON.stringify(config));
  }

}
