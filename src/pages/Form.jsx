import { useRef, useState } from "react";

const Form = ({ type, data, setData, editId }) => {
    const [code, setCode] = useState("");
    const [name, setName] = useState("");
    const [city, setCity] = useState("");
    const nameRef = useRef(null);
    const codeRef = useRef(null);
    const cityRef = useRef(null);

    const handleSubmit = () => {
        if (!code) {
            window.alert("Vui lòng nhập Country Code");
            codeRef.current.style.outline = "2px solid red";
            codeRef.current.focus();
        } else if (!name) {
            window.alert("Vui lòng nhập Country Name");
            nameRef.current.style.outline = "2px solid red";
            nameRef.current.focus();
        } else if (!city) {
            window.alert("Vui lòng nhập Capital City");
            cityRef.current.style.outline = "2px solid red";
            cityRef.current.focus();
        } else {
            const newData = [...data];
            newData.push({ countryName: name, countryCode: code, capitalCity: city });
            setCode("");
            setName("");
            setCity("");
            codeRef.current.focus();
            setData(newData);
        }
    };
    return (
        <>
            <div className="form dfcenter">
                <form action="#">
                    <div className="form-group">
                        <label htmlFor="code">Country Code:</label>
                        <input
                            ref={codeRef}
                            type="text"
                            value={code}
                            id="code"
                            onChange={(e) => {
                                codeRef.current.style = "";
                                setCode(e.target.value);
                            }}
                            placeholder="Enter Country Code"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Country Name:</label>
                        <input
                            ref={nameRef}
                            type="text"
                            value={name}
                            id="name"
                            onChange={(e) => {
                                nameRef.current.style = "";
                                setName(e.target.value);
                            }}
                            placeholder="Enter Country Name"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="city">Capital City:</label>
                        <input
                            ref={cityRef}
                            type="text"
                            value={city}
                            id="city"
                            onChange={(e) => {
                                cityRef.current.style = "";
                                setCity(e.target.value);
                            }}
                            placeholder="Enter Capital City"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor=""></label>
                        <button type="button" className="btn" onClick={handleSubmit}>
                            {type === "add" ? "Add new" : "Update new"}
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Form;
