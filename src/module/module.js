import { useState } from "react";
import Navbar from '../navbar/navbar';
import axios from "axios";
export default function Artikel() {
    const [inputs, setInputs] = useState({})
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));

    }
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8888/api/artikel/save', inputs);
        console.log(inputs);

    }
    return (
        <div>
            <Navbar />
            <h1>Artikel</h1>
            <form onSubmit={handleSubmit}>
            <table cellSpacing="10">
                <tbody>
                    <tr>
                        <th>
                        <label>Judul: </label>
                        </th>
                        <td>
                        <input type="text" name="judul" onChange={handleChange} />
                        </td>
                    </tr>

                    <tr>
                        <th>
                        <label>Deskripsi: </label>
                        </th>
                        <td>
                        <input type="text" name="desk" onChange={handleChange} />
                        </td>
                    </tr>
                
                    <tr>
                        <th>
                        <label>link: </label>
                        </th>
                        <td>
                        <input type="link" name="link" onChange={handleChange} />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2" align="right">
                        <button>Tambah</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            </form>
        </div>
    )
}