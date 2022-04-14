import React from "react";
import ImageLink from "../components/ImageLink";
import jsonData from "../data.json";

export type DataType = {
  cover: string;
  title: string;
  color: string;
  slug: string;
  detailImages: string[];
};
export default function Home() {
  const mapData: DataType[] = Array.from(jsonData);

  const components = mapData.map((element, index) => (
    <ImageLink key={element.slug} element={element} index={index} />
  ));

  return (
    <div className="content">
      <div className="home-grid">{components}</div>
    </div>
  );
}
