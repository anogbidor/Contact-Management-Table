function TableHeader({
  handleSort, // Function to handle sorting for each column
  sortField, // Current field being sorted
  sortOrder, // Current sort order ('asc' for ascending, 'desc' for descending)
  handleSelectAll, // Function to handle the "Select All" checkbox
  allSelected, // Boolean indicating if all rows are selected
}) {
  // Function to determine which sort icon to display next to the column header
  const getSortIcon = (field) => {
    if (sortField === field) {
      // If the current field matches the sortField
      return sortOrder === 'asc' ? '▲' : '▼' // Show ascending or descending icon based on sortOrder
    }
    return '' // Return empty string (no icon) if the field is not being sorted
  }

  return (
    <thead className='bg-purple-500 text-white'>
      {/* Table header with blue background and white text */}
      <tr>
        <th className='py-3 px-4 pe-0'>
          <div className='flex items-center h-5'>
            {/* "Select All" checkbox */}
            <input
              id='hs-table-pagination-checkbox-all'
              type='checkbox'
              className='border-gray-200 rounded text-blue-600 focus:ring-blue-500'
              onChange={handleSelectAll} // Calls the function to select/deselect all rows
              checked={allSelected} // Determines if the checkbox is checked based on allSelected value
            />
            <label
              htmlFor='hs-table-pagination-checkbox-all'
              className='sr-only'
            >
              Select All
            </label>
          </div>
        </th>

        {/* Sortable Name column header */}
        <th
          className='px-6 py-3 text-start text-xs font-medium uppercase cursor-pointer'
          // Calls the sorting function when clicked, sorting by 'name'
        >
          <span className='cursor-pointer' onClick={() => handleSort('name')}>
            Name {getSortIcon('name')}
          </span>
          {/* Displays the sort icon based on the current sort state */}
        </th>

        {/* Sortable Email column header */}
        <th
          className='px-6 py-3 text-start text-xs font-medium uppercase cursor-pointer'
          // Calls the sorting function for the 'email' column
        >
          <span className='cursor-pointer' onClick={() => handleSort('email')}>
            Email {getSortIcon('email')}
          </span>
          {/* Displays the sort icon for the 'email' field */}
        </th>

        {/* Sortable Company column header */}
        <th
          className='px-6 py-3 text-start text-xs font-medium uppercase cursor-pointer'
          // Calls the sorting function for the 'company' column
        >
          <span
            className='cursor-pointer'
            onClick={() => handleSort('company')}
          >
            Company {getSortIcon('company')}
          </span>
          {/* Displays the sort icon for the 'company' field */}
        </th>

        {/* Action column header (non-sortable) */}
        <th className='px-6 py-3 text-end text-xs font-medium uppercase'>
          Action{' '}
          {/* Header for the action buttons (e.g., delete) in the table rows */}
        </th>
      </tr>
    </thead>
  )
}

export default TableHeader
