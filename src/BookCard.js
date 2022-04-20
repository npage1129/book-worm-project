import React from "react";
import { Image } from "antd";
import "antd/dist/antd.css";

function BookCardBestSellers({ book }) {
  const bestsellers = book.filter((item) => item.rating === 5);
  console.log(bestsellers);

  return (
    <div>
      <div>
        <Image.PreviewGroup>
          {bestsellers.map((item) => (
            <Image width={300} src={item.photo} />
          ))}
        </Image.PreviewGroup>
      </div>
    </div>
  );
}
export default BookCardBestSellers;
