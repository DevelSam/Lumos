const API_KEYS = ['KAK5971-W7T4JWN-HJMJNXD-EMYD3KG']
//'KAK5971-W7T4JWN-HJMJNXD-EMYD3KG'
let currentKeyIndex = 0
export const getCurrentKey = () => API_KEYS[currentKeyIndex]

export const rotateKey = () => {
  currentKeyIndex = (currentKeyIndex + 1) % API_KEYS
  console.log('SWITCHED KEY')
}
