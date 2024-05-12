import HeroImg from '../assets/BC_College.jpg'
import Img1 from '../assets/BC_College.jpg'
import '../App.css'
import { Link, useNavigate } from 'react-router-dom'
const Home = () => {
  const navigate = useNavigate()
  return (
    <div>
      {/* Hero Section */}
      <div className='relative'>
        <img
          data-aos='fade-down'
          src={HeroImg}
          className='w-full overflow-hidden h-[550px] max-md:h-[768px] max-md:overflow-x-hidden max-md:object-cover'
          alt=''
        />
        <div className='absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center'>
          <Link to={'/admission-2024-25'}>
            <button
              onClick={() => {
                navigate('/admission-2024-25')
              }}
              className='button rounded-full bg-cyan-600 text-white p-5'
            >
              <span className='text-2xl font-bold p-5'>Admission Open</span>{' '}
              <br />
              <span className='text-gray-300 font-bold'>Click to apply</span>
            </button>
          </Link>
        </div>
      </div>

      {/* Principal Desk Section */}
      <div className='py-32 max-md:px-5 lg:px-[300px] lg:py-[150px]'>
        <div data-aos='fade-up'>
          <p className='text-4xl font-bold text-cyan-600'>
            The Principal&apos;s Desk
          </p>
          <p className='py-3 max-md:text-justify lg:text-lg'>
            Education is the basis of all progress. It is for this very reason
            that Don Bosco College ventured into education about 31 years ago.
            Over a three and a half decade of experience has taught us that
            progress is possible only if men and women are equally
            well-educated. <br /> <br />
            The entire purpose of education is not to restrict itself to
            imparting bookish knowledge only but to inculcate humanitarian
            values like wisdom, compassion, courage, humility, integrity and
            reliability in the students. <br />
            <br />
            All of us believe in holistic education, encompassing – academics,
            co-curricular activities, sports education and life-skills learning.
            Learning and teaching entails something more than providing academic
            instructions. It is about nurturing the individual – academically,
            spiritually, emotionally and physically – equipping students with
            life-long skills to become compassionate and contributing citizens.
            We strive to help students develop an understanding of the world,
            their community and their role in it.
          </p>
        </div>
      </div>

      {/* Goals and Objective Section */}
      <div className='pb-10'>
        <div
          data-aos='fade-up'
          className='flex max-sm:flex-col max-sm:gap-14 max-sm:p-3 justify-evenly'
        >
          <div className='p-10 bg-gray-200 rounded-md max-w-5xl'>
            <p className='text-3xl font-extrabold text-cyan-600 text-center pb-7 p-3'>
              Goals & Objectives
            </p>
            <p className='text-justify'>
              <ul
                className='
                list-disc list-inside flex flex-col gap-8
              '
              >
                <li>
                  To provide quality education to all aspiring students through
                  meaningful academic and professional courses keeping in mind
                  the special needs of the economically, educationally and
                  socially disadvantaged segment of the society.
                </li>
                <li>
                  To inculcate knowledge and need-based work skills so that the
                  products of the college find themselves prepared for
                  employment and self-employment avenues as and when required.
                </li>
                <li>
                  To help students to discover and tap their fullest potential
                  through appropriate co- andextra-curricular activities leading
                  to integrated personality-development in order to become
                  responsible and productive citizens of the country.
                </li>
                <li>
                  To encourage and promote moral, secular, scientific and
                  nation-building values so that the students respect, protect
                  and nurture the rich composite culture of the country and of
                  each of its constituent units.
                </li>
                <li>
                  To create awareness, concern and care for environment by
                  gearing various collegiate activities to sustainable
                  environmental practices encompassing the State’s land, water,
                  flora and fauna.
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>

      <div className='pb-20 bg-white'>
        <div data-aos='fade-up'>
          <p className='text-center text-cyan-600 text-3xl p-5 pt-20 font-extrabold'>
            Photo Gallery
          </p>
          <div className='flex max-sm:flex-col justify-evenly max-sm:gap-10 p-3'>
            <img src={Img1} className='lg:w-[400px] shadow-xl' alt='' />
            <img src={Img1} className='lg:w-[400px] shadow-xl' alt='' />
            <img src={Img1} className='lg:w-[400px] shadow-xl' alt='' />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Home
