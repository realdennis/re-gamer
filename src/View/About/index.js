import React from 'react';
import styled from 'styled-components';
const About = ({ className }) => {
  return (
    <div className={className}>
      <div className="card card-bg flex">
        <div className="card card-sm">
          <h3>使用說明</h3>
          <p>
            觀看熱門看板或是搜尋想進去的看板，透過旁邊的星星可以「加入」、「刪除」想關注的看板。如果文章字體顏色過暗，點擊一下馬上開燈（字體顏色變成白色）</p>
        </div>
        <div className="card card-sm">
          <h3>作者介紹</h3>
          <p>
            嗨！我是 @realdennis
            喜歡寫一些有的沒的軟體，希望你能覺得整個軟體好用！
            <b>本軟體無任何廣告</b>
          </p>
        </div>
      </div>

      <div className="card card-bg">
        <h3>關於軟體</h3>
        <p>
          本軟體是一輕量的閱讀器，不是給重度使用者使用，任何需要登入、留言等等的建議還是在官方論壇操作。
        </p>
        <p>
          使用的資料來源為手機版的 API
          ，如官方有任何疑慮、考量，請第一時間知會下架。
        </p>
        <p>
          本軟體為開源的專案，僅僅是作為前端框架練習的練手項目，如果有興趣者可以在
          GitHub Repo 上找到它。
        </p>
      </div>
      {/*
      <div className="card">
        <h3>設定</h3>
        <div className="checkbox">
          <label htmlFor="sss">
            <input type="checkbox" id="sss" value="Travel" name="Interest" />
            <p>使用我的最愛作為首頁</p>
          </label>
        </div>
      </div>
      */}
    </div>
  );
};
export default styled(About)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  .flex {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .card-sm {
    width: 300px;
  }
  .card-bg {
    width: 100%;
    min-width: 300px;
  }
  .card {
    margin: 5px;
    border: 1px solid rgba(244, 244, 244, 0.3);
    border-radius: 3px;
    h3 {
      margin-top:0;
      background-color:navy;
      color: white;
    }
    p {
      &::first-letter {
        margin-left: 2em;
      }
      padding: 5px;
      text-align: left;
    }
    .checkbox > label {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;
