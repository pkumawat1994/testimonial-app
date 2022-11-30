import React, { useEffect, useState } from "react";
import { InstanceUrl } from "../../service/Config";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useFileUpload } from "use-file-upload";

const TestimonialTable = () => {
  const [allData, setAllData] = useState([]);
  const [editDataView, setEditDataView] = useState(null);
  // const [fileView, setFileView] = useState(false);
  const [imgData, setImageData] = useState(null);
  const [files, selectFiles] = useFileUpload();

  // console.log(55555555, files);

  const {
    register,
    setValue,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const updateSubmit = (data) => {
    console.log("comeData", data);
    console.log(222, files?.file);
    const formData = new FormData();
    formData.append("Name", data.Name);
    formData.append("Post", data.Post);
    formData.append("Description", data.Description);
    formData.append("Photo", files?.file);
    formData.append("Active", data.Active === false ? "0" : "1");
    // console.log("update_dataaaaaa", Object.fromEntries(formData));
    console.log("idddddd", editDataView?._id);
    let ID = editDataView?._id;
    console.log("myIDDDD", ID);
    InstanceUrl.put(`update/${ID}`, formData)
      .then((res) => {
        if (res.status === 200) {
          toast.success(" Testimonial Updated Successfully....");
          reset();
          selectFiles();
          let getModelId = document.getElementById("close-btn");
          getModelId.click();
          getAllJsonData();
        }
        selectFiles(null);
        console.log("iamgSatae", imgData);
      })
      .catch((err) => console.log("UPDT_errr", err));
  };

  const getAllJsonData = () => {
    InstanceUrl.get(`all`)
      .then((res) => {
        if (res?.status === 200) {
          setAllData(res.data);
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAllJsonData();
  }, []);

  const deleteItem = async (id) => {
    const response = await InstanceUrl.delete(`delete/${id}`);
    console.log("Del_respo", response);
    try {
      if (response?.status === 200) {
        toast.success(response?.data?.success);
        getAllJsonData();
      }
    } catch (err) {
      console.log(err);
    }
  };
  const editData = (el) => {
    setEditDataView(el);
  };
  useEffect(() => {
    console.log("editdataView", editDataView);
    if (editDataView?._id) {
      setValue("Name", editDataView?.Name);
      setValue("Post", editDataView?.Post);
      setValue("Description", editDataView?.Description);
      setValue("Active", editDataView?.Active === 1 ? true : false);
    }
  }, [editDataView]);
  // const changeImage = (e) => {
  //   console.log("clickkkedd");
  //   var inptref = document.getElementById("myfile");
  //   inptref.click();
  //   setFileView(true);
  //   console.log(555555, inptref);
  //   // setImageData(e.target.file[0]);
  // };
  return (
    <>
      <table class="table table-dark">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Profile-pic</th>
            <th scope="col">Name</th>
            <th scope="col">Post</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {allData?.map((ele, i) => {
            return (
              <tr>
                <th scope="row">{i + 1}</th>
                <td>
                  <img
                    src={`https://dssdssd.herokuapp.com/${ele.filePath}`}
                    alt="profile-pic"
                    className="tbl-img"
                  />
                </td>
                <td>{ele.Name}</td>
                <td>{ele.Post}</td>
                <td>
                  <button
                    className="btn btn-danger mr-2"
                    onClick={() => deleteItem(ele?._id)}
                  >
                    Delete
                  </button>
                  <button
                    className="btn btn-warning"
                    data-toggle="modal"
                    data-target="#exampleModal"
                    onClick={() => editData(ele)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* -----------------------MODEL-------------------------- */}
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Add Testimonial
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit(updateSubmit)}>
                <div className="form-group">
                  <input
                    className=" form-control "
                    placeholder="Enter Name"
                    type="text"
                    {...register("Name", { required: "name is required" })}
                  />
                  <p style={{ color: "red" }}>
                    {errors.Name && errors.Name.message}
                  </p>
                </div>
                <br />
                <div className="form-group">
                  <textarea
                    rows="4"
                    cols="22"
                    className=" form-control "
                    type="text"
                    placeholder="Description"
                    {...register("Description", {
                      required: "Description is required",
                    })}
                  />
                  {errors.Description && (
                    <p style={{ color: "red" }}>{errors.Description.message}</p>
                  )}
                </div>
                <br />
                <div className="form-group">
                  <input
                    className="form-control "
                    placeholder="Post"
                    type="text"
                    {...register("Post", {
                      required: "Post is required",
                    })}
                  />
                  <p style={{ color: "red" }}>
                    {errors.Post && errors.Post.message}
                  </p>
                </div>

                <br />

                <button
                  className="img-btn"
                  onClick={() =>
                    selectFiles(
                      { accept: "image/*" },
                      ({ name, size, source, file }) => {
                        setImageData(files?.source);
                        // console.log("Files Selected", {
                        // name,
                        // size,
                        // source,
                        // file,
                        // });
                      }
                    )
                  }
                >
                  {/* <input
                    id="myfile"
                    type="file"
                    {...register("Photo", {
                      value: imgData,
                    })}
                  /> */}
                  <img
                    className="edit-img"
                    src={
                      files?.source ||
                      `https://dssdssd.herokuapp.com/${editDataView?.filePath}`
                    }
                    alt="preview"
                  />
                  {console.log("immgggggg", editDataView?.filePath)}
                  {console.log("immgggggg3333333", files?.source)}
                </button>
                {/* {editDataView ? ( */}
                {/* <> */}
                {/* <img
                      onClick={(e) => changeImage(e)}
                      className="edit-img"
                      src={
                        fileView
                          ? imgData
                          : `https://dssdssd.herokuapp.com/${editDataView.filePath}`
                      }
                      alt="edit_img"
                    />
                  </>
                ) : null} */}

                {/* <p style={{ color: "red" }}>
                  {errors.Photo && errors.Photo.message}
                </p> */}
                <br />
                <label className="switch">
                  <input type="checkbox" {...register("Active")} />
                  <span className="slider round"></span>
                </label>
                <br />
                <div class="d-grid gap-2 col-6 mx-auto mbtn">
                  <button type="submit" className="btn btn-primary">
                    Update Testimonial
                  </button>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                id="close-btn"
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialTable;
