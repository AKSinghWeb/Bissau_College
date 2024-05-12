import Img from '../assets/BC_College.jpg'
const AboutPage = () => {
  return (
    <div>
      <div data-aos='fade-up' className='p-4 lg:px-[300px]'>
        <p className='text-2xl lg:text-4xl text-center font-bold py-10 text-cyan-600'>
          About Bissau College
        </p>
        <div className='flex justify-center'>
          <img src={Img} className='lg:w-[700px]' alt='' />
        </div>
        <p className='max-md:py-6 py-10 lg:text-lg text-justify'>
          <strong>Bissau College</strong>, established in the year, 1993, is a
          renowned educational institution located in Shillong, Meghalaya. It
          provides a wide range of Degree programs, including 8 UG options.
          These programs are delivered to students in Full Time mode, and are
          taught by experienced faculty members. Students at the institute can
          choose from various courses such as B.A., B.Com. These courses cover
          fields like Humanities & Social Sciences, Accounting & Commerce,
          Teaching & Education. The faculty at the Bissau College, are experts
          in English. The institute aims to provide quality education at an
          affordable fee, making it accessible to aspiring candidates with a
          seat count of 720. Students have the opportunity to gain valuable
          knowledge and skills in their chosen areas of interest. Additionally,
          the institute offers excellent infrastructure facilities to support
          students&apos; learning experiences.
        </p>
      </div>
    </div>
  )
}

export default AboutPage
