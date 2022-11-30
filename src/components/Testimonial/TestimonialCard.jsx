import React, { useState } from "react";
import { InstanceUrl } from "../../service/Config";
import "./Testimonial.css";
const TestimonialCard = ({ ele, getData }) => {
  const [editView, setEditView] = useState(false);
  const handleDoubleClick = () => {
    setEditView(true);
  };
  const deleteItem = async (id) => {
    // alert(i);
    // const res = InstanceUrl.delete(`delete/${id}`);
    // try{
    //   res
    // }catch{

    // }

    await InstanceUrl.delete(`delete/${id}`).then((res) => console.log(res));
    getData();
  };
  return (
    <div className="col-lg-4 ">
      <div className="single-testimonial mt-30 mb-30 text-center a">
        <div className="testimonial-image">
          <img
            className="testmonial-image"
            src={`https://dssdssd.herokuapp.com/${ele.filePath}`}
            alt="Author"
          />
        </div>
        <div className="testimonial-content" onDoubleClick={handleDoubleClick}>
          <p className="text">{ele.Description}</p>
          <h6 className="author-name">{ele.Name}</h6>
          <span className="sub-title">{ele.Post}</span>
        </div>
        {editView ? (
          <div className="testimonial-content">
            <button
              className="btn btn-danger"
              onClick={() => deleteItem(ele._id)}
            >
              Delete
            </button>
            &nbsp;
            <button className="btn btn-warning">Edit</button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default TestimonialCard;
