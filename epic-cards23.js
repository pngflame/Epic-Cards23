document.getElementById("big-x").onclick = function() {bigexit()};

function bigexit() {
    document.getElementById("button-container").innerHTML = `
    <div id="big-x" onmousedown="bigexit()"> x </div>
    <div id="jan23-button" onmousedown="janbutton()"></div>
    <div id="feb23-button" onmousedown="febbutton()"></div>
    <div id="mar23-button" onmousedown="marbutton()"></div>
    <div id="apr23-button" onmousedown="aprbutton()"></div>
    <div id="may23-button" onmousedown="maybutton()"></div>
    <div id="jun23-button" onmousedown="junbutton()"></div>
    <div id="jul23-button" onmousedown="julbutton()"></div>
    <div id="aug23-button" onmousedown="augbutton()"></div>
    <div id="sep23-button" onmousedown="sepbutton()"></div>
    <div id="oct23-button" onmousedown="octbutton()"></div>
    <div id="nov23-button" onmousedown="novbutton()"></div>
    <div id="dec23-button" onmousedown="decbutton()"></div>`;
    document.getElementById("big-x").style.top = "-20%";
    document.getElementById("jan23-button").style.top = "50%";
    document.getElementById("feb23-button").style.top = "50%";
    document.getElementById("mar23-button").style.top = "50%";
    document.getElementById("apr23-button").style.top = "50%";
    document.getElementById("may23-button").style.top = "88%";
    document.getElementById("jun23-button").style.top = "88%";
    document.getElementById("jul23-button").style.top = "88%";
    document.getElementById("aug23-button").style.top = "88%";
    document.getElementById("sep23-button").style.top = "126%";
    document.getElementById("oct23-button").style.top = "126%";
    document.getElementById("nov23-button").style.top = "126%";
    document.getElementById("dec23-button").style.top = "126%";
}

//------------------------------------ABOVE IS THE EXIT FUNCTION FOR THE BIG CALENDAR-------------------------------------
//------------------------------------------BELOW IS THE JANUARY CLICK FUNCTION-------------------------------------------

document.getElementById("jan23-button").onclick = function() {janbutton()};

