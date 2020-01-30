
<script>
    import ListDefaultView from "@/components/ui/list/ListDefaultView";
    export default {
        render: function (createElement) {
            // 展示层
            let view = this.view ? this.view : ListDefaultView;
            let children = [];
            for (let i = 0; i < this.models.length; i++) {
                children.push(createElement(view, {
                    props: Object.assign({
                        hover: this.hover === i,
                        selected: this.selected === i,
                        down: this.hover === i ? this.down : false,
                        color: this.color,
                    }, this.models[i]),
                    nativeOn: {
                        click: () => { this.clickHandler(i); },
                        mouseenter: () => { this.hover = i; },
                        mouseleave: () => { this.hover = -1; }
                    }
                }));
            }
            return createElement("div", {
                on: {
                    mousedown: () => { this.down = true; },
                    mouseup: () => { this.down = false; }
                }
            }, children);
        },
        name: "AList",
        data: function () {
            return {
                hover: -1,
                selected: -1,
                down: false
            }
        },
        props: {
            view: {
                type: Object,
                default: () => ListDefaultView
            },
            models: {
                type: Array,
                default: () => []
            },
            color: { type: String, default: "deeppink" },
        },
        methods: {
            clickHandler: function (index) {
                window.console.log(index);

                this.selected = index;
            }
        }
    }
</script>

<style scoped>

</style>