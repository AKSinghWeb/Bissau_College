const AcademicsPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Academics at Bissau College
        </h1>

        {/* Academic Programs Section */}
        <div className="grid grid-cols-1 gap-8">
          {/* Class XI/XII Section */}
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Class XI/XII (MBOSE)
            </h2>
            <p className="text-gray-600 mb-4">
              Bissau College offers Class XI/XII education under the Meghalaya
              Board of School Education (MBOSE).
            </p>
            <ul className="list-disc list-inside text-gray-700">
              <li>English</li>
              <li>Alt. English/MIL</li>
              <li>Environmental Science</li>
              <li>
                Optional Papers (Choose any three): Economics, Education,
                History, Music(Western), Psychology, Political Science, Physical
                Education, Sociology
              </li>
              <li>
                Vocational Stream: Horticulture, Travel and Tourism Techniques
              </li>
            </ul>
          </div>

          {/* Degree Courses Section */}
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Degree Courses (NEHU)
            </h2>
            <p className="text-gray-600 mb-4">
              Bissau College offers undergraduate degree courses affiliated with
              the North-Eastern Hill University (NEHU).
            </p>
            <div className="mb-4">
              <p className="text-gray-700">
                Subjects Offered: English, Economics, Education, History,
                Political Science, Sociology, Philosophy
              </p>
              <p className="text-gray-700 mt-2">
                Major Subject (Choose one): English, Economics, Education,
                History, Political Science, Sociology, Philosophy
              </p>
              <p className="text-gray-700 mt-2">
                Minor Subject (Other than Major): Choose any subject other than
                your Major
              </p>
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <div className="text-center mt-8">
          <p className="text-gray-700">
            For more information, please contact the college office.
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Phone:</span> +916002021457
          </p>
        </div>
      </div>
    </div>
  )
}

export default AcademicsPage
