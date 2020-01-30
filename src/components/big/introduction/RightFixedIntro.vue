<template>
    <align a="top" :width="750">
        <div style="width: 750px">
            <spacer>v32</spacer>
            <h1>RightFixed 左右布局（右固定宽度）</h1>
            <spacer>v32</spacer>
            <p>用法与LeftFixed相似，故不再赘述</p>
        </div>
    </align>
</template>

<script>
    import Align from "@/components/layout/Align";
    import Spacer from "@/components/base/misc/Spacer";
    export default {
        name: "RightFixedIntro",
        components: {Spacer, Align}
    }
</script>

<style scoped>

</style>