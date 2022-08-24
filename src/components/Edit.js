import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Edit = ({ categorys, selectedCategory, setCategorys, setEditing }) => {
    const id = selectedCategory.id;
    const [firstName, setFirstName] = useState(selectedCategory.firstName);
    const [inventoryId, setinventoryId] = useState(selectedCategory.inventoryId);
    const [selectCategory, setSelectCategory] = useState(selectedCategory.selectCategory);
    const [parchaseDate, setParchaseDate] = useState(selectedCategory.parchaseDate);
    const [warrantyExpDate, setWarrantyExpDate] = useState(selectedCategory.warrantyExpDate);

    const Update = e => {
        e.preventDefault();
        if (!firstName || !inventoryId || !selectCategory || !parchaseDate || !warrantyExpDate) {
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'All fields are required.',
                showConfirmButton: true,
            });
        }

        const category = {
            id,
            firstName,
            inventoryId,
            selectCategory,
            parchaseDate,
            warrantyExpDate,
        };

        for (let i = 0; i < categorys.length; i++) {
            if (categorys[i].id === id) {
                categorys.splice(i, 1, category);
                break;
            }
        }

        localStorage.setItem('categorys_data', JSON.stringify(categorys));
        setCategorys(categorys);
        setEditing(false);

        Swal.fire({
            icon: 'success',
            title: 'Updated!',
            text: `${categorys.firstName} ${categorys.lastName}'s data has been updated.`,
            showConfirmButton: false,
            timer: 1500,
        });
    }

    return (
        <div class="row" style={{ justifyContent: "center" }}>
            <div class="col-sm-6 mt-5" >
                <form onSubmit={Update}>
                    <h1>Edit Category</h1>
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
                        <select style={{ padding: 10, width: 300 }} name="categoryars" id="selectCategory" value={selectCategory}
                            onChange={e => setSelectCategory(e.target.value)}>
                            <option value="" >Select Category</option>
                            <option value="Car">Car</option>
                            <option value="Bike">Bike</option>
                            <option value="Phone">Phone</option>
                        </select><br />

                        <label class="form-label">Parchase Date</label>
                        <input
                            type="date"
                            class="form-control"
                            id="date"
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

                    <button style={{ marginTop: '1px' }} className='gap-3' type="submit" class="btn btn-primary">Update</button>
                    <button style={{ marginLeft: '12px' }} type="button" class="btn btn-secondary" onClick={() => setEditing(false)}>Cancel</button>

                </form>
            </div>
        </div>
    )
}

export default Edit