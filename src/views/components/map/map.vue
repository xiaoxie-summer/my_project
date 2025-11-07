<template>
    <div class="map" id="container"></div>
</template>

<script>
import stylejsons from './custom_map_config (1).json'
export default {
    data() {
        return {
            map: null,
        }
    },
    mounted() {
        var map = new BMapGL.Map("container");
        console.log(map, '/map');

        var point = new BMapGL.Point(114.289442,30.501806);
        map.centerAndZoom(point, 15);
        map.enableScrollWheelZoom();
        this.map = map;
        const JSON = stylejsons.RECORDS
        map.setMapStyleV2({
            styleJson: JSON
        });
        this.map.addEventListener('tilesloaded', () => {
            // 移除事件监听，避免重复执行
            this.map.removeEventListener('tilesloaded', this.map);
            // 执行各功能
            this.locateCurrentPosition();
        });
    },
    methods: {
        // 1. 定位当前位置
        locateCurrentPosition() {
            let map = this.map
            let Icon = new BMapGL.Icon(
                require("@/assets/profile/markers.png"),
                new BMapGL.Size(20, 30),
                {
                }
            );

            var geolocation = new BMapGL.Geolocation();
            this.map.getPanes().floatShadow.style.display = "none";
            geolocation.getCurrentPosition(function (r) {
                if (this.getStatus() == BMAP_STATUS_SUCCESS) {
                    console.log(r, 'r');

                    var mk = new BMapGL.Marker(r.point, { icon: Icon });

                    map.addOverlay(mk);
                    map.panTo(r.point);
                    const address = r.address
                    // 添加定位提示信息
                    var infoWindow = new BMapGL.InfoWindow(address.province + address.city + address.district + address.street, {
                        width: 200,
                        height: 40,
                        offset: new BMapGL.Size(-20, 30),
                    });

                    mk.openInfoWindow(infoWindow);

                    console.log('定位成功：', r.point);
                } else {
                    alert('定位失败，请确保已授权位置访问权限');
                    console.log('定位失败：' + this.getStatus());
                }
            }, { enableHighAccuracy: true });
        },


    },

}
</script>
<style lang="scss" scoped>
.map {
    width: 100vw;
    height: 100vh;
}

::v-deep .BMap_bubble_pop {
    background: linear-gradient(220.55deg, #3793FF 0%, #0017E4 100%);
    border: 1px solid #3793FF !important;

    .BMap_bubble_center {
        .BMap_bubble_content {
            color: #fff !important;
            font-weight: 700 !important;
        }
    }

    .BMap_bubble_top {
        display: none;
    }

    img {
        display: none;
    }

    .BMap_bubble_center {}
}
</style>