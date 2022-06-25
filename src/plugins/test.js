
import vuetify from "@/plugins/vuetify";
import ModalWindow from "@/components/ModalWindow";
export default {
    install(Vue){
        Vue.prototype.$openModalWindow = (data) => {
        return new Promise(resolve => {
                const props = {...data}
                const on = {}
                const component = new Vue({
                    vuetify,
                    render: (h) => h(ModalWindow, {props,on})
                })
                on.destroy = (data) => {
                    data ? resolve(data) : resolve();
                    component.$off('destroy')
                    document.getElementById('app').removeChild(component.$el)
                    component.$destroy()
                }
                component.$mount()
                document.getElementById('app').appendChild(component.$el)

            })
        }

    }
}