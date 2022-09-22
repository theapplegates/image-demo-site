import Image from 'next/image'
import ViewSource from '../components/view-source'
import mountains from '../public/mountains.jpg'
import g400 from '../public/G400-1.jpg'
import cat from '../public/cat.jpg'

const Responsive = () => (
  <div>
    <ViewSource pathname="pages/layout-responsive.tsx" />
    <h1>Image Component With Layout Responsive</h1>
    <Image
      alt="Mountains"
      src={cat}
      layout="responsive"
      width={700}
      height={475}
    />
  </div>
)

export default Responsive
