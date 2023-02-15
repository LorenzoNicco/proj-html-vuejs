<script>
export default {
    name: "ScrollUpButton",

}
</script>

<template>
    <div>
        <a href="#header">
            <img src="/cinema/img/assets/image-21.svg" alt="">
        </a>
    </div>
</template>

<style lang="scss" scoped>
    div {
        height: 4rem;
        width: 4rem;
        border-radius: 50%;
        background-color: rgba(0, 0, 0, 0.5);
        position: sticky;
        left: 90%;
        bottom: 10%;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
</style>