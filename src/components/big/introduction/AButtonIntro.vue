<template>
    <align a="top" :width="750">
        <spacer>v32</spacer>
        <h1>AButton 按钮A</h1>
        <p class="pb-8">普通按钮</p>
        <spacer>v32</spacer>

        <a-button color="#123456">
            simple button
        </a-button>
        <spacer>h16</spacer>
        <a-button color="#123456">
            <a-icon icon="fa:angle-double-right" color="white"></a-icon>
            <spacer>h8</spacer>
            another button
        </a-button>
        <spacer>v16</spacer>
        <a-button x-fluid color="#123456">BLOCK BUTTON</a-button>
        <spacer>v16</spacer>
        <a-button x-fluid color="#123456" left>左对齐</a-button>
        <spacer>v16</spacer>
        <a-button x-fluid color="#123456" right>右对齐</a-button>
        <spacer>v16</spacer>
        <a-button :width="200" color="#345678">固定长度</a-button>
        <spacer>v16</spacer>
        <a-button text color="#ff000022">文本样式</a-button>
        <spacer>h16</spacer>
        <a-button outlined color="#ff000044">有边框</a-button>
        <spacer>h16</spacer>
        <a-button round color="#ff000066">圆角</a-button>
        <spacer>h16</spacer>
        <a-button round text color="#ff000088">圆角文本</a-button>
        <spacer>h16</spacer>
        <a-button outlined round color="#ff0000aa">圆角有边框</a-button>
        <spacer>v16</spacer>
        <a-button tile color="#00ff0044">矩形</a-button>
        <spacer>h16</spacer>
        <a-button outlined tile color="#00ff0066">矩形有边框</a-button>
        <spacer>h16</spacer>
        <a-button tile text color="#00ff0088">矩形文本</a-button>
        <spacer>v16</spacer>
        <a-button :loading="loading" outlined @click="loading = !loading"
            color="#0000ff44">
            加载动画
        </a-button>
        <spacer>h16</spacer>
        <a-button :loading="loading" outlined @click="loading = !loading"
            color="#0000ff66">
            定制加载动画
            <template #loading>
                LOADING...
            </template>
        </a-button>
        <spacer>v16</spacer>
        <a-button color="#123456">
            <div>
                <spacer>v8</spacer>
                <a-image src="logo.png"></a-image>
                定制内容
                <spacer>v8</spacer>
            </div>
        </a-button>
        <spacer>h16</spacer>
        <a-button :height="48" color="#123456">固定高度</a-button>
        <spacer>v32</spacer>
    </align>
</template>

<script>
    import Align from "@/components/layout/Align";
    import Spacer from "@/components/base/misc/Spacer";
    import AButton from "@/components/base/button/AButton";
    import AIcon from "@/components/base/display/AIcon";
    import AImage from "@/components/base/display/AImage";
    export default {
        name: "AButtonIntro",
        components: {AImage, AIcon, AButton, Spacer, Align},
        data: function () {
            return {
                loading: false,
            }
        }
    }
</script>

<style scoped>

</style>