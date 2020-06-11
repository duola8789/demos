var styleJson = [
    {
        featureType: 'land',
        elementType: 'geometry',
        stylers: {
            visibility: 'on',
            color: '#0e1318ff'
        }
    },
    {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: {
            visibility: 'on',
            color: '#0e1318ff'
        }
    },
    {
        featureType: 'building',
        elementType: 'geometry.fill',
        stylers: {
            visibility: 'on',
            color: '#030709ff'
        }
    },
    {
        featureType: 'building',
        elementType: 'geometry.stroke',
        stylers: {
            visibility: 'on',
            color: '#000000ff'
        }
    },
    {
        featureType: 'water',
        elementType: 'geometry',
        stylers: {
            visibility: 'on',
            color: '#15223bff'
        }
    },
    {
        featureType: 'village',
        elementType: 'labels',
        stylers: {
            visibility: 'off'
        }
    },
    {
        featureType: 'town',
        elementType: 'labels',
        stylers: {
            visibility: 'off'
        }
    },
    {
        featureType: 'district',
        elementType: 'labels',
        stylers: {
            visibility: 'off'
        }
    },
    {
        featureType: 'country',
        elementType: 'labels.text.fill',
        stylers: {
            visibility: 'on',
            color: '#15223bff'
        }
    },
    {
        featureType: 'city',
        elementType: 'labels.text.fill',
        stylers: {
            visibility: 'on',
            color: '#15223bff'
        }
    },
    {
        featureType: 'continent',
        elementType: 'labels.text.fill',
        stylers: {
            visibility: 'on',
            color: '#15223bff'
        }
    },
    {
        featureType: 'poilabel',
        elementType: 'labels',
        stylers: {
            visibility: 'on'
        }
    },
    {
        featureType: 'poilabel',
        elementType: 'labels.icon',
        stylers: {
            visibility: 'off'
        }
    },
    {
        featureType: 'scenicspotslabel',
        elementType: 'labels.icon',
        stylers: {
            visibility: 'off'
        }
    },
    {
        featureType: 'scenicspotslabel',
        elementType: 'labels.text.fill',
        stylers: {
            visibility: 'on',
            color: '#487979ff'
        }
    },
    {
        featureType: 'transportationlabel',
        elementType: 'labels.text.fill',
        stylers: {
            visibility: 'on',
            color: '#15223bff'
        }
    },
    {
        featureType: 'transportationlabel',
        elementType: 'labels.icon',
        stylers: {
            visibility: 'off'
        }
    },
    {
        featureType: 'airportlabel',
        elementType: 'labels.text.fill',
        stylers: {
            visibility: 'on',
            color: '#487979ff'
        }
    },
    {
        featureType: 'airportlabel',
        elementType: 'labels.icon',
        stylers: {
            visibility: 'off'
        }
    },
    {
        featureType: 'road',
        elementType: 'geometry.fill',
        stylers: {
            visibility: 'on',
            color: '#1c3155ff'
        }
    },
    {
        featureType: 'road',
        elementType: 'geometry.stroke',
        stylers: {
            visibility: 'on',
            color: '#000e2dff'
        }
    },
    {
        featureType: 'road',
        elementType: 'geometry',
        stylers: {
            visibility: 'on',
            weight: '8'
        }
    },
    {
        featureType: 'green',
        elementType: 'geometry',
        stylers: {
            visibility: 'on',
            color: '#15223bff'
        }
    },
    {
        featureType: 'scenicspots',
        elementType: 'geometry',
        stylers: {
            visibility: 'on',
            color: '#0e1318ff'
        }
    },
    {
        featureType: 'scenicspots',
        elementType: 'labels.text.fill',
        stylers: {
            visibility: 'on',
            color: '#487979ff'
        }
    },
    {
        featureType: 'scenicspots',
        elementType: 'labels.text.stroke',
        stylers: {
            visibility: 'off',
            color: '#48797900',
            weight: 0
        }
    },
    {
        featureType: 'continent',
        elementType: 'labels.text.stroke',
        stylers: {
            visibility: 'off',
            color: '#778da9ff',
            weight: '1'
        }
    },
    {
        featureType: 'country',
        elementType: 'labels.text.stroke',
        stylers: {
            visibility: 'off',
            color: '#778da9ff',
            weight: '1'
        }
    },
    {
        featureType: 'city',
        elementType: 'labels.text.stroke',
        stylers: {
            visibility: 'off',
            color: '#778da9ff',
            weight: '1'
        }
    },
    {
        featureType: 'city',
        elementType: 'labels.icon',
        stylers: {
            visibility: 'off'
        }
    },
    {
        featureType: 'scenicspotslabel',
        elementType: 'labels.text.stroke',
        stylers: {
            visibility: 'off',
            color: '#48797900',
            weight: 0
        }
    },
    {
        featureType: 'airportlabel',
        elementType: 'labels.text.stroke',
        stylers: {
            visibility: 'off',
            color: '#778da900',
            weight: 0
        }
    },
    {
        featureType: 'transportationlabel',
        elementType: 'labels.text.stroke',
        stylers: {
            visibility: 'off',
            color: '#778da9ff',
            weight: '1'
        }
    },
    {
        featureType: 'railway',
        elementType: 'geometry',
        stylers: {
            visibility: 'off'
        }
    },
    {
        featureType: 'subway',
        elementType: 'geometry',
        stylers: {
            visibility: 'off'
        }
    },
    {
        featureType: 'highwaysign',
        elementType: 'labels',
        stylers: {
            visibility: 'off'
        }
    },
    {
        featureType: 'nationalwaysign',
        elementType: 'labels',
        stylers: {
            visibility: 'off'
        }
    },
    {
        featureType: 'nationalwaysign',
        elementType: 'labels.icon',
        stylers: {
            visibility: 'off'
        }
    },
    {
        featureType: 'provincialwaysign',
        elementType: 'labels',
        stylers: {
            visibility: 'off'
        }
    },
    {
        featureType: 'provincialwaysign',
        elementType: 'labels.icon',
        stylers: {
            visibility: 'off'
        }
    },
    {
        featureType: 'tertiarywaysign',
        elementType: 'labels',
        stylers: {
            visibility: 'off'
        }
    },
    {
        featureType: 'tertiarywaysign',
        elementType: 'labels.icon',
        stylers: {
            visibility: 'off'
        }
    },
    {
        featureType: 'subwaylabel',
        elementType: 'labels',
        stylers: {
            visibility: 'off'
        }
    },
    {
        featureType: 'subwaylabel',
        elementType: 'labels.icon',
        stylers: {
            visibility: 'off'
        }
    },
    {
        featureType: 'road',
        elementType: 'labels.text.fill',
        stylers: {
            visibility: 'on',
            color: '#15223bff',
            weight: '90'
        }
    },
    {
        featureType: 'road',
        elementType: 'labels.text.stroke',
        stylers: {
            visibility: 'off',
            color: '#778da9ff'
        }
    },
    {
        featureType: 'shopping',
        elementType: 'geometry',
        stylers: {
            visibility: 'on',
            color: '#0f1318ff'
        }
    },
    {
        featureType: 'scenicspots',
        elementType: 'labels',
        stylers: {
            visibility: 'on'
        }
    },
    {
        featureType: 'scenicspotslabel',
        elementType: 'labels',
        stylers: {
            visibility: 'on'
        }
    },
    {
        featureType: 'manmade',
        elementType: 'geometry',
        stylers: {
            visibility: 'off'
        }
    },
    {
        featureType: 'manmade',
        elementType: 'labels',
        stylers: {
            visibility: 'on'
        }
    },
    {
        featureType: 'highwaysign',
        elementType: 'labels.icon',
        stylers: {
            visibility: 'off'
        }
    },
    {
        featureType: 'water',
        elementType: 'labels.text.stroke',
        stylers: {
            visibility: 'on',
            color: '#15223b00'
        }
    },
    {
        featureType: 'road',
        stylers: {
            level: '6',
            curZoomRegionId: '0',
            curZoomRegion: '6-9'
        }
    },
    {
        featureType: 'road',
        stylers: {
            level: '7',
            curZoomRegionId: '0',
            curZoomRegion: '6-9'
        }
    },
    {
        featureType: 'road',
        stylers: {
            level: '8',
            curZoomRegionId: '0',
            curZoomRegion: '6-9'
        }
    },
    {
        featureType: 'road',
        stylers: {
            level: '9',
            curZoomRegionId: '0',
            curZoomRegion: '6-9'
        }
    },
    {
        featureType: 'road',
        elementType: 'geometry',
        stylers: {
            visibility: 'off',
            level: '6',
            curZoomRegionId: '0',
            curZoomRegion: '6-9'
        }
    },
    {
        featureType: 'road',
        elementType: 'geometry',
        stylers: {
            visibility: 'off',
            level: '7',
            curZoomRegionId: '0',
            curZoomRegion: '6-9'
        }
    },
    {
        featureType: 'road',
        elementType: 'geometry',
        stylers: {
            visibility: 'off',
            level: '8',
            curZoomRegionId: '0',
            curZoomRegion: '6-9'
        }
    },
    {
        featureType: 'road',
        elementType: 'geometry',
        stylers: {
            visibility: 'off',
            level: '9',
            curZoomRegionId: '0',
            curZoomRegion: '6-9'
        }
    },
    {
        featureType: 'road',
        elementType: 'labels',
        stylers: {
            visibility: 'off',
            level: '6',
            curZoomRegionId: '0',
            curZoomRegion: '6-9'
        }
    },
    {
        featureType: 'road',
        elementType: 'labels',
        stylers: {
            visibility: 'off',
            level: '7',
            curZoomRegionId: '0',
            curZoomRegion: '6-9'
        }
    },
    {
        featureType: 'road',
        elementType: 'labels',
        stylers: {
            visibility: 'off',
            level: '8',
            curZoomRegionId: '0',
            curZoomRegion: '6-9'
        }
    },
    {
        featureType: 'road',
        elementType: 'labels',
        stylers: {
            visibility: 'off',
            level: '9',
            curZoomRegionId: '0',
            curZoomRegion: '6-9'
        }
    },
    {
        featureType: 'road',
        elementType: 'labels.text',
        stylers: {
            fontsize: '24'
        }
    },
    {
        featureType: 'highway',
        elementType: 'labels.text.stroke',
        stylers: {
            visibility: 'off',
            color: '#778da9ff',
            weight: '1'
        }
    },
    {
        featureType: 'highway',
        elementType: 'geometry.fill',
        stylers: {
            visibility: 'on',
            color: '#1c3155ff'
        }
    },
    {
        featureType: 'highway',
        elementType: 'geometry.stroke',
        stylers: {
            color: '#1c4f7eff'
        }
    },
    {
        featureType: 'highway',
        elementType: 'labels.text.fill',
        stylers: {
            visibility: 'on',
            color: '#15223bff'
        }
    },
    {
        featureType: 'highway',
        elementType: 'geometry',
        stylers: {
            weight: '3'
        }
    },
    {
        featureType: 'nationalway',
        elementType: 'geometry.fill',
        stylers: {
            visibility: 'on',
            color: '#1c3155ff'
        }
    },
    {
        featureType: 'nationalway',
        elementType: 'geometry.stroke',
        stylers: {
            color: '#1c4f7eff'
        }
    },
    {
        featureType: 'nationalway',
        elementType: 'labels.text.fill',
        stylers: {
            visibility: 'on',
            color: '#15223bff'
        }
    },
    {
        featureType: 'nationalway',
        elementType: 'labels.text.stroke',
        stylers: {
            visibility: 'off',
            color: '#778da9ff',
            weight: '1'
        }
    },
    {
        featureType: 'nationalway',
        elementType: 'geometry',
        stylers: {
            weight: '3'
        }
    },
    {
        featureType: 'provincialway',
        elementType: 'geometry.fill',
        stylers: {
            visibility: 'on',
            color: '#1c3155ff'
        }
    },
    {
        featureType: 'cityhighway',
        elementType: 'geometry.fill',
        stylers: {
            visibility: 'on',
            color: '#1c3155ff'
        }
    },
    {
        featureType: 'arterial',
        elementType: 'geometry.fill',
        stylers: {
            visibility: 'on',
            color: '#1c3155ff'
        }
    },
    {
        featureType: 'tertiaryway',
        elementType: 'geometry.fill',
        stylers: {
            visibility: 'on',
            color: '#1c3155ff'
        }
    },
    {
        featureType: 'fourlevelway',
        elementType: 'geometry.fill',
        stylers: {
            visibility: 'on',
            color: '#1c3155ff'
        }
    },
    {
        featureType: 'local',
        elementType: 'geometry.fill',
        stylers: {
            visibility: 'on',
            color: '#1c3155ff'
        }
    },
    {
        featureType: 'provincialway',
        elementType: 'geometry.stroke',
        stylers: {
            visibility: 'on',
            color: '#000e2dff'
        }
    },
    {
        featureType: 'cityhighway',
        elementType: 'geometry.stroke',
        stylers: {
            visibility: 'on',
            color: '#000e2dff'
        }
    },
    {
        featureType: 'arterial',
        elementType: 'geometry.stroke',
        stylers: {
            visibility: 'on',
            color: '#000e2dff'
        }
    },
    {
        featureType: 'tertiaryway',
        elementType: 'geometry.stroke',
        stylers: {
            visibility: 'on',
            color: '#000e2dff'
        }
    },
    {
        featureType: 'fourlevelway',
        elementType: 'geometry.stroke',
        stylers: {
            visibility: 'on',
            color: '#000e2dff'
        }
    },
    {
        featureType: 'local',
        elementType: 'geometry.stroke',
        stylers: {
            visibility: 'on',
            color: '#000e2dff'
        }
    },
    {
        featureType: 'local',
        elementType: 'labels.text.fill',
        stylers: {
            visibility: 'on',
            color: '#15223bff'
        }
    },
    {
        featureType: 'local',
        elementType: 'labels.text.stroke',
        stylers: {
            visibility: 'off',
            color: '#778da9ff',
            weight: '1'
        }
    },
    {
        featureType: 'fourlevelway',
        elementType: 'labels.text.fill',
        stylers: {
            visibility: 'on',
            color: '#15223bff'
        }
    },
    {
        featureType: 'tertiaryway',
        elementType: 'labels.text.fill',
        stylers: {
            visibility: 'on',
            color: '#15223bff'
        }
    },
    {
        featureType: 'arterial',
        elementType: 'labels.text.fill',
        stylers: {
            visibility: 'on',
            color: '#15223bff'
        }
    },
    {
        featureType: 'cityhighway',
        elementType: 'labels.text.fill',
        stylers: {
            visibility: 'on',
            color: '#15223bff'
        }
    },
    {
        featureType: 'provincialway',
        elementType: 'labels.text.fill',
        stylers: {
            visibility: 'on',
            color: '#15223bff'
        }
    },
    {
        featureType: 'provincialway',
        elementType: 'labels.text.stroke',
        stylers: {
            visibility: 'off',
            color: '#778da9ff',
            weight: '1'
        }
    },
    {
        featureType: 'cityhighway',
        elementType: 'labels.text.stroke',
        stylers: {
            visibility: 'off',
            color: '#778da9ff',
            weight: '1'
        }
    },
    {
        featureType: 'arterial',
        elementType: 'labels.text.stroke',
        stylers: {
            visibility: 'off',
            color: '#778da9ff',
            weight: '1'
        }
    },
    {
        featureType: 'tertiaryway',
        elementType: 'labels.text.stroke',
        stylers: {
            visibility: 'off',
            color: '#778da9ff',
            weight: '1'
        }
    },
    {
        featureType: 'fourlevelway',
        elementType: 'labels.text.stroke',
        stylers: {
            visibility: 'off',
            color: '#778da9ff',
            weight: '1'
        }
    },
    {
        featureType: 'fourlevelway',
        elementType: 'geometry',
        stylers: {
            weight: '1'
        }
    },
    {
        featureType: 'tertiaryway',
        elementType: 'geometry',
        stylers: {
            weight: '1'
        }
    },
    {
        featureType: 'local',
        elementType: 'geometry',
        stylers: {
            weight: '1'
        }
    },
    {
        featureType: 'provincialway',
        elementType: 'geometry',
        stylers: {
            weight: '3'
        }
    },
    {
        featureType: 'cityhighway',
        elementType: 'geometry',
        stylers: {
            weight: '3'
        }
    },
    {
        featureType: 'arterial',
        elementType: 'geometry',
        stylers: {
            weight: '3'
        }
    },
    {
        featureType: 'highway',
        stylers: {
            level: '6',
            curZoomRegionId: '0',
            curZoomRegion: '6-9'
        }
    },
    {
        featureType: 'highway',
        stylers: {
            level: '7',
            curZoomRegionId: '0',
            curZoomRegion: '6-9'
        }
    },
    {
        featureType: 'highway',
        stylers: {
            level: '8',
            curZoomRegionId: '0',
            curZoomRegion: '6-9'
        }
    },
    {
        featureType: 'highway',
        stylers: {
            level: '9',
            curZoomRegionId: '0',
            curZoomRegion: '6-9'
        }
    },
    {
        featureType: 'highway',
        elementType: 'geometry',
        stylers: {
            visibility: 'off',
            level: '6',
            curZoomRegionId: '0',
            curZoomRegion: '6-9'
        }
    },
    {
        featureType: 'highway',
        elementType: 'geometry',
        stylers: {
            visibility: 'off',
            level: '7',
            curZoomRegionId: '0',
            curZoomRegion: '6-9'
        }
    },
    {
        featureType: 'highway',
        elementType: 'geometry',
        stylers: {
            visibility: 'off',
            level: '8',
            curZoomRegionId: '0',
            curZoomRegion: '6-9'
        }
    },
    {
        featureType: 'highway',
        elementType: 'geometry',
        stylers: {
            visibility: 'off',
            level: '9',
            curZoomRegionId: '0',
            curZoomRegion: '6-9'
        }
    },
    {
        featureType: 'highway',
        elementType: 'labels',
        stylers: {
            visibility: 'off',
            level: '6',
            curZoomRegionId: '0',
            curZoomRegion: '6-9'
        }
    },
    {
        featureType: 'highway',
        elementType: 'labels',
        stylers: {
            visibility: 'off',
            level: '7',
            curZoomRegionId: '0',
            curZoomRegion: '6-9'
        }
    },
    {
        featureType: 'highway',
        elementType: 'labels',
        stylers: {
            visibility: 'off',
            level: '8',
            curZoomRegionId: '0',
            curZoomRegion: '6-9'
        }
    },
    {
        featureType: 'highway',
        elementType: 'labels',
        stylers: {
            visibility: 'off',
            level: '9',
            curZoomRegionId: '0',
            curZoomRegion: '6-9'
        }
    },
    {
        featureType: 'nationalway',
        stylers: {
            level: '6',
            curZoomRegionId: '0',
            curZoomRegion: '6-9'
        }
    },
    {
        featureType: 'nationalway',
        stylers: {
            level: '7',
            curZoomRegionId: '0',
            curZoomRegion: '6-9'
        }
    },
    {
        featureType: 'nationalway',
        stylers: {
            level: '8',
            curZoomRegionId: '0',
            curZoomRegion: '6-9'
        }
    },
    {
        featureType: 'nationalway',
        stylers: {
            level: '9',
            curZoomRegionId: '0',
            curZoomRegion: '6-9'
        }
    },
    {
        featureType: 'nationalway',
        elementType: 'geometry',
        stylers: {
            visibility: 'off',
            level: '6',
            curZoomRegionId: '0',
            curZoomRegion: '6-9'
        }
    },
    {
        featureType: 'nationalway',
        elementType: 'geometry',
        stylers: {
            visibility: 'off',
            level: '7',
            curZoomRegionId: '0',
            curZoomRegion: '6-9'
        }
    },
    {
        featureType: 'nationalway',
        elementType: 'geometry',
        stylers: {
            visibility: 'off',
            level: '8',
            curZoomRegionId: '0',
            curZoomRegion: '6-9'
        }
    },
    {
        featureType: 'nationalway',
        elementType: 'geometry',
        stylers: {
            visibility: 'off',
            level: '9',
            curZoomRegionId: '0',
            curZoomRegion: '6-9'
        }
    },
    {
        featureType: 'nationalway',
        elementType: 'labels',
        stylers: {
            visibility: 'off',
            level: '6',
            curZoomRegionId: '0',
            curZoomRegion: '6-9'
        }
    },
    {
        featureType: 'nationalway',
        elementType: 'labels',
        stylers: {
            visibility: 'off',
            level: '7',
            curZoomRegionId: '0',
            curZoomRegion: '6-9'
        }
    },
    {
        featureType: 'nationalway',
        elementType: 'labels',
        stylers: {
            visibility: 'off',
            level: '8',
            curZoomRegionId: '0',
            curZoomRegion: '6-9'
        }
    },
    {
        featureType: 'nationalway',
        elementType: 'labels',
        stylers: {
            visibility: 'off',
            level: '9',
            curZoomRegionId: '0',
            curZoomRegion: '6-9'
        }
    },
    {
        featureType: 'provincialway',
        stylers: {
            level: '8',
            curZoomRegionId: '0',
            curZoomRegion: '8-10'
        }
    },
    {
        featureType: 'provincialway',
        stylers: {
            level: '9',
            curZoomRegionId: '0',
            curZoomRegion: '8-10'
        }
    },
    {
        featureType: 'provincialway',
        elementType: 'geometry',
        stylers: {
            visibility: 'off',
            level: '8',
            curZoomRegionId: '0',
            curZoomRegion: '8-10'
        }
    },
    {
        featureType: 'provincialway',
        elementType: 'geometry',
        stylers: {
            visibility: 'off',
            level: '9',
            curZoomRegionId: '0',
            curZoomRegion: '8-10'
        }
    },
    {
        featureType: 'provincialway',
        elementType: 'labels',
        stylers: {
            visibility: 'off',
            level: '8',
            curZoomRegionId: '0',
            curZoomRegion: '8-10'
        }
    },
    {
        featureType: 'provincialway',
        elementType: 'labels',
        stylers: {
            visibility: 'off',
            level: '9',
            curZoomRegionId: '0',
            curZoomRegion: '8-10'
        }
    },
    {
        featureType: 'cityhighway',
        stylers: {
            level: '6',
            curZoomRegionId: '0',
            curZoomRegion: '6-9'
        }
    },
    {
        featureType: 'cityhighway',
        stylers: {
            level: '7',
            curZoomRegionId: '0',
            curZoomRegion: '6-9'
        }
    },
    {
        featureType: 'cityhighway',
        stylers: {
            level: '8',
            curZoomRegionId: '0',
            curZoomRegion: '6-9'
        }
    },
    {
        featureType: 'cityhighway',
        stylers: {
            level: '9',
            curZoomRegionId: '0',
            curZoomRegion: '6-9'
        }
    },
    {
        featureType: 'cityhighway',
        elementType: 'geometry',
        stylers: {
            visibilit: 'off',
            level: '6',
            curZoomRegionId: '0',
            curZoomRegion: '6-9'
        }
    },
    {
        featureType: 'cityhighway',
        elementType: 'geometry',
        stylers: {
            visibility: 'off',
            level: '7',
            curZoomRegionId: '0',
            curZoomRegion: '6-9'
        }
    },
    {
        featureType: 'cityhighway',
        elementType: 'geometry',
        stylers: {
            visibility: 'off',
            level: '8',
            curZoomRegionId: '0',
            curZoomRegion: '6-9'
        }
    },
    {
        featureType: 'cityhighway',
        elementType: 'geometry',
        stylers: {
            visibility: 'off',
            level: '9',
            curZoomRegionId: '0',
            curZoomRegion: '6-9'
        }
    },
    {
        featureType: 'cityhighway',
        elementType: 'labels',
        stylers: {
            visibility: 'off',
            level: '6',
            curZoomRegionId: '0',
            curZoomRegion: '6-9'
        }
    },
    {
        featureType: 'cityhighway',
        elementType: 'labels',
        stylers: {
            visibility: 'off',
            level: '7',
            curZoomRegionId: '0',
            curZoomRegion: '6-9'
        }
    },
    {
        featureType: 'cityhighway',
        elementType: 'labels',
        stylers: {
            visibility: 'off',
            level: '8',
            curZoomRegionId: '0',
            curZoomRegion: '6-9'
        }
    },
    {
        featureType: 'cityhighway',
        elementType: 'labels',
        stylers: {
            visibility: 'off',
            level: '9',
            curZoomRegionId: '0',
            curZoomRegion: '6-9'
        }
    },
    {
        featureType: 'arterial',
        stylers: {
            level: '9',
            curZoomRegionId: '0',
            curZoomRegion: '9-9'
        }
    },
    {
        featureType: 'arterial',
        elementType: 'geometry',
        stylers: {
            visibility: 'off',
            level: '9',
            curZoomRegionId: '0',
            curZoomRegion: '9-9'
        }
    },
    {
        featureType: 'arterial',
        elementType: 'labels',
        stylers: {
            visibility: 'off',
            level: '9',
            curZoomRegionId: '0',
            curZoomRegion: '9-9'
        }
    },
    {
        featureType: 'road',
        elementType: 'labels',
        stylers: {
            visibility: 'on'
        }
    },
    {
        featureType: 'airportlabel',
        elementType: 'labels',
        stylers: {
            visibility: 'on'
        }
    },
    {
        featureType: 'educationlabel',
        elementType: 'labels',
        stylers: {
            visibility: 'on'
        }
    },
    {
        featureType: 'educationlabel',
        elementType: 'labels.icon',
        stylers: {
            visibility: 'off'
        }
    },
    {
        featureType: 'medicallabel',
        elementType: 'labels',
        stylers: {
            visibility: 'on'
        }
    },
    {
        featureType: 'medicallabel',
        elementType: 'labels.icon',
        stylers: {
            visibility: 'off'
        }
    },
    {
        featureType: 'entertainmentlabel',
        elementType: 'labels',
        stylers: {
            visibility: 'off'
        }
    },
    {
        featureType: 'entertainmentlabel',
        elementType: 'labels.icon',
        stylers: {
            visibility: 'off'
        }
    },
    {
        featureType: 'estatelabel',
        elementType: 'labels',
        stylers: {
            visibility: 'off'
        }
    },
    {
        featureType: 'estatelabel',
        elementType: 'labels.icon',
        stylers: {
            visibility: 'off'
        }
    },
    {
        featureType: 'businesstowerlabel',
        elementType: 'labels.icon',
        stylers: {
            visibility: 'off'
        }
    },
    {
        featureType: 'businesstowerlabel',
        elementType: 'labels',
        stylers: {
            visibility: 'off'
        }
    },
    {
        featureType: 'districtlabel',
        elementType: 'labels',
        stylers: {
            visibility: 'off'
        }
    },
    {
        featureType: 'districtlabel',
        elementType: 'labels.icon',
        stylers: {
            visibility: 'off'
        }
    },
    {
        featureType: 'educationlabel',
        elementType: 'labels.text.fill',
        stylers: {
            color: '#487979ff'
        }
    },
    {
        featureType: 'educationlabel',
        elementType: 'labels.text.stroke',
        stylers: {
            color: '#ffffff00',
            weight: 0
        }
    },
    {
        featureType: 'medicallabel',
        elementType: 'labels.text.fill',
        stylers: {
            color: '#487979ff'
        }
    },
    {
        featureType: 'estatelabel',
        elementType: 'labels.text.fill',
        stylers: {
            color: '#487979ff'
        }
    },
    {
        featureType: 'businesstowerlabel',
        elementType: 'labels.text.fill',
        stylers: {
            color: '#487979ff'
        }
    },
    {
        featureType: 'governmentlabel',
        elementType: 'labels.text.fill',
        stylers: {
            color: '#487979ff'
        }
    },
    {
        featureType: 'shoppinglabel',
        elementType: 'labels.text.fill',
        stylers: {
            color: '#487979ff'
        }
    },
    {
        featureType: 'restaurantlabel',
        elementType: 'labels',
        stylers: {
            visibility: 'off'
        }
    },
    {
        featureType: 'lifeservicelabel',
        elementType: 'labels',
        stylers: {
            visibility: 'off'
        }
    },
    {
        featureType: 'carservicelabel',
        elementType: 'labels',
        stylers: {
            visibility: 'off'
        }
    },
    {
        featureType: 'transportationlabel',
        elementType: 'labels',
        stylers: {
            visibility: 'off'
        }
    },
    {
        featureType: 'financelabel',
        elementType: 'labels',
        stylers: {
            visibility: 'off'
        }
    },
    {
        featureType: 'shoppinglabel',
        elementType: 'labels.text.stroke',
        stylers: {
            color: '#48797900',
            weight: 0
        }
    },
    {
        featureType: 'shoppinglabel',
        elementType: 'labels.icon',
        stylers: {
            visibility: 'off'
        }
    },
    {
        featureType: 'restaurantlabel',
        elementType: 'labels.icon',
        stylers: {
            visibility: 'off'
        }
    },
    {
        featureType: 'medicallabel',
        elementType: 'labels.text.stroke',
        stylers: {
            weight: 0,
            color: '#48797900'
        }
    },
    {
        featureType: 'estatelabel',
        elementType: 'labels.text.stroke',
        stylers: {
            color: '#48797900',
            weight: 0
        }
    },
    {
        featureType: 'carservicelabel',
        elementType: 'labels.icon',
        stylers: {
            visibility: 'off'
        }
    },
    {
        featureType: 'financelabel',
        elementType: 'labels.icon',
        stylers: {
            visibility: 'off'
        }
    },
    {
        featureType: 'manmade',
        elementType: 'labels.text.fill',
        stylers: {
            color: '#487979ff',
            weight: 40
        }
    },
    {
        featureType: 'manmade',
        elementType: 'labels.text.stroke',
        stylers: {
            color: '#48797900',
            weight: 0
        }
    },
    {
        featureType: 'lifeservicelabel',
        elementType: 'labels.icon',
        stylers: {
            visibility: 'off'
        }
    },
    {
        featureType: 'poilabel',
        elementType: 'labels.text.fill',
        stylers: {
            color: '#487979ff'
        }
    },
    {
        featureType: 'poilabel',
        elementType: 'labels.text.stroke',
        stylers: {
            color: '#48797900',
            weight: 0
        }
    },
    {
        featureType: 'governmentlabel',
        elementType: 'labels.text.stroke',
        stylers: {
            color: '#48797900',
            weight: 0
        }
    },
    {
        featureType: 'estate',
        elementType: 'geometry',
        stylers: {
            visibility: 'off'
        }
    },
    {
        featureType: 'subway',
        elementType: 'labels.icon',
        stylers: {
            visibility: 'off'
        }
    }
];
