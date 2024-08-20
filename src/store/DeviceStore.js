import { makeAutoObservable } from "mobx";

export default class DeviceStore {
  constructor() {
    this._types = [
      { id: 1, name: "TVs" },
      { id: 2, name: "Smartphones" },
      { id: 3, name: "Laptops" },
      { id: 4, name: "Microwaves" },
    ];
    this._brands = [
      { id: 1, brand: "Samsung" },
      { id: 2, brand: "Apple" },
      { id: 3, brand: "BenQ" },
      { id: 4, brand: "Logitech" },
    ];
    this._devices = [
      {
        id: 1,
        name: "Iphone 11",
        price: 15000,
        rating: 4,
        img: `https://www.apple.com/newsroom/images/tile-images/Apple_iphone_11-rosette-family-lineup-091019.jpg.news_app_ed.jpg`,
      },
      {
        id: 2,
        name: "Iphone 11 Pro",
        price: 25000,
        rating: 5,
        img: `https://www.apple.com/newsroom/images/tile-images/Apple_iphone_11-rosette-family-lineup-091019.jpg.news_app_ed.jpg`,
      },
      {
        id: 3,
        name: "Iphone 11 Pro Max",
        price: 50000,
        rating: 5,
        img: `https://www.apple.com/newsroom/images/tile-images/Apple_iphone_11-rosette-family-lineup-091019.jpg.news_app_ed.jpg`,
      },
    ];
    this._selectedType = {};
    this._selectedBrand = {};

    makeAutoObservable(this);
  }

  getTypes(types) {
    this._types = types;
  }
  getBrands(brands) {
    this._brands = brands;
  }

  getDevices(devices) {
    this._devices = devices;
  }
  getSelectedType(type) {
    this._selectedType = type;
  }

  getSelectedBrand(brand) {
    this._selectedBrand = brand;
  }

  get types() {
    return this._types;
  }
  get brands() {
    return this._brands;
  }
  get devices() {
    return this._devices;
  }
  get selectedType() {
    return this._selectedType;
  }
  get selectedBrand() {
    return this._selectedBrand;
  }
}
