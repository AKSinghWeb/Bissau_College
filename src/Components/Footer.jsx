import Logo from '../assets/logo.jpeg'
const Footer = () => {
  return (
    <footer className='bg-gray-300 text-slate-800 py-12'>
      <div className='container mx-auto px-4'>
        <div className='lg:flex justify-around items-center gap-8'>
          {/* Left column */}
          <div className='flex flex-col'>
            <h2 className='text-2xl font-extrabold'>
              Bissau College, Shillong
            </h2>
            <p>An Education India Institute</p>
            <p>Re-accredited by NAAC in 2020 Grade- B</p>
            <p>Institutional Partner</p>
          </div>

          {/* Middle column */}
          <div className='flex justify-center'>
            <img
              src={Logo}
              alt='Institutional Partner Logo'
              className='w-[300px] mix-blend-multiply'
            />
          </div>

          {/* Right column */}
          <div className='flex flex-col'>
            <h2 className='text-xl border-b inline font-bold'>Address</h2>
            <p>Upper New Colony, Laitumkhrah, Shillong,</p>
            <p>Meghalaya - 793003</p>
            <p>(0364) 454611</p>
            <p>Monday - Saturday / 9:00am - 5:00pm</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
