import React, { useState } from 'react'
import Swal from 'sweetalert2';

const Add = ({ categorys, setCategorys, setAdding }) => {
    const [firstName, setFirstName] = useState('')
    const [inventoryId, setinventoryId] = useState('');
    const [selectCategory, setSelectCategory] = useState('');
    const [parchaseDate, setParchaseDate] = useState('');
    const [warrantyExpDate, setWarrantyExpDate] = useState('');

    const handleAdd = e => {
        e.preventDefault();

        if (!firstName || !inventoryId || !selectCategory || !parchaseDate || !warrantyExpDate) {
            return Swal.fire({
              icon: 'error',
              title: 'Error!',
              text: 'All fields are required.',
              showConfirmButton: true,
            });
          }

        const id = categorys.length + 1;
        const newCategory = {
            id,
            firstName,
            inventoryId,
            selectCategory,
            parchaseDate,
            warrantyExpDate,
        };

        categorys.push(newCategory);
        localStorage.setItem('categoryData', JSON.stringify(categorys));
        setCategorys(categorys);
        setAdding(false);
    }

    return (
        <>
            <div class="row" style={{ justifyContent: "center" }}>
                <div class="col-sm-6 mt-5" >
                    <form onSubmit={handleAdd}>
                        <h1>Add Category</h1>
                        <div class="mb-3">
                            <label class="form-label"> Name</label>
                            <input
                                type="girstname"
                                class="form-control"
                                id="name"
                                autocomplete="off"
                                value={firstName}
                                onChange={e => setFirstName(e.target.value)}
                            />

                            <label class="form-label">Inventory Id</label>

                            <input
                                type="number"
                                class="form-control"
                                id="inventoryid"
                                autocomplete="off"
                                value={inventoryId}
                                onChange={e => setinventoryId(e.target.value)}
                            />

                            <label class="form-label">Select Category</label><br />
                            <select style={{ padding: 10, width: 300 }} name="cars" id="selectCategory" value={selectCategory}
                                onChange={e => setSelectCategory(e.target.value)}>
                                <option value="" >Select Category</option>
                                <option value="Car">Car</option>
                                <option value="Bike">Bike</option>
                                <option value="Phone">Phone</option>
                            </select><br />
                            <br />

                            <label class="form-label">Parchase Date</label>
                            <input
                                type="date"
                                class="form-control"
                                id="parchaseDate"
                                autocomplete="off"
                                value={parchaseDate}
                                onChange={e => setParchaseDate(e.target.value)}
                            />

                            <label class="form-label">Warranty Exp Date</label>
                            <input
                                type="date"
                                class="form-control"
                                id="warrantyexpdate"
                                autocomplete="off"
                                value={warrantyExpDate}
                                onChange={e => setWarrantyExpDate(e.target.value)}
                            />
                        </div>

                        <button style={{ marginTop: '1px' }} type="submit" class="btn btn-primary">Add</button>
                        <button style={{ marginLeft: '12px' }} type="button" class="btn btn-primary" onClick={() => setAdding(false)}>Cancel</button>

                    </form>
                </div>
            </div>
        </>
    )
}

export default Add;