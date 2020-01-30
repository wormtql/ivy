<template>
    <align a="top" :width="750">
        <div style="width: 750px">
            <spacer>v32</spacer>
            <h1>HorizontalLCR 水平左中右布局</h1>
    <!--        <spacer>v32</spacer>-->

            <p>通过三个插槽，将插槽的内容，垂直居中地分布在左、中、右区域</p>
            <spacer>v32</spacer>

            <expandable no-indent no-gap caption="代码" color="#123456">
                <template #content>
                    <pre v-highlightjs="codes.horizontalCLRCodes[0]"><code class="html"></code></pre>
                </template>
            </expandable>
            <div style="height: 96px">
                <horizontal-l-c-r color="#12345622">
                    <template #left>
                        <p style="background-color: #123456aa" class="c-white">left</p>
                        <p style="background-color: #123456cc" class="c-white">hello</p>
                    </template>
                    <template #center>
                        <p style="background-color: #123456aa" class="c-white">center</p>
                        <p style="background-color: #123456cc" class="c-white">666</p>
                    </template>
                    <template #right>
                        <p style="background-color: #123456aa" class="c-white">right</p>
                        <p style="background-color: #123456cc" class="c-white">world</p>
                    </template>
                </horizontal-l-c-r>
            </div>

            <spacer>v32</spacer>

            <p>大多数navigation bar都由这三部分组成，这样低级的封装可以提供更强的灵活性，可以使用spacer分开各组件，例如</p>
            <spacer>v8</spacer>
            <expandable no-indent no-gap caption="代码" color="#123456">
                <template #content>
                    <pre v-highlightjs="codes.horizontalCLRCodes[1]"><code class="html"></code></pre>
                </template>
            </expandable>
            <div style="height: 64px">
                <horizontal-l-c-r color="#12345622">
                    <template #left>
                        <spacer>h24</spacer>
                        <a-icon icon="fa:brands/google"></a-icon>
                        <spacer>h16</spacer>
                        <a-icon icon="fa:brands/youtube"></a-icon>
                    </template>
                    <template #center>
                        <a-button text color="#123456">BUTTON1</a-button>
                    </template>
                    <template #right>
                        <i-button icon="fa:envelope" text></i-button>
                        <spacer>h16</spacer>
                    </template>
                </horizontal-l-c-r>
            </div>

            <spacer>v32</spacer>
        </div>
    </align>
</template>

<script>
    import Align from "@/components/layout/Align";
    import Spacer from "@/components/base/misc/Spacer";
    import Expandable from "@/components/ui/Expandable";
    import codes from "@/data/codes";
    import HorizontalLCR from "@/components/layout/HorizontalLCR";
    import AIcon from "@/components/base/display/AIcon";
    import AButton from "@/components/base/button/AButton";
    import IButton from "@/components/base/button/IButton";

    export default {
        name: "HorizontalLCRIntro",
        components: {IButton, AButton, AIcon, HorizontalLCR, Expandable, Spacer, Align},
        data: function () {
            return {
                codes,
            }
        }
    }
</script>

<style scoped>

</style>