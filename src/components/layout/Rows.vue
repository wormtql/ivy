<template>
    <div :style="rootStyle">
        <div v-for="(d, index) in divides"
             :key="index"
             :style="[divideStyle, {height: d + '%'}]"
        >
            <slot :name="'d' + (index + 1)">slot {{ index + 1 }}</slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Rows",
        props: {
            divide: {
                type: String,
                default: "1"
            },
            width: {
                type: Number,
                default: -1
            },
        },
        computed: {
            divides: function () {
                let x = this.divide.split(" ").map((s) => {
                    return parseInt(s, 10);
                });
                let sum = 0;
                for (let i of x) {
                    sum += i;
                }
                return x.map((n) => {
                    return n / sum * 100;
                });
            },
            divideStyle: function () {
                return {
                    display: "block",
                    width: "100%"
                }
            },
            rootStyle: function () {
                return {
                    width: "100%",
                    height: "100%"
                }
            }
        }
    }
</script>

<style scoped>

</style>