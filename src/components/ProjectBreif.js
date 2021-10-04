import React from "react";

const ProjectBreif = (props) => {
  // let randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return (
    <>
      <section
        className="project_breif_snag  "
        // style={{ backgroundColor: "#" + `${props.randomColor}` }}
        style={{ backgroundColor: props.bg }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-lg-8 col-12  ">
              <div>
                <h1 className="project_breif_Heading">PROJECT BRIEF</h1>
                <p className="project_breif_para">{props.description}</p>
                <br />
                <p className="project_breif_para">{props.description2}</p>

              </div>
            </div>
            <div className="col-md-4 col-lg-4 col-12">
              <div>
                <p className="project_breif_rightPara">
                  <span> DELIVERABLES:</span>
                </p>
                <ul className="list-unstyled project_breif_rightPara pt-0">
                  <li>{props.deliverables1}</li>
                  <li>{props.deliverables2}</li>
                  <li>{props.deliverables3}</li>
                  <li>{props.deliverables4}</li>
                  <li>{props.deliverables5}</li>
                  <li>{props.deliverables6}</li>
                  <li>{props.deliverables7}</li>
                  <li>{props.deliverables8}</li>
                  <li>{props.deliverables9}</li>
                  <li>{props.deliverables10}</li>
                  <li>{props.deliverables11}</li>
                  <li>{props.deliverables12}</li>
                  <li>{props.deliverables13}</li>
                  <li>{props.deliverables14}</li>
                  <li>{props.deliverables15}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectBreif;
