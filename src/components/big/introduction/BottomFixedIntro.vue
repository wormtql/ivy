<template>
    <align a="top" :width="750">
        <div style="width: 750px">
            <spacer>v32</spacer>
            <h1>BottomFixed 上下布局（下固定高度）</h1>
            <spacer>v32</spacer>
            <p>与TopFixed类似，不再赘述</p>
        </div>
    </align>
</template>

<script>
    import Align from "@/components/layout/Align";
    import Spacer from "@/components/base/misc/Spacer";
    export default {
        name: "BottomFixedIntro",
        components: {Spacer, Align}
    }
</script>

<style scoped>

</style>