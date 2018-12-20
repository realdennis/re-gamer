import React from 'react';
const highLight = e => {
  e.currentTarget.querySelectorAll('*').forEach(dom => {
    dom.style.color = 'silver';
    dom.style.backgroundColor = 'black';
  });
};
const CardItem = ({ card }) => (
  <li>
    <div>
      <p className="author">
        {card.author} ({card.nickname})
      </p>
      <p className="time">{card.date}</p>
      <p
        onClick={e => highLight(e)}
        className="content"
        dangerouslySetInnerHTML={{ __html: card.content_html }}
      />
    </div>
  </li>
);
export default CardItem;
