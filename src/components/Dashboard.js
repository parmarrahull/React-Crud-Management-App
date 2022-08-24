import React, { useEffect, useState } from 'react'
import Add from './Add'
import Edit from './Edit'
import Header from './Header'
import List from './List'
import { categoryData } from '../data/index.js'

const Dashboard = () => {
    const [categorys, setCategorys] = useState(categoryData);
    const [selectedCategory, setSelectedCategory] = useState(null)
    const [adding, setAdding] = useState(false)
    const [editing, setEditing] = useState(false);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('categorys_data'));
        if (data !== null && Object.keys(data).length !== 0) setCategorys(data);
    }, []);


    const handleEdit = id => {
        const [category] = categorys.filter(category => category.id === id);
        setSelectedCategory(category);
        setEditing(true)
    };

    const handleDelete = id => {
        if (window.confirm("Are you sure to delete this record ?")) {
            const categoryCopy = categorys.filter(category => category.id !== id);
            localStorage.setItem('categorys_data', JSON.stringify(categoryCopy));
            setCategorys(categoryCopy);
        }
    }

    return (
        <div>
            {!adding && !editing && (
                <>
                    <Header
                        setAdding={setAdding}
                    />
                    <List
                        categorys={categorys}
                        Edit={handleEdit}
                        Delete={handleDelete}
                    />
                </>
            )}
            {adding && (
                <Add
                    categorys={categorys}
                    setCategorys={setCategorys}
                    setAdding={setAdding}
                />
            )}
            {editing && (
                <Edit
                    categorys={categorys}
                    selectedCategory={selectedCategory}
                    setCategorys={setCategorys}
                    setEditing={setEditing}
                />
            )}
        </div>
    )
}

export default Dashboard