import { Link, useNavigate } from 'react-router-dom'
import Call from '../assets/call.png'
import Location from '../assets/location.png'
import Logo from '../assets/logo.jpeg'
const Navbar = () => {
  const navigate = useNavigate()

  return (
    <div className="lg:px-20 px-5 bg-gray-200">
      <div className="flex justify-end">
        <div className="flex gap-5 py-2 lg:gap-14 items-center">
          <div className="flex items-center gap-5">
            <div>
              <img src={Call} className="w-[20px]" alt="" />
            </div>
            <div>
              <p className="lg:text-xl text-sm font-semibold">+916002021457</p>
            </div>
          </div>
          <div className="w-[1px] h-[30px] lg:h-[30px] bg-black"></div>
          <div className="flex items-center gap-5">
            <div>
              <img src={Location} className="w-[20px]" alt="" />
            </div>
            <div>
              <p className="lg:text-xl text-sm font-semibold">
                Laitumkhrah, Shillong
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:flex justify-between items-center">
        <div
          onClick={() => navigate('/')}
          className="flex cursor-pointer items-center"
        >
          <img
            className="lg:w-[100px] w-[70px] mix-blend-multiply"
            src={Logo}
            alt=""
          />
          <div>
            <p className="font-bold text-xl lg:text-4xl">
              Bissau College, Shillong
            </p>
            <p className="text-center max-md:text-[12px]">
              Move Upwards with Detemination
            </p>
          </div>
        </div>
        <div className="flex text-xl py-2 items-center gap-5">
          <Link className="max-md:text-sm" to={'/'}>
            Home
          </Link>
          <Link className="max-md:text-sm" to={'/academics'}>
            Academics
          </Link>
          <Link className="max-md:text-sm" to={'/facilities'}>
            Facilities
          </Link>
          <Link className="max-md:text-sm" to={'/admission-2024-25'}>
            <button className="p-2 px-4 max-md:text-xs max-md:min-w-max rounded-full hover:bg-cyan-700 bg-cyan-600 text-white">
              Admission 2024-25
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
