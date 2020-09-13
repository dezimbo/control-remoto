import tw from 'twin.macro'
import Link from '@/components/Link'

const Cta = tw(Link)`
text-white no-underline text-base font-bold leading-5 px-6 font-muli hidden md:inline-block
  bg-red rounded-md py-3 ml-6 transition duration-500 ease-in-out transform hover:scale-125
`

export default Cta
