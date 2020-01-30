<template>
    <div :style="rootStyle">
        <div v-for="(d, index) in divides"
             :key="index"
             :style="[divideStyle, {width: d + '%'}]"
        >
            <slot :name="'d' + (index + 1)">divide {{ index + 1 }}</slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Columns",
        props: {
            divide: {
                type: String,
                default: "1"
            },
        },
        methods: {
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
                    height: "100%",
                    display: "inline-block",
                    verticalAlign: "top"
                }
            },
            rootStyle: function () {
                return {
                    width: "100%",
                    height : "100%",
                }
            }
        }
    }
</script>

<style scoped>

</style>