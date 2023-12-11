import file from "../../resume/Resume.pdf";

const ResumePage = () => {
  return (
    <iframe
      src={file}
      title="Resume Page.pdf"
      style={{ width: "100%", height: "99vh", overflow: "hidden" }}
    ></iframe>
  );
};

export default ResumePage;
