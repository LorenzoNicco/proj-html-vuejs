<script>
import { store } from "../store.js";

export default {
    name: "SliderSectionVerTwo",
    data () {
        return {
            store,
            autoplay: null,
            innerStyles: {},
            transitioning: false,
            jumboSize: "1000px"
        }
    },
    props: [
        "carousel"
    ],
    methods: {

        next () {
            if (this.transitioning) return

            this.transitioning = true; //il movimento comincia quando transitioning diventa true

            this.moveLeft();

            this.afterTransition(() => {
                const card = this.store.jumbo.shift(); //shift rimuove il primo elemento di un array, creando una costante con esso, e lasciando l'array con gli elementi rimanenti
                this.store.jumbo.push(card); //con questa funzione, pushiamo nuovamente l'elemento tolto prima nell'array, così da farl odiventare l'ultimo della lista
                this.resetTranslate(); //resetta la posizione delle card dopo aver fatto scorrere il container
                this.transitioning = false;
            });
        },

        prev () {
            if (this.transitioning) return
            
            this.transitioning = true;

            this.moveRight();

            this.afterTransition(() => {
                const card = this.store.jumbo.pop(); //uguale a shift, ma agisce sull'ultimo elemento dell'array
                this.store.jumbo.unshift(card); //uguale a push, ma mette l'elemento all'inizio dell'array
                this.resetTranslate();
                this.transitioning = false;
            });
        },


        moveLeft () {
            this.innerStyles = {
                transform: `translateX(-${this.jumboSize})
                            translateX(-${this.jumboSize})` //il secondo translate serve a far si che tutte le trasformazioni successive comincino da quel punto (cioè - la larchezza dell'ooggetto)
            }
        },

        moveRight () {
            this.innerStyles = {
                transform: `translateX(${this.jumboSize})
                            translateX(-${this.jumboSize})` //il secondo translate serve a far si che tutte le trasformazioni successive comincino da quel punto (cioè - la larchezza dell'ooggetto)
            }
        },
        afterTransition (callback) {
            const listener = () => {
                callback();
                this.$refs.inner.removeEventListener('transitionend', listener); //$ref si riferisce all'elemento che ha la proprietà ref
            }
            this.$refs.inner.addEventListener('transitionend', listener); //transitionend è un evento che stabilisce quando una transizione css è compiuta
        },

        resetTranslate () {
            this.innerStyles = {
                transition: 'none', //azzerando la transition, abbiamo un ritorno istantaneo alla situazione iniziale del container
                transform: `translateX(-${this.jumboSize})` //riporta indietro la card
            }
        }
    },
    mounted () {
        this.autoplay = setInterval(this.next, 3000);        
    },

    
}
</script>

<template>
    <div v-if="carousel == store.jumbo.length" class="slide jumbotron">
        <div class="external">
            <div class="inner" ref="inner"  :style="innerStyles">
                <div class="col" v-for="index in store.jumbo">
                    <h5>{{ index.secondaryTitle }}</h5>
    
                    <h1>{{ index.mainTitle }}</h1>
    
                    <button>READ MORE</button>
                </div>
            </div>

        </div>


        <div class="left arrow" @click="prev">
            <img src="/cinema/img/assets/left-arrow.svg" alt="img">
        </div>

        <div class="right arrow" @click="next">
            <img src="/cinema/img/assets/right-arrow.svg" alt="img">
        </div>
    </div>
</template>

<style lang="scss" scoped>
    //  sezione jumbotron---------------------------------------------------------------------------------------
    .jumbotron {
        width: 100%;
        position: relative;

        .external {
            width: 1000px;
            overflow: hidden;
            margin: 0 auto;
            .inner {
                width: 1000px;
                margin: 0 auto;
                padding: 10rem 0;
                filter: brightness(0.65);
                @include flex-start;
                transition: transform 0.5s;
                
                
                .col {
                    width: 500px;
                    margin-right: 500px;
                    color: white;
                    
                    h1 {
                        height: 96px;
                        width: 500px;
                        margin: 1rem 0 2rem;
                        font-size: 3rem;
                    }
    
                    button {
                        @include white-btn;
                    }
                }
            }

        }

        // ARROWS ---------------------------------------------------------
        .arrow {
            height: 2rem;
            width: 2rem;
            padding: 0.5rem;
            background-color: rgba(0, 0, 0, 0.5);
            position: absolute;
            z-index: 20;

            img {
                height: 1rem;
                filter: invert(1);
            }
        }

        .left {
            top: 50%;
            left: 1%;
        }

        .right {
            top: 50%;
            right: 1%;
        }
    }
</style>