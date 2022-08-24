import React from 'react'

const List = ({ categorys, Edit, Delete }) => {

    categorys.forEach((category, i) => {
        category.id = i + 1;
    });
    return (
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">No</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Inventory Id</th>
                    <th scope="col">Category</th>
                    <th scope="col">Parchase Date</th>
                    <th scope="col">Warranty Exp Date</th>
                    <th colSpan={2}>Actions</th>
                </tr>
            </thead>
            <tbody>
                {categorys.length > 0 ? (
                    categorys.map((category, i) => (
                        <tr key={category.id}>
                            <th>{i + 1}</th>
                            <td>{category.firstName}</td>
                            <td>{category.inventoryId}</td>
                            <td>{category.selectCategory}</td>
                            <td>{category.parchaseDate}</td>
                            <td>{category.warrantyExpDate}</td>
                            <td className="text-right">
                                <button
                                    onClick={() => Edit(category.id)}
                                    class="btn btn-success"
                                >
                                    Edit
                                </button>
                            </td>
                            <td className="text-left">
                                <button
                                    onClick={() => Delete(category.id)}
                                    class="btn btn-danger"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan={5}>No categorys</td>
                    </tr>
                )}

            </tbody>
        </table>
    )
}

export default List