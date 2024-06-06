import { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import axios from "axios";
export default function Artikel() {
  const [inputs, setInputs] = useState({});
  const handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }));
  };
  const handleSubmit = event => {
    event.preventDefault();
    axios.post("http://localhost:8888/api/artikel/save", inputs);
    console.log(inputs);
  };
  return (
    <>
      <div className="home container-fluid p-0 ">
        <Navbar />
        <div className="container navbar-content text-start">
          <div className="row">
            <div className="col">
              <h1>Artikel</h1>
              <form onSubmit={handleSubmit}>
                <div className="mb-1">
                  <label for="judul" className="form-label">
                    Judul
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="judul"
                    name="judul"
                    onChange={handleChange}
                    placeholder="judul"
                  />
                </div>
                <div className="mb-1">
                  <label for="deskripsi" className="form-label">
                    Deskripsi
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="deskripsi"
                    name="deskripsi"
                    onChange={handleChange}
                    placeholder="deskripsi"
                  />
                </div>
                <div className="mb-1">
                  <label for="link" className="form-label">
                    Link
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="link"
                    name="link"
                    onChange={handleChange}
                    placeholder="link"
                  />
                </div>
                <div className="text-end">
                  <button className="btn btn-primary">Tambah</button>
                </div>
              </form>
            </div>
            <div className="col"></div>
          </div>
        </div>
      </div>
    </>
  );
}
