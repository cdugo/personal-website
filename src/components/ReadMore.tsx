import React, { useState } from 'react'

function ReadMore({ children }) {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };
    return (
      <p className="text">
        {isReadMore ? text.slice(0, 400) : text}
        <span onClick={toggleReadMore} className="text-gray-500 underline decoration-[#6f32ff] decoration-2 underline-offset-4 hover:decoration-4 cursor-pointer">
          {isReadMore ? "...read more" : "show less"}
        </span>
      </p>
    );
}

export default ReadMore