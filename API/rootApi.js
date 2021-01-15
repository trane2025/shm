import Axios from 'axios';



export const rootAPI = {
    getProduct(type = '') {
        return (
            Axios.get(`https://server.cafeshm.ru/app.php?page=delivery&type=${type}`).then(response => response.data)
        )
    },
    postDelivery(order) {
        return (
            Axios.post('https://server.cafeshm.ru/mailto/app.php', `order=${order}`).then(response => response)
        )
    }
}