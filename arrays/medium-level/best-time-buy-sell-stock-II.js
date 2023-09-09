//https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/

var maxProfit = function(prices) {
    let max_profit = 0;
    
    for (let i = 1; i < prices.length; i++) {
        // Calculate the difference between the current day's price and the previous day's price
        let price_difference = prices[i] - prices[i - 1];
        
        // If the price difference is positive (profit can be made), add it to max_profit
        if (price_difference > 0) {
            max_profit += price_difference;
        }
    }
    
    return max_profit;    
};