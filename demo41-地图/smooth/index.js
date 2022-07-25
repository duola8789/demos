/**
 * Created by zh on 2020/6/11.
 */
const pt1 = new BMap.Point(116.3805, 39.913392);
const pt2 = new BMap.Point(116.421373, 39.903977);
const pt3 = new BMap.Point(116.426978, 39.904641);
const pt4 = new BMap.Point(116.43862, 39.901071);
const pt5 = new BMap.Point(116.465641, 39.910923);

const pts = [pt2, pt3, pt4, pt5];

const map = new BMap.Map('map');
map.enableScrollWheelZoom();
map.centerAndZoom(pt1, 15);

BMap.Marker.prototype.smoothMove = smoothMove;

const makers = Array.from({length: 1}).map(() => {
    const size = new BMap.Size(32, 61);
    const icon = new BMap.Icon('../../assets/icon-map-car-free@2x.png', size);
    icon.setImageSize(size);
    const marker = new BMap.Marker(pt1, {icon: icon});
    marker.setRotation(90);
    map.addOverlay(marker);
    return marker;
});

for (let i = 0; i < makers.length; i++) {
    const targetMarker = makers[i];
    for (const pt of pts) {
        targetMarker.smoothMove(pt, i);
    }
}
