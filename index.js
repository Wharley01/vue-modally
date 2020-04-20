import ModalContainer from './src/views/ModalsContainer.vue'
import Modal from './src/views/Modal.vue'

const VModal = {
    root: null,
    install(Vue, options = null) {

        this.event = new Vue();
        this.root = null;
        this.installed = true;


        let default_options = {
            width: 700,
            padding: 20,
            background: 'white',
            type: 'modal',
            blur: true
        }

        if (options) {
            default_options = {
                ...default_options,
                ...options
            }
        }

        // register necessary component

        Vue.component('VModalsComponent', ModalContainer)
        Vue.component('VModal', Modal)


        // 4. add an instance method
        Vue.prototype.$vmodal = {
            show(component, {
                props = {},
                options = {}
            }) {
                options = {
                    ...default_options,
                    ...options
                }
                VModal.event.$emit('addNewModal', {
                    component,
                    props,
                    options
                })



            }
        }

        Vue.mixin({
            computed: {
                root() {
                    return VModal.event;
                }
            }

        })
    }
}
export default VModal