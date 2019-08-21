class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
  }

  bindEvents() {
    $("ul").on("click", (e) => {
      let $li = $(e.target);
      let player = this.game.currentPlayer;
      this.makeMove($li);
      $li.addClass(`${player}`)
      $li.text(`${player}`);
      $li.removeClass("squares-background");
    }); 

  }

  makeMove($square) { 
    
    if ($square.is("#1")) {
      this.game.playMove([0,0]);
    } else if ($square.is("#2")) {
      this.game.playMove([0,1]);
    } else if ($square.is("#3")) {
      this.game.playMove([0, 2]);
    } else if ($square.is("#4")) {
      this.game.playMove([1, 0]);
    } else if ($square.is("#5")) {
      this.game.playMove([1, 1]);
    } else if ($square.is("#6")) {
      this.game.playMove([1, 2]);
    } else if ($square.is("#7")) {
      this.game.playMove([2, 0]);
    } else if ($square.is("#8")) {
      this.game.playMove([2, 1]);
    } else if ($square.is("#9")) {
      this.game.playMove([2, 2]);
    }
    if (this.game.isOver() && this.game.winner()) {
      let $mess = $("<p></p>");
      let player = this.game.currentPlayer;
      $mess.text(`YOU WIN ${this.game.winner()}`);
      $("body").append($mess);

      // let $li = $("li");
      // if $li.hasClass(`${player}`) {
      //   $("li").addClass("win");
      // }

    }
    if (this.game.isOver()) {
      $("ul").off("click");

    }
  }

  setupBoard() {
    const $ul = $("<ul></ul");
    this.$el.append($ul);
    let idd = 1;
    while ($ul.children().length < 9) {
      const $li = $("<li></li>");
      $li.addClass("squares");
      $li.addClass("squares-background");
      $li.attr('id', `${idd}`);
      $ul.append($li);
      idd += 1;
    }
  }
}

module.exports = View;
