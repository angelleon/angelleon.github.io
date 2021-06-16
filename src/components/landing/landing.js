import { LandingCardComponent } from '../landing-card/landing-card.vue'
import { DescriptionComponent } from '../description/description.vue'
import { mkarr } from '../../assets/js/angelleon.js'


const LandingComponent = {
    name: 'LandingComponent',
    components: {
        LandingCardComponent,
        DescriptionComponent
    },
    mounted() {
    },
    data() {
        return {
            columns: 3,
            cardContents: mkarr(5, `<h1>Magna laus.</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. De ingenio eius in his disputationibus, non de moribus quaeritur. Ita relinquet duas, de quibus etiam atque etiam consideret. Nihil enim hoc differt. <i>Duo Reges: constructio interrete.</i> <b>Hoc mihi cum tuo fratre convenit.</b> <a href="http://loripsum.net/" target="_blank">Ergo hoc quidem apparet, nos ad agendum esse natos.</a> </p>
           `)

        }
    },
    methods: {
        computeStyle: function (index) {
            console.log(index)
            return {
                "grid-column-start": this.computeIndex(index) + 1 ,
                "grid-column-end": this.computeIndex(index) + 2
            }
        },
        computeIndex: function (index) {
            return index % this.columns;
        }
    }
}

export { LandingComponent as default, LandingComponent }