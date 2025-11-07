<template>
    <div id="app">
        <div class="bachground">
            <div class="map">
                <!-- <el-button>map</el-button> -->
                <particle-button @click="handleClick">
                    基础粒子按钮
                </particle-button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
        }
    },
    methods: {
        handleClick() {
            this.$router.push('/modules')
        }
    }
}
</script>
<style lang="scss">
body {
    margin: 0 !important;
    padding: 0 !important;
}

.map {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

/* 媒体查询 - 针对不同屏幕尺寸优化 */
@media (max-width: 768px) {
    .background {
        background-size: cover;
        /* 在小屏幕上保持覆盖 */
    }

    /* 可以针对更小的屏幕进一步调整 */
    @media (max-width: 480px) {
        .map {
            width: 90%;
            /* 在小屏幕上限制最大宽度 */
            text-align: center;
        }
    }
}

/* 横屏适配 */
@media (max-height: 500px) and (orientation: landscape) {
    .background {
        background-size: cover;
    }

    .map {
        transform: translate(-50%, -50%) scale(0.8);
        /* 横屏时适当缩小内容 */
    }
}

.bachground {
    position: relative;
    width: 100vw;
    height: 100vh;
    background-image: url(@/assets/backgroundImg/R-C.jpg);
    background-repeat: no-repeat;
    background-size: 100% 100%;
}
</style>
