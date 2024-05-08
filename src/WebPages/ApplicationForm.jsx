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
      <div className='flex justify-center p-20'>
        <form className='border border-cyan-600 lg:w-[900px] p-20'>
          <p className='text-4xl pb-5'>Application Form for 2024-25</p>
          <div className='grid lg:grid-cols-2 gap-7'>
            <Field
              label='Full Name of the Applicant'
              id='fullName'
              value={formData.fullName}
              onChange={handleInputChange}
            />
            <Field
              label='Date of Birth (as recorded in class X admit card)'
              id='dateOfBirth'
              value={formData.dateOfBirth}
              onChange={handleInputChange}
            />
            <div className='flex flex-col'>
              <label className=''>Gender</label>
              <div className='flex gap-5'>
                <div className='flex items-center gap-2'>
                  <input
                    type='radio'
                    id='male'
                    value='male'
                    name='gender'
                    onChange={handleInputChange}
                    checked={formData.gender === 'male'}
                  />
                  <label htmlFor='male'>Male</label>
                </div>
                <div className='flex items-center gap-2'>
                  <input
                    type='radio'
                    id='female'
                    value='female'
                    name='gender'
                    onChange={handleInputChange}
                    checked={formData.gender === 'female'}
                  />
                  <label htmlFor='female'>Female</label>
                </div>
                <div className='flex items-center gap-2'>
                  <input
                    type='radio'
                    id='other'
                    value='other'
                    name='gender'
                    onChange={handleInputChange}
                    checked={formData.gender === 'other'}
                  />
                  <label htmlFor='other'>Other</label>
                </div>
              </div>
            </div>
            <Field
              label='Category (SC, ST, OBC, General, etc.)'
              id='category'
              value={formData.category}
              onChange={handleInputChange}
            />
            <Field
              label='Nationality'
              id='nationality'
              value={formData.nationality}
              onChange={handleInputChange}
            />
            <Field
              label='Phone Number'
              id='phoneNumber'
              value={formData.phoneNumber}
              onChange={handleInputChange}
            />
            <Field
              label='Father Name'
              id='fatherName'
              value={formData.fatherName}
              onChange={handleInputChange}
            />
            <Field
              label="Father's Phone Number"
              id='fatherPhoneNumber'
              value={formData.fatherPhoneNumber}
              onChange={handleInputChange}
            />
            <Field
              label='Mother Name'
              id='motherName'
              value={formData.motherName}
              onChange={handleInputChange}
            />
            <Field
              label="Mother's Phone Number"
              id='motherPhoneNumber'
              value={formData.motherPhoneNumber}
              onChange={handleInputChange}
            />
            <Field
              label='Local Guardian (In Shillong)'
              id='localGuardian'
              value={formData.localGuardian}
              onChange={handleInputChange}
            />
            <Field
              label="Local Guardian's Phone Number"
              id='localGuardianPhoneNumber'
              value={formData.localGuardianPhoneNumber}
              onChange={handleInputChange}
            />
            <Field
              label='Home Address'
              id='homeAddress'
              value={formData.homeAddress}
              onChange={handleInputChange}
            />
            <Field
              label='Name and the place of school/college attended last'
              id='schoolCollegeName'
              value={formData.schoolCollegeName}
              onChange={handleInputChange}
            />
            <Field
              label='Name of examination last taken'
              id='examinationName'
              value={formData.examinationName}
              onChange={handleInputChange}
            />
            <Field
              label='Roll Number'
              id='rollNumber'
              value={formData.rollNumber}
              onChange={handleInputChange}
            />
            <Field
              label='Division'
              id='division'
              value={formData.division}
              onChange={handleInputChange}
            />
            <Field
              label='% of marks obtained'
              id='marksObtained'
              value={formData.marksObtained}
              onChange={handleInputChange}
            />
            <Field
              label='Year'
              id='year'
              value={formData.year}
              onChange={handleInputChange}
            />
            <Field
              label='Board'
              id='board'
              value={formData.board}
              onChange={handleInputChange}
            />
          </div>
          <div className='py-10'>
            <div>
              <p className='text-center text-3xl'>Subject</p>
              <div className='flex gap-20'>
                <div className='flex items-center gap-3'>
                  <input
                    checked={selectedType === 'xixii' && true}
                    type='radio'
                    onChange={(e) => {
                      setSelectedType('xixii')
                    }}
                    id='xixii'
                    value='class_xi_xii'
                    name='type'
                  />
                  <label htmlFor='xixii'>Class XI/XII</label>
                </div>
                <div className='flex items-center gap-3'>
                  <input
                    checked={selectedType === 'degree' && true}
                    type='radio'
                    onChange={(e) => {
                      setSelectedType('degree')
                    }}
                    id='degree'
                    value='degree'
                    name='type'
                  />
                  <label htmlFor='degree'>Degree</label>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ApplicationForm

const Field = ({ label, id, value, onChange }) => {
  return (
    <div className='flex flex-col'>
      <label htmlFor={id} className=''>
        {label}
      </label>
      <input
        type='text'
        id={id}
        className='p-1 px-3 border-2 border-cyan-600 w-[300px]'
        value={value}
        onChange={onChange}
      />
    </div>
  )
}
