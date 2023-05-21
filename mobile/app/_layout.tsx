import { styled } from 'nativewind'
import { ImageBackground } from 'react-native'
import blurBg from '../src/assets/blur.png'
import Stripes from '../src/assets/stripes.svg'

const StyledStripes = styled(Stripes)

export default function Layout() {
  return (
    <ImageBackground
      source={blurBg}
      className="relative flex-1 bg-gray-900 px-8 py-10"
      imageStyle={{ position: 'absolute', left: '-100%' }}
    >
      <StyledStripes className="absolute left-2" />
    </ImageBackground>
  )
}
