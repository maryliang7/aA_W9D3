class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setUpTowers();
    this.render();
    this.clickTower();
  }

  setUpTowers() {
    const $ul = $("<ul></ul>");
    this.$el.append($ul);
    while ($ul.children().length < 3) {
      const $li = $("<li></li>");
      $li.addClass("tiles");
      $ul.append($li);
    }
  }

  render() {

  }

  clickTower() {
  let clickCount = 0; 
    while (clickCount < 2) {
      $("ul").on("click", (e) => {
        let $li = $(e.target);
        $li.addClass()}
        }
    }); 

  }
}

module.exports = View;