function janbutton() {
  document.getElementById("jan23-button").innerHTML = `</div>
  <div id="big-container">
      <div id="big-month">
          <h1>January 2023</h1>
      </div>
      <div id="big-calendar">
          <table>
              <tr>
                  <td class=keep>1</td>
                  <td class=keep>2</td>
                  <td class=keep>3</td>
                  <td class=keep>4</td>
                  <td class=keep>5</td>
                  <td class=keep>6</td>
                  <td class=keep>7</td>
              </tr>
              <tr>
                  <td class=keep>8</td>
                  <td class=keep>9</td>
                  <td class=keep>10</td>
                  <td class=keep>11</td>
                  <td class=keep>12</td>
                  <td class=keep>13</td>
                  <td class=keep>14</td>
              </tr>
              <tr>
                  <td class=keep>15</td>
                  <td class=keep>16</td>
                  <td class=keep>17</td>
                  <td class=keep>18</td>
                  <td class=keep>19</td>
                  <td class=keep>20</td>
                  <td class=keep>21</td>
              </tr>
              <tr>
                  <td class=keep>22</td>
                  <td class=keep>23</td>
                  <td class=keep>24</td>
                  <td class=keep>25</td>
                  <td class=keep>26</td>
                  <td class=keep>27</td>
                  <td class=keep>28</td>
              </tr>
              <tr>
                  <td class=keep>29</td>
                  <td class=keep>30</td>
                  <td class=keep>31</td>
                  <td class=remove></td>
                  <td class=remove></td>
                  <td class=remove></td>
                  <td class=remove></td>
              </tr>
          </table>
      </div>
  </div>
  <div id="items-container">
      <div id="items-calendar">
          <table>
              <tr>
                  <td><a href="https://wolvesville.fandom.com/wiki/Ritualist_Offer"><img src="Epic images/ritualist.png"></a></td>
                  <td><a href="https://wolvesville.fandom.com/wiki/Stubborn_Werewolf_Offer"><img src="Epic images/stubborn-werewolf.png"></a></td>
                  <td><a href="https://wolvesville.fandom.com/wiki/Trapper_Offer"><img src="Epic images/trapper.png"></a></td>
                  <td><a href="https://wolvesville.fandom.com/wiki/Marksman_Offer"><img src="Epic images/marksman.png"></a></td>
                  <td><a href="https://wolvesville.fandom.com/wiki/Preacher_Offer"><img src="Epic images/preacher.png"></a></td>
                  <td><a href="https://wolvesville.fandom.com/wiki/Night_Watchman_Offer"><img src="Epic images/night-watchman.png"></a></td>
                  <td><a href="https://wolvesville.fandom.com/wiki/Jelly_Wolf_Offer"><img src="Epic images/jelly-wolf.png"></a></td>
              </tr>
              <tr>
                  <td><a href="https://wolvesville.fandom.com/wiki/Gambler_Offer"><img src="Epic images/gambler.png"></a></td>
                  <td><a href="https://wolvesville.fandom.com/wiki/Werewolf_Fan_Offer"><img src="Epic images/werewolf-fan.png"></a></td>
                  <td><a href="https://wolvesville.fandom.com/wiki/Wolf_Summoner_Offer"><img src="Epic images/wolf-summoner.png"></a></td>
                  <td><a href="https://wolvesville.fandom.com/wiki/Baker_Offer"><img src="Epic images/baker.png"></a></td>
                  <td><a href="https://wolvesville.fandom.com/wiki/Astronomer_Offer"><img src="Epic images/astronomer.png"></a>⠀<a href="https://wolvesville.fandom.com/wiki/Storm_Wolf_Offer"><img src="Epic images/storm-wolf.png"></a></td>
                  <td><a href="https://wolvesville.fandom.com/wiki/Avenger_Offer"><img src="Epic images/avenger.png"></a>⠀<a href="https://wolvesville.fandom.com/wiki/Storm_Wolf_Offer"><img src="Epic images/storm-wolf.png"></a></td>
                  <td><a href="https://wolvesville.fandom.com/wiki/Bell_Ringer_Offer"><img src="Epic images/bell-ringer.png"></a>⠀<a href="https://wolvesville.fandom.com/wiki/Storm_Wolf_Offer"><img src="Epic images/storm-wolf.png"></a></td>
              </tr>
              <tr>
                  <td><a href="https://wolvesville.fandom.com/wiki/Voodoo_Werewolf_Offer"><img src="Epic images/voodoo-werewolf.png"></a>⠀<a href="https://wolvesville.fandom.com/wiki/Storm_Wolf_Offer"><img src="Epic images/storm-wolf.png"></a></td>
                  <td><a href="https://wolvesville.fandom.com/wiki/Split_Wolf_Offer"><img src="Epic images/split-wolf.png"></a></td>
                  <td><a href="https://wolvesville.fandom.com/wiki/Ritualist_Offer"><img src="Epic images/ritualist.png"></a></td>
                  <td><a href="https://wolvesville.fandom.com/wiki/Stubborn_Werewolf_Offer"><img src="Epic images/stubborn-werewolf.png"></a></td>
                  <td><a href="https://wolvesville.fandom.com/wiki/Trapper_Offer"><img src="Epic images/trapper.png"></a></td>
                  <td><a href="https://wolvesville.fandom.com/wiki/Marksman_Offer"><img src="Epic images/marksman.png"></a>⠀<a href="https://wolvesville.fandom.com/wiki/Pacifist_Offer"><img src="Epic images/pacifist.png"></a></td>
                  <td><a href="https://wolvesville.fandom.com/wiki/Preacher_Offer"><img src="Epic images/preacher.png"></a>⠀<a href="https://wolvesville.fandom.com/wiki/Pacifist_Offer"><img src="Epic images/pacifist.png"></a></td>
              </tr>
              <tr>
                  <td><a href="https://wolvesville.fandom.com/wiki/Night_Watchman_Offer"><img src="Epic images/night-watchman.png"></a>⠀<a href="https://wolvesville.fandom.com/wiki/Pacifist_Offer"><img src="Epic images/pacifist.png"></a></td>
                  <td><a href="https://wolvesville.fandom.com/wiki/Jelly_Wolf_Offer"><img src="Epic images/jelly-wolf.png"></a>⠀<a href="https://wolvesville.fandom.com/wiki/Pacifist_Offer"><img src="Epic images/pacifist.png"></a></td>
                  <td><a href="https://wolvesville.fandom.com/wiki/Gambler_Offer"><img src="Epic images/gambler.png"></a>⠀<a href="https://wolvesville.fandom.com/wiki/Pacifist_Offer"><img src="Epic images/pacifist.png"></a></td>
                  <td><a href="https://wolvesville.fandom.com/wiki/Werewolf_Fan_Offer"><img src="Epic images/werewolf-fan.png">⠀</a><a href="https://wolvesville.fandom.com/wiki/Pacifist_Offer"><img src="Epic images/pacifist.png"></a></td>
                  <td><a href="https://wolvesville.fandom.com/wiki/Wolf_Summoner_Offer"><img src="Epic images/wolf-summoner.png"></a>⠀<a href="https://wolvesville.fandom.com/wiki/Sheriff_Offer"><img src="Epic images/sheriff.png"></a></td>
                  <td><a href="https://wolvesville.fandom.com/wiki/Baker_Offer"><img src="Epic images/baker.png"></a>⠀<a href="https://wolvesville.fandom.com/wiki/Sheriff_Offer"><img src="Epic images/sheriff.png"></a></td>
                  <td><a href="https://wolvesville.fandom.com/wiki/Storm_Wolf_Offer"><img src="Epic images/storm-wolf.png"></a>⠀<a href="https://wolvesville.fandom.com/wiki/Sheriff_Offer"><img src="Epic images/sheriff.png"></a></td>
              </tr>
              <tr>
                  <td><a href="https://wolvesville.fandom.com/wiki/Astronomer_Offer"><img src="Epic images/astronomer.png"></a>⠀<a href="https://wolvesville.fandom.com/wiki/Sheriff_Offer"><img src="Epic images/sheriff.png"></a></td>
                  <td><a href="https://wolvesville.fandom.com/wiki/Avenger_Offer"><img src="Epic images/avenger.png"></a>⠀<a href="https://wolvesville.fandom.com/wiki/Sheriff_Offer"><img src="Epic images/sheriff.png"></a></td>
                  <td><a href="https://wolvesville.fandom.com/wiki/Bell_Ringer_Offer"><img src="Epic images/bell-ringer.png"></a></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
              </tr>
          </table>
      </div>`;
      document.getElementById("big-calendar").style.top = "275%";
      document.getElementById("big-calendar").style.left = "215%";
      document.getElementById("items-container").style.left = "272%";
      document.getElementById("items-container").style.left = "217%";
      document.getElementById("big-x").style.top = "10.5%";
      document.getElementById("jan23-button").style.top = "-20%";
      document.getElementById("feb23-button").style.top = "-20%";
      document.getElementById("mar23-button").style.top = "-20%";
      document.getElementById("apr23-button").style.top = "-20%";
      document.getElementById("may23-button").style.top = "-20%";
      document.getElementById("jun23-button").style.top = "-20%";
      document.getElementById("jul23-button").style.top = "-20%";
      document.getElementById("aug23-button").style.top = "-20%";
      document.getElementById("sep23-button").style.top = "-20%";
      document.getElementById("oct23-button").style.top = "-20%";
      document.getElementById("nov23-button").style.top = "-20%";
      document.getElementById("dec23-button").style.top = "-20%";
}

