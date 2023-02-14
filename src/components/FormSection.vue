<script>
export default {
    name: "FormSection",
    data() {
        return {
        }
    }
}
</script>

<template>
    <section class="form-section">
        <div class="container">
            <div class="col">
                <h6>COLLABORATE</h6>

                <h2>WANT TO WORK WITH US?<br> LEAVE US A MESSAGE!</h2>

                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse adipisci saepe illo fugiat aperiam id. Qui, expedita architecto magnam aliquid odio dicta iure. Perspiciatis dicta ipsum voluptatum quo iste quos in aspernatur consequuntur, sequi labore.</p>
            </div>

            <div class="col">
                <form action="">
                    <div>
                        <input type="text" placeholder="Your Name">

                        <input type="email" placeholder="Your Email">
                    </div>

                    <div>
                        <input type="number" placeholder="Mobile Number">
                        
                        <input type="number" placeholder="Your Pincode">
                    </div>

                    <textarea name="" id="" cols="30" rows="10" placeholder="Enter Your Message"></textarea>

                    <input class="submit" type="submit" value="SUBMIT NOW">
                </form>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    // @import "../styles/partials/debug.scss";
    .form-section {
        background-color: white;

        .container {
            @include container-size;
            @include flex-between;

            .col {
                width: 48%;
                align-self: start;

                h2 {
                    margin: 1.5rem 0;
                }

                p {
                    line-height: $line-height-media;
                }
                
                div {
                    display: flex;
                    justify-content: space-between;

                    input {
                        width: 48%;
                        @include input-rules;
                    }
                }

                textarea {
                    width: 100%;
                    display: block;
                    @include input-rules;
                }

                .submit {
                    width: 100%;
                    background-color: black;
                    color: white;
                    line-height: 2rem;
                    cursor: pointer;
                }
            }
        }
    }
</style>
