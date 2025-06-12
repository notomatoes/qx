let url = $request.url;

const extractLast8 = (value) => {
    let raw = value.toString().replace(/[^0-9]/g, ''); // 只保留数字
    return raw.slice(-8);  // 取最后 8 位
};

const generatePrefix = (base, step, stepsCount, controlValue) => {
    let index = parseInt(controlValue, 10);
    if (isNaN(index)) index = 0;
    index = index % stepsCount;
    let offset = step * index;
    return (base + offset).toFixed(4);
};

let latMatch = url.match(/lat=([\d.]+)/);
let lonMatch = url.match(/lon=([\d.]+)/);

if (latMatch && lonMatch) {
    let rawLat = latMatch[1];
    let rawLon = lonMatch[1];

    let latSuffix = extractLast8(rawLat);
    let lonSuffix = extractLast8(rawLon);

    // 用倒数三位数字组成控制值（如 "789"）
    let latControl = latSuffix.slice(-3);
    let lonControl = lonSuffix.slice(-3);

    let newLatPrefix = generatePrefix(26.0938, 0.0001, 15, latControl);
    let newLonPrefix = generatePrefix(119.3098, 0.0001, 17, lonControl);

    let newLat = `${newLatPrefix}${latSuffix}`;
    let newLon = `${newLonPrefix}${lonSuffix}`;

    url = url.replace(/lat=([\d.]+)/, `lat=${newLat}`);
    url = url.replace(/lon=([\d.]+)/, `lon=${newLon}`);

    console.log(`🧭 原始 lat: ${rawLat}, 新 lat: ${newLat}`);
    console.log(`🧭 原始 lon: ${rawLon}, 新 lon: ${newLon}`);
}

$done({ url });
