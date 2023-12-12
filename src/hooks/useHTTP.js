import axios from "axios"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import { BaseUrl } from "../env/env"
const useHTTP = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")
    const [original, setOriginal] = useState({})
    const getData = async () => {
        const res = await axios.get(BaseUrl)
        console.log(res.data)
        setData(res.data)
        setLoading(false)
    }

    useEffect(() => {
        getData()
    }, [])

    const deleteData = (id) => {
        let item = data.find(item => item.id == id)
        data.splice(data.indexOf(item), 1)
        setData([...data])
        toast.success("Item silindi")
    }

    const handleSearch = (e) => {
        let search = e.target.value.trim().toLowerCase();
        if (search == "") {
            setData([...data]);
        } else {
            let searchItems = data.filter((item) =>
                item.name.trim().toLowerCase().includes(search)
            );
            setData([...searchItems]);
        }
    }

    return { data, loading, error, deleteData, handleSearch, setData, original }
}

export default useHTTP