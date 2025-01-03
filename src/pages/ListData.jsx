const ListData = ({ type, setData, handleEdit, data = [] }) => {
    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete")) {
            const newData = [...data];
            newData.splice(id, 1);
            setData(newData);
            return newData;
        }
    };
    // const handleEdit = (id) => {};
    return (
        <div className="table-data">
            <table>
                <thead>
                    <tr>
                        <th>Country Code</th>
                        <th>Country Name</th>
                        <th>Capital City</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.length !== 0 ? (
                        data.map((item, index) => (
                            <tr key={index}>
                                <td>{item.countryCode}</td>
                                <td>{item.countryName}</td>
                                <td>{item.capitalCity}</td>
                                <td className="action">
                                    <span className="action_data" onClick={() => handleEdit(index)}>
                                        Modify
                                    </span>{" "}
                                    |{" "}
                                    <span className="action_data" onClick={() => handleDelete(index)} href="#!">
                                        Delete
                                    </span>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td align="center" colSpan={4}>
                                Không có dữ liệu
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default ListData;
