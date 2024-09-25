import Pagination from './Pagination' 
import TableHeader from './TableHeader' 
import SearchBar from './SearchBar' 
import TableRow from './TableRow' 

function Table({
  data, // The data to be displayed in the table
  handleSort, // Function to handle sorting the table by column
  handleDelete, // Function to handle deleting a row
  handleSearch, // Function to handle search input
  handleCheckboxChange, // Function to handle checkbox state for individual rows
  handleSelectAll, // Function to handle "Select All" checkbox
  selectedIds, // Array of selected row IDs (for checkboxes)
  allSelected, // Boolean to check if all rows are selected
  currentPage, // Current page number for pagination
  handlePrevious, // Function to go to the previous page
  handleNext, // Function to go to the next page
  sortField,
  sortOrder
}) {
  return (
    <div className='flex justify-center py-6 bg-purple-100'>

      <div className='max-w-3xl w-full p-2 bg-white shadow-lg rounded-lg'>
    
        <div className='-m-1.5 overflow-x-auto'>
          
          <div className='p-1.5 min-w-full inline-block align-middle'>
           

            <div className='border rounded-lg divide-y divide-gray-200'>
             
              <SearchBar handleSearch={handleSearch} />
              
              <div className='overflow-hidden'>
                <table className='min-w-full divide-y divide-gray-200'>
                 
                  <TableHeader
                    handleSort={handleSort}
                    handleSelectAll={handleSelectAll} 
                    allSelected={allSelected} 
                    sortField={sortField}
                    sortOrder={sortOrder}
                  />

                  {/* Table Body */}
                  <tbody className='divide-y divide-gray-200'>
                    
                    {data.map((person) => (
                      <TableRow
                        key={person.id} 
                        person={person} 
                        handleDelete={handleDelete} 
                        handleCheckboxChange={handleCheckboxChange} 
                        isSelected={selectedIds.includes(person.id)} 
                      />
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              <Pagination
                currentPage={currentPage}
                handlePrevious={handlePrevious} 
                handleNext={handleNext}
              />
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Table
