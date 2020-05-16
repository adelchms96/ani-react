#Getting Started

```
npm i ani-react
```

#Usage

```
import {useAnimation} from "ani-react"
const App = ()=>{
  const {style,setEnter,enter} = useAnimation() // add your options

  return <div style={style}>
  I am fading {enter?"in":"out"}
  <button onClick={()=>setEnter(!enter)}>{enter?"in":"out"}</button>
  </div>

}
```

#Options

| option           | value                                |
| ---------------- | ------------------------------------ |
| `name`           | default:fade / `string`              |
| `enter`          | default:true / `boolean`             |
| `duration`       | default:1000 / `number` / unit: `ms` |
| `delay`          | default:0 / `number` / unit: `ms`    |
| `fillMode`       | default:forwards / `string`          |
| `timingFunction` | default:linear / `string`            |
| `playState`      | default:runing / `string`            |
| `direction`      | default:normal / `string`            |
| `count`          | default:initial / `string`           |

#Authors

######adel chamas
