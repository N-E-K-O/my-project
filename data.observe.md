vue initState 时会以
1. props
1. methods
1. data
1. computed
1. watch

的顺序进行初始化，在data部分会进行observe相关操作，添加属性get和set监听就在此环节。
![vue data observe mind map](https://github.com/N-E-K-O/my-project/blob/vue-learn/images/vue.observe.jpg "vue data observe mind map")