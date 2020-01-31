<script>
    export default {
        name: "PColor",
        props: {
            color: { type: String }
        },
        render: function () {
            return null;
        },
        mounted: function () {
            // window.console.log(this.$el.parentElement);
            let color = "transparent";
            if (this.$slots.default) {
                color = this.$slots.default[0].text;
            }
            if (this.color) {
                color = this.color;
            }
            if (this.$el.parentElement) {
                this.$el.parentElement.style.backgroundColor = color;
            }
        },
        watch: {
            color: function (newValue) {
                if (this.$el.parentElement) {
                    this.$el.parentElement.style.backgroundColor = newValue;
                }
            }
        }
    }
</script>

<style scoped>

</style>