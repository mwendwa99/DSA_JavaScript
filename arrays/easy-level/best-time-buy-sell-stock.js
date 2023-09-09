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