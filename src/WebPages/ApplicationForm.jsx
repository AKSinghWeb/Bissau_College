import { useState } from 'react'

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    dateOfBirth: '',
    gender: '',
    category: '',
    nationality: '',
    phoneNumber: '',
    fatherName: '',
    fatherPhoneNumber: '',
    motherName: '',
    motherPhoneNumber: '',
    localGuardian: '',
    localGuardianPhoneNumber: '',
    homeAddress: '',
    schoolCollegeName: '',
    examinationName: '',
    rollNumber: '',
    division: '',
    marksObtained: '',
    year: '',
    board: '',
    degreeMajorSubject: '',
    degreeMinorSubject: '',
    altEnglishOrMil: '',
    optionalPapers: '',
    vocationalStream: '',
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const [selectedType, setSelectedType] = useState('degree')

  return (
    <div>
      <div className="flex justify-center p-20">
        <form className="border border-cyan-600 lg:w-[900px] p-20">
          <p className="text-4xl pb-5">Application Form for 2024-25</p>
          <div className="grid lg:grid-cols-2 gap-7">
            <Field
              label="Full Name of the Applicant"
              id="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
            />
            <Field
              label="Date of Birth (as recorded in class X admit card)"
              id="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleInputChange}
            />
            <div className="flex flex-col">
              <label className="">Gender</label>
              <div className="flex gap-5">
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    id="male"
                    value="male"
                    name="gender"
                    onChange={handleInputChange}
                    checked={formData.gender === 'male'}
                  />
                  <label htmlFor="male">Male</label>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    id="female"
                    value="female"
                    name="gender"
                    onChange={handleInputChange}
                    checked={formData.gender === 'female'}
                  />
                  <label htmlFor="female">Female</label>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    id="other"
                    value="other"
                    name="gender"
                    onChange={handleInputChange}
                    checked={formData.gender === 'other'}
                  />
                  <label htmlFor="other">Other</label>
                </div>
              </div>
            </div>
            <Field
              label="Category (SC, ST, OBC, General, etc.)"
              id="category"
              value={formData.category}
              onChange={handleInputChange}
            />
            <Field
              label="Nationality"
              id="nationality"
              value={formData.nationality}
              onChange={handleInputChange}
            />
            <Field
              label="Phone Number"
              id="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
            />
            <Field
              label="Father Name"
              id="fatherName"
              value={formData.fatherName}
              onChange={handleInputChange}
            />
            <Field
              label="Father's Phone Number"
              id="fatherPhoneNumber"
              value={formData.fatherPhoneNumber}
              onChange={handleInputChange}
            />
            <Field
              label="Mother Name"
              id="motherName"
              value={formData.motherName}
              onChange={handleInputChange}
            />
            <Field
              label="Mother's Phone Number"
              id="motherPhoneNumber"
              value={formData.motherPhoneNumber}
              onChange={handleInputChange}
            />
            <Field
              label="Local Guardian (In Shillong)"
              id="localGuardian"
              value={formData.localGuardian}
              onChange={handleInputChange}
            />
            <Field
              label="Local Guardian's Phone Number"
              id="localGuardianPhoneNumber"
              value={formData.localGuardianPhoneNumber}
              onChange={handleInputChange}
            />
            <Field
              label="Home Address"
              id="homeAddress"
              value={formData.homeAddress}
              onChange={handleInputChange}
            />
            <Field
              label="Name and the place of school/college attended last"
              id="schoolCollegeName"
              value={formData.schoolCollegeName}
              onChange={handleInputChange}
            />
            <Field
              label="Name of examination last taken"
              id="examinationName"
              value={formData.examinationName}
              onChange={handleInputChange}
            />
            <Field
              label="Roll Number"
              id="rollNumber"
              value={formData.rollNumber}
              onChange={handleInputChange}
            />
            <Field
              label="Division"
              id="division"
              value={formData.division}
              onChange={handleInputChange}
            />
            <Field
              label="% of marks obtained"
              id="marksObtained"
              value={formData.marksObtained}
              onChange={handleInputChange}
            />
            <Field
              label="Year"
              id="year"
              value={formData.year}
              onChange={handleInputChange}
            />
            <Field
              label="Board"
              id="board"
              value={formData.board}
              onChange={handleInputChange}
            />
          </div>
          <div className="py-10">
            <div>
              <p className="text-center text-3xl">Subject</p>
              <div className="flex gap-20">
                <div className="flex items-center gap-3">
                  <input
                    checked={selectedType === 'degree' && true}
                    type="radio"
                    onChange={() => {
                      setSelectedType('degree')
                    }}
                    id="degree"
                    value="degree"
                    name="type"
                  />
                  <label htmlFor="degree">Degree</label>
                </div>
                <div className="flex items-center gap-3">
                  <input
                    checked={selectedType === 'xixii' && true}
                    type="radio"
                    onChange={() => {
                      setSelectedType('xixii')
                    }}
                    id="xixii"
                    value="class_xi_xii"
                    name="type"
                  />
                  <label htmlFor="xixii">Class XI/XII</label>
                </div>
              </div>
            </div>
          </div>

          {selectedType === 'xixii' ? ( // Class XI/XII
            <div>
              <div className="flex flex-col">
                <div>1. English</div>
                <div>
                  2. Alt. English/MIL
                  <br />
                  <input
                    type="text"
                    id="altEnglishOrMil"
                    name="altEnglishOrMil"
                    className="p-1 ml-4 px-3 border-2 border-cyan-600"
                    value={formData.altEnglishOrMil}
                    onChange={handleInputChange}
                  />
                </div>
                <div>3. Environmental Science</div>
                <div>
                  4. Optional Papers any three from the following:
                  <br />
                  Economics, Education, History, Music(Western), Psychology,
                  Political Science, Physical Education, Sociology
                  <br />
                  <input
                    type="text"
                    id="optionalPapers"
                    name="optionalPapers"
                    className="p-1 ml-4 px-3 border-2 border-cyan-600"
                    value={formData.optionalPapers}
                    onChange={handleInputChange}
                  />
                </div>

                <div>
                  Vocational Stream: Horticulture, Travel and Tourism Techniques
                  <br />
                  <input
                    type="text"
                    name="vocationalStream"
                    id="vocationalStream"
                    className="p-1 ml-4 px-3 border-2 border-cyan-600"
                    value={formData.vocationalStream}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
          ) : (
            // Degree
            <div>
              <div className="flex flex-col">
                <p className="">
                  <span className="text-lg font-semibold text-cyan-600">
                    Subjects: English, Economics, Education, History, Political
                    Science, Sociology, Philosophy
                  </span>
                </p>
                <p className="mt-4">
                  Enter any one of the subjects from above as your Major
                  Subject:
                </p>
                <input
                  type="text"
                  id={'degreeMajorSubject'}
                  name="degreeMajorSubject"
                  className="p-1 px-3 border-2 border-cyan-600 "
                  value={formData.degreeMajorSubject}
                  onChange={handleInputChange}
                />
                <p className="mt-4">
                  Enter any other subject as your Minor Subject(except Major
                  Subject):
                </p>
                <input
                  type="text"
                  id="degreeMinorSubject"
                  name="degreeMinorSubject"
                  className="p-1 px-3 border-2 border-cyan-600"
                  value={formData.degreeMinorSubject}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          )}

          <div className="flex justify-center mt-10">
            <button className="bg-cyan-600 text-white px-5 py-2 rounded-md">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ApplicationForm

const Field = ({ label, id, value, onChange }) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="">
        {label}
      </label>
      <input
        type="text"
        id={id}
        name={id}
        className="p-1 px-3 border-2 border-cyan-600 w-[300px]"
        value={value}
        onChange={onChange}
      />
    </div>
  )
}
