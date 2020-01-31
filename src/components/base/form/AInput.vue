<template>
    <div :style="rootStyle" @mouseenter="hover = true" @mouseleave="hover = false">
        <div :style="iconStyle" v-if="prependIcon">
            <a-icon :icon="prependIcon" color="#aaa"></a-icon>
        </div>
        <input :style="inputStyle" :type="password ? 'password' : 'text'" :placeholder="hint" @focusin="focused = true"
               @focusout="focused = false" @input="onInput" :value="value" />
    </div>
</template>

<script>
    import AIcon from "@/components/base/display/AIcon";
    export default {
        name: "AInput",
        components: {AIcon},
        data: function () {
            return {
                hover: false,
                focused: false
            }
        },
        props: {
            value: { type: String },
            prependIcon: { type: String },
            block: { type: Boolean, default: false },
            width: { type: Number, default: 256 },
            height: { type: Number, default: 40 },
            hint: { type: String, default: "hint" },
            password: { type: Boolean, default: false }
        },
        methods: {
            onInput: function (e) {
                this.$emit("input", e.target.value);
            }
        },
        computed: {
            inputStyle: function () {
                return {
                    width: this.prependIcon ? `calc(100% - ${this.height}px)` : "100%",
                    display: "inline-block",
                    height: "100%",
                    verticalAlign: "top",
                    outline: "none",
                    boxSizing: "border-box",
                    border: "none",
                    background: "transparent",
                    padding: this.prependIcon ? "0" : "0 8px",
                    letterSpacing: "1px"
                }
            },
            iconStyle: function () {
                return {
                    height: `${this.height}px`,
                    width: `${this.height}px`,
                    display: "inline-flex",
                    verticalAlign: "top",
                    alignItems: "center",
                    justifyContent: "center"
                }
            },
            rootStyle: function () {
                return {
                    display: this.block ? "block" : "inline-block",
                    height: `${this.height}px`,
                    width: this.block ? "100%" : `${this.width}px`,
                    borderRadius: "3px",
                    backgroundColor: this.hover ? "#00000022" : this.focused ? "#00000022" : "#00000011",
                    transition: "300ms"
                }
            }
        }
    }
</script>

<style scoped>

</style>