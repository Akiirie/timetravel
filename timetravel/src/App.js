import logo from './logo.svg';
import board_news from './board_news.png';
import ontable from './ontable.png';
import planszeo from './planszeo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
            <img src={logo} className="logo_header"/>
            <input type="text" className="searchBar" placeholder="Wpisz tytuł gry"/>
            <menu>
                <ul>
                    <li><a href="#"><i className="fa fa-fw fa-search"></i></a></li>
                    <li><a href="#"><h1>NOWOŚCI</h1></a></li>
                    <li><a href="#"><h1>RANKINGI</h1></a></li>
                    <li><a href="#"><h1>O PLANSZEO</h1></a></li>
                    <li><a href="#"><h1>WSPÓŁPRACA</h1></a></li>
                    <li><a href="#"><h1>BLOG</h1></a></li>
                    <li><a href="#"><i className="fa fa-fw fa-user"></i></a></li>
                </ul>
            </menu>
        </header>

        <div class="inf01">
            <a href="#"><h1>APLIKACJA MOBILNA Planszeo</h1></a>
        </div>
        <div class="inf02">
            <a href="#"><h1>KALENDARZ premier i dodruków</h1></a>
        </div>

        <section>
            <h1 class="title_section">Kalendarz premier i dodruków. Tworzony przez:</h1>
            <div class="sponsor">
                <img src={board_news}/>
                <img src={ontable}/>
                <img src={planszeo}/>
            </div>
            <div>
                <div class="section_year">
                    <button class="year year2021"><h1>2021</h1></button> <button class="year year2022"><h1>2022</h1></button>
                </div>
                <div class="section_month">
                    <button class="months"><h1>styczeń</h1></button>
                    <button class="months"><h1>luty</h1></button>
                    <button class="months"><h1>marzec</h1></button>
                    <button class="months"><h1>kwiecień</h1></button>
                    <button class="months"><h1>maj</h1></button>
                    <button class="months"><h1>czerwiec</h1></button>
                    <button class="months"><h1>lipiec</h1></button>
                    <button class="months"><h1>sierpień</h1></button>
                    <button class="months"><h1>wrzesień</h1></button>
                    <button class="months"><h1>październik</h1></button>
                    <button class="months"><h1>listopad</h1></button>
                    <button class="months"><h1>grudzień</h1></button>
                </div>
            </div>
        </section>
    </div>
  );
}

export default App;
