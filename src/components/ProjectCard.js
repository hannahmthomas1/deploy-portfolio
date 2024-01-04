import { Col, Container, Row } from "react-bootstrap";

// export const ProjectCard = ({ title, description, imgUrl, URL }) => {
//   return (
//     <Col size={12} sm={12} md={12}>
//       <div className="proj-imgbx">
//         <a href={URL}>
//           <img src={imgUrl} alt="project" />
//         </a>
//       </div>
//       <div className="proj-txtx">
//         <h4>{title}</h4>
//         <span>{description}</span>
//       </div>
//     </Col>
//   );
// };

export const ProjectCard = ({ title, description, imgUrl, URL, tags }) => {
  return (
    <Container className="project-box">
      <Row>
        {/* <Col size={1} sm={0} md={0}></Col> */}
        <Col size={4} sm={12} md={4}>
          <div className="proj-imgbx">
            <a href={URL}>
              <img src={imgUrl} alt="project" />

              <div className="proj-txtx">
                <h4>{title}</h4>
              </div>
            </a>
          </div>
        </Col>
        <Col size={7} sm={12} md={7}>
          <div className="">
            <a href={URL}>
              <h4>{title}</h4>
            </a>

            <div className="tags-container">
              {tags.map((val) => {
                return (
                  <div className="tags">
                    <p>{val}</p>
                  </div>
                );
              })}
            </div>
            <span className="description">{description}</span>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
