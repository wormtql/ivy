<template>
    <align a="top">
        <p-size width="750px"></p-size>
        <spacer>v32</spacer>
        <h1>FixedLayer 固定层</h1>
        <spacer>v32</spacer>
        <p>相当于position: fixed，添加了对齐属性，可以方便地定位在九个区域</p>
        <spacer>v32</spacer>

        <expandable no-indent no-gap caption="代码" color="#123456">
            <template #content>
                <pre v-highlightjs="codes.fixedLayerCodes[0]"><code class="html"></code></pre>
            </template>
        </expandable>
        <a-button text @click="show = !show">显示/关闭</a-button>
        <fixed-layer a="bottom right" v-show="show">
            <p-padding>16px</p-padding>
            <i-button icon="fa:arrow-up" :size="80" :scale="1.5" color="deeppink"></i-button>
        </fixed-layer>
    </align>
</template>

<script>
    import Align from "@/components/layout/Align";
    import PSize from "@/components/base/functional/PSize";
    import Spacer from "@/components/base/misc/Spacer";
    import FixedLayer from "@/components/layout/FixedLayer";
    import PPadding from "@/components/base/functional/PPadding";
    import IButton from "@/components/base/button/IButton";
    import AButton from "@/components/base/button/AButton";
    import codes from "@/data/codes";
    import Expandable from "@/components/ui/Expandable";

    export default {
        name: "FixedLayerIntro",
        components: {Expandable, AButton, IButton, PPadding, FixedLayer, Spacer, PSize, Align},
        data: () => {
            return {
                show: false,
                codes
            }
        }
    }
</script>

<style scoped>

</style>