//------------------------------------------ABOVE IS THE JANUARY CLICK FUNCTION-------------------------------------------
//------------------------------------------BELOW IS THE FEBRUARY CLICK FUNCTION-------------------------------------------

document.getElementById("feb23-button").onclick = function() {febbutton()};

function febbutton() {
  document.getElementById("feb23-button").innerHTML = `
  <div id="big-container">
      <div id="big-month">
          <h1>February 2023</h1>
      </div>
      <div id="big-calendar">
          <table>
              <tr>
                  <td class=remove></td>
                  <td class=remove></td>
                  <td class=remove></td>
                  <td class=keep>1</td>
                  <td class=keep>2</td>
                  <td class=keep>3</td>
                  <td class=keep>4</td>
              </tr>
              <tr>
                  <td class=keep>5</td>
                  <td class=keep>6</td>
                  <td class=keep>7</td>
                  <td class=keep>8</td>
                  <td class=keep>9</td>
                  <td class=keep>10</td>
                  <td class=keep>11</td>
              </tr>
              <tr>
                  <td class=keep>12</td>
                  <td class=keep>13</td>
                  <td class=keep>14</td>
                  <td class=keep>15</td>
                  <td class=keep>16</td>
                  <td class=keep>17</td>
                  <td class=keep>18</td>
              </tr>
              <tr>
                  <td class=keep>19</td>
                  <td class=keep>20</td>
                  <td class=keep>21</td>
                  <td class=keep>22</td>
                  <td class=keep>23</td>
                  <td class=keep>24</td>
                  <td class=keep>25</td>
              </tr>
              <tr>
                  <td class=keep>26</td>
                  <td class=keep>27</td>
                  <td class=keep>28</td>
                  <td class=remove></td>
                  <td class=remove></td>
                  <td class=remove></td>
                  <td class=remove></td>
              </tr>
          </table>
      </div>
  </div>
  <div id="items-container">
      <div id="items-calendar">
          <table>
              <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td><a href="https://wolvesville.fandom.com/wiki/Voodoo_Werewolf_Offer"><img src="Epic images/voodoo-werewolf.png"></a></td>
                  <td><a href="https://wolvesville.fandom.com/wiki/Split_Wolf_Offer"><img src="Epic images/split-wolf.png"></a>⠀<a href="https://wolvesville.fandom.com/wiki/Zombie_Offer"><img src="Epic images/zombie.png"></a></td>
                  <td><a href="https://wolvesville.fandom.com/wiki/Ritualist_Offer"><img src="Epic images/ritualist.png"></a>⠀<a href="https://wolvesville.fandom.com/wiki/Zombie_Offer"><img src="Epic images/zombie.png"></a></td>
                  <td><a href="https://wolvesville.fandom.com/wiki/Stubborn_Werewolf_Offer"><img src="Epic images/stubborn-werewolf.png"></a>⠀<a href="https://wolvesville.fandom.com/wiki/Zombie_Offer"><img src="Epic images/zombie.png"></a></td>
              </tr>
              <tr>
                  <td><a href="https://wolvesville.fandom.com/wiki/Trapper_Offer"><img src="Epic images/trapper.png"></a>⠀<a href="https://wolvesville.fandom.com/wiki/Zombie_Offer"><img src="Epic images/zombie.png"></a></td>
                  <td><a href="https://wolvesville.fandom.com/wiki/Marksman_Offer"><img src="Epic images/marksman.png"></a>⠀<a href="https://wolvesville.fandom.com/wiki/Zombie_Offer"><img src="Epic images/zombie.png"></a></td>
                  <td><a href="https://wolvesville.fandom.com/wiki/Pacifist_Offer"><img src="Epic images/pacifist.png"></a></td>
                  <td><a href="https://wolvesville.fandom.com/wiki/Preacher_Offer"><img src="Epic images/preacher.png"></a></td>
                  <td><a href="https://wolvesville.fandom.com/wiki/Night_Watchman_Offer"><img src="Epic images/night-watchman.png"></a></td>
                  <td><a href="https://wolvesville.fandom.com/wiki/Jelly_Wolf_Offer"><img src="Epic images/jelly-wolf.png"></a>⠀<a href="https://wolvesville.fandom.com/wiki/Evil_Detective_Offer"><img src="Epic images/evil-detective.png"></a></td>
                  <td><a href="https://wolvesville.fandom.com/wiki/Gambler_Offer"><img src="Epic images/gambler.png"></a>⠀<a href="https://wolvesville.fandom.com/wiki/Evil_Detective_Offer"><img src="Epic images/evil-detective.png"></a></td>
              </tr>
              <tr>
                  <td><a href="https://wolvesville.fandom.com/wiki/Werewolf_Fan_Offer"><img src="Epic images/werewolf-fan.png"></a>⠀<a href="https://wolvesville.fandom.com/wiki/Evil_Detective_Offer"><img src="Epic images/evil-detective.png"></a></td>
                  <td><a href="https://wolvesville.fandom.com/wiki/Wolf_Summoner_Offer"><img src="Epic images/wolf-summoner.png"></a>⠀<a href="https://wolvesville.fandom.com/wiki/Evil_Detective_Offer"><img src="Epic images/evil-detective.png"></a></td>
                  <td><a href="https://wolvesville.fandom.com/wiki/Sheriff_Offer"><img src="Epic images/sheriff.png"></a></td>
                  <td><a href="https://wolvesville.fandom.com/wiki/Baker_Offer"><img src="Epic images/baker.png"></a></td>
                  <td><a href="https://wolvesville.fandom.com/wiki/Storm_Wolf_Offer"><img src="Epic images/storm-wolf.png"></a>⠀<a href="https://wolvesville.fandom.com/wiki/Violinist_Offer"><img src="Epic images/violinist.png"></a></td>
                  <td><a href="https://wolvesville.fandom.com/wiki/Astronomer_Offer"><img src="Epic images/astronomer.png"></a>⠀<a href="https://wolvesville.fandom.com/wiki/Violinist_Offer"><img src="Epic images/violinist.png"></a></td>
                  <td><a href="https://wolvesville.fandom.com/wiki/Avenger_Offer"><img src="Epic images/avenger.png"></a>⠀<a href="https://wolvesville.fandom.com/wiki/Violinist_Offer"><img src="Epic images/violinist.png"></a></td>
              </tr>
              <tr>
                  <td><a href="https://wolvesville.fandom.com/wiki/Bell_Ringer_Offer"><img src="Epic images/bell-ringer.png"></a>⠀<a href="https://wolvesville.fandom.com/wiki/Violinist_Offer"><img src="Epic images/violinist.png"></a></td>
                  <td><a href="https://wolvesville.fandom.com/wiki/Voodoo_Werewolf_Offer"><img src="Epic images/voodoo-werewolf.png"></a></td>
                  <td><a href="https://wolvesville.fandom.com/wiki/Zombie_Offer"><img src="Epic images/zombie.png"></a></td>
                  <td><a href="https://wolvesville.fandom.com/wiki/Split_Wolf_Offer"><img src="Epic images/split-wolf.png"></a></td>
                  <td><a href="https://wolvesville.fandom.com/wiki/Ritualist_Offer"><img src="Epic images/ritualist.png"></a>⠀<a href="https://wolvesville.fandom.com/wiki/Seer_Apprentice_Offer"><img src="Epic images/seer-apprentice.png"></a></td>
                  <td><a href="https://wolvesville.fandom.com/wiki/Stubborn_Werewolf_Offer"><img src="Epic images/stubborn-werewolf.png"></a>⠀<a href="https://wolvesville.fandom.com/wiki/Seer_Apprentice_Offer"><img src="Epic images/seer-apprentice.png"></a></td>
                  <td><a href="https://wolvesville.fandom.com/wiki/Trapper_Offer"><img src="Epic images/trapper.png"></a>⠀<a href="https://wolvesville.fandom.com/wiki/Seer_Apprentice_Offer"><img src="Epic images/seer-apprentice.png"></a></td>
              </tr>
              <tr>
                  <td><a href="https://wolvesville.fandom.com/wiki/Pacifist_Offer"><img src="Epic images/pacifist.png"></a>⠀<a href="https://wolvesville.fandom.com/wiki/Seer_Apprentice_Offer"><img src="Epic images/seer-apprentice.png"></a></td>
                  <td><a href="https://wolvesville.fandom.com/wiki/Marksman_Offer"><img src="Epic images/marksman.png"></a>⠀<a href="https://wolvesville.fandom.com/wiki/Seer_Apprentice_Offer"><img src="Epic images/seer-apprentice.png"></a></td>
                  <td><a href="https://wolvesville.fandom.com/wiki/Preacher_Offer"><img src="Epic images/preacher.png"></a></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
              </tr>
          </table>
      </div>
  </div>`;
  document.getElementById("big-container").style.top = "275%";
  document.getElementById("big-container").style.left = "103%";
  document.getElementById("items-container").style.top = "272%";
  document.getElementById("items-container").style.left = "105%";
  document.getElementById("big-x").style.top = "10.5%";
  document.getElementById("jan23-button").style.top = "-20%";
  document.getElementById("feb23-button").style.top = "-20%";
  document.getElementById("mar23-button").style.top = "-20%";
  document.getElementById("apr23-button").style.top = "-20%";
  document.getElementById("may23-button").style.top = "-20%";
  document.getElementById("jun23-button").style.top = "-20%";
  document.getElementById("jul23-button").style.top = "-20%";
  document.getElementById("aug23-button").style.top = "-20%";
  document.getElementById("sep23-button").style.top = "-20%";
  document.getElementById("oct23-button").style.top = "-20%";
  document.getElementById("nov23-button").style.top = "-20%";
  document.getElementById("dec23-button").style.top = "-20%";
}

