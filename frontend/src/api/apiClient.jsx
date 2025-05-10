const API_KEYS = ['HDXBD6T-YRV439T-P5TR08P-9X7CJ8A']
//'8CY5Z2T-2QRM3SQ-K9CK63M-SSB8MP1'
//'7MS4W7W-R6T4R1Z-KE64E8G-AW4MCZT'
//'HDXBD6T-YRV439T-P5TR08P-9X7CJ8A'
//'KAK5971-W7T4JWN-HJMJNXD-EMYD3KG' --Новый клиент 22
let currentKeyIndex = 0
export const getCurrentKey = () => API_KEYS[currentKeyIndex]

export const rotateKey = () => {
  currentKeyIndex = (currentKeyIndex + 1) % API_KEYS
  console.log('SWITCHED KEY')
}
