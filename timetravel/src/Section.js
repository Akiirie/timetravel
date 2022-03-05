import board_news from './board_news.png';
import ontable from './ontable.png';
import planszeo from './planszeo.png';
import './Section.css';
import React from 'react';

function Section() {
  return (
      <section>
        <h1 className="title_section">Kalendarz premier i dodruków. Tworzony przez:</h1>
        <div className="sponsor">
          <img src={board_news} />
          <img src={ontable} />
          <img src={planszeo} />
        </div>
        <div>
          <div className="section_year">
            <button className="year year2021"><h1>2021</h1></button> <button className="year year2022"><h1>2022</h1></button>
          </div>
          <div className="section_month">
            <button className="months"><h1>styczeń</h1></button>
            <button className="months"><h1>luty</h1></button>
            <button className="months"><h1>marzec</h1></button>
            <button className="months"><h1>kwiecień</h1></button>
            <button className="months"><h1>maj</h1></button>
            <button className="months"><h1>czerwiec</h1></button>
            <button className="months"><h1>lipiec</h1></button>
            <button className="months"><h1>sierpień</h1></button>
            <button className="months"><h1>wrzesień</h1></button>
            <button className="months"><h1>październik</h1></button>
            <button className="months"><h1>listopad</h1></button>
            <button className="months"><h1>grudzień</h1></button>
          </div>
        </div>
      </section>
  );
}

export default Section;
