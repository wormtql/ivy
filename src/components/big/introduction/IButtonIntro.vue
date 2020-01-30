<template>
    <align a="top" :width="750">
        <spacer>v32</spacer>
        <h1>IButton 图标按钮</h1>
        <spacer>v32</spacer>
        <i-button icon="fa:angle-double-left"></i-button>
        <spacer>h16</spacer>
        <i-button icon="fa:angle-left"></i-button>
        <spacer>h16</spacer>
        <i-button icon="fa:circle"></i-button>
        <spacer>h16</spacer>
        <i-button icon="fa:play"></i-button>
        <spacer>h16</spacer>
        <i-button icon="fa:angle-right"></i-button>
        <spacer>h16</spacer>
        <i-button icon="fa:angle-double-right"></i-button>

        <spacer>v16</spacer>
        <i-button icon="fa:angle-double-left" outlined></i-button>
        <spacer>h16</spacer>
        <i-button icon="fa:angle-left" outlined></i-button>
        <spacer>h16</spacer>
        <i-button icon="fa:circle" outlined></i-button>
        <spacer>h16</spacer>
        <i-button icon="fa:play" outlined></i-button>
        <spacer>h16</spacer>
        <i-button icon="fa:angle-right" outlined></i-button>
        <spacer>h16</spacer>
        <i-button icon="fa:angle-double-right" outlined></i-button>

        <spacer>v16</spacer>
        <i-button icon="fa:angle-double-left" tile></i-button>
        <spacer>h16</spacer>
        <i-button icon="fa:angle-left" tile></i-button>
        <spacer>h16</spacer>
        <i-button icon="fa:circle" tile></i-button>
        <spacer>h16</spacer>
        <i-button icon="fa:play" tile></i-button>
        <spacer>h16</spacer>
        <i-button icon="fa:angle-right" tile></i-button>
        <spacer>h16</spacer>
        <i-button icon="fa:angle-double-right" tile></i-button>

        <spacer>v16</spacer>
        <i-button icon="fa:angle-double-left" outlined tile></i-button>
        <spacer>h16</spacer>
        <i-button icon="fa:angle-left" outlined tile></i-button>
        <spacer>h16</spacer>
        <i-button icon="fa:circle" outlined tile></i-button>
        <spacer>h16</spacer>
        <i-button icon="fa:play" outlined tile></i-button>
        <spacer>h16</spacer>
        <i-button icon="fa:angle-right" outlined tile></i-button>
        <spacer>h16</spacer>
        <i-button icon="fa:angle-double-right" outlined tile></i-button>

        <spacer>v16</spacer>
        <i-button icon="fa:angle-double-left" text></i-button>
        <spacer>h16</spacer>
        <i-button icon="fa:angle-left" text></i-button>
        <spacer>h16</spacer>
        <i-button icon="fa:circle" text></i-button>
        <spacer>h16</spacer>
        <i-button icon="fa:play" text></i-button>
        <spacer>h16</spacer>
        <i-button icon="fa:angle-right" text></i-button>
        <spacer>h16</spacer>
        <i-button icon="fa:angle-double-right" text></i-button>

        <spacer>v16</spacer>
        <i-button icon="fa:angle-double-left" text tile></i-button>
        <spacer>h16</spacer>
        <i-button icon="fa:angle-left" text tile></i-button>
        <spacer>h16</spacer>
        <i-button icon="fa:circle" text tile></i-button>
        <spacer>h16</spacer>
        <i-button icon="fa:play" text tile></i-button>
        <spacer>h16</spacer>
        <i-button icon="fa:angle-right" text tile></i-button>
        <spacer>h16</spacer>
        <i-button icon="fa:angle-double-right" text tile></i-button>

        <spacer>v16</spacer>
        <i-button icon="fa:angle-double-left" color="#ff000022"></i-button>
        <spacer>h16</spacer>
        <i-button icon="fa:angle-left" color="#ff000044"></i-button>
        <spacer>h16</spacer>
        <i-button icon="fa:circle" color="#ff000066"></i-button>
        <spacer>h16</spacer>
        <i-button icon="fa:play" color="#ff000088"></i-button>
        <spacer>h16</spacer>
        <i-button icon="fa:angle-right" color="#ff0000aa"></i-button>
        <spacer>h16</spacer>
        <i-button icon="fa:angle-double-right" color="#ff0000cc"></i-button>

        <spacer>v16</spacer>
        <i-button :size="64" icon="fa:play" :scale="1.5"></i-button>
        <spacer>h16</spacer>
        <i-button :size="48" icon="fa:play"></i-button>
        <spacer>h16</spacer>
        <i-button :size="32" icon="fa:play" :scale="0.7"></i-button>
        <spacer>h16</spacer>
        <i-button :size="24" icon="fa:play" :scale="0.5"></i-button>
    </align>
</template>

<script>
    import Spacer from "@/components/base/misc/Spacer";
    import Align from "@/components/layout/Align";
    import IButton from "@/components/base/button/IButton";

    export default {
        name: "IButtonIntro",
        components: {IButton, Align, Spacer}
    }
</script>

<style scoped>

</style>