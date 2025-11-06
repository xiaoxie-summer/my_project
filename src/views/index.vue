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
      handleClick(){
        
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

.bachground {
    position: relative;
    width: 100vw;
    height: 100vh;
    background-image: url(../assets/backgroundImg/R-C.jpg);
    background-repeat: no-repeat;
    background-size: 100%;
}

</style>
