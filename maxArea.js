var maxArea = function (height) {
  let max = 0;
  for (let low = 0, high = height.length - 1; low < high;) {
    let area = (high - low) * Math.min(height[low], height[high]);
    if (max < area) max = area;
    height[low] > height[high] ? high-- : low++;
  }
  return max;
};

console.log(maxArea([4, 1, 7, 1, 1, 7, 2])) //49~