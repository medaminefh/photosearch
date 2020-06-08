import React from "react";
import { v4 as uuid } from "uuid";

const ImageCard = ({
  image: { webformatURL, user, tags, views, likes, downloads },
}) => {
  return (
    <div className="max-w-sm xs:max-w-xl sm:max-w-xl rounded overflow-hidden shadow-lg">
      <img alt="" src={webformatURL} className="w-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-xl mb-2">
          Photo by {user}
        </div>
        <ul>
          <li>
            <strong>Views: </strong>
            {views}
          </li>{" "}
          <li>
            <strong>Downloads: </strong>
            {downloads}
          </li>{" "}
          <li>
            <strong>Likes: </strong>
            {likes}
          </li>
        </ul>
      </div>
      <div className="px-6 py-4">
        {tags.split(",").map((i, a) => (
          <span
            key={a}
            className="sm:text-center inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
          >
            #{i}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ImageCard;
