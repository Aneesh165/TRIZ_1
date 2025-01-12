import Header from '../components/Header'
import Card from '../components/Card'
import Lyric from '../components/Lyric'
import Progress from '../components/Progress'
import { FaChevronDown } from "react-icons/fa6";

const Design = () => {
  return (
    <div className='w-full h-screen bg-[#001625] sm:rounded-xl sm:w-[350px] sm:h-[585px] overflow-hidden'>
        <Header/>
        <Card/>
        <Lyric/>
        <Progress/>
        <div className='flex justify-center text-white mt-4'>
          <FaChevronDown size={20}/>
        </div>
    </div>
  )
}

export default Design