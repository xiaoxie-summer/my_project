<template>
    <div class="map" id="container"></div>
</template>

<script>

export default {
    data() {
        return {
            map: null,
        }
    },
    mounted() {
        var map = new BMapGL.Map("container");
        console.log(map, '/map');

        var point = new BMapGL.Point(116.404, 39.915);
        map.centerAndZoom(point, 15);
        map.enableScrollWheelZoom();
        this.map = map;
        this.map.addEventListener('tilesloaded', () => {
            // 移除事件监听，避免重复执行
            this.map.removeEventListener('tilesloaded', this.map);

            // 执行各功能
            this.locateCurrentPosition();
            this.addWuhanDistrictLayer();
            this.addWuhanSubDistricts();
            this.addDistrictLabels();
        });
    },
    methods: {
        // 1. 定位当前位置
        locateCurrentPosition() {
            let map = this.map 
            var geolocation = new BMapGL.Geolocation();
            geolocation.getCurrentPosition(function(r) {
                if (this.getStatus() == BMAP_STATUS_SUCCESS) {
                    var mk = new BMapGL.Marker(r.point);
                    map.addOverlay(mk);
                    map.panTo(r.point);

                    // 添加定位提示信息
                    var infoWindow = new BMapGL.InfoWindow("当前位置", {
                        width: 200,
                        height: 40
                    });
                    mk.openInfoWindow(infoWindow);

                    console.log('定位成功：', r.point);
                } else {
                    alert('定位失败，请确保已授权位置访问权限');
                    console.log('定位失败：' + this.getStatus());
                }
            }, { enableHighAccuracy: true });
        },

        // 2. 绘制武汉市级行政区划面图层
        addWuhanDistrictLayer() {
            var wuhanLayer = new BMapGL.DistrictLayer({
                name: '武汉市',
                kind: 1, // 市级
                fillColor: '#5e8bff',
                fillOpacity: 0.4,
                strokeColor: '#0031ff',
                strokeOpacity: 0.8,
                strokeWeight: 2
            });
            this.map.addDistrictLayer(wuhanLayer);
            return wuhanLayer;
        },

        // 3. 绘制武汉各区级行政区划面图层
        addWuhanSubDistricts() {
            // 武汉各区名称
            var districts = [
                '江岸区', '江汉区', '硚口区', '汉阳区', '武昌区',
                '青山区', '洪山区', '东西湖区', '汉南区', '蔡甸区',
                '江夏区', '黄陂区', '新洲区'
            ];

            // 为每个区设置不同颜色
            var colors = [
                '#ff6b6b', '#51cf66', '#ffd43b', '#339af0', '#cc5de8',
                '#96f2d7', '#ffa8a8', '#74c0fc', '#63e6be', '#bac8ff',
                '#ffc9c9', '#ffd8a8', '#d8f5a2'
            ];

            districts.forEach((district, index) => {
                var colorIndex = index % colors.length;
                var districtLayer = new BMapGL.DistrictLayer({
                    name: district,
                    kind: 2, // 区级
                    fillColor: colors[colorIndex],
                    fillOpacity: 0.5,
                    strokeColor: '#495057',
                    strokeOpacity: 0.8,
                    strokeWeight: 1
                });
                this.map.addDistrictLayer(districtLayer);
            });
        },

        // 4. 添加区划信息标注
        addDistrictLabels() {
            // 武汉各区中心点坐标（简化版，实际应用可能需要更精确的坐标）
            var districtCenters = {
                '江岸区': new BMapGL.Point(114.309, 30.599),
                '江汉区': new BMapGL.Point(114.270, 30.601),
                '硚口区': new BMapGL.Point(114.214, 30.582),
                '汉阳区': new BMapGL.Point(114.217, 30.554),
                '武昌区': new BMapGL.Point(114.316, 30.554),
                '青山区': new BMapGL.Point(114.385, 30.640),
                '洪山区': new BMapGL.Point(114.342, 30.500),
                '东西湖区': new BMapGL.Point(114.137, 30.620),
                '汉南区': new BMapGL.Point(114.081, 30.309),
                '蔡甸区': new BMapGL.Point(114.029, 30.582),
                '江夏区': new BMapGL.Point(114.321, 30.349),
                '黄陂区': new BMapGL.Point(114.374, 30.882),
                '新洲区': new BMapGL.Point(114.801, 30.841)
            };

            for (var district in districtCenters) {
                var label = new BMapGL.Label(district, {
                    position: districtCenters[district],
                    offset: new BMapGL.Size(0, -10)
                });
                label.setStyle({
                    color: '#333',
                    backgroundColor: 'rgba(255,255,255,0.7)',
                    border: '1px solid #999',
                    borderRadius: '3px',
                    padding: '3px 8px',
                    fontSize: '12px'
                });
                this.map.addOverlay(label);
            }
        }
    },

}
</script>
<style lang="scss" scoped>
.map {
    width: 100vw;
    height: 100vh;
}
</style>