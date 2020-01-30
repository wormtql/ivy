let columnsCodes = [
    `<div style="height: 100px">
    <columns divide="1 1 1">
        <template #d1>
            <div class="fluid" style="background-color: #123456aa"></div>
        </template>
        <template #d2>
            <div class="fluid" style="background-color: #123456cc"></div>
        </template>
        <template #d3>
            <div class="fluid" style="background-color: #123456aa"></div>
        </template>
    </columns>
</div>`,
    `<div style="height: 100px">
    <columns divide="4 3 2 1">
        <template #d1>
            <div class="fluid" style="background-color: #123456aa"></div>
        </template>
        <template #d2>
            <div class="fluid" style="background-color: #123456cc"></div>
        </template>
        <template #d3>
            <div class="fluid" style="background-color: #123456aa"></div>
        </template>
        <template #d4>
            <div class="fluid" style="background-color: #123456cc"></div>
        </template>
    </columns>
</div>`
];
let rowsCodes = [
    `<div style="height: 300px">
<rows divide="1 1 1">
    <template #d1>
        <div class="fluid" style="background-color: #123456aa"></div>
    </template>
    <template #d2>
        <div class="fluid" style="background-color: #123456cc"></div>
    </template>
    <template #d3>
        <div class="fluid" style="background-color: #123456aa"></div>
    </template>
</rows>
</div>`,
    `<div style="height: 300px">
    <rows divide="3 2 1 2">
        <template #d1>
            <div class="fluid" style="background-color: #123456aa"></div>
        </template>
        <template #d2>
            <div class="fluid" style="background-color: #123456cc"></div>
        </template>
        <template #d3>
            <div class="fluid" style="background-color: #123456aa"></div>
        </template>
        <template #d4>
            <div class="fluid" style="background-color: #123456cc"></div>
        </template>
    </rows>
</div>`
];
let horizontalCLRCodes = [
    `<div style="height: 96px">
    <horizontal-l-c-r color="#12345622">
        <template #left>
            <p style="background-color: #123456aa" class="c-white">left</p>
            <p style="background-color: #123456cc" class="c-white">hello</p>
        </template>
        <template #center>
            <p style="background-color: #123456aa" class="c-white">center</p>
            <p style="background-color: #123456cc" class="c-white">666</p>
        </template>
        <template #right>
            <p style="background-color: #123456aa" class="c-white">right</p>
            <p style="background-color: #123456cc" class="c-white">world</p>
        </template>
    </horizontal-l-c-r>
</div>`,
    `<div style="height: 64px">
    <horizontal-l-c-r color="#12345622">
        <template #left>
            <spacer>h24</spacer>
            <a-icon icon="fa:brands/google"></a-icon>
            <spacer>h16</spacer>
            <a-icon icon="fa:brands/youtube"></a-icon>
        </template>
        <template #center>
            <a-button text color="#123456">BUTTON1</a-button>
        </template>
        <template #right>
            <i-button icon="fa:envelope" text></i-button>
            <spacer>h16</spacer>
        </template>
    </horizontal-l-c-r>
</div>`
];
let leftFixedCodes = [
    `<div style="height: 100px">
    <left-fixed :fixed-size="100">
        <template #left>
            <div class="fluid" style="background-color: #123456aa"></div>
        </template>
        <template #right>
            <div class="fluid" style="background-color: #123456cc"></div>
        </template>
    </left-fixed>
</div>`
];
let leftRightFixedCodes = [
    `<div style="height: 100px">
    <left-right-fixed :fixed-size1="100" :fixed-size2="200">
        <template #left>
            <div class="fluid" style="background-color: #123456aa"></div>
        </template>
        <template #center>
            <div class="fluid" style="background-color: #123456cc"></div>
        </template>
        <template #right>
            <div class="fluid" style="background-color: #123456aa"></div>
        </template>
    </left-right-fixed>
</div>`
];
let topFixedCodes = [
    `<div style="height: 300px">
    <top-fixed :fixed-size="100">
        <template #top>
            <div class="fluid" style="background-color: #123456aa"></div>
        </template>
        <template #bottom>
            <div class="fluid" style="background-color: #123456cc"></div>
        </template>
    </top-fixed>
</div>`
];
let verticalTCBCodes = [
    `<div style="height: 500px">
    <left-fixed :fixed-size="96">
        <template #left>
            <vertical-t-c-b color="#12345622">
                <template #top>
                    <spacer>v16</spacer>
                    <a-image src="logo.png"></a-image>
                </template>
                <template #center>
                    <i-button icon="fa:square" text></i-button>
                    <spacer>v16</spacer>
                    <i-button icon="fa:circle" text></i-button>
                    <spacer>v16</spacer>
                    <i-button icon="fa:play" text></i-button>
                </template>
                <template #bottom>
                    <p class="f-08">下午</p>
                    <p class="f-08">08:31</p>
                    <spacer>v16</spacer>
                </template>
            </vertical-t-c-b>
        </template>
        <template #right>
            <div class="fluid" style="background-color: #123456aa"></div>
        </template>
    </left-fixed>
</div>`
];
let alignCodes = [
    `<div style="height: 500px">
    <rows divide="1 1 1">
        <template #d1>
            <columns divide="1 1 1">
                <template #d1>
                    <div class="fluid" style="background-color: #12345622">
                        <align a="top left"><cube></cube></align>
                    </div>
                </template>
                <template #d2>
                    <div class="fluid" style="background-color: #12345644">
                        <align a="top"><cube></cube></align>
                    </div>
                </template>
                <template #d3>
                    <div class="fluid" style="background-color: #12345622">
                        <align a="top right"><cube></cube></align>
                    </div>
                </template>
            </columns>
        </template>
        <template #d2>
            <columns divide="1 1 1">
                <template #d1>
                    <div class="fluid" style="background-color: #12345644">
                        <align a="left"><cube></cube></align>
                    </div>
                </template>
                <template #d2>
                    <div class="fluid" style="background-color: #12345622">
                        <align a="center"><cube></cube></align>
                    </div>
                </template>
                <template #d3>
                    <div class="fluid" style="background-color: #12345644">
                        <align a="right"><cube></cube></align>
                    </div>
                </template>
            </columns>
        </template>
        <template #d3>
            <columns divide="1 1 1">
                <template #d1>
                    <div class="fluid" style="background-color: #12345622">
                        <align a="bottom left"><cube></cube></align>
                    </div>
                </template>
                <template #d2>
                    <div class="fluid" style="background-color: #12345644">
                        <align a="bottom"><cube></cube></align>
                    </div>
                </template>
                <template #d3>
                    <div class="fluid" style="background-color: #12345622">
                        <align a="bottom right"><cube></cube></align>
                    </div>
                </template>
            </columns>
        </template>
    </rows>
</div>`
];

export default {
    columnsCodes,
    rowsCodes,
    horizontalCLRCodes,
    leftFixedCodes,
    leftRightFixedCodes,
    topFixedCodes,
    verticalTCBCodes,
    alignCodes
}