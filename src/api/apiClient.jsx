const API_KEYS = ['KAK5971-W7T4JWN-HJMJNXD-EMYD3KG', '7MS4W7W-R6T4R1Z-KE64E8G-AW4MCZT']
let currentKeyIndex = 0
export const getCurrentKey = () => API_KEYS[currentKeyIndex]

export const rotateKey = () => {
    currentKeyIndex = (currentKeyIndex + 1) % API_KEYS
    console.log('SWITCHED KEY')
}