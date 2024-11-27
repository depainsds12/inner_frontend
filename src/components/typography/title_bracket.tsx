import Typography from "./typography";

const TitleBracket = ({ text }) => (
  <Typography
    className="relative font-bold text-[#FFF200]"
    component="span"
    variant="fluid-2xl"
  >
    {text}
  </Typography>
);

export default TitleBracket;
