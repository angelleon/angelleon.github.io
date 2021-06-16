const LandingCardComponent = {
    name: 'LandingCardComponent',
    props: ['content'],
    setup() {
    },
    created() {
        //console.log('created')
    },
    data() {
        return {
            cardContent: `<h1>Magna laus.</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. De ingenio eius in his disputationibus, non de moribus quaeritur. Ita relinquet duas, de quibus etiam atque etiam consideret. Nihil enim hoc differt. <i>Duo Reges: constructio interrete.</i> <b>Hoc mihi cum tuo fratre convenit.</b> <a href="http://loripsum.net/" target="_blank">Ergo hoc quidem apparet, nos ad agendum esse natos.</a> </p>
            `
        }
    }
}

export { LandingCardComponent as default, LandingCardComponent }