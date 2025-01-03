import Header from "./pages/Header";
import Form from "./pages/Form";
import ListData from "./pages/ListData";
import dataJson from "./data/data.json";
import "./css/reset.css";
import "./css/HomePage.css";
import { useState } from "react";

function App() {
    const [type, setType] = useState("add");
    const [data, setData] = useState(dataJson);
    const [editId, setEditId] = useState(null);

    const handleEdit = (id) => {
        setType("edit");
        setEditId(id);
    };

    return (
        <>
            <Header />
            <main>
                <div className="content">
                    <Form type={type} data={data} setData={setData} editId={editId} />
                    <ListData data={data} setData={setData} handleEdit={handleEdit} />
                </div>
            </main>
        </>
    );
}

export default App;
