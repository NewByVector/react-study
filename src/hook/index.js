import React, { useState, useEffect } from 'react';

//每次渲染从新运行HooTest函数
export default function HookTest () {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log(count);
    return () => {
      console.log('destory');
    }
  });

  return (
    <div>
      <span>{count}</span>
      <button type="button" onClick={() => setCount(count + 1)}>Add</button>
    </div>
  );
};