const baseURL = 'https://callstagram-api.now.sh/api'

export const getDogs = async () => {
    const response = await fetch(baseURL)
    const json = await response.json()
    return json
}