

function TableRow({ person, handleDelete, handleCheckboxChange, isSelected }) {
  return (
    <tr>
      {/* Checkbox Column for selecting individual rows */}
      <td className='py-3 ps-4'>
        <div className='flex items-center h-5'>
          {/* Checkbox input to select/unselect this row */}
          <input
            type='checkbox'
            className='border-gray-200 rounded text-blue-600 focus:ring-blue-500'
            onChange={() => handleCheckboxChange(person.id)} // Call function to handle checkbox changes
            checked={isSelected} // Checked state is controlled by the 'isSelected' prop
          />
          <label className='sr-only'>Checkbox</label>
          {/* Label for accessibility */}
        </div>
      </td>

      {/* Name Column */}
      <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-700'>
        {person.name} 
      </td>

      {/* Email Column */}
      <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-700'>
        {person.email} 
      </td>

      {/* Company Column */}
      <td className='px-6 py-4 whitespace-nowrap text-sm text-purple-800'>
        {person.company} 
      </td>

      {/* Action Column: Delete Button */}
      <td className='px-6 py-4 whitespace-nowrap text-end text-sm font-medium'>
        <button
          type='button'
          className='inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-red-500 hover:text-purple-600 focus:outline-none'
          onClick={() => handleDelete(person.id)} 
        >
          
          <svg
            className='w-5 h-5'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
           
            <path d='M3 6h18' />
            <path d='M19 6l-1 14H6L5 6' /> 
            <path d='M10 11v6' /> 
            <path d='M14 11v6' />{' '}
            
          </svg>
        </button>
      </td>
    </tr>
  )
}

export default TableRow
