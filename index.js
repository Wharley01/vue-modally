import ModalContainer from './src/views/ModalsContainer.vue'
import Modal from './src/views/Modal.vue'
const VModal = {
    $___root: null,
    install(Vue, options = null) {
        Vue.mixin({
            data(){
                return {
                    v___modals: []
                }
            },
            methods:{
                async $openModalAsync(component,options){
                    return new Promise((resolve, reject) => {
                        this.$vmodal.show(component,options,($event) => {
                            resolve($event);
                        })
                    })
                }
            },
            computed: {
                $___root() {
                    return VModal.event;
                }
            }
        })


        this.event = new Vue();
        this.$___root = null;
        this.installed = true;


        let default_options = {
            width: 700,
            padding: 20,
            background: 'white',
            type: 'modal',
            blur: true,
            closable: true
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
            async show(component, {
                props = {},
                options = {}
            },onClosed = null) {
                let index = JSON.stringify(VModal.event.$data);

                options = {
                    ...default_options,
                    ...options
                }
                // console.log({index})
                VModal.event.$emit('addNewModal', {
                    component,
                    props,
                    options,
                    onClosed
                });

            }
        }

    }
}
export default VModal