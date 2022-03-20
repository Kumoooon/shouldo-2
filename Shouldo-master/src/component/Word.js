import { useEffect, useState } from "react";

export default function Word({ word }) {
  let [show, setShow] = useState(false);
  let [isdone, setIsdone] = useState(word.isDone);
  function upper() {
    fetch(`http://localhost:3003/words/${word.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...word,
        isdone: !isdone,
      }),
    }).then((res) => {
      if (res.ok) {
        setIsdone(!isdone);
      }
    });
  }
  function Del() {
    if (window.confirm(`삭제 하시겠습니까?`)) {
      fetch(`http://localhost:3003/words/${word.id}`, {
        method: `DELETE`,
      });
    }
  }
  return (
    <tr className={isdone ? "off" : ""}>
      <td>
        <input
          type="checkbox"
          checked={isdone}
          onChange={() => {
            upper();
          }}
        ></input>
      </td>
      <td>{word.eng}</td>
      <td>{show === true ? word.kor : null}</td>
      <td>
        <button
          onClick={() => {
            setShow(!show);
          }}
        >
          뜻 보기
        </button>

        <button onClick={Del}>삭제</button>
      </td>
    </tr>
  );
}
