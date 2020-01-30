<template>
    <div id="app">
        <top-fixed>
            <template #top>
                <horizontal-l-c-r color="#123456">
                    <template #left>
                        <spacer :h="48"></spacer>
                        <a-image src="logo.png"></a-image>
                        <spacer :h="24"></spacer>
                        <p style="color: #aabbcc">这里应该有个logo</p>
                    </template>
                    <template #center>
                        <a-button text color="#aabbcc">HOME</a-button>
                        <a-button text color="#aabbcc" :loading="loading" @click="loading = !loading">
                            GITHUB
                        </a-button>
                        <a-button text color="#aabbcc">GALLERY</a-button>
                        <a-button text color="#aabbcc">DOCS</a-button>
                    </template>
                    <template #right>
                        <i-button icon="fa:brands/google" color="#aabbcc" text></i-button>
                        <spacer :h="16"></spacer>
                        <i-button icon="fa:brands/facebook" color="#aabbcc" text></i-button>
                        <spacer :h="16"></spacer>
                        <i-button icon="fa:brands/twitter" color="#aabbcc" text></i-button>
                        <spacer :h="16"></spacer>
                        <i-button icon="fa:brands/youtube" color="#aabbcc" text></i-button>
                        <spacer :h="24"></spacer>
                    </template>
                </horizontal-l-c-r>
            </template>

            <template #bottom>
                <router-view></router-view>
            </template>
        </top-fixed>
    </div>
</template>

<script>
    import TopFixed from "@/components/layout/TopFixed";
    import HorizontalLCR from "@/components/layout/HorizontalLCR";
    import AButton from "@/components/base/button/AButton";
    import IButton from "@/components/base/button/IButton";
    import Spacer from "@/components/base/misc/Spacer";
    import AImage from "@/components/base/display/AImage";

    export default {
        name: 'app',
        components: {
            AImage,
            Spacer,
            IButton,
            AButton,
            HorizontalLCR,
            TopFixed,
        },
        data: function () {
            return {
                loading: false,
            }
        },
        methods: {
            click: function (x) {
                this.comp = x;
            }
        }
    }
</script>

<style>
    body {
        margin: 0;
        padding: 0;
        width: 100vw;
        height: 100vh
    }

    #app {
        height: 100%;
        width: 100%;
    }
</style>
