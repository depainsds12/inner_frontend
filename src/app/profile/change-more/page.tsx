import ChangeMore from "../_components/change-more";
import MainOctagon from "../_components/main-octagon";

const ChangeMorePage = () => {
  const section = "colors";
  return (
    <MainOctagon showChangeBackground={true}>
      <ChangeMore section={section} />
    </MainOctagon>
  );
};

export default ChangeMorePage;
