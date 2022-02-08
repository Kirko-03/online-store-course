import {makeAutoObservable} from 'mobx'

export default class DevicesStore {
    constructor() {
        this._types = [
            {
                "id": 1,
                "name": "Холодильники",
                "createdAt": "2022-02-06T07:31:09.328Z",
                "updatedAt": "2022-02-06T07:31:09.328Z"
            },
            {
                "id": 2,
                "name": "Смартфоны",
                "createdAt": "2022-02-06T07:39:18.940Z",
                "updatedAt": "2022-02-06T07:39:18.940Z"
            },
            {
                "id": 3,
                "name": "Lenovo",
                "createdAt": "2022-02-07T15:50:45.803Z",
                "updatedAt": "2022-02-07T15:50:45.803Z"
            }, {
                "id": 4,
                "name": "Ноутбуки",
                "createdAt": "2022-02-07T15:50:45.803Z",
                "updatedAt": "2022-02-07T15:50:45.803Z"
            }, {
                "id": 5,
                "name": "Телевизоры",
                "createdAt": "2022-02-07T15:50:45.803Z",
                "updatedAt": "2022-02-07T15:50:45.803Z"
            },
        ]
        this._brands = [
            {
                "id": 1,
                "name": "Samsung",
                "createdAt": "2022-02-06T07:44:24.982Z",
                "updatedAt": "2022-02-06T07:44:24.982Z"
            },
            {
                "id": 2,
                "name": "Everest",
                "createdAt": "2022-02-06T07:46:19.453Z",
                "updatedAt": "2022-02-06T07:46:19.453Z"
            } ,{
                "id": 3,
                "name": "Apple",
                "createdAt": "2022-02-06T07:44:24.982Z",
                "updatedAt": "2022-02-06T07:44:24.982Z"
            },
            {
                "id": 4,
                "name": "Sony",
                "createdAt": "2022-02-06T07:46:19.453Z",
                "updatedAt": "2022-02-06T07:46:19.453Z"
            } ,{
                "id": 5,
                "name": "HP",
                "createdAt": "2022-02-06T07:44:24.982Z",
                "updatedAt": "2022-02-06T07:44:24.982Z"
            },
            {
                "id": 6,
                "name": "Lenovo",
                "createdAt": "2022-02-06T07:46:19.453Z",
                "updatedAt": "2022-02-06T07:46:19.453Z"
            } ,{
                "id": 7,
                "name": "Huawei",
                "createdAt": "2022-02-06T07:44:24.982Z",
                "updatedAt": "2022-02-06T07:44:24.982Z"
            }
        ]
        this._devices = [
            {
                "id": 1,
                "name": "12 pro",
                "price": 80000,
                "rating": 0,
                "img": "3038a01b-0708-4f95-9c98-ce9cf2282b04.jpg",
                "createdAt": "2022-02-06T08:14:02.497Z",
                "updatedAt": "2022-02-06T08:14:02.497Z",
                "typeId": 2,
                "brandId": 2
            },
            {
                "id": 2,
                "name": "K5 Pro",
                "price": 20000,
                "rating": 0,
                "img": "3926a23e-2010-420d-aad2-5b8c003ef1ba.jpg",
                "createdAt": "2022-02-06T08:41:43.198Z",
                "updatedAt": "2022-02-06T08:41:43.198Z",
                "typeId": 1,
                "brandId": 2
            },
            {
                "id": 3,
                "name": "Honor 10 Lite",
                "price": 25000,
                "rating": 0,
                "img": "d3f1c352-2e1c-4339-a689-103b069fa008.jpg",
                "createdAt": "2022-02-06T08:42:24.861Z",
                "updatedAt": "2022-02-06T08:42:24.861Z",
                "typeId": 2,
                "brandId": 1
            },
            {
                "id": 4,
                "name": "Atlant",
                "price": 25000,
                "rating": 0,
                "img": "3ae14a25-cc0f-48cc-a54f-84521d6d67e6.jpg",
                "createdAt": "2022-02-06T08:42:42.226Z",
                "updatedAt": "2022-02-06T08:42:42.226Z",
                "typeId": 1,
                "brandId": 2
            },{
                "id": 4,
                "name": "Atlant",
                "price": 25000,
                "rating": 0,
                "img": "3ae14a25-cc0f-48cc-a54f-84521d6d67e6.jpg",
                "createdAt": "2022-02-06T08:42:42.226Z",
                "updatedAt": "2022-02-06T08:42:42.226Z",
                "typeId": 1,
                "brandId": 2
            },{
                "id": 4,
                "name": "Atlant",
                "price": 25000,
                "rating": 0,
                "img": "3ae14a25-cc0f-48cc-a54f-84521d6d67e6.jpg",
                "createdAt": "2022-02-06T08:42:42.226Z",
                "updatedAt": "2022-02-06T08:42:42.226Z",
                "typeId": 1,
                "brandId": 2
            },{
                "id": 4,
                "name": "Atlant",
                "price": 25000,
                "rating": 0,
                "img": "3ae14a25-cc0f-48cc-a54f-84521d6d67e6.jpg",
                "createdAt": "2022-02-06T08:42:42.226Z",
                "updatedAt": "2022-02-06T08:42:42.226Z",
                "typeId": 1,
                "brandId": 2
            },{
                "id": 4,
                "name": "Atlant",
                "price": 25000,
                "rating": 0,
                "img": "3ae14a25-cc0f-48cc-a54f-84521d6d67e6.jpg",
                "createdAt": "2022-02-06T08:42:42.226Z",
                "updatedAt": "2022-02-06T08:42:42.226Z",
                "typeId": 1,
                "brandId": 2
            },
            this._selectedType = {},
            this._selectedBrand = {}
        ]
        makeAutoObservable(this)
    }

    setBrands(brands) {
        this._brands = brands
    }

    setDevices(devices) {
        this._devices = devices
    }

    setTypes(types) {
        this._types = types
    }

    setSelectedType(type) {
        this._selectedType = type
    }
    setSelectedBrand(brand) {
        this._selectedBrand = brand
    }

    get brands() {
        return this._brands
    }

    get types() {
        return this._types
    }

    get devices() {
        return this._devices
    }

    get selectedType() {
        return this._selectedType
    }
    get selectedBrand(){
        return this._selectedBrand
    }
}