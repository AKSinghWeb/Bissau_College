import HeroImg from '../assets/BC_College.jpg'
import Img1 from '../assets/BC_College.jpg'
import '../App.css'
const Home = () => {
    return (
        <div>
            <div className='relative'>
                <img src={HeroImg} className='w-full overflow-hidden h-[550px] max-md:h-[768px] max-md:overflow-x-hidden max-md:object-cover' alt="" />
                <div className='absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center'>
                    <button className="button bg-white text-black p-5">
                        <span className='text-2xl font-bold p-5'>Admission Open</span> <br /><span className='text-blue-600 font-bold'>Click to apply</span>
                    </button>
                </div>
            </div>

            <div>
                <div className='flex flex-col p-7 py-32 lg:py-[150px]'>
                    <p className='text-center text-4xl font-extrabold p-3'>About Us</p>
                    <p className='text-center lg:px-[300px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In impedit, esse quia dolores illum quaerat sequi voluptate laboriosam culpa eum sint. Quis, eaque a reiciendis accusamus in nulla maiores ratione, quaerat sint expedita sunt at, numquam amet. Provident quisquam molestias incidunt amet maiores eligendi suscipit reiciendis veritatis, architecto corporis fugit minus, corrupti deserunt similique magni, necessitatibus porro itaque voluptatum. Ut?</p>
                </div>
            </div>

            <div className='pb-10'>
                <div className='flex max-sm:flex-col max-sm:gap-14 max-sm:p-3 justify-evenly'>
                    <div className='p-10 bg-gray-200 lg:w-[500px]'>
                        <p className='text-3xl font-extrabold text-center p-3'>Our Mission</p>
                        <p className='text-justify'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum incidunt expedita quo sapiente suscipit ab id voluptatem rem aut porro nostrum sed accusamus voluptatibus praesentium quia dicta officia iste, facilis eligendi maiores tenetur quisquam optio. Eum aperiam, commodi fuga laboriosam voluptatibus iure repudiandae repellat nesciunt. Quod fuga libero ab explicabo.</p>
                    </div>

                    <div className='p-10 bg-gray-200 lg:w-[500px]'>
                        <p className='text-3xl font-extrabold text-center p-3'>Our Mission</p>
                        <p className='text-justify'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum incidunt expedita quo sapiente suscipit ab id voluptatem rem aut porro nostrum sed accusamus voluptatibus praesentium quia dicta officia iste, facilis eligendi maiores tenetur quisquam optio. Eum aperiam, commodi fuga laboriosam voluptatibus iure repudiandae repellat nesciunt. Quod fuga libero ab explicabo.</p>
                    </div>
                </div>
            </div>

            <div className='pb-20 bg-white'>
                <p className='text-center text-3xl p-5 pt-20 font-extrabold'>Photo Gallery</p>
                <div className='flex max-sm:flex-col justify-evenly max-sm:gap-10 p-3'>
                    <img src={Img1} className='lg:w-[400px] shadow-xl' alt="" />
                    <img src={Img1} className='lg:w-[400px] shadow-xl' alt="" />
                    <img src={Img1} className='lg:w-[400px] shadow-xl' alt="" />
                </div>
            </div>
        </div>
    )
}
export default Home