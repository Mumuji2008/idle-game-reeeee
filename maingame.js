var player = {
    ClickerPrice: 0,
    cps:0,
    CurrentMoney: 0,
    clickers: 0,
}

function Save() {
    localStorage.setItem("GameSave", JSON.stringify(player));
  };

function Load() {
    JSON.parse(localStorage.getItem("GameSave"))
    if (savegame !== null) {
  player = savegame
    };
};

var savegame = Save();

function* Repeat(x) {
    for (var i = 0; i < x; i++)
      yield i;
  }



function refresh() {
    for (var i of Repeat(player.clickers)) {
        player.ClickerPrice = player.ClickerPrice + 1;
      };
    AddMoney(player.cps);
};


function AddMoney(number) {
    player.CurrentMoney = player.CurrentMoney + number;
    document.getElementById("CurrentMoney").innerHTML = player.CurrentMoney;
};

function Buy(id,amount) {

    if (id = 1) {
        player.CurrentMoney = player.CurrentMoney - player.ClickerPrice;
        player.clickers + amount;
        player.cps = player.cps + 1*amount;
    };
    refresh()
    document.getElementById("cps").innerHTML = player.cps;
};


window.setInterval(function(){
	
	refresh();
	
}, 1000);

//how many functions can you make before you go insane?