
import vuetify from "@/plugins/vuetify";

export default {
    install(Vue){
        Vue.prototype.$openModalWindow = (data,src = 'ModalWindow') => {
        return new Promise(resolve => {
                const props = {...data}
                const on = {}
                const AsyncComponent = () => import(`@/components/${src}`)
                const component = new Vue({
                    vuetify,
                    render: (h) => h(AsyncComponent, {props,on})
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