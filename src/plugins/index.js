//引入的组件集中管理，根据vant组件库,插件
import { Swipe, SwipeItem, Button, Row, Col, Popup, Loading  } from 'vant';
//放入数组中
let plugins = [
    Swipe,
    SwipeItem,
    Button,
    Row,
    Col,
    Popup,
    Loading
]

export default function getVant(app) {
    plugins.forEach(item => {
        return app.use(item)
    })
}