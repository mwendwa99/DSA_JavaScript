//https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

var maxProfit = function(prices) {
    let max_profit = 0;
    let min_price = Infinity
    for (let i =0; i < prices.length; i++){
        if(prices[i] < min_price){
            min_price = prices[i]
        } else if(prices[i] - min_price > max_profit){
            max_profit = prices[i] - min_price
        }
    }
    return max_profit
}

//O(n)- time complexity

//method2
var maxProfit = function(prices) {
    let max_profit = 0;
    let min_price = prices[0];
    for(let sell = 0; sell < prices.length; sell++){
        let sell_price = prices[sell]
        let profit = sell_price - min_price
        max_profit = Math.max(max_profit,profit)
        if(sell_price < min_price){
            min_price = sell_price
        }
    }
    return max_profit
}