//------------------------------------------ABOVE IS THE FEBRUARY CLICK FUNCTION-------------------------------------------
//------------------------------------------BELOW IS THE MARCH CLICK FUNCTION-------------------------------------------

document.getElementById("mar23-button").onclick = function() {marbutton()};

function marbutton() {
  document.getElementById("mar23-button").innerHTML = `
  <div id="big-container">
      <div id="big-month">
          <h1>March 2023</h1>
      </div>
      <div id="big-calendar">
          <table>
                <tr>
                    <td class=remove></td>
                    <td class=remove></td>
                    <td class=remove></td>
                    <td class=keep>1</td>
                    <td class=keep>2</td>
                    <td class=keep>3</td>
                    <td class=keep>4</td>
                </tr>
                <tr>
                    <td class=keep>5</td>
                    <td class=keep>6</td>
                    <td class=keep>7</td>
                    <td class=keep>8</td>
                    <td class=keep>9</td>
                    <td class=keep>10</td>
                    <td class=keep>11</td>
                </tr>
                <tr>
                    <td class=keep>12</td>
                    <td class=keep>13</td>
                    <td class=keep>14</td>
                    <td class=keep>15</td>
                    <td class=keep>16</td>
                    <td class=keep>17</td>
                    <td class=keep>18</td>
                </tr>
                <tr>
                    <td class=keep>19</td>
                    <td class=keep>20</td>
                    <td class=keep>21</td>
                    <td class=keep>22</td>
                    <td class=keep>23</td>
                    <td class=keep>24</td>
                    <td class=keep>25</td>
                </tr>
                <tr>
                    <td class=keep>26</td>
                    <td class=keep>27</td>
                    <td class=keep>28</td>
                    <td class=keep>29</td>
                    <td class=keep>30</td>
                    <td class=keep>31</td>
                    <td class=remove></td>
                </tr>
          </table>
      </div>
  </div>
  <div id="items-container">
      <div id="items-calendar">
          <table>
              <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td><a href="https://wolvesville.fandom.com/wiki/Night_Watchman_Offer"><img src="Epic images/night-watchman.png"></a></td>
                  <td><a href="https://wolvesville.fandom.com/wiki/Jelly_Wolf_Offer"><img src="Epic images/jelly-wolf.png"></a></td>
                  <td><a href="https://wolvesville.fandom.com/wiki/Evil_Detective_Offer"><img src="Epic images/evil-detective.png"></a></td>
                  <td><a href="https://wolvesville.fandom.com/wiki/Gambler_Offer"><img src="Epic images/gambler.png"></a></td>
              </tr>
              <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
              </tr>
              <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
              </tr>
              <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
              </tr>
              <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
              </tr>
          </table>
      </div>
  </div>`;
  document.getElementById("big-container").style.top = "275%";
  document.getElementById("big-container").style.left = "-9%";
  document.getElementById("items-container").style.top = "272%";
  document.getElementById("items-container").style.left = "-7%";
  document.getElementById("big-x").style.top = "10.5%";
  document.getElementById("jan23-button").style.top = "-20%";
  document.getElementById("feb23-button").style.top = "-20%";
  document.getElementById("mar23-button").style.top = "-20%";
  document.getElementById("apr23-button").style.top = "-20%";
  document.getElementById("may23-button").style.top = "-20%";
  document.getElementById("jun23-button").style.top = "-20%";
  document.getElementById("jul23-button").style.top = "-20%";
  document.getElementById("aug23-button").style.top = "-20%";
  document.getElementById("sep23-button").style.top = "-20%";
  document.getElementById("oct23-button").style.top = "-20%";
  document.getElementById("nov23-button").style.top = "-20%";
  document.getElementById("dec23-button").style.top = "-20%";
}

