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
                <h5>DEBUG</h5>

                <h2>DEBUG</h2>

                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid, culpa reiciendis autem dolor dicta corrupti illum ipsam nisi quam tempore.</p>
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
    @import "../styles/partials/debug.scss";
    .form-section {
        background-color: white;

        .container {
            @include container-size;
            @include flex-between;

            .col {
                width: 48%;
                align-self: start;
                
                div {
                    display: flex;
                    justify-content: space-between;

                    input {
                        width: 48%;
                        margin-bottom: 1rem;
                    }
                }

                textarea {
                    width: 100%;
                    display: block;
                    margin-bottom: 1rem;
                }

                .submit {
                    width: 100%;
                    background-color: black;
                    color: white;
                    line-height: 2rem;
                }
            }
        }
    }
</style>
