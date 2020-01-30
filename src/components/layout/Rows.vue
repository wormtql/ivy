<template>
    <div :style="rootStyle">
        <div v-for="(d, index) in divides"
             :key="index"
             :style="[divideStyle, {height: d + '%'}]"
        >
            <slot :name="'divide-' + (index + 1)">slot {{ index + 1 }}</slot>
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
            fluid: {
                type: Boolean,
                default: true
            }
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
                let width = undefined;
                let height = undefined;
                if (this.fluid || this.width === -1) {
                    width = "100%";
                }
                if (this.fluid || this.height === -1) {
                    height = "100%";
                }
                return {
                    width,
                    height,
                }
            }
        }
    }
</script>

<style scoped>

</style>