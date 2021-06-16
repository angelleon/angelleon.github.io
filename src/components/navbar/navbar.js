//import { defineComponent } from '@vue/composition-api'
import { SessionComponent } from '../session/session.vue'

/*
const NavbarComponent = defineComponent({
  components: {
    SessionComponent
  },

  setup () {
    return {}
  }
})

export { NavbarComponent as default, NavbarComponent }
*/

const NavbarComponent = {
    name: 'NavbarComponent',
    components: {
      SessionComponent
    }
}

export { NavbarComponent as default, NavbarComponent } 