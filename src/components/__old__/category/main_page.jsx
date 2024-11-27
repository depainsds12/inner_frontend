"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

import ExpressionFilter from "@/src/components/__old__/expressions_filter";

import Screen1 from "@/src/components/__old__/pages/categories/screen1";
import Screen2 from "@/src/components/__old__/pages/categories/screen2";

import { getCategories } from "@/src/services/categories";

const MainPage = () => {
  const [data, setData] = useState(null);
  const params = useParams();

  useEffect(() => {
    console.log(params);
    const getData = async () => {
      setData(await getCategories("Garden"));
    };
    getData();
  }, []);

  if (!data || data.error || !data.result.length) {
    return <>Not Found</>;
  }

  const parsedData = data.result[0];
  //console.log(JSON.stringify(data, null, 3)); //data.result[0].topics

  return (
    <>
      <ExpressionFilter
        data={parsedData.topics.map((z, i) => ({
          id: i + 1,
          name: z.topicName,
        }))}
      />
      <div className="3xl:h-[80vh] h-[60vh] md:h-[60vw] xl:h-screen">
        <Screen1 {...parsedData} />
      </div>
      <Screen2 {...parsedData} />
    </>
  );
};
export default MainPage;
