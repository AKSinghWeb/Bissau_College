import HeroImg from '../assets/BC_College.jpg'
import Img1 from '../assets/BC_College.jpg'
import '../App.css'
import { useNavigate } from 'react-router-dom'
const Home = () => {
  const navigate = useNavigate()
  return (
    <div>
      <div className="relative">
        <img
          src={HeroImg}
          className="w-full overflow-hidden h-[550px] max-md:h-[768px] max-md:overflow-x-hidden max-md:object-cover"
          alt=""
        />
        <div className="absolute top-0 bottom-0 left-0  right-0 flex justify-center items-center">
          <button
            onClick={() => {
              navigate('/admission-2024-25')
            }}
            className="button rounded-md bg-white text-black p-5"
          >
            <span className="text-2xl font-bold p-5">Admission Open</span>{' '}
            <br />
            <span className="text-lg font-bold p-5">for 2024-25</span>
            <br />
            <span className="text-blue-600 font-bold">Click to apply</span>
          </button>
        </div>
      </div>

      <div>
        <div className="flex flex-col p-7 py-32 lg:py-[150px]">
          <p className="text-center text-4xl font-extrabold p-3">
            About The College
          </p>
          <p className="text-center text-lg lg:px-[300px]">
            Bissau College established in the year 1993, is a renowned
            educational institution located in Shillong, Meghalaya. It provides
            a wide range of Degree programs, including 8 UG options. These
            programs are delivered to students in Full Time mode, and are taught
            by experienced faculty members. Students at the institute can choose
            from various courses such as B.A., B.Com. These courses cover fields
            like Humanities & Social Sciences, Accounting & Commerce, Teaching &
            Education. The faculty at the Bissau College, are experts in
            English. The institute aims to provide quality education at an
            affordable fee, making it accessible to aspiring candidates with a
            seat count of 720. Students have the opportunity to gain valuable
            knowledge and skills in their chosen areas of interest.
            Additionally, the institute offers excellent infrastructure
            facilities to support students&apos; learning experiences.
          </p>
        </div>
      </div>

      <div className="pb-10">
        <div className="flex max-sm:flex-col max-sm:gap-14 max-sm:p-3 justify-evenly">
          <div className="p-10 bg-gray-200  max-w-4xl">
            <p className="text-3xl font-extrabold text-center p-3">
              Goals & Objectives
            </p>
            <p className="text-justify">
              <ul
                className="
                list-disc list-inside flex flex-col gap-3
              "
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

      <div className="pb-20 bg-white">
        <p className="text-center text-3xl p-5 pt-20 font-extrabold">
          Photo Gallery
        </p>
        <div className="flex max-sm:flex-col justify-evenly max-sm:gap-10 p-3">
          <img src={Img1} className="lg:w-[400px] shadow-xl" alt="" />
          <img src={Img1} className="lg:w-[400px] shadow-xl" alt="" />
          <img src={Img1} className="lg:w-[400px] shadow-xl" alt="" />
        </div>
      </div>
    </div>
  )
}
export default Home
