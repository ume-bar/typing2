/*global Vue*/
var app = new Vue({
    el: "#app",
    data: {
        // データを書くところ
        // text: "",
        // a: 0,
        // b: 0,
        // c: 0,
        // price: 0,
        // total_price: 0,
        input: "",
        start_time: 0,
        words: "",
    },
    methods: {
        // メソッドを書くところ
        click() {
        },
        // login() {
        //     if (this.text == "password") { alert("パスワードが一致しました") }
        // },
        // calc() {
        //     this.c = this.a + this.b
        // },
        // calc_tax() {
        //     this.tax = Math.floor(this.price * 0.1),
        //         this.total_price = this.price + this.tax
        // },
        start() {
            var r = Math.floor(Math.random() * 3);
            if (r == 0) {
                this.words = "hello";
            } else if (r == 1) {
                this.words = "laketown";
            } else {
                this.words = "tottokohamutaro";
            }

            //　同じやり方↓

            this.words = ["hello", "laketown", "tottokohamutaro"][r]


            // this.words = "help";
            this.start_time = new Date();
        },

        finish() {
            if (this.words == this.input) {
                alert("正解" + (new Date(- this.start_time) + "ミリ秒でクリアしました"))
            }
        }
    },
});
