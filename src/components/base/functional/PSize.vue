<script>
    export default {
        name: "PSize",
        props: {
            width: [String, Number],
            height: [String, Number]
        },
        render: function () {
            return null;
        },
        mounted: function () {
            let width = "100%";
            if ((typeof this.width) === "string") {
                width = this.width;
            } else if ((typeof this.width) === "number") {
                width = `${this.width}px`;
            }

            let height = "100%";
            if ((typeof this.height) === "string") {
                height = this.height;
            } else if ((typeof this.height) === "number") {
                height = `${this.height}px`;
            }

            this.$el.parentElement.style.width = width;
            this.$el.parentElement.style.height = height;
        },
        watch: {
            width: function (newValue) {
                let width = "100%";
                if ((typeof newValue) === "string") {
                    width = this.width;
                } else if ((typeof newValue) === "number") {
                    width = `${this.width}px`;
                }
                this.$el.parentElement.style.width = width;
            },
            height: function (newValue) {
                let height = "100%";
                if ((typeof newValue) === "string") {
                    height = this.height;
                } else if ((typeof newValue) === "number") {
                    height = `${this.height}px`;
                }
                this.$el.parentElement.style.height = height;
            }
        }
    }
</script>

<style scoped>

</style>