import {$authHost, $host} from "./index";


export const createType = async (type) => {
    const {data} = await $authHost.post('api/type',type)
    return data
}
export const fetchTypes = async (type) => {
    const {data} = await $host.get('api/type',type)
    return data
}
export const createBrand = async (brand) => {
    const {data} = await $authHost.post('api/brand',brand)
    return data
}
export const fetchBrands = async (brand) => {
    const {data} = await $host.get('api/brand',brand)
    return data
}
export const createDevice = async (device) => {
    const {data} = await $authHost.post('api/device',device)
    return data
}
export const fetchDevices = async (device) => {
    const {data} = await $host.get('api/device',device)
    return data
}
export const fetchOneDevice = async (id) => {
    const {data} = await $host.get('api/device/'+id)
    return data
}