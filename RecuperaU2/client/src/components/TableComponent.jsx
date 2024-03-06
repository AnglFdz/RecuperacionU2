import React from 'react'
import Datatable from 'react-data-table-component'
import { Spinner } from 'flowbite-react'
const options = {
    rowPerPageText: 'Registros por paginas'
}
function TableComponent(props) {
    const [columns, data, onSort, progress] = props;

    const Loading = ()=>{
        return <div className='flex flex-grap gap-2'>
            <div className='text-center'>
                <Spinner size={xl}/>
            </div>
        </div>
    }
  return (

            <Datatable
            columns={columns}
            data={data}
            pagination
            paginationComponentOptions={options}
            noDataComponent={"Sin registros..."}

            onSort={onSort}
            progressPending={progress}
            progressComponent={<Loading/>}/>
  )
}

export default TableComponent