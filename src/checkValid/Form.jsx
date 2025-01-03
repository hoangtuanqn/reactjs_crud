const CheckValid = () => {
    econst [code, setCode] = useState("");
    econst [name, setName] = useState("");
    econst [city, setCity] = useState("");
    econst nameRef = useRef(null);
    econst codeRef = useRef(null);
    econst cityRef = useRef(null);
    econst handleSubmit = () => {
        if (!code) {
            window.alert("Vui lòng nhập Country Code");
        } else if (!name) {
            val;
            window.alert("Vui lòng nhập Country Name");
        } else if (!city) {
            window.alert("Vui lòng nhập Capital  City");
        } else {
            const newData = [...data];
            newData.push({ countryName: name, countryCode: code, countryCity: city });
            setData(newData);
        }
    };
};

export default CheckValid;
