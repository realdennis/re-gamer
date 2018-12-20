import React from 'react';
const highLight = e => {
  e.currentTarget.querySelectorAll('*').forEach(dom => {
    dom.style.color = 'silver';
    dom.style.backgroundColor = 'black';
  });
};
const CardItem = ({ card, index }) => {
  return (
    <li>
      <div>
        {index === 0 && <p className="title">{card.title}</p>}
        <p className="author">
          {card.author} ({card.nickname})
        </p>
        <p className="time">{card.date}</p>
        {card.dreason && <p>{card.dreason}</p>}
        <p
          onClick={e => highLight(e)}
          className="content"
          dangerouslySetInnerHTML={{ __html: card.content_html }}
        />
      </div>
    </li>
  );
};
export default CardItem;
