# withUnmounted

![](https://img.shields.io/npm/v/@ishawnwang/withunmounted.svg) ![](https://img.shields.io/david/iShawnWang/withUnmounted.svg) ![](https://img.shields.io/bundlephobia/minzip/@ishawnwang/withunmounted.svg) ![](https://img.shields.io/npm/l/@ishawnwang/withunmounted.svg)

HOC for set a `hasUnmounted` flag when `componentWillUnmount`, bypass `Can't perform a React state update on an unmounted component` warning

# Install

`npm install --save @iShawnWang/withUnmounted`

# Usage

`import withUnmounted from '@ishawnwang/withunmounted'`

```javascript
class YourCompoment extends Component {
  hasUnmounted = false;

  componentDidMount() {
    fetch(url).then(resp => {
      if (this.hasUnmounted) {
        // check hasUnmounted flag
        return;
      }
      this.setState({ resp });
    });
  }
}

export default withUnmounted(YourCompoment);
```

# Detail

`Warning: Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in the componentWillUnmount method.`

According to official document, it's fine to call `setState` in `componentWillUnmount`, it won't produce any unpredicable effect, just a warning should be ignore.

![](https://ws1.sinaimg.cn/large/006tNc79gy1g01bg2otrij31f60nigv4.jpg)

# Additional Infos

> https://reactjs.org/blog/2015/12/16/ismounted-antipattern.html
