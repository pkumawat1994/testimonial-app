import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useForm } from "react-hook-form";
import TestimonialCard from "../../components/Testimonial/TestimonialCard";
import { InstanceUrl } from "../../service/Config";
import { toast } from "react-toastify";

const TestimonialSection = () => {
  const [allData, setAllData] = useState([]);
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const mySubmit = (data) => {
    console.log(222, data.Photo[0].name);
    const formData = new FormData();
    formData.append("Name", data.Name);
    formData.append("Post", data.Post);
    formData.append("Description", data.Description);
    formData.append("Photo", data.Photo[0]);
    formData.append("Active", data.Active === false ? "0" : "1");
    console.log(Object.fromEntries(formData));
    InstanceUrl.post("post", formData)
      .then((res) => {
        if (res.status === 201) {
          toast.success(res.statusText);
          reset();
        }
      })
      .catch((err) => err);
  };

  const settings = {
    autoplay: true,
    pauseOnHover: false,
    infinite: true,
    autoplaySpeed: 3000,
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const getData = () => {
    InstanceUrl.get(`all`)
      .then((res) => setAllData(res.data))
      .catch((err) => err);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <section id="testimonial" class="testimonial-area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title text-center pb-10">
                <h4 className="title">Testimonial</h4>
                <p className="text">
                  Stop wasting time and money designing and managing a website
                  that doesnt get results. Happiness guaranteed!
                </p>
                <button
                  type="button"
                  className="btn btn-primary"
                  data-toggle="modal"
                  data-target="#exampleModal"
                >
                  Add Testimonial
                </button>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <Slider {...settings}>
                {allData?.map((ele, i) => {
                  return (
                    <>
                      <TestimonialCard ele={ele} i={i} />
                    </>
                  );
                })}
              </Slider>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------MODEL VIEW --------------------- */}
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
              <form onSubmit={handleSubmit(mySubmit)}>
                <div className="form-group">
                  <input
                    className="form-control m-2"
                    placeholder="Enter Name"
                    type="text"
                    {...register("Name", { required: "name is required" })}
                  />
                  <p style={{ color: "red" }}>
                    {" "}
                    {errors.Name && errors.Name.message}
                  </p>
                  <br />
                  <textarea
                    rows="4"
                    cols="22"
                    className="form-control m-2"
                    type="text"
                    placeholder="Description"
                    {...register("Description", {
                      required: "Description is required",
                    })}
                  />
                  {errors.Description && (
                    <p style={{ color: "red" }}>{errors.Description.message}</p>
                  )}
                  <br />
                  <input
                    className="form-control m-2"
                    placeholder="Post"
                    type="text"
                    {...register("Post", {
                      required: "Post is required",
                    })}
                  />
                  <p style={{ color: "red" }}>
                    {errors.Post && errors.Post.message}
                  </p>
                  <br />
                  <input
                    className="form-control"
                    type="file"
                    {...register("Photo", {
                      required: "Photo is required",
                    })}
                  />
                  <p style={{ color: "red" }}>
                    {errors.Photo && errors.Photo.message}
                  </p>
                  <br />
                  <label className="switch">
                    <input
                      className="form-control"
                      type="checkbox"
                      {...register("Active")}
                    />
                    <span className="slider round"></span>
                  </label>
                  <br />
                  <button type="submit" className="btn btn-primary">
                    Add Testimonial
                  </button>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button
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

export default TestimonialSection;
