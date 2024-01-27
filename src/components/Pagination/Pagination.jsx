import React from 'react'

const Pagination = ({ setCurrentPage, currentPage, setSize, totalPages }) => {
    //All Paginations Oprations are here
    return (
        <div className='d-flex p-2 flex-row' style={{ display: "flex", alignItems: "baseline", justifyContent: "center" }}>
            <p style={{ paddingRight: "10px" }}>Show</p>
            <select name="cars" id="cars" onClick={(e) => setSize(e.target.value)}>
                <option value={2}>2</option>
                <option value={4}>4</option>
                <option value={6}>6</option>
                <option value={8}>8</option>
                <option value={10}>10</option>
            </select>
            <p style={{ padding: "0 10px" }}>items per page</p>

            <button style={{ margin: "0 10px" }} onClick={() => setCurrentPage((prev) => prev + 1)}>Next</button>
            <button style={{ margin: "0 10px" }} onClick={() => setCurrentPage(0)}>First</button>

            <input value={currentPage + 1} disabled style={{ width: "50px" }} />

            <button style={{ margin: "0 10px" }} onClick={() => setCurrentPage(totalPages - 1)}>last</button>
            <button style={{ margin: "0 10px" }} onClick={() => setCurrentPage((prev) => prev - 1)} disabled={currentPage<=1}>Previous</button>
        </div>
    )
}

export default Pagination