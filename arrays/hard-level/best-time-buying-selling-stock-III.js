//https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/description/

var maxProfit = function(prices) {
    var buy1 = Number.MIN_SAFE_INTEGER;
    var sell1 = 0;
    var buy2 = Number.MIN_SAFE_INTEGER;
    var sell2 = 0;
    var len = prices.length;
    for (var i = 0; i < len; i++) {
      buy1 = Math.max(buy1, -prices[i]);
      sell1 = Math.max(sell1, buy1 + prices[i]);
      buy2 = Math.max(buy2, sell1 - prices[i]);
      sell2 = Math.max(sell2, buy2 + prices[i]);
    }
    return sell2;
      
  }
//time complexity of O(n),