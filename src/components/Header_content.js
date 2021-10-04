import React from 'react';

const Header_content = (props) => {
    return (
        <>
         <section className="header_snag" style={{backgroundColor: props.bg_color}}>
        <div className="container ">
          <h1 className="headerH1">
            {props.des1}{">>"} <span>{props.spanDes}</span>
          </h1>
          <p className="headerPara">
           {props.para}
          </p>
        </div>
      </section>
      
      <section className="headerImg_snag d-flex justify-content-center align-items-center  " style={{ background: props.bg_linearG }}>
        <div>
          <img
            src={props.img}
            className="img-fluid"
            alt="img"
          />
        </div>
      </section>
            
        </>
    )
}

export default Header_content