//------------------------------------------ABOVE IS THE MARCH CLICK FUNCTION-------------------------------------------
//------------------------------------------BELOW IS THE APRIL CLICK FUNCTION-------------------------------------------



//------------------------------------------ABOVE IS THE APRIL CLICK FUNCTION-------------------------------------------
//------------------------------------------BELOW IS THE MAY CLICK FUNCTION-------------------------------------------



//------------------------------------------ABOVE IS THE MAY CLICK FUNCTION-------------------------------------------
//------------------------------------------BELOW IS THE JUNE CLICK FUNCTION-------------------------------------------



//------------------------------------------ABOVE IS THE JUNE CLICK FUNCTION-------------------------------------------
//------------------------------------------BELOW IS THE JULY CLICK FUNCTION-------------------------------------------



//------------------------------------------ABOVE IS THE JULY CLICK FUNCTION-------------------------------------------
//------------------------------------------BELOW IS THE AUGUST CLICK FUNCTION-------------------------------------------



//------------------------------------------ABOVE IS THE AUGUST CLICK FUNCTION-------------------------------------------
//------------------------------------------BELOW IS THE SEPTEMBER CLICK FUNCTION-------------------------------------------



//------------------------------------------ABOVE IS THE SEPTEMBER CLICK FUNCTION-------------------------------------------
//------------------------------------------BELOW IS THE OCTOBER CLICK FUNCTION-------------------------------------------



//------------------------------------------ABOVE IS THE OCTOBER CLICK FUNCTION-------------------------------------------
//------------------------------------------BELOW IS THE NOVEMBER CLICK FUNCTION-------------------------------------------



//------------------------------------------ABOVE IS THE NOVEMBER CLICK FUNCTION-------------------------------------------
//------------------------------------------BELOW IS THE DECEMBER CLICK FUNCTION-------------------------------------------



//------------------------------------------ABOVE IS THE DECEMBER CLICK FUNCTION-------------------------------------------