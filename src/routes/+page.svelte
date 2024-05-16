<script>
    const t = Array(500).fill().map((v,i) => i+1)
    function f(x) {
        var prim = true
        for (var i = 2; i < x; i++) {
            if (x % i == 0) {
                prim = false
            }
        }
        if (prim) return 'd'
    }
</script>
<h3>Eratoszthenészi szita</h3>
<hr>
<div class="c">
{#each t as x}
    <div class={f(x)}>{x}</div>
{/each}
</div>
<style>
    h3 {
        margin: 0px;
        color: rgb(54, 70, 23);
    }
    div.c { 
        display: grid;
        grid-template-columns: repeat(20, 1fr);
    }
    div.d { 
        background-color: rgb(94, 24, 24);
        font-weight: bold;
        color: beige;
        border-radius: 10px;
    }

</style>