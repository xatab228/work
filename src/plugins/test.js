

export default {
    install(Vue,){
        Vue.prototype.$test = function (props) {
            console.log(props)
        }
    }
}