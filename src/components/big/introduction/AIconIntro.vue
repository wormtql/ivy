<template>
    <align a="top" :width="750">
        <spacer>v32</spacer>
        <h1>AIcon 普通图标</h1>
        <spacer>v32</spacer>

        <h4>font-awesome图标</h4>
        <spacer>v16</spacer>
        <div class="v-center">
            <a-icon icon="fa:brands/font-awesome-flag"></a-icon>
            <spacer>h16</spacer>
            <span style="font-size: 0.8em">icon="fa:brands/font-awesome-flag"</span>
        </div>
        <spacer>v8</spacer>
        <div class="v-center">
            <a-icon icon="fa:brands/font-awesome-alt"></a-icon>
            <spacer>h16</spacer>
            <span style="font-size: 0.8em">icon="fa:brands/font-awesome-alt"</span>
        </div>
        <spacer>v16</spacer>
        <div class="v-center">
            <a-icon icon="fa:brands/font-awesome-flag" :size="2"></a-icon>
            <spacer>h16</spacer>
            <a-icon icon="fa:brands/font-awesome-alt" :size="2" color="#ff000055"></a-icon>
            <spacer>h16</spacer>
            <span style="font-size: 0.8em">:size="2"</span>
        </div>

        <spacer>v32</spacer>
        <h4>字符图标</h4>
        <spacer>v16</spacer>
        <div class="v-center">
            <a-icon icon="char:Z"></a-icon>
            <spacer>h16</spacer>
            <span style="font-size: 0.8em">icon="char:Z"</span>
        </div>
        <spacer>v8</spacer>
        <div class="v-center">
            <a-icon icon="char:Q" color="#ff000055"></a-icon>
            <spacer>h16</spacer>
            <span style="font-size: 0.8em" >icon="char:Q"</span>
        </div>

        <spacer>v32</spacer>
        <h4>TODO:</h4>
        <p>material 图标</p>
        <p>本地svg</p>
        <p>网络图标</p>
        <p>本地图片</p>
    </align>
</template>

<script>
    import Align from "@/components/layout/Align";
    import Spacer from "@/components/base/misc/Spacer";
    import AIcon from "@/components/base/display/AIcon";
    export default {
        name: "AIconIntro",
        components: {AIcon, Spacer, Align}
    }
</script>

<style scoped>

</style>