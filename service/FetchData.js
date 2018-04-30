const baseURL = 'http://www.json-generator.com/api/json/get/cpmsrBVaYy?indent=2'

export const getDogs = async () => {
    const response = await fetch(baseURL)
    const json = await response.json()
    return json
}