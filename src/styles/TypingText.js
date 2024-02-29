import React, { useState, useEffect } from "react";
import "../TypingText.css";

const TypingText = () => {
  const [Text, setText] = useState("");
  const [Count, setCount] = useState(0);

  const defaultProps = {
    fontSize: "0.9em",
    color: "black",
    speed: 100,
    content:
      "안녕하세요, \n 저는 Flutter를 좋아하고 \n 목표를 향해 열심히 달리는 \n 개발자 김승원입니다.",
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (Count < defaultProps.content.length) {
        let txt =
          defaultProps.content[Count] === "\n"
            ? "<br/>"
            : defaultProps.content[Count];
        setText((Text) => Text + txt);
        setCount(Count + 1);
      }
    }, defaultProps.speed);

    return () => clearInterval(interval);
  }, [Count, Text]);

  return (
    <p
      className="typing"
      style={{
        fontSize: defaultProps.fontSize,
        color: defaultProps.color,
      }}
      dangerouslySetInnerHTML={{ __html: Text }}
    />
  );
};

export default TypingText;
