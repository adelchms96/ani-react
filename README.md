Getting Started

```
npm i ani-react
```

Usage

```
import {useAnimation} from "ani-react"
import "ani-react/dist/animation.css"

const App = ()=>{
  const {style,setEnter,enter,setOptions} = useAnimation() // add your options

  return <div style={style}>
  I am fading {enter?"in":"out"}
  <button onClick={()=>setEnter(!enter)}>{enter?"in":"out"}</button>
  </div>

}
```

Options

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

Animations

| name              |
| ----------------- |
| `fade`            |
| `fadeLeft`        |
| `fadeRight`       |
| `fadeUp`          |
| `fadeDown`        |
| `slideLeft`       |
| `slideRight`      |
| `slideUp`         |
| `slideDown`       |
| `zoom`            |
| `zoomLeft`        |
| `zoomRight`       |
| `zoomDown`        |
| `zoomUp`          |
| `flipX`           |
| `flipY`           |
| `backLeft`        |
| `backRight`       |
| `backDown`        |
| `backUp`          |
| `bounce`          |
| `bounceLeft`      |
| `bounceRight`     |
| `bounceUp`        |
| `bounceDown`      |
| `rotate`          |
| `rotateUpLeft`    |
| `rotateUpRight`   |
| `rotateDownLeft`  |
| `rotateDownRight` |
| `role`            |

Author

adel chamas
