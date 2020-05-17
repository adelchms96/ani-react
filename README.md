# Ani-React

version 1.1.0

## Getting Started

```
npm i ani-react
```

### Usage

#### Component

```
import Animate from "ani-react"
import "ani-react/dist/animation.css"

const App = ()=>{
return <Animate>
I am fading In
  </Animate>

}
```

##### Props

| props       | value                           | available options                                            |
| ----------- | ------------------------------- | ------------------------------------------------------------ |
| `animation` | default:fade / `string`         | animation or you can make you Own ending with `In` and `Out` |
| `enter`     | default:true / `boolean`        | `true,false`                                                 |
| options     | check bellow options / `object` |                                                              |
| React props |                                 |                                                              |

###### options

| options          | value                                | available options                                             |
| ---------------- | ------------------------------------ | ------------------------------------------------------------- |
| `duration`       | default:1000 / `number` / unit: `ms` | `number:any`                                                  |
| `delay`          | default:0 / `number` / unit: `ms`    | `number:any`                                                  |
| `fillMode`       | default:forwards / `string`          | `none,forwards,backwards,both,initial,inherit`                |
| `timingFunction` | default:linear / `string`            | animation-timing-function css                                 |
| `playState`      | default:runing / `string`            | `paused,running,initial,inherit`                              |
| `direction`      | default:normal / `string`            | `normal,reverse,alternate,alternate-reverse,initial,inherit`, |
| `count`          | default:initial / `string`           | can be `number` or `infinite,initial,inherit`                 |

#### Hook

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

##### options

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

### Animations

| name                                                               |
| ------------------------------------------------------------------ |
| `fade,fadeLeft,fadeRight,fadeUp,fadeDown`                          |
| `slideLeft,slideRight,slideUp,slideDown`                           |
| `zoom,zoomLeft,zoomRight,zoomDown,zoomUp`                          |
| `flipX,flipY`                                                      |
| `backLeft,backRight,backDown,backUp`                               |
| `bounce,bounceLeft,bounceRight,bounceUp,bounceDown`                |
| `rotate,rotateUpLeft,rotateUpRight,rotateDownLeft,rotateDownRight` |
| `role`                                                             |

## Built With

- [animate.css](https://github.com/animate-css/animate.css) - animate.css

## Authors

- **Adel Chamas** - _Initial work_ - [Adelchms96](https://github.com/adelchms96/ani-react)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
