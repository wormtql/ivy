<script>
    export default {
        name: "PPadding",
        props: {
            padding: String
        },
        render: function () {
            return null;
        },
        mounted: function () {
            let padding = "0";
            if (this.$slots.default) {
                padding = this.$slots.default[0].text || "0";
            }
            if (this.padding) {
                padding = this.padding;
            }
            if (this.$el.parentElement) {
                this.$el.parentElement.style.padding = padding;
            }
        },
        watch: {
            padding: function (newValue) {
                if (this.$el.parentElement) {
                    this.$el.parentElement.style.padding = newValue;
                }
            }
        }
    }
</script>

<style scoped>

</style>