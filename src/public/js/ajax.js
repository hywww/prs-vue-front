import axios from "axios";

export default {
    ajaxGet (api, cb, params) {
        axios.get(api, { params: params })
            .then(cb)
            .catch(err => {
                console.log(err);
            })
    },
    ajaxPost (api, post, cb) {
        axios.post(api, post)
            .then(cb)
            .catch(err => {
                console.log(err);
            })
    },
}