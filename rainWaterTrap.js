var trap = (height) => {
  let water = 0;
  const trim = () => {
    while (height[0] === 0) {
      height.shift();
    }
    let back = height.length - 1;
    while (height[back] === 0) {
      height.pop();
      back--;
    }
  }
  trim(height);
  while (height.length > 2) {
    for (let i = 0; i < height.length; i++) {
      if (height[i] === 0) {
        water++;
      } else {
        height[i]--;
      }
    }
    trim(height);
  }
  return water;
};

// dynamic programming
function trapDP(height) {
  if (height == null || height.length < 3) return 0;

  let res = 0;
  let l = height.length;
  let lMax = {};
  let rMax = {};

  lMax[0] = height[0];
  for (let i = 1; i < l; i++) {
    lMax[i] = Math.max(height[i], lMax[i - 1]);
  }

  rMax[l - 1] = height[l - 1];
  for (let i = l - 2; i >= 0; i--) {
    rMax[i] = Math.max(height[i], rMax[i + 1]);
  }

  for (let i = 0; i < height.length; i++) {
    res += Math.min(lMax[i], rMax[i]) - height[i];
  }
  console.log(rMax, lMax)
  return res;
}

//stack //genius solution
function trapStack(height) {
  let res = 0;
  let i = 0;
  const st = [];
  while (i < height.length) {
    while (st.length !== 0 && height[i] > height[st[st.length - 1]]) {
      const top = st[st.length - 1];
      st.pop();

      if (st.length === 0) break;

      const dist = i - st[st.length - 1] - 1;
      const h = Math.min(height[i], height[st[st.length - 1]]) - height[top];
      res += dist * h;
    }
    st.push(i);
    i++;
  }
  return res;
}
const test1 = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
console.log(trapStack(test1));