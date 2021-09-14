import React, { useState } from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Addframe.css";
import userEvent from "@testing-library/user-event";

function Addframe() {
  const [data, setData] = useState({
    name: "",
    modlingnum: "",
    offset: "",
    category: "",
    material: "",
    price: "",
    width: "",
    height: "",
  });
  const [file, setFile] = useState("");
  const [image, setImage] = useState("");

  const inputEvent = (event) => {
    const { name, value } = event.target;
    setData((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  };

  const handleCategory = (event) => {
    const newVal = event.target.value;
    setData({ ...data, category: newVal });
  };

  const handleFileChange = (event) => {
    // const file = event.target.files[0];
    // console.log(file);
    setFile(URL.createObjectURL(event.target.files[0]));
  };
  console.log(file);
  const handleFile = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]));
  };

  const formSubmit = (e) => {
    e.preventDefault();

    alert(
      ` Frame Name is ${data.name}. Modeling is ${data.modlingnum}. Materials is ${data.material}
       .price is ${data.price}.width is ${data.width}. height is ${data.height}.offset is ${data.offset}. .category is ${data.category}`
    );
  };

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-md-2"></div>

          <div className="col-md-10 main-background">
            <h2 className="text-start fw-bold">Add Frame</h2>

            <div className="bg-light p-5">
              <div className="row">
                <div className="col-md-6 frame-contents">
                  <form className="form" onSubmit={formSubmit}>
                    <div className="form-group buttonupload">
                      <button type="upload" class="btn btn-dark">
                        Upload Images
                      </button>
                    </div>

                    <div className="form-group">
                      <label>Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        value={data.name}
                        onChange={inputEvent}
                        required
                      ></input>
                    </div>

                    <div className="form-group halfwidth">
                      <label for="customRange1" class="form-label ">
                        Offset
                      </label>
                      <input
                        type="number"
                        class="form-control "
                        name="offset"
                        value={data.offset}
                        onChange={inputEvent}
                      ></input>
                    </div>

                    <div className="form-group">
                      <label>Molding Num</label>
                      <input
                        type="text"
                        className="form-control"
                        required
                        name="modlingnum"
                        value={data.modlingnum}
                        onChange={inputEvent}
                      ></input>
                    </div>
                    <div
                      className="form-group"
                      required
                      name="category"
                      value={data.category}
                      onChange={inputEvent}
                    >
                      <label>Category</label>
                      <select class="form-select" onChange={handleCategory}>
                        <option selected>Choose any one..</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>

                    <div className="form-group halfwidth">
                      <label>Material</label>
                      <input
                        type="text"
                        className="form-control"
                        name="material"
                        value={data.material}
                        onChange={inputEvent}
                        required
                      ></input>
                    </div>

                    <div className="form-group halfwidth">
                      <label>Price</label>
                      <input
                        type="number"
                        className="form-control"
                        name="price"
                        value={data.price}
                        onChange={inputEvent}
                        required
                      ></input>
                    </div>

                    <div className="form-group thumbnail">
                      <label class="form-label ">Thumbnail</label>
                      <div className="thumbnail-content">
                        <img src={file} class="img-thumbnail" alt="..."></img>
                        <input
                          type="file"
                          class="form-control"
                          id="customFile"
                          onChange={handleFileChange}
                        />
                      </div>

                      {/* const ImageThumb = ({ image }) => {
  return <img src={URL.createObjectURL(image)} alt={image.name} />;
}; */}
                    </div>

                    <div className="form-group">
                      <fieldset>
                        <legend>Dimensions</legend>
                        <label for="width">Width</label>
                        <input
                          id="width"
                          name="width"
                          type="number"
                          value={data.width}
                          onChange={inputEvent}
                        />

                        <label for="height">Height</label>
                        <input
                          id="height"
                          name="height"
                          type="number"
                          value={data.height}
                          onChange={inputEvent}
                        />
                      </fieldset>
                    </div>
                    <div className="form-group">
                      <button
                        type="submit"
                        onclick="pushData();"
                        class="btn btn-dark"
                      >
                        Add Frame
                      </button>
                    </div>
                  </form>
                </div>

                <div className="col-md-6 text-center frame-img">
                  <div className="bg-secondary frame-image"></div>
                </div>
              </div>

              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Addframe;
