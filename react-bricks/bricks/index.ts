import {types} from 'react-bricks/frontend'
import website from 'react-bricks-ui/website'
import blog from 'react-bricks-ui/blog'
import HeroUnit from './MyHeroUnit'
import {AppBar} from "./AppBar";

const bricks: types.Brick<any>[] = [
    ...website, // React Bricks UI
    ...blog,
    HeroUnit, // Example custom brick
    AppBar
    // Put here your other bricks...
]

export default bricks
