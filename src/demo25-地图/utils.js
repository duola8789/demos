/**
 * Created by zh on 2020/6/11.
 */
function mathRound(num, digit) {
    const digitalNum = Math.pow(10, digit);
    return Math.round(num * digitalNum) / digitalNum;
}

function splitPathToPoints(map, startPoint, endPoint, steps) {
    const { x: x1, y: y1 } = map.pointToPixel(startPoint);
    const { x: x2, y: y2 } = map.pointToPixel(endPoint);

    const xSign = x2 > x1;
    const ySign = y2 > y1;

    const distanceX = Math.abs(x2 - x1);
    const distanceY = Math.abs(y2 - y1);
    const tan = distanceY / distanceX;

    const distanceAll = Math.sqrt(Math.pow(distanceX, 2) + Math.pow(distanceY, 2));
    const MIN_DISTANCE = 1;
    const amendStep = Math.min(Math.round(distanceAll / MIN_DISTANCE), steps);

    const middlePoints = Array.from({ length: amendStep - 1 }).map((v, index) => {
        const distance = (index + 1) * (distanceAll / amendStep);
        const x = mathRound(distance / Math.sqrt(1 + Math.pow(tan, 2)), 8);
        const y = mathRound(x * tan, 8);
        const xPos = x1 + (xSign ? 1 : -1) * x;
        const yPos = y1 + (ySign ? 1 : -1) * y;
        const pixel = new BMap.Pixel(mathRound(xPos, 3), mathRound(yPos, 3));
        return map.pixelToPoint(pixel);
    });

    return [startPoint, ...middlePoints, endPoint];
}

async function smoothMove(maker, endPoint, options, index) {
    if (!maker.smoothInfo) {
        console.time(index);
        maker.smoothInfo = {
            timer: null,
            tasks: [],
            polyline: null
        };
    }

    // 将车辆固定在地图中央
    const disablePinMarker = options && options.disablePinMarker;
    // 画出轨迹
    const disableDrawTrack = options && options.disableDrawTrack;

    maker.smoothInfo.tasks.push(endPoint);

    if (!maker.smoothInfo.timer) {
        while (true) {
            const endPoint = maker.smoothInfo.tasks.shift();
            if (!endPoint) {
                console.timeEnd(index);
                break;
            }
            await smoothMoving(map, maker, endPoint, { disablePinMarker, disableDrawTrack });
        }
    }
}

function smoothMoving(map, marker, endPoint, options) {
    // 从起始点到终点的移动总耗时
    const MOVE_DURATION = 2000;
    // 每个平滑移动步的移动耗时
    const MOVE_STEP_DURATION = 20;

    const startPoint = marker.getPosition();

    // 要移动的初始步数
    const steps = Math.round(MOVE_DURATION / MOVE_STEP_DURATION);

    // 要全部移动的点
    const points = splitPathToPoints(map, startPoint, endPoint, steps);

    // 修正后的每个移动步的耗时
    const amendInterval = Math.round(MOVE_DURATION / (points.length - 1));

    let polyline = marker.smoothInfo.polyline;

    return new Promise((resolve) => {
        (function _render() {
            if (marker.smoothInfo.timer) {
                clearTimeout(marker.smoothInfo.timer);
                marker.smoothInfo.timer = null;
            }
            marker.smoothInfo.timer = setTimeout(() => {
                const point = points.shift();

                if (point) {
                    marker.setPosition(point);

                    if (!options.disablePinMarker) {
                        map.setCenter(point);
                    }

                    if (!options.disableDrawTrack) {
                        if (!polyline) {
                            polyline = new BMap.Polyline([startPoint, point]);
                            map.addOverlay(polyline);
                        } else {
                            const path = polyline.getPath();
                            const newPath = [...path, point];
                            polyline.setPath(newPath);
                        }
                    }
                    _render();
                } else {
                    clearTimeout(marker.smoothInfo.timer);
                    marker.smoothInfo.timer = null;
                    resolve();
                }
            }, amendInterval);
        })();
    });
}

function getMapImage(fileName) {
    return `../../../assets/images/map/${fileName}`;
}
