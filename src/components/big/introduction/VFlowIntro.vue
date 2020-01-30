<template>
    <align a="top" :width="750">
        <div style="width: 750px">
            <spacer>v32</spacer>
            <h1>VFlow 垂直顺序布局</h1>
            <spacer>v32</spacer>

            <p>VFlow与div行为一样，但是会自动填充满父元素空间，溢出时加滚动条</p>
        </div>
    </align>
</template>

<script>
    import Align from "@/components/layout/Align";
    import Spacer from "@/components/base/misc/Spacer";
    export default {
        name: "VFlowIntro",
        components: {Spacer, Align}
    }
</script>

<style scoped>

</style>