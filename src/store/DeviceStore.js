import { makeAutoObservable } from "mobx";

export default class DeviceStore {
	constructor() {
		this._types = [
			{ id: 1, name: 'Холодильники' },
			{ id: 2, name: 'Смартфоны' },
			{ id: 3, name: 'Ноутбуки' },
			{ id: 4, name: 'Телевизоры' },
		]
		this._brands = [
			{ id: 1, name: 'Samsung' },
			{ id: 2, name: 'Apple' },
			{ id: 3, name: 'Xiaomi' },
			{ id: 4, name: 'Realme' },
		]
		this._devices = [
			{ id: 1, name: 'IPhone 14 pro', price: 120000, rating: 5, img: `../../imgs/f5d15c4de9c5fb584555e79d796545bd.jpeg` },
			{ id: 2, name: 'IPhone 12', price: 78000, rating: 5, img: `../../imgs/6493876916.jpg` },
			{ id: 3, name: 'IPhone 13 pro', price: 105000, rating: 5, img: `../../imgs/f5d15c4de9c5fb584555e79d796545bd.jpeg` },
			{ id: 4, name: 'IPhone 13', price: 88000, rating: 5, img: `../../imgs/6493876916.jpg` },
			{ id: 5, name: 'IPhone 16', price: 105000, rating: 5, img: `../../imgs/f5d15c4de9c5fb584555e79d796545bd.jpeg` },
			{ id: 6, name: 'IPhone 17', price: 88000, rating: 5, img: `../../imgs/6493876916.jpg` },
		]

		this._selectedType = {}
		this._selectedBrand = {}
		makeAutoObservable(this)
	}

	setTypes(types) {
		this._types = types
	}

	setBrands(brands) {
		this._brands = brands
	}

	setDevices(devices) {
		this._devices = devices
	}

	setSelectedType(type) {
		this._selectedType = type
	}

	setSelectedBrand(brand) {
		this._selectedBrand = brand
	}

	get types() {
		return this._types
	}

	get brands() {
		return this._brands
	}

	get devices() {
		return this._devices
	}

	get selectedType() {
		return this._selectedType
	}

	get selectedBrand() {
		return this._selectedBrand
	}
}