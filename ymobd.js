// 圈x响应修改脚本 - 添加商品到goodsList
// 用于响应body修改
let body = $response.body;

// 要添加的商品数据
const additionalGoods = {
    "id": 8,
    "createdAt": "2025-07-08T11:09:06.433+08:00",
    "createdBy": "admin",
    "updatedAt": "2025-07-08T17:24:31.247+08:00",
    "updatedBy": "admin",
    "deletedAt": null,
    "goodsModel": "YM_PLUS_4",
    "goodsName": "超级汽车声浪",
    "goodsType": "wxpay",
    "goodsDetail": "经典声浪重现，驾驶乐趣升级，声浪中的极致享受。",
    "goodsActive": 1,
    "goodsImagesUUID": [
        "0f455c93-097e-464f-b448-ec78fff4c51b"
    ],
    "goodsPrice": {
        "goodsRegion": "CHN",
        "goodsCurrency": "CNY",
        "goodsPrice": "38",
        "goodsDiscountPrice": "38",
        "discountStartDate": "2023-11-30T16:00:00Z",
        "discountEndDate": "2024-01-31T15:59:59Z"
    },
    "goodsSettlementPrice": "38"
};

try {
    // 解析响应JSON
    let responseData = JSON.parse(body);
    
    // 检查是否包含goodsList字段
    if (responseData && responseData.goodsList && Array.isArray(responseData.goodsList)) {
        console.log(`🛒 原始商品数量: ${responseData.goodsList.length}`);
        
        // 添加新商品到goodsList
        responseData.goodsList.push(additionalGoods);
        
        console.log(`🛒 修改后商品数量: ${responseData.goodsList.length}`);
        console.log(`🛒 添加商品: ${additionalGoods.goodsName}`);
        
        // 更新响应体
        body = JSON.stringify(responseData);
    }
} catch (error) {
    console.log(`❌ 响应修改失败: ${error}`);
}

$done({ body });
