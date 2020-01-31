<template>
    <align a="top">
        <p-size :width="750"></p-size>
        <spacer>v32</spacer>
        <h1>AInput 基本输入</h1>
        <spacer>v32</spacer>

        <a-input></a-input>
        <spacer>v16</spacer>
        <a-input prepend-icon="fa:lock"></a-input>
        <spacer>v16</spacer>
        <a-input block></a-input>
    </align>
</template>

<script>
    import Align from "@/components/layout/Align";
    import Spacer from "@/components/base/misc/Spacer";
    import AInput from "@/components/base/form/AInput";
    import PSize from "@/components/base/functional/PSize";
    export default {
        name: "AInputIntro",
        components: {PSize, AInput, Spacer, Align}
    }
</script>

<style scoped>

</style>