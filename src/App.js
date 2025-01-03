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
        if (id === null) {
            setType("add");
        } else {
            setType("edit");
        }
        setEditId(id);
    };
    const payloadData = {
        type,
        data,
        setData,
        editId,
        handleEdit,
    };
    return (
        <>
            <Header />
            <main>
                <div className="content">
                    <Form {...payloadData} />
                    <ListData {...payloadData} />
                </div>
            </main>
        </>
    );
}

export default App;
