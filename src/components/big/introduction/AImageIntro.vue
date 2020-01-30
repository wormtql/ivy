<template>
    <align a="top" :width="750">
        <div style="width: 750px">
            <spacer>v32</spacer>
            <h1>AImage 普通图片</h1>
            <spacer>v32</spacer>

            <h4>保持原来大小</h4>
            <a-image src="logo.png" original></a-image>
            <spacer>v32</spacer>

            <h4>不等比缩放</h4>
            <a-image src="logo.png" :width="300" :height="200" :keep="false"></a-image>
            <spacer>v32</spacer>

            <h4>等比缩放</h4>
            <a-image src="logo.png" :width="100"></a-image>
        </div>
    </align>
</template>

<script>
    import Align from "@/components/layout/Align";
    import Spacer from "@/components/base/misc/Spacer";
    import AImage from "@/components/base/display/AImage";
    export default {
        name: "AImageIntro",
        components: {AImage, Spacer, Align}
    }
</script>

<style scoped>

</style>